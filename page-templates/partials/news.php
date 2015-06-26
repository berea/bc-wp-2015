<!-- Last 4 news items -->


<h3 class="heading-underlined">NEWS</h3>

<div class="news">

<?php

// The Query
$the_query = new WP_Query( 'category_name=news&showposts=4' );

// The Loop
if ( $the_query->have_posts() ) {
	echo '<ul>';
	while ( $the_query->have_posts() ) {
		$the_query->the_post();
		echo '<li>';
        echo "<p style='text-align: right;'>" . get_the_date('F j') . "</p>";
		if ( has_post_thumbnail() ) { 
			the_post_thumbnail( 'news-thumbnail' );
		}
		else {
			echo '<img src="/wp-content/themes/berea2015/bc-wp-2015/assets/images/221_147_placeholder.jpg" height="147" width="221">';
		}
		echo '<p>' . get_the_title() . '</p></li>';
	}
	echo '</ul>';
} else {
	// no posts found
}
/* Restore original Post Data */
wp_reset_postdata();

?>

</div>