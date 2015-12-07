<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package berea
 */
?>
		<?php tha_content_bottom(); ?>
		</div><!-- #content -->
		<?php tha_content_after(); ?>

 		<!-- This is the mega-dropdown -->
		<?php include 'universal_menu.php'; ?>

   		<?php tha_footer_before(); ?>

   		<!-- footer-shim -->
		<div id="footer-shim"><div class="footer-shim-inner"><div class="footer-shim-block"></div></div></div>

		<!-- footer -->
		<footer id="colophon" class="site-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
			<?php tha_footer_top(); ?>


<div class="footer-main">

	<div class="footer-floats">

		<div class="footer-promise">
			<h3>NO-TUITION PROMISE</h3>

			<p>Berea is the only one of America’s top colleges that awards every enrolled student a no-tuition promise.</p>

			<p>No student pays for tuition.</p>

			<p>Our generous <strong>TUTITION PROMISE SCHOLARSHIP</strong> makes it possible for you to graduate debt-free. Even if you borrow for special learning opportunites or to replace your family’s total contribution, you will have a low debt compared to national trends. We sometimes call Berea “the best education money can’t buy.”</p>
		</div><!-- .footer-promise -->

		<div class="footer-about">
			<h3>ABOUT THE BEREA COMMUNITY</h3>

			<ul>
				<li><a href="http://www.visitberea.com/">City of Berea</a></li>
				<li><a href="http://www.madisoncountyky.us/">Madison County</a></li>
				<li><a href="http://www.kentuckytourism.com/">Kentucky</a></li>
			</ul>

			<h3>INITIATIVES</h3>

			<ul>
				<li><a href="https://www.berea.edu/brushy-fork-institute/">Brushy Fork Institute</a></li>
				<li><a href="http://partners.berea.edu/">Partners for Education</a></li>
			</ul>

		</div><!-- .footer-about -->



		<div class="footer-distinctly">
			<h3>DISTINCTLY BEREAN</h3>

				<a href="http://www.boonetavernhotel.com/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/boonetavern165x59.png" alt="Boone Tavern"/></a>
				<br><br><br>
				<a href="http://bereacollegecrafts.com/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/studentcrafts165x42.png" alt="Student Crafts"/></a>
				<br><br><br>
				<a href="http://www.berea.edu/conference-services/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/conference-services-165x42.png" alt="Conference Services"/></a>
				<br><br><br>

		</div><!-- .footer-distinctly -->

		<div class="footer-maps">

            <div id="topleft">

                <h3>MAPS &amp; DIRECTIONS</h3>

                <div id="gmap_links_leftside">
                    <a href="https://www.google.com/maps/place/Berea+College/@37.5716935,-84.2890655,17z/data=!4m2!3m1!1s0x8842e192a683f201:0x193cd1402103123a">Google Maps</a> |
                    <a href="http://www.bing.com/maps/default.aspx?q=berea+college+maps&mkt=en&FORM=HDRSC4">Bing Maps</a>
                </div>

                <div id="berea_logo_leftside">
                    <a href="http://www.berea.edu/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/bc-logo-stacked.svg" alt="Berea College"/></a>
                </div>

            </div><!-- #topleft -->

            <div id="bottomright">

                <div id="black-text">
                    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
                    <div id="gmap_container">
                        <div id="gmap_canvas" style="height:250px;width:100%;"></div>
                    </div>
                    <script type="text/javascript">
                        function init_map(){
                            var myOptions = {
                                zoom:14,
                                center:new google.maps.LatLng(37.573,-84.2897),
                                mapTypeId: google.maps.MapTypeId.TERRAIN,
								scrollwheel: false
                            };

                            map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
                            marker = new google.maps.Marker({
                                map: map,position: new google.maps.LatLng(37.573, -84.2897)
                            });
							/*
                            infowindow = new google.maps.InfoWindow({
                                content:"<b>Berea College</b><br/>101 Chestunut Street<br/>40404 Kentucky"
                            });
                            google.maps.event.addListener(marker, "click", function(){
                                infowindow.open(map,marker);
                            });
                            infowindow.open(map,marker);
                            */
                        }
                        google.maps.event.addDomListener(window, 'load', init_map);
                    </script>

                </div>

                <div id="gmap_links_undermap">
                    <a href="https://www.google.com/maps/place/Berea+College/@37.5716935,-84.2890655,17z/data=!4m2!3m1!1s0x8842e192a683f201:0x193cd1402103123a">Google Maps</a> |
                    <a href="http://www.bing.com/maps/default.aspx?q=berea+college+maps&mkt=en&FORM=HDRSC4">Bing Maps</a>
                </div>

            </div><!-- #bottomright -->

		</div><!-- .footer-maps -->

	</div><!-- .footer-floats -->

	<div class="footer-more">
		<a href="http://www.berea.edu/about/" class="btn btn-large">MORE ABOUT BEREA &gt;</a>
	</div><!-- .footer-more -->

</div><!-- #footer-main -->


<div class="footer-social">
		<p>
			<span class="vertical-center nudge-left">FOLLOW US:</span>
            <a href="http://www.facebook.com/pages/Berea-KY/Berea-College/39126548204"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/facebook.png" alt="Facebook" width="25" height="25" /><span class="vertical-center nudge-left nudge-half-right">Facebook</span></span></a>
			<a href="http://www.youtube.com/berea"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/youtube.png" alt="YouTube" width="25" height="25" /><span class="vertical-center nudge-left nudge-half-right">YouTube</span></span></a>
			<a href="http://twitter.com/bereacollege"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/twitter.png" alt="Twitter" width="25" height="25" /><span class="vertical-center nudge-left nudge-half-right">Twitter</span></span></a>
			<a href="#"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/instagram.png" alt="Instagram" width="25" height="25" /><span class="vertical-center nudge-left nudge-half-right">Instagram</span></span></a>
			<a href="http://www.blogtalkradio.com/bereacollege"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/rss.png" alt="RSS" width="25" height="25" /><span class="vertical-center nudge-half-right">RSS</span></span></a>
		</p>
</div><!-- .footer-social -->

<div class="site-info">
	<ul class="site-info-school">
		<li>BEREA COLLEGE</li>
		<li>BEREA, KY</li>
		<li>859-985-3000</li>
	</ul>
    <div class="site-info-links">
        <ul>
            <li><a href="http://www.berea.edu/legal-information/copyright-policy/">&copy; 2015 Berea College</a></li><li><a href="http://www.berea.edu/legal-information/privacy-policy/">Privacy Policy</a></li><li><a href="http://www.berea.edu/legal-information/terms-of-use/">Terms of Use</a></li><li><a href="#">Website Administration</a></li>
        </ul>
        <p><a href="http://www.berea.edu/cisrk/">Consumer Information & Student Right to Know</a></p>
    </div><!-- .site-info-links -->
    <div class="site-info-links-mobile">
        <p><a href="http://www.berea.edu/legal-information/copyright-policy/">&copy; 2015 Berea College</a></p>
        <p><a href="http://www.berea.edu/legal-information/privacy-policy/">Privacy Policy</a></p>
        <p><a href="http://www.berea.edu/legal-information/terms-of-use/">Terms of Use</a></p>
        <p><a href="http://www.berea.edu/cisrk/">Consumer Information &<br />Student Right to Know</a></p>
    </div><!-- .site-info-links-mobile -->
</div><!-- .site-info -->
			<?php //tha_footer_bottom(); ?>
		</footer><!-- #colophon -->
		<?php //tha_footer_after(); ?>
	</div><!-- .wrap -->
</div><!-- #page -->

<?php //tha_body_bottom(); ?>
<?php wp_footer(); ?>
</body>
</html>
