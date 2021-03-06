<?php
/**
 * Two Column, Right-Sidebar
 *
 * This is the most generic template file in a WordPress theme

 * and one of the two required files for a theme (the other being style.css?01dba3187f)

 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package berea
 */

get_header(); ?>


<main id="main" class="site-main" role="main">

	<div id="primary" class="content-area">
		<?php if ( have_posts() ) : ?>

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php
					/* Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'page-templates/partials/content', 'page' );
				?>

			<?php endwhile; ?>

			<?php berea_paging_nav(); ?>

		<?php else : ?>

			<?php get_template_part( 'page-templates/partials/content', 'none' ); ?>

		<?php endif; ?>

	</div><!-- #primary -->


    <?php get_sidebar('legacy-wall'); ?>

    <div style="clear:both;"></div>

</main>

<?php get_footer(); ?>
