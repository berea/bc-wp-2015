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
			<li class="menu-item"><a href="/news">News Archive</a></li>
			<li><ul class="sub-menu">
				<?php wp_get_archives(['type'=>'yearly']); ?>
			</ul></li>
			<li class="menu-item"><a href="/newsroom">Stay in Touch</a></li>
			<li><ul class="sub-menu">
				<li class="menu-item"><a href="/newsroom">Berea Newsroom</a></li>
			</ul></li>
		</ul>
		<?php tha_sidebar_bottom(); ?>
		</div>
	</div><!-- #secondary -->
	<?php tha_sidebars_after(); ?>
