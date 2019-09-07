@extends("errors.error-template")



@section("title")
	<title>500 – Server Error | Last Word</title>
@endsection



@section("description")
	<meta name='description' content='Something&apos;s not right.'>
@endsection



@section("page-id") id='error500' @endsection


@section("main-content")
	<h2>Error 500</h2>
	<p>
		Something's not right...
	</p>
@endsection


