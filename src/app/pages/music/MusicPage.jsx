import React from 'react';
import { ContentWrapper } from 'app/structure';
import { AlbumDetails } from './AlbumDetails';
import { AlbumHeader } from './AlbumHeader';
import './MusicPage.scss';
import { Helmet } from 'react-helmet';

/**
 * Music page.
 * @param {Match} match React Router match object.
 * @param {AlbumService} albumService
 */
export default function MusicPage({ match, albumService }) {
  const album = albumService.findByTitle({ title: match.params.albumTitle });
  return (
    <ContentWrapper>
      <Helmet>
        <title>Music – {album.title} | Last Word</title>
        <meta
          name="description"
          content="Last Word music. Our new album, Halls of Madness, is here!"
        />
      </Helmet>
      <div className="music-page">
        <AlbumHeader album={album} />
        <AlbumDetails album={album} />
      </div>
    </ContentWrapper>
  );
}
