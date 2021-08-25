import React from 'react';

export default function Burger({ isOpen, openMenu }) {
  return (
    <a href="/#" className={`header-toggle hide-for-desktop ${isOpen ? 'open' : ''}`} role="button" onClick={openMenu}>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
}
