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
			<h3 class="element-uppercase">No-Tuition Promise</h3>

			<p>Berea is the only one of America’s top colleges that makes a no-tuition promise to every enrolled student.</p>

			<p>No student pays for tuition.</p>

			<p>Our generous <strong class="text-uppercase">Tuition promise scholarship</strong> makes it possible for you to graduate debt-free. Even if you borrow for special learning opportunities or to replace your family’s total contribution, you will have a low debt compared to national trends. We sometimes call Berea “the best education money can’t buy.”</p>
		</div><!-- .footer-promise -->

		<div class="footer-about">
			<h3 class="element-uppercase">About The Berea Community</h3>

			<ul>
				<li><a href="http://www.visitberea.com/">City of Berea</a></li>
				<li><a href="http://www.madisoncountyky.us/">Madison County</a></li>
				<li><a href="http://www.kentuckytourism.com/">Kentucky</a></li>
			</ul>

			<h3>Initiatives</h3>

			<ul>
				<li><a href="https://www.berea.edu/brushy-fork-institute/">Brushy Fork Institute</a></li>
				<li><a href="https://www.berea.edu/pfe/">Partners for Education</a></li>
				<li><a href="http://growappalachia.berea.edu">Grow Appalachia</a></li>
				<li><a href="https://www.berea.edu/sustainability/">Office of Sustainability</a></li>
			</ul>

		</div><!-- .footer-about -->



		<div class="footer-distinctly">
			<h3 class="element-uppercase">Distinctly Berean</h3>

				<a href="https://www.berea.edu/visitor-center/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/visitorcenter165x59.png" aria-label="Visitor Center &amp; Shoppe"/></a>
				<br><br><br>
				<a href="http://www.boonetavernhotel.com/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/boonetavern165x59.png" aria-label="Boone Tavern"/></a>
				<br><br><br>
				<a href="https://www.bcloghousecrafts.com/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/log-house.png" aria-label="Log House Gallery"/></a>
				<br><br><br>
				<a href="https://www.bcstudentcraft.com"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/studentcrafts165x42.png" aria-label="Student Crafts"/></a>
				<br><br><br>
				<a href="https://www.berea.edu/conference-services/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/conference-services-165x42.png" aria-label="Conference Services"/></a>
				<br><br><br>
				<a href="http://bereacollegefarmstore.com/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/farm_store.png" aria-label="Farm Store"/></a>

		</div><!-- .footer-distinctly -->

		<div class="footer-maps">

            <div id="topleft">

                <h3 class="element-uppercase">Maps &amp; Directions</h3>

                <div id="gmap_links_leftside">
                    <a href="https://www.google.com/maps/place/Berea+College/@37.5716935,-84.2890655,17z/data=!4m2!3m1!1s0x8842e192a683f201:0x193cd1402103123a">Google Maps</a> |
                    <a href="http://www.bing.com/maps/default.aspx?q=berea+college+maps&mkt=en&FORM=HDRSC4">Bing Maps</a>
                </div>

                <div id="berea_logo_leftside">
                    <a href="https://www.berea.edu/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/bc-logo-stacked.svg" aria-label="Berea College"/></a>
                </div>

            </div><!-- #topleft -->

            <div id="bottomright">

                <div id="black-text">
                    <a href="https://www.google.com/maps/place/Berea+College/@37.5716935,-84.2890655,17z/data=!4m2!3m1!1s0x8842e192a683f201:0x193cd1402103123a"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/map-image.png" aria-label="Map to Berea College"/></a></a>
                </div>

                <div id="gmap_links_undermap">
                    <a href="https://www.google.com/maps/place/Berea+College/@37.5716935,-84.2890655,17z/data=!4m2!3m1!1s0x8842e192a683f201:0x193cd1402103123a">Google Maps</a> |
                    <a href="http://www.bing.com/maps/default.aspx?q=berea+college+maps&mkt=en&FORM=HDRSC4">Bing Maps</a>
                    <br><br>
					<p>101 Chestnut St.</p>
					<p>Berea, KY 40404</p>
                </div>

            </div><!-- #bottomright -->

		</div><!-- .footer-maps -->

	</div><!-- .footer-floats -->

	<div class="footer-more">
		<a href="https://www.berea.edu/about/" class="btn btn-large element-uppercase" >More About Berea &gt;</a>
	</div><!-- .footer-more -->

</div><!-- #footer-main -->


<div class="footer-social">
		<p>
			<span class="vertical-center nudge-left element-uppercase">Follow Us:</span>
            <a href="http://www.facebook.com/pages/Berea-KY/Berea-College/39126548204"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/facebook.png" width="25" height="25" alt=""/><span class="vertical-center nudge-left nudge-half-right">Facebook</span></span></a>
			<a href="http://www.youtube.com/berea"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/youtube.png" width="25" height="25"  alt=""/><span class="vertical-center nudge-left nudge-half-right">YouTube</span></span></a>
			<a href="http://twitter.com/bereacollege"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/twitter.png" width="25" height="25"  alt=""/><span class="vertical-center nudge-left nudge-half-right">Twitter</span></span></a>
			<a href="https://www.instagram.com/bereacollege/"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/instagram.png" width="25" height="25"  alt=""/><span class="vertical-center nudge-left nudge-half-right">Instagram</span></span></a>
			<!-- <a href="http://www.blogtalkradio.com/bereacollege"><span class="group-elements"><img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/rss.png" alt="RSS" width="25" height="25" /><span class="vertical-center nudge-half-right">RSS</span></span></a> -->
		</p>
</div><!-- .footer-social -->

<div class="site-info">
	<ul class="site-info-school">
		<li class="element-uppercase">Berea College</li>
		<li class="element-uppercase">Berea, Ky</li>
		<li>859-985-3000</li>
	</ul>
    <div class="site-info-links">
        <ul>
            <li>&copy; <?php echo date("Y"); ?> Berea College</li><li><a href="/wp-admin">Website Administration</a></li><li><a href="https://www.berea.edu/web-accessibility/">Accessibility</a></li><li><a href="https://www.berea.edu/legal-information/privacy-policy/">Privacy Policy</a></li><li><a href="https://www.berea.edu/legal-information/terms-of-use/">Terms of Use</a></li>
        </ul>
        <br /><strong><p><a href="https://www.berea.edu/cisrk/">Consumer Information &amp; Student Right to Know</a></p></strong><br />
    </div><!-- .site-info-links -->
    <div class="site-info-links-mobile">
        <p>&copy; <?php echo date("Y"); ?> Berea College</p>
        <p><a href="/wp-admin">Website Administration</a></p>
        <p><a href="https://www.berea.edu/web-accessibility/">Accessibility</a></p>
        <p><a href="https://www.berea.edu/legal-information/privacy-policy/">Privacy Policy</a></p>
        <p><a href="https://www.berea.edu/legal-information/terms-of-use/">Terms of Use</a></p>
        <p><a href="https://www.berea.edu/cisrk/">Consumer Information &amp;<br />Student Right to Know</a></p>
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
