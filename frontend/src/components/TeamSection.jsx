import React from 'react';
import TeamFlipCard from './TeamFlipCard';
import { teamData } from '../data/mockData';

const TeamSection = () => {
  return (
    <section id="team" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4">
            Meet the <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-lg text-gray-600">Click on cards to flip and explore our journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <TeamFlipCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
