!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(){return function(){"use strict";var e={370:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.InfiniteScroll=void 0;const u=i(r(689));t.InfiniteScroll=e=>{const{enabled:t,threshold:r,observeIndex:n,itemParentType:o,onLoadMore:i,items:l}=e,c=null!=n&&n>=0&&n<l.length?n:l.length-1,f=(0,u.useRef)(null);return(0,u.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&"function"==typeof i&&t&&i()}),{threshold:null!=r?r:1});return f.current&&e.observe(f.current),()=>{e.disconnect()}}),[t,r,i,c]),u.default.createElement(u.default.Fragment,null,l.map(((e,t)=>(0,u.createElement)(o||"li",{key:e.key,ref:t===c?f:null},e))))}},689:function(e){e.exports=require("react")}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(370)}()}));