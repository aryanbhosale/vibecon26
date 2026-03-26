import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-gray-100 text-sm font-medium mb-6">
            Competing at VibeHack 2025
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6 leading-tight">
            Building the future,
            <br />
            <span className="text-gray-400">one commit at a time.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're ex-devsoc — a team of builders, contributors, and problem solvers passionate about creating impactful technology.
          </p>
          <a 
            href="#team" 
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors group"
          >
            Meet the Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
