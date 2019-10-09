import React from 'react';
import './SocialNavLink.scss';

/**
 * A footer image that links to a social media page.
 */
export default function SocialNavLink({ image, title, url }) {
  return (
    <li className="social-nav-link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} title={title} />
      </a>
    </li>
  );
}
