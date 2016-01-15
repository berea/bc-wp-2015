jQuery(document).ready(function( $ ) {
	
	console.log('legacy wall');
	$('.post .entry-content').append($('<div class="loading"></div>'));

	$.getJSON('/wp-content/bc-wp-2015/assets/js/custom/legacy-wall.json', function(data) {
		console.log(data);
	});
});