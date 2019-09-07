process.env.DISABLE_NOTIFIER = true;

var elixir = require("laravel-elixir");

elixir(function(mix) {
	mix.sass("app.scss", "public/app.css")
		
		.sass("error.scss", "public/error.css")

		.scripts([
				"bootstrap/bootstrap.js",
				"bootstrap/setBackgroundHeight.js",
				"lib/js-animate.min.js",
				"**/*.js",
			], "public/app.js")

		.version(["app.css", "error.css", "app.js"]);
});
