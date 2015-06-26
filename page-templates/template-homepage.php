<?php
/**
 * Template Name: Homepage
 *
 * This template display content at full with, with no sidebars.
 * Please note that this is the WordPress construct of pages and that other 'pages' on your WordPress site will use a different template.
 *
 * @package berea
 */

get_header(); ?>

        <div id="primary" class="content-area">

            <div id="homepage-slider">

                <?php include 'partials/homepage_slider.php'; ?>

            </div>


                <main id="main" class="site-main" role="main">
 
                        <div id="homepage-central-content-block">

                                <?php include 'partials/no_tuition_promise.php'; ?>

                                <?php include 'partials/news.php'; ?>

                                <?php include 'partials/people_slider.php'; ?>

                        </div><!-- #homepage-central-content-block -->

                </main><!-- #main -->
        </div><!-- #primary -->

<?php get_footer(); ?>
