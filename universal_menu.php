<div class="cd-overlay"></div>

<nav class="cd-nav">
	<ul id="cd-primary-nav" class="cd-primary-nav is-fixed">
		<li class="has-children">
			<a href="#0">ADMISSIONS</a>

			<ul class="cd-secondary-nav is-hidden">
				<li class="go-back"><a href="#0">Menu</a></li>
				<li class="see-all"><a href="http://www.berea.edu/admissions/">ADMISSIONS&gt;</a></li>
				<li class="has-children">
					<a href="#">ADMISSIONS INFO</a>

					<ul class="is-hidden">
						<li class="go-back"><a href="#0">ADMISSIONS INFO</a></li>
						<li><a href="http://www.berea.edu/admissions/visit-berea-college/bereas-academic-requirements/">Admission Requirements</a></li>
						<li><a href="http://www.berea.edu/admissions/admissions-publications-forms/">Application Forms</a></li>
						<li><a href="http://www.berea.edu/admissions/applying-high-school-senior-non-traditional-student/">New Freshmen</a></li>
						<li><a href="http://www.berea.edu/admissions/international/">International Students</a></li>
						<li><a href="http://www.berea.edu/admissions/transfer-application/">Transfer Students</a></li>
					</ul>
				</li>
				<li class="has-children">
					<a href="#">STUDENT LIFE</a>

					<ul class="is-hidden">
						<li class="go-back"><a href="#0">STUDENT LIFE</a></li>
						<li><a href="http://www.berea.edu/admissions/why-berea/career-preparation/">Career Preparation</a></li>
						<li><a href="http://www.berea.edu/athletics/">Athletics</a></li>
						<li><a href="http://www.berea.edu/cie/">Study Abroad</a></li>
						<li><a href="http://www.berea.edu/admissions/why-berea/service-and-leadership/">Service and Leadership</a></li>
					</ul>
				</li>
				<li class="has-children">
					<a href="#">FINANCIAL AID</a>

					<ul class="is-hidden">
						<li class="go-back"><a href="#0">FiNANCIAL AID</a></li>
						<li><a href="http://www.berea.edu/admissions/financial-aid-scholarships/bereas-tuition-scholarship/">Tuition Promise Scholarship</a></li>
						<li><a href="http://www.berea.edu/admissions/financial-aid-scholarships/aid-for-other-costs/">Labor Grant Aid</a></li>
						<li><a href="http://www.berea.edu/admissions/quick-estimator/">Financial Eligibility</a></li>
						<li><a href="https://berea.studentaidcalculator.com/survey.aspx">Estimate First-Year Costs</a></li>
						<li><a href="http://www.berea.edu/admissions/frq/">Submit and RFQ</a></li>
					</ul>
				</li>
				<li class="has-children">
					<a href="#">???</a>

					<ul class="is-hidden">
						<li class="go-back"><a href="#0">???</a></li>
						<li><a href="http://www.berea.edu/admissions/request-info/">APPLY TODAY</a></li>
						<li><a href="https://bereaquickestimator.studentaidcalculator.com/survey.aspx">CONFIRM YOUR FINANCIAL ELIGIBILITY</a></li>
						<li><a href="http://www.berea.edu/admissions/visit-berea-college/">SCHEDULE A CAMPUS VISIT</a></li>
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
					<a class="cd-nav-item item-1" href="http://www.berea.edu/academics/">
						<h3>DEGREE PROGRAMS</h3>
						<p>Bachelor of Arts and Bachelor of Science degrees in 28 fields.</p>
					</a>
				</li>

				<li>
					<a class="cd-nav-item item-2" href="http://www.berea.edu/labor-program-office/">
						<h3>LABOR PROGRAM</h3>
						<p>Students are engaged in a learning environment that encourages them to be active learners, workers, and servers.</p>
					</a>
				</li>

				<li>
					<a class="cd-nav-item item-3" href="http://www.berea.edu/hutchinslibrary/">
						<h3>LIBRARY</h3>
						<p>It has books. And stuff.</p>
					</a>
				</li>

				<li>
					<a class="cd-nav-item item-4" href="http://www.berea.edu/academics/majors-minors/">
						<h3>MAJORS & MINORS</h3>
						<p>This is the item description</p>
					</a>
				</li>

				<li>
					<a class="cd-nav-item item-5" href="http://www.berea.edu/registrar/academic-calendar/">
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
					<a class="cd-nav-item item-7" href="http://catalog.berea.edu/current/Catalog">
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
			<a href="http://www.bereacollegealumni.com/s/925/start.aspx">ALUMNI</a>
		</li>

		<li class="has-children">
			<a href="http://community.berea.edu/calendar/index.php?calendar=default">NEWS</a>

			<ul class="cd-nav-gallery is-hidden">
				<li class="go-back"><a href="#0">Menu</a></li>
				<li class="see-all"><a href="#">NEWS&gt;</a></li>

<?php

// The Query


//$sites = wp_get_sites();
//print_r($sites);




switch_to_blog(3);

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
		echo '<img src="' .  get_template_directory_uri() . '/assets/images/221_147_placeholder.jpg" height="147" width="221">';
	}
	echo '<br /><h3>' . get_the_title() . '</h3></a></li>';
}
} else {
// no posts found
}

/* Restore original Post Data */
wp_reset_postdata();

restore_current_blog();

?>


			</ul>
		</li>

		<li class="">
			<a href="http://community.berea.edu/calendar/index.php?calendar=default">EVENTS</a>
		</li>


		<li>
			<a href="http://www.berea.edu/give-to-berea/">GIVE</a>
		</li>

	</ul> <!-- primary-nav -->
</nav> <!-- cd-nav -->

<div id="cd-search" class="cd-search">
	<form>
		<input type="search" placeholder="Search...">
	</form>
</div>
