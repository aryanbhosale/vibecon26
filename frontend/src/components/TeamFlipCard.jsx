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
    <div className="perspective-1000">
      <div 
        className={`relative w-full transition-transform duration-700 transform-style-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <Card className="relative w-full backface-hidden bg-white border-2 border-gray-200 hover:border-blue-500 transition-all rounded-xl shadow-lg flex flex-col">
          {/* Profile Image - Fixed at top */}
          <div className="relative h-48 md:h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-50 flex-shrink-0">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            {/* Top-left corner ribbon strip */}
            <div className="absolute top-0 left-0 overflow-hidden w-24 h-24 pointer-events-none">
              <div className="absolute top-0 left-0 w-32 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 transform origin-center -rotate-45 translate-x-[-32px] translate-y-[20px] shadow-lg flex items-center justify-center">
                <span className="text-white text-[8px] font-bold tracking-tight leading-tight text-center">
                  CLICK TO<br/>KNOW MORE
                </span>
              </div>
            </div>
          </div>
          
          {/* Profile Info - Auto height, no scrolling */}
          <div className="p-4 md:p-6">
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
            {member.keyContributions && member.keyContributions.length > 0 && (
              <div className="space-y-3 mb-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Contributions</h4>
                
                {member.keyContributions.map((contrib, idx) => (
                  <a
                    key={idx}
                    href={contrib.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img src={contrib.logo} alt={contrib.name} className="w-8 h-8 object-contain flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-gray-900">{contrib.name}</div>
                      <div className="text-xs text-gray-500">{contrib.commits}</div>
                    </div>
                    <Github className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                  </a>
                ))}
              </div>
            )}
            
            {/* Links */}
            {(member.portfolio || member.github) && (
              <div className="flex gap-3 pt-4 border-t border-gray-200">
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
            )}
          </div>
        </Card>
        
        {/* Back Side */}
        <Card className="absolute top-0 left-0 w-full min-h-[600px] backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl overflow-hidden shadow-lg">
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
