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

// Removed per Charlie's request
//	add_editor_style( '/assets/css/style-min.css' );

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

	function berea_scripts() {

		/* temporaryily enforcing unminified version
		#TODO: allow script debug after minify workflow is resolved */
		if ( TRUE || SCRIPT_DEBUG || WP_DEBUG ) :
			// jQuery 2.1.1 - required for megadropdown scripts
        	wp_deregister_script('jquery');
        	wp_register_script('jquery', get_template_directory_uri().'/assets/js/jquery-2.1.1.min.js');

			// Concatonated Scripts
			wp_enqueue_script( 'production-js', get_template_directory_uri() . '/assets/js/production.js', array( 'jquery' ), '1.0.0', false );


            // specific page script files to trigger analytics tracking event "rt"
			// at some point, we should implement something better than the above
			if ( (is_page(735)&&is_page('think-know-berea-college')) || (is_page(736)&&is_page('endowment-isnt-enough')) || (is_page(737)&&is_page('shanitas-story')) || (is_page(738)&&is_page('homeless-to-thriving')) || (is_page(745)&&is_page('your-gifts-matter')) || (is_page(781)&&is_page('invest-in-lives-of-great-promise')) || (is_page(801)&&is_page('no-tuition-promise')) ) {
    		

				 ?>
 				 	<script>analytics.track('rt');</script>
  				 <?php


  			}

  			// specific page script files to trigger MediaMath analytics
			// at some point, we should implement something better than the above

			if ( (is_page(1048)&&is_page('promise-made-never-forgotten'))  ) {
    		

				 ?>
 				 	<script language='JavaScript1.1' async src='//pixel.mathtag.com/event/js?mt_id=1244600&mt_adid=197269&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3='></script>
  				 <?php


  			}

  			

			// Main Style
			if (wp_get_theme()->name != 'Berea 2015 - Stopgap Child Theme') {
				wp_enqueue_style( 'berea-style',  get_template_directory_uri() . '/assets/css/style-v1.css' );
			}
			else {
				wp_enqueue_style( 'berea-style',  get_template_directory_uri() . '/assets/css/style-stopgap.css' );
			}

		else :
			// jQuery 2.1.1 - required for megadropdown scripts
        	wp_deregister_script('jquery');
        	wp_register_script('jquery', get_template_directory_uri().'/assets/js/jquery-2.1.1.min.js');

			// Concatenated Scripts
			wp_enqueue_script( 'production-js', get_template_directory_uri() . '/assets/js/production-min.js', array( 'jquery' ), '1.0.0', false );

			// Main Style
			wp_enqueue_style( 'berea-style',  get_template_directory_uri() . '/assets/css/style-min.css' );

		endif;

		// Berea Main JS
		wp_enqueue_script( 'berea', get_template_directory_uri() . '/assets/js/custom/berea.js', '1.0.0', false );

		// Dashicons
		 wp_enqueue_style( 'dashicons' );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}
	add_action( 'wp_enqueue_scripts', 'berea_scripts' );

endif; // Enqueue Scripts and Styles


if ( !function_exists('berea_page_scripts') ) :
	/*
	 * For pages that need special files included
	 */
	function berea_page_scripts() {
	}
	add_action('wp_enqueue_scripts', 'berea_page_scripts');
endif; // Page Scripts

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
        if( get_header_image() == '' ) {
			?>
			<style type="text/css">
                .homepage-slider-background {
					background-image: url("<?php echo get_template_directory_uri(); ?>/assets/images/default_header.jpg");
				}
            </style>
			<?php
        } else {
			?>
			<style type="text/css">
				.homepage-slider-background {
					background-image: url("<?php echo get_header_image(); ?>");
				}
			</style>
			<?php
		}

		// Secondary Header Image
		if ( get_theme_mod('berea_secondary_page_header_image') == '' ) {

		}
		else {
			if(is_page(970)) {
			?>
				 <style type="text/css">
                .secondary-slider-background {
                    background-image: url(https://www.berea.edu/give/wp-content/uploads/sites/8/2017/08/20150503_Commencement_OA-380-high-res-2.jpg);
                }
                .homepage-slider-sizing-aspect-ratio.ratio_1024x192:before {
				    padding-top: 45%;
				}


            </style>
            <?php

			} 
			else {
			?>
            <style type="text/css">
                .secondary-slider-background {
                    background-image: url("<?php echo get_theme_mod('berea_secondary_page_header_image') ?>" );
                }
            </style>
        <?php
        	}
		}

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


// Add specific CSS class to trap child theme name
add_filter( 'body_class', 'body_class_add_child_theme_name' );
function body_class_add_child_theme_name( $classes ) {
	// add 'class-name' to the $classes array
	$my_theme = wp_get_theme();
	if ($my_theme->get( 'Template' )) {
		$childthemeid=$my_theme->get_stylesheet_directory_uri();
		// explode on / and take the last folder - the template's directory name
		if ($childthemeid) { $childthemeid=explode('/',$childthemeid); }
		if ($childthemeid) { $childthemeid=array_pop($childthemeid); }
		if ($childthemeid) { $classes[] = 'child-theme-'.$childthemeid; }
	}
	// return the $classes array
	return $classes;
}



// Custom functions for the Berea themes:

function berea_has_default_menu()
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
	 return ($menu_items) ? true : false;
}

function berea_get_default_menu($for_mobile=false, $comprehensive=false)
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

		if ($comprehensive) {

			if ($menu_item->menu_item_parent == 0) {
				$column++;
			}

			// show all menu items, without limit on columns or item count
			if ($for_mobile) {
				//will depend on exact sequence to get to class="" for injecting things - so don't move it
				$url = ($menu_item->menu_item_parent == 0) ? '#' : $menu_item->url;
				$output[$column][] = '<a href="' . $url . '">' . $menu_item->title . "</a>";
			} else {
				$output[$column][] = '<a href="' . $menu_item->url . '">' . $menu_item->title . "</a>";
			}

		} else {


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
					//$output[$column][] = '<a href="' . $menu_item->url . '">' . $menu_item->ID . ': ' . $menu_item->title . ', parent: ' . $menu_item->menu_item_parent . "</a>";
					if ($for_mobile) {
						//will depend on exact sequence to get to class="" for injecting things - so don't move it
						$url = ($menu_item->menu_item_parent == 0) ? '#' : $menu_item->url;
						$output[$column][] = '<a href="' . $url . '">' . $menu_item->title . "</a>";
					} else {
						$output[$column][] = '<a href="' . $menu_item->url . '">' . $menu_item->title . "</a>";
					}

				} else {
					// Greater than item_max, don't display it.

				}

			} else {
				// This is not a column we should display.

			}
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

// Not allowed to be overwritten in child themes.
function berea_get_secondary_slider() {


    $parent_slider = get_template_directory() . '/page-templates/partials/secondary_slider.php';
    $child_slider = get_stylesheet_directory() . '/page-templates/partials/secondary_slider.php';


    $dir    = get_template_directory() . '/page-templates/partials/';
    echo "<!-- looking in [" . $dir . "] for files -->\n";
    $files1 = scandir($dir);

    if ( file_exists($child_slider) ) {
		echo "<!-- Secondary Slider: REALLY using child slider -->\n";
        include($child_slider);
    }
    else {
		echo "<!-- Secondary Slider: REALLY falling back to parent slider -->\n";
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


// Add setting to the network admin menu for broadcasting a message at the top of all sites
function berea_network_admin_broadcast() {
	add_submenu_page('settings.php', 'Broadcast Message', 'Broadcast', '', 'settings.php', 'berea_network_admin_broadcast_form');
}
function berea_network_admin_broadcast_form() {
	// Must be a super admin
	if (!is_super_admin()) {
		wp_die(__('You do not have permission to access this page.'));
	}

	$hidden_field_name = 'icdaj3543fg943j';
	$hidden_field_value = 'fida93a34js43';

	// See if the form has been submitted
	if (isset($_POST[$hidden_field_name]) && $_POST[$hidden_field_name] == $hidden_field_value) {
		update_option('berea_broadcast_enabled', isset($_POST['enabled']) ? TRUE : FALSE);
		update_option('berea_broadcast_homepage', isset($_POST['homepage']) ? TRUE : FALSE);
		update_option('berea_broadcast_message', stripslashes($_POST['message']));
		update_option('berea_broadcast_icon', $_POST['icon']);
		?>
			<div class="updated">Settings have been saved.</div>
		<?php
	}

	// Values
	$enabled = get_option('berea_broadcast_enabled', FALSE);
	$homepage = get_option('berea_broadcast_homepage', FALSE);
	$message = get_option('berea_broadcast_message', 'Initial Message');
	$icon = get_option('berea_broadcast_icon', 'bullhorn');

	// Now the regular form
	?>
		<h1>Berea Broadcast Message</h1>

		<form action="" method="post" name="berea-broadcast">
			<input type="hidden" name="<?php echo $hidden_field_name; ?>" value="<?php echo $hidden_field_value; ?>">

			<div>
				<label for="enabled">Message Enabled:</label>
				<input type="checkbox" name="enabled" <?php echo $enabled ? 'checked' : ''; ?>>
			</div>
			<div>
				<label for="homepage">Homepage Only:</label>
				<input type="checkbox" name="homepage" <?php echo $homepage ? 'checked' : ''; ?>>
			</div>
			<div>
				<label for="message">Message:</label>
				<div><textarea name="message" id="message" cols="84" rows="10"><?php echo $message ?></textarea></div>
			</div>
			<div>
				<label for="icon">Icon:</label>
				<select name="icon" id="icon">
					<option value="bullhorn" <?php echo ($icon == 'bullhorn') ? 'SELECTED' : ''; ?>>Bullhorn</option>
					<option value="graduation-cap" <?php echo ($icon == 'graduation-cap') ? 'SELECTED' : ''; ?>>Grad Cap</option>
					<option value="hourglass-half" <?php echo ($icon == 'hourglass-half') ? 'SELECTED' : ''; ?>>Hourglass</option>
				</select>
			</div>
			<div>
				<input type="submit" name="Submit" value="Save Changes">
			</div>
		</form>
	<?php
}
add_action('network_admin_menu', 'berea_network_admin_broadcast');

//Add shortcode to a category, tag, or custom taxonomy descriptions.  Specifically, we wanted to add a slider to the year category
add_filter( 'term_description', 'do_shortcode' );

// Enable shortcodes in text widgets
add_filter('widget_text','do_shortcode');

/*
 * Add class based on current multisite to the body, to help with theming
 * From: https://codex.wordpress.org/Plugin_API/Filter_Reference/body_class#Classes_in_WordPress_Multisite
 */
add_filter('body_class', 'multisite_body_classes');
function multisite_body_classes($classes) {
        $id = get_current_blog_id();
        $slug = strtolower(str_replace(' ', '-', trim(get_bloginfo('name'))));
        $classes[] = $slug;
        $classes[] = 'site-id-'.$id;
        return $classes;
}

function great_commitments_enqueue_custom_accordion() {
	if (is_page(498)){
		wp_enqueue_script("https://bereaedu.wpengine.com/the-great-commitments/wp-content/themes/bc-wp-2015/assets/js/custom.js");
	}
}
function great_commitments_dequeue_vc_accordion() {
	if (is_page(498)){
		wp_dequeue_script("https://bereaedu.wpengine.com/the-great-commitments/wp-content/plugins/js_composer/assets/lib/vc_accordion/vc-accordion.min.js?ver=4.12.1");
	}
}
//add_action( 'wp_enqueue_scripts', 'enqueue_nav_toggle')
add_action( 'wp_enqueue_scripts', 'great_commitments_enqueue_custom_accordion');
add_action( 'wp_print_scripts', 'great_commitments_dequeue_vc_accordion');
remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );

if(get_current_blog_id() == 8){
	remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );
	//remove_action( 'woocommerce_view_order', 'woocommerce_order_details_table', 10 );
	add_filter( 'woocommerce_product_single_add_to_cart_text', 'woo_custom_cart_button_text' );
	add_filter( 'woocommerce_coupons_enabled', 'hide_coupon_field_on_cart' );
	add_filter( 'woocommerce_coupons_enabled', 'hide_coupon_field_on_checkout' );
	add_filter('add_to_cart_redirect', 'themeprefix_add_to_cart_redirect');
	add_filter( 'woocommerce_enable_order_notes_field', '__return_false' );
	add_filter( 'woocommerce_checkout_fields', 'unset_unwanted_checkout_fields' );
	remove_action( 'woocommerce_checkout_order_review', 'woocommerce_order_review', 10 );
	add_action( 'woocommerce_checkout_before_order_review', 'donation_amount_under_your_order_section', 10, 0);
	add_filter( 'wc_add_to_cart_message_html', '__return_null' );

	function donation_amount_under_your_order_section() {
			echo '<script>
					var element = document.getElementById("order_review_heading");
					element.parentNode.removeChild(element);
				</script>
				<h3>Donation amount:</h3>
				<font size="4"> $' . WC()->cart->subtotal . '</font>
				<br><br>';
	}

	function unset_unwanted_checkout_fields( $fields ) {

		// add or remove billing fields you do not want
		// list of fields: http://docs.woothemes.com/document/tutorial-customising-checkout-fields-using-actions-and-filters/#section-2
		$billing_keys = array(
			'billing_company',
			'billing_phone',
			'billing_address_1',
			'billing_address_2',
			'billing_city',
			'billing_postcode',
			'billing_country',
			'billing_state',
		);
		// unset each of those unwanted fields
		foreach( $billing_keys as $key ) {
			unset( $fields['billing'][$key] );

		}
		//unset($fields['order']['order_comments']); SAME
		
		return $fields;
	}

	function themeprefix_add_to_cart_redirect() {
 		global $woocommerce;
 		$checkout_url = $woocommerce->cart->get_checkout_url();
 		return $checkout_url;
	}
	 
	function woo_custom_cart_button_text() {
	 
	        return __( 'Submit', 'woocommerce' );
	 
	}

	function hide_coupon_field_on_cart( $enabled ) {
		if ( is_cart() ) {
			$enabled = false;
		}
		return $enabled;
	}
	
	function hide_coupon_field_on_checkout( $enabled ) {
		if ( is_checkout() ) {
			$enabled = false;
		}
		return $enabled;
	}
	//add_action('woocommerce_cart_updated', 'growdev_woocommerce_cart_updated', 90);
	function growdev_woocommerce_cart_updated ( $cart ){
	// output subtotal
		echo '<script>';
  		echo 'console.log(' . WC()->cart->subtotal . ')';
  		echo '</script>';
	// output the
		//error_log( "get_cart_subtotal: " . WC()->cart->get_cart_subtotal() );
	}
	add_action( 'woocommerce_thankyou', function( $order_id ){
    $order = new WC_Order( $order_id );

    $url = 'https://www.berea.edu/give/donation-processed/';

    if ( $order->status != 'failed' ) { 
        echo "<script type=\"text/javascript\">window.location = '".$url."'</script>";
    }
});

	
}

