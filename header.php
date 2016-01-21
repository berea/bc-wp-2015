<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package berea
 */

// All pages need the short-ribbon class applied to the body tag
// EXCEPT the homepage in child-theme-1. That's the only page that
// gets the tall ribbon.
//
$class_for_ribbon = 'short-ribbon';
if ( is_front_page() && wp_get_theme()->name == 'Berea 2015 - Main Site Child Theme' ) {
    $class_for_ribbon = '';
}

?><!DOCTYPE html>
<?php tha_html_before(); ?>
<html <?php language_attributes(); ?>>
<head>
	<?php tha_head_top(); ?>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<?php
		if (wp_get_theme()->name == 'Berea 2015 - Stopgap Child Theme') {
			echo '<meta name="viewport" content="width=1200">' . "\n";
			echo '<style> html {width:1200px !important; margin-left: auto!important; margin-right: auto !important;} </style>' . "\n";
		}
		else {
			echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
		}
	?>
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="//gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link href='//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

	<?php tha_head_bottom(); ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class( $class_for_ribbon); ?>>
<?php tha_body_top(); ?>
<div id="page" class="hfeed site">
	<!--div id="bar-msg">
		<strong>BEREA COLLEGE CLOSING:</strong> Due to inclement weather, Berea College will be closed on Friday. January 22, 2016. Only essential personnel should report to work.
	</div-->

	<div id="ribbon" class="cd-header-ribbon">
		<a href="<?php $root_url = network_home_url(); echo $root_url; ?>" class="ribbon-link"><div id="logo"></div></a>
	</div>

	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'berea' ); ?></a>
	<div class="wrap">
		<?php tha_header_before(); ?>
		<header id="masthead" class="site-header cd-main-header" role="banner" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
			<?php tha_header_top(); ?>


		<ul class="cd-header-buttons"><!-- Needed for mega-site-navigation -->
			<li><a class="cd-search-trigger" href="#cd-search"><span></span></a></li>
			<li><a class="cd-nav-trigger" href="#cd-primary-nav"><span></span></a></li>
		</ul> <!-- cd-header-buttons -->


			<?php tha_header_bottom(); ?>

		</header><!-- #masthead -->
		<?php tha_header_after(); ?>

		<?php tha_content_before(); ?>
		<div id="content" class="site-content">
			<?php tha_content_top(); ?>


			<?php
				if (is_front_page()) {
					berea_get_homepage_slider();
				}
				else {
                    berea_get_secondary_slider();
                }
			?>

