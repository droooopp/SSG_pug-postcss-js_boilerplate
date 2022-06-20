(window["SSG_pug-postcss-js_boilerplate"]=window["SSG_pug-postcss-js_boilerplate"]||[]).push([[2],{315:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(320),i=e(325),o=e.n(i),l=e(322);function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,i,o=[],l=!0,s=!1;try{for(e=e.call(t);!(l=(r=e.next()).done)&&(o.push(r.value),!n||o.length!==n);l=!0);}catch(t){s=!0,i=t}finally{try{l||null==e.return||e.return()}finally{if(s)throw i}}return o}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=n,this.innerEl=this.el.querySelector(".js-fr-fixedAnchor_inner"),this.item=this.el.querySelectorAll(".js-fr-fixedAnchor_item"),this.itemLength=this.item.length,this.changeItemNumber=5,this.isHorizontalScroll=this.item.length>this.changeItemNumber,this.init()}var n,e,i;return n=t,(e=[{key:"init",value:function(){this.attachEventScroll(),o()().add(this.el),this.isHorizontalScroll&&(this.el.classList.add("-horizontalScroll"),this.createMovingButtons(),this.attachEventMovingButtonsScroll(),this.attachEventMovingButtonsClick()),this.el.classList.remove("-loading")}},{key:"configSetting",value:function(t){var n=JSON.parse(this.el.dataset.config);for(var e in n){var r=document.querySelector(e).getBoundingClientRect().top;r&&(n[e]=Math.floor(t+r))}return n}},{key:"configArray",value:function(t){return Object.entries(t).map((function(t){var n=s(t,2);return{class_name:n[0],value:n[1]}}))}},{key:"fixedAnchorPoint",value:function(t,n){var e=-1,r=[];for(var i in t)r.push(t[i]);for(var o=0;o<r.length;o++)n>=r[o]&&e++;return e}},{key:"currentLocationDisplay",value:function(){for(var t=document.documentElement.scrollTop||document.body.scrollTop,n=this.configSetting(t),e=this.configArray(n),r=this.fixedAnchorPoint(n,t),i=0;i<e.length;i++){var o=document.querySelector('[data-link="'.concat(e[i].class_name,'"]')),l=e.length-1;if(i===r&&i!==l){if(o&&!o.classList.contains("-current")){o.classList.add("-current");var s=o.getBoundingClientRect().left-(window.innerWidth-this.el.clientWidth)/2+this.innerEl.scrollLeft;this.innerEl.scrollLeft=s,this.movingButtons()}}else o&&o.classList.contains("-current")&&o.classList.remove("-current")}}},{key:"isActive",value:function(){var t=this.el,n=t.getBoundingClientRect().top;-1!==n||t.classList.contains("-isActive")?-1!==n&&t.classList.contains("-isActive")&&t.classList.remove("-isActive"):t.classList.add("-isActive")}},{key:"createMovingButtons",value:function(){this.el.insertAdjacentHTML("beforeend",'<button class="fr-fixedAnchor_movingButton -prev js-fr-fixedAnchor_movingButton"></button><button class="fr-fixedAnchor_movingButton -next js-fr-fixedAnchor_movingButton"></button>')}},{key:"movingButtons",value:function(){var t=this.innerEl.scrollLeft,n=this.innerEl.scrollWidth,e=this.el.clientWidth;0<t?this.el.classList.add("-isActiveMovingButtonPrev"):this.el.classList.remove("-isActiveMovingButtonPrev"),t<n-e?this.el.classList.add("-isActiveMovingButtonNext"):this.el.classList.remove("-isActiveMovingButtonNext")}},{key:"movingButtonsClick",value:function(t){var n=t.currentTarget;n.classList.contains("-prev")?this.innerEl.scrollTo({top:0,left:0,behavior:"smooth"}):n.classList.contains("-next")&&this.innerEl.scrollTo({top:0,left:this.innerEl.scrollWidth,behavior:"smooth"})}},{key:"attachEventScroll",value:function(){var t=this;window.addEventListener("scroll",Object(l.throttle)(150,(function(){t.isActive(),t.currentLocationDisplay()})))}},{key:"attachEventMovingButtonsScroll",value:function(){var t=this;this.innerEl.addEventListener("scroll",Object(l.throttle)(150,(function(){t.movingButtons()})))}},{key:"attachEventMovingButtonsClick",value:function(){var t=this,n=document.querySelectorAll(".js-fr-fixedAnchor_movingButton");Object(r.a)({el:n,ev:"click",func:function(n){t.movingButtonsClick(n)}})}}])&&a(n.prototype,e),i&&a(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}()},320:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(321);function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){c=!0,l=t},f:function(){try{s||null==e.return||e.return()}finally{if(c)throw l}}}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var o=function(t){var n=t.el,e=t.ev,i=t.func;if(n&&n.length&&n!==window){var o,l=r(n);try{for(l.s();!(o=l.n()).done;){o.value.addEventListener(e,i,!1)}}catch(t){l.e(t)}finally{l.f()}}else n.addEventListener(e,i,!1)}}}]);