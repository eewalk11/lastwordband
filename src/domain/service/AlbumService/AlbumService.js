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
