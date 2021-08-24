import React from 'react';
import AdvSection from './Advanced/index';
import Boost from './Boost';
import HeroSection from './Hero/index';

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
