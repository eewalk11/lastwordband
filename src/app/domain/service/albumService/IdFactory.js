import uuidV5 from 'uuid/v5';
import { Album, Track, UUID_NAMESPACE } from 'app';

/**
 * Factory to generate IDs for new models.
 */
export default class IdFactory {
  /**
   * Generates an Album with a consistent UUID applied.
   * @param {Album} album Album for which to generate an ID.
   * @returns {Album} Updated album.
   */
  generateAlbumId(album) {
    if (!album || !album.title) {
      throw new Error('Album title required to generate an Album ID');
    }
    return new Album({
      ...album,
      id: uuidV5(album.title, UUID_NAMESPACE)
    });
  };

  /**
   * Generates a Track with a consistent UUID applied.
   * @param {Album} album Album that the track belongs to.
   * @param {Track} track Track with all data except for an ID.
   * @returns {Track} Updated track.
   */
  generateTrackId(album, track) {
    if (!album || !album.id) {
      throw new Error('Album ID required to generate a Track ID');
    }
    if (!track || !track.number) {
      throw new Error('Track number required to generate a Track ID');
    }
    return new Track({
      ...track,
      id: uuidV5(`${album.id}:${track.number}`, UUID_NAMESPACE)
    });
  };
}
