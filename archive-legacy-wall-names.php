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
				<h2>Legacy Wall - <?php print $letter; ?></h2>
				<h1 class="page-title">
					<?php
					if (function_exists('get_the_archive_title')) :
						echo get_the_archive_title();

						/*
						* TO-DO Might remove this code block at some point, since
						*	get_the_archive_title() does the same thing
						*	the below code does
						*/
						elseif ( is_category() ):
							single_cat_title();

						elseif ( is_tag() ) :
							single_tag_title();

						elseif ( is_author() ) :
							/* Queue the first post, that way we know
							 * what author we're dealing with (if that is the case).
							*/
							the_post();
							printf( __( 'Author: %s', 'berea' ), '<span class="vcard">' . get_the_author() . '</span>' );
							/* Since we called the_post() above, we need to
							 * rewind the loop back to the beginning that way
							 * we can run the loop properly, in full.
							 */
							rewind_posts();

						elseif ( is_day() ) :
							printf( __( 'Day: %s', 'berea' ), '<span>' . get_the_date() . '</span>' );

						elseif ( is_month() ) :
							printf( __( 'Month: %s', 'berea' ), '<span>' . get_the_date( _x( 'F Y', 'monthly archives date format', 'berea' ) ) . '</span>' );

						elseif ( is_year() ) :
							printf( __( 'Year: %s', 'berea' ), '<span>' . get_the_date( _x( 'Y', 'yearly archives date format', 'berea' ) ) . '</span>' );

						elseif ( is_tax( 'post_format', 'post-format-aside' ) ) :
							_e( 'Asides', 'berea' );

						elseif ( is_tax( 'post_format', 'post-format-image' ) ) :
							_e( 'Images', 'berea');

						elseif ( is_tax( 'post_format', 'post-format-video' ) ) :
							_e( 'Videos', 'berea' );

						elseif ( is_tax( 'post_format', 'post-format-quote' ) ) :
							_e( 'Quotes', 'berea' );

						elseif ( is_tax( 'post_format', 'post-format-link' ) ) :
							_e( 'Links', 'berea' );

						elseif ( is_tax() ) :
+							single_term_title();

						else :
							_e( 'Archives', 'berea' );

						endif;
						/*
						* END TO-DO
						*/
					?>
				</h1>
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
