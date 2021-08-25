import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import Burger from './Burger';
import Menu from './Menu';

function Navigation() {
  const [isOpen, setIsOpen] = useState(null);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`overlay ${isOpen ? 'overlay-visible' : ''}`} onClick={() => openMenu()}></div>
      <nav className="top-nav">
        <div className="left-side">
          <a href="/#" className="logo">
            <img src={logo} alt="Shortly logo"></img>
          </a>
          <div className="desktop-nav-links hide-for-mobile">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
          </div>
        </div>
        <Burger isOpen={isOpen} openMenu={openMenu} />
        <div className="right-side hide-for-mobile">
          <a href="/#" className="login-btn">
            Login
          </a>
          <a href="/#" className="signup-btn">
            Sign Up
          </a>
        </div>
      </nav>
      <Menu isOpen={isOpen} />
    </>
  );
}

export default Navigation;
