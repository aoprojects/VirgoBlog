
	$('#articles_summary').click(function() {
		console.log("clicked");
		$( this ).next().fadeToggle( "fast" );
		$( this ).next().toggleClass("collapse");
	});



// I realize that this code is not doing the effect yet. I will learn more later.