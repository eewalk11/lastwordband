import React from 'react';
import {
  AMAZON,
  CDBABY,
  GOOGLE,
  ITUNES,
  SPOTIFY,
  YOUTUBE
} from 'app/const';
import amazonIconImage from './bin/amazonIcon.png';
import cdbabyIconImage from './bin/cdbabyIcon.png';
import googleIconImage from './bin/googleIcon.png';
import itunesIconImage from './bin/itunesIcon.png';
import spotifyIconImage from './bin/spotifyIcon.png';
import youtubeIconImage from './bin/youtubeIcon.png';
import './MusicLinks.scss';

const linkData = [
  {
    image: itunesIconImage,
    key: ITUNES,
    text: 'Buy from iTunes'
  },
  {
    image: amazonIconImage,
    key: AMAZON,
    text: 'Buy from Amazon'
  },
  {
    image: googleIconImage,
    key: GOOGLE,
    text: 'Buy from Google Play'
  },
  {
    image: cdbabyIconImage,
    key: CDBABY,
    text: 'Buy from CD Baby'
  },
  {
    image: spotifyIconImage,
    key: SPOTIFY,
    text: 'Stream on Spotify'
  },
  {
    image: youtubeIconImage,
    key: YOUTUBE,
    text: 'Stream on YouTube'
  }
];

/**
 * @param {Album} album
 * @param {AlbumService} albumService
 */
export default function MusicLinks({ album, albumService }) {
  // Collect a subset of linkData that matches keys in the album's sales links
  const albumLinks = albumService.getSalesLinks(album);
  const filteredData = linkData.filter(data => Boolean(albumLinks[data.key]));

  // Only render a component if there is one or more link to display
  if (filteredData) {
    return (
      <ul className='album-links'>
        { filteredData.map(data => {
          const url = albumLinks[data.key];

          return (
            <li className='album-link'>
              <a href={ url }
                 rel='noopener noreferrer'
                 target='_blank'>
                <img alt={ data.text } className='album-link__icon' src={ data.image } />
              </a>
              <a className='album-link__text'
                 href={ url }
                 rel='noopener noreferrer'
                 target='_blank'>
                { data.text }
              </a>
            </li>
          );
        }) }
      </ul>
    );
  }
}
