//Apply a click event to track names that will animate the lyrics into view

;(function() {
	
	
	
	/**
	 * Animate lyrics for a track.
	 * @param {jQuery}  $track  The track title.
	 */
	function animateLyrics($track) {
		$track.parent().find(".track-lyrics").slideToggle(800);
	}
	
	
	
	/**
	 * Apply a hover animation to the track titles.
	 * @param {jQuery}  $tracks  The track titles.
	 */
	function applyHoverAnimation($tracks) {
		//Give a pointer cursor to indicate clickable items
		$tracks.css("cursor", "pointer");
		
		//Hover animate
		var options = {"css": {color: "#b00000"}};
		for(var i = 0, len = $tracks.length; i < len; i++) {
			EeWalk11.Animate.hoverAnimation($tracks.eq(i), options);
		}
	}
	
	
	
	/**
	 * The click event for tracks.
	 * @param {mEvent}  event  The jQuery event object.
	 */
	function clickEvent(event) {
		var $this = $(this);
		if(!$this.hasClass("selected")) {
			$selected = $(".track-title.selected");
			if($selected.length) {
				animateLyrics($selected);
				$selected.removeClass("selected");
			}
		}
		
		animateLyrics($this);
		$this.toggleClass("selected");
	}
	
	
		
	//Apply events if tracks are present
	var $tracks = $(".track-title");
	if($tracks.length) {
		applyHoverAnimation($tracks);
		$tracks.on("click", clickEvent);
	}
	
})();
