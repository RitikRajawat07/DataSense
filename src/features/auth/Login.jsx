import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom"; // Better than window.location

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser({ username, password });

      localStorage.setItem("AccessToken", data.accessToken);
      localStorage.setItem("RefreshToken", data.refreshToken);

      if (data.username) {
        localStorage.setItem("userName",(data.username));
      }

      navigate("/dashboard");

    } 
    catch (err) {
      if (err.isNetworkError) {
        setError("Network error. Please check your internet connection.");
      } else if (err.status === 401) {
        setError("Invalid username or password.");
      } else if (err.status === 403) {
        setError("Your account has been locked. Contact support.");
      } else if (err.status === 429) {
        setError("Too many login attempts. Please try again later.");
      } else if (err.status >= 500) {
        setError("Server error. Please try again later.");
      } else {
        setError(err.message || "Login failed. Please try again.");
      }

      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to DataSense
        </h2>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading || !username || !password}
          className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Logging in...
            </span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;
