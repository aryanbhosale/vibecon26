import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium mb-8 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Open Source Contributors & Builders</span>
          </div>
          
          <h1 className="text-7xl font-bold tracking-tight mb-8 leading-tight">
            Building the
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> future</span>
            <br />
            one commit at a time
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            We're <span className="font-semibold text-gray-900">devsoc</span> — a collective of developers contributing to major open-source projects and solving real-world problems through technology.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <a
              href="#team"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all group"
            >
              Meet the Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
