import React from 'react';
import { Card } from './ui/card';

const AchievementCard = ({ achievement }) => {
  return (
    <Card className="p-6 bg-gray-50 border-l-2 border-gray-900 hover:bg-gray-100 transition-colors">
      <div className="flex items-start gap-4">
        {achievement.logo && (
          <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center p-2">
            {achievement.logo.type === 'image' ? (
              <img src={achievement.logo.src} alt={achievement.organization} className="w-full h-full object-contain" />
            ) : (
              <span className="text-xs font-bold text-gray-600">{achievement.logo.text}</span>
            )}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-gray-500">{achievement.date}</span>
            {achievement.organization && (
              <span className="text-xs font-medium text-gray-900">{achievement.organization}</span>
            )}
          </div>
          
          <h5 className="font-semibold mb-2 leading-snug">{achievement.title}</h5>
          
          {achievement.description && (
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{achievement.description}</p>
          )}
          
          {achievement.highlights && achievement.highlights.length > 0 && (
            <ul className="space-y-1.5">
              {achievement.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          )}
          
          {achievement.impact && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-900">{achievement.impact}</p>
            </div>
          )}
          
          {achievement.links && achievement.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-3">
              {achievement.links.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-mono underline hover:no-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AchievementCard;
