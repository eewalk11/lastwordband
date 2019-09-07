<?php

namespace App;



/**
 * A simple string wrapper class to support method chaining.
 */
class Chain {



	/**
	 * The string that this object is wrapping.
	 * @var string
	 */
	protected $str;



	/**
	 * Constructor.
	 * @param string  $str  The initial string value.
	 */
	public function __construct($str) {
		$this->str = strval($str);
	}



	/**
	 * Get the string value.
	 * @return string
	 */
	public function __toString() {
		return $this->str;
	}



	/**
	 * Convert to camel case.
	 * @return String  This object.
	 */
	public function camel() {
		$this->lower();
		$this->str = ucwords($this->str);
		return $this->compact()->lower(true);
	}



	/**
	 * Remove whitespace.
	 * @return String  This object.
	 */
	public function compact() {
		$this->str = str_replace([" ", "\t", "\n", "\r"], "", $this->str);
		return $this;
	}



	/**
	 * Convert to lowercase.
	 * @param bool  $first  If true, only the first character will be converted.
	 * @return String  This object.
	 */
	public function lower($first = false) {
		$this->str = $first ? lcfirst($this->str) : strtolower($this->str);
		return $this;
	}



	/**
	 * Convert to uppercase.
	 * @param bool  $first  If true, only the first character will be converted.
	 * @return String  This object.
	 */
	public function upper($first = false) {
		$this->str = $first ? ucfirst($this->str) : strtoupper($this->str);
		return $this;
	}



}


