import React from 'react';
import { ExternalLink } from 'lucide-react';

const TimelineView = ({ achievements }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
      
      <div className="space-y-8">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="relative pl-16">
            {/* Timeline Dot */}
            <div className="absolute left-4 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-50 shadow-lg"></div>
            
            {/* Content Card */}
            <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-2">
                {achievement.logo && (
                  <div className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded flex items-center justify-center p-1.5">
                    {achievement.logo.type === 'image' ? (
                      <img src={achievement.logo.src} alt={achievement.organization} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-xs font-bold text-gray-600">{achievement.logo.text}</span>
                    )}
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-blue-600 font-medium">{achievement.date}</span>
                    {achievement.organization && (
                      <span className="text-xs font-semibold text-gray-700">{achievement.organization}</span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 mb-2">{achievement.title}</h4>
                </div>
              </div>
              
              {achievement.description && (
                <p className="text-xs text-gray-600 leading-relaxed mb-2">{achievement.description}</p>
              )}
              
              {achievement.highlights && achievement.highlights.length > 0 && (
                <ul className="space-y-1 mb-2">
                  {achievement.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="text-blue-500 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {achievement.impact && (
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <p className="text-xs font-semibold text-blue-700">{achievement.impact}</p>
                </div>
              )}
              
              {achievement.links && achievement.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {achievement.links.map((link, lIdx) => (
                    <a 
                      key={lIdx}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3" />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineView;
