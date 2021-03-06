import moment from 'moment';
import artwork from './bin/HallsOfMadness.jpg';
import artworkSmall from './bin/HallsOfMadness_small.jpg';
import { Album } from '../../model';
import { HALLS_OF_MADNESS } from 'app/const';

/**
 * Generates the Halls of Madness Album entity.
 */
export default class HallsOfMadnessFactory {
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
      title: HALLS_OF_MADNESS,
      date: moment('2016-06-09').toDate(),
      artwork,
      artworkSmall
    });
    album = this.idFactory.generateAlbumId(album);
    return this.trackFactory.generateTracks({
      album,
      trackTitles: [
        'GOBOSI',
        'After Me the Floods',
        'Subsequential Revelation',
        'Eyes of Pestilence',
        'Halls of Madness',
        'Ephemeral Seas',
        'Through Twisted Trees',
        'Eden Burns',
        'Towards Obliteration',
        'The Grand Coercion',
        'Awakening',
        'Possessing the Wretch'
      ]
    });
  }
}
