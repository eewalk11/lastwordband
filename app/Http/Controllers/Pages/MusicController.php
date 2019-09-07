<?php

namespace App\Http\Controllers\Pages;

use App\Database\Models\Album;
use App\Database\Models\Track;
use App\Http\Controllers\Controller;

/**
 * Controller for the music page.
 */
class MusicController extends Controller {



	/**
	 * GET request.
	 * @param string  $ag0  An album name with no spaces, case-insensitive.
	 */
	public function get($arg0) {
		$album  = $this->loadAlbum($arg0);
		$tracks = $this->loadTracks($album);
		return view("pages.music.music", compact("album", "tracks"));
	}



	/**
	 * Load the requested album.
	 * If not found, a 404 status code exception will be thrown.
	 * @param string  $arg0  The requested album title.
	 * @return  array  Album data.
	 */
	private function loadAlbum($arg0) {
		$arg0 = strtolower($arg0);

		foreach(Album::all() as $album) {
			//To lowercase & strip spaces
			if(strtolower(str_replace(" ", "", $album->title)) == $arg0) {
				return $album;
			}
		}

		abort(404);
	}



	/**
	 * Load tracks for the requested album.
	 * @param Album  $album  The requested album.
	 * @return array  An array of tracks.
	 */
	private function loadTracks(Album $album) {
		return Track::where("album", $album->id)
				->orderBy("number", "asc")
				->get();
	}



}


