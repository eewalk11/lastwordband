/*
 * Apply a hover animation to the social media navigation bar.
 */

$(document).ready(function() {

	var $links = $("#social-nav li");
	var opts   = {
		css: {
			backgroundColor: "#ffffff",
		},
		dur: 400
	};

	for(var i = 0, len = $links.length; i < len; i++) {
		EeWalk11.Animate.hoverAnimation($links.eq(i), opts);
	}

});
