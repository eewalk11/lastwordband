{{--

	Album purchase links.

	@param Album  $album  Album eloquent model.

--}}

<?php

	$links = [];
	$cfg   = config("links.{$album->title}");

	$opts  = [
		new class() {
			public $src  = "itunes";
			public $text = "Buy from iTunes";
		},
		new class() {
			public $src  = "amazon";
			public $text = "Buy from Amazon";
		},
		new class() {
			public $src  = "google";
			public $text = "Buy from Google Play";
		},
		new class() {
			public $src  = "cdbaby";
			public $text = "Buy from CD Baby";
		},
		new class() {
			public $src  = "spotify";
			public $text = "Stream on Spotify";
		},
		new class() {
			public $src  = "youtube";
			public $text = "Stream on YouTube";
		}
	];

	foreach($opts as $data) {
		if(array_key_exists($data->src, $cfg)) {
			$data->url = $cfg[$data->src];
			$links[]   = $data;
		}
	}

?>

@if($links)
	<div id='album-purchase-links'>
		<ul>
			@foreach($links as $data)
				<li>
					<a href='{{ $data->url }}' class='img-link' target='_blank'><img
							src='/img/social/{{ $data->src }}_icon.png'></a>
					<a href='{{ $data->url }}' target='_blank'>{{ $data->text }}</a>
				</li>
			@endforeach
		</ul>
	</div>
@endif
