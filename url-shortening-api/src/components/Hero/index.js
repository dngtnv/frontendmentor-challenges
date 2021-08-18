import React from 'react';
import './index.scss';
import HeroImage from './HeroImage';
import HeroText from './HeroText';

function index() {
  return (
    <section className="hero">
      <div className="hero-section container container-pd-hero">
        <HeroImage />
        <HeroText />
      </div>
    </section>
  );
}

export default index;
