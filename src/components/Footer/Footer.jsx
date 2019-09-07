import React from 'react';
import './Footer.scss';
import SocialNav from './SocialNav';

const CONTACT_EMAIL = 'contact@lastwordband.com';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="page-footer">
      <SocialNav />
      <div className="copyright">
        <span>
          <a href={`mailto:${CONTACT_EMAIL}`} target="_top">
            {CONTACT_EMAIL}
          </a>
        </span>
        <span>
          &copy; {currentYear} – Last Word
        </span>
      </div>
    </footer>
  );
};

export default Footer;
