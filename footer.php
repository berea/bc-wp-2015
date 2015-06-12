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
