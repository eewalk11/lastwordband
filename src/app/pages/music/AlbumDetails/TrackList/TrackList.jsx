import React, { useState } from 'react';
import get from 'lodash/get';
import Track from './Track';
import './TrackList.scss';

/**
 * @param {Album} album
 * @param {TrackService} trackService
 */
export default function TrackList({ album, trackService }) {
  const [selectedTrack, setSelectedTrack] = useState(null);
  return (
    <ol className='tracklist'>
      { album.tracks.map(track =>
        <Track album={ album }
               isSelected={ get(selectedTrack, 'id') === track.id }
               key={ track.id }
               setSelectedTrack={ setSelectedTrack }
               track={ track }
               trackService={ trackService }
        />
      ) }
    </ol>
  );
}
