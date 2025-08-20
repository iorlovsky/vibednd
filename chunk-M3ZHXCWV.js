import{c as rt,d as De,f as ve,h as Ve,i as Ue,k as vt}from"./chunk-TBYF2LDC.js";import{$ as an,T as st,U as R,X as Ne,Y as Hn,Z as me,_ as at,aa as Bn,b as Fn,ba as xe,c as Pn,ca as Ge,d as An,da as Xt,e as Ye,ea as Z,f as ot,g as Xe,ga as $n,h as _e,ha as Ut,i as W,ia as Ce,j as Rn,ja as jn,p as Vn,q as Nn,s as sn}from"./chunk-SSYAWZFW.js";import{Ab as j,Bb as Me,Cb as ze,Db as ge,Ea as je,Eb as K,Fa as v,Fb as J,Gb as re,Ha as Qt,Hb as ue,Ib as tt,Jb as X,Kb as u,La as Oe,Lb as We,Mb as Qe,Nb as se,Ob as Ee,Pa as rn,Pb as P,Qa as Sn,Qb as A,Sa as f,Tb as nt,Ua as In,Ub as yt,Wa as Zt,Wb as Ze,Xa as oe,Xb as C,Yb as be,Za as qt,Zb as ke,_b as Dn,a as T,ac as B,bc as Yt,cc as ee,db as z,dc as qe,eb as pe,ec as Ln,fa as Cn,fb as G,ga as I,gb as w,gc as Re,ha as de,ib as b,j as he,ja as wn,ka as jt,kb as Ie,kc as On,la as y,lb as et,lc as it,ma as Tn,mc as _t,pb as En,pc as ae,ra as N,rb as kn,sa as H,sb as L,ta as Y,tc as Mn,ua as Wt,va as ce,xb as p,xc as O,yb as E,yc as ye,za as fe,zb as k,zc as zn}from"./chunk-UCK26TOZ.js";function lt(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[lt(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Le(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function Fe(t,o){if(t&&o){let e=n=>{Le(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function we(t,o){if(t&&o){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function xt(t){for(let o of document?.styleSheets)try{for(let e of o?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Wn(t){let o={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block",o.width=t.offsetWidth,o.height=t.offsetHeight,t.style.display=n,t.style.visibility=e}return o}function Ke(){let t=window,o=document,e=o.documentElement,n=o.getElementsByTagName("body")[0],i=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:i,height:r}}function ln(t){return t?Math.abs(t.scrollLeft):0}function dn(){let t=document.documentElement;return(window.pageXOffset||ln(t))-(t.clientLeft||0)}function cn(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function po(t){return t?getComputedStyle(t).direction==="rtl":!1}function Qn(t,o,e=!0){var n,i,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Wn(t),l=a.height,d=a.width,c=o.offsetHeight,g=o.offsetWidth,h=o.getBoundingClientRect(),m=cn(),_=dn(),x=Ke(),S,M,$="top";h.top+c+l>x.height?(S=h.top+m-l,$="bottom",S<0&&(S=m)):S=c+h.top+m,h.left+d>x.width?M=Math.max(0,h.left+_+g-d):M=h.left+_,po(t)?t.style.insetInlineEnd=M+"px":t.style.insetInlineStart=M+"px",t.style.top=S+"px",t.style.transformOrigin=$,e&&(t.style.marginTop=$==="bottom"?`calc(${(i=(n=xt(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=xt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function U(t,o){if(t instanceof HTMLElement){let e=t.offsetWidth;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Zn(t,o,e=!0,n=void 0){var i;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Wn(t),s=o.offsetHeight,a=o.getBoundingClientRect(),l=Ke(),d,c,g=n??"top";if(!n&&a.top+s+r.height>l.height?(d=-1*r.height,g="bottom",a.top+d<0&&(d=-1*a.top)):d=s,r.width>l.width?c=a.left*-1:a.left+r.width>l.width?c=(a.left+r.width-l.width)*-1:c=0,t.style.top=d+"px",t.style.insetInlineStart=c+"px",t.style.transformOrigin=g,e){let h=(i=xt(/-anchor-gutter$/))==null?void 0:i.value;t.style.marginTop=g==="bottom"?`calc(${h??"2px"} * -1)`:h??""}}}function uo(t){if(t){let o=t.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function mo(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&uo(t))}function dt(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function qn(t){let o=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?o=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?o=t.el.nativeElement:o=t.el)),dt(o)?o:void 0}function ho(t,o){var e,n,i;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@first":return o?.firstElementChild;case"@last":return o?.lastElementChild;case"@child":return(e=o?.children)==null?void 0:e[0];case"@parent":return o?.parentElement;case"@grandparent":return(n=o?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((i=o?.children)==null?void 0:i[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=qn(r);return mo(s)?s:r?.nodeType===9?r:void 0}}}function Ct(t,o){let e=ho(t,o);if(e)e.appendChild(o);else throw new Error("Cannot append "+o+" to "+t)}function Gt(t,o={}){if(dt(t)){let e=(n,i)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[i].flat().reduce((l,d)=>{if(d!=null){let c=typeof d;if(c==="string"||c==="number")l.push(d);else if(c==="object"){let g=Array.isArray(d)?e(n,d):Object.entries(d).map(([h,m])=>n==="style"&&(m||m===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${m}`:m?h:void 0);l=g.length?l.concat(g.filter(h=>!!h)):l}}return l},a)};Object.entries(o).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),i):n==="p-bind"||n==="pBind"?Gt(t,i):(i=n==="class"?[...new Set(e("class",i))].join(" ").trim():n==="style"?e("style",i).join(";").trim():i,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=i),t.setAttribute(n,i))}})}}function Yn(t,o={},...e){if(t){let n=document.createElement(t);return Gt(n,o),n.append(...e),n}}function Xn(t,o){if(t){t.style.opacity="0";let e=+new Date,n="0",i=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/o}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(i):setTimeout(i,16))};i()}}function ct(t,o){return dt(t)?Array.from(t.querySelectorAll(o)):[]}function Je(t,o){return dt(t)?t.matches(o)?t:t.querySelector(o):null}function He(t,o){t&&document.activeElement!==t&&t.focus(o)}function Ws(t,o){if(dt(t)){let e=t.getAttribute(o);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Un(t,o=""){let e=ct(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),n=[];for(let i of e)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&n.push(i);return n}function Gn(t,o){let e=Un(t,o);return e.length>0?e[0]:null}function pn(t){if(t){let o=t.offsetHeight,e=getComputedStyle(t);return o-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),o}return 0}function Kn(t,o){let e=Un(t,o);return e.length>0?e[e.length-1]:null}function Jn(t){if(t){let o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||ln(document.documentElement)||ln(document.body)||0)}}return{top:"auto",left:"auto"}}function te(t,o){if(t){let e=t.offsetHeight;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function un(t){if(t){let o=t.offsetWidth,e=getComputedStyle(t);return o-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),o}return 0}function ei(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function ti(t){var o;t&&("remove"in Element.prototype?t.remove():(o=t.parentNode)==null||o.removeChild(t))}function ni(t,o){let e=qn(t);if(e)e.removeChild(o);else throw new Error("Cannot remove "+o+" from "+t)}function ii(t,o="",e){dt(t)&&e!==null&&e!==void 0&&t.setAttribute(o,e)}function oi(){let t=new Map;return{on(o,e){let n=t.get(o);return n?n.push(e):n=[e],t.set(o,n),this},off(o,e){let n=t.get(o);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(o,e){let n=t.get(o);n&&n.forEach(i=>{i(e)})},clear(){t.clear()}}}var Kt={};function q(t="pui_id_"){return Object.hasOwn(Kt,t)||(Kt[t]=0),Kt[t]++,`${t}${Kt[t]}`}var fo=Object.defineProperty,go=Object.defineProperties,bo=Object.getOwnPropertyDescriptors,Jt=Object.getOwnPropertySymbols,ai=Object.prototype.hasOwnProperty,li=Object.prototype.propertyIsEnumerable,ri=(t,o,e)=>o in t?fo(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,Se=(t,o)=>{for(var e in o||(o={}))ai.call(o,e)&&ri(t,e,o[e]);if(Jt)for(var e of Jt(o))li.call(o,e)&&ri(t,e,o[e]);return t},mn=(t,o)=>go(t,bo(o)),Pe=(t,o)=>{var e={};for(var n in t)ai.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Jt)for(var n of Jt(t))o.indexOf(n)<0&&li.call(t,n)&&(e[n]=t[n]);return e};function Us(...t){return Hn(...t)}var yo=oi(),le=yo,wt=/{([^}]*)}/g,di=/(\d+\s+[\+\-\*\/]\s+\d+)/g,ci=/var\([^)]+\)/g;function si(t){return at(t)?t.replace(/[A-Z]/g,(o,e)=>e===0?o:"."+o.toLowerCase()).toLowerCase():t}function _o(t){return Ne(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function vo(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function hn(t="",o=""){return vo(`${at(t,!1)&&at(o,!1)?`${t}-`:t}${o}`)}function pi(t="",o=""){return`--${hn(t,o)}`}function xo(t=""){let o=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(o+e)%2!==0}function ui(t,o="",e="",n=[],i){if(at(t)){let r=t.trim();if(xo(r))return;if(xe(r,wt)){let s=r.replaceAll(wt,a=>{let l=a.replace(/{|}/g,"").split(".").filter(d=>!n.some(c=>xe(d,c)));return`var(${pi(e,Xt(l.join("-")))}${R(i)?`, ${i}`:""})`});return xe(s.replace(ci,"0"),di)?`calc(${s})`:s}return r}else if(Bn(t))return t}function Co(t,o,e){at(o,!1)&&t.push(`${o}:${e};`)}function pt(t,o){return t?`${t}{${o}}`:""}function mi(t,o){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],d=0,c="",g=null,h=0;for(;d<=s.length;){let m=s[d];if((m==='"'||m==="'"||m==="`")&&s[d-1]!=="\\"&&(g=g===m?null:m),!g&&(m==="("&&h++,m===")"&&h--,(m===","||d===s.length)&&h===0)){let _=c.trim();_.startsWith("dt(")?l.push(mi(_,a)):l.push(n(_)),c="",d++;continue}m!==void 0&&(c+=m),d++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let i=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&i.push([a,s])}if(!i.length)return t;for(let s=i.length-1;s>=0;s--){let[a,l]=i[s],d=t.slice(a+3,l),c=e(d,o),g=o(...c);t=t.slice(0,a)+g+t.slice(l+1)}return t}var Ae=(...t)=>wo(D.getTheme(),...t),wo=(t={},o,e,n)=>{if(o){let{variable:i,options:r}=D.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=xe(o,wt)?o:`{${o}}`;return n==="value"||st(n)&&a==="strict"?D.getTokenValue(o):ui(l,void 0,s,[i.excludedKeyRegex],e)}return""};function ut(t,...o){if(t instanceof Array){let e=t.reduce((n,i,r)=>{var s;return n+i+((s=me(o[r],{dt:Ae}))!=null?s:"")},"");return mi(e,Ae)}return me(t,{dt:Ae})}function To(t,o={}){let e=D.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=o,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:c,path:g}=l.pop();for(let h in c){let m=c[h],_=_o(m),x=xe(h,r)?hn(g):hn(g,Xt(h));if(Ne(_))l.push({node:_,path:x});else{let S=pi(x),M=ui(_,x,n,[r]);Co(a,S,M);let $=x;n&&$.startsWith(n+"-")&&($=$.slice(n.length+1)),s.push($.replace(/-/g,"."))}}}let d=a.join("");return{value:a,tokens:s,declarations:d,css:pt(i,d)}}var Te={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let o=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=o.map(i=>i.resolve(e)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,o){return To(t,{prefix:o?.prefix})},getCommon({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s,a,l,d,c,g;let{preset:h,options:m}=o,_,x,S,M,$,ie,Et;if(R(h)&&m.transform!=="strict"){let{primitive:kt,semantic:Dt,extend:Lt}=h,ft=Dt||{},{colorScheme:Ot}=ft,Mt=Pe(ft,["colorScheme"]),zt=Lt||{},{colorScheme:Ft}=zt,gt=Pe(zt,["colorScheme"]),bt=Ot||{},{dark:Pt}=bt,At=Pe(bt,["dark"]),Rt=Ft||{},{dark:Vt}=Rt,Nt=Pe(Rt,["dark"]),Ht=R(kt)?this._toVariables({primitive:kt},m):{},Bt=R(Mt)?this._toVariables({semantic:Mt},m):{},$t=R(At)?this._toVariables({light:At},m):{},yn=R(Pt)?this._toVariables({dark:Pt},m):{},_n=R(gt)?this._toVariables({semantic:gt},m):{},vn=R(Nt)?this._toVariables({light:Nt},m):{},xn=R(Vt)?this._toVariables({dark:Vt},m):{},[Zi,qi]=[(r=Ht.declarations)!=null?r:"",Ht.tokens],[Yi,Xi]=[(s=Bt.declarations)!=null?s:"",Bt.tokens||[]],[Ui,Gi]=[(a=$t.declarations)!=null?a:"",$t.tokens||[]],[Ki,Ji]=[(l=yn.declarations)!=null?l:"",yn.tokens||[]],[eo,to]=[(d=_n.declarations)!=null?d:"",_n.tokens||[]],[no,io]=[(c=vn.declarations)!=null?c:"",vn.tokens||[]],[oo,ro]=[(g=xn.declarations)!=null?g:"",xn.tokens||[]];_=this.transformCSS(t,Zi,"light","variable",m,n,i),x=qi;let so=this.transformCSS(t,`${Yi}${Ui}`,"light","variable",m,n,i),ao=this.transformCSS(t,`${Ki}`,"dark","variable",m,n,i);S=`${so}${ao}`,M=[...new Set([...Xi,...Gi,...Ji])];let lo=this.transformCSS(t,`${eo}${no}color-scheme:light`,"light","variable",m,n,i),co=this.transformCSS(t,`${oo}color-scheme:dark`,"dark","variable",m,n,i);$=`${lo}${co}`,ie=[...new Set([...to,...io,...ro])],Et=me(h.css,{dt:Ae})}return{primitive:{css:_,tokens:x},semantic:{css:S,tokens:M},global:{css:$,tokens:ie},style:Et}},getPreset({name:t="",preset:o={},options:e,params:n,set:i,defaults:r,selector:s}){var a,l,d;let c,g,h;if(R(o)&&e.transform!=="strict"){let m=t.replace("-directive",""),_=o,{colorScheme:x,extend:S,css:M}=_,$=Pe(_,["colorScheme","extend","css"]),ie=S||{},{colorScheme:Et}=ie,kt=Pe(ie,["colorScheme"]),Dt=x||{},{dark:Lt}=Dt,ft=Pe(Dt,["dark"]),Ot=Et||{},{dark:Mt}=Ot,zt=Pe(Ot,["dark"]),Ft=R($)?this._toVariables({[m]:Se(Se({},$),kt)},e):{},gt=R(ft)?this._toVariables({[m]:Se(Se({},ft),zt)},e):{},bt=R(Lt)?this._toVariables({[m]:Se(Se({},Lt),Mt)},e):{},[Pt,At]=[(a=Ft.declarations)!=null?a:"",Ft.tokens||[]],[Rt,Vt]=[(l=gt.declarations)!=null?l:"",gt.tokens||[]],[Nt,Ht]=[(d=bt.declarations)!=null?d:"",bt.tokens||[]],Bt=this.transformCSS(m,`${Pt}${Rt}`,"light","variable",e,i,r,s),$t=this.transformCSS(m,Nt,"dark","variable",e,i,r,s);c=`${Bt}${$t}`,g=[...new Set([...At,...Vt,...Ht])],h=me(M,{dt:Ae})}return{css:c,tokens:g,style:h}},getPresetC({name:t="",theme:o={},params:e,set:n,defaults:i}){var r;let{preset:s,options:a}=o,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:i})},getPresetD({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s;let a=t.replace("-directive",""),{preset:l,options:d}=o,c=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:d,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,o){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?o.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:o.options.darkModeSelector):[]},getLayerOrder(t,o={},e,n){let{cssLayer:i}=o;return i?`@layer ${me(i.order||i.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){let s=this.getCommon({name:t,theme:o,params:e,set:i,defaults:r}),a=Object.entries(n).reduce((l,[d,c])=>l.push(`${d}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[d,c])=>{if(Ne(c)&&Object.hasOwn(c,"css")){let g=Ge(c.css),h=`${d}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${a}>${g}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){var s;let a={name:t,theme:o,params:e,set:i,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,d=Object.entries(n).reduce((c,[g,h])=>c.push(`${g}="${h}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${d}>${Ge(l)}</style>`:""},createTokens(t={},o,e="",n="",i={}){let r=function(a,l={},d=[]){if(d.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};d.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&wt.test(this.value)){let g=this.value.trim().replace(wt,h=>{var m;let _=h.slice(1,-1),x=this.tokens[_];if(!x)return console.warn(`Token not found for path: ${_}`),"__UNRESOLVED__";let S=x.computed(a,l,d);return Array.isArray(S)&&S.length===2?`light-dark(${S[0].value},${S[1].value})`:(m=S?.value)!=null?m:"__UNRESOLVED__"});c=di.test(g.replace(ci,"0"))?`calc(${g})`:g}return st(l.binding)&&delete l.binding,d.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,d)=>{Object.entries(a).forEach(([c,g])=>{let h=xe(c,o.variable.excludedKeyRegex)?l:l?`${l}.${si(c)}`:si(c),m=d?`${d}.${c}`:c;Ne(g)?s(g,h,m):(i[h]||(i[h]={paths:[],computed:(_,x={},S=[])=>{if(i[h].paths.length===1)return i[h].paths[0].computed(i[h].paths[0].scheme,x.binding,S);if(_&&_!=="none")for(let M=0;M<i[h].paths.length;M++){let $=i[h].paths[M];if($.scheme===_)return $.computed(_,x.binding,S)}return i[h].paths.map(M=>M.computed(M.scheme,x[M.scheme],S))}}),i[h].paths.push({path:m,value:g,scheme:m.includes("colorScheme.light")?"light":m.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:i}))})};return s(t,e,n),i},getTokenValue(t,o,e){var n;let i=(a=>a.split(".").filter(l=>!xe(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(o),r=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[i])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let d=l,{colorScheme:c}=d,g=Pe(d,["colorScheme"]);return a[c]=g,a},void 0)},getSelectorRule(t,o,e,n){return e==="class"||e==="attr"?pt(R(o)?`${t}${o},${t} ${o}`:t,n):pt(t,pt(o??":root",n))},transformCSS(t,o,e,n,i={},r,s,a){if(R(o)){let{cssLayer:l}=i;if(n!=="style"){let d=this.getColorSchemeOption(i,s);o=e==="dark"?d.reduce((c,{type:g,selector:h})=>(R(h)&&(c+=h.includes("[CSS]")?h.replace("[CSS]",o):this.getSelectorRule(h,a,g,o)),c),""):pt(a??":root",o)}if(l){let d={name:"primeui",order:"primeui"};Ne(l)&&(d.name=me(l.name,{name:t,type:n})),R(d.name)&&(o=pt(`@layer ${d.name}`,o),r?.layerNames(d.name))}return o}return""}},D={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:o}=t;o&&(this._theme=mn(Se({},o),{options:Se(Se({},this.defaults.options),o.options)}),this._tokens=Te.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),le.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=mn(Se({},this.theme),{preset:t}),this._tokens=Te.createTokens(t,this.defaults),this.clearLoadedStyleNames(),le.emit("preset:change",t),le.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=mn(Se({},this.theme),{options:t}),this.clearLoadedStyleNames(),le.emit("options:change",t),le.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Te.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",o){return Te.getCommon({name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Te.getPresetC(e)},getDirective(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Te.getPresetD(e)},getCustomPreset(t="",o,e,n){let i={name:t,preset:o,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Te.getPreset(i)},getLayerOrderCSS(t=""){return Te.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",o,e="style",n){return Te.transformCSS(t,o,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",o,e={}){return Te.getCommonStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,o,e={}){return Te.getStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),le.emit(`theme:${o}:load`,t),!this._loadingStyles.size&&le.emit("theme:load"))}};var hi=`
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
`;var So=0,fi=(()=>{class t{document=y(ce);use(e,n={}){let i=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:d=`style_${++So}`,id:c=void 0,media:g=void 0,nonce:h=void 0,first:m=!1,props:_={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${d}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){r=e;let x=this.document.head;m&&x.firstChild?x.insertBefore(s,x.firstChild):x.appendChild(s),Gt(s,{type:"text/css",media:g,nonce:h,"data-primeng-style-id":d})}return s.textContent!==r&&(s.textContent=r),{id:c,name:d,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Io=`
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
`,F=(()=>{class t{name="base";useStyle=y(fi);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},i=r=>r)=>{let r=i(ut`${me(e,{dt:Ae})}`);return r?this.useStyle.use(Ge(r),T({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(i="")=>D.transformCSS(e.name||this.name,`${i}${ut`${n}`}`));loadGlobalCSS=(e={})=>this.load(Io,e);loadGlobalTheme=(e={},n="")=>this.load(hi,e,(i="")=>D.transformCSS(e.name||this.name,`${i}${ut`${n}`}`));getCommonTheme=e=>D.getCommon(this.name,e);getComponentTheme=e=>D.getComponent(this.name,e);getDirectiveTheme=e=>D.getDirective(this.name,e);getPresetTheme=(e,n,i)=>D.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>D.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let i=me(this.css,{dt:Ae}),r=Ge(ut`${i}${e}`),s=Object.entries(n).reduce((a,[l,d])=>a.push(`${l}="${d}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>D.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[D.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=ut`${me(this.theme,{dt:Ae})}`,a=Ge(D.transformCSS(r,s)),l=Object.entries(n).reduce((d,[c,g])=>d.push(`${c}="${g}"`)&&d,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Eo=(()=>{class t{theme=fe(void 0);csp=fe({nonce:void 0});isThemeChanged=!1;document=y(ce);baseStyle=y(F);constructor(){_t(()=>{le.on("theme:change",e=>{On(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),_t(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){D.clearLoadedStyleNames(),le.clear()}onThemeChange(e){D.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!D.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,T({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,T({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,T({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(T({name:"global-style"},s),r),D.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fn=(()=>{class t extends Eo{ripple=fe(!1);platformId=y(Oe);inputStyle=fe(null);inputVariant=fe(null);overlayAppendTo=fe("self");overlayOptions={};csp=fe({nonce:void 0});filterMatchModeOptions={text:[Z.STARTS_WITH,Z.CONTAINS,Z.NOT_CONTAINS,Z.ENDS_WITH,Z.EQUALS,Z.NOT_EQUALS],numeric:[Z.EQUALS,Z.NOT_EQUALS,Z.LESS_THAN,Z.LESS_THAN_OR_EQUAL_TO,Z.GREATER_THAN,Z.GREATER_THAN_OR_EQUAL_TO],date:[Z.DATE_IS,Z.DATE_IS_NOT,Z.DATE_BEFORE,Z.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new he;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=T(T({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:d,filterMatchModeOptions:c,overlayAppendTo:g}=e||{};n&&this.csp.set(n),g&&this.overlayAppendTo.set(g),i&&this.ripple.set(i),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),d&&this.setTranslation(d),c&&(this.filterMatchModeOptions=c),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ko=new wn("PRIME_NG_CONFIG");function Sa(...t){let o=t?.map(n=>({provide:ko,useValue:n,multi:!1})),e=En(()=>{let n=y(fn);t?.forEach(i=>n.setConfig(i))});return Tn([...o,e])}var gi=(()=>{class t extends F{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),V=(()=>{class t{document=y(ce);platformId=y(Oe);el=y(Qt);injector=y(Wt);cd=y(Mn);renderer=y(Zt);config=y(fn);baseComponentStyle=y(gi);baseStyle=y(F);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=q("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",i={}){return an(e,n,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Rn(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>le.off("theme:change",e))}_loadStyles(){let e=()=>{mt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),mt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!mt.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),mt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!D.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,T({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,T({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,T({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(T({name:"global-style"},this.styleOptions),r),D.setLoadedStyleName("common")}if(!D.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,T({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(T({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),D.setLoadedStyleName(this.componentStyle?.name)}if(!D.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,T({name:"layer-order",first:!0},this.styleOptions)),D.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,T({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){mt.clearLoadedStyleNames(),le.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return lt(this._getOptionValue(this.$style?.classes,e,T({instance:this},n)))}sx(e="",n=!0,i={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,T({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=lt;static \u0275fac=function(n){return new(n||t)};static \u0275dir=G({type:t,inputs:{dt:"dt"},features:[B([gi,F]),je]})}return t})();var Be=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=ie=>{if(ie)return getComputedStyle(ie).getPropertyValue("position")==="relative"?ie:r(ie.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),d=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),g=this.getViewport(),m=r(e)?.getBoundingClientRect()||{top:-1*d,left:-1*c},_,x,S="top";l.top+a+s.height>g.height?(_=l.top-m.top-s.height,S="bottom",l.top+_<0&&(_=-1*l.top)):(_=a+l.top-m.top,S="top");let M=l.left+s.width-g.width,$=l.left-m.left;if(s.width>g.width?x=(l.left-m.left)*-1:M>0?x=$-M:x=l.left-m.left,e.style.top=_+"px",e.style.left=x+"px",e.style.transformOrigin=S,i){let ie=xt(/-anchor-gutter$/)?.value;e.style.marginTop=S==="bottom"?`calc(${ie??"2px"} * -1)`:ie??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,d=n.offsetWidth,c=n.getBoundingClientRect(),g=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),m=this.getViewport(),_,x;c.top+l+s>m.height?(_=c.top+g-s,e.style.transformOrigin="bottom",_<0&&(_=g)):(_=l+c.top+g,e.style.transformOrigin="top"),c.left+a>m.width?x=Math.max(0,c.left+h+d-a):x=c.left+h,e.style.top=_+"px",e.style.left=x+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let d=l.split(",");for(let c of d){let g=this.findSingle(a,c);g&&s(g)&&n.push(g)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,g=e.scrollTop,h=e.clientHeight,m=this.getOuterHeight(n);c<0?e.scrollTop=g+c:c+m>h&&(e.scrollTop=g+c-h+m)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,a=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,d)=>{if(d!=null){let c=typeof d;if(c==="string"||c==="number")l.push(d);else if(c==="object"){let g=Array.isArray(d)?i(r,d):Object.entries(d).map(([h,m])=>r==="style"&&(m||m===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${m}`:m?h:void 0);l=g.length?l.concat(g.filter(h=>!!h)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var ht=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=Be.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var bi=(()=>{class t extends V{autofocus=!1;focused=!1;platformId=y(Oe);document=y(ce);host=y(Qt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){W(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Be.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275dir=G({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[w]})}return t})();var yi=`
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
`;var Do=`
    ${yi}

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
`,Lo={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":R(t.value())&&String(t.value()).length===1,"p-badge-dot":st(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},_i=(()=>{class t extends F{name="badge";theme=Do;classes=Lo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Tt=(()=>{class t extends V{styleClass=ae();badgeSize=ae();size=ae();severity=ae();value=ae();badgeDisabled=ae(!1,{transform:O});_componentStyle=y(_i);static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=z({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,i){n&2&&(C(i.cn(i.cx("root"),i.styleClass())),yt("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[B([_i]),w],decls:1,vars:1,template:function(n,i){n&1&&be(0),n&2&&ke(i.value())},dependencies:[_e,Ce],encapsulation:2,changeDetection:0})}return t})(),St=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=pe({type:t});static \u0275inj=de({imports:[Tt,Ce,Ce]})}return t})();var xi=`
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
`;var Oo=["*"],Mo={root:"p-fluid"},Ci=(()=>{class t extends F{name="fluid";classes=Mo;theme=xi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var wi=(()=>{class t extends V{_componentStyle=y(Ci);static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=z({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&C(i.cx("root"))},features:[B([Ci]),w],ngContentSelectors:Oo,decls:1,vars:0,template:function(n,i){n&1&&(We(),Qe(0))},dependencies:[_e],encapsulation:2,changeDetection:0})}return t})();var zo=["*"],Fo=`
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
`,Ti=(()=>{class t extends F{name="baseicon";css=Fo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $e=(()=>{class t extends V{spin=!1;_componentStyle=y(Ti);getClassNames(){return lt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=z({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&C(i.getClassNames())},inputs:{spin:[2,"spin","spin",O]},features:[B([Ti]),w],ngContentSelectors:zo,decls:1,vars:0,template:function(n,i){n&1&&(We(),Qe(0))},encapsulation:2,changeDetection:0})}return t})();var Po=["data-p-icon","spinner"],Si=(()=>{class t extends $e{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+q()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=z({type:t,selectors:[["","data-p-icon","spinner"]],features:[w],attrs:Po,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Y(),Me(0,"g"),ge(1,"path",0),ze(),Me(2,"defs")(3,"clipPath",1),ge(4,"rect",2),ze()()),n&2&&(L("clip-path",i.pathId),f(3),tt("id",i.pathId))},encapsulation:2})}return t})();var Ao=["data-p-icon","times"],Ii=(()=>{class t extends $e{static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=z({type:t,selectors:[["","data-p-icon","times"]],features:[w],attrs:Ao,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(Y(),ge(0,"path",0))},encapsulation:2})}return t})();var Ro=["data-p-icon","window-maximize"],Ei=(()=>{class t extends $e{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+q()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=z({type:t,selectors:[["","data-p-icon","window-maximize"]],features:[w],attrs:Ro,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Y(),Me(0,"g"),ge(1,"path",0),ze(),Me(2,"defs")(3,"clipPath",1),ge(4,"rect",2),ze()()),n&2&&(L("clip-path",i.pathId),f(3),tt("id",i.pathId))},encapsulation:2})}return t})();var Vo=["data-p-icon","window-minimize"],ki=(()=>{class t extends $e{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+q()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=z({type:t,selectors:[["","data-p-icon","window-minimize"]],features:[w],attrs:Vo,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Y(),Me(0,"g"),ge(1,"path",0),ze(),Me(2,"defs")(3,"clipPath",1),ge(4,"rect",2),ze()()),n&2&&(L("clip-path",i.pathId),f(3),tt("id",i.pathId))},encapsulation:2})}return t})();var Di=`
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
`;var No=`
    ${Di}
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
`,Ho={root:"p-ink"},Li=(()=>{class t extends F{name="ripple";theme=No;classes=Ho;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var en=(()=>{class t extends V{zone=y(et);_componentStyle=y(Li);animationListener;mouseDownListener;timeout;constructor(){super(),_t(()=>{W(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(we(n,"p-ink-active"),!pn(n)&&!un(n)){let a=Math.max(U(this.el.nativeElement),te(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=Jn(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-un(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-pn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Fe(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&we(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&we(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),we(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ti(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=G({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[B([Li]),w]})}return t})();var Oi=`
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
`;var Bo=["content"],$o=["loadingicon"],jo=["icon"],Wo=["*"],Fi=t=>({class:t});function Qo(t,o){t&1&&re(0)}function Zo(t,o){if(t&1&&j(0,"span"),t&2){let e=u(3);C(e.cx("loadingIcon")),L("aria-hidden",!0)("data-pc-section","loadingicon")}}function qo(t,o){if(t&1&&(Y(),j(0,"svg",7)),t&2){let e=u(3);C(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),p("spin",!0),L("aria-hidden",!0)("data-pc-section","loadingicon")}}function Yo(t,o){if(t&1&&(K(0),b(1,Zo,1,4,"span",3)(2,qo,1,5,"svg",6),J()),t&2){let e=u(2);f(),p("ngIf",e.loadingIcon),f(),p("ngIf",!e.loadingIcon)}}function Xo(t,o){}function Uo(t,o){if(t&1&&b(0,Xo,0,0,"ng-template",8),t&2){let e=u(2);p("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Go(t,o){if(t&1&&(K(0),b(1,Yo,3,2,"ng-container",2)(2,Uo,1,1,null,5),J()),t&2){let e=u();f(),p("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),f(),p("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",ee(3,Fi,e.cx("loadingIcon")))}}function Ko(t,o){if(t&1&&j(0,"span"),t&2){let e=u(2);C(e.cx("icon")),L("data-pc-section","icon")}}function Jo(t,o){}function er(t,o){if(t&1&&b(0,Jo,0,0,"ng-template",8),t&2){let e=u(2);p("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function tr(t,o){if(t&1&&(K(0),b(1,Ko,1,3,"span",3)(2,er,1,1,null,5),J()),t&2){let e=u();f(),p("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),f(),p("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ee(3,Fi,e.cx("icon")))}}function nr(t,o){if(t&1&&(E(0,"span"),be(1),k()),t&2){let e=u();C(e.cx("label")),L("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),f(),ke(e.label)}}function ir(t,o){if(t&1&&j(0,"p-badge",9),t&2){let e=u();p("value",e.badge)("severity",e.badgeSeverity)}}var or={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Mi=(()=>{class t extends F{name="button";theme=Oi;classes=or;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Pi=(()=>{class t extends V{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=ae(void 0,{transform:O});onClick=new Ie;onFocus=new Ie;onBlur=new Ie;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=y(wi,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=y(Mi);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=z({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(se(r,Bo,5),se(r,$o,5),se(r,jo,5),se(r,Ut,4)),n&2){let s;P(s=A())&&(i.contentTemplate=s.first),P(s=A())&&(i.loadingIconTemplate=s.first),P(s=A())&&(i.iconTemplate=s.first),P(s=A())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",O],loading:[2,"loading","loading",O],loadingIcon:"loadingIcon",raised:[2,"raised","raised",O],rounded:[2,"rounded","rounded",O],text:[2,"text","text",O],plain:[2,"plain","plain",O],severity:"severity",outlined:[2,"outlined","outlined",O],link:[2,"link","link",O],tabindex:[2,"tabindex","tabindex",ye],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",O],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[B([Mi]),w],ngContentSelectors:Wo,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,i){n&1&&(We(),E(0,"button",0),X("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),Qe(1),b(2,Qo,1,0,"ng-container",1)(3,Go,3,5,"ng-container",2)(4,tr,3,5,"ng-container",2)(5,nr,2,5,"span",3)(6,ir,1,2,"p-badge",4),k()),n&2&&(C(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),p("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus)),L("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex)),f(2),p("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),f(),p("ngIf",i.loading),f(),p("ngIf",!i.loading),f(),p("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),f(),p("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[_e,Ye,Xe,ot,en,bi,Si,St,Tt,Ce],encapsulation:2,changeDetection:0})}return t})();var Ai=(()=>{class t extends V{pFocusTrapDisabled=!1;platformId=y(Oe);document=y(ce);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),W(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(e){super.ngOnChanges(e),e.pFocusTrapDisabled&&W(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let e="0",n=i=>Yn("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:e,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:i?.bind(this)});this.firstHiddenFocusableElement=n(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=n(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:n,relatedTarget:i}=e,r=i===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(i)?Gn(n.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;He(r)}onLastHiddenElementFocus(e){let{currentTarget:n,relatedTarget:i}=e,r=i===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(i)?Kn(n.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;He(r)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275dir=G({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",O]},features:[w,je]})}return t})();function rr(){let t=[],o=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,a)=>{s&&(s.style.zIndex=String(o(r,a)))},clear:r=>{r&&(e(i(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:e}}var ne=rr(),Yd=t=>!!t;var Ri=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-dialog-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-dialog-enter-from,
    .p-dialog-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-left:dir(rtl) .p-dialog-enter-from,
    .p-dialog-left:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-right:dir(rtl) .p-dialog-enter-from,
    .p-dialog-right:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }
`;var sr={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},ar={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===t.position);return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},e?`p-dialog-${e}`:""]},root:({instance:t})=>["p-dialog p-component",{"p-dialog-maximized":t.maximizable&&t.maximized}],header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:()=>["p-dialog-content"],footer:"p-dialog-footer"},Vi=(()=>{class t extends F{name="dialog";theme=Ri;classes=ar;inlineStyles=sr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var tc=Ue([ve({transform:"{{transform}}",opacity:0}),De("{{transition}}")]),nc=Ue([De("{{transition}}",ve({transform:"{{transform}}",opacity:0}))]);var lr=["mask"],dr=["content"],cr=["footer"],pr=["titlebar"],ur=(t,o,e)=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex","justify-content":t,"align-items":o,"pointer-events":e}),mr=t=>({"p-dialog p-component":!0,"p-dialog-maximized":t}),hr=()=>({display:"flex","flex-direction":"column","pointer-events":"auto"}),fr=(t,o)=>({transform:t,transition:o}),gr=t=>({value:"visible",params:t});function br(t,o){if(t&1){let e=ue();E(0,"div",15),X("mousedown",function(i){N(e);let r=u(2);return H(r.initResize(i))}),k()}t&2&&p("ngClass","p-resizable-handle")}function yr(t,o){t&1&&re(0)}function _r(t,o){t&1&&(Y(),j(0,"svg",24))}function vr(t,o){}function xr(t,o){t&1&&b(0,vr,0,0,"ng-template")}function Cr(t,o){if(t&1&&(K(0),b(1,_r,1,0,"svg",22)(2,xr,1,0,null,23),J()),t&2){let e=u(6);f(),p("ngIf",!e.maximizeIconTemplate),f(),p("ngTemplateOutlet",e.maximizeIconTemplate)}}function wr(t,o){t&1&&(Y(),j(0,"svg",26))}function Tr(t,o){}function Sr(t,o){t&1&&b(0,Tr,0,0,"ng-template")}function Ir(t,o){if(t&1&&(K(0),b(1,wr,1,0,"svg",25)(2,Sr,1,0,null,23),J()),t&2){let e=u(6);f(),p("ngIf",!e.minimizeIconTemplate),f(),p("ngTemplateOutlet",e.minimizeIconTemplate)}}function Er(t,o){if(t&1&&b(0,Cr,3,2,"ng-container",12)(1,Ir,3,2,"ng-container",12),t&2){let e=u(5);p("ngIf",!e.maximized),f(),p("ngIf",e.maximized)}}function kr(t,o){if(t&1){let e=ue();E(0,"p-button",21),X("onClick",function(){N(e);let i=u(4);return H(i.maximize())})("keydown.enter",function(){N(e);let i=u(4);return H(i.maximize())}),b(1,Er,2,2,"ng-template",null,4,Re),k()}if(t&2){let e=u(4);p("styleClass","p-dialog-maximize-button")("tabindex",e.maximizable?"0":"-1")}}function Dr(t,o){t&1&&(Y(),j(0,"svg",29))}function Lr(t,o){}function Or(t,o){t&1&&b(0,Lr,0,0,"ng-template")}function Mr(t,o){if(t&1&&b(0,Dr,1,0,"svg",28)(1,Or,1,0,null,23),t&2){let e=u(5);p("ngIf",!e.closeIconTemplate),f(),p("ngTemplateOutlet",e.closeIconTemplate)}}function zr(t,o){if(t&1){let e=ue();E(0,"p-button",27),X("onClick",function(){N(e);let i=u(4);return H(i.hide())})("keydown.enter",function(){N(e);let i=u(4);return H(i.hide())}),b(1,Mr,2,2,"ng-template",null,4,Re),k()}if(t&2){let e=u(4);p("styleClass","p-dialog-close-button")("ariaLabel",e.ddconfig.closeAriaLabel||e.defaultCloseAriaLabel)}}function Fr(t,o){if(t&1&&(K(0),E(1,"span",17),be(2),k(),E(3,"div",18),b(4,kr,3,2,"p-button",19)(5,zr,3,2,"p-button",20),k(),J()),t&2){let e=u(3);f(),p("ngClass","p-dialog-title")("id",e.ariaLabelledBy),f(),ke(e.ddconfig.header),f(),p("ngClass","p-dialog-header-actions"),f(),p("ngIf",e.ddconfig.maximizable),f(),p("ngIf",e.closable)}}function Pr(t,o){if(t&1){let e=ue();E(0,"div",16,3),X("mousedown",function(i){N(e);let r=u(2);return H(r.initDrag(i))}),b(2,yr,1,0,"ng-container",13)(3,Fr,6,6,"ng-container",12),k()}if(t&2){let e=u(2);p("ngClass","p-dialog-header"),f(2),p("ngComponentOutlet",e.headerTemplate),f(),p("ngIf",!e.headerTemplate)}}function Ar(t,o){}function Rr(t,o){t&1&&b(0,Ar,0,0,"ng-template",30)}function Vr(t,o){t&1&&re(0)}function Nr(t,o){if(t&1&&(K(0),be(1),J()),t&2){let e=u(3);f(),Dn(" ",e.ddconfig.footer," ")}}function Hr(t,o){t&1&&re(0)}function Br(t,o){if(t&1&&(E(0,"div",18,5),b(2,Nr,2,1,"ng-container",12)(3,Hr,1,0,"ng-container",13),k()),t&2){let e=u(2);p("ngClass","p-dialog-footer"),f(2),p("ngIf",!e.footerTemplate),f(),p("ngComponentOutlet",e.footerTemplate)}}function $r(t,o){if(t&1){let e=ue();E(0,"div",8,1),X("@animation.start",function(i){N(e);let r=u();return H(r.onAnimationStart(i))})("@animation.done",function(i){N(e);let r=u();return H(r.onAnimationEnd(i))}),b(2,br,1,1,"div",9)(3,Pr,4,3,"div",10),E(4,"div",11,2),b(6,Rr,1,0,null,12)(7,Vr,1,0,"ng-container",13),k(),b(8,Br,4,3,"div",14),k()}if(t&2){let e=u();Ze(e.ddconfig.style),C(e.ddconfig.styleClass),yt("width",e.ddconfig.width)("height",e.ddconfig.height),p("ngClass",ee(22,mr,e.maximizable&&e.maximized))("ngStyle",Yt(24,hr))("@animation",ee(28,gr,qe(25,fr,e.transformOptions,e.ddconfig.transitionOptions||"150ms cubic-bezier(0, 0, 0.2, 1)")))("pFocusTrapDisabled",e.ddconfig.focusTrap===!1),L("aria-labelledby",e.ariaLabelledBy)("aria-modal",!0)("id",e.dialogId),f(2),p("ngIf",e.ddconfig.resizable),f(),p("ngIf",e.ddconfig.showHeader!==!1),f(),p("ngClass","p-dialog-content")("ngStyle",e.ddconfig.contentStyle),f(2),p("ngIf",!e.contentTemplate),f(),p("ngComponentOutlet",e.contentTemplate),f(),p("ngIf",e.ddconfig.footer||e.footerTemplate)}}var Ni=(()=>{class t{viewContainerRef;constructor(e){this.viewContainerRef=e}static \u0275fac=function(n){return new(n||t)(oe(qt))};static \u0275dir=G({type:t,selectors:[["","pDynamicDialogContent",""]]})}return t})(),Hi=(()=>{class t extends Vi{name="dialog";static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var tn=class{data;inputValues;header;ariaLabelledBy;footer;width;height;closeOnEscape=!1;focusOnShow=!0;focusTrap=!0;baseZIndex;autoZIndex=!1;dismissableMask=!1;rtl=!1;style;contentStyle;styleClass;transitionOptions;closable=!1;showHeader=!1;modal=!1;maskStyleClass;resizable=!1;draggable=!1;keepInViewport=!1;minX;minY;maximizable=!1;maximizeIcon;minimizeIcon;position;closeAriaLabel;appendTo;duplicate=!1;breakpoints;templates},It=class{constructor(){}close(o){this._onClose.next(o),setTimeout(()=>{this._onClose.complete()},1e3)}destroy(){this._onDestroy.next(null)}dragStart(o){this._onDragStart.next(o)}dragEnd(o){this._onDragEnd.next(o)}resizeInit(o){this._onResizeInit.next(o)}resizeEnd(o){this._onResizeEnd.next(o)}maximize(o){this._onMaximize.next(o)}_onClose=new he;onClose=this._onClose.asObservable();_onDestroy=new he;onDestroy=this._onDestroy.asObservable();_onDragStart=new he;onDragStart=this._onDragStart.asObservable();_onDragEnd=new he;onDragEnd=this._onDragEnd.asObservable();_onResizeInit=new he;onResizeInit=this._onResizeInit.asObservable();_onResizeEnd=new he;onResizeEnd=this._onResizeEnd.asObservable();_onMaximize=new he;onMaximize=this._onMaximize.asObservable();onChildComponentLoaded=new he},jr=Ue([ve({transform:"{{transform}}",opacity:0}),De("{{transition}}",ve({transform:"none",opacity:1}))]),Wr=Ue([De("{{transition}}",ve({transform:"{{transform}}",opacity:0}))]),Qr=(()=>{class t extends V{renderer;ddconfig;dialogRef;zone;parentDialog;visible=!0;componentRef;mask;resizing;dragging;maximized;_style={};originalStyle;lastPageX;lastPageY;ariaLabelledBy;id=q("pn_id_");styleElement;insertionPoint;maskViewChild;contentViewChild;footerViewChild;headerViewChild;childComponentType;inputValues;container;wrapper;documentKeydownListener;documentEscapeListener;maskClickListener;transformOptions="scale(0.7)";documentResizeListener;documentResizeEndListener;documentDragListener;documentDragEndListener;_componentStyle=y(Hi);get minX(){return this.ddconfig.minX?this.ddconfig.minX:0}get minY(){return this.ddconfig.minY?this.ddconfig.minY:0}get keepInViewport(){return this.ddconfig.keepInViewport}get maximizable(){return this.ddconfig.maximizable}get maximizeIcon(){return this.ddconfig.maximizeIcon}get minimizeIcon(){return this.ddconfig.minimizeIcon}get closable(){return this.ddconfig.closable}get style(){return this._style}get position(){return this.ddconfig.position}get defaultCloseAriaLabel(){return this.config.getTranslation(jn.ARIA).close}set style(e){e&&(this._style=T({},e),this.originalStyle=e)}get parent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>1)return e.pop()}get parentContent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>0){let n=e[e.length-1].querySelector(".p-dialog-content");if(n)return Array.isArray(n)?n[0]:n}}get header(){return this.ddconfig.header}get data(){return this.ddconfig.data}get breakpoints(){return this.ddconfig.breakpoints}get footerTemplate(){return this.ddconfig?.templates?.footer}get headerTemplate(){return this.ddconfig?.templates?.header}get contentTemplate(){return this.ddconfig?.templates?.content}get minimizeIconTemplate(){return this.ddconfig?.templates?.minimizeicon}get maximizeIconTemplate(){return this.ddconfig?.templates?.maximizeicon}get closeIconTemplate(){return this.ddconfig?.templates?.closeicon}get maskClass(){let n=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":this.ddconfig.modal||this.ddconfig.dismissableMask,[`p-dialog-${n}`]:n}}get dialogId(){return this.attrSelector}zIndexForLayering;constructor(e,n,i,r,s){super(),this.renderer=e,this.ddconfig=n,this.dialogRef=i,this.zone=r,this.parentDialog=s}ngOnInit(){super.ngOnInit(),this.breakpoints&&this.createStyle()}createStyle(){if(W(this.platformId)&&!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints)e+=`
                        @media screen and (max-width: ${n}) {
                            .p-dialog[id=${this.dialogId}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),ii(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngAfterViewInit(){super.ngAfterViewInit(),this.loadChildComponent(this.childComponentType),this.ariaLabelledBy=this.getAriaLabelledBy(),this.cd.detectChanges()}getAriaLabelledBy(){let{header:e,showHeader:n}=this.ddconfig;return e===null||n===!1?null:q("pn_id_")+"_header"}loadChildComponent(e){let n=this.insertionPoint?.viewContainerRef;n?.clear(),this.componentRef=n?.createComponent(e),this.inputValues&&Object.entries(this.inputValues).forEach(([i,r])=>{this.componentRef.setInput(i,r)}),this.dialogRef.onChildComponentLoaded.next(this.componentRef.instance)}moveOnTop(){this.ddconfig.autoZIndex!==!1?(ne.set("modal",this.container,(this.ddconfig.baseZIndex||0)+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1)):this.zIndexForLayering=ne.generateZIndex("modal",(this.ddconfig.baseZIndex||0)+this.config.zIndex.modal)}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container.parentElement,this.moveOnTop(),this.parent&&this.unbindGlobalListeners(),this.bindGlobalListeners(),this.container?.setAttribute(this.id,""),this.ddconfig.modal!==!1&&this.enableModality(),this.ddconfig.focusOnShow!==!1&&this.focus();break;case"void":this.wrapper&&this.ddconfig.modal!==!1&&Fe(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){e.toState==="void"&&(this.parentContent&&this.focus(this.parentContent),this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.container&&this.ddconfig.autoZIndex!==!1&&ne.clear(this.container),this.zIndexForLayering&&ne.revertZIndex(this.zIndexForLayering),this.ddconfig.modal!==!1&&this.disableModality(),this.container=null}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}enableModality(){this.ddconfig.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.hide()})),this.ddconfig.modal!==!1&&Fe(this.document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.ddconfig.dismissableMask&&this.unbindMaskClickListener(),this.ddconfig.modal!==!1&&we(this.document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}focus(e=this.contentViewChild.nativeElement){let n=Be.getFocusableElement(e,"[autofocus]");if(n){this.zone.runOutsideAngular(()=>{setTimeout(()=>n.focus(),5)});return}let i=Be.getFocusableElement(e);i?this.zone.runOutsideAngular(()=>{setTimeout(()=>i.focus(),5)}):this.footerViewChild?this.focus(this.footerViewChild.nativeElement):!i&&this.headerViewChild&&this.focus(this.headerViewChild.nativeElement)}maximize(){this.maximized=!this.maximized,this.maximized?Fe(this.document.body,"p-overflow-hidden"):we(this.document.body,"p-overflow-hidden"),this.dialogRef.maximize({maximized:this.maximized})}initResize(e){this.ddconfig.resizable&&(this.documentResizeListener||this.bindDocumentResizeListeners(),this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,Fe(this.document.body,"p-unselectable-text"),this.dialogRef.resizeInit(e))}onResize(e){if(this.resizing){let n=e.pageX-this.lastPageX,i=e.pageY-this.lastPageY,r=U(this.container),s=te(this.container),a=te(this.contentViewChild.nativeElement),l=r+n,d=s+i,c=this.container.style.minWidth,g=this.container.style.minHeight,h=this.container.getBoundingClientRect(),m=Ke();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(l+=n,d+=i),(!c||l>parseInt(c))&&h.left+l<m.width&&(this._style.width=l+"px",this.container.style.width=this._style.width),(!g||d>parseInt(g))&&h.top+d<m.height&&(this.contentViewChild.nativeElement.style.height=a+d-s+"px",this._style.height&&(this._style.height=d+"px",this.container.style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,we(this.document.body,"p-unselectable-text"),this.dialogRef.resizeEnd(e))}initDrag(e){Le(e.target,"p-dialog-header-icon")||Le(e.target.parentElement,"p-dialog-header-icon")||this.ddconfig.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",Fe(this.document.body,"p-unselectable-text"),this.dialogRef.dragStart(e))}onDrag(e){if(this.dragging){let n=U(this.container),i=te(this.container),r=e.pageX-this.lastPageX,s=e.pageY-this.lastPageY,a=this.container.getBoundingClientRect(),l=a.left+r,d=a.top+s,c=Ke();this.container.style.position="fixed",this.keepInViewport?(l>=this.minX&&l+n<c.width&&(this._style.left=l+"px",this.lastPageX=e.pageX,this.container.style.left=l+"px"),d>=this.minY&&d+i<c.height&&(this._style.top=d+"px",this.lastPageY=e.pageY,this.container.style.top=d+"px")):(this.lastPageX=e.pageX,this.container.style.left=l+"px",this.lastPageY=e.pageY,this.container.style.top=d+"px")}}endDrag(e){this.dragging&&(this.dragging=!1,we(this.document.body,"p-unselectable-text"),this.dialogRef.dragEnd(e),this.cd.detectChanges())}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}bindDocumentDragListener(){W(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document,"mousemove",this.onDrag.bind(this))})}bindDocumentDragEndListener(){W(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragListener=null)}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentResizeListeners(){W(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindGlobalListeners(){this.ddconfig.closeOnEscape!==!1&&this.bindDocumentEscapeListener(),this.ddconfig.resizable&&this.bindDocumentResizeListeners(),this.ddconfig.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener())}unbindGlobalListeners(){this.unbindDocumentEscapeListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener()}bindDocumentEscapeListener(){let e=this.maskViewChild?this.maskViewChild.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{if(n.which==27){let i=ne.getCurrent();(parseInt(this.container.style.zIndex)==i||this.zIndexForLayering==i)&&this.hide()}})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}ngOnDestroy(){this.onContainerDestroy(),this.componentRef&&this.componentRef.destroy(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(oe(Zt),oe(tn),oe(It),oe(et),oe(t,12))};static \u0275cmp=z({type:t,selectors:[["p-dynamicDialog"],["p-dynamicdialog"],["p-dynamic-dialog"]],viewQuery:function(n,i){if(n&1&&(Ee(Ni,5),Ee(lr,5),Ee(dr,5),Ee(cr,5),Ee(pr,5)),n&2){let r;P(r=A())&&(i.insertionPoint=r.first),P(r=A())&&(i.maskViewChild=r.first),P(r=A())&&(i.contentViewChild=r.first),P(r=A())&&(i.footerViewChild=r.first),P(r=A())&&(i.headerViewChild=r.first)}},features:[B([Hi]),w],decls:3,vars:9,consts:[["mask",""],["container",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"ngStyle","ngClass"],["role","dialog","pFocusTrap","",3,"ngClass","ngStyle","style","class","pFocusTrapDisabled","width","height",4,"ngIf"],["role","dialog","pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["style","z-index: 90;",3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngComponentOutlet"],[3,"ngClass",4,"ngIf"],[2,"z-index","90",3,"mousedown","ngClass"],[3,"mousedown","ngClass"],[3,"ngClass","id"],[3,"ngClass"],["rounded","","text","",3,"styleClass","tabindex","onClick","keydown.enter",4,"ngIf"],["rounded","","text","","severity","secondary",3,"styleClass","ariaLabel","onClick","keydown.enter",4,"ngIf"],["rounded","","text","",3,"onClick","keydown.enter","styleClass","tabindex"],["data-p-icon","window-maximize",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","window-maximize"],["data-p-icon","window-minimize",4,"ngIf"],["data-p-icon","window-minimize"],["rounded","","text","","severity","secondary",3,"onClick","keydown.enter","styleClass","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"],["pDynamicDialogContent",""]],template:function(n,i){n&1&&(E(0,"div",6,0),b(2,$r,9,30,"div",7),k()),n&2&&(C(i.ddconfig.maskStyleClass),p("ngStyle",Ln(5,ur,i.position==="left"||i.position==="topleft"||i.position==="bottomleft"?"flex-start":i.position==="right"||i.position==="topright"||i.position==="bottomright"?"flex-end":"center",i.position==="top"||i.position==="topleft"||i.position==="topright"?"flex-start":i.position==="bottom"||i.position==="bottomleft"||i.position==="bottomright"?"flex-end":"center",i.ddconfig.modal?"auto":"none"))("ngClass",i.maskClass),f(2),p("ngIf",i.visible))},dependencies:[_e,Fn,Pn,Ye,Xe,ot,Ce,Ni,Ei,ki,Ii,Pi,Ai],encapsulation:2,data:{animation:[rt("animation",[Ve("void => visible",[vt(jr)]),Ve("visible => void",[vt(Wr)])])]}})}return t})();var gn=class{_parentInjector;_additionalTokens;constructor(o,e){this._parentInjector=o,this._additionalTokens=e}get(o,e,n){let i=this._additionalTokens.get(o);return i||this._parentInjector.get(o,e)}},kc=(()=>{class t{appRef;injector;document;dialogComponentRefMap=new Map;constructor(e,n,i){this.appRef=e,this.injector=n,this.document=i}open(e,n){if(!this.duplicationPermission(e,n))return null;let i=this.appendDialogComponentToBody(n,e);return this.dialogComponentRefMap.get(i).instance.childComponentType=e,this.dialogComponentRefMap.get(i).instance.inputValues=n.inputValues,i}getInstance(e){return this.dialogComponentRefMap.get(e).instance}appendDialogComponentToBody(e,n){let i=new WeakMap;i.set(tn,e);let r=new It;i.set(It,r);let s=r.onClose.subscribe(()=>{this.dialogComponentRefMap.get(r).instance.close()}),a=r.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(r),a.unsubscribe(),s.unsubscribe()}),l=zn(Qr,{environmentInjector:this.appRef.injector,elementInjector:new gn(this.injector,i)});this.appRef.attachView(l.hostView);let d=l.hostView.rootNodes[0];return!e.appendTo||e.appendTo==="body"?this.document.body.appendChild(d):Ct(e.appendTo,d),this.dialogComponentRefMap.set(r,l),r}removeDialogComponentFromBody(e){if(!e||!this.dialogComponentRefMap.has(e))return;let n=this.dialogComponentRefMap.get(e);this.appRef.detachView(n.hostView),n.destroy(),n.changeDetectorRef.detectChanges(),this.dialogComponentRefMap.delete(e)}duplicationPermission(e,n){if(n.duplicate)return!0;let i=!0;for(let[r,s]of this.dialogComponentRefMap)if(s.instance.childComponentType===e){i=!1;break}return i}static \u0275fac=function(n){return new(n||t)(jt(kn),jt(Wt),jt(ce))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Bi=`
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
`;var Zr={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},$i=(()=>{class t extends F{name="tooltip";theme=Bi;classes=Zr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var ji=(()=>{class t extends V{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=ae(void 0);$appendTo=it(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:q("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=y($i);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),W(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=T(T({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Le(e.relatedTarget,"p-tooltip")||Le(e.relatedTarget,"p-tooltip-text")||Le(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",e.setAttribute("data-pc-section","arrow"),this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Ct(this.container,this.el.nativeElement):Ct(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Xn(this.container,250),this.getOption("tooltipZIndex")==="auto"?ne.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&ne.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof In){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[i,r]of n[e].entries())if(i===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+dn(),i=e.top+cn();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Je(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=U(e),i=(te(e)-te(this.container))/2;this.alignTooltip(n,i);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=U(this.container),i=(te(this.el.nativeElement)-te(this.container))/2;this.alignTooltip(-n,i),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),i=U(this.container),r=(U(this.el.nativeElement)-U(this.container))/2,s=te(this.container);this.alignTooltip(r,-s);let a=n.left-this.getHostOffset().left+i/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=a+"px"}getArrowElement(){return Je(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=U(this.container),i=this.getHostOffset(),r=(U(this.el.nativeElement)-U(this.container))/2,s=te(this.el.nativeElement);this.alignTooltip(r,s);let a=i.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=a+"px"}alignTooltip(e,n){let i=this.getHostOffset(),r=i.left+e,s=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=T(T({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Le(e,"p-inputwrapper")?Je(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,r=U(this.container),s=te(this.container),a=Ke();return i+r>a.width||i<0||n<0||n+s>a.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ht(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):ni(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&ne.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(oe(et),oe(qt))};static \u0275dir=G({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",O],showDelay:[2,"showDelay","showDelay",ye],hideDelay:[2,"hideDelay","hideDelay",ye],life:[2,"life","life",ye],positionTop:[2,"positionTop","positionTop",ye],positionLeft:[2,"positionLeft","positionLeft",ye],autoHide:[2,"autoHide","autoHide",O],fitContent:[2,"fitContent","fitContent",O],hideOnEscape:[2,"hideOnEscape","hideOnEscape",O],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[B([$i]),w,je]})}return t})(),bn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=pe({type:t});static \u0275inj=de({})}return t})();var Wi=`
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
`;var Yr=["pMenuItemContent",""],on=t=>({$implicit:t}),Xr=()=>({exact:!1}),Ur=t=>({item:t});function Gr(t,o){t&1&&re(0)}function Kr(t,o){if(t&1&&(E(0,"a",6),b(1,Gr,1,0,"ng-container",7),k()),t&2){let e=u(2),n=nt(4);C(e.cx("itemLink")),p("target",e.item.target),L("title",e.item.title)("href",e.item.url||null,Sn)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),f(),p("ngTemplateOutlet",n)("ngTemplateOutletContext",ee(10,on,e.item))}}function Jr(t,o){t&1&&re(0)}function es(t,o){if(t&1&&(E(0,"a",8),b(1,Jr,1,0,"ng-container",7),k()),t&2){let e=u(2),n=nt(4);C(e.cx("itemLink")),p("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||Yt(18,Xr))("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),L("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),f(),p("ngTemplateOutlet",n)("ngTemplateOutletContext",ee(19,on,e.item))}}function ts(t,o){if(t&1&&(K(0),b(1,Kr,2,12,"a",4)(2,es,2,21,"a",5),J()),t&2){let e=u();f(),p("ngIf",!(e.item!=null&&e.item.routerLink)),f(),p("ngIf",e.item==null?null:e.item.routerLink)}}function ns(t,o){}function is(t,o){t&1&&b(0,ns,0,0,"ng-template")}function os(t,o){if(t&1&&(K(0),b(1,is,1,0,null,7),J()),t&2){let e=u();f(),p("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",ee(2,on,e.item))}}function rs(t,o){if(t&1&&j(0,"span"),t&2){let e=u(2);Ze(e.item.iconStyle),C(e.cx("itemIcon",ee(4,Ur,e.item)))}}function ss(t,o){if(t&1&&(E(0,"span"),be(1),k()),t&2){let e=u(2);C(e.cx("itemLabel")),f(),ke(e.item.label)}}function as(t,o){if(t&1&&j(0,"span",12),t&2){let e=u(2);p("innerHTML",e.sanitizeHtml(e.item.label),rn)}}function ls(t,o){if(t&1&&j(0,"p-badge",13),t&2){let e=u(2);p("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function ds(t,o){if(t&1&&b(0,rs,1,6,"span",9)(1,ss,2,3,"span",10)(2,as,1,1,"ng-template",null,1,Re)(4,ls,1,2,"p-badge",11),t&2){let e=nt(3),n=u();p("ngIf",n.item.icon),f(),p("ngIf",n.item.escape!==!1)("ngIfElse",e),f(3),p("ngIf",n.item.badge)}}var cs=["start"],ps=["end"],us=["header"],ms=["item"],hs=["submenuheader"],fs=["list"],gs=["container"],bs=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),ys=t=>({value:"visible",params:t}),Qi=(t,o)=>({item:t,id:o});function _s(t,o){t&1&&re(0)}function vs(t,o){if(t&1&&(E(0,"div"),b(1,_s,1,0,"ng-container",8),k()),t&2){let e=u(2);C(e.cx("start")),L("data-pc-section","start"),f(),p("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function xs(t,o){if(t&1&&j(0,"li",12),t&2){let e=u(4);C(e.cx("separator"))}}function Cs(t,o){if(t&1&&(E(0,"span"),be(1),k()),t&2){let e=u(3).$implicit;f(),ke(e.label)}}function ws(t,o){if(t&1&&j(0,"span",16),t&2){let e=u(3).$implicit,n=u(3);p("innerHTML",n.sanitizeHtml(e.label),rn)}}function Ts(t,o){if(t&1&&(K(0),b(1,Cs,2,1,"span",15)(2,ws,1,1,"ng-template",null,2,Re),J()),t&2){let e=nt(3),n=u(2).$implicit;f(),p("ngIf",n.escape!==!1)("ngIfElse",e)}}function Ss(t,o){t&1&&re(0)}function Is(t,o){if(t&1&&(E(0,"li",13),b(1,Ts,4,2,"ng-container",7)(2,Ss,1,0,"ng-container",14),k()),t&2){let e=u(),n=e.$implicit,i=e.index,r=u(3);C(r.cx("submenuLabel")),p("tooltipOptions",n.tooltipOptions),L("data-automationid",n.automationId)("id",r.menuitemId(n,r.id,i)),f(),p("ngIf",!r.submenuHeaderTemplate&&!r._submenuHeaderTemplate),f(),p("ngTemplateOutlet",r.submenuHeaderTemplate??r._submenuHeaderTemplate)("ngTemplateOutletContext",ee(8,on,n))}}function Es(t,o){if(t&1&&j(0,"li",12),t&2){let e=u(5);C(e.cx("separator"))}}function ks(t,o){if(t&1){let e=ue();E(0,"li",18),X("onMenuItemClick",function(i){N(e);let r=u(),s=r.$implicit,a=r.index,l=u().index,d=u(3);return H(d.itemClick(i,d.menuitemId(s,d.id,l,a)))}),k()}if(t&2){let e=u(),n=e.$implicit,i=e.index,r=u().index,s=u(3);Ze(n.style),C(s.cn(s.cx("item",qe(13,Qi,n,s.menuitemId(n,s.id,r,i))),n==null?null:n.styleClass)),p("pMenuItemContent",n)("itemTemplate",s.itemTemplate??s._itemTemplate)("tooltipOptions",n.tooltipOptions),L("data-pc-section","menuitem")("aria-label",s.label(n.label))("data-p-focused",s.isItemFocused(s.menuitemId(n,s.id,r,i)))("data-p-disabled",s.disabled(n.disabled))("aria-disabled",s.disabled(n.disabled))("id",s.menuitemId(n,s.id,r,i))}}function Ds(t,o){if(t&1&&b(0,Es,1,2,"li",10)(1,ks,1,16,"li",17),t&2){let e=o.$implicit,n=u().$implicit;p("ngIf",e.separator&&(e.visible!==!1||n.visible!==!1)),f(),p("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||n.visible!==!1))}}function Ls(t,o){if(t&1&&b(0,xs,1,2,"li",10)(1,Is,3,10,"li",11)(2,Ds,2,2,"ng-template",9),t&2){let e=o.$implicit;p("ngIf",e.separator&&e.visible!==!1),f(),p("ngIf",!e.separator),f(),p("ngForOf",e.items)}}function Os(t,o){if(t&1&&b(0,Ls,3,3,"ng-template",9),t&2){let e=u(2);p("ngForOf",e.model)}}function Ms(t,o){if(t&1&&j(0,"li",12),t&2){let e=u(4);C(e.cx("separator"))}}function zs(t,o){if(t&1){let e=ue();E(0,"li",20),X("onMenuItemClick",function(i){N(e);let r=u(),s=r.$implicit,a=r.index,l=u(3);return H(l.itemClick(i,l.menuitemId(s,l.id,a)))}),k()}if(t&2){let e=u(),n=e.$implicit,i=e.index,r=u(3);C(r.cn(r.cx("item",qe(12,Qi,n,r.menuitemId(n,r.id,i))),n==null?null:n.styleClass)),p("pMenuItemContent",n)("itemTemplate",r.itemTemplate??r._itemTemplate)("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),L("data-pc-section","menuitem")("aria-label",r.label(n.label))("data-p-focused",r.isItemFocused(r.menuitemId(n,r.id,i)))("data-p-disabled",r.disabled(n.disabled))("aria-disabled",r.disabled(n.disabled))("id",r.menuitemId(n,r.id,i))}}function Fs(t,o){if(t&1&&b(0,Ms,1,2,"li",10)(1,zs,1,15,"li",19),t&2){let e=o.$implicit;p("ngIf",e.separator&&e.visible!==!1),f(),p("ngIf",!e.separator&&e.visible!==!1)}}function Ps(t,o){if(t&1&&b(0,Fs,2,2,"ng-template",9),t&2){let e=u(2);p("ngForOf",e.model)}}function As(t,o){t&1&&re(0)}function Rs(t,o){if(t&1&&(E(0,"div"),b(1,As,1,0,"ng-container",8),k()),t&2){let e=u(2);C(e.cx("end")),L("data-pc-section","end"),f(),p("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function Vs(t,o){if(t&1){let e=ue();E(0,"div",4,0),X("click",function(i){N(e);let r=u();return H(r.onOverlayClick(i))})("@overlayAnimation.start",function(i){N(e);let r=u();return H(r.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){N(e);let r=u();return H(r.onOverlayAnimationEnd(i))}),b(2,vs,2,4,"div",5),E(3,"ul",6,1),X("focus",function(i){N(e);let r=u();return H(r.onListFocus(i))})("blur",function(i){N(e);let r=u();return H(r.onListBlur(i))})("keydown",function(i){N(e);let r=u();return H(r.onListKeyDown(i))}),b(5,Os,1,1,null,7)(6,Ps,1,1,null,7),k(),b(7,Rs,2,4,"div",5),k()}if(t&2){let e=u();Ze(e.sx("root")),C(e.cn(e.cx("root"),e.styleClass)),p("ngStyle",e.style)("@overlayAnimation",ee(24,ys,qe(21,bs,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),L("data-pc-name","menu")("id",e.id),f(2),p("ngIf",e.startTemplate??e._startTemplate),f(),C(e.cx("list")),L("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),f(2),p("ngIf",e.hasSubMenu()),f(),p("ngIf",!e.hasSubMenu()),f(),p("ngIf",e.endTemplate??e._endTemplate)}}var Ns={root:({instance:t})=>({position:t.popup?"absolute":"relative"})},Hs={root:({instance:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t,item:o,id:e})=>["p-menu-item",{"p-focus":t.focusedOptionId()&&e===t.focusedOptionId(),"p-disabled":t.disabled(o.disabled)},o.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:t})=>["p-menu-item-icon",t.icon,t.iconClass],itemLabel:"p-menu-item-label"},nn=(()=>{class t extends F{name="menu";theme=Wi;classes=Hs;inlineStyles=Ns;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Bs=(()=>{class t extends V{item;itemTemplate;onMenuItemClick=new Ie;menu;_componentStyle=y(nn);constructor(e){super(),this.menu=e}onItemClick(e,n){this.onMenuItemClick.emit({originalEvent:e,item:n})}static \u0275fac=function(n){return new(n||t)(oe(Cn(()=>$s)))};static \u0275cmp=z({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},features:[B([nn]),w],attrs:Yr,decls:5,vars:5,consts:[["itemContent",""],["htmlLabel",""],[3,"click"],[4,"ngIf"],["pRipple","",3,"class","target",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","style",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,i){if(n&1){let r=ue();E(0,"div",2),X("click",function(a){return N(r),H(i.onItemClick(a,i.item))}),b(1,ts,3,2,"ng-container",3)(2,os,2,4,"ng-container",3)(3,ds,5,4,"ng-template",null,0,Re),k()}n&2&&(C(i.cx("itemContent")),L("data-pc-section","content"),f(),p("ngIf",!i.itemTemplate),f(),p("ngIf",i.itemTemplate))},dependencies:[_e,Ye,Xe,sn,Vn,Nn,en,bn,St,Tt,Ce],encapsulation:2})}return t})(),$s=(()=>{class t extends V{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=ae(void 0);onShow=new Ie;onHide=new Ie;onBlur=new Ie;onFocus=new Ie;listViewChild;containerViewChild;$appendTo=it(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=it(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=fe(-1);selectedOptionIndex=fe(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=y(nn);constructor(e){super(),this.overlayService=e,this.id=this.id||q("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.attrSelector&&this.container.setAttribute(this.attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),He(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&ne.clear(e.element);break}}alignOverlay(){this.relativeAlign?Zn(this.container,this.target):Qn(this.container,this.target)}appendOverlay(){Be.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&ne.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!ei()&&this.hide()}menuitemId(e,n,i,r){return e?.id??`${n}_${i}${r!==void 0?"_"+r:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(He(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)He(this.target),this.hide(),e.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(ct(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let n=Je(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&Je(n,'a[data-pc-section="action"]');this.popup&&He(this.target),i?i.click():n&&n.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...ct(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...ct(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let n=ct(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let i=e>=n.length?n.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(e,n){let{originalEvent:i,item:r}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),r.disabled){i.preventDefault();return}!r.url&&!r.routerLink&&i.preventDefault(),r.command&&r.command({originalEvent:i,item:r}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&W(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",n=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),r=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&r&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&r&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&W(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&W(this.platformId)&&(this.scrollHandler=new ht(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&ne.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(n=>n.visible!==!1):e.visible===!1}static \u0275fac=function(n){return new(n||t)(oe($n))};static \u0275cmp=z({type:t,selectors:[["p-menu"]],contentQueries:function(n,i,r){if(n&1&&(se(r,cs,4),se(r,ps,4),se(r,us,4),se(r,ms,4),se(r,hs,4),se(r,Ut,4)),n&2){let s;P(s=A())&&(i.startTemplate=s.first),P(s=A())&&(i.endTemplate=s.first),P(s=A())&&(i.headerTemplate=s.first),P(s=A())&&(i.itemTemplate=s.first),P(s=A())&&(i.submenuHeaderTemplate=s.first),P(s=A())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(Ee(fs,5),Ee(gs,5)),n&2){let r;P(r=A())&&(i.listViewChild=r.first),P(r=A())&&(i.containerViewChild=r.first)}},inputs:{model:"model",popup:[2,"popup","popup",O],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",O],baseZIndex:[2,"baseZIndex","baseZIndex",ye],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",ye],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[B([nn]),w],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","click",4,"ngIf"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],["role","menu",3,"focus","blur","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class",4,"ngIf"],["pTooltip","","role","none",3,"class","tooltipOptions",4,"ngIf"],["role","separator"],["pTooltip","","role","none",3,"tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions"]],template:function(n,i){n&1&&b(0,Vs,8,26,"div",3),n&2&&p("ngIf",!i.popup||i.visible)},dependencies:[_e,An,Ye,Xe,ot,sn,Bs,bn,ji,St,Ce],encapsulation:2,data:{animation:[rt("overlayAnimation",[Ve(":enter",[ve({opacity:0,transform:"scaleY(0.8)"}),De("{{showTransitionParams}}")]),Ve(":leave",[De("{{hideTransitionParams}}",ve({opacity:0}))])])]},changeDetection:0})}return t})();export{Je as a,He as b,Ws as c,ii as d,q as e,Us as f,F as g,Sa as h,V as i,wi as j,$e as k,Ii as l,en as m,Pi as n,ne as o,Yd as p,kc as q,$s as r};
