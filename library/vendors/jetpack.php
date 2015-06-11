<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package berea
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function berea_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'footer'    => 'page',
	) );
}
add_action( 'after_setup_theme', 'berea_jetpack_setup' );
