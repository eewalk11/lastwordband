{{-- Error page template --}}
<!doctype html>
<html lang='en'>
	<head>
		@yield("title")

		@yield("description")
		<meta charset='utf-8'>
		<meta name='author' content='Eric Walker'>
		<meta name='viewport' content='width=device-width, initial-scale=1'>

		@include("template.template.favicon")

		<link rel='stylesheet' href='{{ elixir("error.css") }}'>
	</head>
	<body @yield("page-id") >
		<div id='main-content'>
			@yield("main-content")
		</div>
	</body>
</html>