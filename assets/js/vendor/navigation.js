jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1024;
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	$(window).scroll(function(){
		var $o = $('<div class="cd-overlay shift-down"></div>').hide().appendTo('body');
		var baseMargin = parseInt($o.css('marginTop'));
		$o.remove();

		var fromTop = $(window).scrollTop();
		var overlayTopMargin = parseInt( $('.cd-overlay').css('marginTop') );

		var newMargin;

		if (fromTop > baseMargin) {
			newMargin = 0;
		} else if (overlayTopMargin <= baseMargin-fromTop && fromTop < baseMargin) {
			newMargin = baseMargin - fromTop;
		} else {
			newMargin = baseMargin - fromTop;
		};

		$('.cd-overlay').css('marginTop', newMargin + 'px');
	});

	//mobile - open lateral menu clicking on the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();

		if( $('.cd-overlay').hasClass('is-visible') && !$('.cd-search').hasClass('is-visible') ) {
			closeNav();
		} else {
			$(this).addClass('nav-is-visible');
			$('.cd-primary-nav').addClass('nav-is-visible');
			$('.cd-main-header').addClass('nav-is-visible');
			$('.cd-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
			toggleSearch('close');
			$('.cd-overlay').addClass('is-visible');
		}
		toggleRibbon();
		toggleOverlayShift();

	});

	//open search form
	$('.cd-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
		toggleRibbon();
		toggleOverlayShift();
		closeNav();
	});

	//close lateral menu on mobile 
	$('.cd-overlay').on('swiperight', function(){
		if($('.cd-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
			toggleRibbon();
		}
	});
	$('.nav-on-left .cd-overlay').on('swipeleft', function(){
		if($('.cd-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		}
	});
	$('.cd-overlay').on('click', function(){
		closeNav();
		toggleSearch('close');
		$('.cd-overlay').removeClass('is-visible');
		toggleRibbon();
	});


	//prevent default clicking on direct children of .cd-primary-nav 
	$('.cd-primary-nav').children('.has-children').children('a').on('click', function(event){
		event.preventDefault();
	});
	//open submenu
	$('.has-children').children('a').on('click', function(event){
		if( !checkWindowWidth() ) event.preventDefault();
		var selected = $(this);
		if( selected.next('ul').hasClass('is-hidden') ) {
			//desktop version only
			selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
			selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			$('.cd-overlay').addClass('is-visible');
		} else {
			selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
			$('.cd-overlay').removeClass('is-visible');
		}
		toggleSearch('close');
		toggleRibbon();
	});

	//submenu items - go back link
	$('.go-back').on('click', function(){
		$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});

	function closeNav() {
		$('.cd-nav-trigger').removeClass('nav-is-visible');
		$('.cd-main-header').removeClass('nav-is-visible');
		$('.cd-primary-nav').removeClass('nav-is-visible');
		$('.has-children ul').addClass('is-hidden');
		$('.has-children a').removeClass('selected');
		$('.moves-out').removeClass('moves-out');
		$('.cd-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$('body').removeClass('overflow-hidden');
		});
		if(!$('#cd-search').hasClass('is-visible')) $('.cd-overlay').removeClass('is-visible');
		toggleOverlayShift();
	}

	function toggleSearch(type) {
		if(type=="close") {
			//close search
			$('.cd-search').removeClass('is-visible');
			$('.cd-search-trigger').removeClass('search-is-visible');
			$('.cd-overlay').removeClass('search-is-visible');
			$('body').removeClass('search-is-visible');
		} else {
			//toggle search visibility
			$('.cd-search').toggleClass('is-visible');
			$('.cd-search-trigger').toggleClass('search-is-visible');
			$('body').toggleClass('search-is-visible');
			if($(window).width() > MqL && $('.cd-search').hasClass('is-visible')) $('.cd-search').find('input[type="search"]').focus();
			($('#cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible');
		}
	}
	function toggleRibbonAction() {
		if ( $(document).innerWidth() >= 1024 ) {
			// main homepage + large media, swap between full & mini
			if ( $('div#ribbon').hasClass('mini-ribbon') && !$('.cd-overlay').hasClass('is-visible') ) {
				$('div#ribbon').removeClass('mini-ribbon');
			} else {
				$('div#ribbon').addClass('mini-ribbon');
			}
		} else {
			if ( $('.cd-overlay').hasClass('is-visible') ) {
				$('div#ribbon').hide();
			} else {
				$('div#ribbon').show();
			}
		}
	}
	window._navigation_toggleRibbonAction=toggleRibbonAction;

	function toggleRibbon() {
		/* use settimeout to get off the main thread and let the cd-overlay become invisible because it impacts our logic */
		setTimeout('window._navigation_toggleRibbonAction()',50)
	}


	function toggleOverlayShift() {
        if ( $('.cd-overlay').hasClass('.shift-down')) {
            $('.cd-overlay').removeClass('shift-down');
        } else {
            $('.cd-overlay').addClass('shift-down');
        }
	}


	function checkWindowWidth() {
		//check window width (scrollbar included)
		var e = window,
			a = 'inner';
		if (!('innerWidth' in window )) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		//if its the stopgap theme always return true 
		if ($('body').hasClass('child-theme-bc-wp-2015-child-theme-stopgap')) { return true; }
		if ( e[ a+'Width' ] >= MqL ) {
			return true;
		} else {
			return false;
		}
	}

	function moveNavigation(){
		var navigation = $('.cd-nav');
		closeNav();
		$('.cd-overlay').removeClass('is-visible');
		toggleSearch('close');
		$('div#ribbon').removeClass('mini-ribbon');
		$('div#ribbon').show();

		var desktop = checkWindowWidth();
		if ( desktop ) {
			navigation.detach();
			navigation.insertBefore('.cd-header-buttons');
		} else {
			navigation.detach();
			navigation.insertAfter('.cd-overlay');
		}
	}
});