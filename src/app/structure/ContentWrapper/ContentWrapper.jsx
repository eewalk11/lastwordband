import React from 'react';
import { Footer, Header } from 'app/structure';
import './ContentWrapper.scss';

/**
 * Wrapper for content on a page.
 * This should be included in each <Page /> component.
 * @param {Component[]} children
 * @param location
 */
export default function ContentWrapper({ children, location }) {
  return (
    <div className='page-wrapper'>
      <div className='bg-wrapper-1' data-route={location.pathname} />
      <div className='bg-wrapper-2' data-route={location.pathname} />

      <Header />
      <main className='content-wrapper'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
