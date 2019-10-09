import React  from 'react';
import { ContentWrapper } from 'app/structure';
import { AlbumDetails } from './AlbumDetails';
import { AlbumHeader } from './AlbumHeader';
import './MusicPage.scss';

/**
 * Music page.
 * @param {Match} match React Router match object.
 * @param {AlbumService} albumService
 */
export default function MusicPage({ match, albumService }) {
  const album = albumService.findByTitle({ title: match.params.albumTitle });
  return (
    <ContentWrapper>
      <div className='music-page'>
        <AlbumHeader album={album} />
        <AlbumDetails album={album} />
      </div>
    </ContentWrapper>
  );
}
