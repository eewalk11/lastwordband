/**
 * Service for managing Album data.
 */
export default class AlbumService {
  /**
   * @param {Array} albumFactories Array of factories to generate each album.
   */
  constructor({ albumFactories }) {
    this.albumFactories = albumFactories;
  }

  /**
   * An array containing all albums.
   * @returns {Album[]} Array of albums.
   */
  get albums() {
    return this.albumFactories.map(factory => factory.newAlbum());
  }

  /**
   * Sorts albums by date.
   * @param {Album[]} [albums] Albums to sort, defaults to all albums.
   * @param {boolean} [desc] Sort in descending order, defaults to true.
   * @returns {Album[]} Sorted array of given albums.
   */
  sortByDate({ albums = this.albums , desc = true }) {
    return albums.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (b.date < a.date) {
        return 1;
      }
      return 0;
    });
  }
}
