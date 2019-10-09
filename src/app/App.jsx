import React from 'react';
import { Helmet } from 'react-helmet';
import './App.scss';
import { Router } from './structure/Router';

export default function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Last Word | Colorado Death Thrash</title>
        <meta
          name="description"
          content="Last Word official website. Death/Thrash metal from Northern Colorado."
        />
      </Helmet>
      <Router />
    </div>
  );
}
