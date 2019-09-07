{{--

	The page template.

	@param string  $nav  Identifies the selected nav item.

--}}
<!doctype html>
<html lang='en'>
	<head>
		@include("template.template.head")
	</head>
	<body @yield("page-id") >
		@include("template.template.body")
	</body>
</html>