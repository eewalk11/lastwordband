import React, { Fragment } from 'react';
import { AlbumLinkList } from './AlbumLinkList';
import { MediaPlayer } from './MediaPlayer';

export default function HomePage() {
  return (
    <Fragment>
      <MediaPlayer />
      <AlbumLinkList />
    </Fragment>
  );
}
