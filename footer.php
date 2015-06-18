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


<h3>NO-TUITION PROMISE</h3>

<p>Berea is the only one of America’s top colleges that awards every enrolled student a no-tuition promise.</p>

<p>No student pays for tuition.</p>

<p>Our generous TUTITION PROMISE SCOLARSHIP makes it possible for you to graduate debt-free. Even if you borrow for special learning opportunites or to replace your family’s total contribution, you will have a low debt compared to national trends. We sometimes call Berea “the best education money can’t buy.”</p>

<h3>ABOUT BEREA</h3>

<ul>
	<li>Our Mission</li>
	<li>Visitor’s Center</li>
	<li>Jobs</li>
</ul>

<ul>
	<li>Partners for Education</li>
	<li>Seabury Athletic Center</li>
	<li>Loyal Jones Appalachian Center</li>
	<li>bell hooks Institute</li>
	<li>Hutchins Library</li>
</ul>

<ul>
	<li>City of Berea</li>
	<li>Madison County</li>
	<li>Kentucky</li>
</ul>


<h3>DISTINCTLY BEREAN</h3>

<h3>MAPS &amp; DIRECTIONS</h3>


<div id="footer-social">
	<p>FOLLOW US: Facebook, YouTube, Twitter, Instagram, RSS</p>
</div><!-- #footer-social -->

			<div class="site-info">

<p>BEREA COLLEGE | BEREA, KY | 859-985-3000</p>

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
