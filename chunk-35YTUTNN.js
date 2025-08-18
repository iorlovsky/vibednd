import{a as En,b as Kt,c as we,d as qt,e as et,f as dt,g as Cn,m as xn,n as wn,p as je}from"./chunk-KF6XWTNU.js";import{c as Ge,d as Ie,f as Oe,g as Le}from"./chunk-W4AHS3DZ.js";import{$a as q,Aa as zt,Ab as Ut,Ba as x,Bb as yn,Cb as St,Da as _e,Db as f,Eb as xt,Fb as wt,Gb as Z,Ha as Ct,Hb as Ue,Ib as $,Jb as V,Kb as jt,La as $e,Lb as vn,Ma as hn,Mb as Ee,Nb as T,Oa as g,Ob as It,Pb as Ot,Qa as Se,Rb as R,Sa as fn,Sb as _n,Ta as bt,Tb as ct,Ub as Ce,Va as gn,Vb as xe,Yb as Sn,Za as B,Zb as Mt,_a as J,_b as Gt,a as C,ab as D,ba as dn,bb as S,bc as j,ca as w,da as Y,db as lt,dc as Tn,eb as Te,fa as un,ha as b,hc as I,ia as pn,ib as bn,ic as tt,j as ye,lb as M,na as st,oa as at,pa as ve,qa as mn,qb as h,ra as gt,rb as F,sb as H,tb as U,ub as Ve,va as X,vb as We,wb as ze,xb as yt,yb as vt,zb as _t}from"./chunk-SQQJXCJW.js";function Rt(...e){if(e){let o=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Rt(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Lt(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}function qe(e,o){if(e&&o){let t=n=>{Lt(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Nt(e,o){if(e&&o){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Zt(e){for(let o of document?.styleSheets)try{for(let t of o?.cssRules)for(let n of t?.style)if(e.test(n))return{name:n,value:t.style.getPropertyValue(n).trim()}}catch{}return null}function In(e){let o={width:0,height:0};if(e){let[t,n]=[e.style.visibility,e.style.display];e.style.visibility="hidden",e.style.display="block",o.width=e.offsetWidth,o.height=e.offsetHeight,e.style.display=n,e.style.visibility=t}return o}function Ae(){let e=window,o=document,t=o.documentElement,n=o.getElementsByTagName("body")[0],i=e.innerWidth||t.clientWidth||n.clientWidth,r=e.innerHeight||t.clientHeight||n.clientHeight;return{width:i,height:r}}function Ke(e){return e?Math.abs(e.scrollLeft):0}function Ze(){let e=document.documentElement;return(window.pageXOffset||Ke(e))-(e.clientLeft||0)}function Qe(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function $i(e){return e?getComputedStyle(e).direction==="rtl":!1}function On(e,o,t=!0){var n,i,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:In(e),l=a.height,c=a.width,d=o.offsetHeight,m=o.offsetWidth,p=o.getBoundingClientRect(),u=Qe(),y=Ze(),v=Ae(),_,O,k="top";p.top+d+l>v.height?(_=p.top+u-l,k="bottom",_<0&&(_=u)):_=d+p.top+u,p.left+c>v.width?O=Math.max(0,p.left+y+m-c):O=p.left+y,$i(e)?e.style.insetInlineEnd=O+"px":e.style.insetInlineStart=O+"px",e.style.top=_+"px",e.style.transformOrigin=k,t&&(e.style.marginTop=k==="bottom"?`calc(${(i=(n=Zt(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=Zt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Q(e,o){if(e instanceof HTMLElement){let t=e.offsetWidth;if(o){let n=getComputedStyle(e);t+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return t}return 0}function Ln(e,o,t=!0,n=void 0){var i;if(e){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:In(e),s=o.offsetHeight,a=o.getBoundingClientRect(),l=Ae(),c,d,m=n??"top";if(!n&&a.top+s+r.height>l.height?(c=-1*r.height,m="bottom",a.top+c<0&&(c=-1*a.top)):c=s,r.width>l.width?d=a.left*-1:a.left+r.width>l.width?d=(a.left+r.width-l.width)*-1:d=0,e.style.top=c+"px",e.style.insetInlineStart=d+"px",e.style.transformOrigin=m,t){let p=(i=Zt(/-anchor-gutter$/))==null?void 0:i.value;e.style.marginTop=m==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function Vi(e){if(e){let o=e.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function Wi(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&Vi(e))}function ke(e){return typeof Element<"u"?e instanceof Element:e!==null&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"}function An(e){let o=e;return e&&typeof e=="object"&&(Object.hasOwn(e,"current")?o=e.current:Object.hasOwn(e,"el")&&(Object.hasOwn(e.el,"nativeElement")?o=e.el.nativeElement:o=e.el)),ke(o)?o:void 0}function zi(e,o){var t,n,i;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@first":return o?.firstElementChild;case"@last":return o?.lastElementChild;case"@child":return(t=o?.children)==null?void 0:t[0];case"@parent":return o?.parentElement;case"@grandparent":return(n=o?.parentElement)==null?void 0:n.parentElement;default:{if(typeof e=="string"){let a=e.match(/^@child\[(\d+)]/);return a?((i=o?.children)==null?void 0:i[parseInt(a[1],10)])||null:document.querySelector(e)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(e)?e():e,s=An(r);return Wi(s)?s:r?.nodeType===9?r:void 0}}}function Ye(e,o){let t=zi(e,o);if(t)t.appendChild(o);else throw new Error("Cannot append "+o+" to "+e)}function Xe(e,o={}){if(ke(e)){let t=(n,i)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[n]?[(s=e?.$attrs)==null?void 0:s[n]]:[];return[i].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let m=Array.isArray(c)?t(n,c):Object.entries(c).map(([p,u])=>n==="style"&&(u||u===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${u}`:u?p:void 0);l=m.length?l.concat(m.filter(p=>!!p)):l}}return l},a)};Object.entries(o).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),i):n==="p-bind"||n==="pBind"?Xe(e,i):(i=n==="class"?[...new Set(t("class",i))].join(" ").trim():n==="style"?t("style",i).join(";").trim():i,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=i),e.setAttribute(n,i))}})}}function kn(e,o){if(e){e.style.opacity="0";let t=+new Date,n="0",i=function(){n=`${+e.style.opacity+(new Date().getTime()-t)/o}`,e.style.opacity=n,t=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(i):setTimeout(i,16))};i()}}function Qt(e,o){return ke(e)?Array.from(e.querySelectorAll(o)):[]}function At(e,o){return ke(e)?e.matches(o)?e:e.querySelector(o):null}function Yt(e,o){e&&document.activeElement!==e&&e.focus(o)}function Je(e){if(e){let o=e.offsetHeight,t=getComputedStyle(e);return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),o}return 0}function Dn(e){if(e){let o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||Ke(document.documentElement)||Ke(document.body)||0)}}return{top:"auto",left:"auto"}}function ut(e,o){if(e){let t=e.offsetHeight;if(o){let n=getComputedStyle(e);t+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return t}return 0}function tn(e){if(e){let o=e.offsetWidth,t=getComputedStyle(e);return o-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),o}return 0}function Mn(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Rn(e){var o;e&&("remove"in Element.prototype?e.remove():(o=e.parentNode)==null||o.removeChild(e))}function Nn(e,o){let t=An(e);if(t)t.removeChild(o);else throw new Error("Cannot remove "+o+" from "+e)}function Pn(){let e=new Map;return{on(o,t){let n=e.get(o);return n?n.push(t):n=[t],e.set(o,n),this},off(o,t){let n=e.get(o);return n&&n.splice(n.indexOf(t)>>>0,1),this},emit(o,t){let n=e.get(o);n&&n.forEach(i=>{i(t)})},clear(){e.clear()}}}var Ui=Object.defineProperty,Fn=Object.getOwnPropertySymbols,ji=Object.prototype.hasOwnProperty,Gi=Object.prototype.propertyIsEnumerable,Hn=(e,o,t)=>o in e?Ui(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Ki=(e,o)=>{for(var t in o||(o={}))ji.call(o,t)&&Hn(e,t,o[t]);if(Fn)for(var t of Fn(o))Gi.call(o,t)&&Hn(e,t,o[t]);return e};function kt(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function qi(e){return typeof e=="function"&&"call"in e&&"apply"in e}function L(e){return!kt(e)}function nt(e,o=!0){return e instanceof Object&&e.constructor===Object&&(o||Object.keys(e).length!==0)}function $n(e={},o={}){let t=Ki({},e);return Object.keys(o).forEach(n=>{let i=n;nt(o[i])&&i in e&&nt(e[i])?t[i]=$n(e[i],o[i]):t[i]=o[i]}),t}function Vn(...e){return e.reduce((o,t,n)=>n===0?t:$n(o,t),{})}function W(e,...o){return qi(e)?e(...o):e}function Tt(e,o=!0){return typeof e=="string"&&(o||e!=="")}function Bn(e){return Tt(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function De(e,o="",t={}){let n=Bn(o).split("."),i=n.shift();if(i){if(nt(e)){let r=Object.keys(e).find(s=>Bn(s)===i)||"";return De(W(e[r],t),n.join("."),t)}return}return W(e,t)}function Wn(e){return L(e)&&!isNaN(e)}function it(e,o){if(o){let t=o.test(e);return o.lastIndex=0,t}return!1}function Dt(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Me(e){return Tt(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,t)=>t===0?o:"-"+o.toLowerCase()).toLowerCase():e}var Re={};function pt(e="pui_id_"){return Object.hasOwn(Re,e)||(Re[e]=0),Re[e]++,`${e}${Re[e]}`}var N=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var zn=(()=>{class e{clickSource=new ye;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ne=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(n){return new(n||e)(bt(Se))};static \u0275dir=q({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),mt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=J({type:e});static \u0275inj=Y({imports:[et]})}return e})();var Qi=Object.defineProperty,Yi=Object.defineProperties,Xi=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,Gn=Object.prototype.hasOwnProperty,Kn=Object.prototype.propertyIsEnumerable,Un=(e,o,t)=>o in e?Qi(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,rt=(e,o)=>{for(var t in o||(o={}))Gn.call(o,t)&&Un(e,t,o[t]);if(Pe)for(var t of Pe(o))Kn.call(o,t)&&Un(e,t,o[t]);return e},en=(e,o)=>Yi(e,Xi(o)),ht=(e,o)=>{var t={};for(var n in e)Gn.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&Pe)for(var n of Pe(e))o.indexOf(n)<0&&Kn.call(e,n)&&(t[n]=e[n]);return t};function Gr(...e){return Vn(...e)}var Ji=Pn(),K=Ji,Xt=/{([^}]*)}/g,qn=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Zn=/var\([^)]+\)/g;function jn(e){return Tt(e)?e.replace(/[A-Z]/g,(o,t)=>t===0?o:"."+o.toLowerCase()).toLowerCase():e}function to(e){return nt(e)&&e.hasOwnProperty("$value")&&e.hasOwnProperty("$type")?e.$value:e}function eo(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function nn(e="",o=""){return eo(`${Tt(e,!1)&&Tt(o,!1)?`${e}-`:e}${o}`)}function Qn(e="",o=""){return`--${nn(e,o)}`}function no(e=""){let o=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(o+t)%2!==0}function Yn(e,o="",t="",n=[],i){if(Tt(e)){let r=e.trim();if(no(r))return;if(it(r,Xt)){let s=r.replaceAll(Xt,a=>{let l=a.replace(/{|}/g,"").split(".").filter(c=>!n.some(d=>it(c,d)));return`var(${Qn(t,Me(l.join("-")))}${L(i)?`, ${i}`:""})`});return it(s.replace(Zn,"0"),qn)?`calc(${s})`:s}return r}else if(Wn(e))return e}function io(e,o,t){Tt(o,!1)&&e.push(`${o}:${t};`)}function Pt(e,o){return e?`${e}{${o}}`:""}function Xn(e,o){if(e.indexOf("dt(")===-1)return e;function t(s,a){let l=[],c=0,d="",m=null,p=0;for(;c<=s.length;){let u=s[c];if((u==='"'||u==="'"||u==="`")&&s[c-1]!=="\\"&&(m=m===u?null:u),!m&&(u==="("&&p++,u===")"&&p--,(u===","||c===s.length)&&p===0)){let y=d.trim();y.startsWith("dt(")?l.push(Xn(y,a)):l.push(n(y)),d="",c++;continue}u!==void 0&&(d+=u),c++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let i=[],r=[];for(let s=0;s<e.length;s++)if(e[s]==="d"&&e.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(e[s]===")"&&r.length>0){let a=r.pop();r.length===0&&i.push([a,s])}if(!i.length)return e;for(let s=i.length-1;s>=0;s--){let[a,l]=i[s],c=e.slice(a+3,l),d=t(c,o),m=o(...d);e=e.slice(0,a)+m+e.slice(l+1)}return e}var ft=(...e)=>oo(E.getTheme(),...e),oo=(e={},o,t,n)=>{if(o){let{variable:i,options:r}=E.defaults||{},{prefix:s,transform:a}=e?.options||r||{},l=it(o,Xt)?o:`{${o}}`;return n==="value"||kt(n)&&a==="strict"?E.getTokenValue(o):Yn(l,void 0,s,[i.excludedKeyRegex],t)}return""};function Ft(e,...o){if(e instanceof Array){let t=e.reduce((n,i,r)=>{var s;return n+i+((s=W(o[r],{dt:ft}))!=null?s:"")},"");return Xn(t,ft)}return W(e,{dt:ft})}function ro(e,o={}){let t=E.defaults.variable,{prefix:n=t.prefix,selector:i=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=o,s=[],a=[],l=[{node:e,path:n}];for(;l.length;){let{node:d,path:m}=l.pop();for(let p in d){let u=d[p],y=to(u),v=it(p,r)?nn(m):nn(m,Me(p));if(nt(y))l.push({node:y,path:v});else{let _=Qn(v),O=Yn(y,v,n,[r]);io(a,_,O);let k=v;n&&k.startsWith(n+"-")&&(k=k.slice(n.length+1)),s.push(k.replace(/-/g,"."))}}}let c=a.join("");return{value:a,tokens:s,declarations:c,css:Pt(i,c)}}var ot={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:e,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let o=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var n;return(n=o.map(i=>i.resolve(t)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(t)})}},_toVariables(e,o){return ro(e,{prefix:o?.prefix})},getCommon({name:e="",theme:o={},params:t,set:n,defaults:i}){var r,s,a,l,c,d,m;let{preset:p,options:u}=o,y,v,_,O,k,z,ne;if(L(p)&&u.transform!=="strict"){let{primitive:ie,semantic:oe,extend:re}=p,$t=oe||{},{colorScheme:se}=$t,ae=ht($t,["colorScheme"]),le=re||{},{colorScheme:ce}=le,Vt=ht(le,["colorScheme"]),Wt=se||{},{dark:de}=Wt,ue=ht(Wt,["dark"]),pe=ce||{},{dark:me}=pe,he=ht(pe,["dark"]),fe=L(ie)?this._toVariables({primitive:ie},u):{},ge=L(ae)?this._toVariables({semantic:ae},u):{},be=L(ue)?this._toVariables({light:ue},u):{},sn=L(de)?this._toVariables({dark:de},u):{},an=L(Vt)?this._toVariables({semantic:Vt},u):{},ln=L(he)?this._toVariables({light:he},u):{},cn=L(me)?this._toVariables({dark:me},u):{},[Ti,Ei]=[(r=fe.declarations)!=null?r:"",fe.tokens],[Ci,xi]=[(s=ge.declarations)!=null?s:"",ge.tokens||[]],[wi,Ii]=[(a=be.declarations)!=null?a:"",be.tokens||[]],[Oi,Li]=[(l=sn.declarations)!=null?l:"",sn.tokens||[]],[Ai,ki]=[(c=an.declarations)!=null?c:"",an.tokens||[]],[Di,Mi]=[(d=ln.declarations)!=null?d:"",ln.tokens||[]],[Ri,Ni]=[(m=cn.declarations)!=null?m:"",cn.tokens||[]];y=this.transformCSS(e,Ti,"light","variable",u,n,i),v=Ei;let Pi=this.transformCSS(e,`${Ci}${wi}`,"light","variable",u,n,i),Fi=this.transformCSS(e,`${Oi}`,"dark","variable",u,n,i);_=`${Pi}${Fi}`,O=[...new Set([...xi,...Ii,...Li])];let Hi=this.transformCSS(e,`${Ai}${Di}color-scheme:light`,"light","variable",u,n,i),Bi=this.transformCSS(e,`${Ri}color-scheme:dark`,"dark","variable",u,n,i);k=`${Hi}${Bi}`,z=[...new Set([...ki,...Mi,...Ni])],ne=W(p.css,{dt:ft})}return{primitive:{css:y,tokens:v},semantic:{css:_,tokens:O},global:{css:k,tokens:z},style:ne}},getPreset({name:e="",preset:o={},options:t,params:n,set:i,defaults:r,selector:s}){var a,l,c;let d,m,p;if(L(o)&&t.transform!=="strict"){let u=e.replace("-directive",""),y=o,{colorScheme:v,extend:_,css:O}=y,k=ht(y,["colorScheme","extend","css"]),z=_||{},{colorScheme:ne}=z,ie=ht(z,["colorScheme"]),oe=v||{},{dark:re}=oe,$t=ht(oe,["dark"]),se=ne||{},{dark:ae}=se,le=ht(se,["dark"]),ce=L(k)?this._toVariables({[u]:rt(rt({},k),ie)},t):{},Vt=L($t)?this._toVariables({[u]:rt(rt({},$t),le)},t):{},Wt=L(re)?this._toVariables({[u]:rt(rt({},re),ae)},t):{},[de,ue]=[(a=ce.declarations)!=null?a:"",ce.tokens||[]],[pe,me]=[(l=Vt.declarations)!=null?l:"",Vt.tokens||[]],[he,fe]=[(c=Wt.declarations)!=null?c:"",Wt.tokens||[]],ge=this.transformCSS(u,`${de}${pe}`,"light","variable",t,i,r,s),be=this.transformCSS(u,he,"dark","variable",t,i,r,s);d=`${ge}${be}`,m=[...new Set([...ue,...me,...fe])],p=W(O,{dt:ft})}return{css:d,tokens:m,style:p}},getPresetC({name:e="",theme:o={},params:t,set:n,defaults:i}){var r;let{preset:s,options:a}=o,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:n,defaults:i})},getPresetD({name:e="",theme:o={},params:t,set:n,defaults:i}){var r,s;let a=e.replace("-directive",""),{preset:l,options:c}=o,d=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:c,params:t,set:n,defaults:i})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,o){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?o.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:o.options.darkModeSelector):[]},getLayerOrder(e,o={},t,n){let{cssLayer:i}=o;return i?`@layer ${W(i.order||i.name||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:o={},params:t,props:n={},set:i,defaults:r}){let s=this.getCommon({name:e,theme:o,params:t,set:i,defaults:r}),a=Object.entries(n).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,d])=>{if(nt(d)&&Object.hasOwn(d,"css")){let m=Dt(d.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${m}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:o={},params:t,props:n={},set:i,defaults:r}){var s;let a={name:e,theme:o,params:t,set:i,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((d,[m,p])=>d.push(`${m}="${p}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Dt(l)}</style>`:""},createTokens(e={},o,t="",n="",i={}){let r=function(a,l={},c=[]){if(c.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};c.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&Xt.test(this.value)){let m=this.value.trim().replace(Xt,p=>{var u;let y=p.slice(1,-1),v=this.tokens[y];if(!v)return console.warn(`Token not found for path: ${y}`),"__UNRESOLVED__";let _=v.computed(a,l,c);return Array.isArray(_)&&_.length===2?`light-dark(${_[0].value},${_[1].value})`:(u=_?.value)!=null?u:"__UNRESOLVED__"});d=qn.test(m.replace(Zn,"0"))?`calc(${m})`:m}return kt(l.binding)&&delete l.binding,c.pop(),{colorScheme:a,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},s=(a,l,c)=>{Object.entries(a).forEach(([d,m])=>{let p=it(d,o.variable.excludedKeyRegex)?l:l?`${l}.${jn(d)}`:jn(d),u=c?`${c}.${d}`:d;nt(m)?s(m,p,u):(i[p]||(i[p]={paths:[],computed:(y,v={},_=[])=>{if(i[p].paths.length===1)return i[p].paths[0].computed(i[p].paths[0].scheme,v.binding,_);if(y&&y!=="none")for(let O=0;O<i[p].paths.length;O++){let k=i[p].paths[O];if(k.scheme===y)return k.computed(y,v.binding,_)}return i[p].paths.map(O=>O.computed(O.scheme,v[O.scheme],_))}}),i[p].paths.push({path:u,value:m,scheme:u.includes("colorScheme.light")?"light":u.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:i}))})};return s(e,t,n),i},getTokenValue(e,o,t){var n;let i=(a=>a.split(".").filter(l=>!it(l.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(o),r=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(n=e[i])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let c=l,{colorScheme:d}=c,m=ht(c,["colorScheme"]);return a[d]=m,a},void 0)},getSelectorRule(e,o,t,n){return t==="class"||t==="attr"?Pt(L(o)?`${e}${o},${e} ${o}`:e,n):Pt(e,Pt(o??":root",n))},transformCSS(e,o,t,n,i={},r,s,a){if(L(o)){let{cssLayer:l}=i;if(n!=="style"){let c=this.getColorSchemeOption(i,s);o=t==="dark"?c.reduce((d,{type:m,selector:p})=>(L(p)&&(d+=p.includes("[CSS]")?p.replace("[CSS]",o):this.getSelectorRule(p,a,m,o)),d),""):Pt(a??":root",o)}if(l){let c={name:"primeui",order:"primeui"};nt(l)&&(c.name=W(l.name,{name:e,type:n})),L(c.name)&&(o=Pt(`@layer ${c.name}`,o),r?.layerNames(c.name))}return o}return""}},E={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:o}=e;o&&(this._theme=en(rt({},o),{options:rt(rt({},this.defaults.options),o.options)}),this._tokens=ot.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),K.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=en(rt({},this.theme),{preset:e}),this._tokens=ot.createTokens(e,this.defaults),this.clearLoadedStyleNames(),K.emit("preset:change",e),K.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=en(rt({},this.theme),{options:e}),this.clearLoadedStyleNames(),K.emit("options:change",e),K.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return ot.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",o){return ot.getCommon({name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ot.getPresetC(t)},getDirective(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ot.getPresetD(t)},getCustomPreset(e="",o,t,n){let i={name:e,preset:o,options:this.options,selector:t,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ot.getPreset(i)},getLayerOrderCSS(e=""){return ot.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",o,t="style",n){return ot.transformCSS(e,o,n,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",o,t={}){return ot.getCommonStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,o,t={}){return ot.getStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),K.emit(`theme:${o}:load`,e),!this._loadingStyles.size&&K.emit("theme:load"))}};var Jn=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var so=0,ti=(()=>{class e{document=b(gt);use(t,n={}){let i=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++so}`,id:d=void 0,media:m=void 0,nonce:p=void 0,first:u=!1,props:y={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),!s.isConnected){r=t;let v=this.document.head;u&&v.firstChild?v.insertBefore(s,v.firstChild):v.appendChild(s),Xe(s,{type:"text/css",media:m,nonce:p,"data-primeng-style-id":c})}return s.textContent!==r&&(s.textContent=r),{id:d,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ht={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},ao=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,A=(()=>{class e{name="base";useStyle=b(ti);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,n={},i=r=>r)=>{let r=i(Ft`${W(t,{dt:ft})}`);return r?this.useStyle.use(Dt(r),C({name:this.name},n)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},n="")=>this.load(this.theme,t,(i="")=>E.transformCSS(t.name||this.name,`${i}${Ft`${n}`}`));loadGlobalCSS=(t={})=>this.load(ao,t);loadGlobalTheme=(t={},n="")=>this.load(Jn,t,(i="")=>E.transformCSS(t.name||this.name,`${i}${Ft`${n}`}`));getCommonTheme=t=>E.getCommon(this.name,t);getComponentTheme=t=>E.getComponent(this.name,t);getDirectiveTheme=t=>E.getDirective(this.name,t);getPresetTheme=(t,n,i)=>E.getCustomPreset(this.name,t,n,i);getLayerOrderThemeCSS=()=>E.getLayerOrderCSS(this.name);getStyleSheet=(t="",n={})=>{if(this.css){let i=W(this.css,{dt:ft}),r=Dt(Ft`${i}${t}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,n={})=>E.getCommonStyleSheet(this.name,t,n);getThemeStyleSheet=(t,n={})=>{let i=[E.getStyleSheet(this.name,t,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Ft`${W(this.theme,{dt:ft})}`,a=Dt(E.transformCSS(r,s)),l=Object.entries(n).reduce((c,[d,m])=>c.push(`${d}="${m}"`)&&c,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var lo=(()=>{class e{theme=X(void 0);csp=X({nonce:void 0});isThemeChanged=!1;document=b(gt);baseStyle=b(A);constructor(){Gt(()=>{K.on("theme:change",t=>{Sn(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),Gt(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){E.clearLoadedStyleNames(),K.clear()}onThemeChange(t){E.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!E.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,C({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},s),r),E.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:n,csp:i}=t||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),on=(()=>{class e extends lo{ripple=X(!1);platformId=b(Ct);inputStyle=X(null);inputVariant=X(null);overlayAppendTo=X("self");overlayOptions={};csp=X({nonce:void 0});filterMatchModeOptions={text:[N.STARTS_WITH,N.CONTAINS,N.NOT_CONTAINS,N.ENDS_WITH,N.EQUALS,N.NOT_EQUALS],numeric:[N.EQUALS,N.NOT_EQUALS,N.LESS_THAN,N.LESS_THAN_OR_EQUAL_TO,N.GREATER_THAN,N.GREATER_THAN_OR_EQUAL_TO],date:[N.DATE_IS,N.DATE_IS_NOT,N.DATE_BEFORE,N.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ye;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=C(C({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:n,ripple:i,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c,filterMatchModeOptions:d,overlayAppendTo:m}=t||{};n&&this.csp.set(n),m&&this.overlayAppendTo.set(m),i&&this.ripple.set(i),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),d&&(this.filterMatchModeOptions=d),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),co=new un("PRIME_NG_CONFIG");function Ss(...e){let o=e?.map(n=>({provide:co,useValue:n,multi:!1})),t=bn(()=>{let n=b(on);e?.forEach(i=>n.setConfig(i))});return pn([...o,t])}var ei=(()=>{class e extends A{name="common";static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),P=(()=>{class e{document=b(gt);platformId=b(Ct);el=b(_e);injector=b(mn);cd=b(Tn);renderer=b(fn);config=b(on);baseComponentStyle=b(ei);baseStyle=b(A);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=pt("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",i={}){return De(t,n,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Cn(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>K.off("theme:change",t))}_loadStyles(){let t=()=>{Ht.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Ht.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Ht.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Ht.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!E.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,C({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,C({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},this.styleOptions),r),E.setLoadedStyleName("common")}if(!E.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,C({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(C({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),E.setLoadedStyleName(this.componentStyle?.name)}if(!E.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,C({name:"layer-order",first:!0},this.styleOptions)),E.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,C({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Ht.clearLoadedStyleNames(),K.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n={}){return Rt(this._getOptionValue(this.$style?.classes,t,C({instance:this},n)))}sx(t="",n=!0,i={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,t,C({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=Rt;static \u0275fac=function(n){return new(n||e)};static \u0275dir=q({type:e,inputs:{dt:"dt"},features:[R([ei,A]),zt]})}return e})();var ni=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var uo=`
    ${ni}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,po={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":L(e.value())&&String(e.value()).length===1,"p-badge-dot":kt(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},ii=(()=>{class e extends A{name="badge";theme=uo;classes=po;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Jt=(()=>{class e extends P{styleClass=j();badgeSize=j();size=j();severity=j();value=j();badgeDisabled=j(!1,{transform:I});_componentStyle=b(ii);static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=B({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,i){n&2&&(T(i.cn(i.cx("root"),i.styleClass())),vn("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[R([ii]),D],decls:1,vars:1,template:function(n,i){n&1&&It(0),n&2&&Ot(i.value())},dependencies:[et,mt],encapsulation:2,changeDetection:0})}return e})(),te=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=J({type:e});static \u0275inj=Y({imports:[Jt,mt,mt]})}return e})();var ee=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)t.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)t.className+=" "+i[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==t)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(t,n){let i=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==t)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,i="self"){i!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,i="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),i==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,i=!0){let r=z=>{if(z)return getComputedStyle(z).getPropertyValue("position")==="relative"?z:r(z.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),m=this.getViewport(),u=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*d},y,v,_="top";l.top+a+s.height>m.height?(y=l.top-u.top-s.height,_="bottom",l.top+y<0&&(y=-1*l.top)):(y=a+l.top-u.top,_="top");let O=l.left+s.width-m.width,k=l.left-u.left;if(s.width>m.width?v=(l.left-u.left)*-1:O>0?v=k-O:v=l.left-u.left,t.style.top=y+"px",t.style.left=v+"px",t.style.transformOrigin=_,i){let z=Zt(/-anchor-gutter$/)?.value;t.style.marginTop=_==="bottom"?`calc(${z??"2px"} * -1)`:z??""}}static absolutePosition(t,n,i=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,d=n.getBoundingClientRect(),m=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),u=this.getViewport(),y,v;d.top+l+s>u.height?(y=d.top+m-s,t.style.transformOrigin="bottom",y<0&&(y=m)):(y=l+d.top+m,t.style.transformOrigin="top"),d.left+a>u.width?v=Math.max(0,d.left+p+c-a):v=d.left+p,t.style.top=y+"px",t.style.left=v+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let i=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let d of c){let m=this.findSingle(a,d);m&&s(m)&&n.push(m)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,m=t.scrollTop,p=t.clientHeight,u=this.getOuterHeight(n);d<0?t.scrollTop=m+d:d+u>p&&(t.scrollTop=m+d-p+u)}static fadeIn(t,n){t.style.opacity=0;let i=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,t.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),t.style.opacity=i},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let i=t.offsetWidth;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(t,n){let i=t.offsetHeight;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let t=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||r.clientWidth,a=t.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var i=t.indexOf("Trident/");if(i>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,i){t[n].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let i=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let i=this.findSingle(t,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,n=""){let i=this.getFocusableElements(t,n);return i.length>0?i[0]:null}static getLastFocusableElement(t,n){let i=this.getFocusableElements(t,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,n=!1){let i=e.getFocusableElements(t),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let i=t.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...i){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(t,n="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(n,i)}static setAttributes(t,n={}){if(this.isElement(t)){let i=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let m=Array.isArray(c)?i(r,c):Object.entries(c).map(([p,u])=>r==="style"&&(u||u===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${u}`:u?p:void 0);l=m.length?l.concat(m.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();var Bt=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=ee.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var ri=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var mo=`
    ${ri}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,ho={root:"p-ink"},si=(()=>{class e extends A{name="ripple";theme=mo;classes=ho;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Fe=(()=>{class e extends P{zone=b(Te);_componentStyle=b(si);animationListener;mouseDownListener;timeout;constructor(){super(),Gt(()=>{dt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Nt(n,"p-ink-active"),!Je(n)&&!tn(n)){let a=Math.max(Q(this.el.nativeElement),ut(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=Dn(this.el.nativeElement),r=t.pageX-i.left+this.document.body.scrollTop-tn(n)/2,s=t.pageY-i.top+this.document.body.scrollLeft-Je(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),qe(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Nt(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&Nt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Nt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Rn(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=q({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[R([si]),D]})}return e})();function fo(){let e=[],o=(r,s)=>{let a=e.length>0?e[e.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(s=>s.value!==r)},n=()=>e.length>0?e[e.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,a)=>{s&&(s.style.zIndex=String(o(r,a)))},clear:r=>{r&&(t(i(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:t}}var Et=fo();var ai=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var go={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},li=(()=>{class e extends A{name="tooltip";theme=ai;classes=go;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var ci=(()=>{class e extends P{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=j(void 0);$appendTo=Mt(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:pt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=b(li);interactionInProgress=!1;constructor(t,n){super(),this.zone=t,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),dt(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=C(C({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Lt(t.relatedTarget,"p-tooltip")||Lt(t.relatedTarget,"p-tooltip-text")||Lt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",t.setAttribute("data-pc-section","arrow"),this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Ye(this.container,this.el.nativeElement):Ye(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),kn(this.container,250),this.getOption("tooltipZIndex")==="auto"?Et.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Et.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof Se){let n=this.viewContainer.createEmbeddedView(t);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[i,r]of n[t].entries())if(i===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),n=t.left+Ze(),i=t.top+Qe();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?At(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,n=Q(t),i=(ut(t)-ut(this.container))/2;this.alignTooltip(n,i);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),n=Q(this.container),i=(ut(this.el.nativeElement)-ut(this.container))/2;this.alignTooltip(-n,i),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),n=this.getHostOffset(),i=Q(this.container),r=(Q(this.el.nativeElement)-Q(this.container))/2,s=ut(this.container);this.alignTooltip(r,-s);let a=n.left-this.getHostOffset().left+i/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=a+"px"}getArrowElement(){return At(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),n=Q(this.container),i=this.getHostOffset(),r=(Q(this.el.nativeElement)-Q(this.container))/2,s=ut(this.el.nativeElement);this.alignTooltip(r,s);let a=i.left-this.getHostOffset().left+n/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=a+"px"}alignTooltip(t,n){let i=this.getHostOffset(),r=i.left+t,s=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=C(C({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Lt(t,"p-inputwrapper")?At(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let t=this.container.getBoundingClientRect(),n=t.top,i=t.left,r=Q(this.container),s=ut(this.container),a=Ae();return i+r>a.width||i<0||n<0||n+s>a.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Bt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Nn(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Et.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||e)(bt(Te),bt(gn))};static \u0275dir=q({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",I],showDelay:[2,"showDelay","showDelay",tt],hideDelay:[2,"hideDelay","hideDelay",tt],life:[2,"life","life",tt],positionTop:[2,"positionTop","positionTop",tt],positionLeft:[2,"positionLeft","positionLeft",tt],autoHide:[2,"autoHide","autoHide",I],fitContent:[2,"fitContent","fitContent",I],hideOnEscape:[2,"hideOnEscape","hideOnEscape",I],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[R([li]),D,zt]})}return e})(),rn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=J({type:e});static \u0275inj=Y({})}return e})();var di=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var vo=["pMenuItemContent",""],Be=e=>({$implicit:e}),_o=()=>({exact:!1}),So=e=>({item:e});function To(e,o){e&1&&_t(0)}function Eo(e,o){if(e&1&&(F(0,"a",6),S(1,To,1,0,"ng-container",7),H()),e&2){let t=f(2),n=jt(4);T(t.cx("itemLink")),h("target",t.item.target),M("title",t.item.title)("href",t.item.url||null,hn)("data-automationid",t.item.automationId)("tabindex",-1)("data-pc-section","action"),g(),h("ngTemplateOutlet",n)("ngTemplateOutletContext",ct(10,Be,t.item))}}function Co(e,o){e&1&&_t(0)}function xo(e,o){if(e&1&&(F(0,"a",8),S(1,Co,1,0,"ng-container",7),H()),e&2){let t=f(2),n=jt(4);T(t.cx("itemLink")),h("routerLink",t.item.routerLink)("queryParams",t.item.queryParams)("routerLinkActiveOptions",t.item.routerLinkActiveOptions||_n(18,_o))("target",t.item.target)("fragment",t.item.fragment)("queryParamsHandling",t.item.queryParamsHandling)("preserveFragment",t.item.preserveFragment)("skipLocationChange",t.item.skipLocationChange)("replaceUrl",t.item.replaceUrl)("state",t.item.state),M("data-automationid",t.item.automationId)("tabindex",-1)("data-pc-section","action")("title",t.item.title),g(),h("ngTemplateOutlet",n)("ngTemplateOutletContext",ct(19,Be,t.item))}}function wo(e,o){if(e&1&&(yt(0),S(1,Eo,2,12,"a",4)(2,xo,2,21,"a",5),vt()),e&2){let t=f();g(),h("ngIf",!(t.item!=null&&t.item.routerLink)),g(),h("ngIf",t.item==null?null:t.item.routerLink)}}function Io(e,o){}function Oo(e,o){e&1&&S(0,Io,0,0,"ng-template")}function Lo(e,o){if(e&1&&(yt(0),S(1,Oo,1,0,null,7),vt()),e&2){let t=f();g(),h("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",ct(2,Be,t.item))}}function Ao(e,o){if(e&1&&U(0,"span"),e&2){let t=f(2);Ee(t.item.iconStyle),T(t.cx("itemIcon",ct(4,So,t.item)))}}function ko(e,o){if(e&1&&(F(0,"span"),It(1),H()),e&2){let t=f(2);T(t.cx("itemLabel")),g(),Ot(t.item.label)}}function Do(e,o){if(e&1&&U(0,"span",12),e&2){let t=f(2);h("innerHTML",t.sanitizeHtml(t.item.label),$e)}}function Mo(e,o){if(e&1&&U(0,"p-badge",13),e&2){let t=f(2);h("styleClass",t.item.badgeStyleClass)("value",t.item.badge)}}function Ro(e,o){if(e&1&&S(0,Ao,1,6,"span",9)(1,ko,2,3,"span",10)(2,Do,1,1,"ng-template",null,1,xe)(4,Mo,1,2,"p-badge",11),e&2){let t=jt(3),n=f();h("ngIf",n.item.icon),g(),h("ngIf",n.item.escape!==!1)("ngIfElse",t),g(3),h("ngIf",n.item.badge)}}var No=["start"],Po=["end"],Fo=["header"],Ho=["item"],Bo=["submenuheader"],$o=["list"],Vo=["container"],Wo=(e,o)=>({showTransitionParams:e,hideTransitionParams:o}),zo=e=>({value:"visible",params:e}),ui=(e,o)=>({item:e,id:o});function Uo(e,o){e&1&&_t(0)}function jo(e,o){if(e&1&&(F(0,"div"),S(1,Uo,1,0,"ng-container",8),H()),e&2){let t=f(2);T(t.cx("start")),M("data-pc-section","start"),g(),h("ngTemplateOutlet",t.startTemplate??t._startTemplate)}}function Go(e,o){if(e&1&&U(0,"li",12),e&2){let t=f(4);T(t.cx("separator"))}}function Ko(e,o){if(e&1&&(F(0,"span"),It(1),H()),e&2){let t=f(3).$implicit;g(),Ot(t.label)}}function qo(e,o){if(e&1&&U(0,"span",16),e&2){let t=f(3).$implicit,n=f(3);h("innerHTML",n.sanitizeHtml(t.label),$e)}}function Zo(e,o){if(e&1&&(yt(0),S(1,Ko,2,1,"span",15)(2,qo,1,1,"ng-template",null,2,xe),vt()),e&2){let t=jt(3),n=f(2).$implicit;g(),h("ngIf",n.escape!==!1)("ngIfElse",t)}}function Qo(e,o){e&1&&_t(0)}function Yo(e,o){if(e&1&&(F(0,"li",13),S(1,Zo,4,2,"ng-container",7)(2,Qo,1,0,"ng-container",14),H()),e&2){let t=f(),n=t.$implicit,i=t.index,r=f(3);T(r.cx("submenuLabel")),h("tooltipOptions",n.tooltipOptions),M("data-automationid",n.automationId)("id",r.menuitemId(n,r.id,i)),g(),h("ngIf",!r.submenuHeaderTemplate&&!r._submenuHeaderTemplate),g(),h("ngTemplateOutlet",r.submenuHeaderTemplate??r._submenuHeaderTemplate)("ngTemplateOutletContext",ct(8,Be,n))}}function Xo(e,o){if(e&1&&U(0,"li",12),e&2){let t=f(5);T(t.cx("separator"))}}function Jo(e,o){if(e&1){let t=Ut();F(0,"li",18),St("onMenuItemClick",function(i){st(t);let r=f(),s=r.$implicit,a=r.index,l=f().index,c=f(3);return at(c.itemClick(i,c.menuitemId(s,c.id,l,a)))}),H()}if(e&2){let t=f(),n=t.$implicit,i=t.index,r=f().index,s=f(3);Ee(n.style),T(s.cn(s.cx("item",Ce(13,ui,n,s.menuitemId(n,s.id,r,i))),n==null?null:n.styleClass)),h("pMenuItemContent",n)("itemTemplate",s.itemTemplate??s._itemTemplate)("tooltipOptions",n.tooltipOptions),M("data-pc-section","menuitem")("aria-label",s.label(n.label))("data-p-focused",s.isItemFocused(s.menuitemId(n,s.id,r,i)))("data-p-disabled",s.disabled(n.disabled))("aria-disabled",s.disabled(n.disabled))("id",s.menuitemId(n,s.id,r,i))}}function tr(e,o){if(e&1&&S(0,Xo,1,2,"li",10)(1,Jo,1,16,"li",17),e&2){let t=o.$implicit,n=f().$implicit;h("ngIf",t.separator&&(t.visible!==!1||n.visible!==!1)),g(),h("ngIf",!t.separator&&t.visible!==!1&&(t.visible!==void 0||n.visible!==!1))}}function er(e,o){if(e&1&&S(0,Go,1,2,"li",10)(1,Yo,3,10,"li",11)(2,tr,2,2,"ng-template",9),e&2){let t=o.$implicit;h("ngIf",t.separator&&t.visible!==!1),g(),h("ngIf",!t.separator),g(),h("ngForOf",t.items)}}function nr(e,o){if(e&1&&S(0,er,3,3,"ng-template",9),e&2){let t=f(2);h("ngForOf",t.model)}}function ir(e,o){if(e&1&&U(0,"li",12),e&2){let t=f(4);T(t.cx("separator"))}}function or(e,o){if(e&1){let t=Ut();F(0,"li",20),St("onMenuItemClick",function(i){st(t);let r=f(),s=r.$implicit,a=r.index,l=f(3);return at(l.itemClick(i,l.menuitemId(s,l.id,a)))}),H()}if(e&2){let t=f(),n=t.$implicit,i=t.index,r=f(3);T(r.cn(r.cx("item",Ce(12,ui,n,r.menuitemId(n,r.id,i))),n==null?null:n.styleClass)),h("pMenuItemContent",n)("itemTemplate",r.itemTemplate??r._itemTemplate)("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),M("data-pc-section","menuitem")("aria-label",r.label(n.label))("data-p-focused",r.isItemFocused(r.menuitemId(n,r.id,i)))("data-p-disabled",r.disabled(n.disabled))("aria-disabled",r.disabled(n.disabled))("id",r.menuitemId(n,r.id,i))}}function rr(e,o){if(e&1&&S(0,ir,1,2,"li",10)(1,or,1,15,"li",19),e&2){let t=o.$implicit;h("ngIf",t.separator&&t.visible!==!1),g(),h("ngIf",!t.separator&&t.visible!==!1)}}function sr(e,o){if(e&1&&S(0,rr,2,2,"ng-template",9),e&2){let t=f(2);h("ngForOf",t.model)}}function ar(e,o){e&1&&_t(0)}function lr(e,o){if(e&1&&(F(0,"div"),S(1,ar,1,0,"ng-container",8),H()),e&2){let t=f(2);T(t.cx("end")),M("data-pc-section","end"),g(),h("ngTemplateOutlet",t.endTemplate??t._endTemplate)}}function cr(e,o){if(e&1){let t=Ut();F(0,"div",4,0),St("click",function(i){st(t);let r=f();return at(r.onOverlayClick(i))})("@overlayAnimation.start",function(i){st(t);let r=f();return at(r.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){st(t);let r=f();return at(r.onOverlayAnimationEnd(i))}),S(2,jo,2,4,"div",5),F(3,"ul",6,1),St("focus",function(i){st(t);let r=f();return at(r.onListFocus(i))})("blur",function(i){st(t);let r=f();return at(r.onListBlur(i))})("keydown",function(i){st(t);let r=f();return at(r.onListKeyDown(i))}),S(5,nr,1,1,null,7)(6,sr,1,1,null,7),H(),S(7,lr,2,4,"div",5),H()}if(e&2){let t=f();Ee(t.sx("root")),T(t.cn(t.cx("root"),t.styleClass)),h("ngStyle",t.style)("@overlayAnimation",ct(24,zo,Ce(21,Wo,t.showTransitionOptions,t.hideTransitionOptions)))("@.disabled",t.popup!==!0),M("data-pc-name","menu")("id",t.id),g(2),h("ngIf",t.startTemplate??t._startTemplate),g(),T(t.cx("list")),M("id",t.id+"_list")("tabindex",t.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",t.activedescendant())("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy),g(2),h("ngIf",t.hasSubMenu()),g(),h("ngIf",!t.hasSubMenu()),g(),h("ngIf",t.endTemplate??t._endTemplate)}}var dr={root:({instance:e})=>({position:e.popup?"absolute":"relative"})},ur={root:({instance:e})=>["p-menu p-component",{"p-menu-overlay":e.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:e,item:o,id:t})=>["p-menu-item",{"p-focus":e.focusedOptionId()&&t===e.focusedOptionId(),"p-disabled":e.disabled(o.disabled)},o.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:e})=>["p-menu-item-icon",e.icon,e.iconClass],itemLabel:"p-menu-item-label"},He=(()=>{class e extends A{name="menu";theme=di;classes=ur;inlineStyles=dr;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var pr=(()=>{class e extends P{item;itemTemplate;onMenuItemClick=new lt;menu;_componentStyle=b(He);constructor(t){super(),this.menu=t}onItemClick(t,n){this.onMenuItemClick.emit({originalEvent:t,item:n})}static \u0275fac=function(n){return new(n||e)(bt(dn(()=>mr)))};static \u0275cmp=B({type:e,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},features:[R([He]),D],attrs:vo,decls:5,vars:5,consts:[["itemContent",""],["htmlLabel",""],[3,"click"],[4,"ngIf"],["pRipple","",3,"class","target",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","style",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,i){if(n&1){let r=Ut();F(0,"div",2),St("click",function(a){return st(r),at(i.onItemClick(a,i.item))}),S(1,wo,3,2,"ng-container",3)(2,Lo,2,4,"ng-container",3)(3,Ro,5,4,"ng-template",null,0,xe),H()}n&2&&(T(i.cx("itemContent")),M("data-pc-section","content"),g(),h("ngIf",!i.itemTemplate),g(),h("ngIf",i.itemTemplate))},dependencies:[et,Kt,qt,je,xn,wn,Fe,rn,te,Jt,mt],encapsulation:2})}return e})(),mr=(()=>{class e extends P{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=j(void 0);onShow=new lt;onHide=new lt;onBlur=new lt;onFocus=new lt;listViewChild;containerViewChild;$appendTo=Mt(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=Mt(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=X(-1);selectedOptionIndex=X(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=b(He);constructor(t){super(),this.overlayService=t,this.id=this.id||pt("pn_id_")}toggle(t){this.visible?this.hide():this.show(t),this.preventDocumentDefault=!0}show(t){this.target=t.currentTarget,this.relativeAlign=t.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"start":this._startTemplate=t.template;break;case"end":this._endTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;case"submenuheader":this._submenuHeaderTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(t){switch(t.toState){case"visible":this.popup&&(this.container=t.element,this.moveOnTop(),this.onShow.emit({}),this.attrSelector&&this.container.setAttribute(this.attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),Yt(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(t){switch(t.toState){case"void":this.autoZIndex&&Et.clear(t.element);break}}alignOverlay(){this.relativeAlign?Ln(this.container,this.target):On(this.container,this.target)}appendOverlay(){ee.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&Et.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!Mn()&&this.hide()}menuitemId(t,n,i,r){return t?.id??`${n}_${i}${r!==void 0?"_"+r:""}`}isItemFocused(t){return this.focusedOptionId()===t}label(t){return typeof t=="function"?t():t}disabled(t){return typeof t=="function"?t():typeof t>"u"?!1:t}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(t){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(t))}onListBlur(t){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(t))}onListKeyDown(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":this.onEnterKey(t);break;case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":case"Tab":this.popup&&(Yt(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(t){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),t.preventDefault()}onArrowUpKey(t){if(t.altKey&&this.popup)Yt(this.target),this.hide(),t.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),t.preventDefault()}}onHomeKey(t){this.changeFocusedOptionIndex(0),t.preventDefault()}onEndKey(t){this.changeFocusedOptionIndex(Qt(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),t.preventDefault()}onEnterKey(t){let n=At(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&At(n,'a[data-pc-section="action"]');this.popup&&Yt(this.target),i?i.click():n&&n.click(),t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}findNextOptionIndex(t){let i=[...Qt(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===t);return i>-1?i+1:0}findPrevOptionIndex(t){let i=[...Qt(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===t);return i>-1?i-1:0}changeFocusedOptionIndex(t){let n=Qt(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let i=t>=n.length?n.length-1:t<0?0:t;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(t,n){let{originalEvent:i,item:r}=t;if(this.focused||(this.focused=!0,this.onFocus.emit()),r.disabled){i.preventDefault();return}!r.url&&!r.routerLink&&i.preventDefault(),r.command&&r.command({originalEvent:i,item:r}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(t){this.popup&&this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&dt(this.platformId)){let t=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(t,"click",n=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),r=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&r&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&r&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&dt(this.platformId)){let t=this.document.defaultView;this.documentResizeListener=this.renderer.listen(t,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&dt(this.platformId)&&(this.scrollHandler=new Bt(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&Et.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(t=>t.items)??!1}isItemHidden(t){return t.separator?t.visible===!1||t.items&&t.items.some(n=>n.visible!==!1):t.visible===!1}static \u0275fac=function(n){return new(n||e)(bt(zn))};static \u0275cmp=B({type:e,selectors:[["p-menu"]],contentQueries:function(n,i,r){if(n&1&&(Z(r,No,4),Z(r,Po,4),Z(r,Fo,4),Z(r,Ho,4),Z(r,Bo,4),Z(r,Ne,4)),n&2){let s;$(s=V())&&(i.startTemplate=s.first),$(s=V())&&(i.endTemplate=s.first),$(s=V())&&(i.headerTemplate=s.first),$(s=V())&&(i.itemTemplate=s.first),$(s=V())&&(i.submenuHeaderTemplate=s.first),$(s=V())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(Ue($o,5),Ue(Vo,5)),n&2){let r;$(r=V())&&(i.listViewChild=r.first),$(r=V())&&(i.containerViewChild=r.first)}},inputs:{model:"model",popup:[2,"popup","popup",I],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",tt],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",tt],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[R([He]),D],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","click",4,"ngIf"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],["role","menu",3,"focus","blur","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class",4,"ngIf"],["pTooltip","","role","none",3,"class","tooltipOptions",4,"ngIf"],["role","separator"],["pTooltip","","role","none",3,"tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions"]],template:function(n,i){n&1&&S(0,cr,8,26,"div",3),n&2&&h("ngIf",!i.popup||i.visible)},dependencies:[et,En,Kt,qt,we,je,pr,rn,ci,te,mt],encapsulation:2,data:{animation:[Ge("overlayAnimation",[Le(":enter",[Oe({opacity:0,transform:"scaleY(0.8)"}),Ie("{{showTransitionParams}}")]),Le(":leave",[Ie("{{hideTransitionParams}}",Oe({opacity:0}))])])]},changeDetection:0})}return e})();var pi=(()=>{class e extends P{autofocus=!1;focused=!1;platformId=b(Ct);document=b(gt);host=b(_e);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){dt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=ee.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275dir=q({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[D]})}return e})();var mi=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var hr=["*"],fr={root:"p-fluid"},hi=(()=>{class e extends A{name="fluid";classes=fr;theme=mi;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var fi=(()=>{class e extends P{_componentStyle=b(hi);static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=B({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&T(i.cx("root"))},features:[R([hi]),D],ngContentSelectors:hr,decls:1,vars:0,template:function(n,i){n&1&&(xt(),wt(0))},dependencies:[et],encapsulation:2,changeDetection:0})}return e})();var gr=["*"],br=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,gi=(()=>{class e extends A{name="baseicon";css=br;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var bi=(()=>{class e extends P{spin=!1;_componentStyle=b(gi);getClassNames(){return Rt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=B({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&T(i.getClassNames())},inputs:{spin:[2,"spin","spin",I]},features:[R([gi]),D],ngContentSelectors:gr,decls:1,vars:0,template:function(n,i){n&1&&(xt(),wt(0))},encapsulation:2,changeDetection:0})}return e})();var yr=["data-p-icon","spinner"],yi=(()=>{class e extends bi{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+pt()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=B({type:e,selectors:[["","data-p-icon","spinner"]],features:[D],attrs:yr,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ve(),Ve(0,"g"),ze(1,"path",0),We(),Ve(2,"defs")(3,"clipPath",1),ze(4,"rect",2),We()()),n&2&&(M("clip-path",i.pathId),g(3),yn("id",i.pathId))},encapsulation:2})}return e})();var vi=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var vr=["content"],_r=["loadingicon"],Sr=["icon"],Tr=["*"],Si=e=>({class:e});function Er(e,o){e&1&&_t(0)}function Cr(e,o){if(e&1&&U(0,"span"),e&2){let t=f(3);T(t.cx("loadingIcon")),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function xr(e,o){if(e&1&&(ve(),U(0,"svg",7)),e&2){let t=f(3);T(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),h("spin",!0),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function wr(e,o){if(e&1&&(yt(0),S(1,Cr,1,4,"span",3)(2,xr,1,5,"svg",6),vt()),e&2){let t=f(2);g(),h("ngIf",t.loadingIcon),g(),h("ngIf",!t.loadingIcon)}}function Ir(e,o){}function Or(e,o){if(e&1&&S(0,Ir,0,0,"ng-template",8),e&2){let t=f(2);h("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Lr(e,o){if(e&1&&(yt(0),S(1,wr,3,2,"ng-container",2)(2,Or,1,1,null,5),vt()),e&2){let t=f();g(),h("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),g(),h("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",ct(3,Si,t.cx("loadingIcon")))}}function Ar(e,o){if(e&1&&U(0,"span"),e&2){let t=f(2);T(t.cx("icon")),M("data-pc-section","icon")}}function kr(e,o){}function Dr(e,o){if(e&1&&S(0,kr,0,0,"ng-template",8),e&2){let t=f(2);h("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Mr(e,o){if(e&1&&(yt(0),S(1,Ar,1,3,"span",3)(2,Dr,1,1,null,5),vt()),e&2){let t=f();g(),h("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),g(),h("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",ct(3,Si,t.cx("icon")))}}function Rr(e,o){if(e&1&&(F(0,"span"),It(1),H()),e&2){let t=f();T(t.cx("label")),M("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),g(),Ot(t.label)}}function Nr(e,o){if(e&1&&U(0,"p-badge",9),e&2){let t=f();h("value",t.badge)("severity",t.badgeSeverity)}}var Pr={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,o])=>!!o).reduce((o,[t])=>o+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},_i=(()=>{class e extends A{name="button";theme=vi;classes=Pr;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Sc=(()=>{class e extends P{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=j(void 0,{transform:I});onClick=new lt;onFocus=new lt;onBlur=new lt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=b(fi,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=b(_i);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=B({type:e,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(Z(r,vr,5),Z(r,_r,5),Z(r,Sr,5),Z(r,Ne,4)),n&2){let s;$(s=V())&&(i.contentTemplate=s.first),$(s=V())&&(i.loadingIconTemplate=s.first),$(s=V())&&(i.iconTemplate=s.first),$(s=V())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",I],loading:[2,"loading","loading",I],loadingIcon:"loadingIcon",raised:[2,"raised","raised",I],rounded:[2,"rounded","rounded",I],text:[2,"text","text",I],plain:[2,"plain","plain",I],severity:"severity",outlined:[2,"outlined","outlined",I],link:[2,"link","link",I],tabindex:[2,"tabindex","tabindex",tt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",I],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[R([_i]),D],ngContentSelectors:Tr,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,i){n&1&&(xt(),F(0,"button",0),St("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),wt(1),S(2,Er,1,0,"ng-container",1)(3,Lr,3,5,"ng-container",2)(4,Mr,3,5,"ng-container",2)(5,Rr,2,5,"span",3)(6,Nr,1,2,"p-badge",4),H()),n&2&&(T(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),h("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus)),M("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex)),g(2),h("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),g(),h("ngIf",i.loading),g(),h("ngIf",!i.loading),g(),h("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),g(),h("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[et,Kt,qt,we,Fe,pi,yi,te,Jt,mt],encapsulation:2,changeDetection:0})}return e})();export{Gr as a,Ss as b,mr as c,Sc as d};
