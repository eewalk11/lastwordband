/*
 * Set the height of the background wrappers to match the height of the viewport. Also, apply a
 * resize event to the window that will resize the height of these elements.
 */

$(document).ready(function() {
	
	/**
	 * The elements to resize.
	 * @type {jQuery}
	 */
	var $elems = $("#bgwrapper1, #bgwrapper2");
	
	/**
	 * Set the height of the elements to match the height of the viewport.
	 */
	function setHeight() {
		$elems.outerHeight(window.innerHeight);
	}
	
	//Size the elements
	setHeight();
		
	//Apply a window resize event to resize the elements with the window		
	EeWalk11.Event.resizeEvent(setHeight);
	
});
