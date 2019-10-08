import React from 'react';
import camelCase from 'lodash/camelCase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, MusicPage } from '../../pages';

const getValidAlbumsRegexp = (albumService) => {
  const titles = albumService.albums.map(album => camelCase(album.title));
  return titles.join('|');
};

/**
 * App router.
 * @param {AlbumService} albumService
 */
export default function Router({ albumService }) {
  console.log(`/music/:albumTitle(${getValidAlbumsRegexp(albumService)})`);
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ HomePage } exact path="/" />
        <Route
          component={ MusicPage }
          data-testid='music-page-route'
          path={ `/music/:albumTitle(${getValidAlbumsRegexp(albumService)})` }
        />
      </Switch>
    </BrowserRouter>
  );
}

// TODO Handle not found routes
