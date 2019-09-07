@extends("template.template")

{{--

	Music page.
	Display information for an album.

	@param Album  $album   Album eloquent model.
	@param array  $tracks  An array of Track eloquent models that belong to the album.

--}}


@section("title")
	<title>Music – {{ $album->title }} | Last Word</title>
@endsection



@section("description")
	<meta name='description'
			content='Last Word music. Our new album, Halls of Madness, is here!'>
@endsection



@section("page-id") id='musicpage'
		class='{{ strtolower(str_replace(" ", "", $album->title)) }}' @endsection



@section("main-content")
	<div id='album' class='vmar' data-title='{{ $album->title }}'>
		<div id='album-info'>
			<h2 id='album-title'>{{ $album->title }}</h2>
			<time id='release-date' datetime='{{ $album->date->format("Y-m-d") }}'>
				{{ $album->date->format("F j, Y") }}
			</time>
		</div>

		<div id='album-table'>
			<div class='album-row'>
				<div class='album-col'>
					<div id='album-art'></div>
					@include("pages.music.music_links")
				</div>
				<div class='album-col'>
					@include("pages.music.music_tracklist")
				</div>
			</div>
		</div>
	</div>
@endsection


