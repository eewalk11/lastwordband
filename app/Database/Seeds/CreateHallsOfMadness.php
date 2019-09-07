<?php

namespace App\Database\Seeds;

use App\Database\Models\Album;

/**
 * Database seed to add Towards Obliteration to the albums table.
 */
class CreateHallsOfMadness extends AbstractAlbumSeeder {

	/**
	 * Run the database seed.
	 */
	public function run() {
		$album = Album::create([
			"title" => "Halls of Madness",
			"date" => "2016-06-09"
		]);

		$this->addTracks($album, [
			"GOBOSI",
			"After Me the Floods",
			"Subsequential Revelation",
			"Eyes of Pestilence",
			"Halls of Madness",
			"Ephemeral Seas",
			"Through Twisted Trees",
			"Eden Burns",
			"Towards Obliteration",
			"The Grand Coercion",
			"Awakening",
			"Possessing the Wretch"
		]);
	}

}
