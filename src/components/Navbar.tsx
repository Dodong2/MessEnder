// src/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-800 shadow-md fixed top-0 left-0 right-0 z-10">
    <div className="container mx-auto flex items-center justify-between p-4">
      <div className="text-xl font-bold text-white">
        <a href="#">Logo</a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-200 hover:text-gray-400">Chats</a>
        <a href="#" className="text-gray-200 hover:text-gray-400">Settings</a>
        <a href="#" className="text-gray-200 hover:text-gray-400">Logout</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
