jQuery(document).ready(function(){


var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

document.getElementById("positionChange").style.top = (hT-wS) + "px";


	if( $('.gc-cd-stretchy-nav').length > 0 ) {

	 	var stretchyNavs = $('.gc-cd-stretchy-nav');
		
 	stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.gc-cd-nav-trigger');
			


			stretchyNav.toggleClass('gc-nav-is-visible');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('gc-nav-is-visible');
			});
		
		});



/*
		$(document).on('click', function(event){
			( !$(event.target).is('.gc-cd-nav-trigger') && !$(event.target).is('.gc-cd-nav-trigger span') ) && stretchyNavs.removeClass('gc-nav-is-visible');
		});
*/


  // add jQuery transition to anchor 
  $("a").on('click', function(event) {

    
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;

      
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
  
  });



	}





$(window).scroll(function() {
   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

  
   if (wS > (hT)){
     //document.getElementById("positionChange").style.position = "fixed";
          document.getElementById("positionChange").style.top = "0px";
   }
   else {
   		document.getElementById("positionChange").style.top = (hT-wS) + "px";
   }
   /*
   if (wS < (hT)){
     //document.getElementById("positionChange").style.position = "absolute";
     document.getElementById("positionChange").style.top = "700px";
   }*/
});



});


