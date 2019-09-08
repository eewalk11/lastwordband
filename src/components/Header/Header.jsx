import React from 'react';
import headerLogoImage from './bin/headerLogo.png';
import './Header.scss';

const Header = () => (
  <header className="page-header">
    <h1>
      <img src={headerLogoImage} alt="Last Word" />
    </h1>
    <h2>Colorado Death Thrash</h2>
  </header>
);

export default Header;
