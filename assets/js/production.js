/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq) && matchMedia(mq).matches || false;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   goo.gl/v3V4Gp
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
        /*jshint evil:true */
        /** version */
        var version = '3.7.0';

        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

          // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set
          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                          // unroll the `createElement` calls
                                                          getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                          // corrects block display not defined in IE6/7/8/9
                                          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                            // adds styling not present in IE6/7/8/9
                                            'mark{background:#FF0;color:#000}' +
                                            // hides non-rendered elements
                                            'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          /**
           * current version of html5shiv
           */
          'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
          'shivCSS': (options.shivCSS !== false),

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
          'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
          'shivMethods': (options.shivMethods !== false),

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
          'type': 'default',

          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,

          //creates a shived element
          createElement: createElement,

          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);

jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1024;
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	$(window).scroll(function(){
		var $o = $('<div class="cd-overlay shift-down"></div>').hide().appendTo('body');
		var baseMargin = parseInt($o.css('marginTop'));
		$o.remove();

		var fromTop = $(window).scrollTop();
		var overlayTopMargin = parseInt( $('.cd-overlay').css('marginTop') );

		var newMargin;

		if (fromTop > baseMargin) {
			newMargin = 0;
		} else if (overlayTopMargin <= baseMargin-fromTop && fromTop < baseMargin) {
			newMargin = baseMargin - fromTop;
		} else {
			newMargin = baseMargin - fromTop;
		};

		$('.cd-overlay').css('marginTop', newMargin + 'px');
	});

	//mobile - open lateral menu clicking on the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();

		if( $('.cd-overlay').hasClass('is-visible') && !$('.cd-search').hasClass('is-visible') ) {
			closeNav();
		} else {
			$(this).addClass('nav-is-visible');
			$('.cd-primary-nav').addClass('nav-is-visible');
			$('.cd-main-header').addClass('nav-is-visible');
			$('.cd-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
			toggleSearch('close');
			$('.cd-overlay').addClass('is-visible');
		}
		toggleRibbon();
		toggleOverlayShift();

	});

	//open search form
	$('.cd-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
		toggleRibbon();
		toggleOverlayShift();
		closeNav();
	});

	//close lateral menu on mobile 
	$('.cd-overlay').on('swiperight', function(){
		if($('.cd-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
			toggleRibbon();
		}
	});
	$('.nav-on-left .cd-overlay').on('swipeleft', function(){
		if($('.cd-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		}
	});
	$('.cd-overlay').on('click', function(){
		closeNav();
		toggleSearch('close');
		$('.cd-overlay').removeClass('is-visible');
		toggleRibbon();
	});


	//prevent default clicking on direct children of .cd-primary-nav 
	$('.cd-primary-nav').children('.has-children').children('a').on('click', function(event){
		event.preventDefault();
	});
	//open submenu
	$('.has-children').children('a').on('click', function(event){
		if( !checkWindowWidth() ) event.preventDefault();
		var selected = $(this);
		if( selected.next('ul').hasClass('is-hidden') ) {
			//desktop version only
			selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
			selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			$('.cd-overlay').addClass('is-visible');
		} else {
			selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
			$('.cd-overlay').removeClass('is-visible');
		}
		toggleSearch('close');
		toggleRibbon();
	});

	//submenu items - go back link
	$('.go-back').on('click', function(){
		$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});

	function closeNav() {
		$('.cd-nav-trigger').removeClass('nav-is-visible');
		$('.cd-main-header').removeClass('nav-is-visible');
		$('.cd-primary-nav').removeClass('nav-is-visible');
		$('.has-children ul').addClass('is-hidden');
		$('.has-children a').removeClass('selected');
		$('.moves-out').removeClass('moves-out');
		$('.cd-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$('body').removeClass('overflow-hidden');
		});
		if(!$('#cd-search').hasClass('is-visible')) $('.cd-overlay').removeClass('is-visible');
		toggleOverlayShift();
	}

	function toggleSearch(type) {
		if(type=="close") {
			//close search
			$('.cd-search').removeClass('is-visible');
			$('.cd-search-trigger').removeClass('search-is-visible');
			$('.cd-overlay').removeClass('search-is-visible');
			$('body').removeClass('search-is-visible');
		} else {
			//toggle search visibility
			$('.cd-search').toggleClass('is-visible');
			$('.cd-search-trigger').toggleClass('search-is-visible');
			$('body').toggleClass('search-is-visible');
			if($(window).width() > MqL && $('.cd-search').hasClass('is-visible')) $('.cd-search').find('input[type="search"]').focus();
			($('#cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible');
			document.getElementById('berea-search-bar').focus();
		}
	}
	function toggleRibbonAction() {
		if ( $(document).innerWidth() >= 1024 ) {
			// main homepage + large media, swap between full & mini
			if ( $('div#ribbon').hasClass('mini-ribbon') && !$('.cd-overlay').hasClass('is-visible') ) {
				$('div#ribbon').removeClass('mini-ribbon');
			} else {
				$('div#ribbon').addClass('mini-ribbon');
			}
		} else {
			if ( $('.cd-overlay').hasClass('is-visible') ) {
				$('div#ribbon').hide();
			} else {
				$('div#ribbon').show();
			}
		}
	}
	window._navigation_toggleRibbonAction=toggleRibbonAction;

	function toggleRibbon() {
		/* use settimeout to get off the main thread and let the cd-overlay become invisible because it impacts our logic */
		setTimeout('window._navigation_toggleRibbonAction()',50)
	}


	function toggleOverlayShift() {
        if ( $('.cd-overlay').hasClass('.shift-down')) {
            $('.cd-overlay').removeClass('shift-down');
        } else {
            $('.cd-overlay').addClass('shift-down');
        }
	}


	function checkWindowWidth() {
		//check window width (scrollbar included)
		var e = window,
			a = 'inner';
		if (!('innerWidth' in window )) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		//if its the stopgap theme always return true 
		if ($('body').hasClass('child-theme-bc-wp-2015-child-theme-stopgap')) { return true; }
		if ( e[ a+'Width' ] >= MqL ) {
			return true;
		} else {
			return false;
		}
	}

	function moveNavigation(){
		var navigation = $('.cd-nav');
		closeNav();
		$('.cd-overlay').removeClass('is-visible');
		toggleSearch('close');
		$('div#ribbon').removeClass('mini-ribbon');
		$('div#ribbon').show();

		var desktop = checkWindowWidth();
		if ( desktop ) {
			navigation.detach();
			navigation.insertBefore('.cd-header-buttons');
		} else {
			navigation.detach();
			navigation.insertAfter('.cd-overlay');
		}
	}

	// Close navbar and search when the escape key is pressed

	$(document).keyup(function(e) {
	    if (e.key === "Escape") {
	    	console.log("Escape Key Pressed");
	    	closeNav();
		    if ($('.cd-search').hasClass('is-visible')) {
		    	toggleSearch();
		    }
		}
	});
});
( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && 'undefined' !== typeof( document.getElementById ) ) {
		var eventMethod = ( window.addEventListener ) ? 'addEventListener' : 'attachEvent';
		window[ eventMethod ]( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
					element.tabIndex = -1;

				element.focus();
			}
		}, false );
	}
})();

/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);
/*
selectivizr v1.0.2b - (c) Keith Clark, freely distributable under the terms
of the MIT license.

selectivizr.com
*/
/*

Notes about this source
-----------------------

 * The #DEBUG_START and #DEBUG_END comments are used to mark blocks of code
   that will be removed prior to building a final release version (using a
   pre-compression script)


References:
-----------

 * CSS Syntax          : http://www.w3.org/TR/2003/WD-css3-syntax-20030813/#style
 * Selectors           : http://www.w3.org/TR/css3-selectors/#selectors
 * IE Compatability    : http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx
 * W3C Selector Tests  : http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/tests/

*/

(function(win) {

	// If browser isn't IE, then stop execution! This handles the script
	// being loaded by non IE browsers because the developer didn't use
	// conditional comments.
	if (/*@cc_on!@*/true) return;

	// =========================== Init Objects ============================

	var doc = document;
	var root = doc.documentElement;
	var xhr = getXHRObject();
	var ieVersion = /MSIE (\d+)/.exec(navigator.userAgent)[1];

	// If were not in standards mode, IE is too old / new or we can't create
	// an XMLHttpRequest object then we should get out now.
	if (doc.compatMode != 'CSS1Compat' || ieVersion<6 || ieVersion>8 || !xhr) {
		return;
	}


	// ========================= Common Objects ============================

	// Compatiable selector engines in order of CSS3 support. Note: '*' is
	// a placholder for the object key name. (basically, crude compression)
	var selectorEngines = {
		"NW"								: "*.Dom.select",
		"MooTools"							: "$$",
		"DOMAssistant"						: "*.$",
		"Prototype"							: "$$",
		"YAHOO"								: "*.util.Selector.query",
		"Sizzle"							: "*",
		"jQuery"							: "*",
		"dojo"								: "*.query"
	};

	var selectorMethod;
	var enabledWatchers 					= [];     // array of :enabled/:disabled elements to poll
	var ie6PatchID 							= 0;      // used to solve ie6's multiple class bug
	var patchIE6MultipleClasses				= true;   // if true adds class bloat to ie6
	var namespace 							= "slvzr";

	// Stylesheet parsing regexp's
	var RE_COMMENT							= /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g;
	var RE_IMPORT							= /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g;
	var RE_ASSET_URL 						= /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g;
	var RE_PSEUDO_STRUCTURAL				= /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;
	var RE_PSEUDO_ELEMENTS					= /:(:first-(?:line|letter))/g;
	var RE_SELECTOR_GROUP					= /(^|})\s*([^\{]*?[\[:][^{]+)/g;
	var RE_SELECTOR_PARSE					= /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g;
	var RE_LIBRARY_INCOMPATIBLE_PSEUDOS		= /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;
	var RE_PATCH_CLASS_NAME_REPLACE			= /[^\w-]/g;

	// HTML UI element regexp's
	var RE_INPUT_ELEMENTS					= /^(INPUT|SELECT|TEXTAREA|BUTTON)$/;
	var RE_INPUT_CHECKABLE_TYPES			= /^(checkbox|radio)$/;

	// Broken attribute selector implementations (IE7/8 native [^=""], [$=""] and [*=""])
	var BROKEN_ATTR_IMPLEMENTATIONS			= ieVersion>6 ? /[\$\^*]=(['"])\1/ : null;

	// Whitespace normalization regexp's
	var RE_TIDY_TRAILING_WHITESPACE			= /([(\[+~])\s+/g;
	var RE_TIDY_LEADING_WHITESPACE			= /\s+([)\]+~])/g;
	var RE_TIDY_CONSECUTIVE_WHITESPACE		= /\s+/g;
	var RE_TIDY_TRIM_WHITESPACE				= /^\s*((?:[\S\s]*\S)?)\s*$/;

	// String constants
	var EMPTY_STRING						= "";
	var SPACE_STRING						= " ";
	var PLACEHOLDER_STRING					= "$1";

	// =========================== Patching ================================

	// --[ patchStyleSheet() ]----------------------------------------------
	// Scans the passed cssText for selectors that require emulation and
	// creates one or more patches for each matched selector.
	function patchStyleSheet( cssText ) {
		return cssText.replace(RE_PSEUDO_ELEMENTS, PLACEHOLDER_STRING).
			replace(RE_SELECTOR_GROUP, function(m, prefix, selectorText) {
    			var selectorGroups = selectorText.split(",");
    			for (var c = 0, cs = selectorGroups.length; c < cs; c++) {
    				var selector = normalizeSelectorWhitespace(selectorGroups[c]) + SPACE_STRING;
    				var patches = [];
    				selectorGroups[c] = selector.replace(RE_SELECTOR_PARSE,
    					function(match, combinator, pseudo, attribute, index) {
    						if (combinator) {
    							if (patches.length>0) {
    								applyPatches( selector.substring(0, index), patches );
    								patches = [];
    							}
    							return combinator;
    						}
    						else {
    							var patch = (pseudo) ? patchPseudoClass( pseudo ) : patchAttribute( attribute );
    							if (patch) {
    								patches.push(patch);
    								return "." + patch.className;
    							}
    							return match;
    						}
    					}
    				);
    			}
    			return prefix + selectorGroups.join(",");
    		});
	};

	// --[ patchAttribute() ]-----------------------------------------------
	// returns a patch for an attribute selector.
	function patchAttribute( attr ) {
		return (!BROKEN_ATTR_IMPLEMENTATIONS || BROKEN_ATTR_IMPLEMENTATIONS.test(attr)) ?
			{ className: createClassName(attr), applyClass: true } : null;
	};

	// --[ patchPseudoClass() ]---------------------------------------------
	// returns a patch for a pseudo-class
	function patchPseudoClass( pseudo ) {

		var applyClass = true;
		var className = createClassName(pseudo.slice(1));
		var isNegated = pseudo.substring(0, 5) == ":not(";
		var activateEventName;
		var deactivateEventName;

		// if negated, remove :not()
		if (isNegated) {
			pseudo = pseudo.slice(5, -1);
		}

		// bracket contents are irrelevant - remove them
		var bracketIndex = pseudo.indexOf("(")
		if (bracketIndex > -1) {
			pseudo = pseudo.substring(0, bracketIndex);
		}

		// check we're still dealing with a pseudo-class
		if (pseudo.charAt(0) == ":") {
			switch (pseudo.slice(1)) {

				case "root":
					applyClass = function(e) {
						return isNegated ? e != root : e == root;
					}
					break;

				case "target":
					// :target is only supported in IE8
					if (ieVersion == 8) {
						applyClass = function(e) {
							var handler = function() {
								var hash = location.hash;
								var hashID = hash.slice(1);
								return isNegated ? (hash == EMPTY_STRING || e.id != hashID) : (hash != EMPTY_STRING && e.id == hashID);
							};
							addEvent( win, "hashchange", function() {
								toggleElementClass(e, className, handler());
							})
							return handler();
						}
						break;
					}
					return false;

				case "checked":
					applyClass = function(e) {
						if (RE_INPUT_CHECKABLE_TYPES.test(e.type)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "checked") {
									toggleElementClass( e, className, e.checked !== isNegated );
								}
							})
						}
						return e.checked !== isNegated;
					}
					break;

				case "disabled":
					isNegated = !isNegated;

				case "enabled":
					applyClass = function(e) {
						if (RE_INPUT_ELEMENTS.test(e.tagName)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "$disabled") {
									toggleElementClass( e, className, e.$disabled === isNegated );
								}
							});
							enabledWatchers.push(e);
							e.$disabled = e.disabled;
							return e.disabled === isNegated;
						}
						return pseudo == ":enabled" ? isNegated : !isNegated;
					}
					break;

				case "focus":
					activateEventName = "focus";
					deactivateEventName = "blur";

				case "hover":
					if (!activateEventName) {
						activateEventName = "mouseenter";
						deactivateEventName = "mouseleave";
					}
					applyClass = function(e) {
						addEvent( e, isNegated ? deactivateEventName : activateEventName, function() {
							toggleElementClass( e, className, true );
						})
						addEvent( e, isNegated ? activateEventName : deactivateEventName, function() {
							toggleElementClass( e, className, false );
						})
						return isNegated;
					}
					break;

				// everything else
				default:
					// If we don't support this pseudo-class don't create
					// a patch for it
					if (!RE_PSEUDO_STRUCTURAL.test(pseudo)) {
						return false;
					}
					break;
			}
		}
		return { className: className, applyClass: applyClass };
	};

	// --[ applyPatches() ]-------------------------------------------------
	// uses the passed selector text to find DOM nodes and patch them
	function applyPatches(selectorText, patches) {
		var elms;

		// Although some selector libraries can find :checked :enabled etc.
		// we need to find all elements that could have that state because
		// it can be changed by the user.
		var domSelectorText = selectorText.replace(RE_LIBRARY_INCOMPATIBLE_PSEUDOS, EMPTY_STRING);

		// If the dom selector equates to an empty string or ends with
		// whitespace then we need to append a universal selector (*) to it.
		if (domSelectorText == EMPTY_STRING || domSelectorText.charAt(domSelectorText.length - 1) == SPACE_STRING) {
			domSelectorText += "*";
		}

		// Ensure we catch errors from the selector library
		try {
			elms = selectorMethod( domSelectorText );
		} catch (ex) {
			// #DEBUG_START
			log( "Selector '" + selectorText + "' threw exception '" + ex + "'" );
			// #DEBUG_END
		}


		if (elms) {
			for (var d = 0, dl = elms.length; d < dl; d++) {
				var elm = elms[d];
				var cssClasses = elm.className;
				for (var f = 0, fl = patches.length; f < fl; f++) {
					var patch = patches[f];

					if (!hasPatch(elm, patch)) {
						if (patch.applyClass && (patch.applyClass === true || patch.applyClass(elm) === true)) {
							cssClasses = toggleClass(cssClasses, patch.className, true );
						}
					}
				}
				elm.className = cssClasses;
			}
		}
	};

	// --[ hasPatch() ]-----------------------------------------------------
	// checks for the exsistence of a patch on an element
	function hasPatch( elm, patch ) {
		return new RegExp("(^|\\s)" + patch.className + "(\\s|$)").test(elm.className);
	};


	// =========================== Utility =================================

	function createClassName( className ) {
		return namespace + "-" + ((ieVersion == 6 && patchIE6MultipleClasses) ?
			ie6PatchID++
		:
			className.replace(RE_PATCH_CLASS_NAME_REPLACE, function(a) { return a.charCodeAt(0) }));
	};

	// --[ log() ]----------------------------------------------------------
	// #DEBUG_START
	function log( message ) {
		if (win.console) {
			win.console.log(message);
		}
	};
	// #DEBUG_END

	// --[ trim() ]---------------------------------------------------------
	// removes leading, trailing whitespace from a string
	function trim( text ) {
		return text.replace(RE_TIDY_TRIM_WHITESPACE, PLACEHOLDER_STRING);
	};

	// --[ normalizeWhitespace() ]------------------------------------------
	// removes leading, trailing and consecutive whitespace from a string
	function normalizeWhitespace( text ) {
		return trim(text).replace(RE_TIDY_CONSECUTIVE_WHITESPACE, SPACE_STRING);
	};

	// --[ normalizeSelectorWhitespace() ]----------------------------------
	// tidies whitespace around selector brackets and combinators
	function normalizeSelectorWhitespace( selectorText ) {
		return normalizeWhitespace(selectorText.
			replace(RE_TIDY_TRAILING_WHITESPACE, PLACEHOLDER_STRING).
			replace(RE_TIDY_LEADING_WHITESPACE, PLACEHOLDER_STRING)
		);
	};

	// --[ toggleElementClass() ]-------------------------------------------
	// toggles a single className on an element
	function toggleElementClass( elm, className, on ) {
		var oldClassName = elm.className;
		var newClassName = toggleClass(oldClassName, className, on);
		if (newClassName != oldClassName) {
			elm.className = newClassName;
			elm.parentNode.className += EMPTY_STRING;
		}
	};

	// --[ toggleClass() ]--------------------------------------------------
	// adds / removes a className from a string of classNames. Used to
	// manage multiple class changes without forcing a DOM redraw
	function toggleClass( classList, className, on ) {
		var re = RegExp("(^|\\s)" + className + "(\\s|$)");
		var classExists = re.test(classList);
		if (on) {
			return classExists ? classList : classList + SPACE_STRING + className;
		} else {
			return classExists ? trim(classList.replace(re, PLACEHOLDER_STRING)) : classList;
		}
	};

	// --[ addEvent() ]-----------------------------------------------------
	function addEvent(elm, eventName, eventHandler) {
		elm.attachEvent("on" + eventName, eventHandler);
	};

	// --[ getXHRObject() ]-------------------------------------------------
	function getXHRObject()
	{
		if (win.XMLHttpRequest) {
			return new XMLHttpRequest;
		}
		try	{
			return new ActiveXObject('Microsoft.XMLHTTP');
		} catch(e) {
			return null;
		}
	};

	// --[ loadStyleSheet() ]-----------------------------------------------
	function loadStyleSheet( url ) {
		xhr.open("GET", url, false);
		xhr.send();
		return (xhr.status==200) ? xhr.responseText : EMPTY_STRING;
	};

	// --[ resolveUrl() ]---------------------------------------------------
	// Converts a URL fragment to a fully qualified URL using the specified
	// context URL. Returns null if same-origin policy is broken
	function resolveUrl( url, contextUrl ) {

		function getProtocolAndHost( url ) {
			return url.substring(0, url.indexOf("/", 8));
		};

		// absolute path
		if (/^https?:\/\//i.test(url)) {
			return getProtocolAndHost(contextUrl) == getProtocolAndHost(url) ? url : null;
		}

		// root-relative path
		if (url.charAt(0)=="/")	{
			return getProtocolAndHost(contextUrl) + url;
		}

		// relative path
		var contextUrlPath = contextUrl.split(/[?#]/)[0]; // ignore query string in the contextUrl
		if (url.charAt(0) != "?" && contextUrlPath.charAt(contextUrlPath.length - 1) != "/") {
			contextUrlPath = contextUrlPath.substring(0, contextUrlPath.lastIndexOf("/") + 1);
		}

		return contextUrlPath + url;
	};

	// --[ parseStyleSheet() ]----------------------------------------------
	// Downloads the stylesheet specified by the URL, removes it's comments
	// and recursivly replaces @import rules with their contents, ultimately
	// returning the full cssText.
	function parseStyleSheet( url ) {
		if (url) {
			return loadStyleSheet(url).replace(RE_COMMENT, EMPTY_STRING).
			replace(RE_IMPORT, function( match, quoteChar, importUrl, quoteChar2, importUrl2 ) {
				return parseStyleSheet(resolveUrl(importUrl || importUrl2, url));
			}).
			replace(RE_ASSET_URL, function( match, quoteChar, assetUrl ) {
				quoteChar = quoteChar || EMPTY_STRING;
				return " url(" + quoteChar + resolveUrl(assetUrl, url) + quoteChar + ") ";
			});
		}
		return EMPTY_STRING;
	};

	// --[ init() ]---------------------------------------------------------
	function init() {
		// honour the <base> tag
		var url, stylesheet;
		var baseTags = doc.getElementsByTagName("BASE");
		var baseUrl = (baseTags.length > 0) ? baseTags[0].href : doc.location.href;

		/* Note: This code prevents IE from freezing / crashing when using
		@font-face .eot files but it modifies the <head> tag and could
		trigger the IE stylesheet limit. It will also cause FOUC issues.
		If you choose to use it, make sure you comment out the for loop
		directly below this comment.

		var head = doc.getElementsByTagName("head")[0];
		for (var c=doc.styleSheets.length-1; c>=0; c--) {
			stylesheet = doc.styleSheets[c]
			head.appendChild(doc.createElement("style"))
			var patchedStylesheet = doc.styleSheets[doc.styleSheets.length-1];

			if (stylesheet.href != EMPTY_STRING) {
				url = resolveUrl(stylesheet.href, baseUrl)
				if (url) {
					patchedStylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) )
					stylesheet.disabled = true
					setTimeout( function () {
						stylesheet.owningElement.parentNode.removeChild(stylesheet.owningElement)
					})
				}
			}
		}
		*/

		for (var c = 0; c < doc.styleSheets.length; c++) {
			stylesheet = doc.styleSheets[c]
			if (stylesheet.href != EMPTY_STRING) {
				url = resolveUrl(stylesheet.href, baseUrl);
				if (url) {
					stylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) );
				}
			}
		}

		// :enabled & :disabled polling script (since we can't hook
		// onpropertychange event when an element is disabled)
		if (enabledWatchers.length > 0) {
			setInterval( function() {
				for (var c = 0, cl = enabledWatchers.length; c < cl; c++) {
					var e = enabledWatchers[c];
					if (e.disabled !== e.$disabled) {
						if (e.disabled) {
							e.disabled = false;
							e.$disabled = true;
							e.disabled = true;
						}
						else {
							e.$disabled = e.disabled;
						}
					}
				}
			},250)
		}
	};

	// Bind selectivizr to the ContentLoaded event.
	ContentLoaded(win, function() {
		// Determine the "best fit" selector engine
		for (var engine in selectorEngines) {
			var members, member, context = win;
			if (win[engine]) {
				members = selectorEngines[engine].replace("*", engine).split(".");
				while ((member = members.shift()) && (context = context[member])) {}
				if (typeof context == "function") {
					selectorMethod = context;
					init();
					return;
				}
			}
		}
	});


	/*!
	 * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
	 *
	 * Author: Diego Perini (diego.perini at gmail.com)
	 * Summary: cross-browser wrapper for DOMContentLoaded
	 * Updated: 20101020
	 * License: MIT
	 * Version: 1.2
	 *
	 * URL:
	 * http://javascript.nwbox.com/ContentLoaded/
	 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	 *
	 */

	// @w window reference
	// @f function reference
	function ContentLoaded(win, fn) {

		var done = false, top = true,
		init = function(e) {
			if (e.type == "readystatechange" && doc.readyState != "complete") return;
			(e.type == "load" ? win : doc).detachEvent("on" + e.type, init, false);
			if (!done && (done = true)) fn.call(win, e.type || e);
		},
		poll = function() {
			try { root.doScroll("left"); } catch(e) { setTimeout(poll, 50); return; }
			init('poll');
		};

		if (doc.readyState == "complete") fn.call(win, EMPTY_STRING);
		else {
			if (doc.createEventObject && root.doScroll) {
				try { top = !win.frameElement; } catch(e) { }
				if (top) poll();
			}
			addEvent(doc,"readystatechange", init);
			addEvent(win,"load", init);
		}
	};
})(this);

/*  Berea Custom JavaScripts (empty currently)  */

(function($) {
	
	$(document).ready(function(){
		$('.ictst_content_cl').each(function(i, item) {
			var height = 0;
			// Find tallest item
			$(item).find('> ul > li').each(function(j,li) {
				var itemHeight = $(li).height();
				if ( itemHeight > height ) height = itemHeight;
			})
			$(item).height(height);

		})
	})
	
})( jQuery );
jQuery(document).ready(function(){

if ($('#scroll-to').length > 0){

var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();


if ($('#positionChange').length > 0){
document.getElementById("positionChange").style.top = (hT-wS) + "px";
}

}


	if( $('.gc-cd-stretchy-nav').length > 0 ) {

	 
   	var stretchyNavs = $('.gc-cd-stretchy-nav');
		
 	stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.gc-cd-nav-trigger');
			


			stretchyNav.toggleClass('gc-nav-is-visible');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('gc-nav-is-visible');
			});
		
		});

    



/*
		$(document).on('click', function(event){
			( !$(event.target).is('.gc-cd-nav-trigger') && !$(event.target).is('.gc-cd-nav-trigger span') ) && stretchyNavs.removeClass('gc-nav-is-visible');
		});
*/
  
$("a").on('click', function(event) {

      
      if (this.hash !== "") {
         
         var atags = document.getElementsByTagName("a");
         for (i = 0; i < atags.length; i++){
           atags[i].classList.remove("active");
         }
         this.className += " active";
          // Prevent default anchor click behavior
         event.preventDefault();
         var hash = this.hash;
      
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
  
  });
   $('.gc-education').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[2].childNodes[0].className += " active";
  }); 

   $('.gc-liberalarts').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[3].childNodes[0].className += " active";
  });

   $('.gc-christian').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[4].childNodes[0].className += " active";
  });

   $('.gc-labor').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[5].childNodes[0].className += " active";
  });

   $('.gc-kinship').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[6].childNodes[0].className += " active";
  });

   $('.gc-democratic').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[7].childNodes[0].className += " active";
  });

   $('.gc-sustainability').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[8].childNodes[0].className += " active";
  });

   $('.gc-appalachia').on('click', function(event){
    var allCommitments = document.getElementsByClassName("gc");
    for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
      }
    allCommitments[9].childNodes[0].className += " active";
  });


	}


jQuery(document).ready(function(){


  $('[id^=commitment]').click(function(){
      var active = $('div.active');
      for (i = 0; i < active.length; i++){
        if ('#toggleit_' + (active[i]).id != '#toggleit_' + (this).id){
          $('#toggleit_' + (active[i]).id).toggle();
          active[i].classList.remove("active");
        }
      }
      

      $('#toggleit_' + (this).id).slideToggle('slow');
      if (this.classList.contains("active")){
        this.classList.remove("active");
      }
      else{
        this.className += ' active';
      }
      if ($('#toggleit_' + (this).id).is(':visible')) {
        $('html, body').animate({scrollTop: $('#toggleit_' + (this).id).offset().top});
      }

      var commitment = this.id.split("_")[1];
      var allCommitments = document.getElementsByClassName("gc");
      for (i = 0; i < allCommitments.length - 2; i++){
        var selectedCommitment = allCommitments[i+2].childNodes[0];
        selectedCommitment.classList.remove("active");
        if (selectedCommitment.hash.substr(1) == this.id.split("_")[1] && !selectedCommitment.classList.contains("active")){
          selectedCommitment.className += " active";
        }
      }


    });

});





$(window).scroll(function() {
   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
//if document.getElementById('positionChange') !== null{
  
   if (wS > (hT)){
     //document.getElementById("positionChange").style.position = "fixed";
          document.getElementById("positionChange").style.top = "0px";
   }
   else {
   		document.getElementById("positionChange").style.top = (hT-wS) + "px";
   }

 //}
 
});



});

jQuery( function($) {

$(document).on('click', 'li.vc_tta-tab a,li.vc_tta-tab,.vc_tta-panel-title', function(){
   $('html, body').stop();
});

});



jQuery(document).ready(function( $ ) {
	
	console.log('legacy wall');
	$('.post .entry-content').append($('<div class="loading"></div>'));

	$.getJSON('/wp-content/themes/bc-wp-2015/assets/js/custom/legacy-wall.json', function(data) {
		console.log(data);
		data.panelNames.sort();

		// Generate year and names lists
		var years = []
		var yearPanels = {};
		var names = [];
		var nameMap = {};
		$.each(data.panelNames, function(i, panel) {
			var year = panel.split(' ').shift();
			if (!inArray(year, years)) {
				years.push(year);
			}
			if (!(year in yearPanels)) {
				yearPanels[year] = [];
			}
			yearPanels[year].push(panel);
			$.each(data.panels[panel].names, function(j, name){
				names.push(name);
				nameMap[name] = panel;
			});
		});
		console.log(years);
		console.log(yearPanels);
		console.log(nameMap);

	});
});



function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}
// tracking code for Admissions partner - 

/*
   var _ss = _ss || [];
   _ss.push(['_setDomain', 'https://koi-3QNJCQ0Q7O.marketingautomation.services/net']);
   _ss.push(['_setAccount', 'KOI-44JNNTK8CO']);
   _ss.push(['_trackPageView']);
(function() {
   var ss = document.createElement('script');
   ss.type = 'text/javascript'; ss.async = true;
   ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'koi-3QNJCQ0Q7O.marketingautomation.services/client/ss.js?ver=1.1.1';
   var scr = document.getElementsByTagName('script')[0];
   scr.parentNode.insertBefore(ss, scr);
})();
*/


/* OLD ONE
   var _ss = _ss || [];
   _ss.push(['_setDomain', 'https://koi-3QNJCQ0Q7O.marketingautomation.services/net']);
   _ss.push(['_setAccount', 'KOI-44JNNTK8CO']);
   _ss.push(['_trackPageView']);
(function() {
   var ss = document.createElement('script');
   ss.type = 'text/javascript'; ss.async = true;
   ss.src = ('https:' == document.location.protocol ? '[https://' : 'http://]https://' : 'http://') + 'koi-3QNJCQ0Q7O.marketingautomation.services/client/ss.js?ver=1.1.1';
   var scr = document.getElementsByTagName('script')[0];
   scr.parentNode.insertBefore(ss, scr);
})();

*/
/**
 * @file The core file for the events calendar plugin javascript.
 * This file must load on all front facing events pages and be the first file loaded after vendor dependencies.
 * @version 3.0
 */

/**
 * @namespace tribe_ev
 * @desc The tribe_ev namespace that stores all custom functions, data, application state and an empty events object to bind custom events to.
 * This Object Literal namespace loads for all tribe events pages and is by design fully public so that themers can hook in and/or extend anything they want from their own files.
 * @example <caption>Test for tribe_ev in your own js and then run one of our functions.</caption>
 * jQuery(document).ready(function ($) {
 *      if (Object.prototype.hasOwnProperty.call(window, 'tribe_ev')) {
 *          if(tribe_ev.fn.get_category() === 'Cats'){
 *              alert('Meow!');
 *          }
 *      }
 * });
 */

var tribe_ev = window.tribe_ev || {};

/**
 * @define {boolean} tribe_debug
 * @global tribe_debug is used both by closure compiler to strip debug code on min and as a failsafe short circuit if compiler fails to strip all debug strings.
 * @desc Setup safe enhanced console logging. See the link to get the available methods, then prefix with this short circuit: 'tribe_debug && '. tribe_debug is aliased in all tribe js doc readys as 'dbug'.
 * @link http://benalman.com/code/projects/javascript-debug/docs/files/ba-debug-js.html
 * @example <caption>EG: Place this at the very bottom of the doc ready for tribe-events.js. ALWAYS short circuit with 'tribe_debug && ' or 'dbug &&' if aliased as such.</caption> *
 *        tribe_debug && debug.info('tribe-events.js successfully loaded');
 */

var tribe_debug = true;

/*!
 * this debug code is stripped out by closure compiler so it is not present in the .min versions.
 */

// @ifdef DEBUG

/*!
 * JavaScript Debug - v0.4 - 6/22/2010
 * http://benalman.com/projects/javascript-debug-console-log/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 *
 * With lots of help from Paul Irish!
 * http://paulirish.com/
 */

window.debug = (function() {
	var window = this,
		aps = Array.prototype.slice,
		con = window.console,
		that = {},
		callback_func,
		callback_force,
		log_level = 9,
		log_methods = [ 'error', 'warn', 'info', 'debug', 'log' ],
		pass_methods = 'assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace'.split( ' ' ),
		idx = pass_methods.length,
		logs = [];

	while ( --idx >= 0 ) {
		(function( method ) {

			that[ method ] = function() {
				log_level !== 0 && con && con[ method ]
				&& con[ method ].apply( con, arguments );
			}

		})( pass_methods[idx] );
	}

	idx = log_methods.length;
	while ( --idx >= 0 ) {
		(function( idx, level ) {

			that[ level ] = function() {
				var args = aps.call( arguments ),
					log_arr = [ level ].concat( args );

				logs.push( log_arr );
				exec_callback( log_arr );

				if ( !con || !is_level( idx ) ) {
					return;
				}

				con.firebug ? con[ level ].apply( window, args )
					: con[ level ] ? con[ level ]( args )
					: con.log( args );
			};

		})( idx, log_methods[idx] );
	}

	function exec_callback( args ) {
		if ( callback_func && (callback_force || !con || !con.log) ) {
			callback_func.apply( window, args );
		}
	}

	that.setLevel = function( level ) {
		log_level = typeof level === 'number' ? level : 9;
	};

	function is_level( level ) {
		return log_level > 0
			? log_level > level
			: log_methods.length + log_level <= level;
	}

	that.setCallback = function() {
		var args = aps.call( arguments ),
			max = logs.length,
			i = max;

		callback_func = args.shift() || null;
		callback_force = typeof args[0] === 'boolean' ? args.shift() : false;

		i -= typeof args[0] === 'number' ? args.shift() : max;

		while ( i < max ) {
			exec_callback( logs[i++] );
		}
	};

	return that;
})();

if ( Object.prototype.hasOwnProperty.call( window, 'tribe_ev' ) ) {
	tribe_ev.diagnostics = {
		init: []
	};
}
// @endif

/**
 * @global
 * @desc Test for localstorage support. Returns false if not available and tribe_storage as a method if true.
 * @example
 * if (tribe_storage) {
 *      tribe_storage.setItem('cats', 'hairball');
 *      tribe_storage.getItem('cats');
 * }
 */

var tribe_storage, t_fail, t_uid;
try {
	t_uid = new Date;
	(tribe_storage = window.localStorage).setItem( t_uid, t_uid );
	t_fail = tribe_storage.getItem( t_uid ) != t_uid;
	tribe_storage.removeItem( t_uid );
	t_fail && (tribe_storage = false);
} catch ( e ) {
	tribe_storage = false;
}

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var tribeDateFormat = function() {
	var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function( val, len ) {
			val = String( val );
			len = len || 2;
			while ( val.length < len ) {
				val = "0" + val;
			}
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function( date, mask, utc ) {
		var dF = tribeDateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if ( arguments.length == 1 && Object.prototype.toString.call( date ) == "[object String]" && !/\d/.test( date ) ) {
			mask = date;
			date = undefined;
		}

		if ( typeof date === 'string' ) {
			date = date.replace( /-/g, "/" );
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date( date ) : new Date;
		if ( isNaN( date ) ) {
			return;
		}

		mask = String( dF.masks[mask] || mask || dF.masks["default"] );

		// Allow setting the utc argument via the mask
		if ( mask.slice( 0, 4 ) == "UTC:" ) {
			mask = mask.slice( 4 );
			utc = true;
		}

		var _ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d   : d,
				dd  : pad( d ),
				ddd : dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m   : m + 1,
				mm  : pad( m + 1 ),
				mmm : dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy  : String( y ).slice( 2 ),
				yyyy: y,
				h   : H % 12 || 12,
				hh  : pad( H % 12 || 12 ),
				H   : H,
				HH  : pad( H ),
				M   : M,
				MM  : pad( M ),
				s   : s,
				ss  : pad( s ),
				l   : pad( L, 3 ),
				L   : pad( L > 99 ? Math.round( L / 10 ) : L ),
				t   : H < 12 ? "a" : "p",
				tt  : H < 12 ? "am" : "pm",
				T   : H < 12 ? "A" : "P",
				TT  : H < 12 ? "AM" : "PM",
				Z   : utc ? "UTC" : (String( date ).match( timezone ) || [""]).pop().replace( timezoneClip, "" ),
				o   : (o > 0 ? "-" : "+") + pad( Math.floor( Math.abs( o ) / 60 ) * 100 + Math.abs( o ) % 60, 4 ),
				S   : ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace( token, function( $0 ) {
			return $0 in flags ? flags[$0] : $0.slice( 1, $0.length - 1 );
		} );
	};
}();

tribeDateFormat.masks = {
	"default":         "ddd mmm dd yyyy HH:MM:ss",
	"tribeQuery":      "yyyy-mm-dd",
	"tribeMonthQuery": "yyyy-mm",
	"0":               'yyyy-mm-dd',
	"1":               'm/d/yyyy',
	"2":               'mm/dd/yyyy',
	"3":               'd/m/yyyy',
	"4":               'dd/mm/yyyy',
	"5":               'm-d-yyyy',
	"6":               'mm-dd-yyyy',
	"7":               'd-m-yyyy',
	"8":               'dd-mm-yyyy',
	"9":               'yyyy.mm.dd',
	"10":              'mm.dd.yyyy',
	"11":              'dd.mm.yyyy',
	"m0":              'yyyy-mm',
	"m1":              'm/yyyy',
	"m2":              'mm/yyyy',
	"m3":              'm/yyyy',
	"m4":              'mm/yyyy',
	"m5":              'm-yyyy',
	"m6":              'mm-yyyy',
	"m7":              'm-yyyy',
	"m8":              'mm-yyyy'
};

tribeDateFormat.i18n = {
	dayNames  : [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

/**
 * A collection of utility functions.
 *
 * @type {{getQueryVars: tribeUtils.getQueryVars}}
 */
var tribeUtils = {
	/**
	 * Searches a URL, or the current page URL, for query vars and returns an object listing
	 * them where each query var name is a property associated to its value(s).
	 *
	 * @param string location Def. to `location`, an optional URL to scan for query vars.
	 *
	 * @returns {{}} An array containing the query vars as properties.
	 */
	'getQueryVars': function ( url ) {
		var queryVars = {},
			url = url || location;
		url.search.substr( 1 ).split( '&' ).forEach( function ( queryVar ) {
			queryVars[ queryVar.split( '=' )[0] ] = queryVar.split( '=' )[1];
		} );

		return queryVars;
	}
};

Date.prototype.format = function( mask, utc ) {
	return tribeDateFormat( this, mask, utc );
};

(function() {

	/**
	 * @function tribe_tmpl
	 * @desc Javascript templating function based on John Resigs micro-templating approach and expanded upon by cho45. Tags and function name changed here to avoid conflicts.
	 * @param id The javascript template
	 * @param data The data object
	 */

	/**
	 * https://github.com/cho45/micro-template.js
	 * (c) cho45 http://cho45.github.com/mit-license
	 */
	function tribe_tmpl( id, data ) {
		var me = arguments.callee;
		if ( !me.cache[id] ) {
			me.cache[id] = (function() {
				var name = id, string = /^[\w\-]+$/.test( id ) ? me.get( id ) : (name = 'template(string)', id); // no warnings
				var line = 1, body = (
					"try { " +
					(me.variable ? "var " + me.variable + " = this.stash;" : "with (this.stash) { ") +
					"this.ret += '" +
					string.
					replace( /\[\[/g, '\x11' ).replace( /\]\]/g, '\x13' ). // if you want other tag, just edit this line
					replace( /'(?![^\x11\x13]+?\x13)/g, '\\x27' ).
					replace( /^\s*|\s*$/g, '' ).
					replace( /\n/g,function() {
						return "';\nthis.line = " + (++line) + "; this.ret += '\\n"
					} ).
					replace( /\x11=raw(.+?)\x13/g, "' + ($1) + '" ).
					replace( /\x11=(.+?)\x13/g, "' + this.escapeHTML($1) + '" ).
					replace( /\x11(.+?)\x13/g, "'; $1; this.ret += '" ) +
					"'; " + (me.variable ? "" : "}") + "return this.ret;" +
					"} catch (e) { throw 'TemplateError: ' + e + ' (on " + name + "' + ' line ' + this.line + ')'; } " +
					"//@ sourceURL=" + name + "\n" // source map
				).replace( /this\.ret \+= '';/g, '' );
				var func = new Function( body );
				var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\x22': '&#x22;', '\x27': '&#x27;' };
				var escapeHTML = function( string ) {
					return ('' + string).replace( /[&<>\'\"]/g, function( _ ) {
						return map[_]
					} )
				};
				return function( stash ) {
					return func.call( me.context = { escapeHTML: escapeHTML, line: 1, ret: '', stash: stash } )
				};
			})();
		}
		return data ? me.cache[id]( data ) : me.cache[id];
	}

	tribe_tmpl.cache = {};
	tribe_tmpl.get = function( id ) {
		return document.getElementById( id ).innerHTML
	};

	/**
	 * Extended template function:
	 *   requires: basic template() function
	 *   provides:
	 *     include(id)
	 *     wrapper(id, function () {})
	 */
	function tribe_tmpl_extended( id, data ) {
		var fun = function( data ) {
			data.include = function( name, args ) {
				var stash = {};
				for ( var key in tribe_tmpl.context.stash ) {
					if ( tribe_tmpl.context.stash.hasOwnProperty( key ) ) {
						stash[key] = tribe_tmpl.context.stash[key];
					}
				}
				if ( args ) {
					for ( var key in args ) {
						if ( args.hasOwnProperty( key ) ) {
							stash[key] = args[key];
						}
					}
				}
				var context = tribe_tmpl.context;
				context.ret += tribe_tmpl( name, stash );
				tribe_tmpl.context = context;
			};

			data.wrapper = function( name, fun ) {
				var current = tribe_tmpl.context.ret;
				tribe_tmpl.context.ret = '';
				fun.apply( tribe_tmpl.context );
				var content = tribe_tmpl.context.ret;
				var orig_content = tribe_tmpl.context.stash.content;
				tribe_tmpl.context.stash.content = content;
				tribe_tmpl.context.ret = current + tribe_tmpl( name, tribe_tmpl.context.stash );
				tribe_tmpl.context.stash.content = orig_content;
			};

			return tribe_tmpl( id, data );
		};

		return data ? fun( data ) : fun;
	}

	tribe_tmpl.get = function( id ) {
		var fun = tribe_tmpl_extended.get;
		return fun ? fun( id ) : document.getElementById( id ).innerHTML;
	};

	this.tribe_tmpl = tribe_tmpl;
	this.tribe_tmpl_extended = tribe_tmpl_extended;


})();

/**
 * @external "jQuery.fn"
 * @desc The jQuery plugin namespace.
 */


(function( $, undefined ) {

	/**
	 * @function external:"jQuery.fn".tribe_clear_form
	 * @desc Clear a forms inputs with jquery.
	 * @example <caption>Clear a form with the forms id as a selector.</caption>
	 * $('#myForm').tribe_clear_form();
	 */
	$.fn.tribe_clear_form = function() {
		return this.each( function() {
			var type = this.type, tag = this.tagName.toLowerCase();
			if ( tag == 'form' ) {
				return $( ':input', this ).tribe_clear_form();
			}
			if ( type == 'text' || type == 'password' || tag == 'textarea' ) {
				this.value = '';
			}
			else if ( type == 'checkbox' || type == 'radio' ) {
				this.checked = false;
			}
			else if ( tag == 'select' ) {
				this.selectedIndex = 0;
			}
		} );
	};
	/**
	 * @function external:"jQuery.fn".tribe_has_attr
	 * @desc Check if a given element has an attribute.
	 * @example if($('#myLink').tribe_has_attr('data-cats')) {true} else {false}
	 */
	$.fn.tribe_has_attr = function( name ) {
		return this.attr( name ) !== undefined;
	};
	/**
	 * @function external:"jQuery.fn".tribe_spin
	 * @desc Shows loading spinners for events ajax interactions.
	 * @example $('#myElement').tribe_spin();
	 */
	$.fn.tribe_spin = function() {
		var $loadingImg = $( '.tribe-events-ajax-loading:first' ).clone().addClass( 'tribe-events-active-spinner' );
		$loadingImg.prependTo( document.getElementById( 'tribe-events-content' ) );
		$( this ).addClass( 'tribe-events-loading' ).css( 'opacity', .25 )
	};

	if ( "undefined" !== typeof $.fn.datepicker && "undefined" !== typeof $.fn.datepicker.noConflict ) {
		var datepicker = $.fn.datepicker.noConflict();
		$.fn.bootstrapDatepicker = datepicker;
	}

	if ( "undefined" !== typeof tribe_bootstrap_datepicker_strings && tribe_bootstrap_datepicker_strings.dates != null ) {
		$.fn.bootstrapDatepicker.dates['en'] = tribe_bootstrap_datepicker_strings.dates;
	}

})( jQuery );

(function( window, document, $, dbug, config, undefined ) {
	/**
	 * @namespace tribe_ev.fn
	 * @desc tribe_ev.fn namespace stores all the custom functions used throughout the core events plugin.
	 */
	tribe_ev.fn = {
		/**
		 * @function tribe_ev.fn.current_date
		 * @desc tribe_ev.fn.current_date simply gets the current date in javascript and formats it to yyyy-mm-dd for use were needed.
		 * @example var right_now = tribe_ev.fn.current_date();
		 */
		current_date          : function() {

			var today = new Date(),
				dd = today.getDate(),
				mm = today.getMonth() + 1,
				yyyy = today.getFullYear();

			if ( dd < 10 ) {
				dd = '0' + dd
			}
			if ( mm < 10 ) {
				mm = '0' + mm
			}
			return yyyy + '-' + mm + '-' + dd;
		},
		/**
		 * @function tribe_ev.fn.disable_inputs
		 * @desc tribe_ev.fn.disable_inputs disables all inputs of a specified type inside a parent element, and also disables select2 selects if it discovers any.
		 * @param {String} parent The top level element you would like all child inputs of the specified type to be disabled for.
		 * @param {String} type A single or comma separated string of the type of inputs you would like disabled.
		 * @example <caption>Disable all inputs and selects for #myForm.</caption>
		 * tribe_ev.fn.disable_inputs( '#myForm', 'input, select' );
		 */
		disable_inputs        : function( parent, type ) {
			$( parent ).find( type ).prop( 'disabled', true );
			if ( $( parent ).find( '.select2-container' ).length ) {
				$( parent ).find( '.select2-container' ).each( function() {
					var s2_id = $( this ).attr( 'id' );
					var $this = $( '#' + s2_id );
					$this.select2( "disable" );
				} );
			}
		},
		/**
		 * @function tribe_ev.fn.disable_empty
		 * @desc tribe_ev.fn.disable_empty disables all empty inputs of a specified type inside a parent element.
		 * @param {String} parent The top level element you would like all empty child inputs of the specified type to be disabled for.
		 * @param {String} type A single or comma separated string of the type of empty inputs you would like disabled.
		 * @example <caption>Disable all empty inputs and selects for #myForm.</caption>
		 * tribe_ev.fn.disable_empty( '#myForm', 'input, select' );
		 */
		disable_empty         : function( parent, type ) {
			$( parent ).find( type ).each( function() {
				if ( $( this ).val() === '' ) {
					$( this ).prop( 'disabled', true );
				}
			} );
		},
		/**
		 * @function tribe_ev.fn.enable_inputs
		 * @desc tribe_ev.fn.enable_inputs enables all inputs of a specified type inside a parent element, and also enables select2 selects if it discovers any.
		 * @param {String} parent The top level element you would like all child inputs of the specified type to be disabled for.
		 * @param {String} type A single or comma separated string of the type of inputs you would like enabled.
		 * @example <caption>Enable all inputs and selects for #myForm.</caption>
		 * tribe_ev.fn.enable_inputs( '#myForm', 'input, select' );
		 */
		enable_inputs         : function( parent, type ) {
			$( parent ).find( type ).prop( 'disabled', false );
			if ( $( parent ).find( '.select2-container' ).length ) {
				$( parent ).find( '.select2-container' ).each( function() {
					var s2_id = $( this ).attr( 'id' );
					var $this = $( '#' + s2_id );
					$this.select2( "enable" );
				} );
			}
		},
		/**
		 * @function tribe_ev.fn.execute_resize
		 * @desc tribe_ev.fn.execute_resize groups together functions that should execute at the end of the window resize event.
		 */
		execute_resize        : function() {

			var prev_width = tribe_ev.data.v_width;
			tribe_ev.fn.update_viewport_variables();
			if ( prev_width !== tribe_ev.data.v_width ) {
				tribe_ev.fn.mobile_class();

				/**
				 * DEPRECATED: tribe_ev_resizeComplete has been deprecated in 4.0. Use resize-complete.tribe instead
				 */
				$( tribe_ev.events ).trigger( 'tribe_ev_resizeComplete' );
				$( tribe_ev.events ).trigger( 'resize-complete.tribe' );
			}

		},
		/**
		 * @function tribe_ev.fn.get_base_url
		 * @desc tribe_ev.fn.get_base_url can be used on any events view to get the base_url for that view, even when on a category subset for that view.
		 * @returns {String} Either an empty string or base url if data-baseurl is found on #tribe-events-header.
		 * @example var base_url = tribe_ev.fn.get_base_url();
		 */
		get_base_url          : function() {
			var base_url      = '';
			var $event_header = $( document.getElementById( 'tribe-events-header' ) );
			var $canonical    = $( 'link[rel="canonical"]' );

			if ( $canonical.length ) {
				// use the canonical URL if it is available (it should be)
				base_url = $canonical.attr( 'href' );
			} else if ( $event_header.length ) {
				// failover to the baseurl of the event header
				base_url = $event_header.data( 'baseurl' );
			} else {
				// use the current URL as a last ditch effort
				base_url = window.location.origin + window.location.path;
			}

			return base_url;
		},
		/**
		 * @function tribe_ev.fn.update_base_url
		 * @desc tribe_ev.fn.update_base_url can be used on any events view to update base_url for that view
		 */
		update_base_url: function( url ) {
			var $event_header = $( document.getElementById( 'tribe-events-header' ) );
			var $canonical    = $( 'link[rel="canonical"]' );

			if ( $canonical.length ) {
				// use the canonical URL if it is available (it should be)
				$canonical.attr( 'href', url );
			} else if ( $event_header.length ) {
				// failover to the baseurl of the event header
				$event_header.data( 'baseurl', url ).attr( 'data-baseurl', url );
			}
		},
		/**
		 * @function tribe_ev.fn.get_category
		 * @desc tribe_ev.fn.get_category can be used on any events view to get the category for that view.
		 * @returns {String} Either an empty string or category slug if data-category is found on #tribe-events.
		 * @example var cat = tribe_ev.fn.get_category();
		 */
		get_category          : function() {
			if ( tribe_ev.fn.is_category() ) {
				return $( document.getElementById( 'tribe-events' ) ).data( 'category' );
			}
			else {
				return '';
			}
		},
		/**
		 * @function tribe_ev.fn.get_day
		 * @desc tribe_ev.fn.get_day can be used to check the event bar for a day value that was set by the user when using the datepicker.
		 * @returns {String|Number} Either an empty string or day number if #tribe-bar-date-day has a val() set by user interaction.
		 * @example var day = tribe_ev.fn.get_day();
		 */
		get_day               : function() {
			var dp_day = '';
			if ( $( document.getElementById( 'tribe-bar-date' ) ).length ) {
				dp_day = $( document.getElementById( 'tribe-bar-date-day' ) ).val();
			}
			// @ifdef DEBUG
			dbug && debug.info( 'TEC Debug: tribe_ev.fn.get_day returned this date: "' + dp_day + '".' );
			// @endif
			return dp_day;
		},
		/**
		 * @function tribe_ev.fn.get_params
		 * @desc tribe_ev.fn.get_params returns the params of the current document.url.
		 * @returns {String} any url params sans "?".
		 * @example var params = tribe_ev.fn.get_params();
		 */
		get_params            : function() {
			return location.search.substr( 1 );
		},
		/**
		 * @function tribe_ev.fn.get_url_param
		 * @desc tribe_ev.fn.get_url_param returns the value of a passed param name if set.
		 * @param {String} name The name of the url param value desired.
		 * @returns {String|Null} the value of a parameter if set or null if not.
		 * @example var param = tribe_ev.fn.get_url_param('category');
		 */
		get_url_param         : function( name ) {
			return decodeURIComponent( (new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec( location.search ) || [, ""])[1].replace( /\+/g, '%20' ) ) || null;
		},
		/**
		 * @function tribe_ev.fn.in_params
		 * @desc tribe_ev.fn.in_params returns the value of a passed param name if set.
		 * @param {String} params The parameter string you would like to search for a term.
		 * @param {String} term The name of the url param value you are checking for.
		 * @returns {Number} Returns index if term is present in params, or -1 if not found.
		 * @example
		 * if (tribe_ev.fn.in_params(tribe_ev.data.params, "tabby") >= 0)){
         *     // tabby is in params
         * } else {
         *     // tabby is not in params
         * }
		 */
		in_params             : function( params, term ) {
			return params.toLowerCase().indexOf( term );
		},
		/**
		 * @function tribe_ev.fn.invalid_date
		 * @desc tribe_ev.fn.invalid_date tests a date object and confirms if it is actually valid by forcing parseDate on it.
		 * @returns {Boolean} Returns true if date is invalid, false if valid.
		 * @example  if(tf.invalid_date(ts.date)) return;
		 */
		invalid_date          : function( date ) {

			date = new Date( date );
			return isNaN( date );

		},
		invalid_date_in_params: function( params ) {

			if ( params.hasOwnProperty( 'tribe-bar-date' ) ) {
				var date = new Date( params['tribe-bar-date'] );
				return isNaN( date );
			}
			return false;

		},
		/**
		 * @function tribe_ev.fn.is_category
		 * @desc tribe_ev.fn.is_category test for whether the view is a category subpage in the pretty permalink system.
		 * @returns {Boolean} Returns true if category page, false if not.
		 * @example if (tribe_ev.fn.is_category()){ true } else { false }
		 */
		is_category           : function() {
			var $tribe_events = $( document.getElementById( 'tribe-events' ) );
			return ($tribe_events.length && $tribe_events.tribe_has_attr( 'data-category' ) && $tribe_events.data( 'category' ) !== '') ? true : false;
		},

		/**
		 * Indicates if the current view is a featured events archive.
		 *
		 * @return {boolean}
		 */
		is_featured: function() {
			return $( document.getElementById( 'tribe-events' ) ).data( 'featured' ) == '1';
		},

		/**
		 * @function tribe_ev.fn.mobile_class
		 * @desc tribe_ev.fn.mobile_class adds or removes a mobile class from the body element based on the mobile breakpoint.
		 */
		mobile_class          : function() {
			var $body = $( 'body' );

			if ( tribe_ev.data.v_width <= tribe_ev.data.mobile_break ) {
				$body.addClass( 'tribe-mobile' );
			} else {
				$body.removeClass( 'tribe-mobile' );
			}

		},

		/**
		 * @function tribe_ev.fn.mobile_view_redirect
		 * @desc tribe_ev.fn.mobile_view_redirect Will redirect mobile users to the correct default view, this will only work if used after events-bar is loaded
		 */
		maybe_default_view_change   : function() {
			// if we don't these we can't do anything
			if (
				// if we already redirected do not do it again to enable user to change views
				tribe_ev.data.redirected_view ||

				// There is no default View set
				! tribe_ev.data.default_view ||

				// There is no default mobile View set
				! tribe_ev.data.default_mobile_view ||

				// The mobile and normal default views are the same
				tribe_ev.data.default_view == tribe_ev.data.default_mobile_view ||

				// There is no View set
				! tribe_ev.state.view ||

				// We are on the default mobile view
				tribe_ev.data.default_mobile_view == tribe_ev.state.view
			) {
				return false;
			}

			var $body = $( 'body' );

			// Not a Mobile Call
			if ( ! $body.hasClass( 'tribe-mobile' ) ) {
				return false;
			}

			var $views             = $( '.tribe-bar-views-option' );
			var view_class_filter  = '.tribe-bar-views-option-' + tribe_ev.data.default_mobile_view;
			var $default_view_link = $views.filter( view_class_filter );
			$( view_class_filter ).data( 'redirected', true );

			// Actually do the Changing View
			$default_view_link.trigger( 'click' );
		},

		/**
		 * @function tribe_ev.fn.parse_string
		 * @desc tribe_ev.fn.parse_string converts a string to an object.
		 * @param {String} string The string to be converted.
		 * @returns {Object} Returns mapped object.
		 * @example if (tribe_ev.fn.is_category()){ true } else { false }
		 */
		parse_string          : function( string ) {
			var map = {};
			string.replace( /([^&=]+)=?([^&]*)(?:&+|$)/g, function( match, key, value ) {
				(map[key] = map[key] || []).push( value );
			} );
			// @ifdef DEBUG
			dbug && debug.info( 'TEC Debug: tribe_ev.fn.parse_string returned this map:', map );
			// @endif
			return map;
		},
		/**
		 * @function tribe_ev.fn.pre_ajax
		 * @desc tribe_ev.fn.pre_ajax allows for functions to be executed before ajax begins.
		 * @param {Function} callback The callback function, expected to be an ajax function for one of our views.
		 */
		pre_ajax              : function( callback ) {
			if ( callback && typeof( callback ) === "function" ) {
				callback();
			}
		},
		/**
		 * @function tribe_ev.fn.scroll_to
		 * @desc tribe_ev.fn.scroll_to animates the body to the target with the passed duration and offset.
		 * @param {String} target the id of the target to scroll the body to.
		 * @param {Number} offset the vertical offset from the target..
		 * @param {Number} duration the duration of the scroll animation.
		 */
		scroll_to             : function( target, offset, duration ) {
			$( 'html, body' ).stop().animate( {scrollTop: $( target ).offset().top - offset}, {duration: duration} );
		},
		/**
		 * @function tribe_ev.fn.serialize
		 * @desc tribe_ev.fn.serialize serializes the passed input types. Enable/disable stack in place to protect inputs during process, especially for live ajax mode.
		 * @param {String} form The form element.
		 * @param {String} type The input types to be serialized.
		 * @returns {String} Returns a param string of populated inputs.
		 * @example tribe_ev.fn.serialize('#myForm', 'input, select');
		 */
		serialize             : function( form, type ) {
			tribe_ev.fn.enable_inputs( form, type );
			tribe_ev.fn.disable_empty( form, type );
			var params = $( form ).serialize();
			tribe_ev.fn.disable_inputs( form, type );
			// @ifdef DEBUG
			dbug && params && debug.info( 'TEC Debug: tribe_ev.fn.serialize returned these params: "' + params );
			// @endif
			return params;
		},
		/**
		 * @function tribe_ev.fn.set_form
		 * @desc tribe_ev.fn.set_form takes a param string and sets a forms inputs to the values received. Extended in the Query Filters plugin.
		 * @param {String} params The params to be looped over and applied to the named input. Needed for back button browser history when forms are outside of the ajax area.
		 * @example <caption>Set all inputs in a form(s) to the values in a param string retrieved from the history object on popstate.</caption>
		 * $(window).on('popstate', function (event) {
		 *		var state = event.originalEvent.state;
		 *		if (state) {
		 *		 	tribe_ev.state.params = state.tribe_params;
		 *		 	// do something magical to restore query state like ajax, then set the forms to match the history state like so:
		 *			tribe_ev.fn.set_form(tribe_ev.state.params);
		 *		}
		 *	});
		 */
		set_form              : function( params ) {
			var $body = $( 'body' ),
				$tribe_bar = $( document.getElementById( 'tribe-bar-form' ) );

			$body.addClass( 'tribe-reset-on' );

			if ( $tribe_bar.length ) {
				$tribe_bar.tribe_clear_form();
			}

			params = tribe_ev.fn.parse_string( params );

			$.each( params, function( key, value ) {
				if ( key !== 'action' ) {
					var name = decodeURIComponent( key ),
						$target = '';
					if ( value.length === 1 ) {
						if ( Array.isArray( value ) ) {
						  value = value[0];
						}
						value = decodeURIComponent( value.replace( /\+/g, '%20' ) );
						if ( $( '[name="' + name + '"]' ).is( 'input[type="text"], input[type="hidden"]' ) ) {
							$( '[name="' + name + '"]' ).val( value );
						}
						else if ( $( '[name="' + name + '"][value="' + value + '"]' ).is( ':checkbox, :radio' ) ) {
							$( '[name="' + name + '"][value="' + value + '"]' ).prop( "checked", true );
						}
						else if ( $( '[name="' + name + '"]' ).is( 'select' ) ) {
							$( 'select[name="' + name + '"] option[value="' + value + '"]' ).attr( 'selected', true );
						}
					}
					else {
						for ( var i = 0; i < value.length; i++ ) {
							$target = $( '[name="' + name + '"][value="' + value[i] + '"]' );
							if ( $target.is( ':checkbox, :radio' ) ) {
								$target.prop( "checked", true );
							}
							else {
								$( 'select[name="' + name + '"] option[value="' + value[i] + '"]' ).attr( 'selected', true );
							}
						}
					}
				}
			} );

			$body.removeClass( 'tribe-reset-on' );
			// @ifdef DEBUG
			dbug && debug.info( 'TEC Debug: tribe_ev.fn.set_form fired these params: "' + params );
			// @endif
		},
		/**
		 * @function tribe_ev.fn.setup_ajax_timer
		 * @desc tribe_ev.fn.setup_ajax_timer is a simple function to add a delay to the execution of a passed callback function, in our case ajax hence the name.
		 * @param {Function} callback Used to delay ajax execution when in live ajax mode.
		 * @example <caption>Run some crazy ajax.</caption>
		 * tribe_ev.fn.setup_ajax_timer( function() {
		 *		run_some_crazy_ajax();
		 * });
		 */
		setup_ajax_timer      : function( callback ) {
			var timer = 500;
			clearTimeout( tribe_ev.state.ajax_timer );
			if ( !tribe_ev.tests.reset_on() ) {
				tribe_ev.state.ajax_timer = setTimeout( function() {
					callback();
				}, timer );
				// @ifdef DEBUG
				dbug && debug.info( 'TEC Debug: tribe_ev.fn.setup_ajax_timer fired with a timeout of "' + timer + '" ms' );
				// @endif
			}
		},
		/**
		 * @function tribe_ev.fn.snap
		 * @desc tribe_ev.fn.snap uses jquery to bind a handler to a trigger_parent which uses bubbling of a click event from the trigger to position the document to the passed container. Has an offset of -120 px to get some breathing room.
		 * @param {String} container the jquery selector to send the document to.
		 * @param {String} trigger_parent the persistent element to bind the handler to.
		 * @param {String} trigger the trigger for the click event
		 * @example <caption>"Snap" the document 120 px above the tribe bar when a footer nav link is clicked.</caption>
		 *        tribe_ev.fn.snap('#tribe-bar-form', '#tribe-events', '#tribe-events-footer a');
		 */
		snap                  : function( container, trigger_parent, trigger ) {
			$( trigger_parent ).on( 'click', trigger, function( e ) {
				e.preventDefault();
				$( 'html, body' ).animate( {scrollTop: $( container ).offset().top - 120}, {duration: 0} );
			} );
		},

		/**
		 * @function tribe_ev.fn.tooltips
		 * @desc tribe_ev.fn.tooltips binds the event handler that covers all tooltip hover events for the various views. Extended in tribe-events-pro.js for the pro views. One of the reasons both these files must load FIRST in the tribe events js stack at all times.
		 * @example <caption>It's really not that hard... Get yourself inside a doc ready and...</caption>
		 *        tribe_ev.fn.tooltips();
		 */
		tooltips                 : function() {
			var $container    = $( document.getElementById( 'tribe-events' ) );
			var $body         = $( 'body' );
			var is_shortcode  = $container.hasClass( 'tribe-events-shortcode' );
			var is_month_view = $container.hasClass( 'view-month' ) || $body.hasClass( 'events-gridview' );
			var is_week_view  = $container.hasClass( 'view-week' ) || $body.hasClass( 'tribe-events-week' );
			var is_photo_view = $container.hasClass( 'view-photo' ) || $body.hasClass( 'tribe-events-photo' );
			var is_day_view   = $container.hasClass( 'view-day' ) || $body.hasClass( 'tribe-events-day' );
			var is_list_view  = $container.hasClass( 'view-list' ) || $body.hasClass( 'events-list' );
			var is_map_view   = $container.hasClass( 'view-map' ) || $body.hasClass( 'tribe-events-map' );
			var is_single     = $body.hasClass( 'single-tribe_events' );

			$container.on( 'mouseenter focusin', 'div[id*="tribe-events-event-"], div.event-is-recurring', function() {
				var bottomPad = 0;
				var $this     = $( this );
				var $tip;

				if ( is_month_view ) { // Cal View Tooltips
					bottomPad = $this.find( 'a' ).outerHeight() + 16;
				} else if ( is_single || is_day_view || is_list_view ) { // Single/List View Recurring Tooltips
					bottomPad = $this.outerHeight() + 12;
				} else if ( is_photo_view ) { // Photo View
					bottomPad = $this.outerHeight() + 10;
				}

				// Widget Tooltips
				if ( $this.parents( '.tribe-events-calendar-widget' ).length ) {
					bottomPad = $this.outerHeight() - 6;
				}

				if ( ! is_week_view || is_shortcode ) {
					if ( is_month_view || is_shortcode ) {
						$tip = $this.find( '.tribe-events-tooltip' );

						if ( ! $tip.length ) {
							var data = $this.data( 'tribejson' );

							if ( typeof data == 'string' ) {
								data = $.parseJSON( data );
							}

							var tooltip_template = $this.hasClass( 'tribe-event-featured' )
									? 'tribe_tmpl_tooltip_featured'
									: 'tribe_tmpl_tooltip';

							$this.append( tribe_tmpl( tooltip_template, data ) );

							$tip = $this.find( '.tribe-events-tooltip' );
						}

						// Look for the distance between top of tooltip and top of visible viewport.
						var dist_to_top = $this.offset().top - ( $( window ).scrollTop() + 50 ); // The +50 is some padding for a more aesthetically-pleasing view.
						var tip_height  = $tip.outerHeight();

						// If true, tooltip is near top of viewport, so tweak some values to keep the tooltip fully in-view.
						if ( dist_to_top < tip_height ) {
							bottomPad = -tip_height;
							$tip.addClass( 'tribe-events-tooltip-flipdown' );
						}

						$tip.css( 'bottom', bottomPad ).stop( true, false ).show();
					} else {
						$this.find( '.tribe-events-tooltip' ).css( 'bottom', bottomPad ).stop( true, false ).show();
					}
				}

			} ).on( 'mouseleave focusout', 'div[id*="tribe-events-event-"], div[id*="tribe-events-daynum-"]:has(a), div.event-is-recurring', function() {

				var $tip = $( this ).find( '.tribe-events-tooltip' );

				$tip.stop( true, false ).fadeOut( 500, function() {
					$tip.removeClass( 'tribe-events-tooltip-flipdown' );
				} );

			} );
		},
		/**
		 * @function tribe_ev.fn.update_picker
		 * @desc tribe_ev.fn.update_picker Updates the custom bootstrapDatepicker if it and the event bar is present, or only the event bar input if it is present.
		 * @param {String} date The date string to update picker or input with.
		 * @example <caption>Bind a handler that updates the datepicker if present with the date, in this case harvested from a data attribute on the link.</caption>
		 * $('#tribe-events').on('click', '.tribe-events-nav-previous a', function (e) {
		 *     e.preventDefault();
		 *     var $this = $(this);
		 *     tribe_ev.state.date = $this.attr("data-day");
		 *     tribe_ev.fn.update_picker(tribe_ev.state.date);
		 * });
		 */
		update_picker            : function( date ) {
			var $bar_date = $( "#tribe-bar-date" );
			if ( $().bootstrapDatepicker && $bar_date.length ) {
				// for ie8 and under
				tribe_ev.state.updating_picker = true;
				if ( window.attachEvent && !window.addEventListener ) {
					$bar_date.bootstrapDatepicker( "remove" );
					$bar_date.val( '' );
					$bar_date.bootstrapDatepicker( tribe_ev.data.datepicker_opts );
				}
				$bar_date.bootstrapDatepicker( "setDate", date );
				tribe_ev.state.updating_picker = false;
				// @ifdef DEBUG
				dbug && debug.info( 'TEC Debug: tribe_ev.fn.update_picker sent "' + date + '" to the boostrapDatepicker' );
				// @endif
			}
			else if ( $bar_date.length ) {
				$bar_date.val( date );
				// @ifdef DEBUG
				dbug && debug.warn( 'TEC Debug: tribe_ev.fn.update_picker sent "' + date + '" to ' + $bar_date );
				// @endif
			}
			else {
				// @ifdef DEBUG
				dbug && debug.warn( 'TEC Debug: tribe_ev.fn.update_picker couldnt send "' + date + '" to any object.' );
				// @endif
			}
		},
		/**
		 * @function tribe_ev.fn.update_viewport_variables
		 * @desc tribe_ev.fn.update_viewport_variables surprisingly updates the viewport variables stored in the tribe_ev.data object.
		 */
		update_viewport_variables: function() {
			tribe_ev.data.v_height = $( window ).height();
			tribe_ev.data.v_width = $( window ).width();
		},
		/**
		 * @function tribe_ev.fn.url_path
		 * @desc tribe_ev.fn.url_path strips query vars from a url passed to it using js split on the ? character.
		 * @param {String} url The url to remove all vars from.
		 * @returns {String} Returns a url devoid of any query vars.
		 * @example <caption>Get the query var free version of an href attribute.</caption>
		 * $('#tribe-events').on('click', '.tribe-events-nav-next', function (e) {
		 *		e.preventDefault();
		 *		tribe_ev.data.cur_url = tribe_ev.fn.url_path($(this).attr('href'));
		 * });
		 */
		url_path                 : function( url ) {
			return url.split( "?" )[0];
		},
		/**
		 * @function tribe_ev.fn.equal_height
		 * @desc tribe_ev.fn.equal_height gets the tallest height of a set of elements and sets them to the same height.
		 * @param {Object} $group The group of elements to get and set tallest height from.
		 * @example <caption>Get and set the height to the tallest of a set of elements.</caption>
		 * $('#tribe-events .columns').tribe_ev.fn.equal_height();
		 */
		equal_height             : function( $group ) {
			var tallest = 0;
			$group.css( 'height', 'auto' );
			$group.each( function() {
				var this_height = $( this ).outerHeight();
				if ( this_height > tallest ) {
					tallest = this_height;
				}
			} );
			setTimeout( function() {
				$group.css( 'height', tallest );
			}, 100 );
		}

	};

	/**
	 * @namespace tribe_ev
	 * @desc tribe_ev.tests namespace stores all the custom tests used throughout the core events plugin.
	 */

	tribe_ev.tests = {
		/**
		 * @function tribe_ev.tests.live_ajax
		 * @desc tribe_ev.tests.live_ajax tests if live ajax is enabled in the events settings tab by checking the data attribute data-live_ajax on #tribe-events in the front end.
		 * @example <caption>Very easy test to use. In a doc ready:</caption>
		 * if (tribe_ev.tests.live_ajax()) {
		 *		// live ajax is on
		 * ) else {
		 *     // live ajax is off
		 * }
		 */
		live_ajax     : function() {
			var $tribe_events = $( document.getElementById( 'tribe-events' ) );
			return ($tribe_events.length && $tribe_events.tribe_has_attr( 'data-live_ajax' ) && $tribe_events.data( 'live_ajax' ) == '1') ? true : false;
		},
		/**
		 * @function tribe_ev.tests.map_view
		 * @desc tribe_ev.tests.map_view test if we are on map view.
		 * @example <caption>Test if we are on map view</caption>
		 * if (tribe_ev.tests.map_view()) {
		 *		// we are on map view
		 * )
		 */
		map_view      : function() {
			return typeof GeoLoc !== 'undefined' && GeoLoc.map_view;
		},
		/**
		 * @function tribe_ev.tests.no_bar
		 * @desc tribe_ev.tests.has_bar tests if the events bar is enabled on the front end.
		 * @example <caption>Very easy test to use. In a doc ready:</caption>
		 * if (tribe_ev.tests.no_bar()) {
		 *		// no event bar
		 * ) else {
		 *     // has event bar
		 * }
		 */
		no_bar        : function() {
			return $( 'body' ).is( '.tribe-bar-is-disabled' );
		},
		/**
		 * @type Boolean tribe_ev.tests.pushstate
		 * @desc tribe_ev.tests.pushstate checks if the history object is available safely and returns true or false.
		 * @example <caption>Execute an if else on the presence of pushstate</caption>
		 * if (tribe_ev.tests.pushstate) {
		 *		// pushstate is available
		 * ) else {
		 *     // pushstate is not available
		 * }
		 */
		pushstate     : !!(window.history && history.pushState),
		/**
		 * @function tribe_ev.tests.reset_on
		 * @desc tribe_ev.tests.reset_on tests if any other function is currently disabling a tribe ajax function.
		 * @example <caption>In another handler that will be triggering a tribe ajax function:</caption>
		 * if (!tribe_ev.tests.reset_on()) {
		 *		// reset is not occuring so lets run some other ajax
		 * )
		 */
		reset_on      : function() {
			return $( 'body' ).is( '.tribe-reset-on' );
		},
		/**
		 * @function tribe_ev.tests.starting_delim
		 * @desc tribe_ev.tests.starting_delim is used by events url forming functions to determine if "?" is already present. It then sets the delimiter for the next part of the url concatenation to "?" if not found and "&" if it is.
		 * @example <caption>Test and set delimiter during url string concatenation.</caption>
		 *        tribe_ev.state.cur_url += tribe_ev.tests.starting_delim + tribe_ev.state.url_params;
		 */
		starting_delim: function() {
			return tribe_ev.state.cur_url.indexOf( '?' ) != -1 ? '&' : '?';
		},
		/**
		 * @type Boolean tribe_ev.tests.webkit
		 * @desc tribe_ev.tests.webkit checks if webkit is the browser in use and returns true or false.
		 * @example <caption>Execute an if else on the presence of pushstate</caption>
		 * if (tribe_ev.tests.webkit) {
		 *		// is webkit
		 * ) else {
		 *     // is not webkit
		 * }
		 */
		webkit        : 'WebkitAppearance' in document.documentElement.style
	};

	/**
	 * @namespace tribe_ev
	 * @desc tribe_ev.data stores information that is sometimes used internally and also contains useful data for themers.
	 */

	tribe_ev.data = {
		ajax_response       : {},
		base_url            : '',
		cur_url             : tribe_ev.fn.url_path( document.URL ),
		cur_date            : tribe_ev.fn.current_date(),
		datepicker_formats: {
			'main': [
				'yyyy-mm-dd',
				'm/d/yyyy',
				'mm/dd/yyyy',
				'd/m/yyyy',
				'dd/mm/yyyy',
				'm-d-yyyy',
				'mm-dd-yyyy',
				'd-m-yyyy',
				'dd-mm-yyyy',
				'yyyy.mm.dd',
				'mm.dd.yyyy',
				'dd.mm.yyyy'
			],
			'month': [
				'yyyy-mm',
				'm/yyyy',
				'mm/yyyy',
				'm/yyyy',
				'mm/yyyy',
				'm-yyyy',
				'mm-yyyy',
				'm-yyyy',
				'mm-yyyy',
				'yyyy.mm',
				'mm.yyyy',
				'mm.yyyy'
			]
		},
		datepicker_opts     : {},
		default_permalinks  : (!config.permalink_settings.length),
		initial_url         : tribe_ev.fn.url_path( document.URL ),
		mobile_break        : 768,
		default_mobile_view : null,
		redirected_view     : null,
		default_view        : null,
		params              : tribe_ev.fn.get_params(),
		v_height            : 0,
		v_width             : 0
	};

	/**
	 * @namespace tribe_ev
	 * @desc tribe_ev.events is an empty object used to attach all tribe custom events to.
	 */

	tribe_ev.events = {};

	/**
	 * @namespace tribe_ev
	 * @desc tribe_ev.state is mainly used in events ajax operations, though a few variables are set on doc ready.
	 */

	tribe_ev.state = {
		ajax_running     : false,
		ajax_timer       : 0,
		ajax_trigger     : '',
		category         : '',
		date             : '',
		datepicker_format: '0',
		do_string        : false,
		featured         : false,
		filters          : false,
		filter_cats      : false,
		initial_load     : true,
		mdate            : '',
		paged            : 1,
		page_title       : '',
		params           : {},
		popping          : false,
		pushstate        : true,
		pushcount        : 0,
		recurrence       : false,
		updating_picker  : false,
		url_params       : {},
		view             : '',
		view_target      : ''
	};

})( window, document, jQuery, tribe_debug, tribe_js_config );

(function( window, document, $, td, te, tf, ts, tt, dbug ) {

	/*
	 * $    = jQuery
	 * td   = tribe_ev.data
	 * te   = tribe_ev.events
	 * tf   = tribe_ev.fn
	 * ts   = tribe_ev.state
	 * tt   = tribe_ev.tests
	 * dbug = tribe_debug
	 */


	$( document ).ready( function() {

		// @ifdef DEBUG
		dbug && debug.info( 'TEC Debug: Tribe Events JS init, Init Timer started from tribe-events.js.' );
		// @endif

		tf.update_viewport_variables();

		var $body                = $( 'body' );
		var $tribe_events        = $( document.getElementById( 'tribe-events' ) );
		var $tribe_content       = $( document.getElementById( 'tribe-events-content' ) );
		var $tribe_events_header = $( document.getElementById( 'tribe-events-header' ) );
		var resize_timer;

		$tribe_events.removeClass( 'tribe-no-js' );

		ts.category   = tf.get_category();
		td.base_url   = tf.get_base_url();
		ts.page_title = document.title;

		var tribe_display = tf.get_url_param( 'tribe_event_display' );

		if ( tribe_display ) {
			ts.view = tribe_display;
		}
		else if ( $tribe_events_header.length && $tribe_events_header.tribe_has_attr( 'data-view' ) ) {
			ts.view = $tribe_events_header.data( 'view' );
		}

		if ( $tribe_events.tribe_has_attr( 'data-datepicker_format' ) && $tribe_events.attr( 'data-datepicker_format' ).length >= 1 ) {
			ts.datepicker_format = $tribe_events.attr( 'data-datepicker_format' );
		}

		// @ifdef DEBUG
		ts.view && dbug && debug.time( 'Tribe JS Init Timer' );
		// @endif

		$( te ).on( 'tribe_ev_collectParams', function() {
			// maybe add a baseurl to the Ajax request if we are attempting to navigate events. This helps with
			// our shortcode pagination
			if (
				'undefined' === typeof tribe_ev.state
				|| 'undefined' === typeof tribe_ev.state.params
			) {
				return;
			}

			if (
				-1 === tribe_ev.fn.in_params( tribe_ev.state.params, 'eventdate' )
				&& -1 === tribe_ev.fn.in_params( tribe_ev.state.params, 'tribe_event_display' )
			) {
				return;
			}

			// We only want to manipulate shortcode params. Bail otherwise
			if ( ! $( document.getElementById( 'tribe-events' ) ).is( '.tribe-events-shortcode' ) ) {
				return;
			}

			var $header = $( document.getElementById( 'tribe-events-header' ) );
			var $canonical = $( 'link[rel="canonical"]' );
			var url = null;

			if ( $canonical.length ) {
				// use the canonical URL if it is available (it should be)
				url = $canonical.attr( 'href' );
			} else if ( $header.length ) {
				// failover to the baseurl of the event header
				url = $header.data( 'baseurl' );
			} else {
				// use the current URL as a last ditch effort
				url = window.location.origin + window.location.path;
			}

			tribe_ev.state.params += '&baseurl=' + url;

			if ( $header.length ) {
				var cat = /tribe_events_cat=([^&]*)/ig.exec( $header.data( 'baseurl' ) );

				if ( cat && 'undefined' !== typeof cat[1] ) {
					cat = cat[1];
				} else {
					cat = null;
				}

				if ( cat ) {
					var cat_regexp = new RegExp( 'tribe_event_category=' + cat );

					if ( ! tribe_ev.state.params.match( cat_regexp ) ) {
						tribe_ev.state.params += '&tribe_event_category=' + cat;
					}

					if ( 'string' === typeof tribe_ev.state.url_params && ! tribe_ev.state.url_params.match( cat_regexp ) ) {
						tribe_ev.state.url_params += '&tribe_event_category=' + cat;
					}
				}
			}

			if ( 'month' === ts.view && ! $( '#tribe-events-bar' ).length ) {
				if ( ! td.default_permalinks ) {
					ts.url_params = 'tribe-bar-date=' + tribeDateFormat( ts.mdate, "tribeMonthQuery" );
				} else {
					tribe_ev.state.url_params += 'tribe-bar-date=' + tribeDateFormat( ts.mdate, "tribeMonthQuery" );
				}
			}

		} );

		/**
		 *
		 * Themers can override the mobile break with an override in functions.php
		 *
		 *************************************************************************

			add_action( 'tribe_events_mobile_breakpoint', 'mobile_breakpoint' );

			function mobile_breakpoint() {
				return 500;
			}

		 *************************************************************************
		 */

		if ( $tribe_events.length ) {
			var $breakpoint_holder = $tribe_events.tribe_has_attr( 'data-mobilebreak' );

			if ( false === $breakpoint_holder ) {
				$breakpoint_holder = $tribe_events.find( '[data-mobilebreak]' ).eq( 0 );
			} else {
				$breakpoint_holder = $tribe_events;
			}

			if ( $breakpoint_holder.length ) {
				td.mobile_break = parseInt( $breakpoint_holder.data( 'mobilebreak' ), 10 );
			}

			/**
			 * Deal with the Mobile View when we have a breakpoint
			 */
			var $mobile_view_holder = $tribe_events.tribe_has_attr( 'data-default-mobile-view' );

			if ( false === $mobile_view_holder ) {
				$mobile_view_holder = $tribe_events.find( '[data-default-mobile-view]' ).eq( 0 );
			} else {
				$mobile_view_holder = $tribe_events;
			}

			if ( $mobile_view_holder.length ) {
				// Remember, when using jQuery.data and dash separated variables they become CamelCase separated
				td.default_mobile_view = $mobile_view_holder.data( 'defaultMobileView' );
				td.default_view = $mobile_view_holder.data( 'defaultView' );
				td.redirected_view = $mobile_view_holder.data( 'redirectedView' );
			}
		}

		if ( $tribe_events.length && td.mobile_break > 0 ) {
			$body.addClass( 'tribe-is-responsive' );
		}

		/* Let's hide the widget calendar if we find more than one instance */
		$( ".tribe-events-calendar-widget" ).not( ":eq(0)" ).hide();

		tf.tooltips();
		tf.mobile_class();

		//remove border on list view event before month divider
		function list_find_month_last_event() {
			if ( $( '.tribe-events-list' ).length ) {
				$( '.tribe-events-list-separator-month' ).prev( '.vevent' ).addClass( 'tribe-event-end-month' );
			}
		}

		list_find_month_last_event();
		// remove events header subnav pagination if no results
		if ( $( '.tribe-events-list .tribe-events-notices' ).length ) {
			$( '#tribe-events-header .tribe-events-sub-nav' ).empty();
		}

		//remove border on list view event before month divider
		if ( $( '.tribe-events-list' ).length ) {
			$( '.tribe-events-list-separator-month' ).prev( '.vevent' ).addClass( 'tribe-event-end-month' );
		}

		// ajax complete function to remove active spinner
		$( te ).on( 'tribe_ev_ajaxSuccess', function() {
			$( '.tribe-events-active-spinner' ).remove();
			list_find_month_last_event();
		} );

		/**
		 * @function tribe_ical_url
		 * @desc tribe_ical_url This function adds required params to the ical url. Runs on doc ready, and hooks into 'ajax-success.tribe' also.
		 */
		function tribe_ical_url() {
			var should_overwrite = true;

			// If the "force filtered iCal link" option is set, we should not overwrite.
			if ( 'undefined' !== typeof tribe_js_config.force_filtered_ical_link ) {
				should_overwrite = ! tribe_js_config.force_filtered_ical_link;
			}

			if ( should_overwrite ) {
				var url       = document.URL;
				var separator = '?';

				if ( url.indexOf( '?' ) > 0 ) {
					separator = '&';
				}

				var new_link = url + separator + 'ical=1' + '&' + 'tribe_display=' + ts.view;

				$( 'a.tribe-events-ical' ).attr( 'href', new_link );
			}
		}

		$( te ).on( 'tribe_ev_ajaxSuccess', function() {
			tribe_ical_url();
		} );

		tribe_ical_url();

		$( window )
			.resize( function() {

				clearTimeout( resize_timer );
				resize_timer = setTimeout( tf.execute_resize, 200 );

			} );

		// @ifdef DEBUG
		if ( dbug ) {
			debug.groupCollapsed( 'TEC Debug: Browser and events settings information:' );
			debug.log( 'User agent reported as: "' + navigator.userAgent );
			debug.log( 'Live ajax returned its state as: "' + tt.live_ajax() );
			ts.view && debug.log( 'Tribe js detected the view to be: "' + ts.view );
			debug.log( 'Supports pushstate: "' + tt.pushstate );
			debug.groupEnd();
			debug.info( 'TEC Debug: tribe-events.js successfully loaded' );
		}
		// @endif
	} );
})( window, document, jQuery, tribe_ev.data, tribe_ev.events, tribe_ev.fn, tribe_ev.state, tribe_ev.tests, tribe_debug );

// Usability analytics script from Siteimprove

/*<![CDATA[*/
(function() {
 var sz = document.createElement('script'); sz.type = 'text/javascript'; sz.async = true;
 sz.src = '//siteimproveanalytics.com/js/siteanalyze_90779361.js';
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sz, s);
})();
/*]]>*/
//# sourceMappingURL=production.js.map
