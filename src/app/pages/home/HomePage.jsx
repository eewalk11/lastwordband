import React from 'react';
import { ContentWrapper } from 'app/structure';
import { AlbumLinkList } from './AlbumLinkList';
import { MediaPlayer } from './MediaPlayer';

export default function HomePage() {
  return (
    <ContentWrapper>
      <MediaPlayer />
      <AlbumLinkList />
    </ContentWrapper>
  );
}
