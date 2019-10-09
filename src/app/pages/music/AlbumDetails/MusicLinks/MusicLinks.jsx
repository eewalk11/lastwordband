import React from 'react';
import {
  AMAZON,
  CDBABY,
  GOOGLE,
  ITUNES,
  SPOTIFY,
  YOUTUBE
} from 'app/const';
import AlbumLink from './AlbumLink';
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

  // Do not render a component if there are no links to display
  if (!filteredData.length) {
    return null;
  }

  return (
    <ul className='album-links'>
      { filteredData.map(data =>
          <AlbumLink
            { ...data }
            key={ data.key }
            url={ albumLinks[data.key] }
          />
      ) }
    </ul>
  );
}
