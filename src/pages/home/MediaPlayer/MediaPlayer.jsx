import React from 'react';
import './MediaPlayer.scss';

/**
 * Embedded ReverbNation media player.
 */
export default function MediaPlayer() {
  return (
    <div className='home__media-player--wrapper'>
      <h2>
        <cite>Halls of Madness</cite>
      </h2>
      <p>
        Listen to the title track off our album, &quot;<cite>Halls of Madness</cite>&quot;. Pick up a copy at one of our
        upcoming shows or
        {' '}
        <a className='home__media-player--link' href='/music/HallsOfMadness#album-purchase-links'>click here</a>
        {' '}
        for download links.
      </p>
      <iframe className='home__media-player' scrolling='no'
              src='https://www.reverbnation.com/widget_code/html_widget/artist_1887055?widget_id=55&pwc[song_ids]=26229507&context_type=song&spoid=artist_1887055&pwc[size]=small&pwc[color]=light'
      />
    </div>
  );
}
