(self["webpackChunkwly_ui"]=self["webpackChunkwly_ui"]||[]).push([[302],{6507:function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=t},1364:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}e.exports=r},9332:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(7294)),o=r(4348);function u(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e){return e.offsetTop+(e.offsetParent?i(e.offsetParent):0)}var c=function e(t){var r,u=(null===(r=t.to.match(/(#.+)$/))||void 0===r?void 0:r[1])||"";return n.default.createElement(o.NavLink,a({},t,{onClick:function(){return e.scrollToAnchor(u.substring(1))},isActive:function(e,t){return u&&decodeURIComponent(t.hash)===u}}))};c.scrollToAnchor=function(e){window.requestAnimationFrame((function(){var t=document.getElementById(decodeURIComponent(e));t&&window.scrollTo(0,i(t)-100)}))};var l=c;t.default=l},2239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LinkWrapper=void 0;var n=a(r(7294)),o=r(4348),u=["to"];function a(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=l(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var f=function(e){return function(t){var r=t.to,o=c(t,u),a=/^(\w+:)?\/\//.test(r)||!r,l=n.default.isValidElement(o.children);return n.default.createElement(e,i({to:r||"",component:a?function(){return n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r},o.children,r&&!l&&n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.default.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.default.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))}:void 0},o,a?{}:{onClick:function(){var e;window.scrollTo({top:0});for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];null===(e=o.onClick)||void 0===e||e.apply(this,r)}}))}};t.LinkWrapper=f;var s=f(o.Link);t.default=s},2469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(4348),o=r(2239),u=(0,o.LinkWrapper)(n.NavLink);t.default=u},6433:function(e,t,r){"use strict";function n(){var e=o(r(7294));return n=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n().default.createContext({config:{mode:"doc",title:"",navs:{},menus:{},locales:[],repository:{branch:"master"},theme:{}},meta:{title:""},menu:[],nav:[],base:"",routes:[]});t.default=u},9724:function(e,t,r){"use strict";var n=r(6933);function o(){var e=l(r(7294));return o=function(){return e},e}function u(){var e=i(r(2022));return u=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(6433));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function l(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function f(e,t){return v(e)||y(e,t)||p(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){if(e){if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function v(e){if(Array.isArray(e))return e}function m(e,t,r){return Object.entries(u().default[e]).reduce((function(e,o){var u=n(o,2),a=u[0],i=u[1];return e[a]=i.map((function(e){var n=Object.assign({},e);return Object.keys(e).forEach((function(e){if(/^description(\.|$)/.test(e)){var o=e.match(/^description\.?(.*)$/),u=f(o,2),a=u[1];a&&a!==t||!a&&!r?delete n[e]:n.description=n[e]}})),n})),e}),{})}var h=function(e){var t=(0,o().useContext)(a.default),r=t.locale,n=t.config.locales,u=!n.length||n[0].name===r,i=(0,o().useState)(m(e,r,u)),c=f(i,2),l=c[0],s=c[1];return(0,o().useEffect)((function(){s(m(e,r,u))}),[e,r,u]),l};t.default=h},3749:function(e,t,r){"use strict";var n=r(6933);function o(){var e=c(r(7294));return o=function(){return e},e}function u(){var e=a(r(2477));return u=function(){return e},e}function a(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function l(e,t){return y(e)||d(e,t)||s(e,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function y(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v="https://codesandbox.io/api/v1/sandboxes/define";function m(e){return u().default.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function h(e){var t=document.createElement("span");t.innerHTML=e;var r=t.textContent;return t.remove(),r}function b(e){var t=Boolean(e.sources._.tsx),r=t?".tsx":".jsx",o={},u={},a=Object.values(e.dependencies).filter((function(e){return e.css})),i="App".concat(r),c="index".concat(r);return Object.entries(e.dependencies).forEach((function(e){var t=n(e,2),r=t[0],o=t[1].version;u[r]=o})),u["react-dom"]||(u["react-dom"]=u.react||"latest"),o["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},o["package.json"]={content:JSON.stringify({name:e.title,description:h(e.description)||"An auto-generated demo by dumi",main:c,dependencies:u,devDependencies:t?{typescript:"^3"}:{}},null,2)},o["index.html"]={content:'<div style="margin: 16px;" id="root"></div>'},o[c]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(a.map((function(e){var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './App';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")},Object.entries(e.sources).forEach((function(e){var t=n(e,2),r=t[0],u=t[1],a=u.tsx,c=u.jsx,l=u.content;o["_"===r?i:r]={content:a||c||l}})),m({files:o})}var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,r=(0,o().useState)(),n=l(r,2),u=n[0],a=n[1];return(0,o().useEffect)((function(){if(e){var r=document.createElement("form"),n=document.createElement("input"),o=b(e);return r.method="POST",r.target="_blank",r.style.display="none",r.action=t,r.appendChild(n),r.setAttribute("data-demo",e.title||""),n.name="parameters",n.value=o,document.body.appendChild(r),a((function(){return function(){return r.submit()}})),function(){return r.remove()}}}),[e]),u};t.default=g},5649:function(e,t,r){"use strict";function n(){var e=i(r(7294));return n=function(){return e},e}function o(){var e=u(r(1342));return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function c(e,t){return d(e)||p(e,t)||f(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function d(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var y=function(){var e=(0,n().useState)(),t=c(e,2),r=t[0],u=t[1],a=(0,n().useState)("ready"),i=c(a,2),l=i[0],f=i[1],s=(0,n().useCallback)((function(e){(0,o().default)(e),f("copied"),clearTimeout(r),u(setTimeout((function(){f("ready")}),2e3))}),[]);return[s,l]};t.default=y},5284:function(e,t,r){"use strict";function n(){var e=u(r(7294));return n=function(){return e},e}function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=u?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}function a(e,t){return s(e)||f(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function s(e){if(Array.isArray(e))return e}function p(){return"BASEMENT"==={NODE_ENV:"production"}.PLATFORM_TYPE}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getDemoUrl=t.getDemoRouteName=void 0;var d=function(){return p()?"_demos":"~demos"};t.getDemoRouteName=d;var y=function(e){var t,r=window,n=r.location,o=n.href,u=n.origin,i=o.split(/#\//),c=a(i,2),l=c[0],f=c[1],s="string"===typeof f;return[s?"".concat(l,"#"):u,"".concat((null===(t=window)||void 0===t?void 0:t.routerBase)||"","/").replace(/\/\/$/,"/"),d(),"/",e,p()?"/index.html":""].join("")};t.getDemoUrl=y;var v=function(e){var t=(0,n().useState)(""),r=a(t,2),o=r[0],u=r[1];return(0,n().useEffect)((function(){u(y(e))}),[e]),o};t.default=v},107:function(e,t,r){"use strict";function n(){var e=u(r(7294));return n=function(){return e},e}function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=u?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}function a(e,t){return s(e)||f(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function s(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=function(e,t){var r=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n={};return Object.keys(t[1]).forEach((function(e){var r=(e.match(/^(.+)\.([^_]+)$/)||[]).slice(1),o=a(r,2),u=o[0],i=o[1];i&&i!==t[0]||(n[u||e]=t[1][e])})),n},o=(0,n().useState)(r(e,t)),u=a(o,2),i=u[0],c=u[1];return(0,n().useEffect)((function(){c(r(e,t))}),[e,t]),i};t.default=p},9897:function(e,t,r){"use strict";function n(){var e=u(r(7294));return n=function(){return e},e}function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=u?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}function a(e,t){return s(e)||f(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function s(e){if(Array.isArray(e))return e}function p(e,t,r){var n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(o<t.length){var u=t[o],i=function(){return p(e,t,r,o+1)},c=u.match(/^([^:]+):?(.*)$/)||[],l=a(c,3),f=l[1],s=l[2];switch(f){case"autoplay":i();break;case"click":var d=s.match(/^(global\()?(.+?)\)?$/)||[],y=a(d,3),v=y[1],m=y[2],h=v?document:e;null===(n=h.querySelector(m))||void 0===n||n.click(),i();break;case"timeout":setTimeout(i,Number(s));break;case"capture":window.postMessage({type:"dumi:capture-element",value:s},"*"),i();break;default:console.warn("[dumi: motion] unknown motion '".concat(u,"', skip.")),i()}}else r()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e,t){var r=(0,n().useState)(!1),o=a(r,2),u=o[0],i=o[1],c=(0,n().useCallback)((function(){u||(p(t,e,(function(){i(!1)})),i(!0))}),[e,t,u]);return(0,n().useEffect)((function(){"autoplay"===e[0]&&t&&c()}),[e,t]),[c,u]};t.default=d},4918:function(e,t,r){"use strict";var n=r(6507),o=r(1364);function u(){var e=i(r(7294));return u=function(){return e},e}function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function c(e,t){return d(e)||p(e,t)||f(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function d(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var y,v="data-prefers-color",m="dumi:prefers-color",h=function(){function e(){var t=this;n(this,e),this.color=void 0,this.callbacks=[],this.color=localStorage.getItem(m)||document.documentElement.getAttribute(v),["light","dark"].forEach((function(e){var r=t.getColorMedia(e),n=function(r){r.matches&&"auto"===t.color&&(document.documentElement.setAttribute(v,e),t.applyCallbacks())};r.addEventListener?r.addEventListener("change",n):r.addListener&&r.addListener(n)}))}return o(e,[{key:"getColorMedia",value:function(e){return window.matchMedia("(prefers-color-scheme: ".concat(e,")"))}},{key:"isColorMode",value:function(e){return this.getColorMedia(e).matches}},{key:"applyCallbacks",value:function(){var e=this;this.callbacks.forEach((function(t){return t(e.color)}))}},{key:"listen",value:function(e){this.callbacks.push(e)}},{key:"unlisten",value:function(e){this.callbacks.splice(this.callbacks.indexOf(e),1)}},{key:"set",value:function(e){return this.color=e,localStorage.setItem(m,e),this.applyCallbacks(),"auto"===e?document.documentElement.setAttribute(v,this.isColorMode("dark")?"dark":"light"):document.documentElement.setAttribute(v,e),e}}]),e}(),b=function(){var e=(0,u().useState)(),t=c(e,2),r=t[0],n=t[1],o=(0,u().useCallback)((function(e){y.set(e)}),[]);return(0,u().useEffect)((function(){return y=y||new h,y.listen(n),n(y.color),function(){return y.unlisten(n)}}),[]),[r,o]};t.default=b},4759:function(e,t,r){"use strict";var n=r(6933);function o(){var e=a(r(7294));return o=function(){return e},e}function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function a(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}function i(e,t){return p(e)||s(e,t)||l(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function p(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d,y="https://riddle.alibaba-inc.com/riddles/define",v=function(){var e=(0,o().useState)(Boolean(d)),t=i(e,2),r=t[0],n=t[1];return(0,o().useEffect)((function(){if(void 0===d){var e=document.createElement("img");setTimeout((function(){e.src="",e.remove()}),200),e.onload=function(){d=!0,n(!0),e.remove()},e.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png"}}),[]),r};function m(e){var t,r=e.dependencies,n=e.sources._.tsx||e.sources._.jsx;return n=n.replace(/^/,"import ReactDOM from 'react-dom@".concat((null===(t=r.react)||void 0===t?void 0:t.version)||"latest","';\n")).replace("export default","const DumiDemo =").concat("\nReactDOM.render(<DumiDemo />, mountNode);"),n=n.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g,(function(e,t,n){var o="".concat(t).concat(n);return r[n]&&(o+="@".concat(r[n].version)),o})),n}var h=function(e){var t=(0,o().useState)(),r=i(t,2),u=r[0],a=r[1],c=v();return(0,o().useEffect)((function(){if(e&&c&&1===Object.keys(e.sources).length){var t=document.createElement("form"),r=document.createElement("input");return t.method="POST",t.target="_blank",t.style.display="none",t.action=y,t.appendChild(r),t.setAttribute("data-demo",e.title||""),r.name="data",r.value=JSON.stringify({title:e.titlle,js:m(e),css:Object.entries(e.dependencies).filter((function(e){var t=n(e,2),r=t[1];return r.css})).map((function(e){var t=n(e,2),r=t[0],o=t[1],u=o.version,a=o.css;return"@import '~".concat(a.replace(new RegExp("^(".concat(r,")")),"$1@".concat(u)),"';")})).join("\n")}),document.body.appendChild(t),a((function(){return function(){return t.submit()}})),function(){return t.remove()}}}),[e,c]),u};t.default=h},7148:function(e,t,r){"use strict";var n=r(352);function o(){var e=i(r(7294));return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(6089);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return m(e)||v(e,t)||d(e,t)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function m(e){if(Array.isArray(e))return e}var h=function(e){var t=(0,o().useContext)(u.context),r=t.locale,a=t.routes,i=t.config.locales,c=(0,o().useState)([]),l=s(c,2),f=l[0],p=l[1],d=(0,o().useState)([]),y=s(d,2),v=y[0],m=y[1];return(0,o().useEffect)((function(){p(a.filter((function(e){var t=e.title,n=e.meta,o=(null===n||void 0===n?void 0:n.locale)===r,u=(null===n||void 0===n?void 0:n.locale)===i[0].name||!(null===n||void 0===n?void 0:n.locale)&&(!i.length||r===i[0].name);return t&&(u||o)})).reduce((function(e,t){var r,o,u={title:t.title,path:t.path};return(null===(r=t.meta)||void 0===r?void 0:r.group)&&(u.parent=t.meta.group),e.push(u),e.push.apply(e,n(((null===(o=t.meta)||void 0===o?void 0:o.slugs)||[]).filter((function(e){var r=e.value;return r!==t.title})).map((function(e){return{title:e.value,path:"".concat(t.path,"#").concat(e.heading),parent:u}})))),e}),[]))}),[a.length,r]),(0,o().useEffect)((function(){var t=null===e||void 0===e?void 0:e.trim().toUpperCase();if(t){for(var r=[],n=0;n<f.length;n+=1)f[n].title.toUpperCase().indexOf(t)>-1&&r.push(f[n]);m(r)}else m([])}),[e,f.length]),v},b=function(){var e=(0,o().useContext)(u.context),t=e.config.algolia,r=(0,o().useCallback)((function(e){window.docsearch(l({inputSelector:e},t))}),[t]);return r},g=function(e){var t=(0,o().useContext)(u.context),r=t.config,n=h(e),a=b();return r.algolia?a:n};t.default=g},8104:function(e,t,r){"use strict";function n(){var e=i(r(7294));return n=function(){return e},e}function o(){var e=u(r(2477));return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function c(e,t){return d(e)||p(e,t)||f(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function d(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var y={"zh-CN":"https://www.typescriptlang.org/zh/play","en-US":"https://www.typescriptlang.org/play"},v=function(e,t){var r=function(){var e=/^zh|cn$/.test(arguments.length<=0?void 0:arguments[0])?y["zh-CN"]:y["en-US"];return"".concat(e,"?skipLibCheck=true&jsx=1#code/").concat(o().default.compressToEncodedURIComponent(arguments.length<=1?void 0:arguments[1]))},u=(0,n().useState)(r(e,t)),a=c(u,2),i=a[0],l=a[1];return(0,n().useEffect)((function(){l(r(e,t))}),[e,t]),i};t.default=v},6089:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"context",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"NavLink",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"useSearch",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"useCopy",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"useRiddle",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"useMotions",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"useCodeSandbox",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"useLocaleProps",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"useDemoUrl",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"useApiData",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"useTSPlaygroundUrl",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"usePrefersColor",{enumerable:!0,get:function(){return m.default}});var n=h(r(6433)),o=h(r(2239)),u=h(r(2469)),a=h(r(9332)),i=h(r(7148)),c=h(r(5649)),l=h(r(4759)),f=h(r(9897)),s=h(r(3749)),p=h(r(107)),d=h(r(5284)),y=h(r(9724)),v=h(r(8104)),m=h(r(4918));function h(e){return e&&e.__esModule?e:{default:e}}},1342:function(e){"use strict";var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.target,n=void 0===r?document.body:r,o=document.createElement("textarea"),u=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var a=document.getSelection(),i=!1;a.rangeCount>0&&(i=a.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}return o.remove(),i&&(a.removeAllRanges(),a.addRange(i)),u&&u.focus(),c};e.exports=t,e.exports.default=t},2477:function(e,t,r){var n,o=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(e,t){if(!n[e]){n[e]={};for(var r=0;r<e.length;r++)n[e][e.charAt(r)]=r}return n[e][t]}var u={compressToBase64:function(e){if(null==e)return"";var r=u._compress(e,6,(function(e){return t.charAt(e)}));switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:u._decompress(e.length,32,(function(r){return o(t,e.charAt(r))}))},compressToUTF16:function(t){return null==t?"":u._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:u._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=u.compress(e),r=new Uint8Array(2*t.length),n=0,o=t.length;n<o;n++){var a=t.charCodeAt(n);r[2*n]=a>>>8,r[2*n+1]=a%256}return r},decompressFromUint8Array:function(t){if(null===t||void 0===t)return u.decompress(t);for(var r=new Array(t.length/2),n=0,o=r.length;n<o;n++)r[n]=256*t[2*n]+t[2*n+1];var a=[];return r.forEach((function(t){a.push(e(t))})),u.decompress(a.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":u._compress(e,6,(function(e){return r.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),u._decompress(e.length,32,(function(t){return o(r,e.charAt(t))})))},compress:function(t){return u._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,r){if(null==e)return"";var n,o,u,a={},i={},c="",l="",f="",s=2,p=3,d=2,y=[],v=0,m=0;for(u=0;u<e.length;u+=1)if(c=e.charAt(u),Object.prototype.hasOwnProperty.call(a,c)||(a[c]=p++,i[c]=!0),l=f+c,Object.prototype.hasOwnProperty.call(a,l))f=l;else{if(Object.prototype.hasOwnProperty.call(i,f)){if(f.charCodeAt(0)<256){for(n=0;n<d;n++)v<<=1,m==t-1?(m=0,y.push(r(v)),v=0):m++;for(o=f.charCodeAt(0),n=0;n<8;n++)v=v<<1|1&o,m==t-1?(m=0,y.push(r(v)),v=0):m++,o>>=1}else{for(o=1,n=0;n<d;n++)v=v<<1|o,m==t-1?(m=0,y.push(r(v)),v=0):m++,o=0;for(o=f.charCodeAt(0),n=0;n<16;n++)v=v<<1|1&o,m==t-1?(m=0,y.push(r(v)),v=0):m++,o>>=1}s--,0==s&&(s=Math.pow(2,d),d++),delete i[f]}else for(o=a[f],n=0;n<d;n++)v=v<<1|1&o,m==t-1?(m=0,y.push(r(v)),v=0):m++,o>>=1;s--,0==s&&(s=Math.pow(2,d),d++),a[l]=p++,f=String(c)}if(""!==f){if(Object.prototype.hasOwnProperty.call(i,f)){if(f.charCodeAt(0)<256){for(n=0;n<d;n++)v<<=1,m==t-1?(m=0,y.push(r(v)),v=0):m++;for(o=f.charCodeAt(0),n=0;n<8;n++)v=v<<1|1&o,m==t-1?(m=0,y.push(r(v)),v=0):m++,o>>=1}else{for(o=1,n=0;n<d;n++)v=v<<1|o,m==t-1?(m=0,y.push(r(v)),v=0):m++,o=0;for(o=f.charCodeAt(0),n=0;n<16;n++)v=v<<1|1&o,m==t-1?(m=0,y.push(r(v)),v=0):m++,o>>=1}s--,0==s&&(s=Math.pow(2,d),d++),delete i[f]}else for(o=a[f],n=0;n<d;n++)v=v<<1|1&o,m==t-1?(m=0,y.push(r(v)),v=0):m++,o>>=1;s--,0==s&&(s=Math.pow(2,d),d++)}for(o=2,n=0;n<d;n++)v=v<<1|1&o,m==t-1?(m=0,y.push(r(v)),v=0):m++,o>>=1;while(1){if(v<<=1,m==t-1){y.push(r(v));break}m++}return y.join("")},decompress:function(e){return null==e?"":""==e?null:u._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,r,n){var o,u,a,i,c,l,f,s=[],p=4,d=4,y=3,v="",m=[],h={val:n(0),position:r,index:1};for(o=0;o<3;o+=1)s[o]=o;a=0,c=Math.pow(2,2),l=1;while(l!=c)i=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),a|=(i>0?1:0)*l,l<<=1;switch(a){case 0:a=0,c=Math.pow(2,8),l=1;while(l!=c)i=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),a|=(i>0?1:0)*l,l<<=1;f=e(a);break;case 1:a=0,c=Math.pow(2,16),l=1;while(l!=c)i=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),a|=(i>0?1:0)*l,l<<=1;f=e(a);break;case 2:return""}s[3]=f,u=f,m.push(f);while(1){if(h.index>t)return"";a=0,c=Math.pow(2,y),l=1;while(l!=c)i=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),a|=(i>0?1:0)*l,l<<=1;switch(f=a){case 0:a=0,c=Math.pow(2,8),l=1;while(l!=c)i=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),a|=(i>0?1:0)*l,l<<=1;s[d++]=e(a),f=d-1,p--;break;case 1:a=0,c=Math.pow(2,16),l=1;while(l!=c)i=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),a|=(i>0?1:0)*l,l<<=1;s[d++]=e(a),f=d-1,p--;break;case 2:return m.join("")}if(0==p&&(p=Math.pow(2,y),y++),s[f])v=s[f];else{if(f!==d)return null;v=u+u.charAt(0)}m.push(v),s[d++]=u+v.charAt(0),p--,u=v,0==p&&(p=Math.pow(2,y),y++)}}};return u}();n=function(){return o}.call(t,r,t,e),void 0===n||(e.exports=n)}}]);