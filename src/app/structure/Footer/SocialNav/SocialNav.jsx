import React from 'react';
import SocialNavLink from './SocialNavLink';
import facebookImage from './bin/facebook.png';
import iTunesImage from './bin/itunes.png';
import reverbNationImage from './bin/reverbNation.png';
import spotifyImage from './bin/spotify.png';
import youtubeImage from './bin/youtube.png';
import './SocialNav.scss';

/**
 * A footer navigation bar containing links to social media pages.
 */
export default function SocialNav() {
  return (
    <nav className="social-nav">
      <ul>
        <SocialNavLink
          url="https://facebook.com/WeAreLastWord"
          image={facebookImage}
          title="Facebook"
        />
        <SocialNavLink
          url="https://reverbnation.com/WeAreLastWord"
          image={reverbNationImage}
          title="Reverb Nation"
        />
      </ul>
      <ul>
        <SocialNavLink
          url="https://itunes.apple.com/us/artist/last-word/id1013317648"
          image={iTunesImage}
          title="iTunes"
        />
        <SocialNavLink
          url="https://play.spotify.com/album/6X8aJA2Xee26qKYCbvarbg"
          image={spotifyImage}
          title="Spotify"
        />
        <SocialNavLink
          url="https://www.youtube.com/results?search_query=%22last+word%22+%22halls+of+madness%22"
          image={youtubeImage}
          title="YouTube"
        />
      </ul>
    </nav>
  );
}
