{{-- The main page navbar --}}
<?php if(!isset($nav)) $nav = null; ?>
<nav id='page-nav'>
	<ul>
	    <li @if($nav == "home") selected @endif >
	    	<a href='/'>Home</a>
	    </li><li @if($nav == "music") selected @endif >
	    	<a href='/music'>Music</a>
	    </li>
	</ul>
</nav>