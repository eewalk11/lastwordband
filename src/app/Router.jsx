import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, MusicPage } from './pages';

// TODO get album titles that match

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/music/:albumTitle" component={MusicPage} />
      </Switch>
    </BrowserRouter>
  );
}
