/*  Search Page  */

(function($) {
	
	$(document).ready(function(){
		var q = getParameterByName('q');
		if (q != null) {

			// Set the search form input to the q string
			$('#search-page-box input[type="text"]').val(q);

			// Get the search results
			var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA6rfuiihKZeDvjfZyWjP6qd223SYPvFZY&cx=018174935032430318208:8kij2j8mmsy&q=' + q;
			$.getJSON(url, function(data){
				var start = getParameterByName('start');

				// Result metadata
				generateMetadata(data, start);

				// Result Items
				generateLinks(data);

				// Pages
				generatePages(data, start);
				$('#search-more-links').on('click', 'a', function(){
					// @TODO See why there is an <a> in the current <li>... shouldn't be one
					if ($(this).parents('li.current').length > 0) return false;

					var newStart = $(this).attr('data-page') * 10 - 9;
					$.getJSON(url + '&start=' + newStart, function(newData){
						$("#search-page-box").get(0).scrollIntoView();
						generateMetadata(newData, newStart);
						generatePages(newData, newStart);
						generateLinks(newData);
					})
				});
			})
		}


	})

	function generateMetadata(data, start) {
		var showing = (start == null) ? 'the first 10 results' : 'results ' + (start) + '-' + (start + 9);
		$('#search-info').html('<p>Showing <strong>' + showing + '</strong> of <strong>' + data.searchInformation.formattedTotalResults + '</strong> found.</p>');
	}

	function generateLinks(data) {
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
		$('#results').html(html);
	}

	function generatePages(data, start) {
		var currentPage = (start == null) ? 1 : (start - 1)/10 + 1;
		var totalPages = Math.ceil(data.searchInformation.totalResults / 10);
		// Google CSE currently restricted to 10 pages.
			totalPages = (totalPages > 10) ? 10 : totalPages;
		var firstPage = (currentPage <= 6) ? 1 : currentPage - 5;
		var lastPage = (currentPage <= 6) ? 10 : currentPage + 4;
		if (totalPages < lastPage) lastPage = totalPages;
		console.log("current: " + currentPage);
		console.log("first: " + firstPage);
		console.log("last: " + lastPage);
		
		var pages = '<ul>';
		// Previous link
		if (currentPage > 1) {
			pages += '<li class="previous"><a data-page="' + (currentPage - 1) + '">Previous</a></li>';
		}
		// Page links
		for (var i = firstPage; i <= lastPage; i++) {
			if (i == currentPage) {
				pages += '<li class="current">' + i + '</li>';
			}
			else {
				pages += '<li><a data-page="' + i + '">' + i + '</li>';
			}
		}
		// Next link
		if (currentPage < lastPage) {
			pages += '<li class="next"><a data-page="' + (currentPage + 1) + '">Next</a></li>';
		}
		// Close the list
		pages += '</ul>';

		$('#search-more-links').html(pages);
	}

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