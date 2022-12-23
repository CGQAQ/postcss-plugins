"use strict";var e=require("@csstools/cascade-layer-name-parser"),r=require("@csstools/css-tokenizer"),t=require("@csstools/media-query-list-parser");const n=e.parse("csstools-implicit-layer")[0];function collectCascadeLayerOrder(r){const t=new Map,o=new Map,a=[];r.walkAtRules((r=>{var s;if("layer"!==r.name.toLowerCase())return;{let e=r.parent;for(;e;){if("atrule"!==e.type||"layer"!==e.name.toLowerCase()){if(e===r.root())break;return}e=e.parent}}let i;if(r.nodes)i=normalizeLayerName(r.params,1);else{if(!r.params.trim())return;i=r.params}let l=e.parse(i);if(null!=(s=l)&&s.length){{let e=r.parent;for(;e&&"atrule"===e.type&&"layer"===e.name.toLowerCase();){const r=o.get(e);r?(l=l.map((e=>r.concat(e))),e=e.parent):e=e.parent}}if(e.addLayerToModel(a,l),r.nodes){const e=l[0].concat(n);t.set(r,e),o.set(r,l[0])}}}));for(const r of t.values())e.addLayerToModel(a,[r]);const s=new WeakMap;for(const[e,r]of t)s.set(e,a.findIndex((e=>r.equal(e))));return s}function normalizeLayerName(e,r){return e.trim()?e:"csstools-anon-layer--"+r++}const o=new Set(["scope","container","layer"]);function isProcessableCustomMediaRule(e){if("custom-media"!==e.name.toLowerCase())return!1;if(!e.params||!e.params.includes("--"))return!1;if(e.nodes&&e.nodes.length>0)return!1;let r=e.parent;for(;r;){if("atrule"===r.type&&!o.has(r.name.toLowerCase()))return!1;r=r.parent}return!0}function removeCyclicReferences(e,r){const t=new Set;let n=r;for(;e.size>0;)try{toposort(Array.from(e.keys()),n);break}catch(r){if(!r._graphNode)throw r;e.delete(r._graphNode),t.add(r._graphNode),n=n.filter((e=>-1===e.indexOf(r._graphNode)))}return t}function toposort(e,r){let t=e.length;const n=new Array(t),o={};let a=t;const s=makeOutgoingEdges(r),i=makeNodesHash(e);for(r.forEach((function(e){if(!i.has(e[0])||!i.has(e[1]))throw new Error("Unknown token. Make sure to provide all tokens used in aliases.")}));a--;)o[a]||visit(e[a],a,new Set);return n;function visit(e,r,a){if(a.has(e)){const r=new Error("Cyclic dependency"+JSON.stringify(e));throw r._graphNode=e,r}if(!i.has(e))throw new Error("Found unknown token. Make sure to provided all involved tokens. Unknown token: "+JSON.stringify(e));if(o[r])return;o[r]=!0;let l=s.get(e)||new Set;if(l=Array.from(l),r=l.length){a.add(e);do{const e=l[--r];visit(e,i.get(e),a)}while(r);a.delete(e)}n[--t]=e}}function makeOutgoingEdges(e){const r=new Map;for(let t=0,n=e.length;t<n;t++){const n=e[t];r.has(n[0])||r.set(n[0],new Set),r.has(n[1])||r.set(n[1],new Set),r.get(n[0]).add(n[1])}return r}function makeNodesHash(e){const r=new Map;for(let t=0,n=e.length;t<n;t++)r.set(e[t],t);return r}function atMediaParamsTokens(e){const t=r.tokenizer({css:e},{commentsAreTokens:!0,onParseError:()=>{throw new Error(`Unable to parse media query "${e}"`)}}),n=[];for(;!t.endOfFile();)n.push(t.nextToken());return n}const a=[[r.TokenType.Ident,"max-color",0,0,{value:"max-color"}],[r.TokenType.Colon,":",0,0,void 0],[r.TokenType.Number,"2147477350",0,0,{value:2147477350,type:r.NumberType.Integer}]],s=[[r.TokenType.Ident,"color",0,0,{value:"color"}],[r.TokenType.Colon,":",0,0,void 0],[r.TokenType.Number,"2147477350",0,0,{value:2147477350,type:r.NumberType.Integer}]];function replaceTrueAndFalseTokens(e){let t,n;for(let o=0;o<e.length;o++)if(e[o][0]!==r.TokenType.Comment&&e[o][0]!==r.TokenType.Whitespace){if(e[o][0]===r.TokenType.Ident){const r=e[o];if("true"===r[4].value.toLowerCase()){t="true",n=e.slice(o+1);break}if("false"===r[4].value.toLowerCase()){t="false",n=e.slice(o+1);break}}return e}if(!t)return e;for(let t=0;t<n.length;t++)if(n[t][0]!==r.TokenType.Comment&&n[t][0]!==r.TokenType.Whitespace)return e;return"true"===t?[[r.TokenType.Whitespace," ",0,0,void 0],[r.TokenType.OpenParen,"(",0,0,void 0],...a,[r.TokenType.CloseParen,")",0,0,void 0]]:[[r.TokenType.Whitespace," ",0,0,void 0],[r.TokenType.OpenParen,"(",0,0,void 0],...s,[r.TokenType.CloseParen,")",0,0,void 0]]}function parseCustomMedia(e){const n=atMediaParamsTokens(e),o=new Set;let a="",s=n;for(let e=0;e<n.length;e++)if(n[e][0]!==r.TokenType.Comment&&n[e][0]!==r.TokenType.Whitespace){if(n[e][0]===r.TokenType.Ident){const r=n[e];if(r[4].value.startsWith("--")){a=r[4].value,s=n.slice(e+1);break}}return!1}for(let e=0;e<s.length;e++)if(s[e][0]===r.TokenType.Ident){const r=s[e];r[4].value.startsWith("--")&&o.add(r[4].value)}s=replaceTrueAndFalseTokens(s);const i=t.parseFromTokens(r.cloneTokens(s),{preserveInvalidMediaQueries:!0,onParseError:()=>{throw new Error(`Unable to parse media query "${r.stringify(...s)}"`)}}),l=t.parseFromTokens(r.cloneTokens(s),{preserveInvalidMediaQueries:!0,onParseError:()=>{throw new Error(`Unable to parse media query "${r.stringify(...s)}"`)}});for(let e=0;e<l.length;e++)l[e]=l[e].negateQuery();return{name:a,truthy:i,falsy:l,dependsOn:Array.from(o).map((e=>[e,a]))}}function getCustomMedia(e,r,t){const n=new Map,o=new Map,a=[],s=collectCascadeLayerOrder(e);e.walkAtRules((e=>{if(!isProcessableCustomMediaRule(e))return;const r=parseCustomMedia(e.params);if(!r)return;if(0===r.truthy.length)return;const i=(u=s,(l=e).parent&&"atrule"===l.parent.type&&"layer"===l.parent.name.toLowerCase()?u.has(l.parent)?u.get(l.parent):-1:1/0);var l,u;if(i>=(o.get(r.name)??-1)&&(o.set(r.name,i),n.set(r.name,{truthy:r.truthy,falsy:r.falsy}),a.push(...r.dependsOn)),!t.preserve){const r=e.parent;e.remove(),removeEmptyAncestorBlocks(r)}}));const i=removeCyclicReferences(n,a);for(const t of i.values())e.warn(r,`@custom-media rules have cyclic dependencies for "${t}"`);return n}function removeEmptyAncestorBlocks(e){let r=e;for(;r;){if(r.nodes&&r.nodes.length>0)return;const e=r.parent;r.remove(),r=e}}function transformAtMediaListTokens(e,r){const n=t.parse(e,{preserveInvalidMediaQueries:!0,onParseError:()=>{throw new Error(`Unable to parse media query "${e}"`)}}),o=n.map((e=>e.toString()));for(let e=0;e<n.length;e++){const t=n[e],a=o[e];{const n=transformSimpleMediaQuery(t,r);if(n&&n.replaceWith!==a)return o.map(((r,t)=>t===e?n:{replaceWith:r}))}const s=transformComplexMediaQuery(t,r);if(s&&0!==s.length&&s[0].replaceWith!==a)return o.flatMap(((r,t)=>t===e?s:[{replaceWith:r}]))}return[]}function transformSimpleMediaQuery(e,r){if(!mediaQueryIsSimple(e))return null;let n=null;return e.walk((e=>{const o=e.node;if(!t.isMediaFeatureBoolean(o))return;const a=o.getName();if(!a.startsWith("--"))return!1;const s=r.get(a);return s?(n={replaceWith:s.truthy.map((e=>e.toString().trim())).join(",")},!1):void 0})),n}function transformComplexMediaQuery(e,r){let n=[];return e.walk((o=>{const i=o.node;if(!t.isMediaFeatureBoolean(i))return;const l=o.parent;if(!t.isMediaFeature(l))return;const u=i.getName();if(!u.startsWith("--"))return!1;const c=r.get(u);if(c){if(1===c.truthy.length&&mediaQueryIsSimple(c.truthy[0])){let r=null;if(c.truthy[0].walk((e=>{if(t.isMediaFeature(e.node))return r=e.node,!1})),r&&r.feature)return l.feature=r.feature,n=[{replaceWith:e.toString()}],!1}const r=t.newMediaFeaturePlain(a[0][4].value,a[2]);l.feature=r.feature;const o=e.toString(),i=t.newMediaFeaturePlain(s[0][4].value,s[2]);l.feature=i.feature;const u=e.toString();return n=[{replaceWith:o,encapsulateWith:c.truthy.map((e=>e.toString().trim())).join(",")},{replaceWith:u,encapsulateWith:c.falsy.map((e=>e.toString().trim())).join(",")}],!1}})),n}function mediaQueryIsSimple(e){if(t.isMediaQueryInvalid(e))return!1;if(t.isMediaQueryWithType(e))return!1;let r=!0;return e.walk((e=>{if(t.isMediaAnd(e.node)||t.isMediaOr(e.node)||t.isMediaNot(e.node)||t.isMediaConditionList(e.node)||t.isGeneralEnclosed(e.node))return r=!1,!1})),r}const creator=e=>{const r=Boolean(Object(e).preserve);if("importFrom"in Object(e))throw new Error('[postcss-custom-media] "importFrom" is no longer supported');if("exportTo"in Object(e))throw new Error('[postcss-custom-media] "exportTo" is no longer supported');return{postcssPlugin:"postcss-custom-media",prepare(){let e=new Map;return{Once:(t,{result:n})=>{e=getCustomMedia(t,n,{preserve:r})},AtRule:(t,{result:n})=>{if("media"!==t.name.toLowerCase())return;if(!t.params)return;if(!t.params.includes("--"))return;let o=[];try{o=transformAtMediaListTokens(t.params,e)}catch(e){return void t.warn(n,`Failed to parse @custom-media params with error message: "${e.message}"`)}if(!o||0===o.length)return;if(1===o.length){if(t.params.trim()===o[0].replaceWith.trim())return;return t.cloneBefore({params:o[0].replaceWith.trim()}),r?void 0:void t.remove()}if(!!!o.find((e=>!!e.encapsulateWith)))return t.cloneBefore({params:o.map((e=>e.replaceWith)).join(",").trim()}),void(r||t.remove());o.forEach((e=>{if(!e.encapsulateWith)return void t.cloneBefore({params:e.replaceWith.trim()});const r=t.clone({params:e.replaceWith}),n=t.clone({params:e.encapsulateWith.trim(),nodes:[]});r.parent=null,n.parent=null,n.append(r),t.before(n)})),r||t.remove()}}}}};creator.postcss=!0,module.exports=creator;
