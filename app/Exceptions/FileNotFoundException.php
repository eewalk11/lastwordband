<?php

namespace App\Exceptions;

use Exception;

/**
 * An exception to be thrown when an expected file cannot be found.
 */
class FileNotFoundException extends Exception {

	/**
	 * Constructor.
	 * @param string  $path  Path to the missing file.
	 */
	public function __construct($path) {
		parent::__construct("File not found: $path");
	}

}
