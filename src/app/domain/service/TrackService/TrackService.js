import camelCase from 'lodash/camelCase';
import get from 'lodash/get';
import lyrics from './lyrics';
import LyricsNotFoundError from './LyricsNotFoundError';

/**
 * Service for managing track data.
 */
export default class TrackService {
  /**
   * Gets the lyrics for a track.
   * @param {Album} album Album the track belongs to.
   * @param {string} trackTitle Track title.
   */
  getLyrics({ album, trackTitle }) {
    const path = `${camelCase(album.title)}.${camelCase(trackTitle)}`;
    const trackLyrics = get(lyrics, path);
    if (trackLyrics === undefined) {
      throw new LyricsNotFoundError(path);
    }
    return trackLyrics;
  };
}
