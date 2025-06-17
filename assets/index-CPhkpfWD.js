var bm=t=>{throw TypeError(t)};var Wu=(t,e,n)=>e.has(t)||bm("Cannot "+n);var te=(t,e,n)=>(Wu(t,e,"read from private field"),n?n.call(t):e.get(t)),rt=(t,e,n)=>e.has(t)?bm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),$e=(t,e,n,i)=>(Wu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),jt=(t,e,n)=>(Wu(t,e,"access private method"),n);var fl=(t,e,n,i)=>({set _(r){$e(t,e,r,n)},get _(){return te(t,e,i)}});function tE(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function E0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w0={exports:{}},cu={},M0={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=Symbol.for("react.element"),nE=Symbol.for("react.portal"),iE=Symbol.for("react.fragment"),rE=Symbol.for("react.strict_mode"),sE=Symbol.for("react.profiler"),oE=Symbol.for("react.provider"),aE=Symbol.for("react.context"),lE=Symbol.for("react.forward_ref"),cE=Symbol.for("react.suspense"),uE=Symbol.for("react.memo"),dE=Symbol.for("react.lazy"),Tm=Symbol.iterator;function fE(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T0=Object.assign,A0={};function Bo(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||b0}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C0(){}C0.prototype=Bo.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||b0}var ep=Jh.prototype=new C0;ep.constructor=Jh;T0(ep,Bo.prototype);ep.isPureReactComponent=!0;var Am=Array.isArray,R0=Object.prototype.hasOwnProperty,tp={current:null},P0={key:!0,ref:!0,__self:!0,__source:!0};function N0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R0.call(e,i)&&!P0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Za,type:t,key:s,ref:o,props:r,_owner:tp.current}}function hE(t,e){return{$$typeof:Za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function np(t){return typeof t=="object"&&t!==null&&t.$$typeof===Za}function pE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cm=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pE(""+t.key):e.toString(36)}function oc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Za:case nE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ju(o,0):i,Am(r)?(n="",t!=null&&(n=t.replace(Cm,"$&/")+"/"),oc(r,e,n,"",function(c){return c})):r!=null&&(np(r)&&(r=hE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Am(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ju(s,a);o+=oc(s,e,n,l,r)}else if(l=fE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ju(s,a++),o+=oc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hl(t,e,n){if(t==null)return t;var i=[],r=0;return oc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function mE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},ac={transition:null},gE={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:ac,ReactCurrentOwner:tp};function L0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:hl,forEach:function(t,e,n){hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hl(t,function(){e++}),e},toArray:function(t){return hl(t,function(e){return e})||[]},only:function(t){if(!np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Bo;qe.Fragment=iE;qe.Profiler=sE;qe.PureComponent=Jh;qe.StrictMode=rE;qe.Suspense=cE;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gE;qe.act=L0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=T0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)R0.call(e,l)&&!P0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Za,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:aE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oE,_context:t},t.Consumer=t};qe.createElement=N0;qe.createFactory=function(t){var e=N0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:lE,render:t}};qe.isValidElement=np;qe.lazy=function(t){return{$$typeof:dE,_payload:{_status:-1,_result:t},_init:mE}};qe.memo=function(t,e){return{$$typeof:uE,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=ac.transition;ac.transition={};try{t()}finally{ac.transition=e}};qe.unstable_act=L0;qe.useCallback=function(t,e){return an.current.useCallback(t,e)};qe.useContext=function(t){return an.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};qe.useEffect=function(t,e){return an.current.useEffect(t,e)};qe.useId=function(){return an.current.useId()};qe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return an.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};qe.useRef=function(t){return an.current.useRef(t)};qe.useState=function(t){return an.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return an.current.useTransition()};qe.version="18.3.1";M0.exports=qe;var L=M0.exports;const pe=E0(L),vE=tE({__proto__:null,default:pe},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE=L,_E=Symbol.for("react.element"),yE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,EE=xE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wE={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)SE.call(e,i)&&!wE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_E,type:t,key:s,ref:o,props:r,_owner:EE.current}}cu.Fragment=yE;cu.jsx=D0;cu.jsxs=D0;w0.exports=cu;var w=w0.exports,I0={exports:{}},Ln={},U0={exports:{}},F0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,V){var Q=P.length;P.push(V);e:for(;0<Q;){var Z=Q-1>>>1,ue=P[Z];if(0<r(ue,V))P[Z]=V,P[Q]=ue,Q=Z;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var V=P[0],Q=P.pop();if(Q!==V){P[0]=Q;e:for(var Z=0,ue=P.length,we=ue>>>1;Z<we;){var Y=2*(Z+1)-1,ae=P[Y],fe=Y+1,he=P[fe];if(0>r(ae,Q))fe<ue&&0>r(he,ae)?(P[Z]=he,P[fe]=Q,Z=fe):(P[Z]=ae,P[Y]=Q,Z=Y);else if(fe<ue&&0>r(he,Q))P[Z]=he,P[fe]=Q,Z=fe;else break e}}return V}function r(P,V){var Q=P.sortIndex-V.sortIndex;return Q!==0?Q:P.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,u=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=P)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function y(P){if(x=!1,_(P),!g)if(n(l)!==null)g=!0,H(A);else{var V=n(c);V!==null&&q(y,V.startTime-P)}}function A(P,V){g=!1,x&&(x=!1,f(R),R=-1),p=!0;var Q=u;try{for(_(V),h=n(l);h!==null&&(!(h.expirationTime>V)||P&&!D());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,u=h.priorityLevel;var ue=Z(h.expirationTime<=V);V=t.unstable_now(),typeof ue=="function"?h.callback=ue:h===n(l)&&i(l),_(V)}else i(l);h=n(l)}if(h!==null)var we=!0;else{var Y=n(c);Y!==null&&q(y,Y.startTime-V),we=!1}return we}finally{h=null,u=Q,p=!1}}var C=!1,M=null,R=-1,b=5,S=-1;function D(){return!(t.unstable_now()-S<b)}function O(){if(M!==null){var P=t.unstable_now();S=P;var V=!0;try{V=M(!0,P)}finally{V?z():(C=!1,M=null)}}else C=!1}var z;if(typeof v=="function")z=function(){v(O)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,X=k.port2;k.port1.onmessage=O,z=function(){X.postMessage(null)}}else z=function(){m(O,0)};function H(P){M=P,C||(C=!0,z())}function q(P,V){R=m(function(){P(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(A))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(u){case 1:case 2:case 3:var V=3;break;default:V=u}var Q=u;u=V;try{return P()}finally{u=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=u;u=P;try{return V()}finally{u=Q}},t.unstable_scheduleCallback=function(P,V,Q){var Z=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Z+Q:Z):Q=Z,P){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Q+ue,P={id:d++,callback:V,priorityLevel:P,startTime:Q,expirationTime:ue,sortIndex:-1},Q>Z?(P.sortIndex=Q,e(c,P),n(l)===null&&P===n(c)&&(x?(f(R),R=-1):x=!0,q(y,Q-Z))):(P.sortIndex=ue,e(l,P),g||p||(g=!0,H(A))),P},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(P){var V=u;return function(){var Q=u;u=V;try{return P.apply(this,arguments)}finally{u=Q}}}})(F0);U0.exports=F0;var ME=U0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bE=L,Nn=ME;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O0=new Set,ba={};function bs(t,e){bo(t,e),bo(t+"Capture",e)}function bo(t,e){for(ba[t]=e,t=0;t<e.length;t++)O0.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=Object.prototype.hasOwnProperty,TE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Pm={};function AE(t){return tf.call(Pm,t)?!0:tf.call(Rm,t)?!1:TE.test(t)?Pm[t]=!0:(Rm[t]=!0,!1)}function CE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RE(t,e,n,i){if(e===null||typeof e>"u"||CE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var ip=/[\-:]([a-z])/g;function rp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ip,rp);Wt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ip,rp);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ip,rp);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function sp(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RE(e,n,r,i)&&(n=null),i||r===null?AE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=bE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),z0=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,$u;function ua(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Xu=!1;function Yu(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function PE(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=Yu(t.type,!1),t;case 11:return t=Yu(t.type.render,!1),t;case 1:return t=Yu(t.type,!0),t;default:return""}}function of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Ws:return"Portal";case nf:return"Profiler";case op:return"StrictMode";case rf:return"Suspense";case sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case k0:return(t._context.displayName||"Context")+".Provider";case ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lp:return e=t.displayName||null,e!==null?e:of(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return of(t(e))}catch{}}return null}function NE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return of(e);case 8:return e===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function H0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LE(t){var e=H0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=LE(t))}function V0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=H0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function G0(t,e){e=e.checked,e!=null&&sp(t,"checked",e,!1)}function lf(t,e){G0(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&cf(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cf(t,e,n){(e!=="number"||Cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function io(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(da(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function W0(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function j0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?j0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,$0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DE=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){DE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function X0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function Y0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=X0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var IE=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ff(t,e){if(e){if(IE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pf=null;function cp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mf=null,ro=null,so=null;function Fm(t){if(t=tl(t)){if(typeof mf!="function")throw Error(le(280));var e=t.stateNode;e&&(e=pu(e),mf(t.stateNode,t.type,e))}}function q0(t){ro?so?so.push(t):so=[t]:ro=t}function K0(){if(ro){var t=ro,e=so;if(so=ro=null,Fm(t),e)for(t=0;t<e.length;t++)Fm(e[t])}}function Q0(t,e){return t(e)}function Z0(){}var qu=!1;function J0(t,e,n){if(qu)return t(e,n);qu=!0;try{return Q0(t,e,n)}finally{qu=!1,(ro!==null||so!==null)&&(Z0(),K0())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=pu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var gf=!1;if(Wi)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){gf=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{gf=!1}function UE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ga=!1,Rc=null,Pc=!1,vf=null,FE={onError:function(t){ga=!0,Rc=t}};function OE(t,e,n,i,r,s,o,a,l){ga=!1,Rc=null,UE.apply(FE,arguments)}function kE(t,e,n,i,r,s,o,a,l){if(OE.apply(this,arguments),ga){if(ga){var c=Rc;ga=!1,Rc=null}else throw Error(le(198));Pc||(Pc=!0,vf=c)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ex(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Om(t){if(Ts(t)!==t)throw Error(le(188))}function BE(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Om(r),t;if(s===i)return Om(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function tx(t){return t=BE(t),t!==null?nx(t):null}function nx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nx(t);if(e!==null)return e;t=t.sibling}return null}var ix=Nn.unstable_scheduleCallback,km=Nn.unstable_cancelCallback,zE=Nn.unstable_shouldYield,HE=Nn.unstable_requestPaint,Ct=Nn.unstable_now,VE=Nn.unstable_getCurrentPriorityLevel,up=Nn.unstable_ImmediatePriority,rx=Nn.unstable_UserBlockingPriority,Nc=Nn.unstable_NormalPriority,GE=Nn.unstable_LowPriority,sx=Nn.unstable_IdlePriority,uu=null,Si=null;function WE(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:XE,jE=Math.log,$E=Math.LN2;function XE(t){return t>>>=0,t===0?32:31-(jE(t)/$E|0)|0}var vl=64,xl=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=fa(a):(s&=o,s!==0&&(i=fa(s)))}else o=n&~r,o!==0?i=fa(o):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function YE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=YE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ox(){var t=vl;return vl<<=1,!(vl&4194240)&&(vl=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function KE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function ax(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lx,fp,cx,ux,dx,_f=!1,_l=[],Mr=null,br=null,Tr=null,Ca=new Map,Ra=new Map,hr=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bm(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function Qo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=tl(e),e!==null&&fp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ZE(t,e,n,i,r){switch(e){case"focusin":return Mr=Qo(Mr,t,e,n,i,r),!0;case"dragenter":return br=Qo(br,t,e,n,i,r),!0;case"mouseover":return Tr=Qo(Tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,Qo(Ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,Qo(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function fx(t){var e=ss(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=ex(n),e!==null){t.blockedOn=e,dx(t.priority,function(){cx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);pf=i,n.target.dispatchEvent(i),pf=null}else return e=tl(n),e!==null&&fp(e),t.blockedOn=n,!1;e.shift()}return!0}function zm(t,e,n){lc(t)&&n.delete(e)}function JE(){_f=!1,Mr!==null&&lc(Mr)&&(Mr=null),br!==null&&lc(br)&&(br=null),Tr!==null&&lc(Tr)&&(Tr=null),Ca.forEach(zm),Ra.forEach(zm)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,_f||(_f=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,JE)))}function Pa(t){function e(r){return Zo(r,t)}if(0<_l.length){Zo(_l[0],t);for(var n=1;n<_l.length;n++){var i=_l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Mr!==null&&Zo(Mr,t),br!==null&&Zo(br,t),Tr!==null&&Zo(Tr,t),Ca.forEach(e),Ra.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)fx(n),n.blockedOn===null&&hr.shift()}var oo=Ji.ReactCurrentBatchConfig,Dc=!0;function ew(t,e,n,i){var r=lt,s=oo.transition;oo.transition=null;try{lt=1,hp(t,e,n,i)}finally{lt=r,oo.transition=s}}function tw(t,e,n,i){var r=lt,s=oo.transition;oo.transition=null;try{lt=4,hp(t,e,n,i)}finally{lt=r,oo.transition=s}}function hp(t,e,n,i){if(Dc){var r=yf(t,e,n,i);if(r===null)od(t,e,i,Ic,n),Bm(t,i);else if(ZE(r,t,e,n,i))i.stopPropagation();else if(Bm(t,i),e&4&&-1<QE.indexOf(t)){for(;r!==null;){var s=tl(r);if(s!==null&&lx(s),s=yf(t,e,n,i),s===null&&od(t,e,i,Ic,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else od(t,e,i,null,n)}}var Ic=null;function yf(t,e,n,i){if(Ic=null,t=cp(i),t=ss(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ex(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function hx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VE()){case up:return 1;case rx:return 4;case Nc:case GE:return 16;case sx:return 536870912;default:return 16}default:return 16}}var Sr=null,pp=null,cc=null;function px(){if(cc)return cc;var t,e=pp,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return cc=r.slice(t,1<i?1-i:void 0)}function uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Hm(){return!1}function Dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yl:Hm,this.isPropagationStopped=Hm,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),e}var zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=Dn(zo),el=Et({},zo,{view:0,detail:0}),nw=Dn(el),Qu,Zu,Jo,du=Et({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jo&&(Jo&&t.type==="mousemove"?(Qu=t.screenX-Jo.screenX,Zu=t.screenY-Jo.screenY):Zu=Qu=0,Jo=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),Vm=Dn(du),iw=Et({},du,{dataTransfer:0}),rw=Dn(iw),sw=Et({},el,{relatedTarget:0}),Ju=Dn(sw),ow=Et({},zo,{animationName:0,elapsedTime:0,pseudoElement:0}),aw=Dn(ow),lw=Et({},zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cw=Dn(lw),uw=Et({},zo,{data:0}),Gm=Dn(uw),dw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hw[t])?!!e[t]:!1}function gp(){return pw}var mw=Et({},el,{key:function(t){if(t.key){var e=dw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(t){return t.type==="keypress"?uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gw=Dn(mw),vw=Et({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Dn(vw),xw=Et({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),_w=Dn(xw),yw=Et({},zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sw=Dn(yw),Ew=Et({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ww=Dn(Ew),Mw=[9,13,27,32],vp=Wi&&"CompositionEvent"in window,va=null;Wi&&"documentMode"in document&&(va=document.documentMode);var bw=Wi&&"TextEvent"in window&&!va,mx=Wi&&(!vp||va&&8<va&&11>=va),jm=" ",$m=!1;function gx(t,e){switch(t){case"keyup":return Mw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function Tw(t,e){switch(t){case"compositionend":return vx(e);case"keypress":return e.which!==32?null:($m=!0,jm);case"textInput":return t=e.data,t===jm&&$m?null:t;default:return null}}function Aw(t,e){if($s)return t==="compositionend"||!vp&&gx(t,e)?(t=px(),cc=pp=Sr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mx&&e.locale!=="ko"?null:e.data;default:return null}}var Cw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Cw[t.type]:e==="textarea"}function xx(t,e,n,i){q0(i),e=Uc(e,"onChange"),0<e.length&&(n=new mp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,Na=null;function Rw(t){Rx(t,0)}function fu(t){var e=qs(t);if(V0(e))return t}function Pw(t,e){if(t==="change")return e}var _x=!1;if(Wi){var ed;if(Wi){var td="oninput"in document;if(!td){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),td=typeof Ym.oninput=="function"}ed=td}else ed=!1;_x=ed&&(!document.documentMode||9<document.documentMode)}function qm(){xa&&(xa.detachEvent("onpropertychange",yx),Na=xa=null)}function yx(t){if(t.propertyName==="value"&&fu(Na)){var e=[];xx(e,Na,t,cp(t)),J0(Rw,e)}}function Nw(t,e,n){t==="focusin"?(qm(),xa=e,Na=n,xa.attachEvent("onpropertychange",yx)):t==="focusout"&&qm()}function Lw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(Na)}function Dw(t,e){if(t==="click")return fu(e)}function Iw(t,e){if(t==="input"||t==="change")return fu(e)}function Uw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:Uw;function La(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tf.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qm(t,e){var n=Km(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function Sx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ex(){for(var t=window,e=Cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cc(t.document)}return e}function xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fw(t){var e=Ex(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sx(n.ownerDocument.documentElement,n)){if(i!==null&&xp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Qm(n,s);var o=Qm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ow=Wi&&"documentMode"in document&&11>=document.documentMode,Xs=null,Sf=null,_a=null,Ef=!1;function Zm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||Xs==null||Xs!==Cc(i)||(i=Xs,"selectionStart"in i&&xp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&La(_a,i)||(_a=i,i=Uc(Sf,"onSelect"),0<i.length&&(e=new mp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xs)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ys={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},nd={},wx={};Wi&&(wx=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function hu(t){if(nd[t])return nd[t];if(!Ys[t])return t;var e=Ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wx)return nd[t]=e[n];return t}var Mx=hu("animationend"),bx=hu("animationiteration"),Tx=hu("animationstart"),Ax=hu("transitionend"),Cx=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){Cx.set(t,e),bs(e,[t])}for(var id=0;id<Jm.length;id++){var rd=Jm[id],kw=rd.toLowerCase(),Bw=rd[0].toUpperCase()+rd.slice(1);Vr(kw,"on"+Bw)}Vr(Mx,"onAnimationEnd");Vr(bx,"onAnimationIteration");Vr(Tx,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(Ax,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function eg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,kE(i,e,void 0,t),t.currentTarget=null}function Rx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;eg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;eg(r,a,c),s=l}}}if(Pc)throw t=vf,Pc=!1,vf=null,t}function mt(t,e){var n=e[Af];n===void 0&&(n=e[Af]=new Set);var i=t+"__bubble";n.has(i)||(Px(e,t,2,!1),n.add(i))}function sd(t,e,n){var i=0;e&&(i|=4),Px(n,t,i,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[El]){t[El]=!0,O0.forEach(function(n){n!=="selectionchange"&&(zw.has(n)||sd(n,!1,t),sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,sd("selectionchange",!1,e))}}function Px(t,e,n,i){switch(hx(e)){case 1:var r=ew;break;case 4:r=tw;break;default:r=hp}n=r.bind(null,e,n,t),r=void 0,!gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function od(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ss(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}J0(function(){var c=s,d=cp(n),h=[];e:{var u=Cx.get(t);if(u!==void 0){var p=mp,g=t;switch(t){case"keypress":if(uc(n)===0)break e;case"keydown":case"keyup":p=gw;break;case"focusin":g="focus",p=Ju;break;case"focusout":g="blur",p=Ju;break;case"beforeblur":case"afterblur":p=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_w;break;case Mx:case bx:case Tx:p=aw;break;case Ax:p=Sw;break;case"scroll":p=nw;break;case"wheel":p=ww;break;case"copy":case"cut":case"paste":p=cw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wm}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?u!==null?u+"Capture":null:u;x=[];for(var v=c,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=Aa(v,f),y!=null&&x.push(Ia(v,y,_)))),m)break;v=v.return}0<x.length&&(u=new p(u,g,null,n,d),h.push({event:u,listeners:x}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==pf&&(g=n.relatedTarget||n.fromElement)&&(ss(g)||g[ji]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?ss(g):null,g!==null&&(m=Ts(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=Vm,y="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Wm,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?u:qs(p),_=g==null?u:qs(g),u=new x(y,v+"leave",p,n,d),u.target=m,u.relatedTarget=_,y=null,ss(d)===c&&(x=new x(f,v+"enter",g,n,d),x.target=_,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,f=g,v=0,_=x;_;_=Rs(_))v++;for(_=0,y=f;y;y=Rs(y))_++;for(;0<v-_;)x=Rs(x),v--;for(;0<_-v;)f=Rs(f),_--;for(;v--;){if(x===f||f!==null&&x===f.alternate)break t;x=Rs(x),f=Rs(f)}x=null}else x=null;p!==null&&tg(h,u,p,x,!1),g!==null&&m!==null&&tg(h,m,g,x,!0)}}e:{if(u=c?qs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var A=Pw;else if(Xm(u))if(_x)A=Iw;else{A=Lw;var C=Nw}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(A=Dw);if(A&&(A=A(t,c))){xx(h,A,n,d);break e}C&&C(t,u,c),t==="focusout"&&(C=u._wrapperState)&&C.controlled&&u.type==="number"&&cf(u,"number",u.value)}switch(C=c?qs(c):window,t){case"focusin":(Xm(C)||C.contentEditable==="true")&&(Xs=C,Sf=c,_a=null);break;case"focusout":_a=Sf=Xs=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Zm(h,n,d);break;case"selectionchange":if(Ow)break;case"keydown":case"keyup":Zm(h,n,d)}var M;if(vp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else $s?gx(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(mx&&n.locale!=="ko"&&($s||R!=="onCompositionStart"?R==="onCompositionEnd"&&$s&&(M=px()):(Sr=d,pp="value"in Sr?Sr.value:Sr.textContent,$s=!0)),C=Uc(c,R),0<C.length&&(R=new Gm(R,t,null,n,d),h.push({event:R,listeners:C}),M?R.data=M:(M=vx(n),M!==null&&(R.data=M)))),(M=bw?Tw(t,n):Aw(t,n))&&(c=Uc(c,"onBeforeInput"),0<c.length&&(d=new Gm("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=M))}Rx(h,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Ia(t,s,r)),s=Aa(t,e),s!=null&&i.push(Ia(t,s,r))),t=t.return}return i}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Aa(n,s),l!=null&&o.unshift(Ia(n,l,a))):r||(l=Aa(n,s),l!=null&&o.push(Ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Hw=/\r\n?/g,Vw=/\u0000|\uFFFD/g;function ng(t){return(typeof t=="string"?t:""+t).replace(Hw,`
`).replace(Vw,"")}function wl(t,e,n){if(e=ng(e),ng(t)!==e&&n)throw Error(le(425))}function Fc(){}var wf=null,Mf=null;function bf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,Gw=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,Ww=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(jw)}:Tf;function jw(t){setTimeout(function(){throw t})}function ad(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pa(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),_i="__reactFiber$"+Ho,Ua="__reactProps$"+Ho,ji="__reactContainer$"+Ho,Af="__reactEvents$"+Ho,$w="__reactListeners$"+Ho,Xw="__reactHandles$"+Ho;function ss(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[_i])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[_i]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function pu(t){return t[Ua]||null}var Cf=[],Ks=-1;function Gr(t){return{current:t}}function gt(t){0>Ks||(t.current=Cf[Ks],Cf[Ks]=null,Ks--)}function ft(t,e){Ks++,Cf[Ks]=t.current,t.current=e}var Ur={},Zt=Gr(Ur),hn=Gr(!1),vs=Ur;function To(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Oc(){gt(hn),gt(Zt)}function sg(t,e,n){if(Zt.current!==Ur)throw Error(le(168));ft(Zt,e),ft(hn,n)}function Nx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,NE(t)||"Unknown",r));return Et({},n,i)}function kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,vs=Zt.current,ft(Zt,t),ft(hn,hn.current),!0}function og(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=Nx(t,e,vs),i.__reactInternalMemoizedMergedChildContext=t,gt(hn),gt(Zt),ft(Zt,t)):gt(hn),ft(hn,n)}var Ui=null,mu=!1,ld=!1;function Lx(t){Ui===null?Ui=[t]:Ui.push(t)}function Yw(t){mu=!0,Lx(t)}function Wr(){if(!ld&&Ui!==null){ld=!0;var t=0,e=lt;try{var n=Ui;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,mu=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),ix(up,Wr),r}finally{lt=e,ld=!1}}return null}var Qs=[],Zs=0,Bc=null,zc=0,Bn=[],zn=0,xs=null,Oi=1,ki="";function Jr(t,e){Qs[Zs++]=zc,Qs[Zs++]=Bc,Bc=t,zc=e}function Dx(t,e,n){Bn[zn++]=Oi,Bn[zn++]=ki,Bn[zn++]=xs,xs=t;var i=Oi;t=ki;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-ai(e)+r|n<<r|i,ki=s+t}else Oi=1<<s|n<<r|i,ki=t}function _p(t){t.return!==null&&(Jr(t,1),Dx(t,1,0))}function yp(t){for(;t===Bc;)Bc=Qs[--Zs],Qs[Zs]=null,zc=Qs[--Zs],Qs[Zs]=null;for(;t===xs;)xs=Bn[--zn],Bn[zn]=null,ki=Bn[--zn],Bn[zn]=null,Oi=Bn[--zn],Bn[zn]=null}var Rn=null,Cn=null,xt=!1,ri=null;function Ix(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ag(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xs!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function Rf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pf(t){if(xt){var e=Cn;if(e){var n=e;if(!ag(t,e)){if(Rf(t))throw Error(le(418));e=Ar(n.nextSibling);var i=Rn;e&&ag(t,e)?Ix(i,n):(t.flags=t.flags&-4097|2,xt=!1,Rn=t)}}else{if(Rf(t))throw Error(le(418));t.flags=t.flags&-4097|2,xt=!1,Rn=t}}}function lg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Ml(t){if(t!==Rn)return!1;if(!xt)return lg(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bf(t.type,t.memoizedProps)),e&&(e=Cn)){if(Rf(t))throw Ux(),Error(le(418));for(;e;)Ix(t,e),e=Ar(e.nextSibling)}if(lg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?Ar(t.stateNode.nextSibling):null;return!0}function Ux(){for(var t=Cn;t;)t=Ar(t.nextSibling)}function Ao(){Cn=Rn=null,xt=!1}function Sp(t){ri===null?ri=[t]:ri.push(t)}var qw=Ji.ReactCurrentBatchConfig;function ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cg(t){var e=t._init;return e(t._payload)}function Fx(t){function e(f,v){if(t){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Nr(f,v),f.index=0,f.sibling=null,f}function s(f,v,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,_,y){return v===null||v.tag!==6?(v=md(_,f.mode,y),v.return=f,v):(v=r(v,_),v.return=f,v)}function l(f,v,_,y){var A=_.type;return A===js?d(f,v,_.props.children,y,_.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===dr&&cg(A)===v.type)?(y=r(v,_.props),y.ref=ea(f,v,_),y.return=f,y):(y=vc(_.type,_.key,_.props,null,f.mode,y),y.ref=ea(f,v,_),y.return=f,y)}function c(f,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=gd(_,f.mode,y),v.return=f,v):(v=r(v,_.children||[]),v.return=f,v)}function d(f,v,_,y,A){return v===null||v.tag!==7?(v=ms(_,f.mode,y,A),v.return=f,v):(v=r(v,_),v.return=f,v)}function h(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=md(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pl:return _=vc(v.type,v.key,v.props,null,f.mode,_),_.ref=ea(f,null,v),_.return=f,_;case Ws:return v=gd(v,f.mode,_),v.return=f,v;case dr:var y=v._init;return h(f,y(v._payload),_)}if(da(v)||qo(v))return v=ms(v,f.mode,_,null),v.return=f,v;bl(f,v)}return null}function u(f,v,_,y){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(f,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case pl:return _.key===A?l(f,v,_,y):null;case Ws:return _.key===A?c(f,v,_,y):null;case dr:return A=_._init,u(f,v,A(_._payload),y)}if(da(_)||qo(_))return A!==null?null:d(f,v,_,y,null);bl(f,_)}return null}function p(f,v,_,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(v,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:return f=f.get(y.key===null?_:y.key)||null,l(v,f,y,A);case Ws:return f=f.get(y.key===null?_:y.key)||null,c(v,f,y,A);case dr:var C=y._init;return p(f,v,_,C(y._payload),A)}if(da(y)||qo(y))return f=f.get(_)||null,d(v,f,y,A,null);bl(v,y)}return null}function g(f,v,_,y){for(var A=null,C=null,M=v,R=v=0,b=null;M!==null&&R<_.length;R++){M.index>R?(b=M,M=null):b=M.sibling;var S=u(f,M,_[R],y);if(S===null){M===null&&(M=b);break}t&&M&&S.alternate===null&&e(f,M),v=s(S,v,R),C===null?A=S:C.sibling=S,C=S,M=b}if(R===_.length)return n(f,M),xt&&Jr(f,R),A;if(M===null){for(;R<_.length;R++)M=h(f,_[R],y),M!==null&&(v=s(M,v,R),C===null?A=M:C.sibling=M,C=M);return xt&&Jr(f,R),A}for(M=i(f,M);R<_.length;R++)b=p(M,f,R,_[R],y),b!==null&&(t&&b.alternate!==null&&M.delete(b.key===null?R:b.key),v=s(b,v,R),C===null?A=b:C.sibling=b,C=b);return t&&M.forEach(function(D){return e(f,D)}),xt&&Jr(f,R),A}function x(f,v,_,y){var A=qo(_);if(typeof A!="function")throw Error(le(150));if(_=A.call(_),_==null)throw Error(le(151));for(var C=A=null,M=v,R=v=0,b=null,S=_.next();M!==null&&!S.done;R++,S=_.next()){M.index>R?(b=M,M=null):b=M.sibling;var D=u(f,M,S.value,y);if(D===null){M===null&&(M=b);break}t&&M&&D.alternate===null&&e(f,M),v=s(D,v,R),C===null?A=D:C.sibling=D,C=D,M=b}if(S.done)return n(f,M),xt&&Jr(f,R),A;if(M===null){for(;!S.done;R++,S=_.next())S=h(f,S.value,y),S!==null&&(v=s(S,v,R),C===null?A=S:C.sibling=S,C=S);return xt&&Jr(f,R),A}for(M=i(f,M);!S.done;R++,S=_.next())S=p(M,f,R,S.value,y),S!==null&&(t&&S.alternate!==null&&M.delete(S.key===null?R:S.key),v=s(S,v,R),C===null?A=S:C.sibling=S,C=S);return t&&M.forEach(function(O){return e(f,O)}),xt&&Jr(f,R),A}function m(f,v,_,y){if(typeof _=="object"&&_!==null&&_.type===js&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case pl:e:{for(var A=_.key,C=v;C!==null;){if(C.key===A){if(A=_.type,A===js){if(C.tag===7){n(f,C.sibling),v=r(C,_.props.children),v.return=f,f=v;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===dr&&cg(A)===C.type){n(f,C.sibling),v=r(C,_.props),v.ref=ea(f,C,_),v.return=f,f=v;break e}n(f,C);break}else e(f,C);C=C.sibling}_.type===js?(v=ms(_.props.children,f.mode,y,_.key),v.return=f,f=v):(y=vc(_.type,_.key,_.props,null,f.mode,y),y.ref=ea(f,v,_),y.return=f,f=y)}return o(f);case Ws:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(f,v.sibling),v=r(v,_.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=gd(_,f.mode,y),v.return=f,f=v}return o(f);case dr:return C=_._init,m(f,v,C(_._payload),y)}if(da(_))return g(f,v,_,y);if(qo(_))return x(f,v,_,y);bl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,_),v.return=f,f=v):(n(f,v),v=md(_,f.mode,y),v.return=f,f=v),o(f)):n(f,v)}return m}var Co=Fx(!0),Ox=Fx(!1),Hc=Gr(null),Vc=null,Js=null,Ep=null;function wp(){Ep=Js=Vc=null}function Mp(t){var e=Hc.current;gt(Hc),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ao(t,e){Vc=t,Ep=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Ep!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Vc===null)throw Error(le(308));Js=t,Vc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var os=null;function bp(t){os===null?os=[t]:os.push(t)}function kx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bp(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,bp(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dp(t,n)}}function ug(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gc(t,e,n,i){var r=t.updateQueue;fr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(u=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){h=g.call(p,h,u);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,u=typeof g=="function"?g.call(p,h,u):g,u==null)break e;h=Et({},h,u);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ys|=o,t.lanes=o,t.memoizedState=h}}function dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var nl={},Ei=Gr(nl),Fa=Gr(nl),Oa=Gr(nl);function as(t){if(t===nl)throw Error(le(174));return t}function Ap(t,e){switch(ft(Oa,e),ft(Fa,t),ft(Ei,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=df(e,t)}gt(Ei),ft(Ei,e)}function Ro(){gt(Ei),gt(Fa),gt(Oa)}function zx(t){as(Oa.current);var e=as(Ei.current),n=df(e,t.type);e!==n&&(ft(Fa,t),ft(Ei,n))}function Cp(t){Fa.current===t&&(gt(Ei),gt(Fa))}var yt=Gr(0);function Wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cd=[];function Rp(){for(var t=0;t<cd.length;t++)cd[t]._workInProgressVersionPrimary=null;cd.length=0}var fc=Ji.ReactCurrentDispatcher,ud=Ji.ReactCurrentBatchConfig,_s=0,St=null,It=null,Bt=null,jc=!1,ya=!1,ka=0,Kw=0;function $t(){throw Error(le(321))}function Pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function Np(t,e,n,i,r,s){if(_s=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?eM:tM,t=n(i,r),ya){s=0;do{if(ya=!1,ka=0,25<=s)throw Error(le(301));s+=1,Bt=It=null,e.updateQueue=null,fc.current=nM,t=n(i,r)}while(ya)}if(fc.current=$c,e=It!==null&&It.next!==null,_s=0,Bt=It=St=null,jc=!1,e)throw Error(le(300));return t}function Lp(){var t=ka!==0;return ka=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?St.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function $n(){if(It===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Bt===null?St.memoizedState:Bt.next;if(e!==null)Bt=e,It=t;else{if(t===null)throw Error(le(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Bt===null?St.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ba(t,e){return typeof e=="function"?e(t):e}function dd(t){var e=$n(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((_s&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,St.lanes|=d,ys|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,ys|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fd(t){var e=$n(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Hx(){}function Vx(t,e){var n=St,i=$n(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Dp(jx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,za(9,Wx.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(le(349));_s&30||Gx(n,e,r)}return r}function Gx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wx(t,e,n,i){e.value=n,e.getSnapshot=i,$x(e)&&Xx(t)}function jx(t,e,n){return n(function(){$x(e)&&Xx(t)})}function $x(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function Xx(t){var e=$i(t,1);e!==null&&li(e,t,1,-1)}function fg(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=Jw.bind(null,St,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Yx(){return $n().memoizedState}function hc(t,e,n,i){var r=pi();St.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function gu(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&Pp(i,o.deps)){r.memoizedState=za(e,n,s,i);return}}St.flags|=t,r.memoizedState=za(1|e,n,s,i)}function hg(t,e){return hc(8390656,8,t,e)}function Dp(t,e){return gu(2048,8,t,e)}function qx(t,e){return gu(4,2,t,e)}function Kx(t,e){return gu(4,4,t,e)}function Qx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zx(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,Qx.bind(null,e,t),n)}function Ip(){}function Jx(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function e_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function t_(t,e,n){return _s&21?(ui(n,e)||(n=ox(),St.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function Qw(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=ud.transition;ud.transition={};try{t(!1),e()}finally{lt=n,ud.transition=i}}function n_(){return $n().memoizedState}function Zw(t,e,n){var i=Pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},i_(t))r_(e,n);else if(n=kx(t,e,n,i),n!==null){var r=on();li(n,t,i,r),s_(n,e,i)}}function Jw(t,e,n){var i=Pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(i_(t))r_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,bp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=kx(t,e,r,i),n!==null&&(r=on(),li(n,t,i,r),s_(n,e,i))}}function i_(t){var e=t.alternate;return t===St||e!==null&&e===St}function r_(t,e){ya=jc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function s_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dp(t,n)}}var $c={readContext:jn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},eM={readContext:jn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hc(4194308,4,Qx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hc(4194308,4,t,e)},useInsertionEffect:function(t,e){return hc(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Zw.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:Ip,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=Qw.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=pi();if(xt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),zt===null)throw Error(le(349));_s&30||Gx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hg(jx.bind(null,i,s,t),[t]),i.flags|=2048,za(9,Wx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=zt.identifierPrefix;if(xt){var n=ki,i=Oi;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Kw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tM={readContext:jn,useCallback:Jx,useContext:jn,useEffect:Dp,useImperativeHandle:Zx,useInsertionEffect:qx,useLayoutEffect:Kx,useMemo:e_,useReducer:dd,useRef:Yx,useState:function(){return dd(Ba)},useDebugValue:Ip,useDeferredValue:function(t){var e=$n();return t_(e,It.memoizedState,t)},useTransition:function(){var t=dd(Ba)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Hx,useSyncExternalStore:Vx,useId:n_,unstable_isNewReconciler:!1},nM={readContext:jn,useCallback:Jx,useContext:jn,useEffect:Dp,useImperativeHandle:Zx,useInsertionEffect:qx,useLayoutEffect:Kx,useMemo:e_,useReducer:fd,useRef:Yx,useState:function(){return fd(Ba)},useDebugValue:Ip,useDeferredValue:function(t){var e=$n();return It===null?e.memoizedState=t:t_(e,It.memoizedState,t)},useTransition:function(){var t=fd(Ba)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Hx,useSyncExternalStore:Vx,useId:n_,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=Pr(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(li(e,t,r,i),dc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=Pr(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(li(e,t,r,i),dc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=Pr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(t,r,i),e!==null&&(li(e,t,i,n),dc(e,t,i))}};function pg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,s):!0}function o_(t,e,n){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=pn(e)?vs:Zt.current,i=e.contextTypes,s=(i=i!=null)?To(t,r):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function mg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Df(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Tp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=pn(e)?vs:Zt.current,r.context=To(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vu.enqueueReplaceState(r,r.state,null),Gc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,e){try{var n="",i=e;do n+=PE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function hd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function If(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iM=typeof WeakMap=="function"?WeakMap:Map;function a_(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Yc||(Yc=!0,Wf=i),If(t,e)},n}function l_(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){If(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){If(t,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vM.bind(null,t,e,n),e.then(t,t))}function vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var rM=Ji.ReactCurrentOwner,fn=!1;function rn(t,e,n,i){e.child=t===null?Ox(e,null,n,i):Co(e,t.child,n,i)}function _g(t,e,n,i,r){n=n.render;var s=e.ref;return ao(e,r),i=Np(t,e,n,i,s,r),n=Lp(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(xt&&n&&_p(e),e.flags|=1,rn(t,e,i,r),e.child)}function yg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c_(t,e,s,i,r)):(t=vc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=Nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(La(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return Uf(t,e,n,i,r)}function u_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(to,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(to,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(to,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(to,Tn),Tn|=i;return rn(t,e,r,n),e.child}function d_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uf(t,e,n,i,r){var s=pn(n)?vs:Zt.current;return s=To(e,s),ao(e,r),n=Np(t,e,n,i,s,r),i=Lp(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(xt&&i&&_p(e),e.flags|=1,rn(t,e,n,r),e.child)}function Sg(t,e,n,i,r){if(pn(n)){var s=!0;kc(e)}else s=!1;if(ao(e,r),e.stateNode===null)pc(t,e),o_(e,n,i),Df(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=pn(n)?vs:Zt.current,c=To(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&mg(e,o,i,c),fr=!1;var u=e.memoizedState;o.state=u,Gc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||hn.current||fr?(typeof d=="function"&&(Lf(e,n,d,i),l=e.memoizedState),(a=fr||pg(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Bx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=pn(n)?vs:Zt.current,l=To(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&mg(e,o,i,l),fr=!1,u=e.memoizedState,o.state=u,Gc(e,i,o,r);var g=e.memoizedState;a!==h||u!==g||hn.current||fr?(typeof p=="function"&&(Lf(e,n,p,i),g=e.memoizedState),(c=fr||pg(e,n,c,i,u,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Ff(t,e,n,i,s,r)}function Ff(t,e,n,i,r,s){d_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&og(e,n,!1),Xi(t,e,s);i=e.stateNode,rM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Co(e,t.child,null,s),e.child=Co(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&og(e,n,!0),e.child}function f_(t){var e=t.stateNode;e.pendingContext?sg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sg(t,e.context,!1),Ap(t,e.containerInfo)}function Eg(t,e,n,i,r){return Ao(),Sp(r),e.flags|=256,rn(t,e,n,i),e.child}var Of={dehydrated:null,treeContext:null,retryLane:0};function kf(t){return{baseLanes:t,cachePool:null,transitions:null}}function h_(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(yt,r&1),t===null)return Pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yu(o,i,0,null),t=ms(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kf(n),e.memoizedState=Of,t):Up(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=ms(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?kf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Of,i}return s=t.child,t=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Up(t,e){return e=yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,i){return i!==null&&Sp(i),Co(e,t.child,null,n),t=Up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=hd(Error(le(422))),Tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yu({mode:"visible",children:i.children},r,0,null),s=ms(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Co(e,t.child,null,o),e.child.memoizedState=kf(o),e.memoizedState=Of,s);if(!(e.mode&1))return Tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=hd(s,i,void 0),Tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(t,r),li(i,t,r,-1))}return Hp(),i=hd(Error(le(421))),Tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=xM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=Ar(r.nextSibling),Rn=e,xt=!0,ri=null,t!==null&&(Bn[zn++]=Oi,Bn[zn++]=ki,Bn[zn++]=xs,Oi=t.id,ki=t.overflow,xs=e),e=Up(e,i.children),e.flags|=4096,e)}function wg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nf(t.return,e,n)}function pd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function p_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,n,e);else if(t.tag===19)wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pd(e,!0,n,null,s);break;case"together":pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oM(t,e,n){switch(e.tag){case 3:f_(e),Ao();break;case 5:zx(e);break;case 1:pn(e.type)&&kc(e);break;case 4:Ap(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Hc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?h_(t,e,n):(ft(yt,yt.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);ft(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return p_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,u_(t,e,n)}return Xi(t,e,n)}var m_,Bf,g_,v_;m_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bf=function(){};g_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,as(Ei.current);var s=null;switch(n){case"input":r=af(t,r),i=af(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=uf(t,r),i=uf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fc)}ff(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ba.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ba.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};v_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ta(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function aM(t,e,n){var i=e.pendingProps;switch(yp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return pn(e.type)&&Oc(),Xt(e),null;case 3:return i=e.stateNode,Ro(),gt(hn),gt(Zt),Rp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Xf(ri),ri=null))),Bf(t,e),Xt(e),null;case 5:Cp(e);var r=as(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)g_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Xt(e),null}if(t=as(Ei.current),Ml(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[Ua]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)mt(ha[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Lm(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Im(i,s),mt("invalid",i)}ff(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,t),r=["children",""+a]):ba.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":ml(i),Dm(i,s,!0);break;case"textarea":ml(i),Um(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=j0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[_i]=e,t[Ua]=i,m_(t,e,!1,!1),e.stateNode=t;e:{switch(o=hf(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)mt(ha[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Lm(t,i),r=af(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Im(t,i),r=uf(t,i),mt("invalid",t);break;default:r=i}ff(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Y0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ta(t,l):typeof l=="number"&&Ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&sp(t,s,l,o))}switch(n){case"input":ml(t),Dm(t,i,!1);break;case"textarea":ml(t),Um(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?io(t,!!i.multiple,s,!1):i.defaultValue!=null&&io(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)v_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=as(Oa.current),as(Ei.current),Ml(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return Xt(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Cn!==null&&e.mode&1&&!(e.flags&128))Ux(),Ao(),e.flags|=98560,s=!1;else if(s=Ml(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[_i]=e}else Ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else ri!==null&&(Xf(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Ut===0&&(Ut=3):Hp())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Ro(),Bf(t,e),t===null&&Da(e.stateNode.containerInfo),Xt(e),null;case 10:return Mp(e.type._context),Xt(e),null;case 17:return pn(e.type)&&Oc(),Xt(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ta(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wc(t),o!==null){for(e.flags|=128,ta(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>No&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Xt(e),null}else 2*Ct()-s.renderingStartTime>No&&n!==1073741824&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=yt.current,ft(yt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return zp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function lM(t,e){switch(yp(e),e.tag){case 1:return pn(e.type)&&Oc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),gt(hn),gt(Zt),Rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cp(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return Ro(),null;case 10:return Mp(e.type._context),null;case 22:case 23:return zp(),null;case 24:return null;default:return null}}var Al=!1,Qt=!1,cM=typeof WeakSet=="function"?WeakSet:Set,Se=null;function eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function zf(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Mg=!1;function uM(t,e){if(wf=Dc,t=Ex(),xp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,u=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mf={focusedElem:t,selectionRange:n},Dc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:ei(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(y){bt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return g=Mg,Mg=!1,g}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zf(e,n,s)}r=r.next}while(r!==i)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x_(t){var e=t.alternate;e!==null&&(t.alternate=null,x_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[Ua],delete e[Af],delete e[$w],delete e[Xw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function __(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||__(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fc));else if(i!==4&&(t=t.child,t!==null))for(Vf(t,e,n),t=t.sibling;t!==null;)Vf(t,e,n),t=t.sibling}function Gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}var Vt=null,ii=!1;function tr(t,e,n){for(n=n.child;n!==null;)y_(t,e,n),n=n.sibling}function y_(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:Qt||eo(n,e);case 6:var i=Vt,r=ii;Vt=null,tr(t,e,n),Vt=i,ii=r,Vt!==null&&(ii?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(ii?(t=Vt,n=n.stateNode,t.nodeType===8?ad(t.parentNode,n):t.nodeType===1&&ad(t,n),Pa(t)):ad(Vt,n.stateNode));break;case 4:i=Vt,r=ii,Vt=n.stateNode.containerInfo,ii=!0,tr(t,e,n),Vt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zf(n,e,o),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!Qt&&(eo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,tr(t,e,n),Qt=i):tr(t,e,n);break;default:tr(t,e,n)}}function Tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cM),e.forEach(function(i){var r=_M.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,ii=!1;break e;case 3:Vt=a.stateNode.containerInfo,ii=!0;break e;case 4:Vt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(Vt===null)throw Error(le(160));y_(s,o,r),Vt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S_(e,t),e=e.sibling}function S_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),hi(t),i&4){try{Sa(3,t,t.return),xu(3,t)}catch(x){bt(t,t.return,x)}try{Sa(5,t,t.return)}catch(x){bt(t,t.return,x)}}break;case 1:Kn(e,t),hi(t),i&512&&n!==null&&eo(n,n.return);break;case 5:if(Kn(e,t),hi(t),i&512&&n!==null&&eo(n,n.return),t.flags&32){var r=t.stateNode;try{Ta(r,"")}catch(x){bt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&G0(r,s),hf(a,o);var c=hf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Y0(r,h):d==="dangerouslySetInnerHTML"?$0(r,h):d==="children"?Ta(r,h):sp(r,d,h,c)}switch(a){case"input":lf(r,s);break;case"textarea":W0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?io(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?io(r,!!s.multiple,s.defaultValue,!0):io(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ua]=s}catch(x){bt(t,t.return,x)}}break;case 6:if(Kn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){bt(t,t.return,x)}}break;case 3:if(Kn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(x){bt(t,t.return,x)}break;case 4:Kn(e,t),hi(t);break;case 13:Kn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kp=Ct())),i&4&&Tg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||d,Kn(e,t),Qt=c):Kn(e,t),hi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Se=t,d=t.child;d!==null;){for(h=Se=d;Se!==null;){switch(u=Se,p=u.child,u.tag){case 0:case 11:case 14:case 15:Sa(4,u,u.return);break;case 1:eo(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){bt(i,n,x)}}break;case 5:eo(u,u.return);break;case 22:if(u.memoizedState!==null){Cg(h);continue}}p!==null?(p.return=u,Se=p):Cg(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=X0("display",o))}catch(x){bt(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){bt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Kn(e,t),hi(t),i&4&&Tg(t);break;case 21:break;default:Kn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(__(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ta(r,""),i.flags&=-33);var s=bg(t);Gf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bg(t);Vf(t,a,o);break;default:throw Error(le(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dM(t,e,n){Se=t,E_(t)}function E_(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Al;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=Al;var c=Qt;if(Al=o,(Qt=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?Rg(r):l!==null?(l.return=o,Se=l):Rg(r);for(;s!==null;)Se=s,E_(s),s=s.sibling;Se=r,Al=a,Qt=c}Ag(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Ag(t)}}function Ag(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||xu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Qt||e.flags&512&&Hf(e)}catch(u){bt(e,e.return,u)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Cg(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Rg(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Hf(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{Hf(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var fM=Math.ceil,Xc=Ji.ReactCurrentDispatcher,Fp=Ji.ReactCurrentOwner,Gn=Ji.ReactCurrentBatchConfig,Ze=0,zt=null,Dt=null,Gt=0,Tn=0,to=Gr(0),Ut=0,Ha=null,ys=0,_u=0,Op=0,Ea=null,dn=null,kp=0,No=1/0,Ii=null,Yc=!1,Wf=null,Rr=null,Cl=!1,Er=null,qc=0,wa=0,jf=null,mc=-1,gc=0;function on(){return Ze&6?Ct():mc!==-1?mc:mc=Ct()}function Pr(t){return t.mode&1?Ze&2&&Gt!==0?Gt&-Gt:qw.transition!==null?(gc===0&&(gc=ox()),gc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:hx(t.type)),t):1}function li(t,e,n,i){if(50<wa)throw wa=0,jf=null,Error(le(185));Ja(t,n,i),(!(Ze&2)||t!==zt)&&(t===zt&&(!(Ze&2)&&(_u|=n),Ut===4&&pr(t,Gt)),mn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(No=Ct()+500,mu&&Wr()))}function mn(t,e){var n=t.callbackNode;qE(t,e);var i=Lc(t,t===zt?Gt:0);if(i===0)n!==null&&km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&km(n),e===1)t.tag===0?Yw(Pg.bind(null,t)):Lx(Pg.bind(null,t)),Ww(function(){!(Ze&6)&&Wr()}),n=null;else{switch(ax(i)){case 1:n=up;break;case 4:n=rx;break;case 16:n=Nc;break;case 536870912:n=sx;break;default:n=Nc}n=P_(n,w_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w_(t,e){if(mc=-1,gc=0,Ze&6)throw Error(le(327));var n=t.callbackNode;if(lo()&&t.callbackNode!==n)return null;var i=Lc(t,t===zt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kc(t,i);else{e=i;var r=Ze;Ze|=2;var s=b_();(zt!==t||Gt!==e)&&(Ii=null,No=Ct()+500,ps(t,e));do try{mM();break}catch(a){M_(t,a)}while(!0);wp(),Xc.current=s,Ze=r,Dt!==null?e=0:(zt=null,Gt=0,e=Ut)}if(e!==0){if(e===2&&(r=xf(t),r!==0&&(i=r,e=$f(t,r))),e===1)throw n=Ha,ps(t,0),pr(t,i),mn(t,Ct()),n;if(e===6)pr(t,i);else{if(r=t.current.alternate,!(i&30)&&!hM(r)&&(e=Kc(t,i),e===2&&(s=xf(t),s!==0&&(i=s,e=$f(t,s))),e===1))throw n=Ha,ps(t,0),pr(t,i),mn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:es(t,dn,Ii);break;case 3:if(pr(t,i),(i&130023424)===i&&(e=kp+500-Ct(),10<e)){if(Lc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tf(es.bind(null,t,dn,Ii),e);break}es(t,dn,Ii);break;case 4:if(pr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fM(i/1960))-i,10<i){t.timeoutHandle=Tf(es.bind(null,t,dn,Ii),i);break}es(t,dn,Ii);break;case 5:es(t,dn,Ii);break;default:throw Error(le(329))}}}return mn(t,Ct()),t.callbackNode===n?w_.bind(null,t):null}function $f(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(ps(t,e).flags|=256),t=Kc(t,e),t!==2&&(e=dn,dn=n,e!==null&&Xf(e)),t}function Xf(t){dn===null?dn=t:dn.push.apply(dn,t)}function hM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Op,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function Pg(t){if(Ze&6)throw Error(le(327));lo();var e=Lc(t,0);if(!(e&1))return mn(t,Ct()),null;var n=Kc(t,e);if(t.tag!==0&&n===2){var i=xf(t);i!==0&&(e=i,n=$f(t,i))}if(n===1)throw n=Ha,ps(t,0),pr(t,e),mn(t,Ct()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,dn,Ii),mn(t,Ct()),null}function Bp(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(No=Ct()+500,mu&&Wr())}}function Ss(t){Er!==null&&Er.tag===0&&!(Ze&6)&&lo();var e=Ze;Ze|=1;var n=Gn.transition,i=lt;try{if(Gn.transition=null,lt=1,t)return t()}finally{lt=i,Gn.transition=n,Ze=e,!(Ze&6)&&Wr()}}function zp(){Tn=to.current,gt(to)}function ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gw(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(yp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Oc();break;case 3:Ro(),gt(hn),gt(Zt),Rp();break;case 5:Cp(i);break;case 4:Ro();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:Mp(i.type._context);break;case 22:case 23:zp()}n=n.return}if(zt=t,Dt=t=Nr(t.current,null),Gt=Tn=e,Ut=0,Ha=null,Op=_u=ys=0,dn=Ea=null,os!==null){for(e=0;e<os.length;e++)if(n=os[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}os=null}return t}function M_(t,e){do{var n=Dt;try{if(wp(),fc.current=$c,jc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jc=!1}if(_s=0,Bt=It=St=null,ya=!1,ka=0,Fp.current=null,n===null||n.return===null){Ut=1,Ha=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=vg(o);if(p!==null){p.flags&=-257,xg(p,o,a,s,e),p.mode&1&&gg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){gg(s,c,e),Hp();break e}l=Error(le(426))}}else if(xt&&a.mode&1){var m=vg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),xg(m,o,a,s,e),Sp(Po(l,a));break e}}s=l=Po(l,a),Ut!==4&&(Ut=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=a_(s,l,e);ug(s,f);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Rr===null||!Rr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=l_(s,a,e);ug(s,y);break e}}s=s.return}while(s!==null)}A_(n)}catch(A){e=A,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function b_(){var t=Xc.current;return Xc.current=$c,t===null?$c:t}function Hp(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),zt===null||!(ys&268435455)&&!(_u&268435455)||pr(zt,Gt)}function Kc(t,e){var n=Ze;Ze|=2;var i=b_();(zt!==t||Gt!==e)&&(Ii=null,ps(t,e));do try{pM();break}catch(r){M_(t,r)}while(!0);if(wp(),Ze=n,Xc.current=i,Dt!==null)throw Error(le(261));return zt=null,Gt=0,Ut}function pM(){for(;Dt!==null;)T_(Dt)}function mM(){for(;Dt!==null&&!zE();)T_(Dt)}function T_(t){var e=R_(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?A_(t):Dt=e,Fp.current=null}function A_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lM(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Dt=null;return}}else if(n=aM(n,e,Tn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ut===0&&(Ut=5)}function es(t,e,n){var i=lt,r=Gn.transition;try{Gn.transition=null,lt=1,gM(t,e,n,i)}finally{Gn.transition=r,lt=i}return null}function gM(t,e,n,i){do lo();while(Er!==null);if(Ze&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KE(t,s),t===zt&&(Dt=zt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cl||(Cl=!0,P_(Nc,function(){return lo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=lt;lt=1;var a=Ze;Ze|=4,Fp.current=null,uM(t,n),S_(n,t),Fw(Mf),Dc=!!wf,Mf=wf=null,t.current=n,dM(n),HE(),Ze=a,lt=o,Gn.transition=s}else t.current=n;if(Cl&&(Cl=!1,Er=t,qc=r),s=t.pendingLanes,s===0&&(Rr=null),WE(n.stateNode),mn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yc)throw Yc=!1,t=Wf,Wf=null,t;return qc&1&&t.tag!==0&&lo(),s=t.pendingLanes,s&1?t===jf?wa++:(wa=0,jf=t):wa=0,Wr(),null}function lo(){if(Er!==null){var t=ax(qc),e=Gn.transition,n=lt;try{if(Gn.transition=null,lt=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,qc=0,Ze&6)throw Error(le(331));var r=Ze;for(Ze|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var d=Se;switch(d.tag){case 0:case 11:case 15:Sa(8,d,s)}var h=d.child;if(h!==null)h.return=d,Se=h;else for(;Se!==null;){d=Se;var u=d.sibling,p=d.return;if(x_(d),d===c){Se=null;break}if(u!==null){u.return=p,Se=u;break}Se=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){o=Se;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Se=_;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xu(9,a)}}catch(A){bt(a,a.return,A)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(Ze=r,Wr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(uu,t)}catch{}i=!0}return i}finally{lt=n,Gn.transition=e}}return!1}function Ng(t,e,n){e=Po(n,e),e=a_(t,e,1),t=Cr(t,e,1),e=on(),t!==null&&(Ja(t,1,e),mn(t,e))}function bt(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){t=Po(n,t),t=l_(e,t,1),e=Cr(e,t,1),t=on(),e!==null&&(Ja(e,1,t),mn(e,t));break}}e=e.return}}function vM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Gt&n)===n&&(Ut===4||Ut===3&&(Gt&130023424)===Gt&&500>Ct()-kp?ps(t,0):Op|=n),mn(t,e)}function C_(t,e){e===0&&(t.mode&1?(e=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):e=1);var n=on();t=$i(t,e),t!==null&&(Ja(t,e,n),mn(t,n))}function xM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C_(t,n)}function _M(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),C_(t,n)}var R_;R_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,oM(t,e,n);fn=!!(t.flags&131072)}else fn=!1,xt&&e.flags&1048576&&Dx(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pc(t,e),t=e.pendingProps;var r=To(e,Zt.current);ao(e,n),r=Np(null,e,i,t,r,n);var s=Lp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,kc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Tp(e),r.updater=vu,e.stateNode=r,r._reactInternals=e,Df(e,i,t,n),e=Ff(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&_p(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=SM(i),t=ei(i,t),r){case 0:e=Uf(null,e,i,t,n);break e;case 1:e=Sg(null,e,i,t,n);break e;case 11:e=_g(null,e,i,t,n);break e;case 14:e=yg(null,e,i,ei(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Uf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Sg(t,e,i,r,n);case 3:e:{if(f_(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Bx(t,e),Gc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Po(Error(le(423)),e),e=Eg(t,e,i,n,r);break e}else if(i!==r){r=Po(Error(le(424)),e),e=Eg(t,e,i,n,r);break e}else for(Cn=Ar(e.stateNode.containerInfo.firstChild),Rn=e,xt=!0,ri=null,n=Ox(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),i===r){e=Xi(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return zx(e),t===null&&Pf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,bf(i,r)?o=null:s!==null&&bf(i,s)&&(e.flags|=32),d_(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&Pf(e),null;case 13:return h_(t,e,n);case 4:return Ap(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Co(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),_g(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(Hc,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!hn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ao(e,n),r=jn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),yg(t,e,i,r,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),pc(t,e),e.tag=1,pn(i)?(t=!0,kc(e)):t=!1,ao(e,n),o_(e,i,r),Df(e,i,r,n),Ff(null,e,i,!0,t,n);case 19:return p_(t,e,n);case 22:return u_(t,e,n)}throw Error(le(156,e.tag))};function P_(t,e){return ix(t,e)}function yM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new yM(t,e,n,i)}function Vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SM(t){if(typeof t=="function")return Vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ap)return 11;if(t===lp)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return ms(n.children,r,s,e);case op:o=8,r|=8;break;case nf:return t=Vn(12,n,e,r|2),t.elementType=nf,t.lanes=s,t;case rf:return t=Vn(13,n,e,r),t.elementType=rf,t.lanes=s,t;case sf:return t=Vn(19,n,e,r),t.elementType=sf,t.lanes=s,t;case z0:return yu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k0:o=10;break e;case B0:o=9;break e;case ap:o=11;break e;case lp:o=14;break e;case dr:o=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ms(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function yu(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=z0,t.lanes=n,t.stateNode={isHidden:!1},t}function md(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function gd(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gp(t,e,n,i,r,s,o,a,l){return t=new EM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tp(s),t}function wM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function N_(t){if(!t)return Ur;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(pn(n))return Nx(t,n,e)}return e}function L_(t,e,n,i,r,s,o,a,l){return t=Gp(n,i,!0,t,r,s,o,a,l),t.context=N_(null),n=t.current,i=on(),r=Pr(n),s=Vi(i,r),s.callback=e??null,Cr(n,s,r),t.current.lanes=r,Ja(t,r,i),mn(t,i),t}function Su(t,e,n,i){var r=e.current,s=on(),o=Pr(r);return n=N_(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Cr(r,e,o),t!==null&&(li(t,r,o,s),dc(t,r,o)),o}function Qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wp(t,e){Lg(t,e),(t=t.alternate)&&Lg(t,e)}function MM(){return null}var D_=typeof reportError=="function"?reportError:function(t){console.error(t)};function jp(t){this._internalRoot=t}Eu.prototype.render=jp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Su(t,e,null,null)};Eu.prototype.unmount=jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ss(function(){Su(null,t,null,null)}),e[ji]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ux();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&fx(t)}};function $p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function bM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Qc(o);s.call(c)}}var o=L_(e,i,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[ji]=o.current,Da(t.nodeType===8?t.parentNode:t),Ss(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Qc(l);a.call(c)}}var l=Gp(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=l,t[ji]=l.current,Da(t.nodeType===8?t.parentNode:t),Ss(function(){Su(e,l,n,i)}),l}function Mu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Qc(o);a.call(l)}}Su(e,o,t,r)}else o=bM(n,e,t,r,i);return Qc(o)}lx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(dp(e,n|1),mn(e,Ct()),!(Ze&6)&&(No=Ct()+500,Wr()))}break;case 13:Ss(function(){var i=$i(t,1);if(i!==null){var r=on();li(i,t,1,r)}}),Wp(t,1)}};fp=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=on();li(e,t,134217728,n)}Wp(t,134217728)}};cx=function(t){if(t.tag===13){var e=Pr(t),n=$i(t,e);if(n!==null){var i=on();li(n,t,e,i)}Wp(t,e)}};ux=function(){return lt};dx=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};mf=function(t,e,n){switch(e){case"input":if(lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pu(i);if(!r)throw Error(le(90));V0(i),lf(i,r)}}}break;case"textarea":W0(t,n);break;case"select":e=n.value,e!=null&&io(t,!!n.multiple,e,!1)}};Q0=Bp;Z0=Ss;var TM={usingClientEntryPoint:!1,Events:[tl,qs,pu,q0,K0,Bp]},na={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AM={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tx(t),t===null?null:t.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||MM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{uu=Rl.inject(AM),Si=Rl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TM;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$p(e))throw Error(le(200));return wM(t,e,null,n)};Ln.createRoot=function(t,e){if(!$p(t))throw Error(le(299));var n=!1,i="",r=D_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gp(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,Da(t.nodeType===8?t.parentNode:t),new jp(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=tx(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return Ss(t)};Ln.hydrate=function(t,e,n){if(!wu(e))throw Error(le(200));return Mu(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!$p(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=D_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L_(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,Da(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Eu(e)};Ln.render=function(t,e,n){if(!wu(e))throw Error(le(200));return Mu(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!wu(t))throw Error(le(40));return t._reactRootContainer?(Ss(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Ln.unstable_batchedUpdates=Bp;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wu(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return Mu(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function I_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_)}catch(t){console.error(t)}}I_(),I0.exports=Ln;var Vo=I0.exports;const U_=E0(Vo);var F_,Ig=Vo;F_=Ig.createRoot,Ig.hydrateRoot;const CM=1,RM=1e6;let vd=0;function PM(){return vd=(vd+1)%Number.MAX_SAFE_INTEGER,vd.toString()}const xd=new Map,Ug=t=>{if(xd.has(t))return;const e=setTimeout(()=>{xd.delete(t),Ma({type:"REMOVE_TOAST",toastId:t})},RM);xd.set(t,e)},NM=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,CM)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?Ug(n):t.toasts.forEach(i=>{Ug(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},xc=[];let _c={toasts:[]};function Ma(t){_c=NM(_c,t),xc.forEach(e=>{e(_c)})}function LM({...t}){const e=PM(),n=r=>Ma({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Ma({type:"DISMISS_TOAST",toastId:e});return Ma({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function DM(){const[t,e]=L.useState(_c);return L.useEffect(()=>(xc.push(e),()=>{const n=xc.indexOf(e);n>-1&&xc.splice(n,1)}),[t]),{...t,toast:LM,dismiss:n=>Ma({type:"DISMISS_TOAST",toastId:n})}}function Tt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function IM(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function O_(...t){return e=>t.forEach(n=>IM(n,e))}function _n(...t){return L.useCallback(O_(...t),t)}function Xp(t,e=[]){let n=[];function i(s,o){const a=L.createContext(o),l=n.length;n=[...n,o];function c(h){const{scope:u,children:p,...g}=h,x=(u==null?void 0:u[t][l])||a,m=L.useMemo(()=>g,Object.values(g));return w.jsx(x.Provider,{value:m,children:p})}function d(h,u){const p=(u==null?void 0:u[t][l])||a,g=L.useContext(p);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return c.displayName=s+"Provider",[c,d]}const r=()=>{const s=n.map(o=>L.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return L.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,UM(r,...e)]}function UM(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return L.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}var Zc=L.forwardRef((t,e)=>{const{children:n,...i}=t,r=L.Children.toArray(n),s=r.find(FM);if(s){const o=s.props.children,a=r.map(l=>l===s?L.Children.count(o)>1?L.Children.only(null):L.isValidElement(o)?o.props.children:null:l);return w.jsx(Yf,{...i,ref:e,children:L.isValidElement(o)?L.cloneElement(o,void 0,a):null})}return w.jsx(Yf,{...i,ref:e,children:n})});Zc.displayName="Slot";var Yf=L.forwardRef((t,e)=>{const{children:n,...i}=t;if(L.isValidElement(n)){const r=kM(n);return L.cloneElement(n,{...OM(i,n.props),ref:e?O_(e,r):r})}return L.Children.count(n)>1?L.Children.only(null):null});Yf.displayName="SlotClone";var k_=({children:t})=>w.jsx(w.Fragment,{children:t});function FM(t){return L.isValidElement(t)&&t.type===k_}function OM(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{s(...a),r(...a)}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function kM(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function BM(t){const e=t+"CollectionProvider",[n,i]=Xp(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=p=>{const{scope:g,children:x}=p,m=pe.useRef(null),f=pe.useRef(new Map).current;return w.jsx(r,{scope:g,itemMap:f,collectionRef:m,children:x})};o.displayName=e;const a=t+"CollectionSlot",l=pe.forwardRef((p,g)=>{const{scope:x,children:m}=p,f=s(a,x),v=_n(g,f.collectionRef);return w.jsx(Zc,{ref:v,children:m})});l.displayName=a;const c=t+"CollectionItemSlot",d="data-radix-collection-item",h=pe.forwardRef((p,g)=>{const{scope:x,children:m,...f}=p,v=pe.useRef(null),_=_n(g,v),y=s(c,x);return pe.useEffect(()=>(y.itemMap.set(v,{ref:v,...f}),()=>void y.itemMap.delete(v))),w.jsx(Zc,{[d]:"",ref:_,children:m})});h.displayName=c;function u(p){const g=s(t+"CollectionConsumer",p);return pe.useCallback(()=>{const m=g.collectionRef.current;if(!m)return[];const f=Array.from(m.querySelectorAll(`[${d}]`));return Array.from(g.itemMap.values()).sort((y,A)=>f.indexOf(y.ref.current)-f.indexOf(A.ref.current))},[g.collectionRef,g.itemMap])}return[{Provider:o,Slot:l,ItemSlot:h},u,i]}var zM=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Jt=zM.reduce((t,e)=>{const n=L.forwardRef((i,r)=>{const{asChild:s,...o}=i,a=s?Zc:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(a,{...o,ref:r})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function Yp(t,e){t&&Vo.flushSync(()=>t.dispatchEvent(e))}function Xn(t){const e=L.useRef(t);return L.useEffect(()=>{e.current=t}),L.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function B_(t,e=globalThis==null?void 0:globalThis.document){const n=Xn(t);L.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var HM="DismissableLayer",qf="dismissableLayer.update",VM="dismissableLayer.pointerDownOutside",GM="dismissableLayer.focusOutside",Fg,z_=L.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),H_=L.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=L.useContext(z_),[d,h]=L.useState(null),u=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=L.useState({}),g=_n(e,M=>h(M)),x=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),f=x.indexOf(m),v=d?x.indexOf(d):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,y=v>=f,A=jM(M=>{const R=M.target,b=[...c.branches].some(S=>S.contains(R));!y||b||(r==null||r(M),o==null||o(M),M.defaultPrevented||a==null||a())},u),C=$M(M=>{const R=M.target;[...c.branches].some(S=>S.contains(R))||(s==null||s(M),o==null||o(M),M.defaultPrevented||a==null||a())},u);return B_(M=>{v===c.layers.size-1&&(i==null||i(M),!M.defaultPrevented&&a&&(M.preventDefault(),a()))},u),L.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Fg=u.body.style.pointerEvents,u.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),Og(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(u.body.style.pointerEvents=Fg)}},[d,u,n,c]),L.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),Og())},[d,c]),L.useEffect(()=>{const M=()=>p({});return document.addEventListener(qf,M),()=>document.removeEventListener(qf,M)},[]),w.jsx(Jt.div,{...l,ref:g,style:{pointerEvents:_?y?"auto":"none":void 0,...t.style},onFocusCapture:Tt(t.onFocusCapture,C.onFocusCapture),onBlurCapture:Tt(t.onBlurCapture,C.onBlurCapture),onPointerDownCapture:Tt(t.onPointerDownCapture,A.onPointerDownCapture)})});H_.displayName=HM;var WM="DismissableLayerBranch",V_=L.forwardRef((t,e)=>{const n=L.useContext(z_),i=L.useRef(null),r=_n(e,i);return L.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),w.jsx(Jt.div,{...t,ref:r})});V_.displayName=WM;function jM(t,e=globalThis==null?void 0:globalThis.document){const n=Xn(t),i=L.useRef(!1),r=L.useRef(()=>{});return L.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){G_(VM,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function $M(t,e=globalThis==null?void 0:globalThis.document){const n=Xn(t),i=L.useRef(!1);return L.useEffect(()=>{const r=s=>{s.target&&!i.current&&G_(GM,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Og(){const t=new CustomEvent(qf);document.dispatchEvent(t)}function G_(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Yp(r,s):r.dispatchEvent(s)}var XM=H_,YM=V_,Yi=globalThis!=null&&globalThis.document?L.useLayoutEffect:()=>{},qM="Portal",W_=L.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=L.useState(!1);Yi(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?U_.createPortal(w.jsx(Jt.div,{...i,ref:e}),o):null});W_.displayName=qM;function KM(t,e){return L.useReducer((n,i)=>e[n][i]??n,t)}var j_=t=>{const{present:e,children:n}=t,i=QM(e),r=typeof n=="function"?n({present:i.isPresent}):L.Children.only(n),s=_n(i.ref,ZM(r));return typeof n=="function"||i.isPresent?L.cloneElement(r,{ref:s}):null};j_.displayName="Presence";function QM(t){const[e,n]=L.useState(),i=L.useRef({}),r=L.useRef(t),s=L.useRef("none"),o=t?"mounted":"unmounted",[a,l]=KM(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return L.useEffect(()=>{const c=Pl(i.current);s.current=a==="mounted"?c:"none"},[a]),Yi(()=>{const c=i.current,d=r.current;if(d!==t){const u=s.current,p=Pl(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&u!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),Yi(()=>{if(e){const c=h=>{const p=Pl(i.current).includes(h.animationName);h.target===e&&p&&Vo.flushSync(()=>l("ANIMATION_END"))},d=h=>{h.target===e&&(s.current=Pl(i.current))};return e.addEventListener("animationstart",d),e.addEventListener("animationcancel",c),e.addEventListener("animationend",c),()=>{e.removeEventListener("animationstart",d),e.removeEventListener("animationcancel",c),e.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:L.useCallback(c=>{c&&(i.current=getComputedStyle(c)),n(c)},[])}}function Pl(t){return(t==null?void 0:t.animationName)||"none"}function ZM(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function JM({prop:t,defaultProp:e,onChange:n=()=>{}}){const[i,r]=eb({defaultProp:e,onChange:n}),s=t!==void 0,o=s?t:i,a=Xn(n),l=L.useCallback(c=>{if(s){const h=typeof c=="function"?c(t):c;h!==t&&a(h)}else r(c)},[s,t,r,a]);return[o,l]}function eb({defaultProp:t,onChange:e}){const n=L.useState(t),[i]=n,r=L.useRef(i),s=Xn(e);return L.useEffect(()=>{r.current!==i&&(s(i),r.current=i)},[i,r,s]),n}var tb="VisuallyHidden",bu=L.forwardRef((t,e)=>w.jsx(Jt.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));bu.displayName=tb;var nb=bu,qp="ToastProvider",[Kp,ib,rb]=BM("Toast"),[$_,t3]=Xp("Toast",[rb]),[sb,Tu]=$_(qp),X_=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=L.useState(null),[c,d]=L.useState(0),h=L.useRef(!1),u=L.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${qp}\`. Expected non-empty \`string\`.`),w.jsx(Kp.Provider,{scope:e,children:w.jsx(sb,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:L.useCallback(()=>d(p=>p+1),[]),onToastRemove:L.useCallback(()=>d(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:u,children:o})})};X_.displayName=qp;var Y_="ToastViewport",ob=["F8"],Kf="toast.viewportPause",Qf="toast.viewportResume",q_=L.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=ob,label:r="Notifications ({hotkey})",...s}=t,o=Tu(Y_,n),a=ib(n),l=L.useRef(null),c=L.useRef(null),d=L.useRef(null),h=L.useRef(null),u=_n(e,h,o.onViewportChange),p=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=o.toastCount>0;L.useEffect(()=>{const m=f=>{var _;i.every(y=>f[y]||f.code===y)&&((_=h.current)==null||_.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),L.useEffect(()=>{const m=l.current,f=h.current;if(g&&m&&f){const v=()=>{if(!o.isClosePausedRef.current){const C=new CustomEvent(Kf);f.dispatchEvent(C),o.isClosePausedRef.current=!0}},_=()=>{if(o.isClosePausedRef.current){const C=new CustomEvent(Qf);f.dispatchEvent(C),o.isClosePausedRef.current=!1}},y=C=>{!m.contains(C.relatedTarget)&&_()},A=()=>{m.contains(document.activeElement)||_()};return m.addEventListener("focusin",v),m.addEventListener("focusout",y),m.addEventListener("pointermove",v),m.addEventListener("pointerleave",A),window.addEventListener("blur",v),window.addEventListener("focus",_),()=>{m.removeEventListener("focusin",v),m.removeEventListener("focusout",y),m.removeEventListener("pointermove",v),m.removeEventListener("pointerleave",A),window.removeEventListener("blur",v),window.removeEventListener("focus",_)}}},[g,o.isClosePausedRef]);const x=L.useCallback(({tabbingDirection:m})=>{const v=a().map(_=>{const y=_.ref.current,A=[y,..._b(y)];return m==="forwards"?A:A.reverse()});return(m==="forwards"?v.reverse():v).flat()},[a]);return L.useEffect(()=>{const m=h.current;if(m){const f=v=>{var A,C,M;const _=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!_){const R=document.activeElement,b=v.shiftKey;if(v.target===m&&b){(A=c.current)==null||A.focus();return}const O=x({tabbingDirection:b?"backwards":"forwards"}),z=O.findIndex(k=>k===R);_d(O.slice(z+1))?v.preventDefault():b?(C=c.current)==null||C.focus():(M=d.current)==null||M.focus()}};return m.addEventListener("keydown",f),()=>m.removeEventListener("keydown",f)}},[a,x]),w.jsxs(YM,{ref:l,role:"region","aria-label":r.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&w.jsx(Zf,{ref:c,onFocusFromOutsideViewport:()=>{const m=x({tabbingDirection:"forwards"});_d(m)}}),w.jsx(Kp.Slot,{scope:n,children:w.jsx(Jt.ol,{tabIndex:-1,...s,ref:u})}),g&&w.jsx(Zf,{ref:d,onFocusFromOutsideViewport:()=>{const m=x({tabbingDirection:"backwards"});_d(m)}})]})});q_.displayName=Y_;var K_="ToastFocusProxy",Zf=L.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=Tu(K_,n);return w.jsx(bu,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});Zf.displayName=K_;var Au="Toast",ab="toast.swipeStart",lb="toast.swipeMove",cb="toast.swipeCancel",ub="toast.swipeEnd",Q_=L.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a=!0,l]=JM({prop:i,defaultProp:r,onChange:s});return w.jsx(j_,{present:n||a,children:w.jsx(hb,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:Xn(t.onPause),onResume:Xn(t.onResume),onSwipeStart:Tt(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Tt(t.onSwipeMove,c=>{const{x:d,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:Tt(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Tt(t.onSwipeEnd,c=>{const{x:d,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});Q_.displayName=Au;var[db,fb]=$_(Au,{onClose(){}}),hb=L.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:d,onSwipeMove:h,onSwipeCancel:u,onSwipeEnd:p,...g}=t,x=Tu(Au,n),[m,f]=L.useState(null),v=_n(e,k=>f(k)),_=L.useRef(null),y=L.useRef(null),A=r||x.duration,C=L.useRef(0),M=L.useRef(A),R=L.useRef(0),{onToastAdd:b,onToastRemove:S}=x,D=Xn(()=>{var X;(m==null?void 0:m.contains(document.activeElement))&&((X=x.viewport)==null||X.focus()),o()}),O=L.useCallback(k=>{!k||k===1/0||(window.clearTimeout(R.current),C.current=new Date().getTime(),R.current=window.setTimeout(D,k))},[D]);L.useEffect(()=>{const k=x.viewport;if(k){const X=()=>{O(M.current),c==null||c()},H=()=>{const q=new Date().getTime()-C.current;M.current=M.current-q,window.clearTimeout(R.current),l==null||l()};return k.addEventListener(Kf,H),k.addEventListener(Qf,X),()=>{k.removeEventListener(Kf,H),k.removeEventListener(Qf,X)}}},[x.viewport,A,l,c,O]),L.useEffect(()=>{s&&!x.isClosePausedRef.current&&O(A)},[s,A,x.isClosePausedRef,O]),L.useEffect(()=>(b(),()=>S()),[b,S]);const z=L.useMemo(()=>m?ry(m):null,[m]);return x.viewport?w.jsxs(w.Fragment,{children:[z&&w.jsx(pb,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:z}),w.jsx(db,{scope:n,onClose:D,children:Vo.createPortal(w.jsx(Kp.ItemSlot,{scope:n,children:w.jsx(XM,{asChild:!0,onEscapeKeyDown:Tt(a,()=>{x.isFocusedToastEscapeKeyDownRef.current||D(),x.isFocusedToastEscapeKeyDownRef.current=!1}),children:w.jsx(Jt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":x.swipeDirection,...g,ref:v,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Tt(t.onKeyDown,k=>{k.key==="Escape"&&(a==null||a(k.nativeEvent),k.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:Tt(t.onPointerDown,k=>{k.button===0&&(_.current={x:k.clientX,y:k.clientY})}),onPointerMove:Tt(t.onPointerMove,k=>{if(!_.current)return;const X=k.clientX-_.current.x,H=k.clientY-_.current.y,q=!!y.current,P=["left","right"].includes(x.swipeDirection),V=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,Q=P?V(0,X):0,Z=P?0:V(0,H),ue=k.pointerType==="touch"?10:2,we={x:Q,y:Z},Y={originalEvent:k,delta:we};q?(y.current=we,Nl(lb,h,Y,{discrete:!1})):kg(we,x.swipeDirection,ue)?(y.current=we,Nl(ab,d,Y,{discrete:!1}),k.target.setPointerCapture(k.pointerId)):(Math.abs(X)>ue||Math.abs(H)>ue)&&(_.current=null)}),onPointerUp:Tt(t.onPointerUp,k=>{const X=y.current,H=k.target;if(H.hasPointerCapture(k.pointerId)&&H.releasePointerCapture(k.pointerId),y.current=null,_.current=null,X){const q=k.currentTarget,P={originalEvent:k,delta:X};kg(X,x.swipeDirection,x.swipeThreshold)?Nl(ub,p,P,{discrete:!0}):Nl(cb,u,P,{discrete:!0}),q.addEventListener("click",V=>V.preventDefault(),{once:!0})}})})})}),x.viewport)})]}):null}),pb=t=>{const{__scopeToast:e,children:n,...i}=t,r=Tu(Au,e),[s,o]=L.useState(!1),[a,l]=L.useState(!1);return vb(()=>o(!0)),L.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:w.jsx(W_,{asChild:!0,children:w.jsx(bu,{...i,children:s&&w.jsxs(w.Fragment,{children:[r.label," ",n]})})})},mb="ToastTitle",Z_=L.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return w.jsx(Jt.div,{...i,ref:e})});Z_.displayName=mb;var gb="ToastDescription",J_=L.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return w.jsx(Jt.div,{...i,ref:e})});J_.displayName=gb;var ey="ToastAction",ty=L.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?w.jsx(iy,{altText:n,asChild:!0,children:w.jsx(Qp,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${ey}\`. Expected non-empty \`string\`.`),null)});ty.displayName=ey;var ny="ToastClose",Qp=L.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=fb(ny,n);return w.jsx(iy,{asChild:!0,children:w.jsx(Jt.button,{type:"button",...i,ref:e,onClick:Tt(t.onClick,r.onClose)})})});Qp.displayName=ny;var iy=L.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return w.jsx(Jt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function ry(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),xb(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...ry(i))}}),e}function Nl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Yp(r,s):r.dispatchEvent(s)}var kg=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function vb(t=()=>{}){const e=Xn(t);Yi(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function xb(t){return t.nodeType===t.ELEMENT_NODE}function _b(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function _d(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var yb=X_,sy=q_,oy=Q_,ay=Z_,ly=J_,cy=ty,uy=Qp;function dy(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=dy(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function fy(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=dy(t))&&(i&&(i+=" "),i+=e);return i}const Bg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,zg=fy,Sb=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return zg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const d=n==null?void 0:n[c],h=s==null?void 0:s[c];if(d===null)return null;const u=Bg(d)||Bg(h);return r[c][u]}),a=n&&Object.entries(n).reduce((c,d)=>{let[h,u]=d;return u===void 0||(c[h]=u),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,d)=>{let{class:h,className:u,...p}=d;return Object.entries(p).every(g=>{let[x,m]=g;return Array.isArray(m)?m.includes({...s,...a}[x]):{...s,...a}[x]===m})?[...c,h,u]:c},[]);return zg(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hy=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=L.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>L.createElement("svg",{ref:l,...wb,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:hy("lucide",r),...a},[...o.map(([c,d])=>L.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=(t,e)=>{const n=L.forwardRef(({className:i,...r},s)=>L.createElement(Mb,{ref:s,iconNode:e,className:hy(`lucide-${Eb(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=bb("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Zp="-",Ab=t=>{const e=Rb(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(Zp);return a[0]===""&&a.length!==1&&a.shift(),py(a,e)||Cb(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},py=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?py(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(Zp);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},Hg=/^\[(.+)\]$/,Cb=t=>{if(Hg.test(t)){const e=Hg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Rb=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return Nb(Object.entries(t.classGroups),n).forEach(([s,o])=>{Jf(o,i,s,e)}),i},Jf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Vg(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(Pb(r)){Jf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{Jf(o,Vg(e,s),n,i)})})},Vg=(t,e)=>{let n=t;return e.split(Zp).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},Pb=t=>t.isThemeGetter,Nb=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,Lb=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},my="!",Db=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,d=0,h;for(let m=0;m<a.length;m++){let f=a[m];if(c===0){if(f===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(d,m)),d=m+s;continue}if(f==="/"){h=m;continue}}f==="["?c++:f==="]"&&c--}const u=l.length===0?a:a.substring(d),p=u.startsWith(my),g=p?u.substring(1):u,x=h&&h>d?h-d:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:x}};return n?a=>n({className:a,parseClassName:o}):o},Ib=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},Ub=t=>({cache:Lb(t.cacheSize),parseClassName:Db(t),...Ab(t)}),Fb=/\s+/,Ob=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(Fb);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:d,hasImportantModifier:h,baseClassName:u,maybePostfixModifierPosition:p}=n(c);let g=!!p,x=i(g?u.substring(0,p):u);if(!x){if(!g){a=c+(a.length>0?" "+a:a);continue}if(x=i(u),!x){a=c+(a.length>0?" "+a:a);continue}g=!1}const m=Ib(d).join(":"),f=h?m+my:m,v=f+x;if(s.includes(v))continue;s.push(v);const _=r(x,g);for(let y=0;y<_.length;++y){const A=_[y];s.push(f+A)}a=c+(a.length>0?" "+a:a)}return a};function kb(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=gy(e))&&(i&&(i+=" "),i+=n);return i}const gy=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=gy(t[i]))&&(n&&(n+=" "),n+=e);return n};function Bb(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((d,h)=>h(d),t());return n=Ub(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const d=Ob(l,n);return r(l,d),d}return function(){return s(kb.apply(null,arguments))}}const pt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},vy=/^\[(?:([a-z-]+):)?(.+)\]$/i,zb=/^\d+\/\d+$/,Hb=new Set(["px","full","screen"]),Vb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Gb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Wb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,jb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$b=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ti=t=>co(t)||Hb.has(t)||zb.test(t),nr=t=>Go(t,"length",e1),co=t=>!!t&&!Number.isNaN(Number(t)),yd=t=>Go(t,"number",co),ia=t=>!!t&&Number.isInteger(Number(t)),Xb=t=>t.endsWith("%")&&co(t.slice(0,-1)),Ve=t=>vy.test(t),ir=t=>Vb.test(t),Yb=new Set(["length","size","percentage"]),qb=t=>Go(t,Yb,xy),Kb=t=>Go(t,"position",xy),Qb=new Set(["image","url"]),Zb=t=>Go(t,Qb,n1),Jb=t=>Go(t,"",t1),ra=()=>!0,Go=(t,e,n)=>{const i=vy.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},e1=t=>Gb.test(t)&&!Wb.test(t),xy=()=>!1,t1=t=>jb.test(t),n1=t=>$b.test(t),i1=()=>{const t=pt("colors"),e=pt("spacing"),n=pt("blur"),i=pt("brightness"),r=pt("borderColor"),s=pt("borderRadius"),o=pt("borderSpacing"),a=pt("borderWidth"),l=pt("contrast"),c=pt("grayscale"),d=pt("hueRotate"),h=pt("invert"),u=pt("gap"),p=pt("gradientColorStops"),g=pt("gradientColorStopPositions"),x=pt("inset"),m=pt("margin"),f=pt("opacity"),v=pt("padding"),_=pt("saturate"),y=pt("scale"),A=pt("sepia"),C=pt("skew"),M=pt("space"),R=pt("translate"),b=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",Ve,e],O=()=>[Ve,e],z=()=>["",Ti,nr],k=()=>["auto",co,Ve],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],H=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",Ve],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[co,Ve];return{cacheSize:500,separator:":",theme:{colors:[ra],spacing:[Ti,nr],blur:["none","",ir,Ve],brightness:Z(),borderColor:[t],borderRadius:["none","","full",ir,Ve],borderSpacing:O(),borderWidth:z(),contrast:Z(),grayscale:V(),hueRotate:Z(),invert:V(),gap:O(),gradientColorStops:[t],gradientColorStopPositions:[Xb,nr],inset:D(),margin:D(),opacity:Z(),padding:O(),saturate:Z(),scale:Z(),sepia:V(),skew:Z(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",Ve]}],container:["container"],columns:[{columns:[ir]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),Ve]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:b()}],"overscroll-x":[{"overscroll-x":b()}],"overscroll-y":[{"overscroll-y":b()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ia,Ve]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ve]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",ia,Ve]}],"grid-cols":[{"grid-cols":[ra]}],"col-start-end":[{col:["auto",{span:["full",ia,Ve]},Ve]}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":[ra]}],"row-start-end":[{row:["auto",{span:[ia,Ve]},Ve]}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ve]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ve]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[M]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[M]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ve,e]}],"min-w":[{"min-w":[Ve,e,"min","max","fit"]}],"max-w":[{"max-w":[Ve,e,"none","full","min","max","fit","prose",{screen:[ir]},ir]}],h:[{h:[Ve,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ve,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ve,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ve,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ir,nr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",yd]}],"font-family":[{font:[ra]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ve]}],"line-clamp":[{"line-clamp":["none",co,yd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ti,Ve]}],"list-image":[{"list-image":["none",Ve]}],"list-style-type":[{list:["none","disc","decimal",Ve]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ti,nr]}],"underline-offset":[{"underline-offset":["auto",Ti,Ve]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ve]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ve]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),Kb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",qb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Zb]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...H(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:H()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...H()]}],"outline-offset":[{"outline-offset":[Ti,Ve]}],"outline-w":[{outline:[Ti,nr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Ti,nr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",ir,Jb]}],"shadow-color":[{shadow:[ra]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ir,Ve]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[_]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ve]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",Ve]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ve]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[ia,Ve]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ve]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ve]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ve]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ti,nr,yd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},r1=Bb(i1);function As(...t){return r1(fy(t))}const s1=yb,_y=L.forwardRef(({className:t,...e},n)=>w.jsx(sy,{ref:n,className:As("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));_y.displayName=sy.displayName;const o1=Sb("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),yy=L.forwardRef(({className:t,variant:e,...n},i)=>w.jsx(oy,{ref:i,className:As(o1({variant:e}),t),...n}));yy.displayName=oy.displayName;const a1=L.forwardRef(({className:t,...e},n)=>w.jsx(cy,{ref:n,className:As("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));a1.displayName=cy.displayName;const Sy=L.forwardRef(({className:t,...e},n)=>w.jsx(uy,{ref:n,className:As("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:w.jsx(Tb,{className:"h-4 w-4"})}));Sy.displayName=uy.displayName;const Ey=L.forwardRef(({className:t,...e},n)=>w.jsx(ay,{ref:n,className:As("text-sm font-semibold",t),...e}));Ey.displayName=ay.displayName;const wy=L.forwardRef(({className:t,...e},n)=>w.jsx(ly,{ref:n,className:As("text-sm opacity-90",t),...e}));wy.displayName=ly.displayName;function l1(){const{toasts:t}=DM();return w.jsxs(s1,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return w.jsxs(yy,{...s,children:[w.jsxs("div",{className:"grid gap-1",children:[n&&w.jsx(Ey,{children:n}),i&&w.jsx(wy,{children:i})]}),r,w.jsx(Sy,{})]},e)}),w.jsx(_y,{})]})}var Gg=["light","dark"],c1="(prefers-color-scheme: dark)",u1=L.createContext(void 0),d1={setTheme:t=>{},themes:[]},f1=()=>{var t;return(t=L.useContext(u1))!=null?t:d1};L.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:i,enableColorScheme:r,defaultTheme:s,value:o,attrs:a,nonce:l})=>{let c=s==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(g=>`'${g}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=r?Gg.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",u=(g,x=!1,m=!0)=>{let f=o?o[g]:g,v=x?g+"|| ''":`'${f}'`,_="";return r&&m&&!x&&Gg.includes(g)&&(_+=`d.style.colorScheme = '${g}';`),n==="class"?x||f?_+=`c.add(${v})`:_+="null":f&&(_+=`d[s](n,${v})`),_},p=t?`!function(){${d}${u(t)}}()`:i?`!function(){try{${d}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${c1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${u(o?"x[e]":"e",!0)}}${c?"":"else{"+u(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${e}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${u(o?"x[e]":"e",!0)}}else{${u(s,!1,!1)};}${h}}catch(t){}}();`;return L.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var h1=t=>{switch(t){case"success":return g1;case"info":return x1;case"warning":return v1;case"error":return _1;default:return null}},p1=Array(12).fill(0),m1=({visible:t})=>pe.createElement("div",{className:"sonner-loading-wrapper","data-visible":t},pe.createElement("div",{className:"sonner-spinner"},p1.map((e,n)=>pe.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),g1=pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},pe.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),v1=pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},pe.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),x1=pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},pe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),_1=pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},pe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),y1=()=>{let[t,e]=pe.useState(document.hidden);return pe.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},eh=1,S1=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...i}=t,r=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:eh++,s=this.toasts.find(a=>a.id===r),o=t.dismissible===void 0?!0:t.dismissible;return s?this.toasts=this.toasts.map(a=>a.id===r?(this.publish({...a,...t,id:r,title:n}),{...a,...t,id:r,dismissible:o,title:n}):a):this.addToast({title:n,...i,dismissible:o,id:r}),r},this.dismiss=t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let i=t instanceof Promise?t:t(),r=n!==void 0;return i.then(async s=>{if(w1(s)&&!s.ok){r=!1;let o=typeof e.error=="function"?await e.error(`HTTP error! status: ${s.status}`):e.error,a=typeof e.description=="function"?await e.description(`HTTP error! status: ${s.status}`):e.description;this.create({id:n,type:"error",message:o,description:a})}else if(e.success!==void 0){r=!1;let o=typeof e.success=="function"?await e.success(s):e.success,a=typeof e.description=="function"?await e.description(s):e.description;this.create({id:n,type:"success",message:o,description:a})}}).catch(async s=>{if(e.error!==void 0){r=!1;let o=typeof e.error=="function"?await e.error(s):e.error,a=typeof e.description=="function"?await e.description(s):e.description;this.create({id:n,type:"error",message:o,description:a})}}).finally(()=>{var s;r&&(this.dismiss(n),n=void 0),(s=e.finally)==null||s.call(e)}),n},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||eh++;return this.create({jsx:t(n),id:n,...e}),n},this.subscribers=[],this.toasts=[]}},bn=new S1,E1=(t,e)=>{let n=(e==null?void 0:e.id)||eh++;return bn.addToast({title:t,...e,id:n}),n},w1=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",M1=E1,b1=()=>bn.toasts,T1=Object.assign(M1,{success:bn.success,info:bn.info,warning:bn.warning,error:bn.error,custom:bn.custom,message:bn.message,promise:bn.promise,dismiss:bn.dismiss,loading:bn.loading},{getHistory:b1});function A1(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}A1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ll(t){return t.label!==void 0}var C1=3,R1="32px",P1=4e3,N1=356,L1=14,D1=20,I1=200;function U1(...t){return t.filter(Boolean).join(" ")}var F1=t=>{var e,n,i,r,s,o,a,l,c,d;let{invert:h,toast:u,unstyled:p,interacting:g,setHeights:x,visibleToasts:m,heights:f,index:v,toasts:_,expanded:y,removeToast:A,defaultRichColors:C,closeButton:M,style:R,cancelButtonStyle:b,actionButtonStyle:S,className:D="",descriptionClassName:O="",duration:z,position:k,gap:X,loadingIcon:H,expandByDefault:q,classNames:P,icons:V,closeButtonAriaLabel:Q="Close toast",pauseWhenPageIsHidden:Z,cn:ue}=t,[we,Y]=pe.useState(!1),[ae,fe]=pe.useState(!1),[he,Me]=pe.useState(!1),[We,De]=pe.useState(!1),[ct,tt]=pe.useState(0),[Ye,U]=pe.useState(0),Nt=pe.useRef(null),je=pe.useRef(null),nt=v===0,Te=v+1<=m,Oe=u.type,Le=u.dismissible!==!1,He=u.className||"",At=u.descriptionClassName||"",N=pe.useMemo(()=>f.findIndex(de=>de.toastId===u.id)||0,[f,u.id]),E=pe.useMemo(()=>{var de;return(de=u.closeButton)!=null?de:M},[u.closeButton,M]),G=pe.useMemo(()=>u.duration||z||P1,[u.duration,z]),J=pe.useRef(0),ne=pe.useRef(0),K=pe.useRef(0),be=pe.useRef(null),[me,Ae]=k.split("-"),Pe=pe.useMemo(()=>f.reduce((de,I,se)=>se>=N?de:de+I.height,0),[f,N]),re=y1(),ye=u.invert||h,Ue=Oe==="loading";ne.current=pe.useMemo(()=>N*X+Pe,[N,Pe]),pe.useEffect(()=>{Y(!0)},[]),pe.useLayoutEffect(()=>{if(!we)return;let de=je.current,I=de.style.height;de.style.height="auto";let se=de.getBoundingClientRect().height;de.style.height=I,U(se),x(ie=>ie.find(xe=>xe.toastId===u.id)?ie.map(xe=>xe.toastId===u.id?{...xe,height:se}:xe):[{toastId:u.id,height:se,position:u.position},...ie])},[we,u.title,u.description,x,u.id]);let Ne=pe.useCallback(()=>{fe(!0),tt(ne.current),x(de=>de.filter(I=>I.toastId!==u.id)),setTimeout(()=>{A(u)},I1)},[u,A,x,ne]);pe.useEffect(()=>{if(u.promise&&Oe==="loading"||u.duration===1/0||u.type==="loading")return;let de,I=G;return y||g||Z&&re?(()=>{if(K.current<J.current){let se=new Date().getTime()-J.current;I=I-se}K.current=new Date().getTime()})():I!==1/0&&(J.current=new Date().getTime(),de=setTimeout(()=>{var se;(se=u.onAutoClose)==null||se.call(u,u),Ne()},I)),()=>clearTimeout(de)},[y,g,q,u,G,Ne,u.promise,Oe,Z,re]),pe.useEffect(()=>{let de=je.current;if(de){let I=de.getBoundingClientRect().height;return U(I),x(se=>[{toastId:u.id,height:I,position:u.position},...se]),()=>x(se=>se.filter(ie=>ie.toastId!==u.id))}},[x,u.id]),pe.useEffect(()=>{u.delete&&Ne()},[Ne,u.delete]);function ge(){return V!=null&&V.loading?pe.createElement("div",{className:"sonner-loader","data-visible":Oe==="loading"},V.loading):H?pe.createElement("div",{className:"sonner-loader","data-visible":Oe==="loading"},H):pe.createElement(m1,{visible:Oe==="loading"})}return pe.createElement("li",{"aria-live":u.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:je,className:ue(D,He,P==null?void 0:P.toast,(e=u==null?void 0:u.classNames)==null?void 0:e.toast,P==null?void 0:P.default,P==null?void 0:P[Oe],(n=u==null?void 0:u.classNames)==null?void 0:n[Oe]),"data-sonner-toast":"","data-rich-colors":(i=u.richColors)!=null?i:C,"data-styled":!(u.jsx||u.unstyled||p),"data-mounted":we,"data-promise":!!u.promise,"data-removed":ae,"data-visible":Te,"data-y-position":me,"data-x-position":Ae,"data-index":v,"data-front":nt,"data-swiping":he,"data-dismissible":Le,"data-type":Oe,"data-invert":ye,"data-swipe-out":We,"data-expanded":!!(y||q&&we),style:{"--index":v,"--toasts-before":v,"--z-index":_.length-v,"--offset":`${ae?ct:ne.current}px`,"--initial-height":q?"auto":`${Ye}px`,...R,...u.style},onPointerDown:de=>{Ue||!Le||(Nt.current=new Date,tt(ne.current),de.target.setPointerCapture(de.pointerId),de.target.tagName!=="BUTTON"&&(Me(!0),be.current={x:de.clientX,y:de.clientY}))},onPointerUp:()=>{var de,I,se,ie;if(We||!Le)return;be.current=null;let xe=Number(((de=je.current)==null?void 0:de.style.getPropertyValue("--swipe-amount").replace("px",""))||0),oe=new Date().getTime()-((I=Nt.current)==null?void 0:I.getTime()),ee=Math.abs(xe)/oe;if(Math.abs(xe)>=D1||ee>.11){tt(ne.current),(se=u.onDismiss)==null||se.call(u,u),Ne(),De(!0);return}(ie=je.current)==null||ie.style.setProperty("--swipe-amount","0px"),Me(!1)},onPointerMove:de=>{var I;if(!be.current||!Le)return;let se=de.clientY-be.current.y,ie=de.clientX-be.current.x,xe=(me==="top"?Math.min:Math.max)(0,se),oe=de.pointerType==="touch"?10:2;Math.abs(xe)>oe?(I=je.current)==null||I.style.setProperty("--swipe-amount",`${se}px`):Math.abs(ie)>oe&&(be.current=null)}},E&&!u.jsx?pe.createElement("button",{"aria-label":Q,"data-disabled":Ue,"data-close-button":!0,onClick:Ue||!Le?()=>{}:()=>{var de;Ne(),(de=u.onDismiss)==null||de.call(u,u)},className:ue(P==null?void 0:P.closeButton,(r=u==null?void 0:u.classNames)==null?void 0:r.closeButton)},pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},pe.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),pe.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,u.jsx||pe.isValidElement(u.title)?u.jsx||u.title:pe.createElement(pe.Fragment,null,Oe||u.icon||u.promise?pe.createElement("div",{"data-icon":"",className:ue(P==null?void 0:P.icon,(s=u==null?void 0:u.classNames)==null?void 0:s.icon)},u.promise||u.type==="loading"&&!u.icon?u.icon||ge():null,u.type!=="loading"?u.icon||(V==null?void 0:V[Oe])||h1(Oe):null):null,pe.createElement("div",{"data-content":"",className:ue(P==null?void 0:P.content,(o=u==null?void 0:u.classNames)==null?void 0:o.content)},pe.createElement("div",{"data-title":"",className:ue(P==null?void 0:P.title,(a=u==null?void 0:u.classNames)==null?void 0:a.title)},u.title),u.description?pe.createElement("div",{"data-description":"",className:ue(O,At,P==null?void 0:P.description,(l=u==null?void 0:u.classNames)==null?void 0:l.description)},u.description):null),pe.isValidElement(u.cancel)?u.cancel:u.cancel&&Ll(u.cancel)?pe.createElement("button",{"data-button":!0,"data-cancel":!0,style:u.cancelButtonStyle||b,onClick:de=>{var I,se;Ll(u.cancel)&&Le&&((se=(I=u.cancel).onClick)==null||se.call(I,de),Ne())},className:ue(P==null?void 0:P.cancelButton,(c=u==null?void 0:u.classNames)==null?void 0:c.cancelButton)},u.cancel.label):null,pe.isValidElement(u.action)?u.action:u.action&&Ll(u.action)?pe.createElement("button",{"data-button":!0,"data-action":!0,style:u.actionButtonStyle||S,onClick:de=>{var I,se;Ll(u.action)&&(de.defaultPrevented||((se=(I=u.action).onClick)==null||se.call(I,de),Ne()))},className:ue(P==null?void 0:P.actionButton,(d=u==null?void 0:u.classNames)==null?void 0:d.actionButton)},u.action.label):null))};function Wg(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var O1=t=>{let{invert:e,position:n="bottom-right",hotkey:i=["altKey","KeyT"],expand:r,closeButton:s,className:o,offset:a,theme:l="light",richColors:c,duration:d,style:h,visibleToasts:u=C1,toastOptions:p,dir:g=Wg(),gap:x=L1,loadingIcon:m,icons:f,containerAriaLabel:v="Notifications",pauseWhenPageIsHidden:_,cn:y=U1}=t,[A,C]=pe.useState([]),M=pe.useMemo(()=>Array.from(new Set([n].concat(A.filter(Z=>Z.position).map(Z=>Z.position)))),[A,n]),[R,b]=pe.useState([]),[S,D]=pe.useState(!1),[O,z]=pe.useState(!1),[k,X]=pe.useState(l!=="system"?l:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),H=pe.useRef(null),q=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),P=pe.useRef(null),V=pe.useRef(!1),Q=pe.useCallback(Z=>{var ue;(ue=A.find(we=>we.id===Z.id))!=null&&ue.delete||bn.dismiss(Z.id),C(we=>we.filter(({id:Y})=>Y!==Z.id))},[A]);return pe.useEffect(()=>bn.subscribe(Z=>{if(Z.dismiss){C(ue=>ue.map(we=>we.id===Z.id?{...we,delete:!0}:we));return}setTimeout(()=>{U_.flushSync(()=>{C(ue=>{let we=ue.findIndex(Y=>Y.id===Z.id);return we!==-1?[...ue.slice(0,we),{...ue[we],...Z},...ue.slice(we+1)]:[Z,...ue]})})})}),[]),pe.useEffect(()=>{if(l!=="system"){X(l);return}l==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?X("dark"):X("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:Z})=>{X(Z?"dark":"light")})},[l]),pe.useEffect(()=>{A.length<=1&&D(!1)},[A]),pe.useEffect(()=>{let Z=ue=>{var we,Y;i.every(ae=>ue[ae]||ue.code===ae)&&(D(!0),(we=H.current)==null||we.focus()),ue.code==="Escape"&&(document.activeElement===H.current||(Y=H.current)!=null&&Y.contains(document.activeElement))&&D(!1)};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[i]),pe.useEffect(()=>{if(H.current)return()=>{P.current&&(P.current.focus({preventScroll:!0}),P.current=null,V.current=!1)}},[H.current]),A.length?pe.createElement("section",{"aria-label":`${v} ${q}`,tabIndex:-1},M.map((Z,ue)=>{var we;let[Y,ae]=Z.split("-");return pe.createElement("ol",{key:Z,dir:g==="auto"?Wg():g,tabIndex:-1,ref:H,className:o,"data-sonner-toaster":!0,"data-theme":k,"data-y-position":Y,"data-x-position":ae,style:{"--front-toast-height":`${((we=R[0])==null?void 0:we.height)||0}px`,"--offset":typeof a=="number"?`${a}px`:a||R1,"--width":`${N1}px`,"--gap":`${x}px`,...h},onBlur:fe=>{V.current&&!fe.currentTarget.contains(fe.relatedTarget)&&(V.current=!1,P.current&&(P.current.focus({preventScroll:!0}),P.current=null))},onFocus:fe=>{fe.target instanceof HTMLElement&&fe.target.dataset.dismissible==="false"||V.current||(V.current=!0,P.current=fe.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{O||D(!1)},onPointerDown:fe=>{fe.target instanceof HTMLElement&&fe.target.dataset.dismissible==="false"||z(!0)},onPointerUp:()=>z(!1)},A.filter(fe=>!fe.position&&ue===0||fe.position===Z).map((fe,he)=>{var Me,We;return pe.createElement(F1,{key:fe.id,icons:f,index:he,toast:fe,defaultRichColors:c,duration:(Me=p==null?void 0:p.duration)!=null?Me:d,className:p==null?void 0:p.className,descriptionClassName:p==null?void 0:p.descriptionClassName,invert:e,visibleToasts:u,closeButton:(We=p==null?void 0:p.closeButton)!=null?We:s,interacting:O,position:Z,style:p==null?void 0:p.style,unstyled:p==null?void 0:p.unstyled,classNames:p==null?void 0:p.classNames,cancelButtonStyle:p==null?void 0:p.cancelButtonStyle,actionButtonStyle:p==null?void 0:p.actionButtonStyle,removeToast:Q,toasts:A.filter(De=>De.position==fe.position),heights:R.filter(De=>De.position==fe.position),setHeights:b,expandByDefault:r,gap:x,loadingIcon:m,expanded:S,pauseWhenPageIsHidden:_,cn:y})}))})):null};const k1=({...t})=>{const{theme:e="system"}=f1();return w.jsx(O1,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})};function B1(t,e=[]){let n=[];function i(s,o){const a=L.createContext(o),l=n.length;n=[...n,o];const c=h=>{var f;const{scope:u,children:p,...g}=h,x=((f=u==null?void 0:u[t])==null?void 0:f[l])||a,m=L.useMemo(()=>g,Object.values(g));return w.jsx(x.Provider,{value:m,children:p})};c.displayName=s+"Provider";function d(h,u){var x;const p=((x=u==null?void 0:u[t])==null?void 0:x[l])||a,g=L.useContext(p);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,d]}const r=()=>{const s=n.map(o=>L.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return L.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,z1(r,...e)]}function z1(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return L.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}var H1="DismissableLayer",th="dismissableLayer.update",V1="dismissableLayer.pointerDownOutside",G1="dismissableLayer.focusOutside",jg,My=L.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),by=L.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=L.useContext(My),[d,h]=L.useState(null),u=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=L.useState({}),g=_n(e,M=>h(M)),x=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),f=x.indexOf(m),v=d?x.indexOf(d):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,y=v>=f,A=$1(M=>{const R=M.target,b=[...c.branches].some(S=>S.contains(R));!y||b||(r==null||r(M),o==null||o(M),M.defaultPrevented||a==null||a())},u),C=X1(M=>{const R=M.target;[...c.branches].some(S=>S.contains(R))||(s==null||s(M),o==null||o(M),M.defaultPrevented||a==null||a())},u);return B_(M=>{v===c.layers.size-1&&(i==null||i(M),!M.defaultPrevented&&a&&(M.preventDefault(),a()))},u),L.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(jg=u.body.style.pointerEvents,u.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),$g(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(u.body.style.pointerEvents=jg)}},[d,u,n,c]),L.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),$g())},[d,c]),L.useEffect(()=>{const M=()=>p({});return document.addEventListener(th,M),()=>document.removeEventListener(th,M)},[]),w.jsx(Jt.div,{...l,ref:g,style:{pointerEvents:_?y?"auto":"none":void 0,...t.style},onFocusCapture:Tt(t.onFocusCapture,C.onFocusCapture),onBlurCapture:Tt(t.onBlurCapture,C.onBlurCapture),onPointerDownCapture:Tt(t.onPointerDownCapture,A.onPointerDownCapture)})});by.displayName=H1;var W1="DismissableLayerBranch",j1=L.forwardRef((t,e)=>{const n=L.useContext(My),i=L.useRef(null),r=_n(e,i);return L.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),w.jsx(Jt.div,{...t,ref:r})});j1.displayName=W1;function $1(t,e=globalThis==null?void 0:globalThis.document){const n=Xn(t),i=L.useRef(!1),r=L.useRef(()=>{});return L.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){Ty(V1,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function X1(t,e=globalThis==null?void 0:globalThis.document){const n=Xn(t),i=L.useRef(!1);return L.useEffect(()=>{const r=s=>{s.target&&!i.current&&Ty(G1,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function $g(){const t=new CustomEvent(th);document.dispatchEvent(t)}function Ty(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Yp(r,s):r.dispatchEvent(s)}const Y1=["top","right","bottom","left"],Fr=Math.min,An=Math.max,Jc=Math.round,Dl=Math.floor,Or=t=>({x:t,y:t}),q1={left:"right",right:"left",bottom:"top",top:"bottom"},K1={start:"end",end:"start"};function nh(t,e,n){return An(t,Fr(e,n))}function qi(t,e){return typeof t=="function"?t(e):t}function Ki(t){return t.split("-")[0]}function Wo(t){return t.split("-")[1]}function Jp(t){return t==="x"?"y":"x"}function em(t){return t==="y"?"height":"width"}function kr(t){return["top","bottom"].includes(Ki(t))?"y":"x"}function tm(t){return Jp(kr(t))}function Q1(t,e,n){n===void 0&&(n=!1);const i=Wo(t),r=tm(t),s=em(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=eu(o)),[o,eu(o)]}function Z1(t){const e=eu(t);return[ih(t),e,ih(e)]}function ih(t){return t.replace(/start|end/g,e=>K1[e])}function J1(t,e,n){const i=["left","right"],r=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?s:o;default:return[]}}function eT(t,e,n,i){const r=Wo(t);let s=J1(Ki(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(ih)))),s}function eu(t){return t.replace(/left|right|bottom|top/g,e=>q1[e])}function tT(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ay(t){return typeof t!="number"?tT(t):{top:t,right:t,bottom:t,left:t}}function tu(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function Xg(t,e,n){let{reference:i,floating:r}=t;const s=kr(e),o=tm(e),a=em(o),l=Ki(e),c=s==="y",d=i.x+i.width/2-r.width/2,h=i.y+i.height/2-r.height/2,u=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:d,y:i.y-r.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-r.width,y:h};break;default:p={x:i.x,y:i.y}}switch(Wo(e)){case"start":p[o]-=u*(n&&c?-1:1);break;case"end":p[o]+=u*(n&&c?-1:1);break}return p}const nT=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=Xg(c,i,l),u=i,p={},g=0;for(let x=0;x<a.length;x++){const{name:m,fn:f}=a[x],{x:v,y:_,data:y,reset:A}=await f({x:d,y:h,initialPlacement:i,placement:u,strategy:r,middlewareData:p,rects:c,platform:o,elements:{reference:t,floating:e}});d=v??d,h=_??h,p={...p,[m]:{...p[m],...y}},A&&g<=50&&(g++,typeof A=="object"&&(A.placement&&(u=A.placement),A.rects&&(c=A.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:d,y:h}=Xg(c,u,l)),x=-1)}return{x:d,y:h,placement:u,strategy:r,middlewareData:p}};async function Va(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=qi(e,t),g=Ay(p),m=a[u?h==="floating"?"reference":"floating":h],f=tu(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),v=h==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),y=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},A=tu(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:_,strategy:l}):v);return{top:(f.top-A.top+g.top)/y.y,bottom:(A.bottom-f.bottom+g.bottom)/y.y,left:(f.left-A.left+g.left)/y.x,right:(A.right-f.right+g.right)/y.x}}const iT=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=qi(t,e)||{};if(c==null)return{};const h=Ay(d),u={x:n,y:i},p=tm(r),g=em(p),x=await o.getDimensions(c),m=p==="y",f=m?"top":"left",v=m?"bottom":"right",_=m?"clientHeight":"clientWidth",y=s.reference[g]+s.reference[p]-u[p]-s.floating[g],A=u[p]-s.reference[p],C=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let M=C?C[_]:0;(!M||!await(o.isElement==null?void 0:o.isElement(C)))&&(M=a.floating[_]||s.floating[g]);const R=y/2-A/2,b=M/2-x[g]/2-1,S=Fr(h[f],b),D=Fr(h[v],b),O=S,z=M-x[g]-D,k=M/2-x[g]/2+R,X=nh(O,k,z),H=!l.arrow&&Wo(r)!=null&&k!==X&&s.reference[g]/2-(k<O?S:D)-x[g]/2<0,q=H?k<O?k-O:k-z:0;return{[p]:u[p]+q,data:{[p]:X,centerOffset:k-X-q,...H&&{alignmentOffset:q}},reset:H}}}),rT=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...m}=qi(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const f=Ki(r),v=kr(a),_=Ki(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=u||(_||!x?[eu(a)]:Z1(a)),C=g!=="none";!u&&C&&A.push(...eT(a,x,g,y));const M=[a,...A],R=await Va(e,m),b=[];let S=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&b.push(R[f]),h){const k=Q1(r,o,y);b.push(R[k[0]],R[k[1]])}if(S=[...S,{placement:r,overflows:b}],!b.every(k=>k<=0)){var D,O;const k=(((D=s.flip)==null?void 0:D.index)||0)+1,X=M[k];if(X)return{data:{index:k,overflows:S},reset:{placement:X}};let H=(O=S.filter(q=>q.overflows[0]<=0).sort((q,P)=>q.overflows[1]-P.overflows[1])[0])==null?void 0:O.placement;if(!H)switch(p){case"bestFit":{var z;const q=(z=S.filter(P=>{if(C){const V=kr(P.placement);return V===v||V==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(V=>V>0).reduce((V,Q)=>V+Q,0)]).sort((P,V)=>P[1]-V[1])[0])==null?void 0:z[0];q&&(H=q);break}case"initialPlacement":H=a;break}if(r!==H)return{reset:{placement:H}}}return{}}}};function Yg(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function qg(t){return Y1.some(e=>t[e]>=0)}const sT=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=qi(t,e);switch(i){case"referenceHidden":{const s=await Va(e,{...r,elementContext:"reference"}),o=Yg(s,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:qg(o)}}}case"escaped":{const s=await Va(e,{...r,altBoundary:!0}),o=Yg(s,n.floating);return{data:{escapedOffsets:o,escaped:qg(o)}}}default:return{}}}}};async function oT(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=Ki(n),a=Wo(n),l=kr(n)==="y",c=["left","top"].includes(o)?-1:1,d=s&&l?-1:1,h=qi(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}const aT=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:s,placement:o,middlewareData:a}=e,l=await oT(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:o}}}}},lT=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:f,y:v}=m;return{x:f,y:v}}},...l}=qi(t,e),c={x:n,y:i},d=await Va(e,l),h=kr(Ki(r)),u=Jp(h);let p=c[u],g=c[h];if(s){const m=u==="y"?"top":"left",f=u==="y"?"bottom":"right",v=p+d[m],_=p-d[f];p=nh(v,p,_)}if(o){const m=h==="y"?"top":"left",f=h==="y"?"bottom":"right",v=g+d[m],_=g-d[f];g=nh(v,g,_)}const x=a.fn({...e,[u]:p,[h]:g});return{...x,data:{x:x.x-n,y:x.y-i,enabled:{[u]:s,[h]:o}}}}}},cT=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:s,middlewareData:o}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=qi(t,e),d={x:n,y:i},h=kr(r),u=Jp(h);let p=d[u],g=d[h];const x=qi(a,e),m=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(l){const _=u==="y"?"height":"width",y=s.reference[u]-s.floating[_]+m.mainAxis,A=s.reference[u]+s.reference[_]-m.mainAxis;p<y?p=y:p>A&&(p=A)}if(c){var f,v;const _=u==="y"?"width":"height",y=["top","left"].includes(Ki(r)),A=s.reference[h]-s.floating[_]+(y&&((f=o.offset)==null?void 0:f[h])||0)+(y?0:m.crossAxis),C=s.reference[h]+s.reference[_]+(y?0:((v=o.offset)==null?void 0:v[h])||0)-(y?m.crossAxis:0);g<A?g=A:g>C&&(g=C)}return{[u]:p,[h]:g}}}},uT=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:s,platform:o,elements:a}=e,{apply:l=()=>{},...c}=qi(t,e),d=await Va(e,c),h=Ki(r),u=Wo(r),p=kr(r)==="y",{width:g,height:x}=s.floating;let m,f;h==="top"||h==="bottom"?(m=h,f=u===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(f=h,m=u==="end"?"top":"bottom");const v=x-d.top-d.bottom,_=g-d.left-d.right,y=Fr(x-d[m],v),A=Fr(g-d[f],_),C=!e.middlewareData.shift;let M=y,R=A;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(R=_),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(M=v),C&&!u){const S=An(d.left,0),D=An(d.right,0),O=An(d.top,0),z=An(d.bottom,0);p?R=g-2*(S!==0||D!==0?S+D:An(d.left,d.right)):M=x-2*(O!==0||z!==0?O+z:An(d.top,d.bottom))}await l({...e,availableWidth:R,availableHeight:M});const b=await o.getDimensions(a.floating);return g!==b.width||x!==b.height?{reset:{rects:!0}}:{}}}};function Cu(){return typeof window<"u"}function jo(t){return Cy(t)?(t.nodeName||"").toLowerCase():"#document"}function Pn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Mi(t){var e;return(e=(Cy(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Cy(t){return Cu()?t instanceof Node||t instanceof Pn(t).Node:!1}function di(t){return Cu()?t instanceof Element||t instanceof Pn(t).Element:!1}function wi(t){return Cu()?t instanceof HTMLElement||t instanceof Pn(t).HTMLElement:!1}function Kg(t){return!Cu()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Pn(t).ShadowRoot}function il(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=fi(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function dT(t){return["table","td","th"].includes(jo(t))}function Ru(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function nm(t){const e=im(),n=di(t)?fi(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function fT(t){let e=Br(t);for(;wi(e)&&!Lo(e);){if(nm(e))return e;if(Ru(e))return null;e=Br(e)}return null}function im(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Lo(t){return["html","body","#document"].includes(jo(t))}function fi(t){return Pn(t).getComputedStyle(t)}function Pu(t){return di(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Br(t){if(jo(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kg(t)&&t.host||Mi(t);return Kg(e)?e.host:e}function Ry(t){const e=Br(t);return Lo(e)?t.ownerDocument?t.ownerDocument.body:t.body:wi(e)&&il(e)?e:Ry(e)}function Ga(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Ry(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=Pn(r);if(s){const a=rh(o);return e.concat(o,o.visualViewport||[],il(r)?r:[],a&&n?Ga(a):[])}return e.concat(r,Ga(r,[],n))}function rh(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Py(t){const e=fi(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=wi(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,a=Jc(n)!==s||Jc(i)!==o;return a&&(n=s,i=o),{width:n,height:i,$:a}}function rm(t){return di(t)?t:t.contextElement}function uo(t){const e=rm(t);if(!wi(e))return Or(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=Py(e);let o=(s?Jc(n.width):n.width)/i,a=(s?Jc(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const hT=Or(0);function Ny(t){const e=Pn(t);return!im()||!e.visualViewport?hT:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function pT(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Pn(t)?!1:e}function Es(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=rm(t);let o=Or(1);e&&(i?di(i)&&(o=uo(i)):o=uo(t));const a=pT(s,n,i)?Ny(s):Or(0);let l=(r.left+a.x)/o.x,c=(r.top+a.y)/o.y,d=r.width/o.x,h=r.height/o.y;if(s){const u=Pn(s),p=i&&di(i)?Pn(i):i;let g=u,x=rh(g);for(;x&&i&&p!==g;){const m=uo(x),f=x.getBoundingClientRect(),v=fi(x),_=f.left+(x.clientLeft+parseFloat(v.paddingLeft))*m.x,y=f.top+(x.clientTop+parseFloat(v.paddingTop))*m.y;l*=m.x,c*=m.y,d*=m.x,h*=m.y,l+=_,c+=y,g=Pn(x),x=rh(g)}}return tu({width:d,height:h,x:l,y:c})}function mT(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=Mi(i),a=e?Ru(e.floating):!1;if(i===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=Or(1);const d=Or(0),h=wi(i);if((h||!h&&!s)&&((jo(i)!=="body"||il(o))&&(l=Pu(i)),wi(i))){const u=Es(i);c=uo(i),d.x=u.x+i.clientLeft,d.y=u.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x,y:n.y*c.y-l.scrollTop*c.y+d.y}}function gT(t){return Array.from(t.getClientRects())}function sh(t,e){const n=Pu(t).scrollLeft;return e?e.left+n:Es(Mi(t)).left+n}function vT(t){const e=Mi(t),n=Pu(t),i=t.ownerDocument.body,r=An(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=An(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+sh(t);const a=-n.scrollTop;return fi(i).direction==="rtl"&&(o+=An(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function xT(t,e){const n=Pn(t),i=Mi(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const c=im();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}function _T(t,e){const n=Es(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=wi(t)?uo(t):Or(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:o,height:a,x:l,y:c}}function Qg(t,e,n){let i;if(e==="viewport")i=xT(t,n);else if(e==="document")i=vT(Mi(t));else if(di(e))i=_T(e,n);else{const r=Ny(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return tu(i)}function Ly(t,e){const n=Br(t);return n===e||!di(n)||Lo(n)?!1:fi(n).position==="fixed"||Ly(n,e)}function yT(t,e){const n=e.get(t);if(n)return n;let i=Ga(t,[],!1).filter(a=>di(a)&&jo(a)!=="body"),r=null;const s=fi(t).position==="fixed";let o=s?Br(t):t;for(;di(o)&&!Lo(o);){const a=fi(o),l=nm(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||il(o)&&!l&&Ly(t,o))?i=i.filter(d=>d!==o):r=a,o=Br(o)}return e.set(t,i),i}function ST(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?Ru(e)?[]:yT(e,this._c):[].concat(n),i],a=o[0],l=o.reduce((c,d)=>{const h=Qg(e,d,r);return c.top=An(h.top,c.top),c.right=Fr(h.right,c.right),c.bottom=Fr(h.bottom,c.bottom),c.left=An(h.left,c.left),c},Qg(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ET(t){const{width:e,height:n}=Py(t);return{width:e,height:n}}function wT(t,e,n){const i=wi(e),r=Mi(e),s=n==="fixed",o=Es(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=Or(0);if(i||!i&&!s)if((jo(e)!=="body"||il(r))&&(a=Pu(e)),i){const p=Es(e,!0,s,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&(l.x=sh(r));let c=0,d=0;if(r&&!i&&!s){const p=r.getBoundingClientRect();d=p.top+a.scrollTop,c=p.left+a.scrollLeft-sh(r,p)}const h=o.left+a.scrollLeft-l.x-c,u=o.top+a.scrollTop-l.y-d;return{x:h,y:u,width:o.width,height:o.height}}function Sd(t){return fi(t).position==="static"}function Zg(t,e){if(!wi(t)||fi(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Mi(t)===n&&(n=n.ownerDocument.body),n}function Dy(t,e){const n=Pn(t);if(Ru(t))return n;if(!wi(t)){let r=Br(t);for(;r&&!Lo(r);){if(di(r)&&!Sd(r))return r;r=Br(r)}return n}let i=Zg(t,e);for(;i&&dT(i)&&Sd(i);)i=Zg(i,e);return i&&Lo(i)&&Sd(i)&&!nm(i)?n:i||fT(t)||n}const MT=async function(t){const e=this.getOffsetParent||Dy,n=this.getDimensions,i=await n(t.floating);return{reference:wT(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function bT(t){return fi(t).direction==="rtl"}const TT={convertOffsetParentRelativeRectToViewportRelativeRect:mT,getDocumentElement:Mi,getClippingRect:ST,getOffsetParent:Dy,getElementRects:MT,getClientRects:gT,getDimensions:ET,getScale:uo,isElement:di,isRTL:bT};function AT(t,e){let n=null,i;const r=Mi(t);function s(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:c,top:d,width:h,height:u}=t.getBoundingClientRect();if(a||e(),!h||!u)return;const p=Dl(d),g=Dl(r.clientWidth-(c+h)),x=Dl(r.clientHeight-(d+u)),m=Dl(c),v={rootMargin:-p+"px "+-g+"px "+-x+"px "+-m+"px",threshold:An(0,Fr(1,l))||1};let _=!0;function y(A){const C=A[0].intersectionRatio;if(C!==l){if(!_)return o();C?o(!1,C):i=setTimeout(()=>{o(!1,1e-7)},1e3)}_=!1}try{n=new IntersectionObserver(y,{...v,root:r.ownerDocument})}catch{n=new IntersectionObserver(y,v)}n.observe(t)}return o(!0),s}function CT(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=rm(t),d=r||s?[...c?Ga(c):[],...Ga(e)]:[];d.forEach(f=>{r&&f.addEventListener("scroll",n,{passive:!0}),s&&f.addEventListener("resize",n)});const h=c&&a?AT(c,n):null;let u=-1,p=null;o&&(p=new ResizeObserver(f=>{let[v]=f;v&&v.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var _;(_=p)==null||_.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let g,x=l?Es(t):null;l&&m();function m(){const f=Es(t);x&&(f.x!==x.x||f.y!==x.y||f.width!==x.width||f.height!==x.height)&&n(),x=f,g=requestAnimationFrame(m)}return n(),()=>{var f;d.forEach(v=>{r&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),h==null||h(),(f=p)==null||f.disconnect(),p=null,l&&cancelAnimationFrame(g)}}const RT=aT,PT=lT,NT=rT,LT=uT,DT=sT,Jg=iT,IT=cT,UT=(t,e,n)=>{const i=new Map,r={platform:TT,...n},s={...r.platform,_c:i};return nT(t,e,{...r,platform:s})};var yc=typeof document<"u"?L.useLayoutEffect:L.useEffect;function nu(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!nu(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const s=r[i];if(!(s==="_owner"&&t.$$typeof)&&!nu(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Iy(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function ev(t,e){const n=Iy(t);return Math.round(e*n)/n}function Ed(t){const e=L.useRef(t);return yc(()=>{e.current=t}),e}function FT(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[d,h]=L.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[u,p]=L.useState(i);nu(u,i)||p(i);const[g,x]=L.useState(null),[m,f]=L.useState(null),v=L.useCallback(P=>{P!==C.current&&(C.current=P,x(P))},[]),_=L.useCallback(P=>{P!==M.current&&(M.current=P,f(P))},[]),y=s||g,A=o||m,C=L.useRef(null),M=L.useRef(null),R=L.useRef(d),b=l!=null,S=Ed(l),D=Ed(r),O=Ed(c),z=L.useCallback(()=>{if(!C.current||!M.current)return;const P={placement:e,strategy:n,middleware:u};D.current&&(P.platform=D.current),UT(C.current,M.current,P).then(V=>{const Q={...V,isPositioned:O.current!==!1};k.current&&!nu(R.current,Q)&&(R.current=Q,Vo.flushSync(()=>{h(Q)}))})},[u,e,n,D,O]);yc(()=>{c===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,h(P=>({...P,isPositioned:!1})))},[c]);const k=L.useRef(!1);yc(()=>(k.current=!0,()=>{k.current=!1}),[]),yc(()=>{if(y&&(C.current=y),A&&(M.current=A),y&&A){if(S.current)return S.current(y,A,z);z()}},[y,A,z,S,b]);const X=L.useMemo(()=>({reference:C,floating:M,setReference:v,setFloating:_}),[v,_]),H=L.useMemo(()=>({reference:y,floating:A}),[y,A]),q=L.useMemo(()=>{const P={position:n,left:0,top:0};if(!H.floating)return P;const V=ev(H.floating,d.x),Q=ev(H.floating,d.y);return a?{...P,transform:"translate("+V+"px, "+Q+"px)",...Iy(H.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:V,top:Q}},[n,a,H.floating,d.x,d.y]);return L.useMemo(()=>({...d,update:z,refs:X,elements:H,floatingStyles:q}),[d,z,X,H,q])}const OT=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?Jg({element:i.current,padding:r}).fn(n):{}:i?Jg({element:i,padding:r}).fn(n):{}}}},kT=(t,e)=>({...RT(t),options:[t,e]}),BT=(t,e)=>({...PT(t),options:[t,e]}),zT=(t,e)=>({...IT(t),options:[t,e]}),HT=(t,e)=>({...NT(t),options:[t,e]}),VT=(t,e)=>({...LT(t),options:[t,e]}),GT=(t,e)=>({...DT(t),options:[t,e]}),WT=(t,e)=>({...OT(t),options:[t,e]});var jT="Arrow",Uy=L.forwardRef((t,e)=>{const{children:n,width:i=10,height:r=5,...s}=t;return w.jsx(Jt.svg,{...s,ref:e,width:i,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:w.jsx("polygon",{points:"0,0 30,0 15,10"})})});Uy.displayName=jT;var $T=Uy;function XT(t){const[e,n]=L.useState(void 0);return Yi(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let o,a;if("borderBoxSize"in s){const l=s.borderBoxSize,c=Array.isArray(l)?l[0]:l;o=c.inlineSize,a=c.blockSize}else o=t.offsetWidth,a=t.offsetHeight;n({width:o,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}var Fy="Popper",[Oy,ky]=Xp(Fy),[n3,By]=Oy(Fy),zy="PopperAnchor",Hy=L.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,s=By(zy,n),o=L.useRef(null),a=_n(e,o);return L.useEffect(()=>{s.onAnchorChange((i==null?void 0:i.current)||o.current)}),i?null:w.jsx(Jt.div,{...r,ref:a})});Hy.displayName=zy;var sm="PopperContent",[YT,qT]=Oy(sm),Vy=L.forwardRef((t,e)=>{var he,Me,We,De,ct,tt;const{__scopePopper:n,side:i="bottom",sideOffset:r=0,align:s="center",alignOffset:o=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:h="partial",hideWhenDetached:u=!1,updatePositionStrategy:p="optimized",onPlaced:g,...x}=t,m=By(sm,n),[f,v]=L.useState(null),_=_n(e,Ye=>v(Ye)),[y,A]=L.useState(null),C=XT(y),M=(C==null?void 0:C.width)??0,R=(C==null?void 0:C.height)??0,b=i+(s!=="center"?"-"+s:""),S=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},D=Array.isArray(c)?c:[c],O=D.length>0,z={padding:S,boundary:D.filter(QT),altBoundary:O},{refs:k,floatingStyles:X,placement:H,isPositioned:q,middlewareData:P}=FT({strategy:"fixed",placement:b,whileElementsMounted:(...Ye)=>CT(...Ye,{animationFrame:p==="always"}),elements:{reference:m.anchor},middleware:[kT({mainAxis:r+R,alignmentAxis:o}),l&&BT({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?zT():void 0,...z}),l&&HT({...z}),VT({...z,apply:({elements:Ye,rects:U,availableWidth:Nt,availableHeight:je})=>{const{width:nt,height:Te}=U.reference,Oe=Ye.floating.style;Oe.setProperty("--radix-popper-available-width",`${Nt}px`),Oe.setProperty("--radix-popper-available-height",`${je}px`),Oe.setProperty("--radix-popper-anchor-width",`${nt}px`),Oe.setProperty("--radix-popper-anchor-height",`${Te}px`)}}),y&&WT({element:y,padding:a}),ZT({arrowWidth:M,arrowHeight:R}),u&&GT({strategy:"referenceHidden",...z})]}),[V,Q]=jy(H),Z=Xn(g);Yi(()=>{q&&(Z==null||Z())},[q,Z]);const ue=(he=P.arrow)==null?void 0:he.x,we=(Me=P.arrow)==null?void 0:Me.y,Y=((We=P.arrow)==null?void 0:We.centerOffset)!==0,[ae,fe]=L.useState();return Yi(()=>{f&&fe(window.getComputedStyle(f).zIndex)},[f]),w.jsx("div",{ref:k.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:q?X.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ae,"--radix-popper-transform-origin":[(De=P.transformOrigin)==null?void 0:De.x,(ct=P.transformOrigin)==null?void 0:ct.y].join(" "),...((tt=P.hide)==null?void 0:tt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:w.jsx(YT,{scope:n,placedSide:V,onArrowChange:A,arrowX:ue,arrowY:we,shouldHideArrow:Y,children:w.jsx(Jt.div,{"data-side":V,"data-align":Q,...x,ref:_,style:{...x.style,animation:q?void 0:"none"}})})})});Vy.displayName=sm;var Gy="PopperArrow",KT={top:"bottom",right:"left",bottom:"top",left:"right"},Wy=L.forwardRef(function(e,n){const{__scopePopper:i,...r}=e,s=qT(Gy,i),o=KT[s.placedSide];return w.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:w.jsx($T,{...r,ref:n,style:{...r.style,display:"block"}})})});Wy.displayName=Gy;function QT(t){return t!==null}var ZT=t=>({name:"transformOrigin",options:t,fn(e){var m,f,v;const{placement:n,rects:i,middlewareData:r}=e,o=((m=r.arrow)==null?void 0:m.centerOffset)!==0,a=o?0:t.arrowWidth,l=o?0:t.arrowHeight,[c,d]=jy(n),h={start:"0%",center:"50%",end:"100%"}[d],u=(((f=r.arrow)==null?void 0:f.x)??0)+a/2,p=(((v=r.arrow)==null?void 0:v.y)??0)+l/2;let g="",x="";return c==="bottom"?(g=o?h:`${u}px`,x=`${-l}px`):c==="top"?(g=o?h:`${u}px`,x=`${i.floating.height+l}px`):c==="right"?(g=`${-l}px`,x=o?h:`${p}px`):c==="left"&&(g=`${i.floating.width+l}px`,x=o?h:`${p}px`),{data:{x:g,y:x}}}});function jy(t){const[e,n="center"]=t.split("-");return[e,n]}var JT=Hy,eA=Vy,tA=Wy;function nA(t,e){return L.useReducer((n,i)=>e[n][i]??n,t)}var $y=t=>{const{present:e,children:n}=t,i=iA(e),r=typeof n=="function"?n({present:i.isPresent}):L.Children.only(n),s=_n(i.ref,rA(r));return typeof n=="function"||i.isPresent?L.cloneElement(r,{ref:s}):null};$y.displayName="Presence";function iA(t){const[e,n]=L.useState(),i=L.useRef({}),r=L.useRef(t),s=L.useRef("none"),o=t?"mounted":"unmounted",[a,l]=nA(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return L.useEffect(()=>{const c=Il(i.current);s.current=a==="mounted"?c:"none"},[a]),Yi(()=>{const c=i.current,d=r.current;if(d!==t){const u=s.current,p=Il(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&u!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),Yi(()=>{if(e){let c;const d=e.ownerDocument.defaultView??window,h=p=>{const x=Il(i.current).includes(p.animationName);if(p.target===e&&x&&(l("ANIMATION_END"),!r.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=d.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},u=p=>{p.target===e&&(s.current=Il(i.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{d.clearTimeout(c),e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:L.useCallback(c=>{c&&(i.current=getComputedStyle(c)),n(c)},[])}}function Il(t){return(t==null?void 0:t.animationName)||"none"}function rA(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var[Nu,i3]=B1("Tooltip",[ky]),om=ky(),Xy="TooltipProvider",sA=700,tv="tooltip.open",[oA,Yy]=Nu(Xy),qy=t=>{const{__scopeTooltip:e,delayDuration:n=sA,skipDelayDuration:i=300,disableHoverableContent:r=!1,children:s}=t,[o,a]=L.useState(!0),l=L.useRef(!1),c=L.useRef(0);return L.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),w.jsx(oA,{scope:e,isOpenDelayed:o,delayDuration:n,onOpen:L.useCallback(()=>{window.clearTimeout(c.current),a(!1)},[]),onClose:L.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a(!0),i)},[i]),isPointerInTransitRef:l,onPointerInTransitChange:L.useCallback(d=>{l.current=d},[]),disableHoverableContent:r,children:s})};qy.displayName=Xy;var Ky="Tooltip",[r3,Lu]=Nu(Ky),oh="TooltipTrigger",aA=L.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=Lu(oh,n),s=Yy(oh,n),o=om(n),a=L.useRef(null),l=_n(e,a,r.onTriggerChange),c=L.useRef(!1),d=L.useRef(!1),h=L.useCallback(()=>c.current=!1,[]);return L.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),w.jsx(JT,{asChild:!0,...o,children:w.jsx(Jt.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...i,ref:l,onPointerMove:Tt(t.onPointerMove,u=>{u.pointerType!=="touch"&&!d.current&&!s.isPointerInTransitRef.current&&(r.onTriggerEnter(),d.current=!0)}),onPointerLeave:Tt(t.onPointerLeave,()=>{r.onTriggerLeave(),d.current=!1}),onPointerDown:Tt(t.onPointerDown,()=>{c.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:Tt(t.onFocus,()=>{c.current||r.onOpen()}),onBlur:Tt(t.onBlur,r.onClose),onClick:Tt(t.onClick,r.onClose)})})});aA.displayName=oh;var lA="TooltipPortal",[s3,cA]=Nu(lA,{forceMount:void 0}),Do="TooltipContent",Qy=L.forwardRef((t,e)=>{const n=cA(Do,t.__scopeTooltip),{forceMount:i=n.forceMount,side:r="top",...s}=t,o=Lu(Do,t.__scopeTooltip);return w.jsx($y,{present:i||o.open,children:o.disableHoverableContent?w.jsx(Zy,{side:r,...s,ref:e}):w.jsx(uA,{side:r,...s,ref:e})})}),uA=L.forwardRef((t,e)=>{const n=Lu(Do,t.__scopeTooltip),i=Yy(Do,t.__scopeTooltip),r=L.useRef(null),s=_n(e,r),[o,a]=L.useState(null),{trigger:l,onClose:c}=n,d=r.current,{onPointerInTransitChange:h}=i,u=L.useCallback(()=>{a(null),h(!1)},[h]),p=L.useCallback((g,x)=>{const m=g.currentTarget,f={x:g.clientX,y:g.clientY},v=pA(f,m.getBoundingClientRect()),_=mA(f,v),y=gA(x.getBoundingClientRect()),A=xA([..._,...y]);a(A),h(!0)},[h]);return L.useEffect(()=>()=>u(),[u]),L.useEffect(()=>{if(l&&d){const g=m=>p(m,d),x=m=>p(m,l);return l.addEventListener("pointerleave",g),d.addEventListener("pointerleave",x),()=>{l.removeEventListener("pointerleave",g),d.removeEventListener("pointerleave",x)}}},[l,d,p,u]),L.useEffect(()=>{if(o){const g=x=>{const m=x.target,f={x:x.clientX,y:x.clientY},v=(l==null?void 0:l.contains(m))||(d==null?void 0:d.contains(m)),_=!vA(f,o);v?u():_&&(u(),c())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[l,d,o,c,u]),w.jsx(Zy,{...t,ref:s})}),[dA,fA]=Nu(Ky,{isInside:!1}),Zy=L.forwardRef((t,e)=>{const{__scopeTooltip:n,children:i,"aria-label":r,onEscapeKeyDown:s,onPointerDownOutside:o,...a}=t,l=Lu(Do,n),c=om(n),{onClose:d}=l;return L.useEffect(()=>(document.addEventListener(tv,d),()=>document.removeEventListener(tv,d)),[d]),L.useEffect(()=>{if(l.trigger){const h=u=>{const p=u.target;p!=null&&p.contains(l.trigger)&&d()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[l.trigger,d]),w.jsx(by,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:h=>h.preventDefault(),onDismiss:d,children:w.jsxs(eA,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[w.jsx(k_,{children:i}),w.jsx(dA,{scope:n,isInside:!0,children:w.jsx(nb,{id:l.contentId,role:"tooltip",children:r||i})})]})})});Qy.displayName=Do;var Jy="TooltipArrow",hA=L.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=om(n);return fA(Jy,n).isInside?null:w.jsx(tA,{...r,...i,ref:e})});hA.displayName=Jy;function pA(t,e){const n=Math.abs(e.top-t.y),i=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),s=Math.abs(e.left-t.x);switch(Math.min(n,i,r,s)){case s:return"left";case r:return"right";case n:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function mA(t,e,n=5){const i=[];switch(e){case"top":i.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":i.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":i.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":i.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return i}function gA(t){const{top:e,right:n,bottom:i,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:i},{x:r,y:i}]}function vA(t,e){const{x:n,y:i}=t;let r=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const a=e[s].x,l=e[s].y,c=e[o].x,d=e[o].y;l>i!=d>i&&n<(c-a)*(i-l)/(d-l)+a&&(r=!r)}return r}function xA(t){const e=t.slice();return e.sort((n,i)=>n.x<i.x?-1:n.x>i.x?1:n.y<i.y?-1:n.y>i.y?1:0),_A(e)}function _A(t){if(t.length<=1)return t.slice();const e=[];for(let i=0;i<t.length;i++){const r=t[i];for(;e.length>=2;){const s=e[e.length-1],o=e[e.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let i=t.length-1;i>=0;i--){const r=t[i];for(;n.length>=2;){const s=n[n.length-1],o=n[n.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var yA=qy,eS=Qy;const SA=yA,EA=L.forwardRef(({className:t,sideOffset:e=4,...n},i)=>w.jsx(eS,{ref:i,sideOffset:e,className:As("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));EA.displayName=eS.displayName;var Du=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Iu=typeof window>"u"||"Deno"in globalThis;function ti(){}function wA(t,e){return typeof t=="function"?t(e):t}function MA(t){return typeof t=="number"&&t>=0&&t!==1/0}function bA(t,e){return Math.max(t+(e||0)-Date.now(),0)}function nv(t,e){return typeof t=="function"?t(e):t}function TA(t,e){return typeof t=="function"?t(e):t}function iv(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==am(o,e.options))return!1}else if(!ja(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||s&&!s(e))}function rv(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Wa(e.options.mutationKey)!==Wa(s))return!1}else if(!ja(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function am(t,e){return((e==null?void 0:e.queryKeyHashFn)||Wa)(t)}function Wa(t){return JSON.stringify(t,(e,n)=>ah(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function ja(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!ja(t[n],e[n])):!1}function tS(t,e){if(t===e)return t;const n=sv(t)&&sv(e);if(n||ah(t)&&ah(e)){const i=n?t:Object.keys(t),r=i.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const d=n?c:s[c];(!n&&i.includes(d)||n)&&t[d]===void 0&&e[d]===void 0?(a[d]=void 0,l++):(a[d]=tS(t[d],e[d]),a[d]===t[d]&&t[d]!==void 0&&l++)}return r===o&&l===r?t:a}return e}function sv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function ah(t){if(!ov(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!ov(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function ov(t){return Object.prototype.toString.call(t)==="[object Object]"}function AA(t){return new Promise(e=>{setTimeout(e,t)})}function CA(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?tS(t,e):e}function RA(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function PA(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var nS=Symbol();function iS(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===nS?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var us,gr,go,p0,NA=(p0=class extends Du{constructor(){super();rt(this,us);rt(this,gr);rt(this,go);$e(this,go,e=>{if(!Iu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){te(this,gr)||this.setEventListener(te(this,go))}onUnsubscribe(){var e;this.hasListeners()||((e=te(this,gr))==null||e.call(this),$e(this,gr,void 0))}setEventListener(e){var n;$e(this,go,e),(n=te(this,gr))==null||n.call(this),$e(this,gr,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){te(this,us)!==e&&($e(this,us,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof te(this,us)=="boolean"?te(this,us):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},us=new WeakMap,gr=new WeakMap,go=new WeakMap,p0),rS=new NA,vo,vr,xo,m0,LA=(m0=class extends Du{constructor(){super();rt(this,vo,!0);rt(this,vr);rt(this,xo);$e(this,xo,e=>{if(!Iu&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){te(this,vr)||this.setEventListener(te(this,xo))}onUnsubscribe(){var e;this.hasListeners()||((e=te(this,vr))==null||e.call(this),$e(this,vr,void 0))}setEventListener(e){var n;$e(this,xo,e),(n=te(this,vr))==null||n.call(this),$e(this,vr,e(this.setOnline.bind(this)))}setOnline(e){te(this,vo)!==e&&($e(this,vo,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return te(this,vo)}},vo=new WeakMap,vr=new WeakMap,xo=new WeakMap,m0),iu=new LA;function DA(t){return Math.min(1e3*2**t,3e4)}function sS(t){return(t??"online")==="online"?iu.isOnline():!0}var oS=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function wd(t){return t instanceof oS}function aS(t){let e=!1,n=0,i=!1,r,s,o;const a=new Promise((f,v)=>{s=f,o=v}),l=f=>{var v;i||(g(new oS(f)),(v=t.abort)==null||v.call(t))},c=()=>{e=!0},d=()=>{e=!1},h=()=>rS.isFocused()&&(t.networkMode==="always"||iu.isOnline())&&t.canRun(),u=()=>sS(t.networkMode)&&t.canRun(),p=f=>{var v;i||(i=!0,(v=t.onSuccess)==null||v.call(t,f),r==null||r(),s(f))},g=f=>{var v;i||(i=!0,(v=t.onError)==null||v.call(t,f),r==null||r(),o(f))},x=()=>new Promise(f=>{var v;r=_=>{(i||h())&&f(_)},(v=t.onPause)==null||v.call(t)}).then(()=>{var f;r=void 0,i||(f=t.onContinue)==null||f.call(t)}),m=()=>{if(i)return;let f;const v=n===0?t.initialPromise:void 0;try{f=v??t.fn()}catch(_){f=Promise.reject(_)}Promise.resolve(f).then(p).catch(_=>{var R;if(i)return;const y=t.retry??(Iu?0:3),A=t.retryDelay??DA,C=typeof A=="function"?A(n,_):A,M=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,_);if(e||!M){g(_);return}n++,(R=t.onFail)==null||R.call(t,n,_),AA(C).then(()=>h()?void 0:x()).then(()=>{e?g(_):m()})})};return{promise:a,cancel:l,continue:()=>(r==null||r(),a),cancelRetry:c,continueRetry:d,canStart:u,start:()=>(u()?m():x().then(m),a)}}function IA(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=a=>setTimeout(a,0);const s=a=>{e?t.push(a):r(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var sn=IA(),ds,g0,lS=(g0=class{constructor(){rt(this,ds)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),MA(this.gcTime)&&$e(this,ds,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Iu?1/0:5*60*1e3))}clearGcTimeout(){te(this,ds)&&(clearTimeout(te(this,ds)),$e(this,ds,void 0))}},ds=new WeakMap,g0),_o,yo,On,Kt,Ka,fs,ni,Li,v0,UA=(v0=class extends lS{constructor(e){super();rt(this,ni);rt(this,_o);rt(this,yo);rt(this,On);rt(this,Kt);rt(this,Ka);rt(this,fs);$e(this,fs,!1),$e(this,Ka,e.defaultOptions),this.setOptions(e.options),this.observers=[],$e(this,On,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,$e(this,_o,OA(this.options)),this.state=e.state??te(this,_o),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=te(this,Kt))==null?void 0:e.promise}setOptions(e){this.options={...te(this,Ka),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&te(this,On).remove(this)}setData(e,n){const i=CA(this.state.data,e,this.options);return jt(this,ni,Li).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){jt(this,ni,Li).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=te(this,Kt))==null?void 0:i.promise;return(r=te(this,Kt))==null||r.cancel(e),n?n.then(ti).catch(ti):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(te(this,_o))}isActive(){return this.observers.some(e=>TA(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!bA(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=te(this,Kt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=te(this,Kt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),te(this,On).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(te(this,Kt)&&(te(this,fs)?te(this,Kt).cancel({revert:!0}):te(this,Kt).cancelRetry()),this.scheduleGc()),te(this,On).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||jt(this,ni,Li).call(this,{type:"invalidate"})}fetch(e,n){var l,c,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(te(this,Kt))return te(this,Kt).continueRetry(),te(this,Kt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(u=>u.options.queryFn);h&&this.setOptions(h.options)}const i=new AbortController,r=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>($e(this,fs,!0),i.signal)})},s=()=>{const h=iS(this.options,n),u={queryKey:this.queryKey,meta:this.meta};return r(u),$e(this,fs,!1),this.options.persister?this.options.persister(h,u,this):h(u)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};r(o),(l=this.options.behavior)==null||l.onFetch(o,this),$e(this,yo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&jt(this,ni,Li).call(this,{type:"fetch",meta:(d=o.fetchOptions)==null?void 0:d.meta});const a=h=>{var u,p,g,x;wd(h)&&h.silent||jt(this,ni,Li).call(this,{type:"error",error:h}),wd(h)||((p=(u=te(this,On).config).onError)==null||p.call(u,h,this),(x=(g=te(this,On).config).onSettled)==null||x.call(g,this.state.data,h,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return $e(this,Kt,aS({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:h=>{var u,p,g,x;if(h===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(m){a(m);return}(p=(u=te(this,On).config).onSuccess)==null||p.call(u,h,this),(x=(g=te(this,On).config).onSettled)==null||x.call(g,h,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:a,onFail:(h,u)=>{jt(this,ni,Li).call(this,{type:"failed",failureCount:h,error:u})},onPause:()=>{jt(this,ni,Li).call(this,{type:"pause"})},onContinue:()=>{jt(this,ni,Li).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),te(this,Kt).start()}},_o=new WeakMap,yo=new WeakMap,On=new WeakMap,Kt=new WeakMap,Ka=new WeakMap,fs=new WeakMap,ni=new WeakSet,Li=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...FA(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return wd(r)&&r.revert&&te(this,yo)?{...te(this,yo),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),sn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),te(this,On).notify({query:this,type:"updated",action:e})})},v0);function FA(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:sS(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function OA(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var mi,x0,kA=(x0=class extends Du{constructor(e={}){super();rt(this,mi);this.config=e,$e(this,mi,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??am(r,n);let o=this.get(s);return o||(o=new UA({cache:this,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){te(this,mi).has(e.queryHash)||(te(this,mi).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=te(this,mi).get(e.queryHash);n&&(e.destroy(),n===e&&te(this,mi).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){sn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return te(this,mi).get(e)}getAll(){return[...te(this,mi).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>iv(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>iv(e,i)):n}notify(e){sn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){sn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){sn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},mi=new WeakMap,x0),gi,nn,hs,vi,ur,_0,BA=(_0=class extends lS{constructor(e){super();rt(this,vi);rt(this,gi);rt(this,nn);rt(this,hs);this.mutationId=e.mutationId,$e(this,nn,e.mutationCache),$e(this,gi,[]),this.state=e.state||zA(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){te(this,gi).includes(e)||(te(this,gi).push(e),this.clearGcTimeout(),te(this,nn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){$e(this,gi,te(this,gi).filter(n=>n!==e)),this.scheduleGc(),te(this,nn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){te(this,gi).length||(this.state.status==="pending"?this.scheduleGc():te(this,nn).remove(this))}continue(){var e;return((e=te(this,hs))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,s,o,a,l,c,d,h,u,p,g,x,m,f,v,_,y,A,C,M;$e(this,hs,aS({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(R,b)=>{jt(this,vi,ur).call(this,{type:"failed",failureCount:R,error:b})},onPause:()=>{jt(this,vi,ur).call(this,{type:"pause"})},onContinue:()=>{jt(this,vi,ur).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>te(this,nn).canRun(this)}));const n=this.state.status==="pending",i=!te(this,hs).canStart();try{if(!n){jt(this,vi,ur).call(this,{type:"pending",variables:e,isPaused:i}),await((s=(r=te(this,nn).config).onMutate)==null?void 0:s.call(r,e,this));const b=await((a=(o=this.options).onMutate)==null?void 0:a.call(o,e));b!==this.state.context&&jt(this,vi,ur).call(this,{type:"pending",context:b,variables:e,isPaused:i})}const R=await te(this,hs).start();return await((c=(l=te(this,nn).config).onSuccess)==null?void 0:c.call(l,R,e,this.state.context,this)),await((h=(d=this.options).onSuccess)==null?void 0:h.call(d,R,e,this.state.context)),await((p=(u=te(this,nn).config).onSettled)==null?void 0:p.call(u,R,null,this.state.variables,this.state.context,this)),await((x=(g=this.options).onSettled)==null?void 0:x.call(g,R,null,e,this.state.context)),jt(this,vi,ur).call(this,{type:"success",data:R}),R}catch(R){try{throw await((f=(m=te(this,nn).config).onError)==null?void 0:f.call(m,R,e,this.state.context,this)),await((_=(v=this.options).onError)==null?void 0:_.call(v,R,e,this.state.context)),await((A=(y=te(this,nn).config).onSettled)==null?void 0:A.call(y,void 0,R,this.state.variables,this.state.context,this)),await((M=(C=this.options).onSettled)==null?void 0:M.call(C,void 0,R,e,this.state.context)),R}finally{jt(this,vi,ur).call(this,{type:"error",error:R})}}finally{te(this,nn).runNext(this)}}},gi=new WeakMap,nn=new WeakMap,hs=new WeakMap,vi=new WeakSet,ur=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),sn.batch(()=>{te(this,gi).forEach(i=>{i.onMutationUpdate(e)}),te(this,nn).notify({mutation:this,type:"updated",action:e})})},_0);function zA(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Mn,Qa,y0,HA=(y0=class extends Du{constructor(e={}){super();rt(this,Mn);rt(this,Qa);this.config=e,$e(this,Mn,new Map),$e(this,Qa,Date.now())}build(e,n,i){const r=new BA({mutationCache:this,mutationId:++fl(this,Qa)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){const n=Ul(e),i=te(this,Mn).get(n)??[];i.push(e),te(this,Mn).set(n,i),this.notify({type:"added",mutation:e})}remove(e){var i;const n=Ul(e);if(te(this,Mn).has(n)){const r=(i=te(this,Mn).get(n))==null?void 0:i.filter(s=>s!==e);r&&(r.length===0?te(this,Mn).delete(n):te(this,Mn).set(n,r))}this.notify({type:"removed",mutation:e})}canRun(e){var i;const n=(i=te(this,Mn).get(Ul(e)))==null?void 0:i.find(r=>r.state.status==="pending");return!n||n===e}runNext(e){var i;const n=(i=te(this,Mn).get(Ul(e)))==null?void 0:i.find(r=>r!==e&&r.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){sn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...te(this,Mn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(i=>rv(n,i))}findAll(e={}){return this.getAll().filter(n=>rv(e,n))}notify(e){sn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return sn.batch(()=>Promise.all(e.map(n=>n.continue().catch(ti))))}},Mn=new WeakMap,Qa=new WeakMap,y0);function Ul(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function av(t){return{onFetch:(e,n)=>{var d,h,u,p,g;const i=e.options,r=(u=(h=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:h.fetchMore)==null?void 0:u.direction,s=((p=e.state.data)==null?void 0:p.pages)||[],o=((g=e.state.data)==null?void 0:g.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let x=!1;const m=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>(e.signal.aborted?x=!0:e.signal.addEventListener("abort",()=>{x=!0}),e.signal)})},f=iS(e.options,e.fetchOptions),v=async(_,y,A)=>{if(x)return Promise.reject();if(y==null&&_.pages.length)return Promise.resolve(_);const C={queryKey:e.queryKey,pageParam:y,direction:A?"backward":"forward",meta:e.options.meta};m(C);const M=await f(C),{maxPages:R}=e.options,b=A?PA:RA;return{pages:b(_.pages,M,R),pageParams:b(_.pageParams,y,R)}};if(r&&s.length){const _=r==="backward",y=_?VA:lv,A={pages:s,pageParams:o},C=y(i,A);a=await v(A,C,_)}else{const _=t??s.length;do{const y=l===0?o[0]??i.initialPageParam:lv(i,a);if(l>0&&y==null)break;a=await v(a,y),l++}while(l<_)}return a};e.options.persister?e.fetchFn=()=>{var x,m;return(m=(x=e.options).persister)==null?void 0:m.call(x,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function lv(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function VA(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Mt,xr,_r,So,Eo,yr,wo,Mo,S0,GA=(S0=class{constructor(t={}){rt(this,Mt);rt(this,xr);rt(this,_r);rt(this,So);rt(this,Eo);rt(this,yr);rt(this,wo);rt(this,Mo);$e(this,Mt,t.queryCache||new kA),$e(this,xr,t.mutationCache||new HA),$e(this,_r,t.defaultOptions||{}),$e(this,So,new Map),$e(this,Eo,new Map),$e(this,yr,0)}mount(){fl(this,yr)._++,te(this,yr)===1&&($e(this,wo,rS.subscribe(async t=>{t&&(await this.resumePausedMutations(),te(this,Mt).onFocus())})),$e(this,Mo,iu.subscribe(async t=>{t&&(await this.resumePausedMutations(),te(this,Mt).onOnline())})))}unmount(){var t,e;fl(this,yr)._--,te(this,yr)===0&&((t=te(this,wo))==null||t.call(this),$e(this,wo,void 0),(e=te(this,Mo))==null||e.call(this),$e(this,Mo,void 0))}isFetching(t){return te(this,Mt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return te(this,xr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=te(this,Mt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),i=te(this,Mt).build(this,n);return t.revalidateIfStale&&i.isStaleByTime(nv(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return te(this,Mt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=te(this,Mt).get(i.queryHash),s=r==null?void 0:r.state.data,o=wA(e,s);if(o!==void 0)return te(this,Mt).build(this,i).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return sn.batch(()=>te(this,Mt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=te(this,Mt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=te(this,Mt);sn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=te(this,Mt),i={type:"active",...t};return sn.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},i=sn.batch(()=>te(this,Mt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(ti).catch(ti)}invalidateQueries(t={},e={}){return sn.batch(()=>{if(te(this,Mt).findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},i=sn.batch(()=>te(this,Mt).findAll(t).filter(r=>!r.isDisabled()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(ti)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(ti)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=te(this,Mt).build(this,e);return n.isStaleByTime(nv(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(ti).catch(ti)}fetchInfiniteQuery(t){return t.behavior=av(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(ti).catch(ti)}ensureInfiniteQueryData(t){return t.behavior=av(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return iu.isOnline()?te(this,xr).resumePausedMutations():Promise.resolve()}getQueryCache(){return te(this,Mt)}getMutationCache(){return te(this,xr)}getDefaultOptions(){return te(this,_r)}setDefaultOptions(t){$e(this,_r,t)}setQueryDefaults(t,e){te(this,So).set(Wa(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...te(this,So).values()];let n={};return e.forEach(i=>{ja(t,i.queryKey)&&(n={...n,...i.defaultOptions})}),n}setMutationDefaults(t,e){te(this,Eo).set(Wa(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...te(this,Eo).values()];let n={};return e.forEach(i=>{ja(t,i.mutationKey)&&(n={...n,...i.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...te(this,_r).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=am(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===nS&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...te(this,_r).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){te(this,Mt).clear(),te(this,xr).clear()}},Mt=new WeakMap,xr=new WeakMap,_r=new WeakMap,So=new WeakMap,Eo=new WeakMap,yr=new WeakMap,wo=new WeakMap,Mo=new WeakMap,S0),WA=L.createContext(void 0),jA=({client:t,children:e})=>(L.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),w.jsx(WA.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ru.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const cv="popstate";function $A(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return lh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:uS(r)}return YA(e,n,null,t)}function yn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XA(){return Math.random().toString(36).substr(2,8)}function uv(t,e){return{usr:t.state,key:t.key,idx:e}}function lh(t,e,n,i){return n===void 0&&(n=null),ru({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Uu(e):e,{state:n,key:e&&e.key||i||XA()})}function uS(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Uu(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function YA(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=wr.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(ru({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=wr.Pop;let m=d(),f=m==null?null:m-c;c=m,l&&l({action:a,location:x.location,delta:f})}function u(m,f){a=wr.Push;let v=lh(x.location,m,f);c=d()+1;let _=uv(v,c),y=x.createHref(v);try{o.pushState(_,"",y)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(y)}s&&l&&l({action:a,location:x.location,delta:1})}function p(m,f){a=wr.Replace;let v=lh(x.location,m,f);c=d();let _=uv(v,c),y=x.createHref(v);o.replaceState(_,"",y),s&&l&&l({action:a,location:x.location,delta:0})}function g(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:uS(m);return v=v.replace(/ $/,"%20"),yn(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let x={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(cv,h),l=m,()=>{r.removeEventListener(cv,h),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let f=g(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:u,replace:p,go(m){return o.go(m)}};return x}var dv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dv||(dv={}));function qA(t,e,n){return n===void 0&&(n="/"),KA(t,e,n,!1)}function KA(t,e,n,i){let r=typeof e=="string"?Uu(e):e,s=hS(r.pathname||"/",n);if(s==null)return null;let o=dS(t);QA(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=lC(s);a=oC(o[l],c,i)}return a}function dS(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(yn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=fo([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(yn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),dS(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:rC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of fS(s.path))r(s,o,l)}),e}function fS(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=fS(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function QA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const ZA=/^:[\w-]+$/,JA=3,eC=2,tC=1,nC=10,iC=-2,fv=t=>t==="*";function rC(t,e){let n=t.split("/"),i=n.length;return n.some(fv)&&(i+=iC),e&&(i+=eC),n.filter(r=>!fv(r)).reduce((r,s)=>r+(ZA.test(s)?JA:s===""?tC:nC),i)}function sC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function oC(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=hv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),u=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=hv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:fo([s,h.pathname]),pathnameBase:cC(fo([s,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(s=fo([s,h.pathnameBase]))}return o}function hv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=aC(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,h)=>{let{paramName:u,isOptional:p}=d;if(u==="*"){let x=a[h]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const g=a[h];return p&&!g?c[u]=void 0:c[u]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function aC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function lC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function hS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const fo=t=>t.join("/").replace(/\/\/+/g,"/"),cC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function uC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const pS=["post","put","patch","delete"];new Set(pS);const dC=["get",...pS];new Set(dC);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function su(){return su=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},su.apply(this,arguments)}const fC=L.createContext(null),hC=L.createContext(null),mS=L.createContext(null),Fu=L.createContext(null),Ou=L.createContext({outlet:null,matches:[],isDataRoute:!1}),gS=L.createContext(null);function lm(){return L.useContext(Fu)!=null}function vS(){return lm()||yn(!1),L.useContext(Fu).location}function pC(t,e){return mC(t,e)}function mC(t,e,n,i){lm()||yn(!1);let{navigator:r}=L.useContext(mS),{matches:s}=L.useContext(Ou),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=vS(),d;if(e){var h;let m=typeof e=="string"?Uu(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||yn(!1),d=m}else d=c;let u=d.pathname||"/",p=u;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+u.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=qA(t,{pathname:p}),x=yC(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:fo([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:fo([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&x?L.createElement(Fu.Provider,{value:{location:su({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:wr.Pop}},x):x}function gC(){let t=MC(),e=uC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:r},n):null,null)}const vC=L.createElement(gC,null);class xC extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Ou.Provider,{value:this.props.routeContext},L.createElement(gS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _C(t){let{routeContext:e,match:n,children:i}=t,r=L.useContext(fC);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Ou.Provider,{value:e},i)}function yC(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||yn(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:u,errors:p}=n,g=h.route.loader&&u[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,u)=>{let p,g=!1,x=null,m=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||vC,l&&(c<0&&u===0?(g=!0,m=null):c===u&&(g=!0,m=h.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,u+1)),v=()=>{let _;return p?_=x:g?_=m:h.route.Component?_=L.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=d,L.createElement(_C,{match:h,routeContext:{outlet:d,matches:f,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||u===0)?L.createElement(xC,{location:n.location,revalidation:n.revalidation,component:x,error:p,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var ch=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ch||{});function SC(t){let e=L.useContext(hC);return e||yn(!1),e}function EC(t){let e=L.useContext(Ou);return e||yn(!1),e}function wC(t){let e=EC(),n=e.matches[e.matches.length-1];return n.route.id||yn(!1),n.route.id}function MC(){var t;let e=L.useContext(gS),n=SC(ch.UseRouteError),i=wC(ch.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Sc(t){yn(!1)}function bC(t){let{basename:e="/",children:n=null,location:i,navigationType:r=wr.Pop,navigator:s,static:o=!1,future:a}=t;lm()&&yn(!1);let l=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:l,navigator:s,static:o,future:su({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Uu(i));let{pathname:d="/",search:h="",hash:u="",state:p=null,key:g="default"}=i,x=L.useMemo(()=>{let m=hS(d,l);return m==null?null:{location:{pathname:m,search:h,hash:u,state:p,key:g},navigationType:r}},[l,d,h,u,p,g,r]);return x==null?null:L.createElement(mS.Provider,{value:c},L.createElement(Fu.Provider,{children:n,value:x}))}function TC(t){let{children:e,location:n}=t;return pC(uh(e),n)}new Promise(()=>{});function uh(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(i,r)=>{if(!L.isValidElement(i))return;let s=[...e,r];if(i.type===L.Fragment){n.push.apply(n,uh(i.props.children,s));return}i.type!==Sc&&yn(!1),!i.props.index||!i.props.children||yn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=uh(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const AC="6";try{window.__reactRouterVersion=AC}catch{}const CC="startTransition",pv=vE[CC];function RC(t){let{basename:e,children:n,future:i,window:r}=t,s=L.useRef();s.current==null&&(s.current=$A({window:r,v5Compat:!0}));let o=s.current,[a,l]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=L.useCallback(h=>{c&&pv?pv(()=>l(h)):l(h)},[l,c]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.createElement(bC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var mv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(mv||(mv={}));var gv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gv||(gv={}));/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cm="177",PC=0,vv=1,NC=2,xS=1,LC=2,Di=3,zr=0,gn=1,Fi=2,Lr=0,ho=1,xv=2,_v=3,yv=4,DC=5,is=100,IC=101,UC=102,FC=103,OC=104,kC=200,BC=201,zC=202,HC=203,dh=204,fh=205,VC=206,GC=207,WC=208,jC=209,$C=210,XC=211,YC=212,qC=213,KC=214,hh=0,ph=1,mh=2,Io=3,gh=4,vh=5,xh=6,_h=7,_S=0,QC=1,ZC=2,Dr=0,JC=1,eR=2,tR=3,nR=4,iR=5,rR=6,sR=7,yS=300,Uo=301,Fo=302,yh=303,Sh=304,ku=306,Eh=1e3,ls=1001,wh=1002,ci=1003,oR=1004,Fl=1005,yi=1006,Md=1007,cs=1008,Qi=1009,SS=1010,ES=1011,$a=1012,um=1013,ws=1014,Bi=1015,rl=1016,dm=1017,fm=1018,Xa=1020,wS=35902,MS=1021,bS=1022,oi=1023,Ya=1026,qa=1027,TS=1028,hm=1029,AS=1030,pm=1031,mm=1033,Ec=33776,wc=33777,Mc=33778,bc=33779,Mh=35840,bh=35841,Th=35842,Ah=35843,Ch=36196,Rh=37492,Ph=37496,Nh=37808,Lh=37809,Dh=37810,Ih=37811,Uh=37812,Fh=37813,Oh=37814,kh=37815,Bh=37816,zh=37817,Hh=37818,Vh=37819,Gh=37820,Wh=37821,Tc=36492,jh=36494,$h=36495,CS=36283,Xh=36284,Yh=36285,qh=36286,aR=3200,lR=3201,cR=0,uR=1,mr="",kn="srgb",Oo="srgb-linear",ou="linear",ut="srgb",Ps=7680,Sv=519,dR=512,fR=513,hR=514,RS=515,pR=516,mR=517,gR=518,vR=519,Ev=35044,wv="300 es",zi=2e3,au=2001;class $o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=Math.PI/180,Kh=180/Math.PI;function sl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function xR(t,e){return(t%e+e)%e}function Td(t,e,n){return(1-n)*t+n*e}function sa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ol{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const u=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=u,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(h!==x||l!==u||c!==p||d!==g){let m=1-a;const f=l*u+c*p+d*g+h*x,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const A=Math.sqrt(_),C=Math.atan2(A,f*v);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const y=a*v;if(l=l*m+u*y,c=c*m+p*y,d=d*m+g*y,h=h*m+x*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=A,c*=A,d*=A,h*=A}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+d*h+l*p-c*u,e[n+1]=l*g+d*u+c*h-a*p,e[n+2]=c*g+d*p+a*u-l*h,e[n+3]=d*g-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,u=Math.sin(n*d)/c;return this._w=o*h+this._w*u,this._x=i*h+this._x*u,this._y=r*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new j,Mv=new ol;class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],v=r[1],_=r[4],y=r[7],A=r[2],C=r[5],M=r[8];return s[0]=o*x+a*v+l*A,s[3]=o*m+a*_+l*C,s[6]=o*f+a*y+l*M,s[1]=c*x+d*v+h*A,s[4]=c*m+d*_+h*C,s[7]=c*f+d*y+h*M,s[2]=u*x+p*v+g*A,s[5]=u*m+p*_+g*C,s[8]=u*f+p*y+g*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*s,p=c*s-o*l,g=n*h+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=u*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cd.makeScale(e,n)),this}rotate(e){return this.premultiply(Cd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new Ge;function PS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function _R(){const t=lu("canvas");return t.style.display="block",t}const bv={};function po(t){t in bv||(bv[t]=!0,console.warn(t))}function yR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function SR(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ER(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tv=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Av=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wR(){const t={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=mo(r.r),r.g=mo(r.g),r.b=mo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?ou:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return po("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return po("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Oo]:{primaries:e,whitePoint:i,transfer:ou,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const et=wR();function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ns;class MR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ns===void 0&&(Ns=lu("canvas")),Ns.width=e.width,Ns.height=e.height;const r=Ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ns}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=lu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bR=0;class gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bR++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rd(r[o].image)):s.push(Rd(r[o]))}else s=Rd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?MR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TR=0;const Pd=new j;class vn extends $o{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=ls,r=ls,s=yi,o=cs,a=oi,l=Qi,c=vn.DEFAULT_ANISOTROPY,d=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TR++}),this.uuid=sl(),this.name="",this.source=new gm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eh:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eh:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=yS;vn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,A=(f+1)/2,C=(d+u)/4,M=(h+x)/4,R=(g+m)/4;return _>y&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=M/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(u-d)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AR extends $o{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new vn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends AR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class NS extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CR extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ol.copy(i.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),kl.subVectors(this.max,oa),Ls.subVectors(e.a,oa),Ds.subVectors(e.b,oa),Is.subVectors(e.c,oa),rr.subVectors(Ds,Ls),sr.subVectors(Is,Ds),Xr.subVectors(Ls,Is);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Xr.z,Xr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Xr.z,0,-Xr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Xr.y,Xr.x,0];return!Nd(n,Ls,Ds,Is,kl)||(n=[1,0,0,0,1,0,0,0,1],!Nd(n,Ls,Ds,Is,kl))?!1:(Bl.crossVectors(rr,sr),n=[Bl.x,Bl.y,Bl.z],Nd(n,Ls,Ds,Is,kl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new j,new j,new j,new j,new j,new j,new j,new j],Qn=new j,Ol=new al,Ls=new j,Ds=new j,Is=new j,rr=new j,sr=new j,Xr=new j,oa=new j,kl=new j,Bl=new j,Yr=new j;function Nd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Yr.fromArray(t,s);const a=r.x*Math.abs(Yr.x)+r.y*Math.abs(Yr.y)+r.z*Math.abs(Yr.z),l=e.dot(Yr),c=n.dot(Yr),d=i.dot(Yr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const RR=new al,aa=new j,Ld=new j;class Bu{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):RR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const n=aa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Ld)),this.expandByPoint(aa.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ci=new j,Dd=new j,zl=new j,or=new j,Id=new j,Hl=new j,Ud=new j;class LS{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dd.copy(e).add(n).multiplyScalar(.5),zl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(Dd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(zl),a=or.dot(this.direction),l=-or.dot(zl),c=or.lengthSq(),d=Math.abs(1-o*o);let h,u,p,g;if(d>0)if(h=o*l-a,u=o*a-l,g=s*d,h>=0)if(u>=-g)if(u<=g){const x=1/d;h*=x,u*=x,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Dd).addScaledVector(zl,u),p}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){Id.subVectors(n,e),Hl.subVectors(i,e),Ud.crossVectors(Id,Hl);let o=this.direction.dot(Ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);const l=a*this.direction.dot(Hl.crossVectors(or,Hl));if(l<0)return null;const c=a*this.direction.dot(Id.cross(or));if(c<0||l+c>o)return null;const d=-a*or.dot(Ud);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,n,i,r,s,o,a,l,c,d,h,u,p,g,x,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,u,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,d,h,u,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*h,g=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=u-x*c,n[9]=-a*l,n[2]=x-u*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,x=c*h;n[0]=u+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-g,n[6]=x+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,x=c*h;n[0]=u-x*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*d,n[9]=x-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*h,g=a*d,x=a*h;n[0]=l*d,n[4]=g*c-p,n[8]=u*c+x,n[1]=l*h,n[5]=x*c+u,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*d,n[4]=x-u*h,n[8]=g*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*h+g,n[10]=u-x*h}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+x,n[5]=o*d,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*d,n[10]=x*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PR,e,NR)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),ar.crossVectors(i,En),ar.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ar.crossVectors(i,En)),ar.normalize(),Vl.crossVectors(En,ar),r[0]=ar.x,r[4]=Vl.x,r[8]=En.x,r[1]=ar.y,r[5]=Vl.y,r[9]=En.y,r[2]=ar.z,r[6]=Vl.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],A=i[15],C=r[0],M=r[4],R=r[8],b=r[12],S=r[1],D=r[5],O=r[9],z=r[13],k=r[2],X=r[6],H=r[10],q=r[14],P=r[3],V=r[7],Q=r[11],Z=r[15];return s[0]=o*C+a*S+l*k+c*P,s[4]=o*M+a*D+l*X+c*V,s[8]=o*R+a*O+l*H+c*Q,s[12]=o*b+a*z+l*q+c*Z,s[1]=d*C+h*S+u*k+p*P,s[5]=d*M+h*D+u*X+p*V,s[9]=d*R+h*O+u*H+p*Q,s[13]=d*b+h*z+u*q+p*Z,s[2]=g*C+x*S+m*k+f*P,s[6]=g*M+x*D+m*X+f*V,s[10]=g*R+x*O+m*H+f*Q,s[14]=g*b+x*z+m*q+f*Z,s[3]=v*C+_*S+y*k+A*P,s[7]=v*M+_*D+y*X+A*V,s[11]=v*R+_*O+y*H+A*Q,s[15]=v*b+_*z+y*q+A*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*u+i*c*u+r*a*p-i*l*p)+x*(+n*l*p-n*c*u+s*o*u-r*o*p+r*c*d-s*l*d)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*d-i*c*d)+f*(-r*a*d-n*l*h+n*a*u+r*o*h-i*o*u+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],v=h*m*c-x*u*c+x*l*p-a*m*p-h*l*f+a*u*f,_=g*u*c-d*m*c-g*l*p+o*m*p+d*l*f-o*u*f,y=d*x*c-g*h*c+g*a*p-o*x*p-d*a*f+o*h*f,A=g*h*l-d*x*l-g*a*u+o*x*u+d*a*m-o*h*m,C=n*v+i*_+r*y+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=v*M,e[1]=(x*u*s-h*m*s-x*r*p+i*m*p+h*r*f-i*u*f)*M,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*M,e[3]=(h*l*s-a*u*s-h*r*c+i*u*c+a*r*p-i*l*p)*M,e[4]=_*M,e[5]=(d*m*s-g*u*s+g*r*p-n*m*p-d*r*f+n*u*f)*M,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*f-n*l*f)*M,e[7]=(o*u*s-d*l*s+d*r*c-n*u*c-o*r*p+n*l*p)*M,e[8]=y*M,e[9]=(g*h*s-d*x*s-g*i*p+n*x*p+d*i*f-n*h*f)*M,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*f+n*a*f)*M,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*p-n*a*p)*M,e[12]=A*M,e[13]=(d*x*r-g*h*r+g*i*u-n*x*u-d*i*m+n*h*m)*M,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*M,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*u+n*a*u)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,u=s*c,p=s*d,g=s*h,x=o*d,m=o*h,f=a*h,v=l*c,_=l*d,y=l*h,A=i.x,C=i.y,M=i.z;return r[0]=(1-(x+f))*A,r[1]=(p+y)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(u+f))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+_)*M,r[9]=(m-v)*M,r[10]=(1-(u+x))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Us.set(r[0],r[1],r[2]).length();const o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/s,d=1/o,h=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=d,Zn.elements[5]*=d,Zn.elements[6]*=d,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,n.setFromRotationMatrix(Zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=zi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),u=(i+r)/(i-r);let p,g;if(a===zi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===au)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=zi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),u=(n+e)*c,p=(i+r)*d;let g,x;if(a===zi)g=(o+s)*h,x=-2*h;else if(a===au)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Us=new j,Zn=new Pt,PR=new j(0,0,0),NR=new j(1,1,1),ar=new j,Vl=new j,En=new j,Cv=new Pt,Rv=new ol;class Zi{constructor(e=0,n=0,i=0,r=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rv.setFromEuler(this),this.setFromQuaternion(Rv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class DS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LR=0;const Pv=new j,Fs=new ol,Ri=new Pt,Gl=new j,la=new j,DR=new j,IR=new ol,Nv=new j(1,0,0),Lv=new j(0,1,0),Dv=new j(0,0,1),Iv={type:"added"},UR={type:"removed"},Os={type:"childadded",child:null},Fd={type:"childremoved",child:null};class xn extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LR++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new j,n=new Zi,i=new ol,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ge}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new DS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Nv,e)}rotateY(e){return this.rotateOnAxis(Lv,e)}rotateZ(e){return this.rotateOnAxis(Dv,e)}translateOnAxis(e,n){return Pv.copy(e).applyQuaternion(this.quaternion),this.position.add(Pv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nv,e)}translateY(e){return this.translateOnAxis(Lv,e)}translateZ(e){return this.translateOnAxis(Dv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Gl.copy(e):Gl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(la,Gl,this.up):Ri.lookAt(Gl,la,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iv),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(UR),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iv),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,DR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,IR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new j(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new j,Pi=new j,Od=new j,Ni=new j,ks=new j,Bs=new j,Uv=new j,kd=new j,Bd=new j,zd=new j,Hd=new Rt,Vd=new Rt,Gd=new Rt;class si{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Pi.subVectors(i,n),Od.subVectors(e,n);const o=Jn.dot(Jn),a=Jn.dot(Pi),l=Jn.dot(Od),c=Pi.dot(Pi),d=Pi.dot(Od),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Hd.setScalar(0),Vd.setScalar(0),Gd.setScalar(0),Hd.fromBufferAttribute(e,n),Vd.fromBufferAttribute(e,i),Gd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hd,s.x),o.addScaledVector(Vd,s.y),o.addScaledVector(Gd,s.z),o}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Pi.subVectors(e,n),Jn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ks.subVectors(r,i),Bs.subVectors(s,i),kd.subVectors(e,i);const l=ks.dot(kd),c=Bs.dot(kd);if(l<=0&&c<=0)return n.copy(i);Bd.subVectors(e,r);const d=ks.dot(Bd),h=Bs.dot(Bd);if(d>=0&&h<=d)return n.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(ks,o);zd.subVectors(e,s);const p=ks.dot(zd),g=Bs.dot(zd);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Bs,a);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Uv.subVectors(s,r),a=(h-d)/(h-d+(p-g)),n.copy(r).addScaledVector(Uv,a);const f=1/(m+x+u);return o=x*f,a=u*f,n.copy(i).addScaledVector(ks,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const IS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Wd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=xR(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Wd(o,s,e+1/3),this.g=Wd(o,s,e),this.b=Wd(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=IS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return et.workingToColorSpace(qt.copy(this),e),Math.round(Qe(qt.r*255,0,255))*65536+Math.round(Qe(qt.g*255,0,255))*256+Math.round(Qe(qt.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=kn){et.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(Wl);const i=Td(lr.h,Wl.h,n),r=Td(lr.s,Wl.s,n),s=Td(lr.l,Wl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new st;st.NAMES=IS;let FR=0;class ll extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FR++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=ho,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(i.blending=this.blending),this.side!==zr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class US extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=_S,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new j,jl=new dt;let OR=0;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ev,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jl.fromBufferAttribute(this,n),jl.applyMatrix3(e),this.setXY(n,jl.x,jl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=sa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=sa(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=sa(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=sa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=sa(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ev&&(e.usage=this.usage),e}}class FS extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class OS extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gs extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kR=0;const Fn=new Pt,jd=new xn,zs=new j,wn=new al,ca=new al,kt=new j;class er extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kR++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PS(e)?OS:FS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return jd.lookAt(e),jd.updateMatrix(),this.applyMatrix4(jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gs(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(wn.min,ca.min),wn.expandByPoint(kt),kt.addVectors(wn.max,ca.max),wn.expandByPoint(kt)):(wn.expandByPoint(ca.min),wn.expandByPoint(ca.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)kt.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),kt.add(zs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new j,l[R]=new j;const c=new j,d=new j,h=new j,u=new dt,p=new dt,g=new dt,x=new j,m=new j;function f(R,b,S){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),u.fromBufferAttribute(s,R),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(D),a[R].add(x),a[b].add(x),a[S].add(x),l[R].add(m),l[b].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,b=v.length;R<b;++R){const S=v[R],D=S.start,O=S.count;for(let z=D,k=D+O;z<k;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new j,y=new j,A=new j,C=new j;function M(R){A.fromBufferAttribute(r,R),C.copy(A);const b=a[R];_.copy(b),_.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(C,b);const D=y.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,D)}for(let R=0,b=v.length;R<b;++R){const S=v[R],D=S.start,O=S.count;for(let z=D,k=D+O;z<k;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,d=new j,h=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new Wn(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new er,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fv=new Pt,qr=new LS,$l=new Bu,Ov=new j,Xl=new j,Yl=new j,ql=new j,$d=new j,Kl=new j,kv=new j,Ql=new j;class Hi extends xn{constructor(e=new er,n=new US){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&($d.fromBufferAttribute(h,e),o?Kl.addScaledVector($d,d):Kl.addScaledVector($d.sub(n),d))}n.add(Kl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!($l.containsPoint(qr.origin)===!1&&(qr.intersectSphere($l,Ov)===null||qr.origin.distanceToSquared(Ov)>(e.far-e.near)**2))&&(Fv.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Fv),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){const C=a.getX(y),M=a.getX(y+1),R=a.getX(y+2);r=Zl(this,f,e,i,c,d,h,C,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Zl(this,o,e,i,c,d,h,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){const C=y,M=y+1,R=y+2;r=Zl(this,f,e,i,c,d,h,C,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=m,_=m+1,y=m+2;r=Zl(this,o,e,i,c,d,h,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function BR(t,e,n,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zr,a),l===null)return null;Ql.copy(a),Ql.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ql);return c<n.near||c>n.far?null:{distance:c,point:Ql.clone(),object:t}}function Zl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xl),t.getVertexPosition(l,Yl),t.getVertexPosition(c,ql);const d=BR(t,e,n,i,Xl,Yl,ql,kv);if(d){const h=new j;si.getBarycoord(kv,Xl,Yl,ql,h),r&&(d.uv=si.getInterpolatedAttribute(r,a,l,c,h,new dt)),s&&(d.uv1=si.getInterpolatedAttribute(s,a,l,c,h,new dt)),o&&(d.normal=si.getInterpolatedAttribute(o,a,l,c,h,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new j,materialIndex:0};si.getNormal(Xl,Yl,ql,u.normal),d.face=u,d.barycoord=h}return d}class cl extends er{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gs(c,3)),this.setAttribute("normal",new gs(d,3)),this.setAttribute("uv",new gs(h,2));function g(x,m,f,v,_,y,A,C,M,R,b){const S=y/M,D=A/R,O=y/2,z=A/2,k=C/2,X=M+1,H=R+1;let q=0,P=0;const V=new j;for(let Q=0;Q<H;Q++){const Z=Q*D-z;for(let ue=0;ue<X;ue++){const we=ue*S-O;V[x]=we*v,V[m]=Z*_,V[f]=k,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[f]=C>0?1:-1,d.push(V.x,V.y,V.z),h.push(ue/M),h.push(1-Q/R),q+=1}}for(let Q=0;Q<R;Q++)for(let Z=0;Z<M;Z++){const ue=u+Z+X*Q,we=u+Z+X*(Q+1),Y=u+(Z+1)+X*(Q+1),ae=u+(Z+1)+X*Q;l.push(ue,we,ae),l.push(we,Y,ae),P+=6}a.addGroup(p,P,b),p+=P,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ko(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=ko(t[n]);for(const r in i)e[r]=i[r]}return e}function zR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function kS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const HR={clone:ko,merge:tn};var VR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hr extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VR,this.fragmentShader=GR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=zR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class BS extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new j,Bv=new dt,zv=new dt;class Hn extends BS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Kh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,Bv,zv),n.subVectors(zv,Bv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,Vs=1;class WR extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(Hs,Vs,e,n);r.layers=this.layers,this.add(r);const s=new Hn(Hs,Vs,e,n);s.layers=this.layers,this.add(s);const o=new Hn(Hs,Vs,e,n);o.layers=this.layers,this.add(o);const a=new Hn(Hs,Vs,e,n);a.layers=this.layers,this.add(a);const l=new Hn(Hs,Vs,e,n);l.layers=this.layers,this.add(l);const c=new Hn(Hs,Vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zS extends vn{constructor(e=[],n=Uo,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jR extends Ms{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zS(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cl(5,5,5),s=new Hr({name:"CubemapFromEquirect",uniforms:ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Lr});s.uniforms.tEquirect.value=n;const o=new Hi(r,s),a=n.minFilter;return n.minFilter===cs&&(n.minFilter=yi),new WR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Jl extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $R={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($R)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Jl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class XR extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yd=new j,YR=new j,qR=new Ge;class ts{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yd.subVectors(i,n).cross(YR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qR.getNormalMatrix(e),r=this.coplanarPoint(Yd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Bu,ec=new j;class HS{constructor(e=new ts,n=new ts,i=new ts,r=new ts,s=new ts,o=new ts){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],u=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,u-c,m-p,y-f).normalize(),i[1].setComponents(l+s,u+c,m+p,y+f).normalize(),i[2].setComponents(l+o,u+d,m+g,y+v).normalize(),i[3].setComponents(l-o,u-d,m-g,y-v).normalize(),i[4].setComponents(l-a,u-h,m-x,y-_).normalize(),n===zi)i[5].setComponents(l+a,u+h,m+x,y+_).normalize();else if(n===au)i[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ec.x=r.normal.x>0?e.max.x:e.min.x,ec.y=r.normal.y>0?e.max.y:e.min.y,ec.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class VS extends ll{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hv=new Pt,Qh=new LS,tc=new Bu,nc=new j;class KR extends xn{constructor(e=new er,n=new VS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(r),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;Hv.copy(r).invert(),Qh.copy(e.ray).applyMatrix4(Hv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,x=p;g<x;g++){const m=c.getX(g);nc.fromBufferAttribute(h,m),Vv(nc,m,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=u,x=p;g<x;g++)nc.fromBufferAttribute(h,g),Vv(nc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vv(t,e,n,i,r,s,o){const a=Qh.distanceSqToPoint(t);if(a<n){const l=new j;Qh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class GS extends vn{constructor(e,n,i=ws,r,s,o,a=ci,l=ci,c,d=Ya,h=1){if(d!==Ya&&d!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zu extends er{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,u=n/l,p=[],g=[],x=[],m=[];for(let f=0;f<d;f++){const v=f*u-o;for(let _=0;_<c;_++){const y=_*h-s;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const _=v+c*f,y=v+c*(f+1),A=v+1+c*(f+1),C=v+1+c*f;p.push(_,y,C),p.push(y,A,C)}this.setIndex(p),this.setAttribute("position",new gs(g,3)),this.setAttribute("normal",new gs(x,3)),this.setAttribute("uv",new gs(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}class QR extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZR extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class JR extends BS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class eP extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Gv(t,e,n,i){const r=tP(i);switch(n){case MS:return t*e;case TS:return t*e/r.components*r.byteLength;case hm:return t*e/r.components*r.byteLength;case AS:return t*e*2/r.components*r.byteLength;case pm:return t*e*2/r.components*r.byteLength;case bS:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case mm:return t*e*4/r.components*r.byteLength;case Ec:case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mc:case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bh:case Ah:return Math.max(t,16)*Math.max(e,8)/4;case Mh:case Th:return Math.max(t,8)*Math.max(e,8)/2;case Ch:case Rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tc:case jh:case $h:return Math.ceil(t/4)*Math.ceil(e/4)*16;case CS:case Xh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yh:case qh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tP(t){switch(t){case Qi:case SS:return{byteLength:1,components:1};case $a:case ES:case rl:return{byteLength:2,components:1};case dm:case fm:return{byteLength:2,components:4};case ws:case um:case Bi:return{byteLength:4,components:1};case wS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function WS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nP(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var iP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_P=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DP="gl_FragColor = linearToOutputTexel( gl_FragColor );",IP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$P=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,t2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,r2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,L2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,H2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,W2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,K2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_N=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:iP,alphahash_pars_fragment:rP,alphamap_fragment:sP,alphamap_pars_fragment:oP,alphatest_fragment:aP,alphatest_pars_fragment:lP,aomap_fragment:cP,aomap_pars_fragment:uP,batching_pars_vertex:dP,batching_vertex:fP,begin_vertex:hP,beginnormal_vertex:pP,bsdfs:mP,iridescence_fragment:gP,bumpmap_pars_fragment:vP,clipping_planes_fragment:xP,clipping_planes_pars_fragment:_P,clipping_planes_pars_vertex:yP,clipping_planes_vertex:SP,color_fragment:EP,color_pars_fragment:wP,color_pars_vertex:MP,color_vertex:bP,common:TP,cube_uv_reflection_fragment:AP,defaultnormal_vertex:CP,displacementmap_pars_vertex:RP,displacementmap_vertex:PP,emissivemap_fragment:NP,emissivemap_pars_fragment:LP,colorspace_fragment:DP,colorspace_pars_fragment:IP,envmap_fragment:UP,envmap_common_pars_fragment:FP,envmap_pars_fragment:OP,envmap_pars_vertex:kP,envmap_physical_pars_fragment:qP,envmap_vertex:BP,fog_vertex:zP,fog_pars_vertex:HP,fog_fragment:VP,fog_pars_fragment:GP,gradientmap_pars_fragment:WP,lightmap_pars_fragment:jP,lights_lambert_fragment:$P,lights_lambert_pars_fragment:XP,lights_pars_begin:YP,lights_toon_fragment:KP,lights_toon_pars_fragment:QP,lights_phong_fragment:ZP,lights_phong_pars_fragment:JP,lights_physical_fragment:e2,lights_physical_pars_fragment:t2,lights_fragment_begin:n2,lights_fragment_maps:i2,lights_fragment_end:r2,logdepthbuf_fragment:s2,logdepthbuf_pars_fragment:o2,logdepthbuf_pars_vertex:a2,logdepthbuf_vertex:l2,map_fragment:c2,map_pars_fragment:u2,map_particle_fragment:d2,map_particle_pars_fragment:f2,metalnessmap_fragment:h2,metalnessmap_pars_fragment:p2,morphinstance_vertex:m2,morphcolor_vertex:g2,morphnormal_vertex:v2,morphtarget_pars_vertex:x2,morphtarget_vertex:_2,normal_fragment_begin:y2,normal_fragment_maps:S2,normal_pars_fragment:E2,normal_pars_vertex:w2,normal_vertex:M2,normalmap_pars_fragment:b2,clearcoat_normal_fragment_begin:T2,clearcoat_normal_fragment_maps:A2,clearcoat_pars_fragment:C2,iridescence_pars_fragment:R2,opaque_fragment:P2,packing:N2,premultiplied_alpha_fragment:L2,project_vertex:D2,dithering_fragment:I2,dithering_pars_fragment:U2,roughnessmap_fragment:F2,roughnessmap_pars_fragment:O2,shadowmap_pars_fragment:k2,shadowmap_pars_vertex:B2,shadowmap_vertex:z2,shadowmask_pars_fragment:H2,skinbase_vertex:V2,skinning_pars_vertex:G2,skinning_vertex:W2,skinnormal_vertex:j2,specularmap_fragment:$2,specularmap_pars_fragment:X2,tonemapping_fragment:Y2,tonemapping_pars_fragment:q2,transmission_fragment:K2,transmission_pars_fragment:Q2,uv_pars_fragment:Z2,uv_pars_vertex:J2,uv_vertex:eN,worldpos_vertex:tN,background_vert:nN,background_frag:iN,backgroundCube_vert:rN,backgroundCube_frag:sN,cube_vert:oN,cube_frag:aN,depth_vert:lN,depth_frag:cN,distanceRGBA_vert:uN,distanceRGBA_frag:dN,equirect_vert:fN,equirect_frag:hN,linedashed_vert:pN,linedashed_frag:mN,meshbasic_vert:gN,meshbasic_frag:vN,meshlambert_vert:xN,meshlambert_frag:_N,meshmatcap_vert:yN,meshmatcap_frag:SN,meshnormal_vert:EN,meshnormal_frag:wN,meshphong_vert:MN,meshphong_frag:bN,meshphysical_vert:TN,meshphysical_frag:AN,meshtoon_vert:CN,meshtoon_frag:RN,points_vert:PN,points_frag:NN,shadow_vert:LN,shadow_frag:DN,sprite_vert:IN,sprite_frag:UN},ve={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},xi={basic:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:tn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:tn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:tn([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:tn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:tn([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:tn([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:tn([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:tn([ve.lights,ve.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};xi.physical={uniforms:tn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ic={r:0,b:0,g:0},Qr=new Zi,FN=new Pt;function ON(t,e,n,i,r,s,o){const a=new st(0);let l=s===!0?0:1,c,d,h=null,u=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function x(_){let y=!1;const A=g(_);A===null?f(a,l):A&&A.isColor&&(f(A,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===ku)?(d===void 0&&(d=new Hi(new cl(1,1,1),new Hr({name:"BackgroundCubeMaterial",uniforms:ko(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Qr.copy(y.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(FN.makeRotationFromEuler(Qr)),d.material.toneMapped=et.getTransfer(A.colorSpace)!==ut,(h!==A||u!==A.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=A,u=A.version,p=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Hi(new zu(2,2),new Hr({name:"BackgroundMaterial",uniforms:ko(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=et.getTransfer(A.colorSpace)!==ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||u!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=A,u=A.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(ic,kS(t)),i.buffers.color.setClear(ic.r,ic.g,ic.b,y,o)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m,dispose:v}}function kN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(S,D,O,z,k){let X=!1;const H=h(z,O,D);s!==H&&(s=H,c(s.object)),X=p(S,z,O,k),X&&g(S,z,O,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(S,D,O,z),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,D,O){const z=O.wireframe===!0;let k=i[S.id];k===void 0&&(k={},i[S.id]=k);let X=k[D.id];X===void 0&&(X={},k[D.id]=X);let H=X[z];return H===void 0&&(H=u(l()),X[z]=H),H}function u(S){const D=[],O=[],z=[];for(let k=0;k<n;k++)D[k]=0,O[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,D,O,z){const k=s.attributes,X=D.attributes;let H=0;const q=O.getAttributes();for(const P in q)if(q[P].location>=0){const Q=k[P];let Z=X[P];if(Z===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Q===void 0||Q.attribute!==Z||Z&&Q.data!==Z.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function g(S,D,O,z){const k={},X=D.attributes;let H=0;const q=O.getAttributes();for(const P in q)if(q[P].location>=0){let Q=X[P];Q===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const Z={};Z.attribute=Q,Q&&Q.data&&(Z.data=Q.data),k[P]=Z,H++}s.attributes=k,s.attributesNum=H,s.index=z}function x(){const S=s.newAttributes;for(let D=0,O=S.length;D<O;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const O=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;O[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),k[S]!==D&&(t.vertexAttribDivisor(S,D),k[S]=D)}function v(){const S=s.newAttributes,D=s.enabledAttributes;for(let O=0,z=D.length;O<z;O++)D[O]!==S[O]&&(t.disableVertexAttribArray(O),D[O]=0)}function _(S,D,O,z,k,X,H){H===!0?t.vertexAttribIPointer(S,D,O,k,X):t.vertexAttribPointer(S,D,O,z,k,X)}function y(S,D,O,z){x();const k=z.attributes,X=O.getAttributes(),H=D.defaultAttributeValues;for(const q in X){const P=X[q];if(P.location>=0){let V=k[q];if(V===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const Q=V.normalized,Z=V.itemSize,ue=e.get(V);if(ue===void 0)continue;const we=ue.buffer,Y=ue.type,ae=ue.bytesPerElement,fe=Y===t.INT||Y===t.UNSIGNED_INT||V.gpuType===um;if(V.isInterleavedBufferAttribute){const he=V.data,Me=he.stride,We=V.offset;if(he.isInstancedInterleavedBuffer){for(let De=0;De<P.locationSize;De++)f(P.location+De,he.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<P.locationSize;De++)m(P.location+De);t.bindBuffer(t.ARRAY_BUFFER,we);for(let De=0;De<P.locationSize;De++)_(P.location+De,Z/P.locationSize,Y,Q,Me*ae,(We+Z/P.locationSize*De)*ae,fe)}else{if(V.isInstancedBufferAttribute){for(let he=0;he<P.locationSize;he++)f(P.location+he,V.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let he=0;he<P.locationSize;he++)m(P.location+he);t.bindBuffer(t.ARRAY_BUFFER,we);for(let he=0;he<P.locationSize;he++)_(P.location+he,Z/P.locationSize,Y,Q,Z*ae,Z/P.locationSize*he*ae,fe)}}else if(H!==void 0){const Q=H[q];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(P.location,Q);break;case 3:t.vertexAttrib3fv(P.location,Q);break;case 4:t.vertexAttrib4fv(P.location,Q);break;default:t.vertexAttrib1fv(P.location,Q)}}}}v()}function A(){R();for(const S in i){const D=i[S];for(const O in D){const z=D[O];for(const k in z)d(z[k].object),delete z[k];delete D[O]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const O in D){const z=D[O];for(const k in z)d(z[k].object),delete z[k];delete D[O]}delete i[S.id]}function M(S){for(const D in i){const O=i[D];if(O[S.id]===void 0)continue;const z=O[S.id];for(const k in z)d(z[k].object),delete z[k];delete O[S.id]}}function R(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function BN(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];n.update(p,i,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,h);let g=0;for(let x=0;x<h;x++)g+=d[x]*u[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==oi&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===rl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Qi&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Bi&&!R)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:C}}function HN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ts,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,_=v*4;let y=f.clippingState||null;l.value=y,y=d(g,u,_,p);for(let A=0;A!==_;++A)y[A]=n[A];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function VN(t){let e=new WeakMap;function n(o,a){return a===yh?o.mapping=Uo:a===Sh&&(o.mapping=Fo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===yh||a===Sh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jR(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const no=4,Wv=[.125,.215,.35,.446,.526,.582],rs=20,qd=new JR,jv=new st;let Kd=null,Qd=0,Zd=0,Jd=!1;const ns=(1+Math.sqrt(5))/2,Gs=1/ns,$v=[new j(-ns,Gs,0),new j(ns,Gs,0),new j(-Gs,0,ns),new j(Gs,0,ns),new j(0,ns,-Gs),new j(0,ns,Gs),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],GN=new j;class Xv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=GN}=s;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Qd,Zd),this._renderer.xr.enabled=Jd,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Uo||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:rl,format:oi,colorSpace:Oo,depthBuffer:!1},r=Yv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WN(s)),this._blurMaterial=jN(s,e,n)}return r}_compileMaterial(e){const n=new Hi(this._lodPlanes[0],e);this._renderer.compile(n,qd)}_sceneToCubeUV(e,n,i,r,s){const l=new Hn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(jv),h.toneMapping=Dr,h.autoClear=!1;const g=new US({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),x=new Hi(new cl,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(jv),m=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const y=this._cubeSize;rc(r,_*y,v>2?y:0,y,y),h.setRenderTarget(r),m&&h.render(x,l),h.render(e,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Uo||e.mapping===Fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$v[(r-s-1)%$v.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Hi(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rs-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):rs;m>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const f=[];let v=0;for(let M=0;M<rs;++M){const R=M/x,b=Math.exp(-R*R/2);f.push(b),M===0?v+=b:M<m&&(v+=2*b)}for(let M=0;M<f.length;M++)f[M]=f[M]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const y=this._sizeLods[r],A=3*y*(r>_-no?r-_+no:0),C=4*(this._cubeSize-y);rc(n,A,C,3*y,2*y),l.setRenderTarget(n),l.render(h,qd)}}function WN(t){const e=[],n=[],i=[];let r=t;const s=t-no+1+Wv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-no?l=Wv[o-t+no-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let C=0;C<p;C++){const M=C%3*2/3-1,R=C>2?0:-1,b=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(b,x*g*C),_.set(u,m*g*C);const S=[C,C,C,C,C,C];y.set(S,f*g*C)}const A=new er;A.setAttribute("position",new Wn(v,x)),A.setAttribute("uv",new Wn(_,m)),A.setAttribute("faceIndex",new Wn(y,f)),e.push(A),r>no&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Yv(t,e,n){const i=new Ms(t,e,n);return i.texture.mapping=ku,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jN(t,e,n){const i=new Float32Array(rs),r=new j(0,1,0);return new Hr({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function qv(){return new Hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Kv(){return new Hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function vm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $N(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===yh||l===Sh,d=l===Uo||l===Fo;if(c||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new Xv(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Xv(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function XN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&po("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YN(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){const A=v[_+0],C=v[_+1],M=v[_+2];u.push(A,C,C,M,M,A)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const A=_+0,C=_+1,M=_+2;u.push(A,C,C,M,M,A)}}else return;const m=new(PS(u)?OS:FS)(u,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function qN(t,e,n){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,p){t.drawElements(i,p,s,u*o),n.update(p,i,1)}function c(u,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,u*o,g),n.update(p,i,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function h(u,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,x,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*x[v];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function KN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function QN(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*C*4*h),R=new NS(M,A,C,h);R.type=Bi,R.needsUpdate=!0;const b=y*4;for(let D=0;D<h;D++){const O=f[D],z=v[D],k=_[D],X=A*C*4*D;for(let H=0;H<O.count;H++){const q=H*b;g===!0&&(r.fromBufferAttribute(O,H),M[X+q+0]=r.x,M[X+q+1]=r.y,M[X+q+2]=r.z,M[X+q+3]=0),x===!0&&(r.fromBufferAttribute(z,H),M[X+q+4]=r.x,M[X+q+5]=r.y,M[X+q+6]=r.z,M[X+q+7]=0),m===!0&&(r.fromBufferAttribute(k,H),M[X+q+8]=r.x,M[X+q+9]=r.y,M[X+q+10]=r.z,M[X+q+11]=k.itemSize===4?r.w:1)}}u={count:h,texture:R,size:new dt(A,C)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function ZN(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const jS=new vn,Qv=new GS(1,1),$S=new NS,XS=new CR,YS=new zS,Zv=[],Jv=[],e0=new Float32Array(16),t0=new Float32Array(9),n0=new Float32Array(4);function Xo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Zv[r];if(s===void 0&&(s=new Float32Array(r),Zv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hu(t,e){let n=Jv[e];n===void 0&&(n=new Int32Array(e),Jv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function tL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function nL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function iL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;n0.set(i),t.uniformMatrix2fv(this.addr,!1,n0),Ot(n,i)}}function rL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;t0.set(i),t.uniformMatrix3fv(this.addr,!1,t0),Ot(n,i)}}function sL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;e0.set(i),t.uniformMatrix4fv(this.addr,!1,e0),Ot(n,i)}}function oL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function aL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function lL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function cL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function uL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function fL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function hL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function pL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qv.compareFunction=RS,s=Qv):s=jS,n.setTexture2D(e||s,r)}function mL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||XS,r)}function gL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||YS,r)}function vL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$S,r)}function xL(t){switch(t){case 5126:return JN;case 35664:return eL;case 35665:return tL;case 35666:return nL;case 35674:return iL;case 35675:return rL;case 35676:return sL;case 5124:case 35670:return oL;case 35667:case 35671:return aL;case 35668:case 35672:return lL;case 35669:case 35673:return cL;case 5125:return uL;case 36294:return dL;case 36295:return fL;case 36296:return hL;case 35678:case 36198:case 36298:case 36306:case 35682:return pL;case 35679:case 36299:case 36307:return mL;case 35680:case 36300:case 36308:case 36293:return gL;case 36289:case 36303:case 36311:case 36292:return vL}}function _L(t,e){t.uniform1fv(this.addr,e)}function yL(t,e){const n=Xo(e,this.size,2);t.uniform2fv(this.addr,n)}function SL(t,e){const n=Xo(e,this.size,3);t.uniform3fv(this.addr,n)}function EL(t,e){const n=Xo(e,this.size,4);t.uniform4fv(this.addr,n)}function wL(t,e){const n=Xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ML(t,e){const n=Xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bL(t,e){const n=Xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TL(t,e){t.uniform1iv(this.addr,e)}function AL(t,e){t.uniform2iv(this.addr,e)}function CL(t,e){t.uniform3iv(this.addr,e)}function RL(t,e){t.uniform4iv(this.addr,e)}function PL(t,e){t.uniform1uiv(this.addr,e)}function NL(t,e){t.uniform2uiv(this.addr,e)}function LL(t,e){t.uniform3uiv(this.addr,e)}function DL(t,e){t.uniform4uiv(this.addr,e)}function IL(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||jS,s[o])}function UL(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||XS,s[o])}function FL(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||YS,s[o])}function OL(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||$S,s[o])}function kL(t){switch(t){case 5126:return _L;case 35664:return yL;case 35665:return SL;case 35666:return EL;case 35674:return wL;case 35675:return ML;case 35676:return bL;case 5124:case 35670:return TL;case 35667:case 35671:return AL;case 35668:case 35672:return CL;case 35669:case 35673:return RL;case 5125:return PL;case 36294:return NL;case 36295:return LL;case 36296:return DL;case 35678:case 36198:case 36298:case 36306:case 35682:return IL;case 35679:case 36299:case 36307:return UL;case 35680:case 36300:case 36308:case 36293:return FL;case 36289:case 36303:case 36311:case 36292:return OL}}class BL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xL(n.type)}}class zL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kL(n.type)}}class HL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function i0(t,e){t.seq.push(e),t.map[e.id]=e}function VL(t,e,n){const i=t.name,r=i.length;for(ef.lastIndex=0;;){const s=ef.exec(i),o=ef.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){i0(n,c===void 0?new BL(a,t,e):new zL(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new HL(a),i0(n,h)),n=h}}}class Ac{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);VL(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function r0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GL=37297;let WL=0;function jL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const s0=new Ge;function $L(t){et._getMatrix(s0,et.workingColorSpace,t);const e=`mat3( ${s0.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case ou:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function o0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jL(t.getShaderSource(e),o)}else return r}function XL(t,e){const n=$L(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function YL(t,e){let n;switch(e){case JC:n="Linear";break;case eR:n="Reinhard";break;case tR:n="Cineon";break;case nR:n="ACESFilmic";break;case rR:n="AgX";break;case sR:n="Neutral";break;case iR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const sc=new j;function qL(){et.getLuminanceCoefficients(sc);const t=sc.x.toFixed(4),e=sc.y.toFixed(4),n=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function QL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function pa(t){return t!==""}function a0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(t){return t.replace(JL,tD)}const eD=new Map;function tD(t,e){let n=Xe[e];if(n===void 0){const i=eD.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zh(n)}const nD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(t){return t.replace(nD,iD)}function iD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function u0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===LC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function sD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Uo:case Fo:e="ENVMAP_TYPE_CUBE";break;case ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fo:e="ENVMAP_MODE_REFRACTION";break}return e}function aD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _S:e="ENVMAP_BLENDING_MULTIPLY";break;case QC:e="ENVMAP_BLENDING_MIX";break;case ZC:e="ENVMAP_BLENDING_ADD";break}return e}function lD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cD(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rD(n),c=sD(n),d=oD(n),h=aD(n),u=lD(n),p=KL(n),g=QL(s),x=r.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(pa).join(`
`),f.length>0&&(f+=`
`)):(m=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),f=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Dr?"#define TONE_MAPPING":"",n.toneMapping!==Dr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Dr?YL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,XL("linearToOutputTexel",n.outputColorSpace),qL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pa).join(`
`)),o=Zh(o),o=a0(o,n),o=l0(o,n),a=Zh(a),a=a0(a,n),a=l0(a,n),o=c0(o),a=c0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=v+m+o,y=v+f+a,A=r0(r,r.VERTEX_SHADER,_),C=r0(r,r.FRAGMENT_SHADER,y);r.attachShader(x,A),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function M(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(A).trim(),k=r.getShaderInfoLog(C).trim();let X=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,A,C);else{const q=o0(r,A,"vertex"),P=o0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+q+`
`+P)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||k==="")&&(H=!1);H&&(D.diagnostics={runnable:X,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:f}})}r.deleteShader(A),r.deleteShader(C),R=new Ac(r,x),b=ZL(r,x)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,GL)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WL++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}let uD=0;class dD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fD(e),n.set(e,i)),i}}class fD{constructor(e){this.id=uD++,this.code=e,this.usedTimes=0}}function hD(t,e,n,i,r,s,o){const a=new DS,l=new dD,c=new Set,d=[],h=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,O,z){const k=O.fog,X=z.geometry,H=b.isMeshStandardMaterial?O.environment:null,q=(b.isMeshStandardMaterial?n:e).get(b.envMap||H),P=q&&q.mapping===ku?q.image.height:null,V=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Z=Q!==void 0?Q.length:0;let ue=0;X.morphAttributes.position!==void 0&&(ue=1),X.morphAttributes.normal!==void 0&&(ue=2),X.morphAttributes.color!==void 0&&(ue=3);let we,Y,ae,fe;if(V){const ot=xi[V];we=ot.vertexShader,Y=ot.fragmentShader}else we=b.vertexShader,Y=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),fe=l.getFragmentShaderID(b);const he=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),We=z.isInstancedMesh===!0,De=z.isBatchedMesh===!0,ct=!!b.map,tt=!!b.matcap,Ye=!!q,U=!!b.aoMap,Nt=!!b.lightMap,je=!!b.bumpMap,nt=!!b.normalMap,Te=!!b.displacementMap,Oe=!!b.emissiveMap,Le=!!b.metalnessMap,He=!!b.roughnessMap,At=b.anisotropy>0,N=b.clearcoat>0,E=b.dispersion>0,G=b.iridescence>0,J=b.sheen>0,ne=b.transmission>0,K=At&&!!b.anisotropyMap,be=N&&!!b.clearcoatMap,me=N&&!!b.clearcoatNormalMap,Ae=N&&!!b.clearcoatRoughnessMap,Pe=G&&!!b.iridescenceMap,re=G&&!!b.iridescenceThicknessMap,ye=J&&!!b.sheenColorMap,Ue=J&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,ge=!!b.specularColorMap,de=!!b.specularIntensityMap,I=ne&&!!b.transmissionMap,se=ne&&!!b.thicknessMap,ie=!!b.gradientMap,xe=!!b.alphaMap,oe=b.alphaTest>0,ee=!!b.alphaHash,Ce=!!b.extensions;let ze=Dr;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ze=t.toneMapping);const ht={shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:Y,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:De,batchingColor:De&&z._colorsTexture!==null,instancing:We,instancingColor:We&&z.instanceColor!==null,instancingMorph:We&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Oo,alphaToCoverage:!!b.alphaToCoverage,map:ct,matcap:tt,envMap:Ye,envMapMode:Ye&&q.mapping,envMapCubeUVHeight:P,aoMap:U,lightMap:Nt,bumpMap:je,normalMap:nt,displacementMap:u&&Te,emissiveMap:Oe,normalMapObjectSpace:nt&&b.normalMapType===uR,normalMapTangentSpace:nt&&b.normalMapType===cR,metalnessMap:Le,roughnessMap:He,anisotropy:At,anisotropyMap:K,clearcoat:N,clearcoatMap:be,clearcoatNormalMap:me,clearcoatRoughnessMap:Ae,dispersion:E,iridescence:G,iridescenceMap:Pe,iridescenceThicknessMap:re,sheen:J,sheenColorMap:ye,sheenRoughnessMap:Ue,specularMap:Ne,specularColorMap:ge,specularIntensityMap:de,transmission:ne,transmissionMap:I,thicknessMap:se,gradientMap:ie,opaque:b.transparent===!1&&b.blending===ho&&b.alphaToCoverage===!1,alphaMap:xe,alphaTest:oe,alphaHash:ee,combine:b.combine,mapUv:ct&&x(b.map.channel),aoMapUv:U&&x(b.aoMap.channel),lightMapUv:Nt&&x(b.lightMap.channel),bumpMapUv:je&&x(b.bumpMap.channel),normalMapUv:nt&&x(b.normalMap.channel),displacementMapUv:Te&&x(b.displacementMap.channel),emissiveMapUv:Oe&&x(b.emissiveMap.channel),metalnessMapUv:Le&&x(b.metalnessMap.channel),roughnessMapUv:He&&x(b.roughnessMap.channel),anisotropyMapUv:K&&x(b.anisotropyMap.channel),clearcoatMapUv:be&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(b.sheenRoughnessMap.channel),specularMapUv:Ne&&x(b.specularMap.channel),specularColorMapUv:ge&&x(b.specularColorMap.channel),specularIntensityMapUv:de&&x(b.specularIntensityMap.channel),transmissionMapUv:I&&x(b.transmissionMap.channel),thicknessMapUv:se&&x(b.thicknessMap.channel),alphaMapUv:xe&&x(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(nt||At),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(ct||xe),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Me,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,decodeVideoTexture:ct&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===ut,decodeVideoTextureEmissive:Oe&&b.emissiveMap.isVideoTexture===!0&&et.getTransfer(b.emissiveMap.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fi,flipSided:b.side===gn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(v(S,b),_(S,b),S.push(t.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const S=g[b.type];let D;if(S){const O=xi[S];D=HR.clone(O.uniforms)}else D=b.uniforms;return D}function A(b,S){let D;for(let O=0,z=d.length;O<z;O++){const k=d[O];if(k.cacheKey===S){D=k,++D.usedTimes;break}}return D===void 0&&(D=new cD(t,S,b,s),d.push(D)),D}function C(b){if(--b.usedTimes===0){const S=d.indexOf(b);d[S]=d[d.length-1],d.pop(),b.destroy()}}function M(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:C,releaseShaderCache:M,programs:d,dispose:R}}function pD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function mD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function d0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function f0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,u,p,g,x,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,u,p,g,x,m){const f=o(h,u,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,u,p,g,x,m){const f=o(h,u,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,u){n.length>1&&n.sort(h||mD),i.length>1&&i.sort(u||d0),r.length>1&&r.sort(u||d0)}function d(){for(let h=e,u=t.length;h<u;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function gD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new f0,t.set(i,[o])):r>=s.length?(o=new f0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function vD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new st};break;case"SpotLight":n={position:new j,direction:new j,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function xD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _D=0;function yD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SD(t){const e=new vD,n=xD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Pt,o=new Pt;function a(c){let d=0,h=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,v=0,_=0,y=0,A=0,C=0,M=0;c.sort(yD);for(let b=0,S=c.length;b<S;b++){const D=c[b],O=D.color,z=D.intensity,k=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*z,h+=O.g*z,u+=O.b*z;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],z);M++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,P=n.get(D);P.shadowIntensity=q.intensity,P.shadowBias=q.bias,P.shadowNormalBias=q.normalBias,P.shadowRadius=q.radius,P.shadowMapSize=q.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=H,p++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(O).multiplyScalar(z),H.distance=k,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[x]=H;const q=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,q.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[x]=q.matrix,D.castShadow){const P=n.get(D);P.shadowIntensity=q.intensity,P.shadowBias=q.bias,P.shadowNormalBias=q.normalBias,P.shadowRadius=q.radius,P.shadowMapSize=q.mapSize,i.spotShadow[x]=P,i.spotShadowMap[x]=X,y++}x++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(O).multiplyScalar(z),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=H,m++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const q=D.shadow,P=n.get(D);P.shadowIntensity=q.intensity,P.shadowBias=q.bias,P.shadowNormalBias=q.normalBias,P.shadowRadius=q.radius,P.shadowMapSize=q.mapSize,P.shadowCameraNear=q.camera.near,P.shadowCameraFar=q.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=H,g++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(z),H.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[f]=H,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==A||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=A,R.numLightProbes=M,i.version=_D++)}function l(c,d){let h=0,u=0,p=0,g=0,x=0;const m=d.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const _=c[f];if(_.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function h0(t){const e=new SD(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ED(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new h0(t),e.set(r,[a])):s>=o.length?(a=new h0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const wD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bD(t,e,n){let i=new HS;const r=new dt,s=new dt,o=new Rt,a=new QR({depthPacking:lR}),l=new ZR,c={},d=n.maxTextureSize,h={[zr]:gn,[gn]:zr,[Fi]:Fi},u=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:wD,fragmentShader:MD}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new er;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Hi(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xS;let f=this.type;this.render=function(C,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Lr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==Di&&this.type===Di,k=f===Di&&this.type!==Di;for(let X=0,H=C.length;X<H;X++){const q=C[X],P=q.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const V=P.getFrameExtents();if(r.multiply(V),s.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/V.x),r.x=s.x*V.x,P.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/V.y),r.y=s.y*V.y,P.mapSize.y=s.y)),P.map===null||z===!0||k===!0){const Z=this.type!==Di?{minFilter:ci,magFilter:ci}:{};P.map!==null&&P.map.dispose(),P.map=new Ms(r.x,r.y,Z),P.map.texture.name=q.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const Q=P.getViewportCount();for(let Z=0;Z<Q;Z++){const ue=P.getViewport(Z);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),O.viewport(o),P.updateMatrices(q,Z),i=P.getFrustum(),y(M,R,P.camera,q,this.type)}P.isPointLightShadow!==!0&&this.type===Di&&v(P,R),P.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(b,S,D)};function v(C,M){const R=e.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ms(r.x,r.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(M,null,R,u,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(M,null,R,p,x,null)}function _(C,M,R,b){let S=null;const D=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const O=S.uuid,z=M.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let X=k[z];X===void 0&&(X=S.clone(),k[z]=X,M.addEventListener("dispose",A)),S=X}if(S.visible=M.visible,S.wireframe=M.wireframe,b===Di?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=t.properties.get(S);O.light=R}return S}function y(C,M,R,b,S){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Di)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const z=e.update(C),k=C.material;if(Array.isArray(k)){const X=z.groups;for(let H=0,q=X.length;H<q;H++){const P=X[H],V=k[P.materialIndex];if(V&&V.visible){const Q=_(C,V,b,S);C.onBeforeShadow(t,C,M,R,z,Q,P),t.renderBufferDirect(R,null,z,Q,C,P),C.onAfterShadow(t,C,M,R,z,Q,P)}}}else if(k.visible){const X=_(C,k,b,S);C.onBeforeShadow(t,C,M,R,z,X,null),t.renderBufferDirect(R,null,z,X,C,null),C.onAfterShadow(t,C,M,R,z,X,null)}}const O=C.children;for(let z=0,k=O.length;z<k;z++)y(O[z],M,R,b,S)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const b=c[R],S=C.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const TD={[hh]:ph,[mh]:xh,[gh]:_h,[Io]:vh,[ph]:hh,[xh]:mh,[_h]:gh,[vh]:Io};function AD(t,e){function n(){let I=!1;const se=new Rt;let ie=null;const xe=new Rt(0,0,0,0);return{setMask:function(oe){ie!==oe&&!I&&(t.colorMask(oe,oe,oe,oe),ie=oe)},setLocked:function(oe){I=oe},setClear:function(oe,ee,Ce,ze,ht){ht===!0&&(oe*=ze,ee*=ze,Ce*=ze),se.set(oe,ee,Ce,ze),xe.equals(se)===!1&&(t.clearColor(oe,ee,Ce,ze),xe.copy(se))},reset:function(){I=!1,ie=null,xe.set(-1,0,0,0)}}}function i(){let I=!1,se=!1,ie=null,xe=null,oe=null;return{setReversed:function(ee){if(se!==ee){const Ce=e.get("EXT_clip_control");ee?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const ze=oe;oe=null,this.setClear(ze)}},getReversed:function(){return se},setTest:function(ee){ee?he(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(ee){ie!==ee&&!I&&(t.depthMask(ee),ie=ee)},setFunc:function(ee){if(se&&(ee=TD[ee]),xe!==ee){switch(ee){case hh:t.depthFunc(t.NEVER);break;case ph:t.depthFunc(t.ALWAYS);break;case mh:t.depthFunc(t.LESS);break;case Io:t.depthFunc(t.LEQUAL);break;case gh:t.depthFunc(t.EQUAL);break;case vh:t.depthFunc(t.GEQUAL);break;case xh:t.depthFunc(t.GREATER);break;case _h:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=ee}},setLocked:function(ee){I=ee},setClear:function(ee){oe!==ee&&(se&&(ee=1-ee),t.clearDepth(ee),oe=ee)},reset:function(){I=!1,ie=null,xe=null,oe=null,se=!1}}}function r(){let I=!1,se=null,ie=null,xe=null,oe=null,ee=null,Ce=null,ze=null,ht=null;return{setTest:function(ot){I||(ot?he(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(ot){se!==ot&&!I&&(t.stencilMask(ot),se=ot)},setFunc:function(ot,Yn,bi){(ie!==ot||xe!==Yn||oe!==bi)&&(t.stencilFunc(ot,Yn,bi),ie=ot,xe=Yn,oe=bi)},setOp:function(ot,Yn,bi){(ee!==ot||Ce!==Yn||ze!==bi)&&(t.stencilOp(ot,Yn,bi),ee=ot,Ce=Yn,ze=bi)},setLocked:function(ot){I=ot},setClear:function(ot){ht!==ot&&(t.clearStencil(ot),ht=ot)},reset:function(){I=!1,se=null,ie=null,xe=null,oe=null,ee=null,Ce=null,ze=null,ht=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,_=null,y=null,A=null,C=null,M=new st(0,0,0),R=0,b=!1,S=null,D=null,O=null,z=null,k=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(P)[1]),H=q>=1):P.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),H=q>=2);let V=null,Q={};const Z=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),we=new Rt().fromArray(Z),Y=new Rt().fromArray(ue);function ae(I,se,ie,xe){const oe=new Uint8Array(4),ee=t.createTexture();t.bindTexture(I,ee),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<ie;Ce++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(se+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return ee}const fe={};fe[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(t.DEPTH_TEST),o.setFunc(Io),je(!1),nt(vv),he(t.CULL_FACE),U(Lr);function he(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function Me(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function We(I,se){return h[I]!==se?(t.bindFramebuffer(I,se),h[I]=se,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=se),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=se),!0):!1}function De(I,se){let ie=p,xe=!1;if(I){ie=u.get(se),ie===void 0&&(ie=[],u.set(se,ie));const oe=I.textures;if(ie.length!==oe.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Ce=oe.length;ee<Ce;ee++)ie[ee]=t.COLOR_ATTACHMENT0+ee;ie.length=oe.length,xe=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,xe=!0);xe&&t.drawBuffers(ie)}function ct(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const tt={[is]:t.FUNC_ADD,[IC]:t.FUNC_SUBTRACT,[UC]:t.FUNC_REVERSE_SUBTRACT};tt[FC]=t.MIN,tt[OC]=t.MAX;const Ye={[kC]:t.ZERO,[BC]:t.ONE,[zC]:t.SRC_COLOR,[dh]:t.SRC_ALPHA,[$C]:t.SRC_ALPHA_SATURATE,[WC]:t.DST_COLOR,[VC]:t.DST_ALPHA,[HC]:t.ONE_MINUS_SRC_COLOR,[fh]:t.ONE_MINUS_SRC_ALPHA,[jC]:t.ONE_MINUS_DST_COLOR,[GC]:t.ONE_MINUS_DST_ALPHA,[XC]:t.CONSTANT_COLOR,[YC]:t.ONE_MINUS_CONSTANT_COLOR,[qC]:t.CONSTANT_ALPHA,[KC]:t.ONE_MINUS_CONSTANT_ALPHA};function U(I,se,ie,xe,oe,ee,Ce,ze,ht,ot){if(I===Lr){x===!0&&(Me(t.BLEND),x=!1);return}if(x===!1&&(he(t.BLEND),x=!0),I!==DC){if(I!==m||ot!==b){if((f!==is||y!==is)&&(t.blendEquation(t.FUNC_ADD),f=is,y=is),ot)switch(I){case ho:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xv:t.blendFunc(t.ONE,t.ONE);break;case _v:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ho:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _v:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,_=null,A=null,C=null,M.set(0,0,0),R=0,m=I,b=ot}return}oe=oe||se,ee=ee||ie,Ce=Ce||xe,(se!==f||oe!==y)&&(t.blendEquationSeparate(tt[se],tt[oe]),f=se,y=oe),(ie!==v||xe!==_||ee!==A||Ce!==C)&&(t.blendFuncSeparate(Ye[ie],Ye[xe],Ye[ee],Ye[Ce]),v=ie,_=xe,A=ee,C=Ce),(ze.equals(M)===!1||ht!==R)&&(t.blendColor(ze.r,ze.g,ze.b,ht),M.copy(ze),R=ht),m=I,b=!1}function Nt(I,se){I.side===Fi?Me(t.CULL_FACE):he(t.CULL_FACE);let ie=I.side===gn;se&&(ie=!ie),je(ie),I.blending===ho&&I.transparent===!1?U(Lr):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const xe=I.stencilWrite;a.setTest(xe),xe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function nt(I){I!==PC?(he(t.CULL_FACE),I!==D&&(I===vv?t.cullFace(t.BACK):I===NC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),D=I}function Te(I){I!==O&&(H&&t.lineWidth(I),O=I)}function Oe(I,se,ie){I?(he(t.POLYGON_OFFSET_FILL),(z!==se||k!==ie)&&(t.polygonOffset(se,ie),z=se,k=ie)):Me(t.POLYGON_OFFSET_FILL)}function Le(I){I?he(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function He(I){I===void 0&&(I=t.TEXTURE0+X-1),V!==I&&(t.activeTexture(I),V=I)}function At(I,se,ie){ie===void 0&&(V===null?ie=t.TEXTURE0+X-1:ie=V);let xe=Q[ie];xe===void 0&&(xe={type:void 0,texture:void 0},Q[ie]=xe),(xe.type!==I||xe.texture!==se)&&(V!==ie&&(t.activeTexture(ie),V=ie),t.bindTexture(I,se||fe[I]),xe.type=I,xe.texture=se)}function N(){const I=Q[V];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(I){we.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),we.copy(I))}function Ue(I){Y.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Ne(I,se){let ie=c.get(se);ie===void 0&&(ie=new WeakMap,c.set(se,ie));let xe=ie.get(I);xe===void 0&&(xe=t.getUniformBlockIndex(se,I.name),ie.set(I,xe))}function ge(I,se){const xe=c.get(se).get(I);l.get(se)!==xe&&(t.uniformBlockBinding(se,xe,I.__bindingPointIndex),l.set(se,xe))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},V=null,Q={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,_=null,y=null,A=null,C=null,M=new st(0,0,0),R=0,b=!1,S=null,D=null,O=null,z=null,k=null,we.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Me,bindFramebuffer:We,drawBuffers:De,useProgram:ct,setBlending:U,setMaterial:Nt,setFlipSided:je,setCullFace:nt,setLineWidth:Te,setPolygonOffset:Oe,setScissorTest:Le,activeTexture:He,bindTexture:At,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:Pe,texImage3D:re,updateUBOMapping:Ne,uniformBlockBinding:ge,texStorage2D:me,texStorage3D:Ae,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:K,compressedTexSubImage3D:be,scissor:ye,viewport:Ue,reset:de}}function CD(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,E){return p?new OffscreenCanvas(N,E):lu("canvas")}function x(N,E,G){let J=1;const ne=At(N);if((ne.width>G||ne.height>G)&&(J=G/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const K=Math.floor(J*ne.width),be=Math.floor(J*ne.height);h===void 0&&(h=g(K,be));const me=E?g(K,be):h;return me.width=K,me.height=be,me.getContext("2d").drawImage(N,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+be+")."),me}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),N;return N}function m(N){return N.generateMipmaps}function f(N){t.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(N,E,G,J,ne=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let K=E;if(E===t.RED&&(G===t.FLOAT&&(K=t.R32F),G===t.HALF_FLOAT&&(K=t.R16F),G===t.UNSIGNED_BYTE&&(K=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(K=t.R8UI),G===t.UNSIGNED_SHORT&&(K=t.R16UI),G===t.UNSIGNED_INT&&(K=t.R32UI),G===t.BYTE&&(K=t.R8I),G===t.SHORT&&(K=t.R16I),G===t.INT&&(K=t.R32I)),E===t.RG&&(G===t.FLOAT&&(K=t.RG32F),G===t.HALF_FLOAT&&(K=t.RG16F),G===t.UNSIGNED_BYTE&&(K=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(K=t.RG8UI),G===t.UNSIGNED_SHORT&&(K=t.RG16UI),G===t.UNSIGNED_INT&&(K=t.RG32UI),G===t.BYTE&&(K=t.RG8I),G===t.SHORT&&(K=t.RG16I),G===t.INT&&(K=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(K=t.RGB8UI),G===t.UNSIGNED_SHORT&&(K=t.RGB16UI),G===t.UNSIGNED_INT&&(K=t.RGB32UI),G===t.BYTE&&(K=t.RGB8I),G===t.SHORT&&(K=t.RGB16I),G===t.INT&&(K=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),G===t.UNSIGNED_INT&&(K=t.RGBA32UI),G===t.BYTE&&(K=t.RGBA8I),G===t.SHORT&&(K=t.RGBA16I),G===t.INT&&(K=t.RGBA32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),E===t.RGBA){const be=ne?ou:et.getTransfer(J);G===t.FLOAT&&(K=t.RGBA32F),G===t.HALF_FLOAT&&(K=t.RGBA16F),G===t.UNSIGNED_BYTE&&(K=be===ut?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(N,E){let G;return N?E===null||E===ws||E===Xa?G=t.DEPTH24_STENCIL8:E===Bi?G=t.DEPTH32F_STENCIL8:E===$a&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ws||E===Xa?G=t.DEPTH_COMPONENT24:E===Bi?G=t.DEPTH_COMPONENT32F:E===$a&&(G=t.DEPTH_COMPONENT16),G}function A(N,E){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==ci&&N.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function C(N){const E=N.target;E.removeEventListener("dispose",C),R(E),E.isVideoTexture&&d.delete(E)}function M(N){const E=N.target;E.removeEventListener("dispose",M),S(E)}function R(N){const E=i.get(N);if(E.__webglInit===void 0)return;const G=N.source,J=u.get(G);if(J){const ne=J[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(N),Object.keys(J).length===0&&u.delete(G)}i.remove(N)}function b(N){const E=i.get(N);t.deleteTexture(E.__webglTexture);const G=N.source,J=u.get(G);delete J[E.__cacheKey],o.memory.textures--}function S(N){const E=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ne=0;ne<E.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=N.textures;for(let J=0,ne=G.length;J<ne;J++){const K=i.get(G[J]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(G[J])}i.remove(N)}let D=0;function O(){D=0}function z(){const N=D;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),D+=1,N}function k(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function X(N,E){const G=i.get(N);if(N.isVideoTexture&&Le(N),N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){const J=N.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(G,N,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function H(N,E){const G=i.get(N);if(N.version>0&&G.__version!==N.version){fe(G,N,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function q(N,E){const G=i.get(N);if(N.version>0&&G.__version!==N.version){fe(G,N,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function P(N,E){const G=i.get(N);if(N.version>0&&G.__version!==N.version){he(G,N,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const V={[Eh]:t.REPEAT,[ls]:t.CLAMP_TO_EDGE,[wh]:t.MIRRORED_REPEAT},Q={[ci]:t.NEAREST,[oR]:t.NEAREST_MIPMAP_NEAREST,[Fl]:t.NEAREST_MIPMAP_LINEAR,[yi]:t.LINEAR,[Md]:t.LINEAR_MIPMAP_NEAREST,[cs]:t.LINEAR_MIPMAP_LINEAR},Z={[dR]:t.NEVER,[vR]:t.ALWAYS,[fR]:t.LESS,[RS]:t.LEQUAL,[hR]:t.EQUAL,[gR]:t.GEQUAL,[pR]:t.GREATER,[mR]:t.NOTEQUAL};function ue(N,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===Md||E.magFilter===Fl||E.magFilter===cs||E.minFilter===yi||E.minFilter===Md||E.minFilter===Fl||E.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,V[E.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,V[E.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,V[E.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,Q[E.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ci||E.minFilter!==Fl&&E.minFilter!==cs||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function we(N,E){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",C));const J=E.source;let ne=u.get(J);ne===void 0&&(ne={},u.set(J,ne));const K=k(E);if(K!==N.__cacheKey){ne[K]===void 0&&(ne[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[K].usedTimes++;const be=ne[N.__cacheKey];be!==void 0&&(ne[N.__cacheKey].usedTimes--,be.usedTimes===0&&b(E)),N.__cacheKey=K,N.__webglTexture=ne[K].texture}return G}function Y(N,E,G){return Math.floor(Math.floor(N/G)/E)}function ae(N,E,G,J){const K=N.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,G,J,E.data);else{K.sort((re,ye)=>re.start-ye.start);let be=0;for(let re=1;re<K.length;re++){const ye=K[be],Ue=K[re],Ne=ye.start+ye.count,ge=Y(Ue.start,E.width,4),de=Y(ye.start,E.width,4);Ue.start<=Ne+1&&ge===de&&Y(Ue.start+Ue.count-1,E.width,4)===ge?ye.count=Math.max(ye.count,Ue.start+Ue.count-ye.start):(++be,K[be]=Ue)}K.length=be+1;const me=t.getParameter(t.UNPACK_ROW_LENGTH),Ae=t.getParameter(t.UNPACK_SKIP_PIXELS),Pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let re=0,ye=K.length;re<ye;re++){const Ue=K[re],Ne=Math.floor(Ue.start/4),ge=Math.ceil(Ue.count/4),de=Ne%E.width,I=Math.floor(Ne/E.width),se=ge,ie=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,de),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,de,I,se,ie,G,J,E.data)}N.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function fe(N,E,G){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const ne=we(N,E),K=E.source;n.bindTexture(J,N.__webglTexture,t.TEXTURE0+G);const be=i.get(K);if(K.version!==be.__version||ne===!0){n.activeTexture(t.TEXTURE0+G);const me=et.getPrimaries(et.workingColorSpace),Ae=E.colorSpace===mr?null:et.getPrimaries(E.colorSpace),Pe=E.colorSpace===mr||me===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let re=x(E.image,!1,r.maxTextureSize);re=He(E,re);const ye=s.convert(E.format,E.colorSpace),Ue=s.convert(E.type);let Ne=_(E.internalFormat,ye,Ue,E.colorSpace,E.isVideoTexture);ue(J,E);let ge;const de=E.mipmaps,I=E.isVideoTexture!==!0,se=be.__version===void 0||ne===!0,ie=K.dataReady,xe=A(E,re);if(E.isDepthTexture)Ne=y(E.format===qa,E.type),se&&(I?n.texStorage2D(t.TEXTURE_2D,1,Ne,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,Ue,null));else if(E.isDataTexture)if(de.length>0){I&&se&&n.texStorage2D(t.TEXTURE_2D,xe,Ne,de[0].width,de[0].height);for(let oe=0,ee=de.length;oe<ee;oe++)ge=de[oe],I?ie&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,ye,Ue,ge.data):n.texImage2D(t.TEXTURE_2D,oe,Ne,ge.width,ge.height,0,ye,Ue,ge.data);E.generateMipmaps=!1}else I?(se&&n.texStorage2D(t.TEXTURE_2D,xe,Ne,re.width,re.height),ie&&ae(E,re,ye,Ue)):n.texImage2D(t.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,Ue,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){I&&se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ne,de[0].width,de[0].height,re.depth);for(let oe=0,ee=de.length;oe<ee;oe++)if(ge=de[oe],E.format!==oi)if(ye!==null)if(I){if(ie)if(E.layerUpdates.size>0){const Ce=Gv(ge.width,ge.height,E.format,E.type);for(const ze of E.layerUpdates){const ht=ge.data.subarray(ze*Ce/ge.data.BYTES_PER_ELEMENT,(ze+1)*Ce/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,ze,ge.width,ge.height,1,ye,ht)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,re.depth,ye,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Ne,ge.width,ge.height,re.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,re.depth,ye,Ue,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Ne,ge.width,ge.height,re.depth,0,ye,Ue,ge.data)}else{I&&se&&n.texStorage2D(t.TEXTURE_2D,xe,Ne,de[0].width,de[0].height);for(let oe=0,ee=de.length;oe<ee;oe++)ge=de[oe],E.format!==oi?ye!==null?I?ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,ye,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Ne,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ie&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,ye,Ue,ge.data):n.texImage2D(t.TEXTURE_2D,oe,Ne,ge.width,ge.height,0,ye,Ue,ge.data)}else if(E.isDataArrayTexture)if(I){if(se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ne,re.width,re.height,re.depth),ie)if(E.layerUpdates.size>0){const oe=Gv(re.width,re.height,E.format,E.type);for(const ee of E.layerUpdates){const Ce=re.data.subarray(ee*oe/re.data.BYTES_PER_ELEMENT,(ee+1)*oe/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,ye,Ue,Ce)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,Ue,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,ye,Ue,re.data);else if(E.isData3DTexture)I?(se&&n.texStorage3D(t.TEXTURE_3D,xe,Ne,re.width,re.height,re.depth),ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,Ue,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,ye,Ue,re.data);else if(E.isFramebufferTexture){if(se)if(I)n.texStorage2D(t.TEXTURE_2D,xe,Ne,re.width,re.height);else{let oe=re.width,ee=re.height;for(let Ce=0;Ce<xe;Ce++)n.texImage2D(t.TEXTURE_2D,Ce,Ne,oe,ee,0,ye,Ue,null),oe>>=1,ee>>=1}}else if(de.length>0){if(I&&se){const oe=At(de[0]);n.texStorage2D(t.TEXTURE_2D,xe,Ne,oe.width,oe.height)}for(let oe=0,ee=de.length;oe<ee;oe++)ge=de[oe],I?ie&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ye,Ue,ge):n.texImage2D(t.TEXTURE_2D,oe,Ne,ye,Ue,ge);E.generateMipmaps=!1}else if(I){if(se){const oe=At(re);n.texStorage2D(t.TEXTURE_2D,xe,Ne,oe.width,oe.height)}ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Ue,re)}else n.texImage2D(t.TEXTURE_2D,0,Ne,ye,Ue,re);m(E)&&f(J),be.__version=K.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function he(N,E,G){if(E.image.length!==6)return;const J=we(N,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+G);const K=i.get(ne);if(ne.version!==K.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const be=et.getPrimaries(et.workingColorSpace),me=E.colorSpace===mr?null:et.getPrimaries(E.colorSpace),Ae=E.colorSpace===mr||be===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Pe&&!re?ye[ee]=x(E.image[ee],!0,r.maxCubemapSize):ye[ee]=re?E.image[ee].image:E.image[ee],ye[ee]=He(E,ye[ee]);const Ue=ye[0],Ne=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),de=_(E.internalFormat,Ne,ge,E.colorSpace),I=E.isVideoTexture!==!0,se=K.__version===void 0||J===!0,ie=ne.dataReady;let xe=A(E,Ue);ue(t.TEXTURE_CUBE_MAP,E);let oe;if(Pe){I&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,de,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){oe=ye[ee].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){const ze=oe[Ce];E.format!==oi?Ne!==null?I?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,ze.width,ze.height,Ne,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,de,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,ze.width,ze.height,Ne,ge,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,de,ze.width,ze.height,0,Ne,ge,ze.data)}}}else{if(oe=E.mipmaps,I&&se){oe.length>0&&xe++;const ee=At(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,de,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Ne,ge,ye[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,ye[ee].width,ye[ee].height,0,Ne,ge,ye[ee].data);for(let Ce=0;Ce<oe.length;Ce++){const ht=oe[Ce].image[ee].image;I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,ht.width,ht.height,Ne,ge,ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,de,ht.width,ht.height,0,Ne,ge,ht.data)}}else{I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,ge,ye[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,Ne,ge,ye[ee]);for(let Ce=0;Ce<oe.length;Ce++){const ze=oe[Ce];I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,Ne,ge,ze.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,de,Ne,ge,ze.image[ee])}}}m(E)&&f(t.TEXTURE_CUBE_MAP),K.__version=ne.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Me(N,E,G,J,ne,K){const be=s.convert(G.format,G.colorSpace),me=s.convert(G.type),Ae=_(G.internalFormat,be,me,G.colorSpace),Pe=i.get(E),re=i.get(G);if(re.__renderTarget=E,!Pe.__hasExternalTextures){const ye=Math.max(1,E.width>>K),Ue=Math.max(1,E.height>>K);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,K,Ae,ye,Ue,E.depth,0,be,me,null):n.texImage2D(ne,K,Ae,ye,Ue,0,be,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Oe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,re.__webglTexture,0,Te(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,re.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(N,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,N),E.depthBuffer){const J=E.depthTexture,ne=J&&J.isDepthTexture?J.type:null,K=y(E.stencilBuffer,ne),be=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=Te(E);Oe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,K,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,K,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,K,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,N)}else{const J=E.textures;for(let ne=0;ne<J.length;ne++){const K=J[ne],be=s.convert(K.format,K.colorSpace),me=s.convert(K.type),Ae=_(K.internalFormat,be,me,K.colorSpace),Pe=Te(E);G&&Oe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Ae,E.width,E.height):Oe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,Ae,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ne=J.__webglTexture,K=Te(E);if(E.depthTexture.format===Ya)Oe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===qa)Oe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ct(N){const E=i.get(N),G=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const J=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=J}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=N.texture.mipmaps;J&&J.length>0?De(E.__webglFramebuffer[0],N):De(E.__webglFramebuffer,N)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=t.createRenderbuffer(),We(E.__webglDepthbuffer[J],N,!1);else{const ne=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}else{const J=N.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),We(E.__webglDepthbuffer,N,!1);else{const ne=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(N,E,G){const J=i.get(N);E!==void 0&&Me(J.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ct(N)}function Ye(N){const E=N.texture,G=i.get(N),J=i.get(E);N.addEventListener("dispose",M);const ne=N.textures,K=N.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)G.__webglFramebuffer[me][Ae]=t.createFramebuffer()}else G.__webglFramebuffer[me]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)G.__webglFramebuffer[me]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(be)for(let me=0,Ae=ne.length;me<Ae;me++){const Pe=i.get(ne[me]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&Oe(N)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){const Ae=ne[me];G.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const Pe=s.convert(Ae.format,Ae.colorSpace),re=s.convert(Ae.type),ye=_(Ae.internalFormat,Pe,re,Ae.colorSpace,N.isXRRenderTarget===!0),Ue=Te(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ye,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,G.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),We(G.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ue(t.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)Me(G.__webglFramebuffer[me][Ae],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae);else Me(G.__webglFramebuffer[me],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let me=0,Ae=ne.length;me<Ae;me++){const Pe=ne[me],re=i.get(Pe);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ue(t.TEXTURE_2D,Pe),Me(G.__webglFramebuffer,N,Pe,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),m(Pe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,J.__webglTexture),ue(me,E),E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)Me(G.__webglFramebuffer[Ae],N,E,t.COLOR_ATTACHMENT0,me,Ae);else Me(G.__webglFramebuffer,N,E,t.COLOR_ATTACHMENT0,me,0);m(E)&&f(me),n.unbindTexture()}N.depthBuffer&&ct(N)}function U(N){const E=N.textures;for(let G=0,J=E.length;G<J;G++){const ne=E[G];if(m(ne)){const K=v(N),be=i.get(ne).__webglTexture;n.bindTexture(K,be),f(K),n.unbindTexture()}}}const Nt=[],je=[];function nt(N){if(N.samples>0){if(Oe(N)===!1){const E=N.textures,G=N.width,J=N.height;let ne=t.COLOR_BUFFER_BIT;const K=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(N),me=E.length>1;if(me)for(let Pe=0;Pe<E.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Ae=N.texture.mipmaps;Ae&&Ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const re=i.get(E[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,G,J,0,0,G,J,ne,t.NEAREST),l===!0&&(Nt.length=0,je.length=0,Nt.push(t.COLOR_ATTACHMENT0+Pe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Nt.push(K),je.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Pe=0;Pe<E.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const re=i.get(E[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const E=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Te(N){return Math.min(r.maxSamples,N.samples)}function Oe(N){const E=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Le(N){const E=o.render.frame;d.get(N)!==E&&(d.set(N,E),N.update())}function He(N,E){const G=N.colorSpace,J=N.format,ne=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Oo&&G!==mr&&(et.getTransfer(G)===ut?(J!==oi||ne!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function At(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=P,this.rebindTextures=tt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Oe}function RD(t,e){function n(i,r=mr){let s;const o=et.getTransfer(r);if(i===Qi)return t.UNSIGNED_BYTE;if(i===dm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===wS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===SS)return t.BYTE;if(i===ES)return t.SHORT;if(i===$a)return t.UNSIGNED_SHORT;if(i===um)return t.INT;if(i===ws)return t.UNSIGNED_INT;if(i===Bi)return t.FLOAT;if(i===rl)return t.HALF_FLOAT;if(i===MS)return t.ALPHA;if(i===bS)return t.RGB;if(i===oi)return t.RGBA;if(i===Ya)return t.DEPTH_COMPONENT;if(i===qa)return t.DEPTH_STENCIL;if(i===TS)return t.RED;if(i===hm)return t.RED_INTEGER;if(i===AS)return t.RG;if(i===pm)return t.RG_INTEGER;if(i===mm)return t.RGBA_INTEGER;if(i===Ec||i===wc||i===Mc||i===bc)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===bh||i===Th||i===Ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ch||i===Rh||i===Ph)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ch||i===Rh)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ph)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nh||i===Lh||i===Dh||i===Ih||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Hh||i===Vh||i===Gh||i===Wh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tc||i===jh||i===$h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tc)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===CS||i===Xh||i===Yh||i===qh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const PD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ND=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new vn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hr({vertexShader:PD,fragmentShader:ND,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hi(new zu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DD extends $o{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const x=new LD,m=n.getContextAttributes();let f=null,v=null;const _=[],y=[],A=new dt;let C=null;const M=new Hn;M.viewport=new Rt;const R=new Hn;R.viewport=new Rt;const b=[M,R],S=new eP;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=_[Y];return ae===void 0&&(ae=new Xd,_[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=_[Y];return ae===void 0&&(ae=new Xd,_[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=_[Y];return ae===void 0&&(ae=new Xd,_[Y]=ae),ae.getHandSpace()};function z(Y){const ae=y.indexOf(Y.inputSource);if(ae===-1)return;const fe=_[ae];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",X);for(let Y=0;Y<_.length;Y++){const ae=y[Y];ae!==null&&(y[Y]=null,_[Y].disconnect(ae))}D=null,O=null,x.reset(),e.setRenderTarget(f),p=null,u=null,h=null,r=null,v=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,he=null,Me=null;m.depth&&(Me=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=m.stencil?qa:Ya,he=m.stencil?Xa:ws);const We={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};h=new XRWebGLBinding(r,n),u=h.createProjectionLayer(We),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Ms(u.textureWidth,u.textureHeight,{format:oi,type:Qi,depthTexture:new GS(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ms(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Y){for(let ae=0;ae<Y.removed.length;ae++){const fe=Y.removed[ae],he=y.indexOf(fe);he>=0&&(y[he]=null,_[he].disconnect(fe))}for(let ae=0;ae<Y.added.length;ae++){const fe=Y.added[ae];let he=y.indexOf(fe);if(he===-1){for(let We=0;We<_.length;We++)if(We>=y.length){y.push(fe),he=We;break}else if(y[We]===null){y[We]=fe,he=We;break}if(he===-1)break}const Me=_[he];Me&&Me.connect(fe)}}const H=new j,q=new j;function P(Y,ae,fe){H.setFromMatrixPosition(ae.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);const he=H.distanceTo(q),Me=ae.projectionMatrix.elements,We=fe.projectionMatrix.elements,De=Me[14]/(Me[10]-1),ct=Me[14]/(Me[10]+1),tt=(Me[9]+1)/Me[5],Ye=(Me[9]-1)/Me[5],U=(Me[8]-1)/Me[0],Nt=(We[8]+1)/We[0],je=De*U,nt=De*Nt,Te=he/(-U+Nt),Oe=Te*-U;if(ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Oe),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Le=De+Te,He=ct+Te,At=je-Oe,N=nt+(he-Oe),E=tt*ct/He*Le,G=Ye*ct/He*Le;Y.projectionMatrix.makePerspective(At,N,E,G,Le,He),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function V(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ae=Y.near,fe=Y.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),S.near=R.near=M.near=ae,S.far=R.far=M.far=fe,(D!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,O=S.far),M.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,S.layers.mask=M.layers.mask|R.layers.mask;const he=Y.parent,Me=S.cameras;V(S,he);for(let We=0;We<Me.length;We++)V(Me[We],he);Me.length===2?P(S,M,R):S.projectionMatrix.copy(M.projectionMatrix),Q(Y,S,he)};function Q(Y,ae,fe){fe===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Kh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Z=null;function ue(Y,ae){if(d=ae.getViewerPose(c||o),g=ae,d!==null){const fe=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let he=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let De=0;De<fe.length;De++){const ct=fe[De];let tt=null;if(p!==null)tt=p.getViewport(ct);else{const U=h.getViewSubImage(u,ct);tt=U.viewport,De===0&&(e.setRenderTargetTextures(v,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(v))}let Ye=b[De];Ye===void 0&&(Ye=new Hn,Ye.layers.enable(De),Ye.viewport=new Rt,b[De]=Ye),Ye.matrix.fromArray(ct.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ct.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(tt.x,tt.y,tt.width,tt.height),De===0&&(S.matrix.copy(Ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(Ye)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const De=h.getDepthInformation(fe[0]);De&&De.isValid&&De.texture&&x.init(e,De,r.renderState)}}for(let fe=0;fe<_.length;fe++){const he=y[fe],Me=_[fe];he!==null&&Me!==void 0&&Me.update(he,ae,c||o)}Z&&Z(Y,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const we=new WS;we.setAnimationLoop(ue),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}}const Zr=new Zi,ID=new Pt;function UD(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,kS(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,Zr.copy(y),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),m.envMapRotation.value.setFromMatrix4(ID.makeRotationFromEuler(Zr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FD(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(g(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(v,A);const C=e.render.frame;s[v.id]!==C&&(u(v),s[v.id]=C)}function d(v){const _=h();v.__bindingPointIndex=_;const y=t.createBuffer(),A=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const _=r[v.id],y=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,M=y.length;C<M;C++){const R=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,S=R.length;b<S;b++){const D=R[b];if(p(D,C,b,A)===!0){const O=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let X=0;X<z.length;X++){const H=z[X],q=x(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,O+k,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,y,A){const C=v.value,M=_+"_"+y;if(A[M]===void 0)return typeof C=="number"||typeof C=="boolean"?A[M]=C:A[M]=C.clone(),!0;{const R=A[M];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[M]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(v){const _=v.uniforms;let y=0;const A=16;for(let M=0,R=_.length;M<R;M++){const b=Array.isArray(_[M])?_[M]:[_[M]];for(let S=0,D=b.length;S<D;S++){const O=b[S],z=Array.isArray(O.value)?O.value:[O.value];for(let k=0,X=z.length;k<X;k++){const H=z[k],q=x(H),P=y%A,V=P%q.boundary,Q=P+V;y+=V,Q!==0&&A-Q<q.storage&&(y+=A-Q),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=q.storage}}}const C=y%A;return C>0&&(y+=A-C),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class OD{constructor(e={}){const{canvas:n=_R(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=kn;let C=0,M=0,R=null,b=-1,S=null;const D=new Rt,O=new Rt;let z=null;const k=new st(0);let X=0,H=n.width,q=n.height,P=1,V=null,Q=null;const Z=new Rt(0,0,H,q),ue=new Rt(0,0,H,q);let we=!1;const Y=new HS;let ae=!1,fe=!1;const he=new Pt,Me=new Pt,We=new j,De=new Rt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ye(){return R===null?P:1}let U=i;function Nt(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cm}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",ee,!1),U===null){const F="webgl2";if(U=Nt(F,T),U===null)throw Nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let je,nt,Te,Oe,Le,He,At,N,E,G,J,ne,K,be,me,Ae,Pe,re,ye,Ue,Ne,ge,de,I;function se(){je=new XN(U),je.init(),ge=new RD(U,je),nt=new zN(U,je,e,ge),Te=new AD(U,je),nt.reverseDepthBuffer&&u&&Te.buffers.depth.setReversed(!0),Oe=new KN(U),Le=new pD,He=new CD(U,je,Te,Le,nt,ge,Oe),At=new VN(y),N=new $N(y),E=new nP(U),de=new kN(U,E),G=new YN(U,E,Oe,de),J=new ZN(U,G,E,Oe),ye=new QN(U,nt,He),Ae=new HN(Le),ne=new hD(y,At,N,je,nt,de,Ae),K=new UD(y,Le),be=new gD,me=new ED(je),re=new ON(y,At,N,Te,J,p,l),Pe=new bD(y,J,nt),I=new FD(U,Oe,nt,Te),Ue=new BN(U,je,Oe),Ne=new qN(U,je,Oe),Oe.programs=ne.programs,y.capabilities=nt,y.extensions=je,y.properties=Le,y.renderLists=be,y.shadowMap=Pe,y.state=Te,y.info=Oe}se();const ie=new DD(y,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(H,q,!1))},this.getSize=function(T){return T.set(H,q)},this.setSize=function(T,F,W=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,q=F,n.width=Math.floor(T*P),n.height=Math.floor(F*P),W===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(H*P,q*P).floor()},this.setDrawingBufferSize=function(T,F,W){H=T,q=F,P=W,n.width=Math.floor(T*W),n.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,F,W,$){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,F,W,$),Te.viewport(D.copy(Z).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,F,W,$){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,F,W,$),Te.scissor(O.copy(ue).multiplyScalar(P).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(T){Te.setScissorTest(we=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,W=!0){let $=0;if(T){let B=!1;if(R!==null){const ce=R.texture.format;B=ce===mm||ce===pm||ce===hm}if(B){const ce=R.texture.type,_e=ce===Qi||ce===ws||ce===$a||ce===Xa||ce===dm||ce===fm,Re=re.getClearColor(),Ee=re.getClearAlpha(),ke=Re.r,Be=Re.g,Ie=Re.b;_e?(g[0]=ke,g[1]=Be,g[2]=Ie,g[3]=Ee,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=ke,x[1]=Be,x[2]=Ie,x[3]=Ee,U.clearBufferiv(U.COLOR,0,x))}else $|=U.COLOR_BUFFER_BIT}F&&($|=U.DEPTH_BUFFER_BIT),W&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),re.dispose(),be.dispose(),me.dispose(),Le.dispose(),At.dispose(),N.dispose(),J.dispose(),de.dispose(),I.dispose(),ne.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",xm),ie.removeEventListener("sessionend",_m),jr.stop()};function xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Oe.autoReset,F=Pe.enabled,W=Pe.autoUpdate,$=Pe.needsUpdate,B=Pe.type;se(),Oe.autoReset=T,Pe.enabled=F,Pe.autoUpdate=W,Pe.needsUpdate=$,Pe.type=B}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ce(T){const F=T.target;F.removeEventListener("dispose",Ce),ze(F)}function ze(T){ht(T),Le.remove(T)}function ht(T){const F=Le.get(T).programs;F!==void 0&&(F.forEach(function(W){ne.releaseProgram(W)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,$,B,ce){F===null&&(F=ct);const _e=B.isMesh&&B.matrixWorld.determinant()<0,Re=qS(T,F,W,$,B);Te.setMaterial($,_e);let Ee=W.index,ke=1;if($.wireframe===!0){if(Ee=G.getWireframeAttribute(W),Ee===void 0)return;ke=2}const Be=W.drawRange,Ie=W.attributes.position;let Ke=Be.start*ke,at=(Be.start+Be.count)*ke;ce!==null&&(Ke=Math.max(Ke,ce.start*ke),at=Math.min(at,(ce.start+ce.count)*ke)),Ee!==null?(Ke=Math.max(Ke,0),at=Math.min(at,Ee.count)):Ie!=null&&(Ke=Math.max(Ke,0),at=Math.min(at,Ie.count));const _t=at-Ke;if(_t<0||_t===1/0)return;de.setup(B,$,Re,W,Ee);let wt,Je=Ue;if(Ee!==null&&(wt=E.get(Ee),Je=Ne,Je.setIndex(wt)),B.isMesh)$.wireframe===!0?(Te.setLineWidth($.wireframeLinewidth*Ye()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(B.isLine){let Fe=$.linewidth;Fe===void 0&&(Fe=1),Te.setLineWidth(Fe*Ye()),B.isLineSegments?Je.setMode(U.LINES):B.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else B.isPoints?Je.setMode(U.POINTS):B.isSprite&&Je.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)po("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Fe=B._multiDrawStarts,Ht=B._multiDrawCounts,it=B._multiDrawCount,qn=Ee?E.get(Ee).bytesPerElement:1,Cs=Le.get($).currentProgram.getUniforms();for(let Sn=0;Sn<it;Sn++)Cs.setValue(U,"_gl_DrawID",Sn),Je.render(Fe[Sn]/qn,Ht[Sn])}else if(B.isInstancedMesh)Je.renderInstances(Ke,_t,B.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ht=Math.min(W.instanceCount,Fe);Je.renderInstances(Ke,_t,Ht)}else Je.render(Ke,_t)};function ot(T,F,W){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,dl(T,F,W),T.side=zr,T.needsUpdate=!0,dl(T,F,W),T.side=Fi):dl(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),f=me.get(W),f.init(F),_.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const $=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Re=ce[_e];ot(Re,W,B),$.add(Re)}else ot(ce,W,B),$.add(ce)}),f=_.pop(),$},this.compileAsync=function(T,F,W=null){const $=this.compile(T,F,W);return new Promise(B=>{function ce(){if($.forEach(function(_e){Le.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){B(T);return}setTimeout(ce,10)}je.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Yn=null;function bi(T){Yn&&Yn(T)}function xm(){jr.stop()}function _m(){jr.start()}const jr=new WS;jr.setAnimationLoop(bi),typeof self<"u"&&jr.setContext(self),this.setAnimationLoop=function(T){Yn=T,ie.setAnimationLoop(T),T===null?jr.stop():jr.start()},ie.addEventListener("sessionstart",xm),ie.addEventListener("sessionend",_m),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,R),f=me.get(T,_.length),f.init(F),_.push(f),Me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Me),fe=this.localClippingEnabled,ae=Ae.init(this.clippingPlanes,fe),m=be.get(T,v.length),m.init(),v.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ce=y.xr.getDepthSensingMesh();ce!==null&&Vu(ce,F,-1/0,y.sortObjects)}Vu(T,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(V,Q),tt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,tt&&re.addToRenderList(m,T),this.info.render.frame++,ae===!0&&Ae.beginShadows();const W=f.state.shadowsArray;Pe.render(W,T,F),ae===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,B=m.transmissive;if(f.setupLights(),F.isArrayCamera){const ce=F.cameras;if(B.length>0)for(let _e=0,Re=ce.length;_e<Re;_e++){const Ee=ce[_e];Sm($,B,T,Ee)}tt&&re.render(T);for(let _e=0,Re=ce.length;_e<Re;_e++){const Ee=ce[_e];ym(m,T,Ee,Ee.viewport)}}else B.length>0&&Sm($,B,T,F),tt&&re.render(T),ym(m,T,F);R!==null&&M===0&&(He.updateMultisampleRenderTarget(R),He.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,F),de.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],ae===!0&&Ae.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Vu(T,F,W,$){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){$&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);const _e=J.update(T),Re=T.material;Re.visible&&m.push(T,_e,Re,W,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const _e=J.update(T),Re=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),De.copy(_e.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(Me)),Array.isArray(Re)){const Ee=_e.groups;for(let ke=0,Be=Ee.length;ke<Be;ke++){const Ie=Ee[ke],Ke=Re[Ie.materialIndex];Ke&&Ke.visible&&m.push(T,_e,Ke,W,De.z,Ie)}}else Re.visible&&m.push(T,_e,Re,W,De.z,null)}}const ce=T.children;for(let _e=0,Re=ce.length;_e<Re;_e++)Vu(ce[_e],F,W,$)}function ym(T,F,W,$){const B=T.opaque,ce=T.transmissive,_e=T.transparent;f.setupLightsView(W),ae===!0&&Ae.setGlobalState(y.clippingPlanes,W),$&&Te.viewport(D.copy($)),B.length>0&&ul(B,F,W),ce.length>0&&ul(ce,F,W),_e.length>0&&ul(_e,F,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Sm(T,F,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new Ms(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?rl:Qi,minFilter:cs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ce=f.state.transmissionRenderTarget[$.id],_e=$.viewport||D;ce.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);const Re=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(k),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),tt&&re.render(W);const Ee=y.toneMapping;y.toneMapping=Dr;const ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),ae===!0&&Ae.setGlobalState(y.clippingPlanes,$),ul(T,W,$),He.updateMultisampleRenderTarget(ce),He.updateRenderTargetMipmap(ce),je.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ie=0,Ke=F.length;Ie<Ke;Ie++){const at=F[Ie],_t=at.object,wt=at.geometry,Je=at.material,Fe=at.group;if(Je.side===Fi&&_t.layers.test($.layers)){const Ht=Je.side;Je.side=gn,Je.needsUpdate=!0,Em(_t,W,$,wt,Je,Fe),Je.side=Ht,Je.needsUpdate=!0,Be=!0}}Be===!0&&(He.updateMultisampleRenderTarget(ce),He.updateRenderTargetMipmap(ce))}y.setRenderTarget(Re),y.setClearColor(k,X),ke!==void 0&&($.viewport=ke),y.toneMapping=Ee}function ul(T,F,W){const $=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ce=T.length;B<ce;B++){const _e=T[B],Re=_e.object,Ee=_e.geometry,ke=_e.group;let Be=_e.material;Be.allowOverride===!0&&$!==null&&(Be=$),Re.layers.test(W.layers)&&Em(Re,F,W,Ee,Be,ke)}}function Em(T,F,W,$,B,ce){T.onBeforeRender(y,F,W,$,B,ce),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,F,W,$,T,ce),B.transparent===!0&&B.side===Fi&&B.forceSinglePass===!1?(B.side=gn,B.needsUpdate=!0,y.renderBufferDirect(W,F,$,B,T,ce),B.side=zr,B.needsUpdate=!0,y.renderBufferDirect(W,F,$,B,T,ce),B.side=Fi):y.renderBufferDirect(W,F,$,B,T,ce),T.onAfterRender(y,F,W,$,B,ce)}function dl(T,F,W){F.isScene!==!0&&(F=ct);const $=Le.get(T),B=f.state.lights,ce=f.state.shadowsArray,_e=B.state.version,Re=ne.getParameters(T,B.state,ce,F,W),Ee=ne.getProgramCacheKey(Re);let ke=$.programs;$.environment=T.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(T.isMeshStandardMaterial?N:At).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Ce),ke=new Map,$.programs=ke);let Be=ke.get(Ee);if(Be!==void 0){if($.currentProgram===Be&&$.lightsStateVersion===_e)return Mm(T,Re),Be}else Re.uniforms=ne.getUniforms(T),T.onBeforeCompile(Re,y),Be=ne.acquireProgram(Re,Ee),ke.set(Ee,Be),$.uniforms=Re.uniforms;const Ie=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=Ae.uniform),Mm(T,Re),$.needsLights=QS(T),$.lightsStateVersion=_e,$.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=Be,$.uniformsList=null,Be}function wm(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Ac.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Mm(T,F){const W=Le.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function qS(T,F,W,$,B){F.isScene!==!0&&(F=ct),He.resetTextureUnits();const ce=F.fog,_e=$.isMeshStandardMaterial?F.environment:null,Re=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Oo,Ee=($.isMeshStandardMaterial?N:At).get($.envMap||_e),ke=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,at=!!W.morphAttributes.color;let _t=Dr;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=y.toneMapping);const wt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Je=wt!==void 0?wt.length:0,Fe=Le.get($),Ht=f.state.lights;if(ae===!0&&(fe===!0||T!==S)){const en=T===S&&$.id===b;Ae.setState($,T,en)}let it=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ht.state.version||Fe.outputColorSpace!==Re||B.isBatchedMesh&&Fe.batching===!1||!B.isBatchedMesh&&Fe.batching===!0||B.isBatchedMesh&&Fe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Fe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Fe.instancing===!1||!B.isInstancedMesh&&Fe.instancing===!0||B.isSkinnedMesh&&Fe.skinning===!1||!B.isSkinnedMesh&&Fe.skinning===!0||B.isInstancedMesh&&Fe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Fe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Fe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Fe.instancingMorph===!1&&B.morphTexture!==null||Fe.envMap!==Ee||$.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ae.numPlanes||Fe.numIntersection!==Ae.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Be||Fe.morphTargets!==Ie||Fe.morphNormals!==Ke||Fe.morphColors!==at||Fe.toneMapping!==_t||Fe.morphTargetsCount!==Je)&&(it=!0):(it=!0,Fe.__version=$.version);let qn=Fe.currentProgram;it===!0&&(qn=dl($,F,B));let Cs=!1,Sn=!1,Yo=!1;const vt=qn.getUniforms(),In=Fe.uniforms;if(Te.useProgram(qn.program)&&(Cs=!0,Sn=!0,Yo=!0),$.id!==b&&(b=$.id,Sn=!0),Cs||S!==T){Te.buffers.depth.getReversed()?(he.copy(T.projectionMatrix),SR(he),ER(he),vt.setValue(U,"projectionMatrix",he)):vt.setValue(U,"projectionMatrix",T.projectionMatrix),vt.setValue(U,"viewMatrix",T.matrixWorldInverse);const cn=vt.map.cameraPosition;cn!==void 0&&cn.setValue(U,We.setFromMatrixPosition(T.matrixWorld)),nt.logarithmicDepthBuffer&&vt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Sn=!0,Yo=!0)}if(B.isSkinnedMesh){vt.setOptional(U,B,"bindMatrix"),vt.setOptional(U,B,"bindMatrixInverse");const en=B.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),vt.setValue(U,"boneTexture",en.boneTexture,He))}B.isBatchedMesh&&(vt.setOptional(U,B,"batchingTexture"),vt.setValue(U,"batchingTexture",B._matricesTexture,He),vt.setOptional(U,B,"batchingIdTexture"),vt.setValue(U,"batchingIdTexture",B._indirectTexture,He),vt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(U,"batchingColorTexture",B._colorsTexture,He));const Un=W.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ye.update(B,W,qn),(Sn||Fe.receiveShadow!==B.receiveShadow)&&(Fe.receiveShadow=B.receiveShadow,vt.setValue(U,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(In.envMap.value=Ee,In.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&F.environment!==null&&(In.envMapIntensity.value=F.environmentIntensity),Sn&&(vt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&KS(In,Yo),ce&&$.fog===!0&&K.refreshFogUniforms(In,ce),K.refreshMaterialUniforms(In,$,P,q,f.state.transmissionRenderTarget[T.id]),Ac.upload(U,wm(Fe),In,He)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ac.upload(U,wm(Fe),In,He),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vt.setValue(U,"center",B.center),vt.setValue(U,"modelViewMatrix",B.modelViewMatrix),vt.setValue(U,"normalMatrix",B.normalMatrix),vt.setValue(U,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const en=$.uniformsGroups;for(let cn=0,Gu=en.length;cn<Gu;cn++){const $r=en[cn];I.update($r,qn),I.bind($r,qn)}}return qn}function KS(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function QS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,W){const $=Le.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Le.get(T.texture).__webglTexture=F,Le.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:W,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const W=Le.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const ZS=U.createFramebuffer();this.setRenderTarget=function(T,F=0,W=0){R=T,C=F,M=W;let $=!0,B=null,ce=!1,_e=!1;if(T){const Ee=Le.get(T);if(Ee.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Ee.__webglFramebuffer===void 0)He.setupRenderTarget(T);else if(Ee.__hasExternalTextures)He.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ie=T.depthTexture;if(Ee.__boundDepthTexture!==Ie){if(Ie!==null&&Le.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const Be=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?B=Be[F][W]:B=Be[F],ce=!0):T.samples>0&&He.useMultisampledRTT(T)===!1?B=Le.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[W]:B=Be,D.copy(T.viewport),O.copy(T.scissor),z=T.scissorTest}else D.copy(Z).multiplyScalar(P).floor(),O.copy(ue).multiplyScalar(P).floor(),z=we;if(W!==0&&(B=ZS),Te.bindFramebuffer(U.FRAMEBUFFER,B)&&$&&Te.drawBuffers(T,B),Te.viewport(D),Te.scissor(O),Te.setScissorTest(z),ce){const Ee=Le.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,W)}else if(_e){const Ee=Le.get(T.texture),ke=F;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,W,ke)}else if(T!==null&&W!==0){const Ee=Le.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(T,F,W,$,B,ce,_e,Re=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){Te.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const ke=T.textures[Re],Be=ke.format,Ie=ke.type;if(!nt.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-$&&W>=0&&W<=T.height-B&&(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Re),U.readPixels(F,W,$,B,ge.convert(Be),ge.convert(Ie),ce))}finally{const ke=R!==null?Le.get(R).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,$,B,ce,_e,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee)if(F>=0&&F<=T.width-$&&W>=0&&W<=T.height-B){Te.bindFramebuffer(U.FRAMEBUFFER,Ee);const ke=T.textures[Re],Be=ke.format,Ie=ke.type;if(!nt.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Re),U.readPixels(F,W,$,B,ge.convert(Be),ge.convert(Ie),0);const at=R!==null?Le.get(R).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,at);const _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await yR(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.deleteBuffer(Ke),U.deleteSync(_t),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,W=0){const $=Math.pow(2,-W),B=Math.floor(T.image.width*$),ce=Math.floor(T.image.height*$),_e=F!==null?F.x:0,Re=F!==null?F.y:0;He.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,_e,Re,B,ce),Te.unbindTexture()};const JS=U.createFramebuffer(),eE=U.createFramebuffer();this.copyTextureToTexture=function(T,F,W=null,$=null,B=0,ce=null){ce===null&&(B!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let _e,Re,Ee,ke,Be,Ie,Ke,at,_t;const wt=T.isCompressedTexture?T.mipmaps[ce]:T.image;if(W!==null)_e=W.max.x-W.min.x,Re=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,ke=W.min.x,Be=W.min.y,Ie=W.isBox3?W.min.z:0;else{const Un=Math.pow(2,-B);_e=Math.floor(wt.width*Un),Re=Math.floor(wt.height*Un),T.isDataArrayTexture?Ee=wt.depth:T.isData3DTexture?Ee=Math.floor(wt.depth*Un):Ee=1,ke=0,Be=0,Ie=0}$!==null?(Ke=$.x,at=$.y,_t=$.z):(Ke=0,at=0,_t=0);const Je=ge.convert(F.format),Fe=ge.convert(F.type);let Ht;F.isData3DTexture?(He.setTexture3D(F,0),Ht=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),Ht=U.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),Ht=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const it=U.getParameter(U.UNPACK_ROW_LENGTH),qn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Cs=U.getParameter(U.UNPACK_SKIP_PIXELS),Sn=U.getParameter(U.UNPACK_SKIP_ROWS),Yo=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,wt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,wt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,Be),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie);const vt=T.isDataArrayTexture||T.isData3DTexture,In=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Un=Le.get(T),en=Le.get(F),cn=Le.get(Un.__renderTarget),Gu=Le.get(en.__renderTarget);Te.bindFramebuffer(U.READ_FRAMEBUFFER,cn.__webglFramebuffer),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gu.__webglFramebuffer);for(let $r=0;$r<Ee;$r++)vt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(T).__webglTexture,B,Ie+$r),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(F).__webglTexture,ce,_t+$r)),U.blitFramebuffer(ke,Be,_e,Re,Ke,at,_e,Re,U.DEPTH_BUFFER_BIT,U.NEAREST);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||Le.has(T)){const Un=Le.get(T),en=Le.get(F);Te.bindFramebuffer(U.READ_FRAMEBUFFER,JS),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,eE);for(let cn=0;cn<Ee;cn++)vt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Un.__webglTexture,B,Ie+cn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Un.__webglTexture,B),In?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,ce,_t+cn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,ce),B!==0?U.blitFramebuffer(ke,Be,_e,Re,Ke,at,_e,Re,U.COLOR_BUFFER_BIT,U.NEAREST):In?U.copyTexSubImage3D(Ht,ce,Ke,at,_t+cn,ke,Be,_e,Re):U.copyTexSubImage2D(Ht,ce,Ke,at,ke,Be,_e,Re);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else In?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Ht,ce,Ke,at,_t,_e,Re,Ee,Je,Fe,wt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ht,ce,Ke,at,_t,_e,Re,Ee,Je,wt.data):U.texSubImage3D(Ht,ce,Ke,at,_t,_e,Re,Ee,Je,Fe,wt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ce,Ke,at,_e,Re,Je,Fe,wt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ce,Ke,at,wt.width,wt.height,Je,wt.data):U.texSubImage2D(U.TEXTURE_2D,ce,Ke,at,_e,Re,Je,Fe,wt);U.pixelStorei(U.UNPACK_ROW_LENGTH,it),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Cs),U.pixelStorei(U.UNPACK_SKIP_ROWS,Sn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yo),ce===0&&F.generateMipmaps&&U.generateMipmap(Ht),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W=null,$=null,B=0){return po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,W,$,B)},this.initRenderTarget=function(T){Le.get(T).__webglFramebuffer===void 0&&He.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?He.setTextureCube(T,0):T.isData3DTexture?He.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?He.setTexture2DArray(T,0):He.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){C=0,M=0,R=null,Te.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const kD=()=>(L.useEffect(()=>{const t=document.getElementById("three-background");if(!t)return;const e=new XR,n=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new OD({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),t.appendChild(i.domElement);const r=new er,s=1e3,o=new Float32Array(s*3),a=new Float32Array(s*3);for(let u=0;u<s;u++){o[u*3]=(Math.random()-.5)*50,o[u*3+1]=(Math.random()-.5)*50,o[u*3+2]=(Math.random()-.5)*50;const p=new st;p.setHSL(.6+Math.random()*.2,.8,.6),a[u*3]=p.r,a[u*3+1]=p.g,a[u*3+2]=p.b}r.setAttribute("position",new Wn(o,3)),r.setAttribute("color",new Wn(a,3));const l=new VS({size:2,vertexColors:!0,transparent:!0,opacity:.6}),c=new KR(r,l);e.add(c),n.position.z=20;const d=()=>{requestAnimationFrame(d),c.rotation.x+=.001,c.rotation.y+=.002,i.render(e,n)};d();const h=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h),t.contains(i.domElement)&&t.removeChild(i.domElement),i.dispose()}},[]),w.jsx("div",{id:"three-background"})),BD=({formData:t,onInputChange:e})=>w.jsxs("div",{className:"bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50",children:[w.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2",children:"தனிப்பட்ட விவரங்கள் (Personal Details)"}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"பெயர் (Name)"}),w.jsx("input",{type:"text",value:t.name,onChange:n=>e("name",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"பாலினம் (Gender)"}),w.jsxs("select",{value:t.gender,onChange:n=>e("gender",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80",children:[w.jsx("option",{value:"",children:"தேர்ந்தெடுக்க (Select)"}),w.jsx("option",{value:"ஆண்",children:"ஆண் (Male)"}),w.jsx("option",{value:"பெண்",children:"பெண் (Female)"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"பிறந்த தேதி (Date of Birth)"}),w.jsx("input",{type:"date",value:t.dateOfBirth,onChange:n=>e("dateOfBirth",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"பிறந்த நேரம் (Time of Birth)"}),w.jsx("input",{type:"time",value:t.timeOfBirth,onChange:n=>e("timeOfBirth",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"பிறந்த ஊர் (Place of Birth)"}),w.jsx("input",{type:"text",value:t.placeOfBirth,onChange:n=>e("placeOfBirth",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"இருப்பிடம் (Residence)"}),w.jsx("input",{type:"text",value:t.residence,onChange:n=>e("residence",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"படிப்பு (Education)"}),w.jsx("input",{type:"text",value:t.education,onChange:n=>e("education",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"பணி விவரங்கள் (Job Details)"}),w.jsx("input",{type:"text",value:t.jobDetails,onChange:n=>e("jobDetails",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"வருமானம் (Income)"}),w.jsx("input",{type:"text",value:t.income,onChange:n=>e("income",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"ஜாதி (Caste)"}),w.jsx("input",{type:"text",value:t.caste,onChange:n=>e("caste",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"உயரம் (Height)"}),w.jsxs("div",{className:"flex gap-2 items-center",children:[w.jsx("input",{type:"number",placeholder:"CM",value:t.heightCm,onChange:n=>e("heightCm",n.target.value),className:"flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"}),w.jsxs("span",{className:"text-sm text-gray-600",children:[t.heightCm?(Number(t.heightCm)*.0328084).toFixed(2):"0.00"," ","ft"]})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"எடை (Weight)"}),w.jsx("input",{type:"number",value:t.weight,onChange:n=>e("weight",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"நிறம் (Color)"}),w.jsx("input",{type:"text",value:t.color,onChange:n=>e("color",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]})]})]}),zD=({formData:t,onInputChange:e})=>w.jsxs("div",{className:"bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100/50",children:[w.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2",children:"குடும்ப விவரங்கள் (Family Details)"}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"தந்தை பெயர் (Father's Name)"}),w.jsx("input",{type:"text",value:t.fatherName,onChange:n=>e("fatherName",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"தந்தை பணி விவரம் (Father's Job Details)"}),w.jsx("input",{type:"text",value:t.fatherJob,onChange:n=>e("fatherJob",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"தாய் பெயர் (Mother's Name)"}),w.jsx("input",{type:"text",value:t.motherName,onChange:n=>e("motherName",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"தாய் பணி விவரம் (Mother's Job Details)"}),w.jsx("input",{type:"text",value:t.motherJob,onChange:n=>e("motherJob",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"உடன் பிறந்தவர்கள் (Siblings)"}),w.jsx("input",{type:"text",value:t.siblings,onChange:n=>e("siblings",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"தொலைபேசி எண் (Phone Number)"}),w.jsx("input",{type:"text",value:t.phoneNumber,onChange:n=>e("phoneNumber",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"வாட்ஸ்ஆப் எண் (WhatsApp Number)"}),w.jsx("input",{type:"text",value:t.whatsappNumber,onChange:n=>e("whatsappNumber",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{className:"md:col-span-2",children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"முகவரி (Address)"}),w.jsx("textarea",{value:t.address,onChange:n=>e("address",n.target.value),rows:3,className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{className:"md:col-span-1",children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"சொத்து விவரம் (Asset Details)"}),w.jsx("textarea",{value:t.assetDetails,onChange:n=>e("assetDetails",n.target.value),rows:3,className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]})]})]}),HD=({formData:t})=>w.jsx("div",{className:"relative w-80 h-80 mx-auto bg-white border-2 border-gray-800 rounded-lg shadow-lg",children:w.jsxs("div",{className:"absolute inset-0 border-2 border-gray-800 rounded-lg",children:[w.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-800 bg-white px-2 py-1",children:"ராசி"}),w.jsx("div",{className:"absolute top-0 left-0 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house1}),w.jsx("div",{className:"absolute top-0 left-20 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house2}),w.jsx("div",{className:"absolute top-0 right-20 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house3}),w.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 border-l border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house4}),w.jsx("div",{className:"absolute top-20 left-0 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house5}),w.jsx("div",{className:"absolute top-20 right-0 w-20 h-20 border-l border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house8}),w.jsx("div",{className:"absolute bottom-20 left-0 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house6}),w.jsx("div",{className:"absolute bottom-20 right-0 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house7}),w.jsx("div",{className:"absolute bottom-0 right-20 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house9}),w.jsx("div",{className:"absolute bottom-0 left-20 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house10}),w.jsx("div",{className:"absolute bottom-0 left-0 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house11}),w.jsx("div",{className:"absolute bottom-0 right-0 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house12}),w.jsx("div",{className:"absolute top-[-20px] left-0 text-xs font-bold",children:"1"}),w.jsx("div",{className:"absolute top-[-20px] left-20 text-xs font-bold",children:"2"}),w.jsx("div",{className:"absolute top-[-20px] right-20 text-xs font-bold",children:"3"}),w.jsx("div",{className:"absolute top-[-20px] right-0 text-xs font-bold",children:"4"}),w.jsx("div",{className:"absolute top-20 left-[-20px] text-xs font-bold",children:"5"}),w.jsx("div",{className:"absolute bottom-20 left-[-20px] text-xs font-bold",children:"6"}),w.jsx("div",{className:"absolute bottom-20 right-[-20px] text-xs font-bold",children:"7"}),w.jsx("div",{className:"absolute top-20 right-[-20px] text-xs font-bold",children:"8"}),w.jsx("div",{className:"absolute bottom-[-20px] right-20 text-xs font-bold",children:"9"}),w.jsx("div",{className:"absolute bottom-[-20px] left-20 text-xs font-bold",children:"10"}),w.jsx("div",{className:"absolute bottom-[-20px] left-0 text-xs font-bold",children:"11"}),w.jsx("div",{className:"absolute bottom-[-20px] right-0 text-xs font-bold",children:"12"})]})}),VD=({formData:t})=>w.jsx("div",{className:"relative w-80 h-80 mx-auto bg-white border-2 border-gray-800 rounded-lg shadow-lg",children:w.jsxs("div",{className:"absolute inset-0 border-2 border-gray-800 rounded-lg",children:[w.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-800 bg-white px-2 py-1",children:"சுபம்"}),w.jsx("div",{className:"absolute top-0 left-0 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house13}),w.jsx("div",{className:"absolute top-0 left-20 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house14}),w.jsx("div",{className:"absolute top-0 right-20 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house15}),w.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 border-l border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house16}),w.jsx("div",{className:"absolute top-20 left-0 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house17}),w.jsx("div",{className:"absolute top-20 right-0 w-20 h-20 border-l border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house20}),w.jsx("div",{className:"absolute bottom-20 left-0 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house18}),w.jsx("div",{className:"absolute bottom-20 right-0 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house19}),w.jsx("div",{className:"absolute bottom-0 right-20 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house21}),w.jsx("div",{className:"absolute bottom-0 left-20 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house22}),w.jsx("div",{className:"absolute bottom-0 left-0 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house23}),w.jsx("div",{className:"absolute bottom-0 right-0 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center",children:t.house24}),w.jsx("div",{className:"absolute top-[-20px] left-0 text-xs font-bold",children:"13"}),w.jsx("div",{className:"absolute top-[-20px] left-20 text-xs font-bold",children:"14"}),w.jsx("div",{className:"absolute top-[-20px] right-20 text-xs font-bold",children:"15"}),w.jsx("div",{className:"absolute top-[-20px] right-0 text-xs font-bold",children:"16"}),w.jsx("div",{className:"absolute top-20 left-[-20px] text-xs font-bold",children:"17"}),w.jsx("div",{className:"absolute bottom-20 left-[-20px] text-xs font-bold",children:"18"}),w.jsx("div",{className:"absolute bottom-20 right-[-20px] text-xs font-bold",children:"19"}),w.jsx("div",{className:"absolute top-20 right-[-20px] text-xs font-bold",children:"20"}),w.jsx("div",{className:"absolute bottom-[-20px] right-20 text-xs font-bold",children:"21"}),w.jsx("div",{className:"absolute bottom-[-20px] left-20 text-xs font-bold",children:"22"}),w.jsx("div",{className:"absolute bottom-[-20px] left-0 text-xs font-bold",children:"23"}),w.jsx("div",{className:"absolute bottom-[-20px] right-0 text-xs font-bold",children:"24"})]})}),GD=({formData:t,onInputChange:e})=>w.jsxs("div",{className:"bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/50",children:[w.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2",children:"ஜாதக விவரங்கள் (Astrological Details)"}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"லக்னம் (Lagnam)"}),w.jsx("input",{type:"text",value:t.lagnam,onChange:n=>e("lagnam",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"ராசி - நட்சத்திரம் (Rasi - Nakshatram)"}),w.jsx("input",{type:"text",value:t.rasiNakshatram,onChange:n=>e("rasiNakshatram",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"தமிழ் தேதி (Tamil Date)"}),w.jsx("input",{type:"text",value:t.tamilDate,onChange:n=>e("tamilDate",n.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"})]})]}),w.jsxs("div",{className:"backdrop-blur-sm bg-white/90 rounded-2xl p-6 shadow-lg border border-white/30",children:[w.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-6 text-center",children:"ராசி கட்டம் (Rasi Kattam)"}),w.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",children:[1,2,3,4,5,6,7,8,9,10,11,12].map(n=>w.jsxs("div",{children:[w.jsxs("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:["House ",n]}),w.jsx("input",{type:"text",value:t[`house${n}`],onChange:i=>e(`house${n}`,i.target.value),className:"w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80",placeholder:`House ${n}`})]},n))}),w.jsx(HD,{formData:t}),w.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-6 text-center mt-8",children:"சுபம் கட்டம் (Subham Kattam)"}),w.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",children:[13,14,15,16,17,18,19,20,21,22,23,24].map(n=>w.jsxs("div",{children:[w.jsxs("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:["House ",n]}),w.jsx("input",{type:"text",value:t[`house${n}`],onChange:i=>e(`house${n}`,i.target.value),className:"w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80",placeholder:`House ${n}`})]},n))}),w.jsx(VD,{formData:t})]})]}),WD=()=>{const[t,e]=L.useState({name:"",gender:"",dateOfBirth:"",timeOfBirth:"",placeOfBirth:"",residence:"",education:"",jobDetails:"",income:"",caste:"",heightCm:"",weight:"",color:"",fatherName:"",fatherJob:"",siblings:"",phoneNumber:"",address:"",assetDetails:"",motherName:"",motherJob:"",whatsappNumber:"",lagnam:"",rasiNakshatram:"",tamilDate:"",house1:"",house2:"",house3:"",house4:"",house5:"",house6:"",house7:"",house8:"",house9:"",house10:"",house11:"",house12:"",house13:"",house14:"",house15:"",house16:"",house17:"",house18:"",house19:"",house20:"",house21:"",house22:"",house23:"",house24:""}),n=(o,a)=>{e(l=>({...l,[o]:a}))},i=()=>{const o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",o.onload=()=>{const{jsPDF:a}=window.jspdf;new a({orientation:"portrait",unit:"mm",format:"a4"}),fetch("https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil&display=swap").then(()=>{r()})},document.head.appendChild(o)},r=()=>{const o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",o.onload=()=>{const{jsPDF:a}=window.jspdf,l=window.html2canvas,c=document.createElement("div");c.style.position="fixed",c.style.top="-9999px",c.style.width="190mm",c.style.padding="10mm",c.style.backgroundColor="white",c.style.fontFamily="'Noto Sans Tamil', sans-serif";const d=document.createElement("link");d.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;700&display=swap",d.rel="stylesheet",document.head.appendChild(d),setTimeout(()=>{c.innerHTML=`
          <style>
            * { font-family: 'Noto Sans Tamil', sans-serif !important; }
            .title { font-size: 20px; font-weight: bold; text-align: center; margin-bottom: 10px; }
            .section { margin-bottom: 10px; }
            .section-title { font-size: 16px; font-weight: bold; margin-bottom: 5px; margin-top: 10px; }
            .detail { font-size: 12px; margin-bottom: 4px; line-height: 1.4; }
            .charts-container { display: flex; justify-content: space-between; width: 100%; margin: 20px 0; }
            .rasi-container { position: relative; width: 250px; height: 250px; transform: scale(0.8); transform-origin: top left; } /* Scaled down to fit */
            .rasi-chart { display: grid; grid-template: repeat(4, 80px) / repeat(4, 80px); gap: 2px; width: 100%; height: 100%; position: relative; } /* Box size increased to 80px */
            .cell { border: 1px solid black; padding: 5px; text-align: center; font-size: 12px; } /* Increased font size for readability */
            .center { grid-column: 2 / 4; grid-row: 2 / 4; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; }
            .house-1 { grid-column: 1; grid-row: 1; }
            .house-2 { grid-column: 2; grid-row: 1; }
            .house-3 { grid-column: 3; grid-row: 1; }
            .house-4 { grid-column: 4; grid-row: 1; }
            .house-5 { grid-column: 1; grid-row: 2; }
            .house-6 { grid-column: 1; grid-row: 3; }
            .house-7 { grid-column: 4; grid-row: 3; }
            .house-8 { grid-column: 4; grid-row: 2; }
            .house-9 { grid-column: 3; grid-row: 4; }
            .house-10 { grid-column: 2; grid-row: 4; }
            .house-11 { grid-column: 1; grid-row: 4; }
            .house-12 { grid-column: 4; grid-row: 4; }
            .subam { text-align: center; margin-top: 10px; font-size: 14px; }
          </style>
          
          <div class="title">ஜாதகக் குறிப்பு</div>
          
          <div class="section">
            <div class="detail">1. பெயர்        : ${t.name}</div>
            <div class="detail">2. பாலினம்       : ${t.gender}</div>
            <div class="detail">3. பிறந்த தேதி    : ${t.dateOfBirth}</div>
            <div class="detail">4. பிறந்த நேரம்   : ${t.timeOfBirth}</div>
            <div class="detail">5. பிறந்த ஊர்    : ${t.placeOfBirth}</div>
            <div class="detail">6. கல்வி : ${t.education}</div>
            <div class="detail">7. வேலை : ${t.jobDetails}</div>
            <div class="detail">8. நட்சத்திரம் : ${t.rasiNakshatram}</div>
              <div class="detail">9. ராசி : ${t.house1}</div>
              <div class="detail">10. லக்னம் : ${t.lagnam}</div>
              <div class="detail">11. இருப்பிடம்  : ${t.residence}</div>
            <div class="detail">12. வருமானம்  : ${t.income}</div>
            <div class="detail">13. இனம் : ${t.caste}</div>
            <div class="detail">14. உயரம் : ${t.heightCm} CM / ${t.heightCm?(parseFloat(t.heightCm)*.0328084).toFixed(2):"0.00"} ft</div>
            <div class="detail">15. எடை  : ${t.weight}</div>
            <div class="detail">16. நிறம்  : ${t.color}</div>
          </div>
          
          <div class="title">குடும்ப விவரம்</div>
          <div class="section">
            <div class="detail">17. தந்தை : ${t.fatherName}</div>
            <div class="detail">18. தந்தை : ${t.fatherJob}</div>
            <div class="detail">19. தாய் : ${t.motherName}</div>
            <div class="detail">20. தாய் : ${t.motherJob}</div>
            <div class="detail">21. உடன் பிறந்தவர் : ${t.siblings}</div>
            <div class="detail">22. முகவரி : ${t.address}</div>
            <div class="detail">23. தொலைபேசி எண்கள் : ${t.phoneNumber}</div>
             <div class="detail">24. சொத்து விவரம்  : ${t.assetDetails}</div>
          </div>
          
          <div class="title">ராசி சக்கரம்</div>
          <div class="section">
            <div class="charts-container">
              <div class="rasi-container">
                <div class="rasi-chart">
                  <div class="center">ராசி</div>
                  <div class="cell house-1">${t.house1||""}</div>
                  <div class="cell house-2">${t.house2||""}</div>
                  <div class="cell house-3">${t.house3||""}</div>
                  <div class="cell house-4">${t.house4||""}</div>
                  <div class="cell house-5">${t.house5||""}</div>
                  <div class="cell house-6">${t.house6||""}</div>
                  <div class="cell house-7">${t.house7||""}</div>
                  <div class="cell house-8">${t.house8||""}</div>
                  <div class="cell house-9">${t.house9||""}</div>
                  <div class="cell house-10">${t.house10||""}</div>
                  <div class="cell house-11">${t.house11||""}</div>
                  <div class="cell house-12">${t.house12||""}</div>
                </div>
              </div>
              <div class="rasi-container">
                <div class="rasi-chart">
                  <div class="center">சுபம்</div>
                  <div class="cell house-1">${t.house13||""}</div>
                  <div class="cell house-2">${t.house14||""}</div>
                  <div class="cell house-3">${t.house15||""}</div>
                  <div class="cell house-4">${t.house16||""}</div>
                  <div class="cell house-5">${t.house17||""}</div>
                  <div class="cell house-6">${t.house18||""}</div>
                  <div class="cell house-7">${t.house19||""}</div>
                  <div class="cell house-8">${t.house20||""}</div>
                  <div class="cell house-9">${t.house21||""}</div>
                  <div class="cell house-10">${t.house22||""}</div>
                  <div class="cell house-11">${t.house23||""}</div>
                  <div class="cell house-12">${t.house24||""}</div>
                </div>
              </div>
            </div>
          </div>
        `,document.body.appendChild(c),l(c,{scale:2,useCORS:!0,logging:!1}).then(h=>{const u=h.toDataURL("image/png"),p=new a("p","mm","a4"),g=210,x=297,m=h.height*g/h.width,f=x/m,v=m*Math.min(f,1),_=g*Math.min(f,1);p.addImage(u,"PNG",0,0,_,v),p.save(`${t.name||"biodata"}_tamil.pdf`),document.body.removeChild(c)})},1e3)},document.head.appendChild(o)},s=()=>{const o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",o.onload=()=>{const{jsPDF:a}=window.jspdf,l=window.html2canvas,c=document.createElement("div");c.style.position="fixed",c.style.top="-9999px",c.style.width="190mm",c.style.padding="10mm",c.style.backgroundColor="white",c.style.fontFamily="'Noto Sans', sans-serif";const d=document.createElement("link");d.href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap",d.rel="stylesheet",document.head.appendChild(d),setTimeout(()=>{c.innerHTML=`
          <style>
            * { font-family: 'Noto Sans', sans-serif !important; }
            .title { font-size: 20px; font-weight: bold; text-align: center; margin-bottom: 10px; }
            .section { margin-bottom: 10px; }
            .section-title { font-size: 16px; font-weight: bold; margin-bottom: 5px; margin-top: 10px; }
            .detail { font-size: 12px; margin-bottom: 4px; line-height: 1.4; }
            .charts-container { display: flex; justify-content: space-between; width: 100%; margin: 20px 0; }
            .rasi-container { position: relative; width: 250px; height: 250px; transform: scale(0.8); transform-origin: top left; }
            .rasi-chart { display: grid; grid-template: repeat(4, 80px) / repeat(4, 80px); gap: 2px; width: 100%; height: 100%; position: relative; }
            .cell { border: 1px solid black; padding: 5px; text-align: center; font-size: 12px; }
            .center { grid-column: 2 / 4; grid-row: 2 / 4; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; }
            .house-1 { grid-column: 1; grid-row: 1; }
            .house-2 { grid-column: 2; grid-row: 1; }
            .house-3 { grid-column: 3; grid-row: 1; }
            .house-4 { grid-column: 4; grid-row: 1; }
            .house-5 { grid-column: 1; grid-row: 2; }
            .house-6 { grid-column: 1; grid-row: 3; }
            .house-7 { grid-column: 4; grid-row: 3; }
            .house-8 { grid-column: 4; grid-row: 2; }
            .house-9 { grid-column: 3; grid-row: 4; }
            .house-10 { grid-column: 2; grid-row: 4; }
            .house-11 { grid-column: 1; grid-row: 4; }
            .house-12 { grid-column: 4; grid-row: 4; }
            .subam { text-align: center; margin-top: 10px; font-size: 14px; }
          </style>
          
          <div class="title">Jaathaga Kurippu (Horoscope Details)</div>
          
          <div class="section">
            <div class="detail">1. Name            : ${t.name}</div>
            <div class="detail">2. Gender          : ${t.gender}</div>
            <div class="detail">3. Date of Birth   : ${t.dateOfBirth}</div>
            <div class="detail">4. Time of Birth   : ${t.timeOfBirth}</div>
            <div class="detail">5. Place of Birth  : ${t.placeOfBirth}</div>
            <div class="detail">6. Education       : ${t.education}</div>
            <div class="detail">7. Job             : ${t.jobDetails}</div>
              <div class="detail">8. Star           : ${t.rasiNakshatram}</div>
                <div class="detail">9. Moon Sign      : ${t.house1}</div>
                <div class="detail">10. Ascendant      : ${t.lagnam}</div>
                <div class="detail">11. Residence       : ${t.residence}</div>
            <div class="detail">12. Income          : ${t.income}</div>
            <div class="detail">13. Caste          : ${t.caste}</div>
            <div class="detail">14. Height         : ${t.heightCm} CM / ${t.heightCm?(parseFloat(t.heightCm)*.0328084).toFixed(2):"0.00"} ft</div>
            <div class="detail">15. Weight         : ${t.weight}</div>
            <div class="detail">16. Color          : ${t.color}</div>
          </div>
          
          <div class="title">Kudumba Vivaram (Family Details)</div>
          <div class="section">
            <div class="detail">17. Father         : ${t.fatherName}</div>
            <div class="detail">18. Father Job     : ${t.fatherJob}</div>
            <div class="detail">19. Mother         : ${t.motherName}</div>
            <div class="detail">20. Mother Job     : ${t.motherJob}</div>
            <div class="detail">21. Siblings       : ${t.siblings}</div>
            <div class="detail">22. Address        : ${t.address}</div>
            <div class="detail">23. Phone Numbers  : ${t.phoneNumber}</div>
            <div class="detail">24. Asset Details  : ${t.assetDetails}</div>
          </div>
          
          <div class="title">Rasi Chakram (Zodiac Chart)</div>
          <div class="section">
            <div class="charts-container">
              <div class="rasi-container">
                <div class="rasi-chart">
                  <div class="center">Rasi</div>
                  <div class="cell house-1">${t.house1||""}</div>
                  <div class="cell house-2">${t.house2||""}</div>
                  <div class="cell house-3">${t.house3||""}</div>
                  <div class="cell house-4">${t.house4||""}</div>
                  <div class="cell house-5">${t.house5||""}</div>
                  <div class="cell house-6">${t.house6||""}</div>
                  <div class="cell house-7">${t.house7||""}</div>
                  <div class="cell house-8">${t.house8||""}</div>
                  <div class="cell house-9">${t.house9||""}</div>
                  <div class="cell house-10">${t.house10||""}</div>
                  <div class="cell house-11">${t.house11||""}</div>
                  <div class="cell house-12">${t.house12||""}</div>
                </div>
              </div>
              <div class="rasi-container">
                <div class="rasi-chart">
                  <div class="center">Subam</div>
                  <div class="cell house-1">${t.house13||""}</div>
                  <div class="cell house-2">${t.house14||""}</div>
                  <div class="cell house-3">${t.house15||""}</div>
                  <div class="cell house-4">${t.house16||""}</div>
                  <div class="cell house-5">${t.house17||""}</div>
                  <div class="cell house-6">${t.house18||""}</div>
                  <div class="cell house-7">${t.house19||""}</div>
                  <div class="cell house-8">${t.house20||""}</div>
                  <div class="cell house-9">${t.house21||""}</div>
                  <div class="cell house-10">${t.house22||""}</div>
                  <div class="cell house-11">${t.house23||""}</div>
                  <div class="cell house-12">${t.house24||""}</div>
                </div>
              </div>
            </div>
          </div>
        `,document.body.appendChild(c),l(c,{scale:2,useCORS:!0,logging:!1}).then(h=>{const u=h.toDataURL("image/png"),p=new a("p","mm","a4"),g=210,x=297,m=h.height*g/h.width,f=x/m,v=m*Math.min(f,1),_=g*Math.min(f,1);p.addImage(u,"PNG",0,0,_,v),p.save(`${t.name||"biodata"}_transliterated.pdf`),document.body.removeChild(c)})},1e3)},document.head.appendChild(o)};return w.jsx("div",{className:"min-h-screen py-8 px-4",children:w.jsxs("div",{className:"max-w-6xl mx-auto",children:[w.jsxs("div",{className:"text-center mb-8",children:[w.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2",children:"தமிழ் பயோடேட்டா ஜெனரேட்டர்"}),w.jsx("p",{className:"text-gray-600",children:"Tamil Biodata Generator"})]}),w.jsxs("div",{className:"backdrop-blur-md bg-white/90 rounded-3xl shadow-2xl border border-white/20 p-8 mb-8",children:[w.jsxs("div",{className:"space-y-8",children:[w.jsx(BD,{formData:t,onInputChange:n}),w.jsx(zD,{formData:t,onInputChange:n}),w.jsx(GD,{formData:t,onInputChange:n})]}),w.jsxs("div",{className:"text-center mt-8 space-y-4",children:[w.jsxs("button",{onClick:i,className:"group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 mr-2",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),w.jsx("svg",{className:"w-6 h-6 mr-2 relative z-10",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),w.jsx("span",{className:"relative z-10",children:"தமிழ் பயோடேட்டா PDF ஜெனரேட் செய்"})]}),w.jsxs("button",{onClick:s,className:"group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25",children:[w.jsx("svg",{className:"w-6 h-6 mr-2 relative z-10",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Generate English Transliterated PDF"]})]})]})]})})},jD=()=>w.jsxs("div",{className:"min-h-screen",children:[w.jsx(kD,{}),w.jsx(WD,{})]}),$D=()=>{const t=vS();return L.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),w.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:w.jsxs("div",{className:"text-center",children:[w.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),w.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),w.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},XD=()=>w.jsx("section",{className:"relative z-10 py-20",children:w.jsx("div",{className:"max-w-4xl mx-auto text-center px-4",children:w.jsxs("div",{className:"glass-morphism rounded-3xl p-12 mb-12 animate-float",children:[w.jsx("h2",{className:"text-5xl md:text-6xl font-black text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Create Beautiful Marriage Biodata"}),w.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Generate professional marriage biodata with traditional astrological charts in minutes. Download as PDF and share with your family and friends."}),w.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[w.jsx("span",{className:"px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-semibold",children:"✨ Tamil & English Support"}),w.jsx("span",{className:"px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full font-semibold",children:"📱 Mobile Responsive"}),w.jsx("span",{className:"px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full font-semibold",children:"📄 PDF Download"})]})]})})}),YD=()=>w.jsx(XD,{}),qD=()=>w.jsx(RC,{basename:"/marriage-biodata-generator",children:w.jsxs(TC,{children:[w.jsx(Sc,{path:"/",element:w.jsx(jD,{})}),w.jsx(Sc,{path:"/about",element:w.jsx(YD,{})}),w.jsx(Sc,{path:"*",element:w.jsx($D,{})})]})}),KD=()=>w.jsx("header",{className:"relative z-10",children:w.jsx("div",{className:"glass-dark",children:w.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:w.jsxs("div",{className:"flex justify-between items-center py-6",children:[w.jsxs("a",{href:"/",className:"flex items-center space-x-2",children:[w.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-glow",children:w.jsx("span",{className:"text-white font-bold text-xl",children:w.jsx("img",{src:"logo.png",alt:"Wedding Ring"})})}),w.jsxs("div",{children:[w.jsx("h1",{className:"text-2xl font-bold text-white",children:"திருமண பயோடேட்டா"}),w.jsx("p",{className:"text-blue-200 text-sm",children:"Marriage Biodata Generator"})]})]}),w.jsxs("nav",{className:"hidden md:flex space-x-8",children:[w.jsx("a",{href:"/",className:"text-white hover:text-blue-300 transition-colors duration-300",children:"Generator"}),w.jsx("a",{href:"about",className:"text-white hover:text-blue-300 transition-colors duration-300",children:"About"})]})]})})})}),QD=()=>{const[t,e]=L.useState(0),n=()=>{e(i=>i+1)};return L.useEffect(()=>{t===4&&T1.success(w.jsx("div",{className:"flex items-center gap-2",children:w.jsx("span",{children:"Built by Ram"})}))},[t]),w.jsxs("footer",{className:"relative mt-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-black/20"}),w.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"திருமண பயோடேட்டா"}),w.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Create beautiful and professional marriage biodata with traditional astrological charts. Perfect for matrimonial purposes with instant PDF generation."})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-lg font-semibold mb-4 text-blue-300",children:"Features"}),w.jsxs("ul",{className:"space-y-2 text-gray-300",children:[w.jsxs("li",{className:"flex items-center",children:[w.jsx("span",{className:"w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"}),"Complete biodata form"]}),w.jsxs("li",{className:"flex items-center",children:[w.jsx("span",{className:"w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"}),"Astrological chart generator"]}),w.jsxs("li",{className:"flex items-center",children:[w.jsx("span",{className:"w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"}),"Instant PDF download"]}),w.jsxs("li",{className:"flex items-center",children:[w.jsx("span",{className:"w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"}),"Mobile responsive design"]})]})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-lg font-semibold mb-4 text-purple-300",children:"Contact"}),w.jsxs("div",{className:"space-y-2 text-gray-300",children:[w.jsx("p",{children:"Built with modern web technologies"}),w.jsx("p",{children:"Designed for Tamil matrimonial traditions"}),w.jsx("p",{className:"text-sm text-gray-400 mt-4",children:"© 2025 Marriage Biodata Generator. All rights reserved."}),w.jsx("div",{className:"cursor-pointer",onClick:()=>n(),children:w.jsx("span",{className:"mr-1",children:"❤️ Made with React ❤️ "})})]})]})]})})]})},ZD=new GA,JD=()=>w.jsx(jA,{client:ZD,children:w.jsxs(SA,{children:[w.jsx(l1,{}),w.jsx(k1,{}),w.jsx(KD,{}),w.jsx(qD,{}),w.jsx(QD,{})]})});F_(document.getElementById("root")).render(w.jsx(JD,{}));
