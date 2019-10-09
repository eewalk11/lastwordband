import { FatalError } from 'app/error';

/**
 * Error to be thrown when an album cannot be found by title.
 */
export default class InvalidAlbumTitleError extends FatalError {
  /**
   * @param {string} title Title that could not be found.
   */
  constructor(title) {
    super(`Invalid album title: ${title}`);
  }
}
