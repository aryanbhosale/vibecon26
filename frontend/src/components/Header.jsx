import React from 'react';
import { Code2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Code2 className="w-6 h-6" />
          <span className="text-xl font-semibold tracking-tight">ex-devsoc</span>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#team" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Team
          </a>
          <a 
            href="https://www.vibecon.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-900 px-4 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
          >
            VibeHack 2025
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
