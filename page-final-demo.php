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
		<div class="gc-cd-stretchy-nav" id="positionChange">
	
				<a class="gc-cd-nav-trigger" href="#0">
			
			<span aria-hidden="true" class="gc"></span>
		</a>


		<ul class="gc">
			<li class="gc"><a href="#education" class="active hat"><span style="text-decoration:none; display: inline-block;">Educational Opportunity</span></a></li>
			<li class="gc"><a href="#liberalarts"><span style="text-decoration:none; display: inline-block;">The Liberal Arts</span></a></li>
			<li class="gc"><a href="#faith" class="cross"><span style="text-decoration:none; display: inline-block;">Christian Values</span></a></li>
			<li class="gc"><a href="#labor"><span style="text-decoration:none; display: inline-block;">The Dignity of Labor</span></a></li>
			<li class="gc"><a href="#kinship"><span style="text-decoration:none; display: inline-block;">The Kinship of All People</span></a></li>
			<li class="gc"><a href="#democratic" class="chatbubbles"><span style="text-decoration:none; display: inline-block;">Gender Equality</span></a></li>
			<li class="gc"><a href="#plainliving"><span style="text-decoration:none; display: inline-block;">Supportive and Sustainable Living</span></a></li>
			<li class="gc"><a href="#appalachian" class="quilt"><span style="text-decoration:none; display: inline-block;">Serving Appalachia</span></a></li>
		</ul>

		<span aria-hidden="true" class="gc-stretchy-nav-bg"></span>
	
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
	?>