!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){var n=r(1),o=r(2);e.exports={loadingMiddleware:n,loadingReducer:o}},function(e,t){function r(e,t,r,n,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}e.exports=function(e){var t=e.dispatch,n=e.getState;return function(e){return function(){var o,u=(o=regeneratorRuntime.mark((function r(o){var u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("function"!=typeof o||!o.type){r.next=8;break}return t({type:"start/".concat(o.type)}),r.next=5,o(t,n);case 5:return u=r.sent,t({type:"end/".concat(o.type)}),r.abrupt("return",u);case 8:return r.abrupt("return",e(o));case 9:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(n,u){var i=o.apply(e,t);function c(e){r(i,n,u,c,a,"next",e)}function a(e){r(i,n,u,c,a,"throw",e)}c(void 0)}))});return function(e){return u.apply(this,arguments)}}()}}},function(e,t){function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={};e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,r=t.type;if("start/"===r.substring(0,6))return n(n({},e),{},o({},r.substring(6),!0));if("end/"===r.substring(0,4)){var i=Object.assign({},e);return delete i[r.substring(4)],i}return e}}]);