import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import Burger from './Burger';
import Menu from './Menu';

function Navigation() {
  const [status, setStatus] = useState('close');
  const openMenu = () => {
    //console.log(status);
    return setStatus(status === 'open' ? 'close' : 'open');
  };
  return (
    <>
      <div className={`overlay ${status === 'open' ? 'overlay-visible' : ''}`} onClick={() => openMenu()}></div>
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
        <Burger status={status} openMenu={openMenu} />
        <div className="right-side hide-for-mobile">
          <a href="/#" className="login-btn">
            Login
          </a>
          <a href="/#" className="signup-btn">
            Sign Up
          </a>
        </div>
      </nav>
      <Menu status={status} />
    </>
  );
}

export default Navigation;
