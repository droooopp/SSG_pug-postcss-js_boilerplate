(window["SSG_pug-postcss-js_boilerplate"]=window["SSG_pug-postcss-js_boilerplate"]||[]).push([[4],{318:function(t,o,e){"use strict";e.r(o),e.d(o,"pagetop",(function(){return i}));var n=e(322),i=function(t){window.addEventListener("scroll",Object(n.throttle)(200,(function(){!function(t){(document.documentElement.scrollTop||document.body.scrollTop)>100?t.setAttribute("data-pagetop-is-active",!0):t.setAttribute("data-pagetop-is-active",!1)}(t)})))}},322:function(t,o,e){!function(t){"use strict";function o(t,o,e,n){var i,c=!1,u=0;function r(){i&&clearTimeout(i)}function a(){for(var a=arguments.length,s=new Array(a),d=0;d<a;d++)s[d]=arguments[d];var l=this,p=Date.now()-u;function f(){u=Date.now(),e.apply(l,s)}function v(){i=void 0}c||(n&&!i&&f(),r(),void 0===n&&p>t?f():!0!==o&&(i=setTimeout(n?v:f,void 0===n?t-p:t)))}return"boolean"!=typeof o&&(n=e,e=o,o=void 0),a.cancel=function(){r(),c=!0},a}t.debounce=function(t,e,n){return void 0===n?o(t,e,!1):o(t,n,!1!==e)},t.throttle=o,Object.defineProperty(t,"__esModule",{value:!0})}(o)}}]);