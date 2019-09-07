<?php

Route::group(["namespace" => "Pages"], function() {

	Route::get("/", "HomeController@get");

	Route::get("music", function() {
		return redirect("/music/HallsOfMadness");
	});

	Route::get("music/{album}", "MusicController@get");

});
