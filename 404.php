<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package berea
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

        <?php

        $page = get_posts(
            array(
                'name'      => 'page-not-found',
                'post_type' => 'page'
            )
        );
        ?>

        <div class="entry-content">

            <?php echo $page[0]->post_content; ?>

        </div>

        <?php
            /* Restore original Post Data */
            wp_reset_postdata();
        ?>

    </main><!-- #main -->

</div><!-- #primary -->

<?php get_footer(); ?>
