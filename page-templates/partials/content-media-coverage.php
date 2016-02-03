<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package berea
 */
?>
<?php tha_entry_before(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> itemscope itemType="http://schema.org/WebPage">
	<?php tha_entry_top(); ?>
	<header class="entry-header">

		<h1 class="entry-title" itemprop="name"><?php the_title(); ?></h1>

	</header><!-- .entry-header -->


	<div class="entry-content" itemprop="mainContentOfPage">

        <?php 
        	the_content(); 
        	the_field( 'originally_published' )

        	if ( $source = get_field('source_url') ) {
        		?>
        			<div class="source-url">Original article retrieved from <?php echo $source; ?>.</div>
        		<?php
        	}
        	if ( $full = get_field('full_text') ) {
        		?>
					<div class="full-text"><?php echo $full; ?></div>
        		<?php
        	}
        	if ( $scan = get_field('full_scan') ) {
        		?>
					<img class="full-text" src="<?php echo $scan; ?>" alt="Full Scan for this article">
        		<?php
        	}
        	if ( $source = get_field('source_url') ) {
        		?>
        			<div class="source-url">Original article retrieved from <?php echo $source; ?>.</div>
        		<?php
        	}
        ?>

	</div><!-- .entry-content -->
	<?php edit_post_link( __( 'Edit', 'berea' ), '<footer class="entry-meta"><span class="edit-link">', '</span></footer>' ); ?>
	<?php tha_entry_bottom(); ?>
</article><!-- #post-## -->
<?php tha_entry_after(); ?>
