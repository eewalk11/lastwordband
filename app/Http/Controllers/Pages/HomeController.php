<?php

namespace App\Http\Controllers\Pages;

use App\Database\Models\Album;
use App\Http\Controllers\Controller;



/**
 * Controller for the home page.
 */
class HomeController extends Controller {



	/**
	 * GET request.
	 */
	public function get() {
		$albums = Album::ordered();
		return view("pages.home.home", compact("albums"));
	}



}


