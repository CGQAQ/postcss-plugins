"use strict";const e=e=>{const r=Object.assign({color:null,preserve:!1},e);return{postcssPlugin:"postcss-base-plugin",Declaration(e){if("red"===e.value){let o="blue";if(r.color&&(o=r.color),o===e.value)return;if(e.cloneBefore({prop:"color",value:o}),r.preserve)return;e.remove()}}}};e.postcss=!0,module.exports=e;