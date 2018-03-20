<div class="cd-overlay"></div>
<?php
	$berea_should_have_default_menu = false;
	if (wp_get_theme()->get('Name') != 'Berea 2015 - Main Site Child Theme') {
		$berea_should_have_default_menu = berea_has_default_menu();
	}
?>

<nav class="cd-nav">
	<ul id="cd-primary-nav" class="cd-primary-nav is-fixed <?php echo ($berea_should_have_default_menu) ? 'apply-mobile-injected-menu': ''; ?>">

		<li class="menu-item-hide-on-large root-menu">
			<a href="<?php $root_url = network_home_url(); echo $root_url; ?>">BEREA COLLEGE</a>
		</li>

	<?php if ($berea_should_have_default_menu) { ?>
		<!-- subsite menu with Berea submenu -->
		<?php

			$menus = berea_get_default_menu(true,true); // 2nd param: get all menu items

			foreach ($menus as $col => $vals) {
				$please_close_ul=false;
				if (count($vals)>1) {
					$please_close_ul=true;
					$first_val=$vals[0];
					//$first_val=array_shift($vals);
					echo '<li class="has-children menu-item-hide-on-large">' . $first_val .
						"\n<ul class=\"is-hidden\">\n".
						'<li class="go-back"><a>BACK</a></li>';
				}
				foreach ($vals as $key => $val) {
					if ($val == $vals[0] && sizeof($vals) > 1){
						echo "<li class='menu-item-hide-on-large see-all'>" . $val . "</li>\n";
					}
					else {
						echo "<li class='menu-item-hide-on-large'>" . $val . "</li>\n";
					}
				}
				if ($please_close_ul) { echo "</li></ul>"; }
			}
		?>

		<li class="has-children menu-item-hide-on-large root-menu">
			<a href="#">MAIN NAVIGATION</a>
			<ul class="is-hidden">
				<li class="go-back"><a>BACK</a></li>
				<?php include('universal_menu_master.php'); ?>
			</ul>
		</li>
		<?php include('universal_menu_master.php'); ?>
	<?php } else { ?>
		<!-- just master menu - no subsite menu -->
		<?php include('universal_menu_master.php'); ?>
	<?php } ?>

	</ul> <!-- primary-nav -->
</nav> <!-- cd-nav -->

<div id="cd-search" class="cd-search">
	<form method="get" action="https://www.google.com/search">
			<input type="hidden" name="sitesearch" value="https://berea.edu" />
			<label class="screen-reader" for="berea-search-bar">Enter Search Text</label>
			<input type="text" id="berea-search-bar"
					name="q" value="Search Berea College Web Site"
					onfocus="if(this.value == 'Search Berea College Web Site') {this.value = '';}"
					onblur="if (this.value == '') {this.value = 'Search Berea College Web Site';}"/>
	</form>

</div>
