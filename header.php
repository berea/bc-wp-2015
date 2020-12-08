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
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link href='//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">




<script type="text/javascript">
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("MetaRouter snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.metarouter.io/a/v1/"+t+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";
  analytics.load("MXJfDsoWzKiE5LSrG");
  analytics.page()
  }}();

  </script>

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '308581360085575');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=308581360085575&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-22618401-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-22618401-1');
</script>

<!-- End Google Analytics -->


	<?php tha_head_bottom(); ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class( $class_for_ribbon); ?>>
<?php tha_body_top(); ?>

<?php
	// See if the broadcast message is enabled
	$broadcast_enabled = get_option('berea_broadcast_enabled', FALSE);
	$broadcast_homepage = get_option('berea_broadcast_homepage', FALSE);

	if ($broadcast_enabled && (!$broadcast_homepage || ($broadcast_homepage && is_front_page()))) {
		$broadcast_message = get_option('berea_broadcast_message', 'Initial Message');
		$broadcast_icon = get_option('berea_broadcast_icon', 'bullhorn');
		?>
			<div id="bar-msg">
				<div class="table">
					<div class="table-row">
						<div class="table-cell">
							<i class="fa fa-<?php echo $broadcast_icon; ?>"></i>
						</div>
						<div class="table-cell"><?php echo $broadcast_message; ?></div>
					</div>
				</div>
				
			</div>
		<?php
	}
?>

<div id="page" class="hfeed site">

	<div id="ribbon" class="cd-header-ribbon">
		<a href="<?php $root_url = network_home_url(); echo $root_url; ?>" class="ribbon-link" aria-label="Berea College Home Page"><div id="logo"></div></a>
	</div>

	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'berea' ); ?></a>
	<div class="wrap">
		<?php tha_header_before(); ?>
		<header id="masthead" class="site-header cd-main-header" role="banner" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
			<?php tha_header_top(); ?>


		<ul class="cd-header-buttons"><!-- Needed for mega-site-navigation -->
			<li><a class="cd-search-trigger" href="#cd-search" aria-label="Search Site"><span></span></a></li>
			<li><a class="cd-nav-trigger" href="#cd-primary-nav" aria-label="Menu"><span></span></a></li>
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
				else if (is_page(498)){
				}
				else {
                    berea_get_secondary_slider();
                }
			?>

