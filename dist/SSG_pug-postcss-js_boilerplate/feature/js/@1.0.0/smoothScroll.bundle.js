(window["SSG_pug-postcss-js_boilerplate"]=window["SSG_pug-postcss-js_boilerplate"]||[]).push([[6],{314:function(t,n,r){"use strict";r.r(n),r.d(n,"smoothScroll",(function(){return i}));var e=r(320),o=r(324);r.n(o).a.polyfill();var i=function(t){Object(e.a)({el:t,ev:"click",func:function(t){!function(t){t.preventDefault();var n=t.currentTarget.dataset.link,r=document.querySelector(n);if(r){var e=r.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:e,behavior:"smooth"})}}(t)}})}},320:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));r(321);function e(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var i=function(t){var n=t.el,r=t.ev,o=t.func;if(n&&n.length&&n!==window){var i,a=e(n);try{for(a.s();!(i=a.n()).done;){i.value.addEventListener(r,o,!1)}}catch(t){a.e(t)}finally{a.f()}}else n.addEventListener(r,o,!1)}}}]);