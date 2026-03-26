import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ex-devsoc</h3>
            <p className="text-gray-400 max-w-md">
              A team of passionate builders creating impactful solutions and contributing to open source.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h4 className="font-medium mb-4">Competing at</h4>
            <a 
              href="https://www.vibecon.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl font-bold hover:text-gray-300 transition-colors"
            >
              VibeHack 2025
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 ex-devsoc. Built with passion.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
