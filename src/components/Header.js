import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="logo">
      <h1>Spacetagram</h1>
      <div className="subtitle__wrapper">
        <p className="subtitle">To infinity and beyond</p>
        <i class="fas fa-space-shuttle"></i>
      </div>
      <h2>
        Brought to you by{' '}
        <span className="logo__subheading-span">NASA API</span>
      </h2>
    </div>
  );
}

export default Header;
