<?php
/**
 * berea Theme Customizer
 *
 * @package berea
 * Look, I'm sorry about this messy file, mmkay? Saw Paul Underwood's  repo for extended customizer controls and had a
 * "moment." Okay? Below, just copy the controls you need to use and go bonkers, customize as needed. I started things
 * off by adding a Textarea for GA.
 */


/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function berea_customize_register( $wp_customize ) {
    $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
    $wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
    $wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
}
add_action( 'customize_register', 'berea_customize_register' );

/**
 * Customizer Sanitization Functions
 */
function berea_sanitize_text( $input ) {
    return wp_kses_post( force_balance_tags( $input ) );
}

function berea_sanitize_checkbox( $input ) {
	if ( $input == 1 ) {
		return 1;
	} else {
		return '';
	}
}

/**
 * Customizer Some Like it Neat Additions
 */

function berea_add_customizer_theme_options($wp_customize) {

// Remove Default Sections, Settings and Controls
$wp_customize->remove_section( 'nav');
$wp_customize->remove_section( 'colors' );

// Changing panels for default Customizer settings
$wp_customize->get_section('static_front_page')->panel = 'site_content';
$wp_customize->get_section('title_tagline')->panel = 'site_content';
$wp_customize->get_section('background_image')->panel = 'site_content';

/**
* Adding Panels for Home Page and Colors
*/
$wp_customize->add_panel( 'site_content', array(
    'priority' => 5,
    'capability' => 'edit_theme_options',
    'theme_supports' => '',
    'title' => __( 'General Site Content Settings', 'berea' ),
    'description' => __( 'Navigation related settings and config.', 'berea' ),
) );



/* Example Section and 4.0 customizer controls
*  @link — https://gist.github.com/devinsays/e9c6754340a5253c3ec9
*  @author — devinsays
*/
$wp_customize->add_panel( 'panel_id', array(
	    'priority' => 1000,
	    'capability' => 'edit_theme_options',
	    'theme_supports' => '',
	    'title' => __( 'Example Panel', 'berea' ),
	    'description' => __( 'Description of what this panel does.', 'berea' ),
	) );

	$wp_customize->add_section( 'section_id', array(
	    'priority' => 10,
	    'capability' => 'edit_theme_options',
	    'theme_supports' => '',
	    'title' => __( 'Example Section', 'berea' ),
	    'description' => '',
	    'panel' => 'panel_id',
	) );

	$wp_customize->add_setting( 'textarea_field_id', array(
		'default' => '',
		'type' => 'theme_mod',
		'capability' => 'edit_theme_options',
		'transport' => '',
		'sanitize_callback' => 'berea_sanitize_text',
	) );

	$wp_customize->add_control( 'textarea_field_id', array(
	    'type' => 'textarea',
	    'priority' => 10,
	    'section' => 'section_id',
	    'label' => __( 'Textarea Field', 'berea' ),
	    'description' => '',
	) );


}
add_action( 'customize_register', 'berea_add_customizer_theme_options' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */

function berea_customize_preview_js() {
    wp_enqueue_script( 'berea_customizer', get_template_directory_uri() . '/library/vendors/wp-customizer/js/customizer.js', array( 'customize-preview' ), '20130508', true );
}
add_action( 'customize_preview_init', 'berea_customize_preview_js' );
