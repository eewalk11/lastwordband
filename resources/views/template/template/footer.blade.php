<footer id='page-footer' class='vmar'>
	<nav id='social-nav'>
		<ul>
			<li>
				<a id='social-nav-facebook' href='{{ config("links.facebook") }}' target='_blank'>
					<img src='/img/social/facebook.png' alt='Facebook' title='Facebook'>
				</a>
			</li>
			<li>
				<a id='social-nva-reverbnation' href='{{ config("links.reverbnation") }}'
						target='_blank'>
					<img src='/img/social/reverbnation.png' alt='Reverb Nation'
							title='Reverb Nation'>
				</a>
			</li>
		</ul>
		<ul>
			<li>
				<a id='social-nav-itunes' href='{{ config("links.itunes") }}' target='_blank'>
					<img src='/img/social/itunes.png' alt='iTunes' title='iTunes'>
				</a>
			</li>
			<li>
				<a id='social-nav-spotify' href='{{ config("links.spotify") }}' target='_blank'>
					<img src='/img/social/spotify.png' alt='Spotify' title='Spotify'>
				</a>
			</li>
			<li>
				<a id='social-nav-youtube' href='{{ config("links.youtube") }}' target='_blank'>
					<img src='/img/social/youtube.png' alt='YouTube' title='YouTube'>
				</a>
			</li>
		</ul>
	</nav>

	<div id='copyright'>
		<a href='mailto:{{ config("email.contact") }}' target='_top'>{{
				config("email.contact") }}</a><br>
		&copy; 2016 – Last Word
	</div>
</footer>