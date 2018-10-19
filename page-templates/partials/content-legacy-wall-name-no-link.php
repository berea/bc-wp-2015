<?php
/**
 * @package berea
 */
$terms = wp_get_post_terms(get_the_ID(), 'legacy-wall-year');
?>

<?php tha_entry_before(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php tha_entry_top(); ?>
	<header class="entry-header">
		<div class="entry-title"><?php the_title(); ?></div>
	</header><!-- .entry-header -->
	<?php tha_entry_bottom(); ?>
</article><!-- #post-## -->
<?php tha_entry_after(); ?>
