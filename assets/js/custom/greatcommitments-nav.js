jQuery(document).ready(function(){

if ($('#scroll-to').length > 0){

var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();


if ($('#positionChange').length > 0){
document.getElementById("positionChange").style.top = (hT-wS) + "px";
}

}


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
      console.log("clicked da nav");
      
      if (this.hash !== "") {
      	
        // Prevent default anchor click behavior
        event.preventDefault();
        /* 
if (this.getAttribute("href == "faith"){
      		this.className += " active";
      	}
 */
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
//if document.getElementById('positionChange') !== null{
  
   if (wS > (hT)){
     //document.getElementById("positionChange").style.position = "fixed";
          document.getElementById("positionChange").style.top = "0px";
   }
   else {
   		document.getElementById("positionChange").style.top = (hT-wS) + "px";
   }

 //}
 
});



});


