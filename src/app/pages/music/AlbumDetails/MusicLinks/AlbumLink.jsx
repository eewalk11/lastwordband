import React from 'react';
import './AlbumLink.scss';

/**
 * Link to purchase or stream an album.
 * @param {string} image Link icon image path.
 * @param {string} text Link text.
 * @param {string} url Link URL.
 */
export default function AlbumLink({ image, text, url }) {
  return (
    <li className='album-link'>
      <a href={ url }
         rel='noopener noreferrer'
         target='_blank'>
        <img alt={ text } className='album-link__icon' src={ image } />
      </a>
      <a className='album-link__text'
         href={ url }
         rel='noopener noreferrer'
         target='_blank'>
        { text }
      </a>
    </li>
  );
}
