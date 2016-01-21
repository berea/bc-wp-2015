<?php
/**
 * The template for displaying Archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package berea
 */

$args=array(
  'post_type' => 'legacy-wall-names',
  'post_status' => 'publish',
  'posts_per_page' => -1,
  'caller_get_posts'=> 1,
  'order' => 'ASC',
  'orderby' => 'title',
  'tax_query' => array(
  	array(
  		'taxonomy' => 'legacy-wall-year',
  		'field' => 'slug',
  		'terms' => $wp_query->queried_object->name,
  	),
  )
);
$my_query = null;
$my_query = new WP_Query($args);
//wp_reset_query();  // Restore global post data stomped by the_post().


get_header(); ?>

<main id="main" class="site-main" role="main">

	<div id="primary" class="content-area">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">Legacy Wall, 
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
				<a href="#secondary" class="anchor-button">See More</a>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<div class="legacy-name-list">
				<?php while ( $my_query->have_posts() ) : $my_query->the_post(); ?>

					<?php
						/* Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						get_template_part( 'page-templates/partials/content', 'legacy-wall-name-no-link' );
					?>

				<?php endwhile; ?>
			</div>

			<?php berea_paging_nav(); ?>

		<?php else : ?>

			<?php get_template_part( 'page-templates/partials/content', 'none' ); ?>

		<?php endif; ?>

	</div><!-- #primary -->

	<?php get_sidebar('legacy-wall'); ?>

	<div style="clear:both;"></div>

</main><!-- #main -->

<?php get_footer(); ?>
