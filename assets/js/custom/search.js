/*  Search Page  */

(function($) {
	
	$(document).ready(function(){
		var q = getParameterByName('q');
		console.log(q);
		if (q != null) {
			var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA6rfuiihKZeDvjfZyWjP6qd223SYPvFZY&cx=018174935032430318208:8kij2j8mmsy&q=' + q;
			$.getJSON(url, function(data){
				var html = '';
				console.log(data);
				for (var i = 0; i < data.items.length; i++) {
					html += '<div class="result-item clearfix">';
					html += '<p class="result-title"><a href="' + data.items[i].htmlFormattedUrl + '">' + data.items[i].htmlTitle + '</a></p>';
					html += '<p class="result-url"><a href="' + data.items[i].htmlFormattedUrl + '">' + data.items[i].htmlFormattedUrl + '</a></p>';
					html += '<p>';
					if ('pagemap' in data.items[i] && 'cse_thumbnail' in data.items[i].pagemap) {
						html += '<a href="' + data.items[i].htmlFormattedUrl + '"><img class="pull-left" src="' + data.items[i].pagemap.cse_thumbnail[0].src + '" alt="' + data.items[i].htmlTitle + ' (generated thumbnail)" width="' + Math.ceil(data.items[i].pagemap.cse_thumbnail[0].width/2) + '" height="' + Math.ceil(data.items[i].pagemap.cse_thumbnail[0].height/2) + '" /></a>';
					}
					html+= data.items[i].htmlSnippet + '</p></div>';
				}
				$('#results').append(html);
			})
		}


	})

	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
})( jQuery );