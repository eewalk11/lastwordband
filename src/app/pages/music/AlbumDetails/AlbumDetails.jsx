import React from 'react';
import { MusicLinks } from './MusicLinks';
import { TrackList } from './TrackList';
import './AlbumDetails.scss';

/**
 * @param {Album} album
 */
export default function AlbumDetails({ album }) {
  return (
    <div className="album-details">
      <div className="album-details__row">
        <div className="album-details__col">
          <img
            alt={`${album.title} album artwork`}
            className="album-art"
            src={album.artwork}
          />
          <MusicLinks album={album} />
        </div>
        <div className="album-details__col">
          <TrackList album={album} />
        </div>
      </div>
    </div>
  );
}
