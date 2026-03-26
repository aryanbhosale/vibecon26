import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default HomePage;
