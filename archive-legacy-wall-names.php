<?php
/**
 * The template for displaying Archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package berea
 */

global $wpdb;
$letter = isset($_GET['letter']) ? $_GET['letter'] : 'A';
$results = $wpdb->get_results(
    "
    SELECT * FROM $wpdb->posts
    WHERE post_title LIKE '$letter%'
    AND post_type = 'legacy-wall-names'
    AND post_status = 'publish'; 
    "
); 


get_header(); ?>

<main id="main" class="site-main" role="main">

	<div id="primary" class="content-area">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">Legacy Wall - <?php print $letter; ?></h1>
				<?php
					// Show an optional term description.
					$term_description = term_description();
					if ( ! empty( $term_description ) ) :
						printf( '<div class="taxonomy-description">%s</div>', 	$term_description );
					endif;
				?>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<?php if ($results): ?>
				<?php 
				foreach ($results as $post) {
					setup_postdata($post);
					get_template_part( 'page-templates/partials/content', get_post_format() );
				} ?>
			<?php endif; ?>

			<?php berea_paging_nav(); ?>

		<?php else : ?>

			<?php get_template_part( 'page-templates/partials/content', 'none' ); ?>

		<?php endif; ?>

	</div><!-- #primary -->

	<?php get_sidebar(); ?>

	<div style="clear:both;"></div>

</main><!-- #main -->

<?php get_footer(); ?>
