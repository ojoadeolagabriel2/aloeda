!function(t){function n(n){for(var e,o,i=n[0],u=n[1],a=0,s=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);for(c&&c(n);s.length;)s.shift()()}var e={},r={1:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise((function(n,o){e=r[t]=[n,o]}));n.push(e[2]=i);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(t){return o.p+""+({}[t]||t)+".js"}(t);var c=new Error;u=function(n){a.onerror=a.onload=null,clearTimeout(s);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,e[1](c)}r[t]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(n)},o.m=t,o.c=e,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/dist/",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var a=0;a<i.length;a++)n(i[a]);var c=u;o(o.s=2)}([function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return mt})),e.d(n,"b",(function(){return Lt})),e.d(n,"c",(function(){return $t}));var r=Object.freeze({__proto__:null,get start(){return $t},get ensureJQuerySupport(){return Pt},get setBootstrapMaxTime(){return W},get setMountMaxTime(){return F},get setUnmountMaxTime(){return K},get setUnloadMaxTime(){return $},get registerApplication(){return Lt},get getMountedApps(){return xt},get getAppStatus(){return Ct},get unloadApplication(){return Bt},get checkActivityFunctions(){return Mt},get getAppNames(){return Dt},get declareChildApplication(){return Ut},get unloadChildApplication(){return It},get navigateToUrl(){return mt},get triggerAppChange(){return Wt},get addErrorHandler(){return w},get removeErrorHandler(){return g},get mountRootParcel(){return it},get NOT_LOADED(){return b},get LOADING_SOURCE_CODE(){return O},get NOT_BOOTSTRAPPED(){return E},get BOOTSTRAPPING(){return P},get NOT_MOUNTED(){return T},get MOUNTING(){return j},get UPDATING(){return A},get LOAD_ERROR(){return x},get MOUNTED(){return S},get UNMOUNTING(){return _},get SKIP_BECAUSE_BROKEN(){return D}}),o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).CustomEvent,i=function(){try{var t=new o("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?o:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e};function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(e,!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t,n,e){return(p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function m(t){var n="function"==typeof Map?new Map:void 0;return(m=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return p(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function h(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var d=[];function v(t,n){var e=y(t,n);d.length?d.forEach((function(t){return t(e)})):setTimeout((function(){throw e}))}function w(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");d.push(t)}function g(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");var n=!1;return d=d.filter((function(e){var r=e===t;return n=n||r,!r})),n}function y(t,n){var e,r=n.unmountThisParcel?"Parcel":"Application",o="".concat(r," '").concat(n.name,"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}e=t}else{console.warn("While ".concat(n.status,", '").concat(n.name,"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate."));try{e=Error(o+JSON.stringify(t))}catch(n){e=t}}e.appName=n.name,e.appOrParcelName=n.name;try{e.name=n.name}catch(t){}return e}var b="NOT_LOADED",O="LOADING_SOURCE_CODE",E="NOT_BOOTSTRAPPED",P="BOOTSTRAPPING",T="NOT_MOUNTED",j="MOUNTING",S="MOUNTED",A="UPDATING",_="UNMOUNTING",N="UNLOADING",x="LOAD_ERROR",D="SKIP_BECAUSE_BROKEN";function C(t){return t.status===S}function U(t){return!C(t)}function L(t){return t.status!==b&&t.status!==O&&t.status!==x}function M(t){return!L(t)}function R(t){try{return t.activeWhen(window.location)}catch(n){v(n,t),t.status=D}}function I(t){try{return!t.activeWhen(window.location)}catch(n){v(n,t),t.status=D}}function B(t){return t!==D&&(!t||t.status!==D)}function k(t){return t.status!==x||(new Date).getTime()-t.loadErrorTime>=200}function G(t){return t.name}var q={bootstrap:{millis:4e3,dieOnTimeout:!1},mount:{millis:3e3,dieOnTimeout:!1},unmount:{millis:3e3,dieOnTimeout:!1},unload:{millis:3e3,dieOnTimeout:!1}};function W(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("bootstrap max time must be a positive integer number of milliseconds");q.bootstrap={millis:t,dieOnTimeout:n}}function F(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("mount max time must be a positive integer number of milliseconds");q.mount={millis:t,dieOnTimeout:n}}function K(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unmount max time must be a positive integer number of milliseconds");q.unmount={millis:t,dieOnTimeout:n}}function $(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unload max time must be a positive integer number of milliseconds");q.unload={millis:t,dieOnTimeout:n}}function J(t,n,e){var r=1e3;return new Promise((function(o,i){var u=!1,a=!1;function c(t){if(!u)if(!0===t)a=!0,e.dieOnTimeout?i("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds")):console.error("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds -- we're no longer going to warn you about it."));else if(!a){var o=t,s=o*r;console.warn("".concat(n," did not resolve or reject within ").concat(s," milliseconds")),s+r<e.millis&&setTimeout((function(){return c(o+1)}),r)}}t.then((function(t){u=!0,o(t)})).catch((function(t){u=!0,i(t)})),setTimeout((function(){return c(1)}),r),setTimeout((function(){return c(!0)}),e.millis)}))}function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s({},q,{},t)}function Q(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function V(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!Q(n,(function(t){return"function"!=typeof t}))));var n}function z(t,n){return 0===(t=Array.isArray(t)?t:[t]).length&&(t=[function(){return Promise.resolve()}]),function(e){return new Promise((function(r,o){!function i(u){var a=t[u](e);X(a)?a.then((function(){u===t.length-1?r():i(u+1)})).catch(o):o("".concat(n," at index ").concat(u," did not return a promise"))}(0)}))}}function X(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function Y(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then((function(){return t.status!==E?t:(t.status=P,J(t.bootstrap(ct(t)),"Bootstrapping appOrParcel '".concat(t.name,"'"),t.timeouts.bootstrap).then((function(){return t.status=T,t})).catch((function(e){if(t.status=D,n)throw y(e,t);return v(e,t),t})))}))}function Z(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then((function(){if(t.status!==S)return t;t.status=_;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n){var o=y(r,t);throw t.status=D,o}v(r,t),t.status=D}))})).then((function(){return t}));function r(){return J(t.unmount(ct(t)),"Unmounting application ".concat(t.name,"'"),t.timeouts.unmount).then((function(){t.status=T})).catch((function(e){if(n){var r=y(e,t);throw t.status=D,r}v(e,t),t.status=D}))}}))}var tt=!1,nt=!1;function et(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then((function(){return t.status!==T?t:(tt||(window.dispatchEvent(new i("single-spa:before-first-mount")),tt=!0),J(t.mount(ct(t)),"Mounting application '".concat(t.name,"'"),t.timeouts.mount).then((function(){return t.status=S,nt||(window.dispatchEvent(new i("single-spa:first-mount")),nt=!0),t})).catch((function(e){return t.status=S,Z(t).then(r,r);function r(){if(n){var r=y(e,t);throw t.status=D,r}return v(e,t),t.status=D,t}})))}))}var rt=0,ot={parcels:{}};function it(){return ut.apply(ot,arguments)}function ut(t,n){var e=this;if(!t||"object"!==u(t)&&"function"!=typeof t)throw Error("Cannot mount parcel without a config object or config loading function");if(t.name&&"string"!=typeof t.name)throw Error("Parcel name must be a string, if provided");if("object"!==u(n))throw Error("Parcel ".concat(name," has invalid customProps -- must be an object"));if(!n.domElement)throw Error("Parcel ".concat(name," cannot be mounted without a domElement provided as a prop"));var r,o=rt++,i="function"==typeof t,a=i?t:function(){return Promise.resolve(t)},c={id:o,parcels:{},status:i?O:E,customProps:n,parentName:e.name,unmountThisParcel:function(){if(c.status!==S)throw Error("Cannot unmount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return Z(c,!0).then((function(t){return c.parentName&&delete e.parcels[c.id],t})).then((function(t){return f(t),t})).catch((function(t){throw c.status=D,l(t),t}))}};e.parcels[o]=c;var s=a();if(!s||"function"!=typeof s.then)throw Error("When mounting a parcel, the config loading function must return a promise that resolves with the parcel config");var f,l,p=(s=s.then((function(t){if(!t)throw Error("When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config");var n=t.name||"parcel-".concat(o);if(!V(t.bootstrap))throw Error("Parcel ".concat(n," must have a valid bootstrap function"));if(!V(t.mount))throw Error("Parcel ".concat(n," must have a valid mount function"));if(!V(t.unmount))throw Error("Parcel ".concat(n," must have a valid unmount function"));if(t.update&&!V(t.update))throw Error("Parcel ".concat(n," provided an invalid update function"));var e=z(t.bootstrap),i=z(t.mount),u=z(t.unmount);c.status=E,c.name=n,c.bootstrap=e,c.mount=i,c.unmount=u,c.timeouts=H(t.timeouts),t.update&&(c.update=z(t.update),r.update=function(t){return c.customProps=t,at(function(t){return Promise.resolve().then((function(){if(t.status!==S)throw Error("Cannot update parcel '".concat(t.name,"' because it is not mounted"));return t.status=A,J(t.update(ct(t)),"Updating parcel '".concat(t.name,"'"),t.timeouts.mount).then((function(){return t.status=S,t})).catch((function(n){var e=y(n,t);throw t.status=D,e}))}))}(c))})}))).then((function(){return Y(c,!0)})),m=p.then((function(){return et(c,!0)})),h=new Promise((function(t,n){f=t,l=n}));return r={mount:function(){return at(Promise.resolve().then((function(){if(c.status!==T)throw Error("Cannot mount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return e.parcels[o]=c,et(c)})))},unmount:function(){return at(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:at(s),bootstrapPromise:at(p),mountPromise:at(m),unmountPromise:at(h)}}function at(t){return t.then((function(){return null}))}function ct(t){var n=s({},t.customProps,{name:t.name,mountParcel:ut.bind(t),singleSpa:r});return t.unmountThisParcel&&(n.unmountSelf=t.unmountThisParcel),n}var st=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),h(this,f(n).apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(n,m(Error)),n}();function ft(t){return Promise.resolve().then((function(){return t.status!==b&&t.status!==x?t:(t.status=O,Promise.resolve().then((function(){var e=t.loadImpl(ct(t));if(!X(e))throw new st("single-spa loading function did not return a promise. Check the second argument to registerApplication('".concat(t.name,"', loadingFunction, activityFunction)"));return e.then((function(e){var r;return t.loadErrorTime=null,"object"!==u(n=e)&&(r="does not export anything"),V(n.bootstrap)||(r="does not export a bootstrap function or array of functions"),V(n.mount)||(r="does not export a mount function or array of functions"),V(n.unmount)||(r="does not export an unmount function or array of functions"),r?(console.error("The loading function for single-spa application '".concat(t.name,"' resolved with the following, which does not have bootstrap, mount, and unmount functions"),n),v(r,t),t.status=D,t):(n.devtools&&n.devtools.overlays&&(t.devtools.overlays=s({},t.devtools.overlays,{},n.devtools.overlays)),t.status=E,t.bootstrap=z(n.bootstrap,"App '".concat(t.name,"' bootstrap function")),t.mount=z(n.mount,"App '".concat(t.name,"' mount function")),t.unmount=z(n.unmount,"App '".concat(t.name,"' unmount function")),t.unload=z(n.unload||[],"App '".concat(t.name,"' unload function")),t.timeouts=H(n.timeouts),t)}))})).catch((function(n){return v(n,t),n instanceof st?t.status=D:(t.status=x,t.loadErrorTime=(new Date).getTime()),t})));var n}))}var lt={hashchange:[],popstate:[]},pt=["hashchange","popstate"];function mt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error("singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag");n=t.currentTarget.href,t.preventDefault()}var r=Ot(window.location.href),o=Ot(n);if(0===n.indexOf("#"))window.location.hash="#"+o.anchor;else if(r.host!==o.host&&o.host){if(e.isTestingEnv)return{wouldHaveReloadedThePage:!0};window.location.href=n}else!function(t,n){return n===t||n==="/"+t}(o.path+"?"+o.query,r.path+"?"+r.query)?window.history.pushState(null,null,n):window.location.hash="#"+o.anchor}function ht(t){var n=this;if(t){var e=t[0].type;pt.indexOf(e)>=0&&lt[e].forEach((function(e){e.apply(n,t)}))}}function dt(){Ft([],arguments)}window.addEventListener("hashchange",dt),window.addEventListener("popstate",dt);var vt=window.addEventListener,wt=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&pt.indexOf(t)>=0)||Q(lt[t],(function(t){return t===n})))return vt.apply(this,arguments);lt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&pt.indexOf(t)>=0))return wt.apply(this,arguments);lt[t]=lt[t].filter((function(t){return t!==n}))};var gt=window.history.pushState;window.history.pushState=function(t){var n=gt.apply(this,arguments);return dt(bt(t)),n};var yt=window.history.replaceState;function bt(t){try{return new PopStateEvent("popstate",{state:t})}catch(e){var n=document.createEvent("PopStateEvent");return n.initPopStateEvent("popstate",!1,!1,t),n}}function Ot(t){for(var n={strictMode:!0,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},e=n.parser.strict.exec(t),r={},o=14;o--;)r[n.key[o]]=e[o]||"";return r[n.q.name]={},r[n.key[12]].replace(n.q.parser,(function(t,e,o){e&&(r[n.q.name][e]=o)})),r}window.history.replaceState=function(t){var n=yt.apply(this,arguments);return dt(bt(t)),n},window.singleSpaNavigate=mt;var Et=!1;function Pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!Et){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return Tt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return Tt.call(this,e,window.removeEventListener,t,n,arguments)},Et=!0}}function Tt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){pt.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))})),""===e.trim()?this:t.apply(this,o))}var jt={};function St(t){return Promise.resolve().then((function(){var n=jt[t.name];return n?t.status===b?(At(t,n),t):t.status===N?n.promise.then((function(){return t})):t.status!==T?t:(t.status=N,J(t.unload(ct(t)),"Unloading application '".concat(t.name,"'"),t.timeouts.unload).then((function(){return At(t,n),t})).catch((function(e){return function(t,n,e){delete jt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,v(e,t),t.status=D,n.reject(e)}(t,n,e),t}))):t}))}function At(t,n){delete jt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=b,n.resolve()}function _t(t,n,e,r){jt[t.name]={app:t,resolve:e,reject:r},Object.defineProperty(jt[t.name],"promise",{get:n})}var Nt=[];function xt(){return Nt.filter(C).map(G)}function Dt(){return Nt.map(G)}function Ct(t){var n=Q(Nt,(function(n){return n.name===t}));return n?n.status:null}function Ut(t,n,e){return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use "registerApplication" instead'),Lt(t,n,e)}function Lt(t,n,e){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("string"!=typeof t||0===t.length)throw Error("The first argument must be a non-empty string 'appName'");if(-1!==Dt().indexOf(t))throw Error("There is already an app declared with name ".concat(t));if("object"!==u(o)||Array.isArray(o))throw Error("customProps must be an object");if(!n)throw Error("The application or loading function is required");if(r="function"!=typeof n?function(){return Promise.resolve(n)}:n,"function"!=typeof e)throw Error("The activeWhen argument must be a function");Nt.push({loadErrorTime:null,name:t,loadImpl:r,activeWhen:e,status:b,parcels:{},devtools:{overlays:{options:{},selectors:[]}},customProps:o}),Pt(),Ft()}function Mt(t){for(var n=[],e=0;e<Nt.length;e++)Nt[e].activeWhen(t)&&n.push(Nt[e].name);return n}function Rt(){return Nt.filter(B).filter(k).filter(M).filter(R)}function It(t,n){return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use "unloadApplication" instead'),Bt(t,n)}function Bt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error("unloadApplication requires a string 'appName'");var e=Q(Nt,(function(n){return n.name===t}));if(!e)throw Error("Could not unload application '".concat(t,"' because no such application has been registered"));var r,o=function(t){return jt[t]}(e.name);if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){_t(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,kt(e,o.resolve,o.reject)):r=new Promise((function(t,n){_t(e,(function(){return r}),t,n),kt(e,t,n)})),r}function kt(t,n,e){Z(t).then(St).then((function(){n(),setTimeout((function(){Ft()}))})).catch(e)}var Gt=!1,qt=[];function Wt(){return Ft()}function Ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Gt)return new Promise((function(t,e){qt.push({resolve:t,reject:e,eventArguments:n})}));Gt=!0;var e=!0;return Kt?Promise.resolve().then((function(){window.dispatchEvent(new i("single-spa:before-routing-event",u()));var n=Object.keys(jt).map((function(t){return jt[t].app})).filter(U).map(St),a=Nt.filter(B).filter(C).filter(I).map(Z).map((function(t){return t.then(St)})).concat(n);a.length>0&&(e=!1);var c=Promise.all(a),s=Rt(),f=s.map((function(t){return ft(t).then(Y).then((function(t){return c.then((function(){return et(t)}))}))}));f.length>0&&(e=!1);var l=Nt.filter(B).filter(U).filter(L).filter(R).filter((function(t){return s.indexOf(t)<0})).map((function(t){return Y(t).then((function(){return c})).then((function(){return et(t)}))}));return l.length>0&&(e=!1),c.catch((function(t){throw o(),t})).then((function(){return o(),Promise.all(f.concat(l)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then((function(){return r(!1)}))}))})):Promise.resolve().then((function(){var t=Rt().map(ft);return t.length>0&&(e=!1),Promise.all(t).then(r).catch((function(t){throw o(),t}))}));function r(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=xt();n&&o(),t.forEach((function(t){return t.resolve(r)}));try{var a=e?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new i(a,u())),window.dispatchEvent(new i("single-spa:routing-event",u()))}catch(t){setTimeout((function(){throw t}))}if(Gt=!1,qt.length>0){var c=qt;qt=[],Ft(c)}return r}function o(){t.forEach((function(t){ht(t.eventArguments)})),ht(n)}function u(){var t={detail:{}};return n&&n[0]&&(t.detail.originalEvent=n[0]),t}}var Kt=!1;function $t(){Kt=!0,Ft()}setTimeout((function(){Kt||console.warn("singleSpa.start() has not been called, ".concat(5e3,"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start"))}),5e3);var Jt={getRawAppData:function(){return[].concat(Nt)},reroute:Ft,NOT_LOADED:b,toLoadPromise:ft,toBootstrapPromise:Y,unregisterApplication:function(t){if(!Nt.find((function(n){return n.name===t})))throw Error("Cannot unregister application '".concat(t,"' because no such application has been registered"));return Bt(t).then((function(){var n=Nt.findIndex((function(n){return n.name===t}));Nt.splice(n,1)}))}};window&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Jt)}).call(this,e(1))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n);var r=e(0);Object(r.b)("home",(function(){return Promise.all([e.e(0),e.e(2),e.e(3)]).then(e.bind(null,3))}),(function(){return""===location.pathname||"/"===location.pathname||location.pathname.startsWith("/home")})),Object(r.b)("navbar",(function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,4))}),(function(){return""===location.pathname||"/"===location.pathname||location.pathname.startsWith("/navbar")})),Object(r.c)()}]);
//# sourceMappingURL=single-spa.config.js.map