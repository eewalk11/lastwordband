import { FatalError } from 'app/error';

/**
 * Error to be thrown when a track's lyric file cannot be found.
 */
export default class LyricsNotFoundError extends FatalError {
  /**
   * @param {string} expectedPath The expected lookup path for the lyrics that
   *        could not be found.
   */
  constructor(expectedPath) {
    super(`Failed to load lyrics for ${expectedPath}`);
  }
}
