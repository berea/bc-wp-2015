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


## Notes about navigations ##

On child themes the menu that shows up on the site should be called "Default". I expect
we will change this, but its documented here.


## Gulp & Sass CSS Workflow ##

Gulp is a workflow toolkit that allows for automating and standardizing steps 
that are common development tasks (like compiling and then minimizing CSS files)
into a programatic workflow that makes it faster to feed several tools into eachother.
It does this by taking the output (called a stream) from one tool and then feeding
it into another tool. For example, styles compiled from sass are then fed into the
minimizer so that the minified CSS works best.

Sass (Syntactically Awesome Stylesheets) is a stylesheet language that extends 
CSS by adding things like variables and funcitons (called mixins). Sass files are 
not drop-in replacements for CSS. They must be compiled using a tool called 'sass'
(or a number of other tools that are based on that library). Our gulp workflow takes
the output from sass and processes it further. 
That's why you can't just use sass (or sass watch) instead of gulp.

Some Like it Neat is a starter theme that implements multipe columns as well as
an assortment of other features that we thought would be useful in this project. 
It is sass-based, and is where the original sass workflow for this project got started.
You can see the original gulpfile provided by somelikeitneat (called gulpfile.example.js) in the codebase.
Our gulpfile is still called gulpfile.js, and is trimmed just to the parts that we use:
compiling css and javascript.

The Sass files live in assets/sass and compile to assets/css/style.*

To capture any changes you make to the sass files and complile them run gulp in 
the command line from the root directory of the bc-wp-2015 project (parent theme):

    gulp

You coul also do 'gulp styles' to just run the sass jobs and ignore the javascript.


## Gulp & JavaScript Workflow ##

Gulp can also compile and milimize javascript files. There are an array of script
files and requirements that come with the Some Like It Neat starter theme. We also
incorporated other components (like mega-drop-down menu navigation) as well. Our
gulp workflow compiles all these javascript files together into a single production.js
file, as well as a minimized version.

The JavaScript files live in assets/js/vendor and compile to assets/js/production.*

To capture any changes you make to the js files and complile them run gulp in 
the command line from the root directory of the bc-wp-2015 project (parent theme):

    gulp

You coul also do 'gulp js' to just run the js jobs and ignore the sass.


## Gulp Installation & Versions ##

So gulp's sass tools are javascript wrappers around the ruby-based sass tool.
That means that in order to have gulp working properly you may have to install
node (for the javascript), npm (node package manager - it installs with node), 
ruby (should be installed already by the mac os), gem (the ruby package manager 
- it installs with ruby) and the ruby sass gem. You also want to be sure that if
you're hacking on other ruby projects you might need to configure rvm.

The configuration for the packages require to get gulp running is stored in package.json,
the standard npm place to put your dependancies. The packages for these node
dependencies will install into a directory called node_modules.

To get started using gulp with this project you must install these dependencies, but
it should be easy. Just use npm install and it should do the job (if you're on a 
mac and have all the other parts already setup - see above).

    npm install

On most macs all we've had to do was install node first because it doesn't come
with the OS, but after that the rest happened by just doing 'npm install'.
Of course your milage may vary. Especially if you do other ruby dev on the same
box (which bit me because I do like to dev some ruby goodness).

Check your versions (better is probably OK but not always):

	gulp --version  = 3.9.0
	node --version  = 0.12.1
	npm --version   = 2.7.3
	ruby --version  = 1.9.3
	gem --version   = 1.8.24
	gem list sass   = 3.4.16

In case you need them, instructions for installing node (npm comes with node) on your mac are at 
https://nodejs.org/en/. Or if you use homebrew use brew install (homebrew is nice 
because it can manage and update your unix tools on your mac easily).

	brew install node

Installing the sass gem on your mac is easy because ruby and the gem manager manger 
are preinstalled with the OS. It should just be:

	gem install sass


## Important Minimization Note ##

Though the toolkits are in place, the minimized version of both styles.css and
production.js are not being used ever. This is a code-base hack to be sure we're
building and testing against the dev files. It should be allowed to switch based
on the wordpress configuration, but right now it doesn't. 
Change this on line #152 of functions.php in a function called berea_scripts.


## Future SomeLikeItNeat & Gulp Note ##

The SomeLikeItNeat project has been updated over the summer since we initally
started using it as a foundational aspect of these custom themes. The problem
is that they substantially revamped their gulp workflow. Our workflow has been
modified as an in-between stance between what was working on local devs and what
is now on the SomeLikeItNeat master branch. At some point the update needs to be
reviewed and evaluated, and will likely need to be updated. So there's that.


------





## Notes about the 404 page ##

To give Berea the ability to easily change 404 page content, the standard WordPress
404 paradigm was changed slightly. 404.php looks for content from a page named "Page 
Not Found" and inserts that on the page inside a user-entered-content wrapper, which 
gives it the "typography" treatment.

NB: The "Page Not Found" page needs to have "page-not-found" as its slug. This is 
easy to mess up. All you need to do it initially create the page with the wrong title.
To fix it, delete the page, empty the trash, and then recreate it with the correct
name. 