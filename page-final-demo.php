<?php
/**
 * The Great Commitments
 *
 *
 * @package berea
 */

get_header(); ?>

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

<?php get_footer(); ?>