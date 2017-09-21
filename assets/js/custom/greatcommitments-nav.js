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
  
$("a").on('click', function(event) {

      
      if (this.hash !== "") {
         
         var atags = document.getElementsByTagName("a");
         for (i = 0; i < atags.length; i++){
           atags[i].classList.remove("active");
         }
         this.className += " active";
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
   $('.gc-education').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[2].childNodes[0].className += " active";
  }); 

   $('.gc-liberalarts').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[3].childNodes[0].className += " active";
  });

   $('.gc-christian').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[4].childNodes[0].className += " active";
  });

   $('.gc-labor').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[5].childNodes[0].className += " active";
  });

   $('.gc-kinship').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[6].childNodes[0].className += " active";
  });

   $('.gc-democratic').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[7].childNodes[0].className += " active";
  });

   $('.gc-sustainability').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[8].childNodes[0].className += " active";
  });

   $('.gc-appalachia').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[9].childNodes[0].className += " active";
  });


	}


jQuery(document).ready(function(){


  $('[id^=commitment]').click(function(){
      var active = $('div.active');
      for (i = 0; i < active.length; i++){
        if ('#toggleit_' + (active[i]).id != '#toggleit_' + (this).id){
          $('#toggleit_' + (active[i]).id).toggle();
          active[i].classList.remove("active");
        }
      }
      

      $('#toggleit_' + (this).id).slideToggle('slow');
      if (this.classList.contains("active")){
        this.classList.remove("active");
      }
      else{
        this.className += ' active';
      }
      if ($('#toggleit_' + (this).id).is(':visible')) {
        $('html, body').animate({scrollTop: $('#toggleit_' + (this).id).offset().top});
      }

      var commitment = this.id.split("_")[1];
      var allCommitments = document.getElementsByClassName("gc");
      for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
        if (selectedCommitment.hash.substr(1) == this.id.split("_")[1] && !selectedCommitment.classList.contains("active")){
          selectedCommitment.className += " active";
        }
      }


    });

});





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

jQuery( function($) {

$(document).on('click', 'li.vc_tta-tab a,li.vc_tta-tab,.vc_tta-panel-title', function(){
   $('html, body').stop();
});

});


