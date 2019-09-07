<?php

namespace App\Database\Seeds;

use App\Database\Models\Album;
use App\Database\Models\Track;
use Illuminate\Database\Seeder;

/**
 * Framework for a seeder to add an album to the database.
 */
abstract class AbstractAlbumSeeder extends Seeder {

	/**
	 * Add tracks to the database.
	 * @param Album  $album   Model for the newly created album record.
	 * @param array  $titles  An array of track titles.
	 */
	protected function addTracks(Album $album, $titles) {
		for($i = 0, $len = count($titles); $i < $len; $i++) {
			Track::create([
				"album"  => $album->id,
				"title"  => $titles[$i],
				"number" => $i + 1
			]);
		}
	}

}
