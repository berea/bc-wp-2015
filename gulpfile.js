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


	


/**
 * Styles
 *
 * create CSS, sourcemaps, minify, and some BrowserSync love!
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
    .pipe(sourcemaps.write('../maps'))//write external sourcemaps
    .pipe(plumber.stop())
    .pipe(minifycss({
      //maxLineLen: 80,
    })) //minify CSS
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
//  return gulp.src([source + 'js/custom/**/*.js'])
  return gulp.src([source+'js/vendor/**/*.js',source+'js/custom/**/*.js'])
    .pipe(concat('production.js'))

    .pipe(minifyjs()) // minify javascript
    .pipe(gulp.dest(source + 'js'))
    /*.pipe(rename({
      basename: 'production',
      suffix: '-min',
    }))
    
    .pipe(gulp.dest(source + 'js/'))*/
    .pipe(notify({ message: 'Scripts change made - concatenated, sourcemaps, minified, and production.js created, ', onLast: true }));
});

/**
 * jsHint Tasks
 *
 * Detect potential problems in our javascript code
 */

gulp.task('jsHint', function() {
  return gulp.src([source + 'js/custom/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish', {beep: true}))
    .pipe(notify({ message: 'jsHint task complete', onLast: true }));
});





/**
 * Gulp Default Task
 *
 * Watch for style and javascript changes
 *
*/

/******************************************************************************
| >   WATCH TASKS
******************************************************************************/

//Default Gulp Task 
  gulp.task('default', function() {
  //set up to watch changes to sass and js files
  gulp.watch(source + 'sass/**/*.scss', ['styles']); 
  
  //gulp.watch(source + 'js/custom/**/*.js', ['js', browserSync.reload]);
  gulp.watch(source + 'js/custom/**/*.js', ['js']);
  gulp.watch(source + 'js/custom/**/*.js', ['jsHint']);
  //NOTE: look into why a vendor js folder is needed
  return gulputil.log('*******Gulp is running (the jewels)!******')
});



