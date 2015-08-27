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

        <div id="primary" class="content-area">
        
                <main id="main" class="site-main" role="main">

                    <div class="entry-content">

                        <?php the_content(); ?>

                    </div>

                </main><!-- #main -->

        </div><!-- #primary -->

<?php get_footer(); ?>
