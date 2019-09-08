import { Album, Track } from '../../model';
import IdFactory from './IdFactory';

const mapTrackTitles = (album, titles, idFactory) =>
  titles.map((title, i) => {
    const track = new Track({
      number: i + 1,
      title
    });
    return idFactory.generateTrackId(album, track);
  });

/**
 * Factory for generating Track data for Albums.
 */
export default class TrackFactory {
  /**
   * @param {IdFactory} idFactory
   */
  constructor({ idFactory }) {
    this.idFactory = idFactory;
  }

  /**
   * Generates an array of Track objects for an Album.
   * @param {Album} album Album to apply tracks to.
   * @param {string[]} titles Array of track titles in order on the album.
   * @returns {Album} Updated album.
   */
  generateTracks({ album, titles }) {
    return new Album({
      ...album,
      tracks: mapTrackTitles(album, titles, this.idFactory)
    });
  }
}
