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
		<ul class="menu">
			<li><h4>News Archive</h4></li>
			<li><ul class="sub-menu">
				<?php wp_get_archives(['type'=>'yearly']); ?>
			</ul></li>
			<li><h4>Stay in Touch</h4></li>
			<li><ul class="submenu">
				<li><a href="/newsroom">Berea Newsroom</a></li>
			</ul></li>
		</ul>
		<?php tha_sidebar_bottom(); ?>
		</div>
	</div><!-- #secondary -->
	<?php tha_sidebars_after(); ?>
