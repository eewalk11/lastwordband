<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlbumsTable extends Migration {

	/**
	 * Run the migrations.
	 */
	public function up() {
		Schema::create("albums", function(Blueprint $table) {
			$table->increments("id");
			$table->string("title");
			$table->date("date")->comment("Production date");
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down() {
		Schema::drop("albums");
	}

}
