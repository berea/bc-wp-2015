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
		
		<ul class="menu legacy-wall-sidebar">
			<li><h3>Legacy Wall</h3></li>
			<li><a href="/legacy-wall/names/?letter=A">Browse by Name</a></li>
			<li>
				<ul class="sub-menu alpha-links">
					<li><a href="/legacy-wall/names/?letter=A">A</a></li>
					<li><a href="/legacy-wall/names/?letter=B">B</a></li>
					<li><a href="/legacy-wall/names/?letter=C">C</a></li>
					<li><a href="/legacy-wall/names/?letter=D">D</a></li>
					<li><a href="/legacy-wall/names/?letter=E">E</a></li>
					<li><a href="/legacy-wall/names/?letter=F">F</a></li>
					<li><a href="/legacy-wall/names/?letter=G">G</a></li>
					<li><a href="/legacy-wall/names/?letter=H">H</a></li>
					<li><a href="/legacy-wall/names/?letter=I">I</a></li>
					<li><a href="/legacy-wall/names/?letter=J">J</a></li>
					<li><a href="/legacy-wall/names/?letter=K">K</a></li>
					<li><a href="/legacy-wall/names/?letter=L">L</a></li>
					<li><a href="/legacy-wall/names/?letter=M">M</a></li>
					<li><a href="/legacy-wall/names/?letter=N">N</a></li>
					<li><a href="/legacy-wall/names/?letter=O">O</a></li>
					<li><a href="/legacy-wall/names/?letter=P">P</a></li>
					<li><a href="/legacy-wall/names/?letter=Q">Q</a></li>
					<li><a href="/legacy-wall/names/?letter=R">R</a></li>
					<li><a href="/legacy-wall/names/?letter=S">S</a></li>
					<li><a href="/legacy-wall/names/?letter=T">T</a></li>
					<li><a href="/legacy-wall/names/?letter=U">U</a></li>
					<li><a href="/legacy-wall/names/?letter=V">V</a></li>
					<li><a href="/legacy-wall/names/?letter=W">W</a></li>
					<li><a href="/legacy-wall/names/?letter=X">X</a></li>
					<li><a href="/legacy-wall/names/?letter=Y">Y</a></li>
					<li><a href="/legacy-wall/names/?letter=Z">Z</a></li>
				</ul>
			</li>
			<li><a href="/legacy-wall/1855-1900/">Browse by Year</a></li>
			<li>
				<ul class="sub-menu year-links">
				<?php
					 $terms = get_terms( 'legacy-wall-year' );
					 if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
					     foreach ( $terms as $term ) {
					       echo '<li><a href="' . get_term_link($term) . '">' . $term->name . '</a></li>';
					        
					     }
					 }
				?>
				</ul>
			</li>
		</ul>
		<?php tha_sidebar_bottom(); ?>
		</div>
	</div><!-- #secondary -->
	<?php tha_sidebars_after(); ?>
