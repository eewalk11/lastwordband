import React from 'react';
import './TrackList.scss';

// TODO click event on track title to expand/contract lyrics

/**
 * @param {Album} album
 * @param {TrackService} trackService
 */
export default function TrackList({ album, trackService }) {
  return (
    <ol className='tracklist'>
      {album.tracks.map(track => (
        <li className='track'>
          <span className='track__title'>{track.title}</span>
          <span className='track__lyrics'>
            { trackService.getLyrics({ album, track }) }
          </span>
        </li>
      ))}
    </ol>
  );
}
