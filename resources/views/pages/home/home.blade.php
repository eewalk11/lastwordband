{{--

	The home page.

	@param array  $albums  A sorted array of all Album Eloquent models.

--}}



@extends("template.template")


@section("title")
	<title>Last Word | Colorado Death Thrash</title>
@endsection



@section("description")
	<meta name='description'
			content='Last Word official website. Death/Thrash metal from Northern Colorado.'>
@endsection



@section("page-id") id='homepage' @endsection



@section("main-content")
	@include("pages.home.home_player")
	@include("pages.home.home_albums")
@endsection


