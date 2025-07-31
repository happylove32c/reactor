import React from 'react'

const Topbar = () => {
  return (
    <div className="bg-purple-600 text-white text-sm py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left content */}
        <div>
          <span>📞 +234 800 000 0000</span>
        </div>

        {/* Right content */}
        <div className="space-x-4">
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
