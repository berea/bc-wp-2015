<div class="cd-overlay"></div>
<?php $berea_should_have_default_menu = berea_has_default_menu(); ?>

<nav class="cd-nav">
	<ul id="cd-primary-nav" class="cd-primary-nav is-fixed <?php echo ($berea_should_have_default_menu) ? 'apply-mobile-injected-menu': ''; ?>">
	
	<?php if ($berea_should_have_default_menu) { ?>
		<!-- subsite menu with Berea submenu -->
		<?php

			$menus = berea_get_default_menu(true,true); // 2nd param: get all menu items

			foreach ($menus as $col => $vals) {
				$please_close_ul=false;
				if (count($vals)>1) {
					$please_close_ul=true;
					$first_val=array_shift($vals);
					
					echo '<li class="has-children menu-item-hide-on-large">' . $first_val . 
						"\n<ul class=\"is-hidden\">\n".
						'<li class="go-back"><a href="#0">BACK</a></li>';
				}
				foreach ($vals as $key => $val) {
					echo "<li>" . $val . "</li>\n";
				}
				if ($please_close_ul) { echo "</li></ul>"; }
			}
		?>
		
		<li class="has-children menu-item-hide-on-large root-menu">
			<a href="#">MAIN NAVIGATION</a>
			<ul class="is-hidden">
				<li class="go-back"><a href="#0">BACK</a></li>
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
	<form>
		<input type="search" placeholder="Search...">
	</form>
</div>
