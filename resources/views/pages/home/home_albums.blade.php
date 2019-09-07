{{--

	A section containing links to each album page.

	@param array  $albums  A sorted array of all Album Eloquent models.

--}}

<div id='album-links' class='vmar'>
	<ul>
		@foreach($albums as $album)
			<?php $uri = "/music/" . $album->getPathValue(); ?>
			<li class='album-link'>
				<cite class='album-link-title'>
					<a href='{{ $uri }}'>{{ $album->title }}</a>
				</cite>
				<a class='album-link-artwork' href='{{ $uri }}'>
					<img src='{{ $album->getArtworkPath(true) }}' alt='{{ $album->title }} artwork'>
				</a>
			</li>
		@endforeach
	</ul>
</div>
