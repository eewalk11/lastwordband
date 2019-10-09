import camelCase from 'lodash/camelCase';
import salesLinks from './salesLinks';
import InvalidAlbumTitleError from './InvalidAlbumTitleError';
import SalesLinksNotFoundError from './SalesLinksNotFoundError';

/**
 * Service for managing Album data.
 */
export default class AlbumService {
  /**
   * @param {Array} albumFactories Array of factories to generate each album.
   */
  constructor({ albumFactories }) {
    this.albumFactories = albumFactories;
    this._albums = null;
  }

  /**
   * An array containing all albums.
   * @returns {Album[]} Array of albums.
   */
  get albums() {
    let albums = this._albums;
    if (!albums) {
      albums = this.albumFactories.map(factory => factory.newAlbum());
      this._albums = albums;
    }
    return albums;
  }

  /**
   * Finds an album by its title.
   * @param {string} title Album title to search for.
   * @param {boolean} [isCamelCase] Optionally indicates if the given title is
   *        in camelCase - defaults to true.
   * @returns {Album} The album with the given title.
   * @throws {InvalidAlbumTitleError} If the album cannot be found.
   */
  findByTitle({ title, isCamelCase = true }) {
    const album = this.albums.find(album => {
      const cmpTitle = isCamelCase ? camelCase(album.title) : album.title;
      return title === cmpTitle;
    });
    if (!album) {
      throw new InvalidAlbumTitleError(title);
    }
    return album;
  }

  /**
   * Gets an object with site constants as keys and URLs as values for links
   * to digital sales pages for an album.
   * @param {Album} album
   * @returns {Object}
   * @throws {SalesLinksNotFoundError} If there are no sales links configured
   *         for the given album.
   */
  getSalesLinks(album) {
    const links = salesLinks[camelCase(album.title)];
    if (!links) {
      throw new SalesLinksNotFoundError(album);
    }
    return links;
  }

  /**
   * Sorts albums by date.
   * @param {Album[]} [albums] Albums to sort, defaults to all albums.
   * @param {boolean} [desc] Sort in descending order, defaults to true.
   * @returns {Album[]} Sorted array of given albums.
   */
  sortByDate({ albums = this.albums, desc = true } = {}) {
    return [...albums].sort((a, b) => {
      let val = 0;
      if (a.date < b.date) {
        val = -1;
      } else if (b.date < a.date) {
        val = 1;
      }
      return desc ? val * -1 : val;
    });
  }
}
