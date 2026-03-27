import React, { useState } from 'react';
import { Card } from './ui/card';
import { ExternalLink, Github, RotateCcw } from 'lucide-react';
import TimelineView from './TimelineView';

const TeamFlipCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (member.isPlaceholder) {
    return (
      <Card className="p-12 border-2 border-dashed border-gray-300 bg-white rounded-xl h-[600px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-bold text-gray-400 mb-2">Team Member</h3>
          <p className="text-sm text-gray-400">Coming Soon</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="perspective-1000 h-[600px] md:h-[600px]">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <Card className="absolute w-full h-full backface-hidden bg-white border-2 border-gray-200 hover:border-blue-500 transition-all rounded-xl shadow-lg flex flex-col">
          {/* Profile Image - Fixed at top */}
          <div 
            className="relative h-48 md:h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-50 flex-shrink-0 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            {/* Top-left corner ribbon strip */}
            <div className="absolute top-0 left-0 w-32 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 transform origin-top-left rotate-[-35deg] translate-x-[-20px] translate-y-[20px] shadow-lg flex items-center justify-center">
              <span className="text-white text-[10px] font-bold tracking-wider">
                CLICK TO KNOW MORE
              </span>
            </div>
          </div>
          
          {/* Profile Info - Scrollable area - NO onClick here */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollable-content relative touch-pan-y">
            {/* Scroll indicator at top */}
            <div className="scroll-fade-top"></div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-2">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {member.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Key Contributions */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Contributions</h4>
              
              {member.keyContributions?.map((contrib, idx) => (
                <a
                  key={idx}
                  href={contrib.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={contrib.logo} alt={contrib.name} className="w-8 h-8 object-contain" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-gray-900">{contrib.name}</div>
                    <div className="text-xs text-gray-500">{contrib.commits} commits</div>
                  </div>
                  <Github className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </a>
              ))}
            </div>
            
            {/* Links */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200 mb-2">
              {member.portfolio && (
                <a 
                  href={member.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3 h-3" />
                  Portfolio
                </a>
              )}
              {member.github && (
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-3 h-3" />
                  GitHub
                </a>
              )}
            </div>
            
            {/* Scroll indicator at bottom */}
            <div className="scroll-fade-bottom"></div>
          </div>
        </Card>
        
        {/* Back Side */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl overflow-hidden shadow-lg">
          <div className="h-full flex flex-col p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Builder Journey</h3>
              <button 
                className="p-2 hover:bg-white/50 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                <RotateCcw className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <TimelineView achievements={member.achievements} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TeamFlipCard;
