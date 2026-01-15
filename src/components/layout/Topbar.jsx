const Topbar = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Hello, User</span>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
};

export default Topbar;
