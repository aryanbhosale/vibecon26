import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { teamData } from '../data/mockData';

const TeamSection = () => {
  return (
    <section id="team" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-600">Builders contributing to open source and solving real-world problems.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {teamData.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
