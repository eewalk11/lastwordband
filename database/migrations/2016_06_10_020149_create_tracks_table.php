<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTracksTable extends Migration {

	/**
	 * Run the migrations.
	 */
	public function up() {
		Schema::create("tracks", function (Blueprint $table) {
			$table->increments("id");
			$table->integer("album")->unsigned();
			$table->string("title");
			$table->tinyInteger("number")->unsigned()->comment("Track order on the album");
			$table->foreign("album")->references("id")->on("albums");
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down() {
		Schema::drop("tracks");
	}
}
