<?php
/**
 * Template Name: Full-Width, No Sidebars
 *
 * This template display content at full with, with no sidebars.
 * Please note that this is the WordPress construct of pages and that other 'pages' on your WordPress site will use a different template.
 *
 * @package berea
 */

get_header(); ?>

<main id="main" class="site-main" role="main">
<!-- template file: template-full-width.php -->

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

        <?php else : ?>

            <?php get_template_part( 'partials/content', 'none' ); ?>

        <?php endif; ?>

    </div><!-- #primary -->

</main><!-- #main -->

<?php get_footer(); ?>
