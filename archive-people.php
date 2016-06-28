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
    SELECT * FROM $wpdb->posts tb
    WHERE post_title LIKE '$letter%'
    AND post_type = 'people'
    AND post_status = 'publish'
    ORDER BY tb.post_title ASC; 
    "
); 


get_header(); ?>

<main id="main" class="site-main" role="main">

	<div id="primary" class="content-area">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">People Directory, <?php print $letter; ?></h1>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<div class="people-list">
				<?php if ($results): ?>
					<?php 
					foreach ($results as $post) {
						setup_postdata($post);
						get_template_part( 'page-templates/partials/content', 'people' );
					} ?>
				<?php endif; ?>
			</div>

			<?php berea_paging_nav(); ?>

		<?php else : ?>

			<?php get_template_part( 'page-templates/partials/content', 'none' ); ?>

		<?php endif; ?>

	</div><!-- #primary -->

	<div style="clear:both;"></div>

</main><!-- #main -->

<?php get_footer(); ?>
