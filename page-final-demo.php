<?php
/**
 * Template Name: The Great Commitments
 *
 *
 * @package berea
 */

get_header();?>
        <div class="gc-hero">
            <div class="hero-textblock">
                <h1>The Great Commitments</h1>
            </div>
        </div>
        <div id="primary" class="content-area">

                <main id="main" class="site-main" role="main">
 
                        <div id="homepage-central-content-block">

     <?php

        ?>

        <div class="entry-content">


        <?php
     if (have_posts()) :
         while (have_posts()) :
             the_post();
             the_content();
         endwhile;
     endif;
     ?>


                            </div>


                        </div><!-- #homepage-central-content-block -->

                </main><!-- #main -->
                
        </div><!-- #primary -->

<?php get_footer();
    //wp_dequeue_script("https://bereaedu.staging.wpengine.com/the-great-commitments/wp-content/plugins/js_composer/assets/lib/vc_accordion/vc-accordion.min.js?ver=4.12.1");
    //wp_enqueue_script("https://bereaedu.staging.wpengine.com/the-great-commitments/wp-content/themes/bc-wp-2015/assets/js/custom.js");
    ?>