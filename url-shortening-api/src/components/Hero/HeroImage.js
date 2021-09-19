import React from 'react';
import img from '../../images/illustration-working.svg';

export default function HeroImage() {
  return (
    <div className="hero-image">
      <img src={img} alt="Illustration working" />
    </div>
  );
}
