<?php

namespace App\LastWord;

use App\Database\Models\Album;
use App\Database\Models\Track;
use App\Exceptions\FileNotFoundException;



/**
 * Loads the lyrics file for a track.
 */
class Lyrics {



	/**
	 * Contents of the lyrics file.
	 * @var string
	 */
	private $contents;



	/**
	 * <p>
	 *   Constructor. Loads the lyrics file and stores the contents.
	 * </p>
	 * <p>
	 *   The first argument can be either an album or a track. If a track is provided it must be an
	 *   Eloquent model and the second argument can ignored. Otherwise, the track must be provided
	 *   as the second argument. The album can be loaded using the track, but it is faster to
	 *   provide the album if it is already known.
	 * </p>
	 * @param string|Album|Track  $arg0  The album name, album Eloquent model, or track Eloquent
	 *                                   model.
	 * @param string|Track|null   $arg1  The track name or Eloquent model.
	 * @throws FileNotFoundException  If the arguments are invalid.
	 */
	public function __construct($arg0, $arg1 = null) {
		$path = $this->getFilePath($arg0, $arg1);
		if(!file_exists($path) || ($this->contents = file_get_contents($path)) === false) {
			throw new FileNotFoundException($path);
		}
	}



	/**
	 * Get the lyrics.
	 * @return string  The lyrics.
	 */
	public function get() {
		return $this->contents;
	}



	/**
	 * Use the constructor arguments to create a file path.
	 * @param string|Album|Track  $arg0
	 * @param string|Track|null   $arg1
	 */
	private function getFilePath($arg0, $arg1) {
		if($arg0 instanceof Track) {
			$track = $arg0->title;
			$album = Album::where("id", $arg0->album)->first();
			$album = $album ? $album->title : "";
		}
		else {
			$album = $arg0 instanceof Album ? $arg0->title : strval($arg0);
			$track = $arg1 instanceof Track ? $arg1->title : strval($arg1);
		}

		$album = camel_case(strtolower($album));
		$track = camel_case(strtolower($track));

		return resource_path("lyrics/${album}/${track}.txt");
	}



}


