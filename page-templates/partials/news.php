<!-- Last 4 news items -->

<h1>NEWS</h1>


<!--
<ul>
	<li>
		<p>Jan 09, 2015</p>
		<img src="/wp-content/themes/berea2015/bc-wp-2015/assets/images/221_147_placeholder.jpg">
		<p>Martin Luther King, Jr. Events at Berea College</p>
	</li>
	<li>
		<p>Jan 08, 2015</p>
		<img src="/wp-content/themes/berea2015/bc-wp-2015/assets/images/221_147_placeholder.jpg">
		<p>Berea Named Most Affordable College in America by USA Today</p>
	</li>
	<li>
		<p>Jan 08, 2015</p>
		<img src="/wp-content/themes/berea2015/bc-wp-2015/assets/images/221_147_placeholder.jpg">
		<p>Berea College Selected by Carnegie for 2015 Community Engagement Classification</p>
	</li>
	<li>
		<p>Dec 18, 2014</p>
		<img src="/wp-content/themes/berea2015/bc-wp-2015/assets/images/221_147_placeholder.jpg">
		<p>Berea College Named a 2015 Best Value College by Kiplinger's Personal Finance</p>
	</li>
</ul>
-->

<?php

// The Query
$the_query = new WP_Query( 'category_name=news&showposts=4' );

// The Loop
if ( $the_query->have_posts() ) {
	echo '<ul>';
	while ( $the_query->have_posts() ) {
		$the_query->the_post();
		echo '<li>';
		if ( has_post_thumbnail() ) { 
			the_post_thumbnail( 'news-thumbnail' );
		}
		else {
			echo '<img src="/wp-content/themes/berea2015/bc-wp-2015/assets/images/221_147_placeholder.jpg" height="147" width="221">';
		}
		echo '<br />' . get_the_title() . '</li>';
	}
	echo '</ul>';
} else {
	// no posts found
}
/* Restore original Post Data */
wp_reset_postdata();