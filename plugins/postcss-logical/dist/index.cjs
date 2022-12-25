"use strict";var e,n=require("postcss-value-parser");function hasKeyframesAtRuleAncestor(e){let n=e.parent;for(;n;)if("atrule"===n.type){if("keyframes"===e.parent.name.toLowerCase())return!0;n=n.parent}else n=n.parent;return!1}function cloneDeclaration(e,n,t){return e.cloneBefore({value:n,prop:t})}function transformSide(e,n){return t=>{cloneDeclaration(t,t.value,`${e}-${n}`)}}function transformSideShorthand(e,t){return o=>{const r=n(o.value).nodes.filter((e=>"space"!==e.type));if(r.length>2){const e=`[postcss-logical] Invalid number of values for ${o.prop}. Found ${r.length} values, expected 1 or 2.`;throw new Error(e)}const[i,a]=t;let s,l;1===r.length&&(s=r[0].value,l=r[0].value),2===r.length&&(s=r[0].value,l=r[1].value),cloneDeclaration(o,s,`${e}-${i}`),cloneDeclaration(o,l,`${e}-${a}`)}}!function(e){e.TopToBottom="top-to-bottom",e.BottomToTop="bottom-to-top",e.RightToLeft="right-to-left",e.LeftToRight="left-to-right"}(e||(e={}));const t=["top","right","bottom","left"],creator=n=>{const o=Object.assign({preserve:!1,blockDirection:e.TopToBottom,inlineDirection:e.LeftToRight},n),r=Object.values(e);if(!r.includes(o.blockDirection))throw new Error(`[postcss-logical] "blockDirection" must be one of ${r.join(", ")}`);if(!r.includes(o.inlineDirection))throw new Error(`[postcss-logical] "inlineDirection" must be one of ${r.join(", ")}`);const[i,a]=o.blockDirection.split("-to-"),[s,l]=o.inlineDirection.split("-to-");if(!t.every((e=>[i,a,s,l].includes(e))))throw new Error('[postcss-logical] "blockDirection" and "inlineDirection" must be on separate axes');const makeTransform=e=>(n,{result:t})=>{if(hasKeyframesAtRuleAncestor(n))return;const r=n.parent;let i=!1;try{e(n),i=!0}catch(e){n.warn(t,e.message)}i&&(o.preserve||n.remove(),r.nodes.length||r.remove())};return{postcssPlugin:"postcss-logical",Declaration:{"margin-block-start":makeTransform(transformSide("margin",i)),"margin-block-end":makeTransform(transformSide("margin",a)),"margin-inline-start":makeTransform(transformSide("margin",s)),"margin-inline-end":makeTransform(transformSide("margin",l)),"margin-block":makeTransform(transformSideShorthand("margin",[i,a])),"margin-inline":makeTransform(transformSideShorthand("margin",[s,l])),"padding-block-start":makeTransform(transformSide("padding",i)),"padding-block-end":makeTransform(transformSide("padding",a)),"padding-inline-start":makeTransform(transformSide("padding",s)),"padding-inline-end":makeTransform(transformSide("padding",l)),"padding-block":makeTransform(transformSideShorthand("padding",[i,a])),"padding-inline":makeTransform(transformSideShorthand("padding",[s,l]))}}};creator.postcss=!0,module.exports=creator;
