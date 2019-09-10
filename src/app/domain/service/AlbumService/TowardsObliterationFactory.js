import moment from 'moment';
import { Album } from '../../model';
import artwork from './bin/TowardsObliteration.jpg';
import artworkSmall from './bin/TowardsObliteration_small.jpg';

/**
 * Generates the Towards Obliteration Album entity.
 */
export default class TowardsObliterationFactory {
  /**
   * @param {IdFactory} idFactory
   * @param {TrackFactory} trackFactory
   */
  constructor({ idFactory, trackFactory }) {
    this.idFactory = idFactory;
    this.trackFactory = trackFactory;
  }

  /**
   * Generates the Album object.
   * @returns {Album}
   */
  newAlbum() {
    let album = new Album({
      title: 'Towards Obliteration',
      date: moment('2012-07-07').toDate(),
      artwork,
      artworkSmall
    });
    album = this.idFactory.generateAlbumId(album);
    return this.trackFactory.generateTracks({
      album,
      titles: [
        'Waking Dream',
        'Towards Obliteration',
        'Eyes of Pestilence',
        'Wasted',
        'Eden Burns'
      ]
    });
  }
}
