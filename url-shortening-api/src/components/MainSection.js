import React from 'react';
import AdvSection from './Advanced/Index';
import Boost from './Boost/Index';
import HeroSection from './Hero/Index';

function MainSection() {
  return (
    <main>
      <HeroSection />
      <AdvSection />
      <Boost />
    </main>
  );
}

export default MainSection;
