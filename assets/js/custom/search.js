/*  Search Page  */

(function($) {
	
	$(document).ready(function(){
		var q = getParameterByName('q');
		if (q != null) {
			var url = 'GET https://www.googleapis.com/customsearch/v1?key=AIzaSyA6rfuiihKZeDvjfZyWjP6qd223SYPvFZY&cx=018174935032430318208:8kij2j8mmsy&q=' + q;
			$.getJSON(url, function(data){
				console.log(data);
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