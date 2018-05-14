'use strict';
/**
 * Project Setup
 *
 * Setting up variables for project name and directories
*/

/******************************************************************************
| >   PROJECT VARIABLES
******************************************************************************/

var project     = 'bcwp2015'; // Optional - Use your own project name here...
var source      = './assets/'; 	// Your main project assets and naming 'source' instead of 'src' to avoid confusion with gulp.src


/******************************************************************************
| >   PLUGINS
******************************************************************************/

var browserSync	  = require('browser-sync'); // Asynchronous browser loading on .scss file changes
var reload			  = browserSync.reload;
var del 			    = require('del');
var gulp 			    = require('gulp');
var autoprefixer  = require('gulp-autoprefixer'); // Autoprefixing magic
var concat 			  = require('gulp-concat');
var filter 			  = require('gulp-filter');
var jshint 			  = require('gulp-jshint');
var notify 			  = require('gulp-notify');
var plumber 		  = require('gulp-plumber'); // Helps prevent stream crashing on errors
var rename 			  = require('gulp-rename');
var sass 			    = require('gulp-sass');
var sourcemaps		= require('gulp-sourcemaps');
var minifyjs 			  = require('gulp-uglify');
var minifycss 		= require('gulp-uglifycss');
var gulputil        = require('gulp-util');
var runSequence   = require('run-sequence');
var md5 = require("gulp-md5-assets"); // For fingerprinting assets




/**
 * Styles
 *
 * create CSS, sourcemaps, minify
*/

/******************************************************************************
| >   STYLES
******************************************************************************/

gulp.task('styles', function() {
  return gulp.src([source + 'sass/**/*.scss'])
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err);
        this.emit('end');//keep gulp from hanging on this task
      },
    }))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions','safari 5', 'ie 8','ie 9','opera 12.1','ios 6','android 4'))
    .pipe(sourcemaps.write('.'))//write sourcemaps in same dir as styles.css
    .pipe(plumber.stop())
    .pipe(gulp.dest(source + 'css'))
    .pipe(reload({stream:true})) // Inject Styles when min style file is created
    .pipe(notify({ message: 'Styles change made - created css, sourcemaps, minified', onLast: true }));
});



/**
 * Scripts
 *
 * Look at src/js and concatenate those files, send them to assets/js where we then minimize the concatenated file.
 * note: vendor first, then custom so custom can forcefully override if necessary
*/

/******************************************************************************
| >   JAVASCRIPT
******************************************************************************/

gulp.task('js', function() {
  return gulp.src([source+'js/vendor/**/*.js',source+'js/custom/**/*.js']) 
    .pipe(sourcemaps.init())
    .pipe(concat('production.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(source + 'js'))
    .pipe(notify({ message: 'Scripts change made - concatenated, sourcemaps, minified, and production.js created, ', onLast: true }));
});

/**
 * jsHint Tasks
 *
 * Detect potential problems in our javascript code
 */

gulp.task('jsHint', function() {
  return gulp.src([source + 'js/custom/**/*.js']) //only show jsHint on our custom js
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish', {beep: true}))
    .pipe(notify({ message: 'jsHint task complete', onLast: true }));
});



/**
 * Fingerprint Assets
 *
 * Generates md5 hashes for all css and js files, then finds references to those files in the template files and
 * appends the hash as a query parameter to those referenced filenames
*/

/******************************************************************************
| >   FINGERPRINT ASSETS 
******************************************************************************/

gulp.task('cachebust:css', function () {
  	return gulp.src('./assets/css/**/*.css')
    	.pipe(md5(10,'./**/*.php'));
});

gulp.task('cachebust:js', function () {
 	return gulp.src('./assets/js/**/*.js')
    	.pipe(md5(10,'./**/*.php'));
});




/**
 * Gulp Default Task
 *
 * Watch for sass and javascript changes
 *
*/

/******************************************************************************
| >   WATCH TASKS
******************************************************************************/

//Default Gulp Task 
  gulp.task('default', ['styles','js','cachebust:css','cachebust:js'], function() {
    //watch for sass changes
    gulp.watch(source + 'sass/**/*.scss', ['styles']);
    //watch for javascript changes in both custom and vendor folders 
    gulp.watch([source+'js/vendor/**/*.js',source+'js/custom/**/*.js'], ['js']);
    //only use jsHint for our custom js folder
    gulp.watch(source + 'js/custom/**/*.js', ['jsHint']);
    
    //later - add in some browserSync love!
    //gulp.watch(source + 'js/custom/**/*.js', ['js', browserSync.reload]);

    return gulputil.log('*******Gulp is running (the jewels)!******')
});



