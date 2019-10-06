import camelCase from 'lodash/camelCase';
import get from 'lodash/get';
import { lyrics } from './lyrics';
import LyricsNotFoundError from './LyricsNotFoundError';

/**
 * Service for managing track data.
 */
export default class TrackService {
  /**
   * Gets the lyrics for a track.
   * @param {Album} album Album the track belongs to.
   * @param {Track} track Track to get lyrics for.
   */
  getLyrics({ album, track }) {
    const path = `${camelCase(album.title)}.${camelCase(track.title)}`;
    const trackLyrics = get(lyrics, path);
    if (trackLyrics === undefined) {
      throw new LyricsNotFoundError(path);
    }
    return trackLyrics;
  };
}
