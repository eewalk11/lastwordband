import React from 'react';
import './Track.scss';

/**
 * Resets all lyric block heights to 0.
 */
const collapseAllLyrics = () => {
  document
    .querySelectorAll('.track__lyrics')
    .forEach(element => {
      element.style.height = '0';
    });
};

/**
 * Expands the newly selected lyric block.
 * @param {string} elemId ID of the newly selected lyric block element.
 */
const expandSelectedLyrics = ({ elemId }) => {
  const element = document.getElementById(elemId);
  element.style.height = 'auto';
  const height = `${element.offsetHeight}px`;
  element.style.height = '0';
  setTimeout(() => {
    element.style.height = height;
  }, 0);
};

/**
 * @param {Album} album
 * @param {boolean} isSelected
 * @param {function} setSelectedTrack
 * @param {Track} track
 * @param {TrackService} trackService
 */
export default function Track({
  album,
  isSelected,
  setSelectedTrack,
  track,
  trackService
}) {
  const lyricsId = `track__lyrics-${track.id}`;

  const clickHandler = () => {
    if (!isSelected) {
      collapseAllLyrics();
      expandSelectedLyrics({elemId: lyricsId});
      setSelectedTrack(track);
    }
  };

  return (
    <li className='track'>
      <span className='track__title'
            onClick={ clickHandler }>
        { track.title }
      </span>
      <span className='track__lyrics' id={ lyricsId }>
        { trackService.getLyrics({ album, track }) }
      </span>
    </li>
  );
}
