<?php
/**
 * berea functions and definitions
 *
 * @package berea
 */

if ( ! function_exists( 'berea_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function berea_setup() {

	/**
	 * Set the content width based on the theme's design and stylesheet.
	 */
	if ( ! isset( $content_width ) ) {
		$content_width = 640; /* pixels */
	}

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on berea, use a find and replace
	 * to change 'berea' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'berea', get_template_directory() . '/library/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

	/*
	 * Add Editor Style for adequate styling in text editor.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_editor_style
	 */
	add_editor_style( '/assets/css/style-min.css' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menu( 'primary-navigation', __( 'Primary Menu', 'berea' ) );

	// Enable support for Post Formats.
	add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link', 'status', 'gallery', 'chat', 'audio' ) );

	// Setup the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'berea_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

    // Enable support for custom header images.
    add_theme_support( 'custom-header' );

	/**
	 * Including Theme Hook Alliance (https://github.com/zamoose/themehookalliance).
	 */
	include( 'library/vendors/tha-theme-hooks/tha-theme-hooks.php' );

	/**
	 * WP Customizer
	 */
	require get_template_directory() . '/library/vendors/wp-customizer/customizer.php';

	/**
	 * Implement the Custom Header feature.
	 */
	//require get_template_directory() . '/library/vendors/custom-header.php';

	/**
	 * Custom template tags for this theme.
	 */
	require get_template_directory() . '/library/vendors/template-tags.php';

	/**
	 * Custom functions that act independently of the theme templates.
	 */
	require get_template_directory() . '/library/vendors/extras.php';


	/**
	 * Load Jetpack compatibility file.
	 */
	require get_template_directory() . '/library/vendors/jetpack.php';

	/**
	 * Including TGM Plugin Activation
	 */
	// not using the tgm required plugin tools
	// require_once( get_template_directory() . '/library/vendors/tgm-plugin-activation/required-plugins.php' );

	/** 
	 * Thumbnail used for news teaser in the universal nav and on the homepage 
	 **/
	add_image_size( 'news-thumbnail', 221, 147, true ); // (cropped)

}
endif; // berea_setup
add_action( 'after_setup_theme', 'berea_setup' );

/**
 * Enqueue scripts and styles.
 */
if ( !function_exists('berea_scripts') ) :

	
    function berea_scripts_styles() {
    
        /*   REGISTER MEGA DROPDOWN SCRIPTS */
        //removed the mega-site-navigation from the filepath
        wp_register_script('megadropdown_modernizr', get_template_directory_uri().'/assets/js/vendor/modernizr.js');

        /*   Change from WP default jQuery version to 2.2.1 (used by mega-site-navigation) */
        wp_deregister_script('jquery');
        wp_register_script('jquery', get_template_directory_uri().'/assets/js/vendor/jquery-2.1.1.js');  


        //wp_register_script('megadropdown_jquery_menu_aim', get_template_directory_uri().'/assets/mega-site-navigation/js/jquery.menu-aim.js');
        wp_register_script('megadropdown_main', get_template_directory_uri().'/assets/js/vendor/navigation.js');
    
        /*   REGISTER MEGA DROPDOWN STYLES <-- integrated with the other css files 	*/
    
    
        /*   CALL ALL CSS AND SCRIPTS FOR SITE */
        wp_enqueue_script('megadropdown_modernizr', array(), 'false');
        wp_enqueue_script('jquery');  
        wp_enqueue_script('megadropdown_jquery_menu_aim');
        wp_enqueue_script('megadropdown_main');
    
    	//not sure if needed since it's now consolidated.
        wp_enqueue_style('megadropdown_reset');
        wp_enqueue_style('megadropdown_style');
    }
    add_action( 'wp_enqueue_scripts', 'berea_scripts_styles' );	



	function berea_scripts() {

		if ( SCRIPT_DEBUG || WP_DEBUG ) :

			// Concatonated Scripts
			wp_enqueue_script( 'production-js', get_template_directory_uri() . '/assets/js/production.js', array( 'jquery' ), '1.0.0', false );

			// Main Style
			wp_enqueue_style( 'berea-style',  get_stylesheet_directory_uri() . '/assets/css/style.css' );

		else :
			// Concatonated Scripts
			wp_enqueue_script( 'production-js', get_template_directory_uri() . '/assets/js/production-min.js', array( 'jquery' ), '1.0.0', false );

			// Main Style
			wp_enqueue_style( 'berea-style',  get_stylesheet_directory_uri() . '/assets/css/style-min.css' );

		endif;

		// Dashicons
		 wp_enqueue_style( 'dashicons' );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}
	add_action( 'wp_enqueue_scripts', 'berea_scripts' );
	
endif; // Enqueue Scripts and Styles

/**
 * Register widgetized area and update sidebar with default widgets.
 */
if ( !function_exists('berea_widgets_init') ) :
	function berea_widgets_init() {
		register_sidebar( array(
			'name'          => __( 'Sidebar', 'berea' ),
			'id'            => 'sidebar-1',
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h4 class="widget-title">',
			'after_title'   => '</h4>',
		) );
	}
	add_action( 'widgets_init', 'berea_widgets_init' );
endif;

/**
 * Custom Hooks and Filters
 */
if ( !function_exists('berea_add_breadcrumbs') ) :
	function berea_add_breadcrumbs() {
		if ( !is_front_page() ) {
			if (function_exists('HAG_Breadcrumbs')) { HAG_Breadcrumbs(array(
			  'prefix'     => __('You are here: ', 'berea'),
			  'last_link'  => true,
			  'separator'  => '|',
			  'excluded_taxonomies' => array(
			    'post_format'
			  ),
			  'taxonomy_excluded_terms' => array(
			    'category' => array('uncategorized')
			  ),
			  'post_types' => array(
			    'gizmo' => array(
			      'last_show'          => false,
			      'taxonomy_preferred' => 'category'
			    ),
			    'whatzit' => array(
			      'separator' => '&raquo;'
			    )
			  )
			)); }
		}
	}
	add_action( 'tha_content_top', 'berea_add_breadcrumbs' );
endif;

if ( !function_exists('berea_optional_scripts') ) :
    function berea_optional_scripts() {

        // Header Image
        if( get_header_image() == '') {

        } else {
            ?>
            <style type="text/css">
                .homepage-slider {
					background: url("<?php echo get_header_image(); ?>" );
					background-size: contain;
					background-repeat: no-repeat;
					background-position:center top;
					overflow: hidden;
				}
            </style>
        <?php }

    }
    add_action( 'wp_head', 'berea_optional_scripts' );
endif;


if ( !function_exists('berea_mobile_styles') ) :
	function berea_mobile_styles() {
		$value = get_theme_mod( 'berea_mobile_hide_arrow' );

		 if( get_theme_mod( 'berea_mobile_hide_arrow' ) == 0 ) { ?>
			<style>
				.menu-button i.navicon {
					display: none;
				}
			</style>
		<?php  } else {

		 }
	}
	add_action('wp_head', 'berea_mobile_styles' );
endif;

add_action( 'tha_head_bottom', 'berea_add_selectivizr' );
function berea_add_selectivizr() { ?>
	<!--[if (gte IE 6)&(lte IE 8)]>
  		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/selectivizr/selectivizr-min.js"></script>
  		<noscript><link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style-min.css" /></noscript>
	<![endif]-->
<?php }






// Custom functions for the Berea themes:

function berea_get_default_menu()
{

	$args = array(
		'order' => 'ASC',
		'orderby' => 'menu_order',
		'post_type' => 'nav_menu_item',
		'post_status' => 'publish',
		'output' => ARRAY_A,
		'output_key' => 'menu_order',
		'nopaging' => true,
		'update_post_term_cache' => false);

	$menu = "Default";

	$menu_items = wp_get_nav_menu_items($menu, $args);

	$output = array();

	$column = 0;
	$column_limit = 4;
	$item = 0;
	$item_limit = 4;

	foreach ($menu_items as $menu_item) {

		// Increment item counter, because we just got a new item.
		$item++;

		// Check for new column. This is signified by $menu_item->menu_item_parent = 0.
		// If it's a new one, increment $column and reset $item.
		if ($menu_item->menu_item_parent == 0) {
			$column++;
			$item = 0;
		}
		if ($column < $column_limit) {
			// This is a column we should display.

			if ($item < $item_limit) {
				// Less than item max, display it.
				$output[$column][] = '<a href="' . $menu_item->url . '">' . $menu_item->ID . ': ' . $menu_item->title . ', parent: ' . $menu_item->menu_item_parent . "</a>";

			} else {
				// Greater than item_max, don't display it.

			}

		} else {
			// This is not a column we should display.

		}

	}


	return $output;
}

// Not allowed to be overwritten in child themes.
function berea_get_homepage_slider() {

	$parent_slider = get_template_directory() . '/page-templates/partials/homepage_slider.php';
	$child_slider = get_stylesheet_directory() . '/page-templates/partials/homepage_slider.php';

	if ( file_exists($child_slider) ) {
		include($child_slider);
	}
	else {
		include($parent_slider);
	}

}

function berea_get_news_for_universal_nav() {

    $sites = wp_get_sites();

    //print_r($sites);
    // The site that will have news items is the one with:
    //  [path] => /
    $main_site_id = 0;
    foreach ($sites as $site) {
        if ($site['path'] == '/') {
            $main_site_id = $site['blog_id'];
        }
    }

    if ($main_site_id > 0) {

        switch_to_blog($main_site_id);

        $the_query = new WP_Query('showposts=4');

        // The Loop
        if ($the_query->have_posts()) {
            while ($the_query->have_posts()) {
                $the_query->the_post();
                echo '<li>';
                echo '<p class="cd-news-date">' . get_the_date('M d, Y') . '</p>';
                echo '<a class="cd-nav-item" href="' . get_permalink() . '">';
                if (has_post_thumbnail()) {
                    the_post_thumbnail('news-thumbnail');
                } else {
                    echo '<img src="' . get_template_directory_uri() . '/assets/images/221_147_placeholder.jpg" height="147" width="221">';
                }
                echo '<br /><h3 class="cd-news-title">' . get_the_title() . '</h3></a></li>';
            }
        } else {
            // no posts found
        }

        /* Restore original Post Data */
        wp_reset_postdata();

        restore_current_blog();

    }
    else {
        // We did not find a blog at '/', so there's nowhere to pull news from.
    }

}

