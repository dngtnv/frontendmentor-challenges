import React from 'react';
import HeroSection from './Hero/index';
import AdvSection from './Advanced/index';
import Boost from './Boost/index';

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
