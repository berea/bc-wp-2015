jQuery(document).ready(function( $ ) {
	
	console.log('legacy wall');
	$('.post .entry-content').append($('<div class="loading"></div>'));

	$.getJSON('/wp-content/themes/bc-wp-2015/assets/js/custom/legacy-wall.json', function(data) {
		console.log(data);
		data.panelNames.sort();

		// Generate year and names lists
		var years = {}
		var yearPanels = [];
		var names = {};
		var nameMap = [];
		$.each(data.panelNames, function(i, panel) {
			var year panel.split(' ').unshift();
			if (!inArray(year, years)) {
				years.push(year);
			}
			if (!year in yearPanels) {
				yearPanels[year] = [];
			}
			yearPanels[year].push(panel);
			$.each(panels[panel].names, function(j, name){
				names.push(name);
				nameMap[name] = panel;
			});
		});
		console.log(years);
		console.log(yearPanels);
		console.log(nameMap);

	});
});



function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}