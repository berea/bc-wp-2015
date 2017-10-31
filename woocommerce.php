<?php
/**
 * woocommerce template
 *
 * This template file is the 'page' template file with woocommerce content ( <?php woocommerce_content(); ?> )
 * replacing the posts content and the sidebar ( <?php get_sidebar(); ?> ) taken out.
 *
 * @package berea
 */

get_header(); ?>


<main id="main" class="site-main" role="main">

	<div id="primary" class="content-area">
		<?php woocommerce_content(); ?>

	</div><!-- #primary -->

    <!--<?php get_sidebar(); ?>-->

    <div style="clear:both;"></div>

</main>

<?php get_footer(); ?>
