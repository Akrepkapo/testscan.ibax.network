function n(o){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(o)}function o(o,r){if(!o.vueAxiosInstalled){var u=i(r)?function(n){return{axios:n,$http:n}}(r):r;if(function(o){return"object"===n(o)&&Object.keys(o).every((function(n){return i(o[n])}))}(u)){var f=function(n){return n&&n.version&&Number(n.version.split(".")[0])}(o);if(f){var c=f<3?e:t;Object.keys(u).forEach((function(n){c(o,n,u[n])})),o.vueAxiosInstalled=!0}}}}function e(n,o,e){Object.defineProperty(n.prototype,o,{get:function(){return e}}),n[o]=e}function t(n,o,e){n.config.globalProperties[o]=e,n[o]=e}function i(n){return n&&"function"==typeof n.get&&"function"==typeof n.post}"object"==("undefined"==typeof exports?"undefined":n(exports))?module.exports=o:"function"==typeof define&&define.amd?define([],(function(){return o})):window.Vue&&window.axios&&window.Vue.use&&Vue.use(o,window.axios);export{o as p};
