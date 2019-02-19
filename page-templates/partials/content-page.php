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
		<!-- CONTENT-PAGE -->
		<?php
			$categories = get_the_category();
			$is_category_news = false;
			foreach ($categories as $category) {
				$category_text = get_category($category)->name;
				if (get_category($category)->name == 'News') {
					$is_category_news = true;
				}
			}
			//if ((get_current_blog_id() == 1 && $is_category_news == true) {
				//$edited_date = the_modified_date();
			$author = get_the_author();
			echo "<div>";
			echo "<p class='byline'> Posted: " . get_the_date() . "</p>";
			echo "<br>";
			echo "<p class='byline'> Author: " . $author . "</p>";
			echo "</div>";
			//}
		?>

	</header><!-- .entry-header -->


	<div class="entry-content" itemprop="mainContentOfPage">

        <?php the_content(); ?>

	</div><!-- .entry-content -->
	<?php

		$categories_text = "Categories: ";
		$categories = get_the_category();
		$is_category_news = false;
		foreach ($categories as $category) {
			$category_text = get_category($category)->name;
			if (get_category($category)->name == 'News') {
				$is_category_news = true;
			}
		}
		if ($is_category_news && get_current_blog_id() == 1){
			foreach ($categories as $category) {
				$category_text = "<a href='/category/" . get_category($category)->slug . "'>" . get_category($category)->name . "</a>";
				if ($category === end($categories)) {
					$categories_text = $categories_text . $category_text;
				}
				else {
					$categories_text = $categories_text . $category_text . ", ";
				}
			}
			echo $categories_text;
			echo "<br>";
		
			$tags_text = "Tags: ";
			$tags = get_the_tags();
			foreach ($tags as $tag) {
				$tag_text = "<a href='/tag/" . get_tag($tag)->slug . "'>" . get_tag($tag)->name . "</a>";
				if ($tag === end($tags)) {
					$tags_text = $tags_text . $tag_text;
				}
				else {
					$tags_text = $tags_text . $tag_text . ", ";
				}
			}
			echo $tags_text;
		}
	?>
	<?php edit_post_link( __( 'Edit', 'berea' ), '<footer class="entry-meta"><span class="edit-link">', '</span></footer>' ); ?>
	<?php tha_entry_bottom(); ?>
</article><!-- #post-## -->
<?php tha_entry_after(); ?>
