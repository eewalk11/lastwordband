import React from 'react';
import './App.scss';
import Router from './Router';
import { ContentWrapper } from './components';

export default function App() {
  return (
    <div className="app">
      <ContentWrapper>
        <Router />
      </ContentWrapper>
    </div>
  );
}
