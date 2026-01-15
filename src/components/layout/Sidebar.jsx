const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">DataSense</h2>

      <nav className="space-y-3">
        <div className="cursor-pointer hover:text-gray-300">Dashboard</div>
        <div className="cursor-pointer hover:text-gray-300">Users</div>
        <div className="cursor-pointer hover:text-gray-300">Products</div>
        <div className="cursor-pointer hover:text-gray-300">Settings</div>
      </nav>
    </aside>
  );
};

export default Sidebar;
