/*  Berea Custom JavaScripts (empty currently)  */
'use strict';
(function ($) {
	
	jQuery(document).ready(function($){
		$('.ictst_content_cl').each(function(i, item) {
			var height = 0;
			// Find tallest item
			$(item).find('> ul > li').each(function(j,li) {
				var itemHeight = $(li).height();
				if ( itemHeight > height ) {
					height = itemHeight;
				}
			});
			$(item).height(height);

		});
	});
	
})();