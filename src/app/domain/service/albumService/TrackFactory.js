import { Album, Track } from '../../model';

/**
 * Generates track objects from an array of track titles.
 * @param {Album} album Album the tracks belong to.
 * @param {string[]} trackTitles Track titles to map to track objects.
 * @param {IdFactory} idFactory
 * @returns {Track[]} Array of tracks.
 */
const mapTrackTitles = ({ album, trackTitles, idFactory }) => {
  return trackTitles.map((trackTitle, i) => {
    const track = new Track({
      number: i + 1,
      title: trackTitle
    });
    return idFactory.generateTrackId(album, track);
  });
};

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
   * @param {string[]} trackTitles Array of track titles in order on the album.
   * @returns {Album} Updated album.
   */
  generateTracks({ album, trackTitles }) {
    return new Album({
      ...album,
      tracks: mapTrackTitles({
        album,
        trackTitles,
        idFactory: this.idFactory
      })
    });
  }
}
