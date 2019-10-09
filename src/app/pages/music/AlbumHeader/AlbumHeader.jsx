import React from 'react';
import moment from 'moment';
import './AlbumHeader.scss';

/**
 * Album title and release date.
 * @param {Album} album
 */
export default function AlbumHeader({ album }) {
  const releaseDate = moment(album.date);
  return (
    <div className="album-header">
      <h2 className="album-header__title">
        { album.title }
      </h2>
      <time className="album-header__release-date"
            dateTime={ releaseDate.format('YYYY-MM-DD') }>
        { releaseDate.format('MMMM D, YYYY') }
      </time>
    </div>
  );
}
