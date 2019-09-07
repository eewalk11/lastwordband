<?php

namespace App\Database\Models;

use App\Chain;
use Illuminate\Database\Eloquent\Model;



/**
 * Eloquent model for the "albums" table.
 */
class Album extends Model {



	/**
	 * Get all all albums ordered by newest first.
	 */
	public static function ordered() {
		return Album::orderBy("date", "desc")->get();
	}



	public $timestamps = false;

	protected $dates   = ["date"];




	/**
	 * Get a URI to the file for this album's artwork.
	 * @param bool  $small  Set to true to get the small image file instead of the full size.
	 * @return string  The image URI.
	 */
	public function getArtworkPath($small = false) {
		$file = $this->getPathValue();
		if($small) {
			$file .= "_small";
		}
		return "/img/art/${file}.jpg";
	}



	/**
	 * Get the title of the album formatted for lookup in a URI.
	 * @return string  The formatted title.
	 */
	public function getPathValue() {
		return strval((new Chain($this->title))->camel()->upper(true));
	}



}


