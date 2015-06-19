	<div class="cd-overlay"></div>

	<nav class="cd-nav">
		<ul id="cd-primary-nav" class="cd-primary-nav is-fixed">
			<li class="has-children">
				<a href="#">ADMISSIONS</a>

				<ul class="cd-secondary-nav is-hidden">
					<li class="go-back"><a href="#0">Menu</a></li>
					<li class="see-all"><a href="#">ADMISSIONS&gt;</a></li>
					<li class="has-children">
						<a href="#">ADMISSIONS INFO</a>

						<ul class="is-hidden">
							<li class="go-back"><a href="#0">ADMISSIONS INFO</a></li>
							<li><a href="#">Admissions Requirements</a></li>
							<li><a href="#">Publications and Forms</a></li>
							<li><a href="#">New Freshmen</a></li>
							<li><a href="#">International Students</a></li>
							<li><a href="#">Transfer Students</a></li>
						</ul>
					</li>
					<li class="has-children">
						<a href="#">STUDENT LIFE</a>

						<ul class="is-hidden">
							<li class="go-back"><a href="#0">STUDENT LIFE</a></li>
							<li><a href="#">Academic Excellence</a></li>
							<li><a href="#">Career Preparation</a></li>
							<li><a href="#">Athletics</a></li>
							<li><a href="#">Study Abroad</a></li>
							<li><a href="#">Service and Leadership</a></li>
						</ul>
					</li>
					<li class="has-children">
						<a href="#">FINANCIAL AID</a>

						<ul class="is-hidden">
							<li class="go-back"><a href="#0">FiNANCIAL AID</a></li>
							<li><a href="#">Tuition Promise Scholarship</a></li>
							<li><a href="#">Labor Grant Aid</a></li>
							<li><a href="#">Financial Eligibility</a></li>
							<li><a href="#">Estimate First-Year Costs</a></li>
							<li><a href="#">Submit and RFQ</a></li>
						</ul>
					</li>
					<li class="has-children">
						<a href="#">???</a>

						<ul class="is-hidden">
							<li class="go-back"><a href="#0">???</a></li>
							<li><a href="#">APPLY TODAY</a></li>
							<li><a href="#">CONFIRM YOUR FINANCIAL ELIGIBILITY</a></li>
							<li><a href="#">SCHEDULE A CAMPUS VISIT</a></li>
						</ul>
					</li>
				</ul>
			</li>

			<li class="has-children">
				<a href="#">ACADEMICS</a>
				<ul class="cd-nav-icons is-hidden">
					<li class="go-back"><a href="#0">Menu</a></li>
					<li class="see-all"><a href="#">ACADEMICS&gt;</a></li>
					<li>
						<a class="cd-nav-item item-1" href="#">
							<h3>DEGREE PROGRAMS</h3>
							<p>Bachelor of Arts and Bachelor of Science degrees in 28 fields.</p>
						</a>
					</li>

					<li>
						<a class="cd-nav-item item-2" href="#">
							<h3>LABOR PROGRAM</h3>
							<p>Students are engaged in a learning environment that encourages them to be active learners, workers, and servers.</p>
						</a>
					</li>

					<li>
						<a class="cd-nav-item item-3" href="#">
							<h3>LIBRARY</h3>
							<p>It has books. And stuff.</p>
						</a>
					</li>

					<li>
						<a class="cd-nav-item item-4" href="#">
							<h3>MAJORS & MINORS</h3>
							<p>This is the item description</p>
						</a>
					</li>

					<li>
						<a class="cd-nav-item item-5" href="#">
							<h3>ACADEMIC CALENDAR</h3>
							<p>This is the item description</p>
						</a>
					</li>

					<li>
						<a class="cd-nav-item item-6" href="#">
							<h3>CENTERS</h3>
							<p>This is the item description</p>
						</a>
					</li>

					<li>
						<a class="cd-nav-item item-7" href="#">
							<h3>CATALOG & STUDENT HANDBOOK</h3>
							<p>This is the item description</p>
						</a>
					</li>

					<li>
						<a class="cd-nav-item item-8" href="#">
							<h3>RESOURCES</h3>
							<p>This is the item description</p>
						</a>
					</li>

					<li>
						<a class="cd-nav-item item-8" href="#">
							<h3>FACULTY & STAFF SCHOLARLY WORK</h3>
							<p>This is the item description</p>
						</a>
					</li>
				</ul>
			</li>

			<li class="">
				<a href="#">ALUMNI</a>
			</li>

			<li class="has-children">
				<a href="#">NEWS</a>

				<ul class="cd-nav-gallery is-hidden">
					<li class="go-back"><a href="#0">Menu</a></li>
					<li class="see-all"><a href="#">NEWS&gt;</a></li>

					<li>
						<a class="cd-nav-item" href="#">
							<h3>Product #1</h3>
						</a>
					</li>

					<li>
						<a class="cd-nav-item" href="#">
							<h3>Product #2</h3>
						</a>
					</li>

					<li>
						<a class="cd-nav-item" href="#">
							<h3>Product #3</h3>
						</a>
					</li>

					<li>
						<a class="cd-nav-item" href="#">
							<h3>Product #4</h3>
						</a>
					</li>
<?php

// The Query
$the_query = new WP_Query( 'category_name=news&showposts=4' );

// The Loop
if ( $the_query->have_posts() ) {
	while ( $the_query->have_posts() ) {
		$the_query->the_post();
		echo '<li>';
		echo '<a class="cd-nav-item" href="' . get_permalink() . '">';
		if ( has_post_thumbnail() ) { 
			the_post_thumbnail( 'news-thumbnail' );
		}
		else {
			//echo '<img src="/wp-content/themes/berea2015/bc-wp-2015/assets/images/';
			
			echo '<img src="' .  get_bloginfo('stylesheet_directory') . '/assets/images/221_147_placeholder.jpg" height="147" width="221">';
			
		}
		echo '<br /><h3>' . get_the_title() . '</h3></a></li>';
	}
} else {
	// no posts found
}
/* Restore original Post Data */
wp_reset_postdata();
 
?>


				</ul>
			</li>

			<li class="">
				<a href="#">EVENTS</a>
			</li>


			<li>
				<a href="#">GIVE</a>
			</li>

		</ul> <!-- primary-nav -->
	</nav> <!-- cd-nav -->

	<div id="cd-search" class="cd-search">
		<form>
			<input type="search" placeholder="Search...">
		</form>
	</div>
