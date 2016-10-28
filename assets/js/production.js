!function(e,t,n){"function"==typeof define&&define.amd?define(["jquery"],function(i){return n(i,e,t),i.mobile}):n(e.jQuery,e,t)}(this,document,function(e,t,n,i){!function(e,t,n,i){function o(e){for(;e&&"undefined"!=typeof e.originalEvent;)e=e.originalEvent;return e}function r(t,n){var r,a,s,c,l,u,d,v,h,f=t.type;if(t=e.Event(t),t.type=n,r=t.originalEvent,a=e.event.props,f.search(/^(mouse|click)/)>-1&&(a=P),r)for(d=a.length,c;d;)c=a[--d],t[c]=r[c];if(f.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),f.search(/^touch/)!==-1&&(s=o(r),f=s.touches,l=s.changedTouches,u=f&&f.length?f[0]:l&&l.length?l[0]:i,u))for(v=0,h=D.length;v<h;v++)c=D[v],t[c]=u[c];return t}function a(t){for(var n,i,o={};t;){n=e.data(t,k);for(i in n)n[i]&&(o[i]=o.hasVirtualBinding=!0);t=t.parentNode}return o}function s(t,n){for(var i;t;){if(i=e.data(t,k),i&&(!n||i[n]))return t;t=t.parentNode}return null}function c(){Y=!1}function l(){Y=!0}function u(){R=0,L.length=0,$=!1,l()}function d(){c()}function v(){h(),j=setTimeout(function(){j=0,u()},e.vmouse.resetTimerDuration)}function h(){j&&(clearTimeout(j),j=0)}function f(t,n,i){var o;return(i&&i[t]||!i&&s(n.target,t))&&(o=r(n,t),e(n.target).trigger(o)),o}function p(t){var n,i=e.data(t.target,I);!$&&(!R||R!==i)&&(n=f("v"+t.type,t),n&&(n.isDefaultPrevented()&&t.preventDefault(),n.isPropagationStopped()&&t.stopPropagation(),n.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function m(t){var n,i,r,s=o(t).touches;s&&1===s.length&&(n=t.target,i=a(n),i.hasVirtualBinding&&(R=O++,e.data(n,I,R),h(),d(),A=!1,r=o(t).touches[0],N=r.pageX,F=r.pageY,f("vmouseover",t,i),f("vmousedown",t,i)))}function g(e){Y||(A||f("vmousecancel",e,a(e.target)),A=!0,v())}function b(t){if(!Y){var n=o(t).touches[0],i=A,r=e.vmouse.moveDistanceThreshold,s=a(t.target);A=A||Math.abs(n.pageX-N)>r||Math.abs(n.pageY-F)>r,A&&!i&&f("vmousecancel",t,s),f("vmousemove",t,s),v()}}function y(e){if(!Y){l();var t,n,i=a(e.target);f("vmouseup",e,i),A||(t=f("vclick",e,i),t&&t.isDefaultPrevented()&&(n=o(e).changedTouches[0],L.push({touchID:R,x:n.clientX,y:n.clientY}),$=!0)),f("vmouseout",e,i),A=!1,v()}}function w(t){var n,i=e.data(t,k);if(i)for(n in i)if(i[n])return!0;return!1}function C(){}function T(t){var n=t.substr(1);return{setup:function(){w(this)||e.data(this,k,{});var i=e.data(this,k);i[t]=!0,_[t]=(_[t]||0)+1,1===_[t]&&X.bind(n,p),e(this).bind(n,C),z&&(_.touchstart=(_.touchstart||0)+1,1===_.touchstart&&X.bind("touchstart",m).bind("touchend",y).bind("touchmove",b).bind("scroll",g))},teardown:function(){--_[t],_[t]||X.unbind(n,p),z&&(--_.touchstart,_.touchstart||X.unbind("touchstart",m).unbind("touchmove",b).unbind("touchend",y).unbind("scroll",g));var i=e(this),o=e.data(this,k);o&&(o[t]=!1),i.unbind(n,C),w(this)||i.removeData(k)}}}var E,x,k="virtualMouseBindings",I="virtualTouchID",S="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),D="clientX clientY pageX pageY screenX screenY".split(" "),M=e.event.mouseHooks?e.event.mouseHooks.props:[],P=e.event.props.concat(M),_={},j=0,N=0,F=0,A=!1,L=[],$=!1,Y=!1,z="addEventListener"in n,X=e(n),O=1,R=0;for(e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},x=0;x<S.length;x++)e.event.special[S[x]]=T(S[x]);z&&n.addEventListener("click",function(t){var n,i,o,r,a,s,c=L.length,l=t.target;if(c)for(n=t.clientX,i=t.clientY,E=e.vmouse.clickDistanceThreshold,o=l;o;){for(r=0;r<c;r++)if(a=L[r],s=0,o===l&&Math.abs(a.x-n)<E&&Math.abs(a.y-i)<E||e.data(o,I)===a.touchID)return t.preventDefault(),void t.stopPropagation();o=o.parentNode}},!0)}(e,t,n),function(e){e.mobile={}}(e),function(e,t){var i={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,i),e.extend(e.mobile.support,i)}(e),function(e,t,i){function o(t,n,o,r){var a=o.type;o.type=n,r?e.event.trigger(o,i,t):e.event.dispatch.call(t,o),o.type=a}var r=e(n),a=e.mobile.support.touch,s="touchmove scroll",c=a?"touchstart":"mousedown",l=a?"touchend":"mouseup",u=a?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){n=t,o(r,n?"scrollstart":"scrollstop",e)}var n,i,r=this,a=e(r);a.bind(s,function(o){e.event.special.scrollstart.enabled&&(n||t(o,!0),clearTimeout(i),i=setTimeout(function(){t(o,!1)},50))})},teardown:function(){e(this).unbind(s)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),i=!1;n.bind("vmousedown",function(a){function s(){clearTimeout(u)}function c(){s(),n.unbind("vclick",l).unbind("vmouseup",s),r.unbind("vmousecancel",c)}function l(e){c(),i||d!==e.target?i&&e.preventDefault():o(t,"tap",e)}if(i=!1,a.which&&1!==a.which)return!1;var u,d=a.target;n.bind("vmouseup",s).bind("vclick",l),r.bind("vmousecancel",c),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(i=!0),o(t,"taphold",e.Event("taphold",{target:d}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),r.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,i=t.pageYOffset,o=e.clientX,r=e.clientY;return 0===e.pageY&&Math.floor(r)>Math.floor(e.pageY)||0===e.pageX&&Math.floor(o)>Math.floor(e.pageX)?(o-=n,r-=i):(r<e.pageY-i||o<e.pageX-n)&&(o=e.pageX-n,r=e.pageY-i),{x:o,y:r}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,i=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[i.x,i.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,i=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[i.x,i.y]}},handleSwipe:function(t,n,i,r){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var a=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return o(i,"swipe",e.Event("swipe",{target:r,swipestart:t,swipestop:n}),!0),o(i,a,e.Event(a,{target:r,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,i=e(n),o={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=o,o.start=function(t){if(!e.event.special.swipe.eventInProgress){e.event.special.swipe.eventInProgress=!0;var i,a=e.event.special.swipe.start(t),s=t.target,c=!1;o.move=function(t){a&&!t.isDefaultPrevented()&&(i=e.event.special.swipe.stop(t),c||(c=e.event.special.swipe.handleSwipe(a,i,n,s),c&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(a.coords[0]-i.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())},o.stop=function(){c=!0,e.event.special.swipe.eventInProgress=!1,r.off(u,o.move),o.move=null},r.on(u,o.move).one(l,o.stop)}},i.on(c,o.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,0===t.length&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(c,n.start),n.move&&r.off(u,n.move),n.stop&&r.off(l,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)}),window.Modernizr=function(e,t,n){function i(e){y.cssText=e}function o(e,t){return i(E.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var i in e){var o=e[i];if(!a(o,"-")&&y[o]!==n)return"pfx"!=t||o}return!1}function c(e,t,i){for(var o in e){var a=t[e[o]];if(a!==n)return i===!1?e[o]:r(a,"function")?a.bind(i||t):a}return!1}function l(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?s(o,t):(o=(e+" "+I.join(i+" ")+i).split(" "),c(o,t,n))}function u(){f.input=function(n){for(var i=0,o=n.length;i<o;i++)P[n[i]]=!!(n[i]in w);return P.list&&(P.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),P}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var i,o,r,a=0,s=e.length;a<s;a++)w.setAttribute("type",o=e[a]),i="text"!==w.type,i&&(w.value=C,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(m.appendChild(w),r=t.defaultView,i=r.getComputedStyle&&"textfield"!==r.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,m.removeChild(w)):/^(search|tel)$/.test(o)||(i=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=C)),M[e[a]]=!!i;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,v,h="2.8.3",f={},p=!0,m=t.documentElement,g="modernizr",b=t.createElement(g),y=b.style,w=t.createElement("input"),C=":)",T={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",k=x.split(" "),I=x.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},D={},M={},P={},_=[],j=_.slice,N=function(e,n,i,o){var r,a,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(i,10))for(;i--;)s=t.createElement("div"),s.id=o?o[i]:g+(i+1),l.appendChild(s);return r=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),l.id=g,(u?l:d).innerHTML+=r,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=c),!!a},F=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var i;return N("@media "+t+" { #"+g+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},A=function(){function e(e,o){o=o||t.createElement(i[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=r(o[e],"function"),r(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;v=r(L,"undefined")||r(L.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=t.prototype;var r=new o,a=t.apply(r,n.concat(j.call(arguments)));return Object(a)===a?a:r}return t.apply(e,n.concat(j.call(arguments)))};return i}),D.flexbox=function(){return l("flexWrap")},D.flexboxlegacy=function(){return l("boxDirection")},D.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},D.canvastext=function(){return!(!f.canvas||!r(t.createElement("canvas").getContext("2d").fillText,"function"))},D.webgl=function(){return!!e.WebGLRenderingContext},D.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",E.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},D.geolocation=function(){return"geolocation"in navigator},D.postmessage=function(){return!!e.postMessage},D.websqldatabase=function(){return!!e.openDatabase},D.indexedDB=function(){return!!l("indexedDB",e)},D.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},D.history=function(){return!(!e.history||!history.pushState)},D.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},D.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},D.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),a(y.backgroundColor,"rgba")},D.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),a(y.backgroundColor,"rgba")||a(y.backgroundColor,"hsla")},D.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},D.backgroundsize=function(){return l("backgroundSize")},D.borderimage=function(){return l("borderImage")},D.borderradius=function(){return l("borderRadius")},D.boxshadow=function(){return l("boxShadow")},D.textshadow=function(){return""===t.createElement("div").style.textShadow},D.opacity=function(){return o("opacity:.55"),/^0.55$/.test(y.opacity)},D.cssanimations=function(){return l("animationName")},D.csscolumns=function(){return l("columnCount")},D.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),a(y.backgroundImage,"gradient")},D.cssreflections=function(){return l("boxReflect")},D.csstransforms=function(){return!!l("transform")},D.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in m.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},D.csstransitions=function(){return l("transition")},D.fontface=function(){var e;return N('@font-face {font-family:"font";src:url("https://")}',function(n,i){var o=t.getElementById("smodernizr"),r=o.sheet||o.styleSheet,a=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(i.split(" ")[0])}),e},D.generatedcontent=function(){var e;return N(["#",g,"{font:0/0 a}#",g,':after{content:"',C,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},D.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},D.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},D.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},D.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},D.webworkers=function(){return!!e.Worker},D.applicationcache=function(){return!!e.applicationCache},D.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S.svg,"svg").createSVGRect},D.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S.svg},D.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(T.call(t.createElementNS(S.svg,"animate")))},D.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(T.call(t.createElementNS(S.svg,"clipPath")))};for(var $ in D)v(D,$)&&(d=$.toLowerCase(),f[d]=D[$](),_.push((f[d]?"":"no-")+d));return f.input||u(),f.addTest=function(e,t){if("object"==typeof e)for(var i in e)v(e,i)&&f.addTest(i,e[i]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof p&&p&&(m.className+=" "+(t?"":"no-")+e),f[e]=t}return f},i(""),b=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[p]];return t||(t={},m++,e[p]=m,g[m]=t),t}function r(e,n,i){if(n||(n=t),u)return n.createElement(e);i||(i=o(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():f.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||h.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),a=0,s=i(),c=s.length;a<c;a++)r.createElement(s[a]);return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function c(e){e||(e=t);var i=o(e);return!b.shivCSS||l||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,i),e}var l,u,d="3.7.0",v=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var b={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:v.shivCSS!==!1,supportsUnknownElements:u,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:c,createElement:r,createDocumentFragment:a};e.html5=b,c(t)}(this,t),f._version=h,f._prefixes=E,f._domPrefixes=I,f._cssomPrefixes=k,f.mq=F,f.hasEvent=A,f.testProp=function(e){return s([e])},f.testAllProps=l,f.testStyles=N,f.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+_.join(" "):""),f}(this,this.document),jQuery(document).ready(function(e){function t(){e(".cd-nav-trigger").removeClass("nav-is-visible"),e(".cd-main-header").removeClass("nav-is-visible"),e(".cd-primary-nav").removeClass("nav-is-visible"),e(".has-children ul").addClass("is-hidden"),e(".has-children a").removeClass("selected"),e(".moves-out").removeClass("moves-out"),e(".cd-main-content").removeClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e("body").removeClass("overflow-hidden")}),e("#cd-search").hasClass("is-visible")||e(".cd-overlay").removeClass("is-visible"),r()}function n(t){"close"==t?(e(".cd-search").removeClass("is-visible"),e(".cd-search-trigger").removeClass("search-is-visible"),e(".cd-overlay").removeClass("search-is-visible"),e("body").removeClass("search-is-visible")):(e(".cd-search").toggleClass("is-visible"),e(".cd-search-trigger").toggleClass("search-is-visible"),e("body").toggleClass("search-is-visible"),e(window).width()>c&&e(".cd-search").hasClass("is-visible")&&e(".cd-search").find('input[type="search"]').focus(),e("#cd-search").hasClass("is-visible")?e(".cd-overlay").addClass("is-visible"):e(".cd-overlay").removeClass("is-visible"))}function i(){e(document).innerWidth()>=1024?e("div#ribbon").hasClass("mini-ribbon")&&!e(".cd-overlay").hasClass("is-visible")?e("div#ribbon").removeClass("mini-ribbon"):e("div#ribbon").addClass("mini-ribbon"):e(".cd-overlay").hasClass("is-visible")?e("div#ribbon").hide():e("div#ribbon").show()}function o(){setTimeout("window._navigation_toggleRibbonAction()",50)}function r(){e(".cd-overlay").hasClass(".shift-down")?e(".cd-overlay").removeClass("shift-down"):e(".cd-overlay").addClass("shift-down")}function a(){var t=window,n="inner";return"innerWidth"in window||(n="client",t=document.documentElement||document.body),!!e("body").hasClass("child-theme-bc-wp-2015-child-theme-stopgap")||t[n+"Width"]>=c}function s(){var i=e(".cd-nav");t(),e(".cd-overlay").removeClass("is-visible"),n("close"),e("div#ribbon").removeClass("mini-ribbon"),e("div#ribbon").show();var o=a();o?(i.detach(),i.insertBefore(".cd-header-buttons")):(i.detach(),i.insertAfter(".cd-overlay"))}var c=1024;s(),e(window).on("resize",function(){window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,300)}),e(window).scroll(function(){var t=e('<div class="cd-overlay shift-down"></div>').hide().appendTo("body"),n=parseInt(t.css("marginTop"));t.remove();var i,o=e(window).scrollTop(),r=parseInt(e(".cd-overlay").css("marginTop"));i=o>n?0:r<=n-o&&o<n?n-o:n-o,e(".cd-overlay").css("marginTop",i+"px")}),e(".cd-nav-trigger").on("click",function(i){i.preventDefault(),e(".cd-overlay").hasClass("is-visible")&&!e(".cd-search").hasClass("is-visible")?t():(e(this).addClass("nav-is-visible"),e(".cd-primary-nav").addClass("nav-is-visible"),e(".cd-main-header").addClass("nav-is-visible"),e(".cd-main-content").addClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e("body").addClass("overflow-hidden")}),n("close"),e(".cd-overlay").addClass("is-visible")),o(),r()}),e(".cd-search-trigger").on("click",function(e){e.preventDefault(),n(),o(),r(),t()}),e(".cd-overlay").on("swiperight",function(){e(".cd-primary-nav").hasClass("nav-is-visible")&&(t(),e(".cd-overlay").removeClass("is-visible"),o())}),e(".nav-on-left .cd-overlay").on("swipeleft",function(){e(".cd-primary-nav").hasClass("nav-is-visible")&&(t(),e(".cd-overlay").removeClass("is-visible"))}),e(".cd-overlay").on("click",function(){t(),n("close"),e(".cd-overlay").removeClass("is-visible"),o()}),e(".cd-primary-nav").children(".has-children").children("a").on("click",function(e){e.preventDefault()}),e(".has-children").children("a").on("click",function(t){a()||t.preventDefault();var i=e(this);i.next("ul").hasClass("is-hidden")?(i.addClass("selected").next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("moves-out"),i.parent(".has-children").siblings(".has-children").children("ul").addClass("is-hidden").end().children("a").removeClass("selected"),e(".cd-overlay").addClass("is-visible")):(i.removeClass("selected").next("ul").addClass("is-hidden").end().parent(".has-children").parent("ul").removeClass("moves-out"),e(".cd-overlay").removeClass("is-visible")),n("close"),o()}),e(".go-back").on("click",function(){e(this).parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("moves-out")}),window._navigation_toggleRibbonAction=i}),function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,n=navigator.userAgent.toLowerCase().indexOf("msie")>-1;if((e||t||n)&&"undefined"!=typeof document.getElementById){var i=window.addEventListener?"addEventListener":"attachEvent";window[i]("hashchange",function(){var e=document.getElementById(location.hash.substring(1));e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1)}}(),function(e){e.fn.hoverIntent=function(t,n,i){var o={interval:100,sensitivity:7,timeout:0};o="object"==typeof t?e.extend(o,t):e.isFunction(n)?e.extend(o,{over:t,out:n,selector:i}):e.extend(o,{over:t,out:t,selector:n});var r,a,s,c,l=function(e){r=e.pageX,a=e.pageY},u=function(t,n){return n.hoverIntent_t=clearTimeout(n.hoverIntent_t),Math.abs(s-r)+Math.abs(c-a)<o.sensitivity?(e(n).off("mousemove.hoverIntent",l),n.hoverIntent_s=1,o.over.apply(n,[t])):(s=r,c=a,n.hoverIntent_t=setTimeout(function(){u(t,n)},o.interval),void 0)},d=function(e,t){return t.hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=0,o.out.apply(t,[e])},v=function(t){var n=jQuery.extend({},t),i=this;i.hoverIntent_t&&(i.hoverIntent_t=clearTimeout(i.hoverIntent_t)),"mouseenter"==t.type?(s=n.pageX,c=n.pageY,e(i).on("mousemove.hoverIntent",l),1!=i.hoverIntent_s&&(i.hoverIntent_t=setTimeout(function(){u(n,i)},o.interval))):(e(i).off("mousemove.hoverIntent",l),1==i.hoverIntent_s&&(i.hoverIntent_t=setTimeout(function(){d(n,i)},o.timeout)))};return this.on({"mouseenter.hoverIntent":v,"mouseleave.hoverIntent":v},o.selector)}}(jQuery),function(e){return}(this),function(e){e(document).ready(function(){e(".ictst_content_cl").each(function(t,n){var i=0;e(n).find("> ul > li").each(function(t,n){var o=e(n).height();o>i&&(i=o)}),e(n).height(i)})})}(jQuery),jQuery(document).ready(function(){$("#commitment_liberalarts").click(function(){$("#commitment_toggle_liberalarts").slideToggle("slow")})}),function(e){function t(t,n){var i=null==n?"the first 10 results":"results "+n+"-"+(n+9);e("#search-info").html("<p>Showing <strong>"+i+"</strong> of <strong>"+t.searchInformation.formattedTotalResults+"</strong> found.</p>")}function n(t){var n="";console.log(t);for(var i=0;i<t.items.length;i++)n+='<div class="result-item clearfix">',n+='<p class="result-title"><a href="'+t.items[i].htmlFormattedUrl+'">'+t.items[i].htmlTitle+"</a></p>",n+='<p class="result-url"><a href="'+t.items[i].htmlFormattedUrl+'">'+t.items[i].htmlFormattedUrl+"</a></p>",n+="<p>","pagemap"in t.items[i]&&"cse_thumbnail"in t.items[i].pagemap&&(n+='<a href="'+t.items[i].htmlFormattedUrl+'"><img class="pull-left" src="'+t.items[i].pagemap.cse_thumbnail[0].src+'" alt="'+t.items[i].htmlTitle+' (generated thumbnail)" width="'+Math.ceil(t.items[i].pagemap.cse_thumbnail[0].width/2)+'" height="'+Math.ceil(t.items[i].pagemap.cse_thumbnail[0].height/2)+'" /></a>'),n+=t.items[i].htmlSnippet+"</p></div>";e("#results").html(n)}function i(t,n){var i=null==n?1:(n-1)/10+1,o=Math.ceil(t.searchInformation.totalResults/10);o=o>10?10:o;var r=i<=6?1:i-5,a=i<=6?10:i+4;o<a&&(a=o),console.log("current: "+i),console.log("first: "+r),console.log("last: "+a);var s="<ul>";i>1&&(s+='<li class="previous"><a data-page="'+(i-1)+'">Previous</a></li>');for(var c=r;c<=a;c++)s+=c==i?'<li class="current">'+c+"</li>":'<li><a data-page="'+c+'">'+c+"</li>";i<a&&(s+='<li class="next"><a data-page="'+(i+1)+'">Next</a></li>'),s+="</ul>",e("#search-more-links").html(s)}function o(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),i=n.exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null}e(document).ready(function(){var r=o("q");if(null!=r){e('#search-page-box input[type="text"]').val(r);var a="https://www.googleapis.com/customsearch/v1?key=AIzaSyA6rfuiihKZeDvjfZyWjP6qd223SYPvFZY&cx=018174935032430318208:8kij2j8mmsy&q="+r;e.getJSON(a,function(r){var s=o("start");t(r,s),n(r),i(r,s),e("#search-more-links").on("click","a",function(){if(e(this).parents("li.current").length>0)return!1;var o=10*e(this).attr("data-page")-9;e.getJSON(a+"&start="+o,function(r){e("#search-page-box").get(0).scrollIntoView(),t(r,o),i(r,o),n(r)})})})}})}(jQuery);
//# sourceMappingURL=production.js.map
