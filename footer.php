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

	</div><!-- .footer-about -->

	<div class="footer-distinctly">
		<h3>DISTINCTLY BEREAN</h3>
		<ul>
			<li><a href="#">Partners for Education</a></li>
			<li><a href="http://www.berea.edu/seab/">Seabury Athletic Center</a></li>
			<li><a href="http://www.berea.edu/appalachian-center/">Loyal Jones Appalachian Center</a></li>
			<li><a href="#">Bell hooks Institute</a></li>
			<li><a href="http://libraryguides.berea.edu/">Hutchins Library</a></li>
		</ul>
	</div><!-- .footer-distinctly -->

	<div class="footer-maps">
		<h3>MAPS &amp; DIRECTIONS</h3>
		<ul>
			<li><a href="http://www.berea.edu/campus-map/">Map of Campus</a></li>
			<li><a href="http://www.berea.edu/campus-map/directions/">Directions to Campus</a></li>
		</ul>

		<ul>
			<li><a href="http://bereaky.gov/">City of Berea</a></li>
			<li><a href="http://www.madisoncountyky.us/">Madison County</a></li>
			<li><a href="http://kentucky.gov/Pages/home.aspx">Kentucky</a></li>
		</ul>
	</div><!-- .footer-maps -->

	<div class="footer-more">
		<a href="http://www.berea.edu/about/" class="btn btn-large">MORE ABOUT BEREA &gt;</a>
	</div><!-- .footer-more -->
</div><!-- #footer-main -->

<div class="footer-social">
	<p>FOLLOW US: Facebook, YouTube, Twitter, Instagram, RSS</p>
</div><!-- #footer-social -->

<div class="site-info">
	<h3>BEREA COLLEGE | BEREA, KY | 859-985-3000</h3>
	<p>&copy; 2015 Berea College | Privacy Policy | Terms of Use | Website Administration</p>
	<p>Consumer Information & Student Right to Know</p>
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
