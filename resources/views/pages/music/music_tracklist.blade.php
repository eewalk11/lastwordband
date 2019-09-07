{{--

	Album tracklist.

	@param array  $tracks  An array of Track eloquent models that belong to the album.

--}}

<div id='tracklist'>
	<ol>
		@foreach($tracks as $track)
			<li class='track'>
				<span class='track-title'>{{ $track->title }}</span>
				<span class='track-lyrics'>{{
						(new \App\LastWord\Lyrics($track))->get() }}</span>
			</li>
		@endforeach
	</ol>
</div>
