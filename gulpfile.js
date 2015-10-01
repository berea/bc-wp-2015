/**
 * Project Setup
 *
 * Setting up variables for project name and directories
*/

// Project configuration
var project     = 'bcwp2015', // Optional - Use your own project name here...
	source      = './assets/'; 	// Your main project assets and naming 'source' instead of 'src' to avoid confusion with gulp.src

// Load plugins
var gulp 	= require('gulp'),
	browserSync	= require('browser-sync'), // Asynchronous browser loading on .scss file changes
	reload				= browserSync.reload,
	autoprefixer 	= require('gulp-autoprefixer'), // Autoprefixing magic
	minifycss 		= require('gulp-minify-css'),
	jshint 				= require('gulp-jshint'),
	uglify 				= require('gulp-uglify'),
	imagemin 			= require('gulp-imagemin'),
	newer 				= require('gulp-newer'),
	rename 				= require('gulp-rename'),
	concat 				= require('gulp-concat'),
	notify 				= require('gulp-notify'),
	cmq 					= require('gulp-combine-media-queries'),
	runSequence 	= require('gulp-run-sequence'),
	sass 					= require('gulp-ruby-sass'), // Our Sass compiler
	plugins 			= require('gulp-load-plugins')({ camelize: true }),
	ignore 				= require('gulp-ignore'), // Helps with ignoring files and directories in our run tasks
	rimraf 				= require('gulp-rimraf'), // Helps with removing files and directories in our run tasks
	zip 					= require('gulp-zip'), // Using to zip up our packaged theme into a tasty zip file that can be installed in WordPress!
	plumber 			= require('gulp-plumber'), // Helps prevent stream crashing on errors
	pipe 					= require('gulp-coffee'),
	cache 				= require('gulp-cache'),
	filter 			   = require('gulp-filter'),
	insert 			   = require('gulp-insert'),
	postcss 		   = require('gulp-postcss'),
	unmq	 		   = require('postcss-unmq');
;

/**
 * Styles
 *
 * Triggering the styles-compact and styles-minified tasks
*/
gulp.task('styles', function () {
	runSequence('styles-compact','styles-minified','styles-stopgap');
});

/**
 * Styles-Compact
 *
 * Looking at src/sass and compiling the files into Compact format, Autoprefixing
*/
gulp.task('styles-compact', function () {
	return gulp.src([source+'sass/**/*.scss'])
		.pipe(plumber())
		// use the compact style - 1 line per style block - so that the changes that autoprefixer makes do not throw off the map
		.pipe(sass({ style: 'compact' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
		.pipe(plumber.stop())
		.pipe(gulp.dest(source+'css/'))
		// put back the sourceMappingURL comment that is stripped by autoprefixer - sourceMappingURL=style-min.css.map
		.pipe(reload({stream:true})) // reload the stream and filter it so I can modify just the css files
		.pipe(filter('**/*.css'))
		.pipe(insert.append("\n/"+"*# sourceMappingURL=style.css.map *"+"/\n"))
		.pipe(plumber.stop())
		.pipe(gulp.dest(source+'css/'))
		.pipe(notify({ message: 'Styles-Compact task complete', onLast: true }))
});


/**
 * Styles-Minified
 *
 * Looking at src/sass and compiling the files into Compressed (minify) format, Autoprefixing
*/
gulp.task('styles-minified', function () {
	return gulp.src([source+'sass/**/*.scss'])
		.pipe(plumber())
		.pipe(rename({ suffix: '-min' }))
		// use the compressed style - its the minified version
		.pipe(sass({ style: 'compressed' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
		.pipe(plumber.stop())
		.pipe(gulp.dest(source+'css/'))
		// put back the sourceMappingURL comment that is stripped by autoprefixer - sourceMappingURL=style-min.css.map
		.pipe(reload({stream:true})) // reload the stream and filter it so I can modify just the css files
		.pipe(filter('**/*.css'))
		.pipe(insert.append("\n/"+"*# sourceMappingURL=style-min.css.map *"+"/\n"))
		.pipe(plumber.stop())
		.pipe(gulp.dest(source+'css/'))
		.pipe(notify({ message: 'Styles-Minifed task complete', onLast: true }))
});


/**
 * Styles-StopGap
 *
 * Generate the stopgap intermediate styling files from the generated compact styles
*/
gulp.task('styles-stopgap', function () {
	return gulp.src([source+'css/style.css'])
		.pipe(rename({ suffix: '-stopgap' }))
		.pipe(postcss([
			unmq({
				type: 'screen',
				width: 1024,
				height: 768,
				resolution: '1dppx',
				color: 3
			})
		]))
		.pipe(gulp.dest(source+'css/'))
		.pipe(notify({ message: 'Styles-StopGap task complete', onLast: true }))
});


/**
 * Scripts
 *
 * Look at src/js and concatenate those files, send them to assets/js where we then minimize the concatenated file.
*/
gulp.task('js', function() {
	return gulp.src([source+'js/vendor/**/*.js'])
		// .pipe(jshint('.jshintrc')) // TO-DO: Reporting seems to be broken for js errors.
		// .pipe(jshint.reporter('default'))
		.pipe(concat('production.js'))
		.pipe(gulp.dest(source+'js/'))
		.pipe(rename({ suffix: '-min' }))
		.pipe(uglify())
		.pipe(gulp.dest(source+'js/'))
		.pipe(notify({ message: 'Scripts task complete', onLast: true }));
});


// ==== TASKS ==== //
/**
 * Gulp Default Task
 *
 * Compiles styles, fires-up browser sync, watches js and php files. Note browser sync task watches php files
 *
*/

// Watch Task
gulp.task('default', ['styles'], function () {
    gulp.watch(source+"sass/**/*.scss", ['styles']);
    //gulp.watch(source+"js/vendor/**/*.js", ['js']);
});
