#README#

##Setting up a local dev environment##

1. Import the Wordpress_Null.ova file to create a new VM. (This is a modified version of the Turnkey Linux Wordpress machine.)

2. Convert the Wordpress install on the VM to multisite. Directions can be found here:

n. ??? (Janine hasn't transcribed these notes yet.)


## Notes about the themes ##

Header behavior isn't as straightforward as it should be.

The universal menu relies on a class applied to the body. If the 'short-ribbon' class is
applied, then shorter ribbon styles will be used on the logo. If the 'short-ribbon' class
is NOT applied, then the logo will be a full-length ribbon for desktop width. This logic
is built into header.php in the main theme (bc-wp-2015) and it depends on the theme names
specified in style.css for both child themes. So, if you change those theme names, make
sure you also update the logic in header.php.

The size of the slider and location of text on it depends on whether or not this is the
front page in child-theme-1. It's not quite the same logic as we need for the logo, and it
is achieved in a different way at the bottom of header.php.

Similarly, the header display itself for child themes is substantailly different, so to 
trap for that we have added logic in functions.php to inject an identifier for the child
theme (it's the child theme's directory name). If you change that, functions and css
elements will need to be updated (_bc-additons).

When the dust settles, we need to revisit the theme structures and do a little cleanup to
streamline and clarify. These behaviors are prime candidates for that cleanup.

------

