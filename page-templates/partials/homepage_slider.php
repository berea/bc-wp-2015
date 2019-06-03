<!-- Parent theme homepage slider -->

<!-- This is the homepage slider -->

<div class="homepage-slider homepage-slider-sizing-aspect-ratio ratio_1024x440">
<!--	<div class="homepage-slider-background"></div>-->

<div class="homepage-slider-background">
    <?php if ( function_exists( 'soliloquy' ) ) { soliloquy( 'default', 'slug' ); } ?>
</div>

    <div class="hero-nav-wrapper">
        <div class="hero-nav">
            <div class="hero-nav-item">
                <a href="https://primary.berea.edu/admissions/apply/">
                    <img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/`.png" width="25" height="25" alt=""/>
                    <span class="vertical-center nudge-right text-uppercase">Apply</span>
                </a>
            </div>
            <div class="hero-nav-item">
                <a href="https://primary.berea.edu/give-to-berea/">
                    <img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/give.png" width="25" height="25" alt=""/>
                    <span class="vertical-center nudge-right text-uppercase">Give</span>
                </a>
            </div>
            <div class="hero-nav-item">
                <a href="https://primary.berea.edu/admissions/visit-campus/">
                    <img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/visit.png" width="25" height="25" alt=""/>
                    <span class="vertical-center nudge-right text-uppercase">Visit</span>
                </a>
            </div>
            <div class="hero-nav-item">
                <a href="https://www.berea.edu/campus/">
                    <img class="vertical-center" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/explore.png" width="25" height="25" alt=""/>
                    <span class="vertical-center nudge-right text-uppercase">Explore</span>
                </a>
            </div>
        </div>
    </div>

</div><!-- .homepage-slider -->

