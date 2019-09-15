import React from 'react';
import { Footer, Header } from 'app/structure';
import './ContentWrapper.scss';

export default function ContentWrapper({ children }) {
  return (
    <div className='page-wrapper'>
      {/* These divs will be sized to fit the screen using JavaScript and will contain background
          images. There can be up to this many background images on a page */}
      <div className='bgwrapper1' />
      <div className='bgwrapper2' />

      <Header />
      <main className='content-wrapper'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
