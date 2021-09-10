import React from 'react';

export default function Menu({ isOpen }) {
  const renderClass = () => {
    if (isOpen === null) return '';
    if (isOpen === true) return 'open';
    if (isOpen === false) return 'closed';
  };
  return (
    <div className={`mobile-nav-links hide-for-desktop ${renderClass()}`}>
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#resources">Resources</a>
      <div className="btn-bottom">
        <a href="/#" className="login-btn">
          Login
        </a>
        <a href="/#" className="signup-btn">
          Sign Up
        </a>
      </div>
    </div>
  );
}
