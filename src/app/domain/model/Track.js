export default class Track {
  constructor({ id, number, title }) {
    /**
     * Track ID (UUID).
     * @type {string}
     */
    this.id = id;

    /**
     * Track number on the album.
     * @type {number}
     */
    this.number = number;

    /**
     * Track title.
     * @type {string}
     */
    this.title = title;
  }
}
