!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/js/",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=function(t){return t&&t.__esModule?t:{default:t}}(o),r=document.querySelector(".m-siteHeader");r.classList.add("is-active");var s=new i.default(r,{offset:60});e.default=s},function(t,e,n){"use strict";n(2),n(0),n(4)},function(t,e){!function(t,e){"use strict";function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||l(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?i/n:this.isIntersecting?1:0}function o(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=r(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function i(){return t.performance&&performance.now&&performance.now()}function r(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function a(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t,e){var n=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),i=Math.max(t.left,e.left),r=Math.min(t.right,e.right),s=r-i,a=o-n;return s>=0&&a>=0&&{top:n,bottom:o,left:i,right:r,width:s,height:a}}function u(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):l()}function l(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(t,e){for(var n=e;n;){if(n==t)return!0;n=d(n)}return!1}function d(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)return void("isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}));var f=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},o.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,a(t,"resize",this._checkForIntersections,!0),a(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():l();this._observationTargets.forEach(function(o){var r=o.element,s=u(r),a=this._rootContainsTarget(r),c=o.entry,l=t&&a&&this._computeTargetAndRootIntersection(r,e),h=o.entry=new n({time:i(),target:r,boundingClientRect:s,rootBounds:e,intersectionRect:l});c?t&&a?this._hasCrossedThreshold(c,h)&&this._queuedEntries.push(h):c&&c.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(n,o){if("none"!=t.getComputedStyle(n).display){for(var i=u(n),r=i,s=d(n),a=!1;!a;){var l=null,h=1==s.nodeType?t.getComputedStyle(s):{};if("none"==h.display)return;if(s==this.root||s==e?(a=!0,l=o):s!=e.body&&s!=e.documentElement&&"visible"!=h.overflow&&(l=u(s)),l&&!(r=c(l,r)))break;s=d(s)}return r}},o.prototype._getRootRect=function(){var t;if(this.root)t=u(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},o.prototype._rootIsInDom=function(){return!this.root||h(e,this.root)},o.prototype._rootContainsTarget=function(t){return h(this.root||e,t)},o.prototype._registerInstance=function(){f.indexOf(this)<0&&f.push(this)},o.prototype._unregisterInstance=function(){var t=f.indexOf(this);-1!=t&&f.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=n}(window,document)},function(t,e,n){var o,i,r;!function(n,s){"use strict";i=[],o=s,void 0!==(r="function"==typeof o?o.apply(e,i):o)&&(t.exports=r)}(0,function(){"use strict";function t(t){this.callback=t,this.ticking=!1}function e(t){return t&&"undefined"!=typeof window&&(t===window||t.nodeType)}function n(t){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var o,i,r=t||{};for(i=1;i<arguments.length;i++){var s=arguments[i]||{};for(o in s)"object"!=typeof r[o]||e(r[o])?r[o]=r[o]||s[o]:r[o]=n(r[o],s[o])}return r}function o(t){return t===Object(t)?t:{down:t,up:t}}function i(t,e){e=n(e,i.options),this.lastKnownScrollY=0,this.elem=t,this.tolerance=o(e.tolerance),this.classes=e.classes,this.offset=e.offset,this.scroller=e.scroller,this.initialised=!1,this.onPin=e.onPin,this.onUnpin=e.onUnpin,this.onTop=e.onTop,this.onNotTop=e.onNotTop,this.onBottom=e.onBottom,this.onNotBottom=e.onNotBottom}var r={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,t.prototype={constructor:t,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},i.prototype={constructor:i,init:function(){if(i.cutsTheMustard)return this.debouncer=new t(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var t=this.classes;this.initialised=!1;for(var e in t)t.hasOwnProperty(e)&&this.elem.classList.remove(t[e]);this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,e=this.classes;!t.contains(e.pinned)&&t.contains(e.unpinned)||(t.add(e.unpinned),t.remove(e.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,e=this.classes;t.contains(e.unpinned)&&(t.remove(e.unpinned),t.add(e.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,e=this.classes;t.contains(e.top)||(t.add(e.top),t.remove(e.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notTop)||(t.add(e.notTop),t.remove(e.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.bottom)||(t.add(e.bottom),t.remove(e.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notBottom)||(t.add(e.notBottom),t.remove(e.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)},getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(t){var e=t<0,n=t+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return e||n},toleranceExceeded:function(t,e){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[e]},shouldUnpin:function(t,e){var n=t>this.lastKnownScrollY,o=t>=this.offset;return n&&o&&e},shouldPin:function(t,e){var n=t<this.lastKnownScrollY,o=t<=this.offset;return n&&e||o},update:function(){var t=this.getScrollY(),e=t>this.lastKnownScrollY?"down":"up",n=this.toleranceExceeded(t,e);this.isOutOfBounds(t)||(t<=this.offset?this.top():this.notTop(),t+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(t,n)?this.unpin():this.shouldPin(t,n)&&this.pin(),this.lastKnownScrollY=t)}},i.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},i.cutsTheMustard=void 0!==r&&r.rAF&&r.bind&&r.classList,i})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(5),r=o(i),s=n(6),a=o(s),c=n(7),u=o(c),l=n(0),h=o(l),d=n(8),f=o(d),p=n(9),m=o(p),v=n(10),g=o(v),y=void 0,w=r.default.BaseTransition.extend({start:function(){this.linkClicked=y,Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){var t=this,e=r.default.Utils.deferred(),n=(0,s.getParents)(this.linkClicked,".m-articleExcerpt"),o=document.querySelector(".m-siteHeader");if(n.length){var i=(0,a.default)(n[0]).y,c=document.body.scrollTop||document.documentElement.scrollTop;o.classList.remove("headroom--unpinned"),o.classList.add("headroom--autoscroll"),(0,s.scrollIt)(i+c-50,300,"easeOutQuad",function(){t.oldContainer.style.opacity=0,setTimeout(function(){e.resolve()},300)})}else e.resolve();return e.promise},fadeIn:function(){var t=this,e=this.newContainer;e.style.opacity=0,e.style.visibility="visible",setTimeout(function(){e.style.opacity=1},300),setTimeout(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,t.done()},300)},finish:function(){this.done()}});document.addEventListener("DOMContentLoaded",function(){h.default.init(),r.default.Pjax.getTransition=function(){return w},r.default.Pjax.start(),r.default.Prefetch.init()}),r.default.Dispatcher.on("linkClicked",function(t){y=t}),r.default.Dispatcher.on("initStateChange",function(){var t=document.querySelector(".m-lightbox");t&&t.remove()}),r.default.Dispatcher.on("newPageReady",function(){document.querySelector(".m-gallerySimple")&&new f.default({selector:".m-gallerySimple__link",lazyload:!0});(0,m.default)()}),r.default.Dispatcher.on("transitionCompleted",function(t,e,n,o){(0,u.default)();var i=document.querySelector(".m-siteHeader");setTimeout(function(){i.classList.remove("headroom--autoscroll")},300),(0,g.default)("img[data-src], .b-lazy",{threshold:.1,rootMargin:"100% 0%"}).observe()}),r.default.Pjax.originalPreventCheck=r.default.Pjax.preventCheck,r.default.Pjax.preventCheck=function(t,e){return!!r.default.Pjax.originalPreventCheck(t,e)&&!/.wp-admin/.test(e.href.toLowerCase())}},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="http://localhost:8080/dist",e(0)}([function(t,e,n){"function"!=typeof Promise&&(window.Promise=n(1));var o={version:"1.0.0",BaseTransition:n(4),BaseView:n(6),BaseCache:n(8),Dispatcher:n(7),HistoryManager:n(9),Pjax:n(10),Prefetch:n(13),Utils:n(5)};t.exports=o},function(t,e,n){(function(e){!function(n){function o(){}function i(t,e){return function(){t.apply(e,arguments)}}function r(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(t,this)}function s(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,f(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?a:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}a(e.promise,o)})}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof r)return t._state=3,t._value=e,void u(t);if("function"==typeof n)return void h(i(n,e),t)}t._state=1,t._value=e,u(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&f(function(){t._handled||p(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)s(t,t._deferreds[e]);t._deferreds=null}function l(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function h(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout,f="function"==typeof e&&e||function(t){d(t,0)},p=function(t){"undefined"!=typeof console&&console};r.prototype.catch=function(t){return this.then(null,t)},r.prototype.then=function(t,e){var n=new this.constructor(o);return s(this,new l(t,e,n)),n},r.all=function(t){var e=Array.prototype.slice.call(t);return new r(function(t,n){function o(r,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){o(r,t)},n)}e[r]=s,0==--i&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var i=e.length,r=0;r<e.length;r++)o(r,e[r])})},r.resolve=function(t){return t&&"object"==typeof t&&t.constructor===r?t:new r(function(e){e(t)})},r.reject=function(t){return new r(function(e,n){n(t)})},r.race=function(t){return new r(function(e,n){for(var o=0,i=t.length;o<i;o++)t[o].then(e,n)})},r._setImmediateFn=function(t){f=t},r._setUnhandledRejectionFn=function(t){p=t},void 0!==t&&t.exports?t.exports=r:n.Promise||(n.Promise=r)}(this)}).call(e,n(2).setImmediate)},function(t,e,n){(function(t,o){function i(t,e){this._id=t,this._clearFn=e}var r=n(3).nextTick,s=Function.prototype.apply,a=Array.prototype.slice,c={},u=0;e.setTimeout=function(){return new i(s.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new i(s.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var n=u++,o=!(arguments.length<2)&&a.call(arguments,1);return c[n]=!0,r(function(){c[n]&&(o?t.apply(null,o):t.call(null),e.clearImmediate(n))}),n},e.clearImmediate="function"==typeof o?o:function(t){delete c[t]}}).call(e,n(2).setImmediate,n(2).clearImmediate)},function(t,e){function n(){h&&u&&(h=!1,u.length?l=u.concat(l):d=-1,l.length&&o())}function o(){if(!h){var t=s(n);h=!0;for(var e=l.length;e;){for(u=l,l=[];++d<e;)u&&u[d].run();d=-1,e=l.length}u=null,h=!1,a(t)}}function i(t,e){this.fun=t,this.array=e}function r(){}var s,a,c=t.exports={};!function(){try{s=setTimeout}catch(t){s=function(){throw new Error("setTimeout is not defined")}}try{a=clearTimeout}catch(t){a=function(){throw new Error("clearTimeout is not defined")}}}();var u,l=[],h=!1,d=-1;c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new i(t,e)),1!==l.length||h||s(o,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=r,c.addListener=r,c.once=r,c.off=r,c.removeListener=r,c.removeAllListeners=r,c.emit=r,c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(t,e,n){var o=n(5),i={oldContainer:void 0,newContainer:void 0,newContainerLoading:void 0,extend:function(t){return o.extend(this,t)},init:function(t,e){var n=this;return this.oldContainer=t,this._newContainerPromise=e,this.deferred=o.deferred(),this.newContainerReady=o.deferred(),this.newContainerLoading=this.newContainerReady.promise,this.start(),this._newContainerPromise.then(function(t){n.newContainer=t,n.newContainerReady.resolve()}),this.deferred.promise},done:function(){this.oldContainer.parentNode.removeChild(this.oldContainer),this.newContainer.style.visibility="visible",this.deferred.resolve()},start:function(){}};t.exports=i},function(t,e){var n={getCurrentUrl:function(){return window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search},cleanLink:function(t){return t.replace(/#.*/,"")},xhrTimeout:5e3,xhr:function(t){var e=this.deferred(),n=new XMLHttpRequest;return n.onreadystatechange=function(){if(4===n.readyState)return 200===n.status?e.resolve(n.responseText):e.reject(new Error("xhr: HTTP code is not 200"))},n.ontimeout=function(){return e.reject(new Error("xhr: Timeout exceeded"))},n.open("GET",t),n.timeout=this.xhrTimeout,n.setRequestHeader("x-barba","yes"),n.send(),e.promise},extend:function(t,e){var n=Object.create(t);for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);return n},deferred:function(){return new function(){this.resolve=null,this.reject=null,this.promise=new Promise(function(t,e){this.resolve=t,this.reject=e}.bind(this))}},getPort:function(t){var e=void 0!==t?t:window.location.port,n=window.location.protocol;return""!=e?parseInt(e):"http:"===n?80:"https:"===n?443:void 0}};t.exports=n},function(t,e,n){var o=n(7),i=n(5),r={namespace:null,extend:function(t){return i.extend(this,t)},init:function(){var t=this;o.on("initStateChange",function(e,n){n&&n.namespace===t.namespace&&t.onLeave()}),o.on("newPageReady",function(e,n,o){t.container=o,e.namespace===t.namespace&&t.onEnter()}),o.on("transitionCompleted",function(e,n){e.namespace===t.namespace&&t.onEnterCompleted(),n&&n.namespace===t.namespace&&t.onLeaveCompleted()})},onEnter:function(){},onEnterCompleted:function(){},onLeave:function(){},onLeaveCompleted:function(){}};t.exports=r},function(t,e){var n={events:{},on:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},off:function(t,e){t in this.events!=!1&&this.events[t].splice(this.events[t].indexOf(e),1)},trigger:function(t){if(t in this.events!=!1)for(var e=0;e<this.events[t].length;e++)this.events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}};t.exports=n},function(t,e,n){var o=n(5),i={data:{},extend:function(t){return o.extend(this,t)},set:function(t,e){this.data[t]=e},get:function(t){return this.data[t]},reset:function(){this.data={}}};t.exports=i},function(t,e){var n={history:[],add:function(t,e){e||(e=void 0),this.history.push({url:t,namespace:e})},currentStatus:function(){return this.history[this.history.length-1]},prevStatus:function(){var t=this.history;return t.length<2?null:t[t.length-2]}};t.exports=n},function(t,e,n){var o=n(5),i=n(7),r=n(11),s=n(8),a=n(9),c=n(12),u={Dom:c,History:a,Cache:s,cacheEnabled:!0,transitionProgress:!1,ignoreClassLink:"no-barba",start:function(){this.init()},init:function(){var t=this.Dom.getContainer();this.Dom.getWrapper().setAttribute("aria-live","polite"),this.History.add(this.getCurrentUrl(),this.Dom.getNamespace(t)),i.trigger("initStateChange",this.History.currentStatus()),i.trigger("newPageReady",this.History.currentStatus(),{},t,this.Dom.currentHTML),i.trigger("transitionCompleted",this.History.currentStatus()),this.bindEvents()},bindEvents:function(){document.addEventListener("click",this.onLinkClick.bind(this)),window.addEventListener("popstate",this.onStateChange.bind(this))},getCurrentUrl:function(){return o.cleanLink(o.getCurrentUrl())},goTo:function(t){window.history.pushState(null,null,t),this.onStateChange()},forceGoTo:function(t){window.location=t},load:function(t){var e,n=o.deferred(),i=this;return e=this.Cache.get(t),e||(e=o.xhr(t),this.Cache.set(t,e)),e.then(function(t){var e=i.Dom.parseResponse(t);i.Dom.putContainer(e),i.cacheEnabled||i.Cache.reset(),n.resolve(e)},function(){i.forceGoTo(t),n.reject()}),n.promise},getHref:function(t){if(t)return t.getAttribute&&"string"==typeof t.getAttribute("xlink:href")?t.getAttribute("xlink:href"):"string"==typeof t.href?t.href:void 0},onLinkClick:function(t){for(var e=t.target;e&&!this.getHref(e);)e=e.parentNode;if(this.preventCheck(t,e)){t.stopPropagation(),t.preventDefault(),i.trigger("linkClicked",e,t);var n=this.getHref(e);this.goTo(n)}},preventCheck:function(t,e){if(!window.history.pushState)return!1;var n=this.getHref(e);return!(!e||!n)&&(!(t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)&&((!e.target||"_blank"!==e.target)&&(window.location.protocol===e.protocol&&window.location.hostname===e.hostname&&(o.getPort()===o.getPort(e.port)&&(!(n.indexOf("#")>-1)&&((!e.getAttribute||"string"!=typeof e.getAttribute("download"))&&(o.cleanLink(n)!=o.cleanLink(location.href)&&!e.classList.contains(this.ignoreClassLink))))))))},getTransition:function(){return r},onStateChange:function(){var t=this.getCurrentUrl();if(this.transitionProgress&&this.forceGoTo(t),this.History.currentStatus().url===t)return!1;this.History.add(t);var e=this.load(t),n=Object.create(this.getTransition());this.transitionProgress=!0,i.trigger("initStateChange",this.History.currentStatus(),this.History.prevStatus());var o=n.init(this.Dom.getContainer(),e);e.then(this.onNewContainerLoaded.bind(this)),o.then(this.onTransitionEnd.bind(this))},onNewContainerLoaded:function(t){this.History.currentStatus().namespace=this.Dom.getNamespace(t),i.trigger("newPageReady",this.History.currentStatus(),this.History.prevStatus(),t,this.Dom.currentHTML)},onTransitionEnd:function(){this.transitionProgress=!1,i.trigger("transitionCompleted",this.History.currentStatus(),this.History.prevStatus())}};t.exports=u},function(t,e,n){var o=n(4),i=o.extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){document.body.scrollTop=0,this.done()}});t.exports=i},function(t,e){var n={dataNamespace:"namespace",wrapperId:"barba-wrapper",containerClass:"barba-container",currentHTML:document.documentElement.innerHTML,parseResponse:function(t){this.currentHTML=t;var e=document.createElement("div");e.innerHTML=t;var n=e.querySelector("title");return n&&(document.title=n.textContent),this.getContainer(e)},getWrapper:function(){var t=document.getElementById(this.wrapperId);if(!t)throw new Error("Barba.js: wrapper not found!");return t},getContainer:function(t){if(t||(t=document.body),!t)throw new Error("Barba.js: DOM not ready!");var e=this.parseContainer(t);if(e&&e.jquery&&(e=e[0]),!e)throw new Error("Barba.js: no container found");return e},getNamespace:function(t){return t&&t.dataset?t.dataset[this.dataNamespace]:t?t.getAttribute("data-"+this.dataNamespace):null},putContainer:function(t){t.style.visibility="hidden",this.getWrapper().appendChild(t)},parseContainer:function(t){return t.querySelector("."+this.containerClass)}};t.exports=n},function(t,e,n){var o=n(5),i=n(10),r={ignoreClassLink:"no-barba-prefetch",init:function(){if(!window.history.pushState)return!1;document.body.addEventListener("mouseover",this.onLinkEnter.bind(this)),document.body.addEventListener("touchstart",this.onLinkEnter.bind(this))},onLinkEnter:function(t){for(var e=t.target;e&&!i.getHref(e);)e=e.parentNode;if(e&&!e.classList.contains(this.ignoreClassLink)){var n=i.getHref(e);if(i.preventCheck(t,e)&&!i.Cache.get(n)){var r=o.xhr(n);i.Cache.set(n,r)}}}};t.exports=r}])})},function(t,e,n){"use strict";function o(t){for(var e=0,n=0;t;){if("BODY"==t.tagName){var o=t.scrollLeft||document.documentElement.scrollLeft,i=t.scrollTop||document.documentElement.scrollTop;e+=t.offsetLeft-o+t.clientLeft,n+=t.offsetTop-i+t.clientTop}else e+=t.offsetLeft-t.scrollLeft+t.clientLeft,n+=t.offsetTop-t.scrollTop+t.clientTop;t=t.offsetParent}return{x:e,y:n}}function i(t,e){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1});for(var n=[];t&&t!==document;t=t.parentNode)e?t.matches(e)&&n.push(t):n.push(t);return n}function r(t){function e(){var t="now"in window.performance?performance.now():(new Date).getTime(),c=Math.min(1,(t-a)/n),u=r[o](c);if(window.scroll(0,Math.ceil(u*(h-s)+s)),window.pageYOffset===h)return void(i&&i());requestAnimationFrame(e)}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",i=arguments[3],r={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},s=window.pageYOffset,a="now"in window.performance?performance.now():(new Date).getTime(),c=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),u=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,l="number"==typeof t?t:t.offsetTop,h=Math.round(c-l<u?c-u:l);if("requestAnimationFrame"in window==!1)return window.scroll(0,h),void(i&&i());e()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,e.getParents=i,e.scrollIt=r},function(t,e,n){"use strict";function o(){Array.from(document.querySelectorAll(".wp-caption")).forEach(function(t){var e=t.nextElementSibling;if(t.classList.contains("alignleft")&&(e.classList.contains("alignright")||e.classList.contains("alignleft"))){var n=document.createElement("div");n.classList.add("m-contentCollection"),n.innerHTML=t.outerHTML,t.parentNode.insertBefore(n,t),n.appendChild(e),t.remove()}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";function o(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){function n(t){o.touchHandler(t)}var o=this;this.callback=e,t.addEventListener("touchstart",n,!1),t.addEventListener("touchmove",n,!1),t.addEventListener("touchend",n,!1)}Object.defineProperty(e,"__esModule",{value:!0});"function"==typeof Symbol&&Symbol.iterator;r.prototype.touches={touchstart:{x:-1,y:-1},touchmove:{x:-1,y:-1},touchend:!1,direction:"undetermined"},r.prototype.touchHandler=function(t){var e;if(void 0!==t&&void 0!==t.touches)switch(e=t.touches[0],t.type){case"touchstart":case"touchmove":this.touches[t.type].x=e.pageX,this.touches[t.type].y=e.pageY;break;case"touchend":this.touches[t.type]=!0;var n=this.touches.touchstart.x-this.touches.touchmove.x,o=this.touches.touchstart.y-this.touches.touchmove.y;n<0&&(n/=-1),o<0&&(o/=-1),this.touches.direction=n>o?this.touches.touchstart.x<this.touches.touchmove.x?"right":"left":this.touches.touchstart.y<this.touches.touchmove.y?"down":"up",this.callback(t,this.touches.direction)}};var s=function t(e){var n=e.lazyload,r=void 0===n||n,s=e.counter,c=void 0===s||s,u=e.arrows,l=void 0===u||u,h=e.slideSpeed,d=void 0===h?400:h,f=o(e,["lazyload","counter","arrows","slideSpeed"]);i(this,t),a.call(this),f.selector&&("string"!=typeof f.selector||(this.selector=f.selector,this.lazyload=r,this.counter=c,this.arrows=l,this.slideSpeed=d,this.links=Array.from(document.querySelectorAll("a"+f.selector)),this.offsets=[],this.nodes={},this.imageIndex=null,this.links.length>0&&(this.createLightbox(),this.createNodes(),this.eventListeners(this.links))))},a=function(){var t=this;this.goTo=function(e,n){var o=t.nodes,i=o.items,r=o.counter;t.counter&&(r.innerHTML=e+1+"/"+t.links.length);var s=i[e].querySelector("img");if(t.lazyload){var a=s.getAttribute("data-src");i[e].insertAdjacentHTML("beforeend",'<div class="spinner"></div>'),s.setAttribute("src",a);var c=new Image;c.onload=function(){i[e].classList.add("is-active"),i[e].classList.add("is-loaded")},c.src=a}else i[e].classList.add("is-active"),i[e].classList.add("is-loaded");i.forEach(function(o,r){var s=t.offsets[r]-100*e;i[r].style.transform="translateX("+s+"vw)",n&&("A"===n.tagName?i[r].style.transition="opacity 0.4s ease":i[r].style.transition="transform "+t.slideSpeed+"ms ease-out")})},this.createNodes=function(){Object.assign(t.nodes,{lightboxNode:document.querySelector(".m-lightbox"),items:Array.from(document.querySelectorAll(".m-lightbox__slide")),next:document.querySelector(".m-lightbox__nextPrev--next"),prev:document.querySelector(".m-lightbox__nextPrev--prev"),close:document.querySelector(".m-lightbox__close")}),Object.assign(t.nodes,{counter:document.querySelector(".m-lightbox__counter")})},this.eventListeners=function(e){var n=t.nodes,o=n.lightboxNode,i=n.items,s=n.next,a=n.prev,c=n.close;e.forEach(function(e,n){e.addEventListener("click",function(i){i.preventDefault(),o.classList.add("is-active"),document.body.style.overflow="hidden",t.imageIndex=n,t.goTo(n,e),t.setNav(n)})}),s.addEventListener("click",function(e){t.goToNext(e)}),a.addEventListener("click",function(e){t.goToPrev(e)}),c.addEventListener("click",function(){t.closeBox()}),document.onkeydown=function(e){switch(e.keyCode){case 37:t.goToPrev(e);break;case 39:t.goToNext(e);break;case 27:t.closeBox()}},i.forEach(function(e){new r(e.querySelector("img"),function(e,n){switch(e.preventDefault(),n){case"up":case"down":break;case"left":t.goToNext(e);break;case"right":t.goToPrev(e)}})})},this.setNav=function(e){if(t.arrows){var n=t.nodes,o=n.next,i=n.prev;e<t.links.length-1&&o.classList.add("is-active"),e>=t.links.length-1&&o.classList.remove("is-active"),e>0&&i.classList.add("is-active"),e<=0&&i.classList.remove("is-active")}},this.goToNext=function(e){var n=t.nodes.items;t.imageIndex<n.length-1&&(t.goTo(t.imageIndex+1,e),setTimeout(function(){n[t.imageIndex-1].classList.remove("is-active")},t.slideSpeed),t.imageIndex+=1,t.setNav(t.imageIndex))},this.goToPrev=function(e){var n=t.nodes.items;t.imageIndex>0&&(t.goTo(t.imageIndex-1,e),setTimeout(function(){n[t.imageIndex+1].classList.remove("is-active")},t.slideSpeed),t.imageIndex-=1,t.setNav(t.imageIndex))},this.closeBox=function(){var e=t.nodes,n=e.lightboxNode,o=e.items;n.classList.remove("is-active"),document.body.style.overflow="auto",setTimeout(function(){o.forEach(function(t){return t.classList.remove("is-active")})},t.slideSpeed)},this.destroyBox=function(){t.nodes.lightboxNode.remove()},this.renderImages=function(e){return e.map(function(e,n){var o=100*n;t.offsets.push(o);var i=e.getAttribute("href");return"\n                <li class='m-lightbox__slide' style='transform: translateX("+o+"vw)'>\n                    "+(t.lazyload?"\n                        <img data-src='"+i+"'/>\n                    ":"\n                        <img src='"+i+"'/>\n                    ")+"\n                </li>\n            "})},this.createLightbox=function(){var e='\n            <div class=\'m-lightbox\'>\n                <div class=\'m-lightbox__controls\'>\n                    <button class=\'m-lightbox__close\'>\n                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n                            <path d="M0 0h24v24H0z" fill="none"/>\n                        </svg>\n                    </button>\n                    <button class=\'m-lightbox__nextPrev m-lightbox__nextPrev--prev\'>\n                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M0 0h24v24H0z" fill="none"/>\n                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>\n                        </svg>\n                    </button>\n                    <button class=\'m-lightbox__nextPrev m-lightbox__nextPrev--next\'>\n                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M0 0h24v24H0z" fill="none"/>\n                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>\n                        </svg>\n                    </button>\n                </div>\n                <ul class=\'m-lightBox__slider\'>\n                    '+t.renderImages(t.links).join("")+"\n                </ul>\n                <div class='m-lightbox__counter'>\n                </div>\n            </div>\n        ";document.body.insertAdjacentHTML("beforeend",e)}};e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t={rootMargin:"50px",threshold:1},e=function(t){t[0].intersectionRect.bottom>0&&t[0].target.classList.add("is-active")};Array.from(document.querySelectorAll("blockquote")).forEach(function(n){new IntersectionObserver(e,t).observe(n)})};e.default=o},function(t,e,n){"use strict";function o(t){if(t.dataset.srcset)(0,s.default)(function(){return""!==t.currentSrc}).then(function(){var e=new Image;e.onload=function(){t.classList.add("b-loaded"),t.parentNode.classList.add("is-loaded"),t.dataset.loaded=!0},e.src=t.currentSrc});else{var e=new Image;e.onload=function(){t.classList.add("b-loaded"),t.parentNode.classList.add("is-loaded"),t.dataset.loaded=!0},e.src=t.dataset.src}}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lozad",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i({},a,e),r=n.rootMargin,s=n.threshold,l=n.load,h=void 0;return window.IntersectionObserver&&(h=new IntersectionObserver(u(l),{rootMargin:r,threshold:s})),{observe:function(){for(var e=Array.from(document.querySelectorAll(t)),n=0;n<e.length;n++)c(e[n])||(h?h.observe(e[n]):(l(e[n]),o(e[n])))}}};var r=n(11),s=function(t){return t&&t.__esModule?t:{default:t}}(r),a={rootMargin:"0px",threshold:0,load:function(t){"IMG"===t.tagName?(t.dataset.src&&(t.src=t.dataset.src),t.dataset.srcset&&(t.srcset=t.dataset.srcset)):t.style.backgroundImage="url("+t.dataset.src+")"}},c=function(t){return"true"===t.dataset.loaded},u=function(t){return function(e,n){e.forEach(function(e){e.intersectionRatio>0&&(n.unobserve(e.target),t(e.target),o(e.target))})}}},function(t,e,n){"use strict";t.exports=function(t,e){return new Promise(function(n,o){e="number"==typeof e?e:20;!function i(){Promise.resolve().then(t).then(function(t){if("boolean"!=typeof t)throw new TypeError("Expected condition to return a boolean");!0===t?n():setTimeout(i,e)}).catch(o)}()})}}]);