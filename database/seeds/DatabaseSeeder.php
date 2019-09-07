<?php

use App\Database\Seeds\CreateHallsOfMadness;
use App\Database\Seeds\CreateTowardsObliteration;
use Illuminate\Database\Seeder;

require_once("AbstractAlbumSeeder.php");
require_once("CreateHallsOfMadness.php");
require_once("CreateTowardsObliteration.php");

/**
 * Call database seeders.
 */
class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 */
	public function run() {
		$this->call(CreateTowardsObliteration::class);
		$this->call(CreateHallsOfMadness::class);
	}

}
