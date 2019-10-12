import React from 'react';
import camelCase from 'lodash/camelCase';
import './AlbumLink.scss';

/**
 * Link to an album page.
 * @param {Album} album
 */
export default function AlbumLink({ album }) {
  const uri = `/music/${camelCase(album.title)}`;
  return (
    <li className="home__album-link">
      <cite className="home__album-link--title">
        <a href={uri}>{album.title}</a>
      </cite>
      <a className="home__album-link--artwork" href={uri}>
        <img alt={`${album.title} artwork`} src={album.artworkSmall} />
      </a>
    </li>
  );
}
