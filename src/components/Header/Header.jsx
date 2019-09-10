import React from 'react';
import headerLogoImage from './bin/headerLogo.png';
import './Header.scss';

export default function Header() {
  return (
    <header className="page-header">
      <h1>
        <img src={headerLogoImage} alt="Last Word" />
      </h1>
      <h2>Colorado Death Thrash</h2>
    </header>
  );
}
