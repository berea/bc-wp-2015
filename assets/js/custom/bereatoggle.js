jQuery(document).ready(function(){


	$('[id^=commitment]').click(function(){
       //toggle the proper commitment div
       $('#toggleit_' + (this).id).slideToggle('slow');
        //scroll to div
  		if ($('#toggleit_' + (this).id).is(':visible')) {
     		$('html, body').animate({scrollTop: $('#toggleit_' + (this).id).offset().top});
  		}
    });


});

