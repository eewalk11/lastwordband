import React from 'react';
import './App.scss';
import { Router } from './structure/Router';
import { ContentWrapper } from './structure';

export default function App() {
  return (
    <div className="app">
      <ContentWrapper>
        <Router />
      </ContentWrapper>
    </div>
  );
}
