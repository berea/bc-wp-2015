<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package berea
 */
?>
	<?php tha_sidebars_before(); ?>
	<div id="secondary" class="widget-area" role="complementary">
		<div id="secondary-inner">
		<?php tha_sidebar_top(); ?>
		<?php do_action( 'before_sidebar' ); ?>
		
		<h3>Archives</h3>
		<?php

			$archives = wp_get_archives(['type'=>'yearly']);
			d($archives);

		?>

		<?php tha_sidebar_bottom(); ?>
		</div>
	</div><!-- #secondary -->
	<?php tha_sidebars_after(); ?>
