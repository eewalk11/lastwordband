import { FatalError } from 'app/error';

/**
 * Error to be thrown when an album's sales links cannot be found.
 */
export default class SalesLinksNotFoundError extends FatalError {
  /**
   * @param {Album} album Album that sales link data could not be found for.
   */
  constructor(album) {
    super(`Failed to load sales links for album: ${album.title}`);
  }
}
