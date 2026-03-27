import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">devsoc</h3>
            <p className="text-gray-400 leading-relaxed">
              A team of passionate builders creating impactful solutions and contributing to major open-source projects.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
            <div className="space-y-2">
              <a href="#team" className="block text-gray-400 hover:text-white transition-colors">
                Team
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Competing at</h4>
            <a 
              href="https://www.vibecon.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Vibecon 2026
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 devsoc. Built with love for Vibecon.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
