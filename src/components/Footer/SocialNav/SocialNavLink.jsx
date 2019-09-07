import React from 'react';
import './SocialNavLink.scss';

/**
 * A footer image that links to a social media page.
 */
const SocialNavLink = ({ image, title, url }) => (
  <li className="social-nav-link">
    <a href={url} target="_blank">
      <img src={image} alt={title} title={title} />
    </a>
  </li>
);

export default SocialNavLink;
