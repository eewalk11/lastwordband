<?php

namespace App\Database\Seeds;

use App\Database\Models\Album;

/**
 * Database seed to add Towards Obliteration to the albums table.
 */
class CreateTowardsObliteration extends AbstractAlbumSeeder {

	/**
	 * Run the database seed.
	 */
	public function run() {
		$album = Album::create([
			"title"       => "Towards Obliteration",
			"date"        => "2012-07-07"
		]);

		$this->addTracks($album, [
			"Waking Dream",
			"Towards Obliteration",
			"Eyes of Pestilence",
			"Wasted",
			"Eden Burns"
		]);
	}

}
