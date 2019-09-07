import React from 'react';
import './header.scss';
import headerLogo from './header-logo.png';

const Header = () => (
  <header id='page-header'>
    <h1>
      <img src={headerLogo} alt='Last Word' />
    </h1>
    <h2>Colorado Death Thrash</h2>
  </header>
);

export default Header;
