
<div id='page-wrapper'>
	{{-- These divs will be sized to fit the screen using JavaScript and will contain background
	images. There can be up to this many background images on a page --}}
	<div id='bgwrapper1'></div>
	<div id='bgwrapper2'></div>

	@section("header")
		@include("template.template.header")
	@show

	{{-- Hide the navbar until it is ready --}}
	{{-- section("nav")
		include("template.template.nav")
	show --}}

	<main id='content-wrapper'>
		@yield("main-content")
	</main>

	@section("footer")
		@include("template.template.footer")
	@show
</div>

@section("scripts")
	<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'></script>
	<script src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js'></script>
	<script src='{{ elixir("app.js") }}'></script>
@show
