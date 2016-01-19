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
		<div class="entry-title"><a href="<?php print get_term_link($terms[0]); ?>" rel="bookmark"><?php the_title(); ?></a></div>
	</header><!-- .entry-header -->
	<?php tha_entry_bottom(); ?>
</article><!-- #post-## -->
<?php tha_entry_after(); ?>
