this.LP=this.LP||{},this.LP.modal=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=22)}({0:function(e,t){e.exports=window.wp.i18n},1:function(e,t){e.exports=window.wp.data},22:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"show",(function(){return f})),r.d(n,"hide",(function(){return p})),r.d(n,"confirm",(function(){return d}));var o={};r.r(o),r.d(o,"isOpen",(function(){return b})),r.d(o,"getMessage",(function(){return O})),r.d(o,"confirm",(function(){return m}));var c=r(1);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODAL":return u(u({},e),{},{isOpen:!0,message:t.message,cb:t.cb});case"HIDE_MODAL":return u(u({},e),{},{isOpen:!1,message:!1,cb:null});case"CONFIRM":return e.cb&&setTimeout((function(){e.cb()}),10),u(u({},e),{},{confirm:t.value})}return e};function f(e,t){return{type:"SHOW_MODAL",message:e,cb:t}}function p(){return{type:"HIDE_MODAL"}}function d(e){return{type:"CONFIRM",value:e}}function b(e){return e.isOpen}function O(e){return e.message}function m(e,t,r){var n=Object(c.dispatch)("learnpress/modal"),o=n.show,i=n.hide;return e.message?(i(),e.confirm):(o(t,r),"no")}var y=r(7),v=r.n(y),g={ENROLL_COURSE_X:function(e,t){}};var j=function(e){var t=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},r={getState:e.getState,dispatch:function(){return t.apply(void 0,arguments)}};return t=v()(g)(r)(e.dispatch),e.dispatch=t,e};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=LP.dataControls.controls,E=Object(c.registerStore)("learnpress/modal",{reducer:s,selectors:o,actions:n,controls:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},P)});j(E);var S=r(0),_=function(e){var t=e.children,r=Object(c.dispatch)("learnpress/modal"),n=(r.show,r.hide,r.confirm),o=Object(c.useSelect)((function(e){return e("learnpress/modal").isOpen()})),i=Object(c.useSelect)((function(e){return e("learnpress/modal").getMessage()})),u=function(e){return function(t){n(e)}},a={display:o?"block":"none"};return React.createElement(React.Fragment,null,React.createElement("div",null,React.createElement("div",{id:"lp-modal-overlay",style:a}),React.createElement("div",{id:"lp-modal-window",style:a},React.createElement("div",{id:"lp-modal-content",dangerouslySetInnerHTML:{__html:i}}),React.createElement("div",{id:"lp-modal-buttons"},React.createElement("button",{className:"lp-button modal-button-ok",onClick:u("yes")},React.createElement("span",null,Object(S.__)("OK","learnpress"))),React.createElement("button",{className:"lp-button modal-button-cancel",onClick:u("no")},React.createElement("span",null,Object(S.__)("Cancel","learnpress")))))),t)};t.default=_},7:function(e,t,r){"use strict";e.exports=function(e){var t,r={};return function e(t,r){var n;if(Array.isArray(r))for(n=0;n<r.length;n++)e(t,r[n]);else for(n in r)t[n]=(t[n]||[]).concat(r[n])}(r,e),(t=function(e){return function(t){return function(n){var o,c,i=r[n.type],u=t(n);if(i)for(o=0;o<i.length;o++)(c=i[o](n,e))&&e.dispatch(c);return u}}}).effects=r,t}}});