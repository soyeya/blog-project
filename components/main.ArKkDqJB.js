import{c as lt}from"../js/runtime-dom.esm-bundler.6Vi2Xe1y.js";import{e as ut,r as ze,m as ft,s as ht,d as Ve,u as q,a as pt,c as N,p as le,w as dt,h as Ue,n as mt,b as gt,i as Y,f as vt,o as yt}from"../js/plugin-vueexport-helper.D4GAd3iU.js";import{_ as Et}from"./home.BD2Xd3ss.js";import{L as Rt}from"./login.C22GbjwS.js";import{i as St}from"../js/vuex.esm-bundler.B1_KPbxH.js";import{a as ue}from"../js/index.DW_MHI2K.js";import{D as wt}from"./detail.BHfGjlbQ.js";import"./board.BicQPUsB.js";import"./addBoard.DBp50KPH.js";import"./modal.C31lEeGc.js";import"../js/profile.DyygNFpa.js";import"./navBar.B5kgcHjz.js";import"./sideMenu.DEIuOCaP.js";import"./headerBar.1W6-hKlP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const _t=Symbol();var Ae;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ae||(Ae={}));function Pt(){const e=ut(!0),t=e.run(()=>ze({}));let n=[],r=[];const o=ft({install(i){o._a=i,i.provide(_t,o),i.config.globalProperties.$pinia=o,r.forEach(h=>n.push(h)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const G=typeof document<"u";function Ke(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function At(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ke(e.default)}const w=Object.assign;function fe(e,t){const n={};for(const r in t){const o=t[r];n[r]=I(o)?o.map(e):e(o)}return n}const F=()=>{},I=Array.isArray,We=/#/g,bt=/&/g,Ct=/\//g,Ot=/=/g,kt=/\?/g,Fe=/\+/g,Tt=/%5B/g,Lt=/%5D/g,Qe=/%5E/g,xt=/%60/g,Ye=/%7B/g,It=/%7C/g,Xe=/%7D/g,Nt=/%20/g;function ve(e){return encodeURI(""+e).replace(It,"|").replace(Tt,"[").replace(Lt,"]")}function Bt(e){return ve(e).replace(Ye,"{").replace(Xe,"}").replace(Qe,"^")}function de(e){return ve(e).replace(Fe,"%2B").replace(Nt,"+").replace(We,"%23").replace(bt,"%26").replace(xt,"`").replace(Ye,"{").replace(Xe,"}").replace(Qe,"^")}function Mt(e){return de(e).replace(Ot,"%3D")}function Dt(e){return ve(e).replace(We,"%23").replace(kt,"%3F")}function $t(e){return e==null?"":Dt(e).replace(Ct,"%2F")}function X(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const jt=/\/$/,Ht=e=>e.replace(jt,"");function he(e,t,n="/"){let r,o={},i="",h="";const g=t.indexOf("#");let c=t.indexOf("?");return g<c&&g>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,g>-1?g:t.length),o=e(i)),g>-1&&(r=r||t.slice(0,g),h=t.slice(g,t.length)),r=Vt(r??t,n),{fullPath:r+(i&&"?")+i+h,path:r,query:o,hash:X(h)}}function Gt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function be(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&z(t.matched[r],n.matched[o])&&Ze(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ze(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!zt(e[n],t[n]))return!1;return!0}function zt(e,t){return I(e)?Ce(e,t):I(t)?Ce(t,e):e===t}function Ce(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Vt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,h,g;for(h=0;h<r.length;h++)if(g=r[h],g!==".")if(g==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(h).join("/")}const D={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var Q;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Q||(Q={}));function Ut(e){if(!e)if(G){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ht(e)}const Kt=/^[^#]+#/;function Wt(e,t){return e.replace(Kt,"#")+t}function Ft(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.scrollX,top:window.scrollY});function Qt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Ft(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Oe(e,t){return(history.state?history.state.position-t:-1)+e}const me=new Map;function Yt(e,t){me.set(e,t)}function Xt(e){const t=me.get(e);return me.delete(e),t}let Zt=()=>location.protocol+"//"+location.host;function Je(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let g=o.includes(e.slice(i))?e.slice(i).length:1,c=o.slice(g);return c[0]!=="/"&&(c="/"+c),be(c,"")}return be(n,e)+r+o}function Jt(e,t,n,r){let o=[],i=[],h=null;const g=({state:l})=>{const u=Je(e,location),S=n.value,_=t.value;let b=0;if(l){if(n.value=u,t.value=l,h&&h===S){h=null;return}b=_?l.position-_.position:0}else r(u);o.forEach(C=>{C(n.value,S,{delta:b,type:Z.pop,direction:b?b>0?Q.forward:Q.back:Q.unknown})})};function c(){h=n.value}function f(l){o.push(l);const u=()=>{const S=o.indexOf(l);S>-1&&o.splice(S,1)};return i.push(u),u}function p(){const{history:l}=window;l.state&&l.replaceState(w({},l.state,{scroll:te()}),"")}function a(){for(const l of i)l();i=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:f,destroy:a}}function ke(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function en(e){const{history:t,location:n}=window,r={value:Je(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,f,p){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+c:Zt()+e+c;try{t[p?"replaceState":"pushState"](f,"",l),o.value=f}catch(u){console.error(u),n[p?"replace":"assign"](l)}}function h(c,f){const p=w({},t.state,ke(o.value.back,c,o.value.forward,!0),f,{position:o.value.position});i(c,p,!0),r.value=c}function g(c,f){const p=w({},o.value,t.state,{forward:c,scroll:te()});i(p.current,p,!0);const a=w({},ke(r.value,c,null),{position:p.position+1},f);i(c,a,!1),r.value=c}return{location:r,state:o,push:g,replace:h}}function tn(e){e=Ut(e);const t=en(e),n=Jt(e,t.state,t.location,t.replace);function r(i,h=!0){h||n.pauseListeners(),history.go(i)}const o=w({location:"",base:e,go:r,createHref:Wt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function nn(e){return typeof e=="string"||e&&typeof e=="object"}function et(e){return typeof e=="string"||typeof e=="symbol"}const tt=Symbol("");var Te;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Te||(Te={}));function V(e,t){return w(new Error,{type:e,[tt]:!0},t)}function B(e,t){return e instanceof Error&&tt in e&&(t==null||!!(e.type&t))}const Le="[^/]+?",rn={sensitive:!1,strict:!1,start:!0,end:!0},on=/[.+*?^${}()[\]/\\]/g;function sn(e,t){const n=w({},rn,t),r=[];let o=n.start?"^":"";const i=[];for(const f of e){const p=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let a=0;a<f.length;a++){const l=f[a];let u=40+(n.sensitive?.25:0);if(l.type===0)a||(o+="/"),o+=l.value.replace(on,"\\$&"),u+=40;else if(l.type===1){const{value:S,repeatable:_,optional:b,regexp:C}=l;i.push({name:S,repeatable:_,optional:b});const R=C||Le;if(R!==Le){u+=10;try{new RegExp(`(${R})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${S}" (${R}): `+x.message)}}let P=_?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;a||(P=b&&f.length<2?`(?:/${P})`:"/"+P),b&&(P+="?"),o+=P,u+=20,b&&(u+=-8),_&&(u+=-20),R===".*"&&(u+=-50)}p.push(u)}r.push(p)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function g(f){const p=f.match(h),a={};if(!p)return null;for(let l=1;l<p.length;l++){const u=p[l]||"",S=i[l-1];a[S.name]=u&&S.repeatable?u.split("/"):u}return a}function c(f){let p="",a=!1;for(const l of e){(!a||!p.endsWith("/"))&&(p+="/"),a=!1;for(const u of l)if(u.type===0)p+=u.value;else if(u.type===1){const{value:S,repeatable:_,optional:b}=u,C=S in f?f[S]:"";if(I(C)&&!_)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const R=I(C)?C.join("/"):C;if(!R)if(b)l.length<2&&(p.endsWith("/")?p=p.slice(0,-1):a=!0);else throw new Error(`Missing required param "${S}"`);p+=R}}return p||"/"}return{re:h,score:r,keys:i,parse:g,stringify:c}}function cn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function nt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=cn(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const an={type:0,value:""},ln=/[a-zA-Z0-9_]/;function un(e){if(!e)return[[]];if(e==="/")return[[an]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(u){throw new Error(`ERR (${n})/"${f}": ${u}`)}let n=0,r=n;const o=[];let i;function h(){i&&o.push(i),i=[]}let g=0,c,f="",p="";function a(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function l(){f+=c}for(;g<e.length;){if(c=e[g++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&a(),h()):c===":"?(a(),n=1):l();break;case 4:l(),n=r;break;case 1:c==="("?n=2:ln.test(c)?l():(a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),h(),o}function fn(e,t,n){const r=sn(un(e.path),n),o=w(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function hn(e,t){const n=[],r=new Map;t=Me({strict:!1,end:!0,sensitive:!1},t);function o(a){return r.get(a)}function i(a,l,u){const S=!u,_=Ne(a);_.aliasOf=u&&u.record;const b=Me(t,a),C=[_];if("alias"in a){const x=typeof a.alias=="string"?[a.alias]:a.alias;for(const j of x)C.push(Ne(w({},_,{components:u?u.record.components:_.components,path:j,aliasOf:u?u.record:_})))}let R,P;for(const x of C){const{path:j}=x;if(l&&j[0]!=="/"){const M=l.record.path,L=M[M.length-1]==="/"?"":"/";x.path=l.record.path+(j&&L+j)}if(R=fn(x,l,b),u?u.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),S&&a.name&&!Be(R)&&h(a.name)),rt(R)&&c(R),_.children){const M=_.children;for(let L=0;L<M.length;L++)i(M[L],R,u&&u.children[L])}u=u||R}return P?()=>{h(P)}:F}function h(a){if(et(a)){const l=r.get(a);l&&(r.delete(a),n.splice(n.indexOf(l),1),l.children.forEach(h),l.alias.forEach(h))}else{const l=n.indexOf(a);l>-1&&(n.splice(l,1),a.record.name&&r.delete(a.record.name),a.children.forEach(h),a.alias.forEach(h))}}function g(){return n}function c(a){const l=mn(a,n);n.splice(l,0,a),a.record.name&&!Be(a)&&r.set(a.record.name,a)}function f(a,l){let u,S={},_,b;if("name"in a&&a.name){if(u=r.get(a.name),!u)throw V(1,{location:a});b=u.record.name,S=w(Ie(l.params,u.keys.filter(P=>!P.optional).concat(u.parent?u.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),a.params&&Ie(a.params,u.keys.map(P=>P.name))),_=u.stringify(S)}else if(a.path!=null)_=a.path,u=n.find(P=>P.re.test(_)),u&&(S=u.parse(_),b=u.record.name);else{if(u=l.name?r.get(l.name):n.find(P=>P.re.test(l.path)),!u)throw V(1,{location:a,currentLocation:l});b=u.record.name,S=w({},l.params,a.params),_=u.stringify(S)}const C=[];let R=u;for(;R;)C.unshift(R.record),R=R.parent;return{name:b,path:_,params:S,matched:C,meta:dn(C)}}e.forEach(a=>i(a));function p(){n.length=0,r.clear()}return{addRoute:i,resolve:f,removeRoute:h,clearRoutes:p,getRoutes:g,getRecordMatcher:o}}function Ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ne(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:pn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function pn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Be(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function dn(e){return e.reduce((t,n)=>w(t,n.meta),{})}function Me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function mn(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;nt(e,t[i])<0?r=i:n=i+1}const o=gn(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function gn(e){let t=e;for(;t=t.parent;)if(rt(t)&&nt(e,t)===0)return t}function rt({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function vn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Fe," "),h=i.indexOf("="),g=X(h<0?i:i.slice(0,h)),c=h<0?null:X(i.slice(h+1));if(g in t){let f=t[g];I(f)||(f=t[g]=[f]),f.push(c)}else t[g]=c}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Mt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(i=>i&&de(i)):[r&&de(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function yn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const En=Symbol(""),$e=Symbol(""),ye=Symbol(""),ot=Symbol(""),ge=Symbol("");function W(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function $(e,t,n,r,o,i=h=>h()){const h=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((g,c)=>{const f=l=>{l===!1?c(V(4,{from:n,to:t})):l instanceof Error?c(l):nn(l)?c(V(2,{from:t,to:l})):(h&&r.enterCallbacks[o]===h&&typeof l=="function"&&h.push(l),g())},p=i(()=>e.call(r&&r.instances[o],t,n,f));let a=Promise.resolve(p);e.length<3&&(a=a.then(f)),a.catch(l=>c(l))})}function pe(e,t,n,r,o=i=>i()){const i=[];for(const h of e)for(const g in h.components){let c=h.components[g];if(!(t!=="beforeRouteEnter"&&!h.instances[g]))if(Ke(c)){const p=(c.__vccOpts||c)[t];p&&i.push($(p,n,r,h,g,o))}else{let f=c();i.push(()=>f.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${g}" at "${h.path}"`);const a=At(p)?p.default:p;h.mods[g]=p,h.components[g]=a;const u=(a.__vccOpts||a)[t];return u&&$(u,n,r,h,g,o)()}))}}return i}function je(e){const t=Y(ye),n=Y(ot),r=N(()=>{const c=q(e.to);return t.resolve(c)}),o=N(()=>{const{matched:c}=r.value,{length:f}=c,p=c[f-1],a=n.matched;if(!p||!a.length)return-1;const l=a.findIndex(z.bind(null,p));if(l>-1)return l;const u=He(c[f-2]);return f>1&&He(p)===u&&a[a.length-1].path!==u?a.findIndex(z.bind(null,c[f-2])):l}),i=N(()=>o.value>-1&&Pn(n.params,r.value.params)),h=N(()=>o.value>-1&&o.value===n.matched.length-1&&Ze(n.params,r.value.params));function g(c={}){if(_n(c)){const f=t[q(e.replace)?"replace":"push"](q(e.to)).catch(F);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:i,isExactActive:h,navigate:g}}function Rn(e){return e.length===1?e[0]:e}const Sn=Ve({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:je,setup(e,{slots:t}){const n=gt(je(e)),{options:r}=Y(ye),o=N(()=>({[Ge(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ge(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Rn(t.default(n));return e.custom?i:Ue("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),wn=Sn;function _n(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Pn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!I(o)||o.length!==r.length||r.some((i,h)=>i!==o[h]))return!1}return!0}function He(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ge=(e,t,n)=>e??t??n,An=Ve({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(ge),o=N(()=>e.route||r.value),i=Y($e,0),h=N(()=>{let f=q(i);const{matched:p}=o.value;let a;for(;(a=p[f])&&!a.components;)f++;return f}),g=N(()=>o.value.matched[h.value]);le($e,N(()=>h.value+1)),le(En,g),le(ge,o);const c=ze();return dt(()=>[c.value,g.value,e.name],([f,p,a],[l,u,S])=>{p&&(p.instances[a]=f,u&&u!==p&&f&&f===l&&(p.leaveGuards.size||(p.leaveGuards=u.leaveGuards),p.updateGuards.size||(p.updateGuards=u.updateGuards))),f&&p&&(!u||!z(p,u)||!l)&&(p.enterCallbacks[a]||[]).forEach(_=>_(f))},{flush:"post"}),()=>{const f=o.value,p=e.name,a=g.value,l=a&&a.components[p];if(!l)return qe(n.default,{Component:l,route:f});const u=a.props[p],S=u?u===!0?f.params:typeof u=="function"?u(f):u:null,b=Ue(l,w({},S,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(a.instances[p]=null)},ref:c}));return qe(n.default,{Component:b,route:f})||b}}});function qe(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const st=An;function bn(e){const t=hn(e.routes,e),n=e.parseQuery||vn,r=e.stringifyQuery||De,o=e.history,i=W(),h=W(),g=W(),c=ht(D);let f=D;G&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=fe.bind(null,s=>""+s),a=fe.bind(null,$t),l=fe.bind(null,X);function u(s,m){let d,v;return et(s)?(d=t.getRecordMatcher(s),v=m):v=s,t.addRoute(v,d)}function S(s){const m=t.getRecordMatcher(s);m&&t.removeRoute(m)}function _(){return t.getRoutes().map(s=>s.record)}function b(s){return!!t.getRecordMatcher(s)}function C(s,m){if(m=w({},m||c.value),typeof s=="string"){const y=he(n,s,m.path),k=t.resolve({path:y.path},m),K=o.createHref(y.fullPath);return w(y,k,{params:l(k.params),hash:X(y.hash),redirectedFrom:void 0,href:K})}let d;if(s.path!=null)d=w({},s,{path:he(n,s.path,m.path).path});else{const y=w({},s.params);for(const k in y)y[k]==null&&delete y[k];d=w({},s,{params:a(y)}),m.params=a(m.params)}const v=t.resolve(d,m),A=s.hash||"";v.params=p(l(v.params));const O=Gt(r,w({},s,{hash:Bt(A),path:v.path})),E=o.createHref(O);return w({fullPath:O,hash:A,query:r===De?yn(s.query):s.query||{}},v,{redirectedFrom:void 0,href:E})}function R(s){return typeof s=="string"?he(n,s,c.value.path):w({},s)}function P(s,m){if(f!==s)return V(8,{from:m,to:s})}function x(s){return L(s)}function j(s){return x(w(R(s),{replace:!0}))}function M(s){const m=s.matched[s.matched.length-1];if(m&&m.redirect){const{redirect:d}=m;let v=typeof d=="function"?d(s):d;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=R(v):{path:v},v.params={}),w({query:s.query,hash:s.hash,params:v.path!=null?{}:s.params},v)}}function L(s,m){const d=f=C(s),v=c.value,A=s.state,O=s.force,E=s.replace===!0,y=M(d);if(y)return L(w(R(y),{state:typeof y=="object"?w({},A,y.state):A,force:O,replace:E}),m||d);const k=d;k.redirectedFrom=m;let K;return!O&&qt(r,v,d)&&(K=V(16,{to:k,from:v}),_e(v,v,!0,!1)),(K?Promise.resolve(K):Ee(k,v)).catch(T=>B(T)?B(T,2)?T:ie(T):se(T,k,v)).then(T=>{if(T){if(B(T,2))return L(w({replace:E},R(T.to),{state:typeof T.to=="object"?w({},A,T.to.state):A,force:O}),m||k)}else T=Se(k,v,!0,E,A);return Re(k,v,T),T})}function it(s,m){const d=P(s,m);return d?Promise.reject(d):Promise.resolve()}function re(s){const m=ee.values().next().value;return m&&typeof m.runWithContext=="function"?m.runWithContext(s):s()}function Ee(s,m){let d;const[v,A,O]=Cn(s,m);d=pe(v.reverse(),"beforeRouteLeave",s,m);for(const y of v)y.leaveGuards.forEach(k=>{d.push($(k,s,m))});const E=it.bind(null,s,m);return d.push(E),H(d).then(()=>{d=[];for(const y of i.list())d.push($(y,s,m));return d.push(E),H(d)}).then(()=>{d=pe(A,"beforeRouteUpdate",s,m);for(const y of A)y.updateGuards.forEach(k=>{d.push($(k,s,m))});return d.push(E),H(d)}).then(()=>{d=[];for(const y of O)if(y.beforeEnter)if(I(y.beforeEnter))for(const k of y.beforeEnter)d.push($(k,s,m));else d.push($(y.beforeEnter,s,m));return d.push(E),H(d)}).then(()=>(s.matched.forEach(y=>y.enterCallbacks={}),d=pe(O,"beforeRouteEnter",s,m,re),d.push(E),H(d))).then(()=>{d=[];for(const y of h.list())d.push($(y,s,m));return d.push(E),H(d)}).catch(y=>B(y,8)?y:Promise.reject(y))}function Re(s,m,d){g.list().forEach(v=>re(()=>v(s,m,d)))}function Se(s,m,d,v,A){const O=P(s,m);if(O)return O;const E=m===D,y=G?history.state:{};d&&(v||E?o.replace(s.fullPath,w({scroll:E&&y&&y.scroll},A)):o.push(s.fullPath,A)),c.value=s,_e(s,m,d,E),ie()}let U;function ct(){U||(U=o.listen((s,m,d)=>{if(!Pe.listening)return;const v=C(s),A=M(v);if(A){L(w(A,{replace:!0,force:!0}),v).catch(F);return}f=v;const O=c.value;G&&Yt(Oe(O.fullPath,d.delta),te()),Ee(v,O).catch(E=>B(E,12)?E:B(E,2)?(L(w(R(E.to),{force:!0}),v).then(y=>{B(y,20)&&!d.delta&&d.type===Z.pop&&o.go(-1,!1)}).catch(F),Promise.reject()):(d.delta&&o.go(-d.delta,!1),se(E,v,O))).then(E=>{E=E||Se(v,O,!1),E&&(d.delta&&!B(E,8)?o.go(-d.delta,!1):d.type===Z.pop&&B(E,20)&&o.go(-1,!1)),Re(v,O,E)}).catch(F)}))}let oe=W(),we=W(),J;function se(s,m,d){ie(s);const v=we.list();return v.length?v.forEach(A=>A(s,m,d)):console.error(s),Promise.reject(s)}function at(){return J&&c.value!==D?Promise.resolve():new Promise((s,m)=>{oe.add([s,m])})}function ie(s){return J||(J=!s,ct(),oe.list().forEach(([m,d])=>s?d(s):m()),oe.reset()),s}function _e(s,m,d,v){const{scrollBehavior:A}=e;if(!G||!A)return Promise.resolve();const O=!d&&Xt(Oe(s.fullPath,0))||(v||!d)&&history.state&&history.state.scroll||null;return mt().then(()=>A(s,m,O)).then(E=>E&&Qt(E)).catch(E=>se(E,s,m))}const ce=s=>o.go(s);let ae;const ee=new Set,Pe={currentRoute:c,listening:!0,addRoute:u,removeRoute:S,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:_,resolve:C,options:e,push:x,replace:j,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:i.add,beforeResolve:h.add,afterEach:g.add,onError:we.add,isReady:at,install(s){const m=this;s.component("RouterLink",wn),s.component("RouterView",st),s.config.globalProperties.$router=m,Object.defineProperty(s.config.globalProperties,"$route",{enumerable:!0,get:()=>q(c)}),G&&!ae&&c.value===D&&(ae=!0,x(o.location).catch(A=>{}));const d={};for(const A in D)Object.defineProperty(d,A,{get:()=>c.value[A],enumerable:!0});s.provide(ye,m),s.provide(ot,pt(d)),s.provide(ge,c);const v=s.unmount;ee.add(s),s.unmount=function(){ee.delete(s),ee.size<1&&(f=D,U&&U(),U=null,c.value=D,ae=!1,J=!1),v()}}};function H(s){return s.reduce((m,d)=>m.then(()=>re(d)),Promise.resolve())}return Pe}function Cn(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let h=0;h<i;h++){const g=t.matched[h];g&&(e.matched.find(f=>z(f,g))?r.push(g):n.push(g));const c=e.matched[h];c&&(t.matched.find(f=>z(f,c))||o.push(c))}return[n,r,o]}const On={__name:"App",setup(e){return(t,n)=>(yt(),vt(q(st)))}},kn={token:!1,isCalled:!1,isShowBoardSettings:!1,pathName:"",isAddBoard:!1,lastId:"",nowList:[],bodyColor:"#2d2e83"},Tn={async SET_LIST({}){return await ue.get("http://localhost:8888/api/list").then(e=>e.data).catch(e=>{})},async ADD_BORAD_DATA({commit:e},t){const[n,r,o,i]=t;return await ue.post("http://localhost:8888/api/addList",t).then(h=>{console.log(t),e("SETUP_LIST",{id:n,title:r,content:o,img:i})})},async DELETE_BOARD_DATA({commit:e},[t]){return await ue.delete("http://localhost:8888/api/delete",{headers:{"Content-Type":"application/json"},data:[t]}).then(n=>console.log("삭제성공")).then(n=>console.log("DELETE_BOARD_DATA",[t])).then(n=>e("LIST_RESET")).catch(n=>console.error("삭제 실패:",n))}},Ln={SET_PATHNAME(e,t){e.pathName=t},SET_ID(e,t){e.lastId=t},SET_CALLING_BOARD(e,t){e.isCalled=t},LOGIN(e,t){t&&(e.token=t)},LOGOUT(e){e.token=!1},SET_IS_SHOW_BOARD_SETTINGS(e,t){e.isShowBoardSettings=t},SET_IS_ADD_BOARD(e,t){e.isAddBoard=t},SETUP_LIST(e,t){e.nowList.push(t)},LIST_RESET(e){e.nowList=[],e.isCalled=!1},SET_COLOR(e,t){e.bodyColor=t}},xn=new St.Store({state:kn,actions:Tn,mutations:Ln}),In=bn({history:tn("/blog-project"),routes:[{path:"/",name:"home",component:Et},{path:"/login",name:"login",component:Rt},{path:"/detail/:id",name:"detail",component:wt}]}),ne=lt(On);ne.use(Pt());ne.use(In);ne.use(xn);ne.mount("#app");
