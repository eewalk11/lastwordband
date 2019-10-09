export default class Album {
	constructor({ artwork, artworkSmall, date, id, title, tracks }) {
		/**
		 * This album's artwork file.
		 * @type {File}
		 */
		this.artwork = artwork;

		/**
		 * This album's small artwork file.
		 * @type {File}
		 */
		this.artworkSmall = artworkSmall;

		/**
		 * Production date.
		 * @type {Date}
		 */
		this.date = date;

		/**
		 * Album ID (UUID).
		 * @type {string}
		 */
		this.id = id;

		/**
		 * Album title.
		 * @type {string}
		 */
		this.title = title;

		/**
		 * Tracks on the album.
		 * @type {Track[]}
		 */
		this.tracks = tracks;
	}
}
