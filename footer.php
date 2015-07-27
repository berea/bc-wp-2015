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
		<footer id="colophon" class="site-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
			<?php tha_footer_top(); ?>


<div class="footer-main">
	<div class="footer-promise">
		<h3>NO-TUITION PROMISE</h3>

		<p>Berea is the only one of America’s top colleges that awards every enrolled student a no-tuition promise.</p>

		<p>No student pays for tuition.</p>

		<p>Our generous TUTITION PROMISE SCOLARSHIP makes it possible for you to graduate debt-free. Even if you borrow for special learning opportunites or to replace your family’s total contribution, you will have a low debt compared to national trends. We sometimes call Berea “the best education money can’t buy.”</p>
	</div><!-- .footer-promise -->

	<div class="footer-about">
		<h3>ABOUT BEREA</h3>

		<ul>
			<li><a href="http://www.berea.edu/about/mission/">Our Mission</a></li>
			<li><a href="http://www.berea.edu/visitors-center/">Visitor’s Center</a></li>
			<li><a href="http://www.berea.edu/people-services/jobs/">Jobs</a></li>
		</ul>



		<ul>
			<li><a href="#">Partners for Education</a></li>
			<li><a href="http://www.berea.edu/seab/">Seabury Athletic Center</a></li>
			<li><a href="http://www.berea.edu/appalachian-center/">Loyal Jones Appalachian Center</a></li>
			<li><a href="#">Bell hooks Institute</a></li>
			<li><a href="http://libraryguides.berea.edu/">Hutchins Library</a></li>
		</ul>

		<ul>
			<li><a href="http://bereaky.gov/">City of Berea</a></li>
			<li><a href="http://www.madisoncountyky.us/">Madison County</a></li>
			<li><a href="http://kentucky.gov/Pages/home.aspx">Kentucky</a></li>
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
		<h3>MAPS &amp; DIRECTIONS</h3>

		<div id="black-text">
			<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
			<div style="overflow:hidden;height:210px;width:210px;">
				<div id="gmap_canvas" style="height:210px;width:210px;"></div>
				<style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
				<a class="google-map-code" href="http://www.pureblack.de" id="get-map-data">werbeagentur altdorf, landshut</a>
			</div><script type="text/javascript"> function init_map(){var myOptions = {zoom:14,center:new google.maps.LatLng(37.5717311,-84.28973889999997),mapTypeId: google.maps.MapTypeId.TERRAIN};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(37.5717311, -84.28973889999997)});infowindow = new google.maps.InfoWindow({content:"<b>Berea College</b><br/>101 Chestunut Street<br/>40404 Kentucky" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
		</div>
		<!-- <a href="http://www.berea.edu/campus-map/">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/map.png" alt="Maps"/>
		</a> -->

		<div>
			<a href="https://www.google.com/maps/place/Berea+College/@37.5716935,-84.2890655,17z/data=!4m2!3m1!1s0x8842e192a683f201:0x193cd1402103123a">Google Maps</a> |
			<a href="http://www.bing.com/maps/default.aspx?q=berea+college+maps&mkt=en&FORM=HDRSC4">Bing Maps</a>
		</div>
	</div><!-- .footer-maps -->

	<div class="footer-more">
		<a href="http://www.berea.edu/about/" class="btn btn-large">MORE ABOUT BEREA &gt;</a>
	</div><!-- .footer-more -->
</div><!-- #footer-main -->

<div class="footer-social">

		<p><span class="vertical-center">FOLLOW US:</span>
			<img class="vertical-center nudge-right" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/facebook4.png" width="25" height="25" /><span class="vertical-center">Facebook</span>
			<img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/play3.png" width="25" height="25" /><span class="vertical-center">YouTube</span>
			<img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/twitter3.png" width="25" height="25" /><span class="vertical-center">Twitter</span>
			<img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/instagram.png" width="25" height="25" /><span class="vertical-center">Instagram</span>
			<img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/feed4.png" width="25" height="25" /><span class="vertical-center">RSS</span>
		</p>

</div><!-- #footer-social -->

<div class="site-info">
	<h3> BEREA COLLEGE | BEREA, KY | 859-985-3000</h3>
	<p><a href="http://www.berea.edu/legal-information/copyright-policy/">&copy; 2015 Berea College</a> |
		<a href="http://www.berea.edu/legal-information/privacy-policy/">Privacy Policy</a> |
		<a href="http://www.berea.edu/legal-information/terms-of-use/">Terms of Use</a> |
		<a href="/wp-admin">Website Administration</a></p>
	<p><a href="http://www.berea.edu/cisrk/">Consumer Information & Student Right to Know</a></p>
</div><!-- .site-info -->
			<?php //tha_footer_bottom(); ?>
		</footer><!-- #colophon -->
		<?php tha_footer_after(); ?>
	</div><!-- .wrap -->
</div><!-- #page -->

<?php tha_body_bottom(); ?>
<?php wp_footer(); ?>
</body>
</html>
