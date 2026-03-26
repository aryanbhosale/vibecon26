import React from 'react';
import { Code2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">ex-devsoc</span>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#team" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Team
          </a>
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
