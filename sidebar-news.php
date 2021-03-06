<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package berea
 */

// Custom Archives, spun off of wp_get_archives code
global $wpdb, $wp_locale;
$last_changed = wp_cache_get( 'last_changed', 'posts' );
if ( ! $last_changed ) {
    $last_changed = microtime();
    wp_cache_set( 'last_changed', $last_changed, 'posts' );
}

// Main news
$news_archive = '';
$query = "SELECT YEAR(post_date) AS `year`, count(ID) as posts FROM $wpdb->posts JOIN $wpdb->term_relationships ON object_id=ID WHERE term_taxonomy_id = 5 GROUP BY YEAR(post_date) ORDER BY post_date DESC";
//$key = md5( $query );
$key = "wp_get_archives:$key:$last_changed";
if ( ! $results = wp_cache_get( $key, 'posts' ) ) {
    $results = $wpdb->get_results( $query );
    wp_cache_set( $key, $results, 'posts' );
}
if ( $results ) {
	$count = 0;
    foreach ( (array) $results as $result) {
    	if ($count == 5) {
    		//$news_archive .= get_archives_link( '/archive/news/older', 'Older', 'html', '', '' );
    		break;
    	}

        $url = '/archive/news/' . $result->year;
        $text = sprintf( '%d', $result->year );
        $news_archive .= get_archives_link( $url, $text, 'html', '', '' );
        $count++;
    }
}

// Features Archive
$features_archive = '';
$query = "SELECT YEAR(post_date) AS `year`, count(ID) as posts FROM $wpdb->posts JOIN $wpdb->term_relationships ON object_id=ID WHERE term_taxonomy_id <> 5 GROUP BY YEAR(post_date) ORDER BY post_date DESC";
//$key = md5( $query );
$key = "wp_get_archives:$key:$last_changed";
if ( ! $results = wp_cache_get( $key, 'posts' ) ) {
    $results = $wpdb->get_results( $query );
    wp_cache_set( $key, $results, 'posts' );
}
if ( $results ) {
	$count = 0;
    foreach ( (array) $results as $result) {
    	if ($count == 5) {
    		//$features_archive .= get_archives_link( '/archive/features/older', 'Older', 'html', '', '' );
    		break;
    	}

        $url = '/archive/features/' . $result->year;
        $text = sprintf( '%d', $result->year );
        $features_archive .= get_archives_link( $url, $text, 'html', '', '' );
        $count++;
    }
}

?>
	<?php tha_sidebars_before(); ?>
	<div id="secondary" class="sidebar-news mobile-visible" role="complementary">
		<div id="secondary-inner">
		<?php tha_sidebar_top(); ?>
		<?php do_action( 'before_sidebar' ); ?>
		<ul class="menu">
		<!--
			<li class="menu-item"><a href="/archive/features">Features Archive</a></li>
			<li><ul class="sub-menu column-links">
				<?php echo $features_archive; ?>
			</ul></li>
		-->
			<li class="menu-item"><a href="/archive/news">Media Releases</a></li>
			<li><ul class="sub-menu column-links">
				<?php echo $news_archive; ?>
			</ul></li>
			<!--li class="menu-item"><a href="/media-coverage">Media Coverage</a></li>
			<li><ul class="sub-menu column-links">
				<?php wp_get_archives(array('post_type' => 'media-coverage', 'type' => 'yearly')); ?>
			</ul></li-->
			<li class="menu-item"><a href="/newsroom">Stay in Touch</a></li>
			<li><ul class="sub-menu">
				<li class="menu-item"><a href="/newsroom">Berea Newsroom</a></li>
			</ul></li>
		</ul>
		<?php tha_sidebar_bottom(); ?>
		</div>
	</div><!-- #secondary -->
	<?php tha_sidebars_after(); ?>
