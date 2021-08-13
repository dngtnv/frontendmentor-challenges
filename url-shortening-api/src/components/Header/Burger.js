import React from 'react';

export default function Burger({ status, openMenu }) {
  return (
    <a href="/#" className="header-toggle hide-for-desktop" role="button" onClick={openMenu}>
      <span className={status}></span>
      <span className={status}></span>
      <span className={status}></span>
    </a>
  );
}
