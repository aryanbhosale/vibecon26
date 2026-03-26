import React from 'react';
import { Card } from './ui/card';
import { ExternalLink, Github } from 'lucide-react';
import AchievementCard from './AchievementCard';

const TeamMemberCard = ({ member }) => {
  if (member.isPlaceholder) {
    return (
      <Card className="p-12 border-2 border-dashed border-gray-300 bg-white">
        <div className="text-center">
          <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-6"></div>
          <h3 className="text-2xl font-bold text-gray-400 mb-2">Team Member</h3>
          <p className="text-gray-400">Coming Soon</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 md:p-12 bg-white border border-gray-200 hover:border-gray-900 transition-all">
      <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12">
        {/* Left Column - Profile */}
        <div className="space-y-6">
          <div className="relative">
            <img 
              src={member.photo} 
              alt={member.name}
              className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-2">{member.name}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {member.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              {member.portfolio && (
                <a 
                  href={member.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Portfolio
                </a>
              )}
              {member.github && (
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Right Column - Journey */}
        <div>
          <h4 className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-wider">Builder Journey</h4>
          <div className="space-y-4">
            {member.achievements.map((achievement, idx) => (
              <AchievementCard key={idx} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
