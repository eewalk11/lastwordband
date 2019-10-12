import React from 'react';
import AlbumLink from './AlbumLink';
import './AlbumLinkList.scss';

/**
 * A section containing links to each album page.
 * @param {AlbumService} albumService
 */
export default function AlbumLinkList({ albumService }) {
  return (
    <div className="home__album-link-list--wrapper">
      <ul>
        {albumService.sortByDate({ desc: true }).map(album => (
          <AlbumLink key={album.id} album={album} />
        ))}
      </ul>
    </div>
  );
}
