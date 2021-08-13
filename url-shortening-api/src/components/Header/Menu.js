import React from 'react';

export default function Menu({ status }) {
  return (
    <div className={`mobile-nav-links hide-for-desktop ${status === 'open' ? 'slide-down' : 'slide-up'}`}>
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
