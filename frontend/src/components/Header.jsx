import React from 'react';


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/devsoc-logo.png" alt="DevSoc" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold tracking-tight">DevSoc</span>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#team" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Team
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
