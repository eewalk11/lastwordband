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
