export default class Track {
	constructor({ id, lyrics, number, title }) {
		/**
		 * Track ID (UUID).
		 * @type {string}
		 */
		this.id = id;

		/**
		 * Track lyrics.
		 * @type {string}
		 */
		this.lyrics = lyrics;

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
