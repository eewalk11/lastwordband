import React from 'react';
import headerLogoImage from './bin/headerLogo.png';
import './Header.scss';

export default function Header() {
  return (
    <header className="page-header">
      <h1>
        <a href="/">
          <img src={headerLogoImage} alt="Last Word" />
        </a>
      </h1>
      <h2>Colorado Death Thrash</h2>
    </header>
  );
}
