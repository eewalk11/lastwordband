
@yield("title")

@section("metas")
	@yield("description")
	<meta charset='utf-8'>
	<meta name='author' content='Eric Walker'>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
@show

@include("template.template.favicon")

@section("styles")
	<link rel='stylesheet'
			href='https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css'>
	<link rel='stylesheet' href='{{ elixir("app.css") }}'>
@show

@include("template.template.ie-html5")
