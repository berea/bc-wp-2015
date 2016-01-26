<?php
/**
 * @package berea
 */

$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>';
if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
	$time_string .= '<time class="updated" datetime="%3$s">%4$s</time>';
}

$time_string = sprintf( $time_string,
	esc_attr( get_the_date( 'c' ) ),
	esc_html( get_the_date() ),
	esc_attr( get_the_modified_date( 'c' ) ),
	esc_html( get_the_modified_date() )
);
?>

<?php tha_entry_before(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php tha_entry_top(); ?>
	<section class="news-link">
		<a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>

		<span class="post-date"></span> <?php print $time_string; ?>
	</section><!-- .entry-header -->

	<?php tha_entry_bottom(); ?>
</article><!-- #post-## -->
<?php tha_entry_after(); ?>
