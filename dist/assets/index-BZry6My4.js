(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Bf={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function sS(){if(c0)return Eo;c0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=e,Eo.jsx=i,Eo.jsxs=i,Eo}var u0;function rS(){return u0||(u0=1,Bf.exports=sS()),Bf.exports}var F=rS(),If={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function oS(){if(f0)return ie;f0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function v(O,at,St){this.props=O,this.context=at,this.refs=y,this.updater=St||T}v.prototype.isReactComponent={},v.prototype.setState=function(O,at){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,at,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=v.prototype;function N(O,at,St){this.props=O,this.context=at,this.refs=y,this.updater=St||T}var C=N.prototype=new D;C.constructor=N,w(C,v.prototype),C.isPureReactComponent=!0;var H=Array.isArray;function P(){}var z={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function U(O,at,St){var Z=St.ref;return{$$typeof:o,type:O,key:at,ref:Z!==void 0?Z:null,props:St}}function R(O,at){return U(O.type,at,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function lt(O){var at={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(St){return at[St]})}var ot=/\/+/g;function gt(O,at){return typeof O=="object"&&O!==null&&O.key!=null?lt(""+O.key):at.toString(36)}function _t(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(P,P):(O.status="pending",O.then(function(at){O.status==="pending"&&(O.status="fulfilled",O.value=at)},function(at){O.status==="pending"&&(O.status="rejected",O.reason=at)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,at,St,Z,ft){var Et=typeof O;(Et==="undefined"||Et==="boolean")&&(O=null);var xt=!1;if(O===null)xt=!0;else switch(Et){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(O.$$typeof){case o:case e:xt=!0;break;case x:return xt=O._init,B(xt(O._payload),at,St,Z,ft)}}if(xt)return ft=ft(O),xt=Z===""?"."+gt(O,0):Z,H(ft)?(St="",xt!=null&&(St=xt.replace(ot,"$&/")+"/"),B(ft,at,St,"",function(Kt){return Kt})):ft!=null&&(V(ft)&&(ft=R(ft,St+(ft.key==null||O&&O.key===ft.key?"":(""+ft.key).replace(ot,"$&/")+"/")+xt)),at.push(ft)),1;xt=0;var Ft=Z===""?".":Z+":";if(H(O))for(var Yt=0;Yt<O.length;Yt++)Z=O[Yt],Et=Ft+gt(Z,Yt),xt+=B(Z,at,St,Et,ft);else if(Yt=M(O),typeof Yt=="function")for(O=Yt.call(O),Yt=0;!(Z=O.next()).done;)Z=Z.value,Et=Ft+gt(Z,Yt++),xt+=B(Z,at,St,Et,ft);else if(Et==="object"){if(typeof O.then=="function")return B(_t(O),at,St,Z,ft);throw at=String(O),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return xt}function Q(O,at,St){if(O==null)return O;var Z=[],ft=0;return B(O,Z,"","",function(Et){return at.call(St,Et,ft++)}),Z}function K(O){if(O._status===-1){var at=O._result;at=at(),at.then(function(St){(O._status===0||O._status===-1)&&(O._status=1,O._result=St)},function(St){(O._status===0||O._status===-1)&&(O._status=2,O._result=St)}),O._status===-1&&(O._status=0,O._result=at)}if(O._status===1)return O._result.default;throw O._result}var yt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Tt={map:Q,forEach:function(O,at,St){Q(O,function(){at.apply(this,arguments)},St)},count:function(O){var at=0;return Q(O,function(){at++}),at},toArray:function(O){return Q(O,function(at){return at})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ie.Activity=g,ie.Children=Tt,ie.Component=v,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=N,ie.StrictMode=s,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ie.cache=function(O){return function(){return O.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(O,at,St){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Z=w({},O.props),ft=O.key;if(at!=null)for(Et in at.key!==void 0&&(ft=""+at.key),at)!X.call(at,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&at.ref===void 0||(Z[Et]=at[Et]);var Et=arguments.length-2;if(Et===1)Z.children=St;else if(1<Et){for(var xt=Array(Et),Ft=0;Ft<Et;Ft++)xt[Ft]=arguments[Ft+2];Z.children=xt}return U(O.type,ft,Z)},ie.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ie.createElement=function(O,at,St){var Z,ft={},Et=null;if(at!=null)for(Z in at.key!==void 0&&(Et=""+at.key),at)X.call(at,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ft[Z]=at[Z]);var xt=arguments.length-2;if(xt===1)ft.children=St;else if(1<xt){for(var Ft=Array(xt),Yt=0;Yt<xt;Yt++)Ft[Yt]=arguments[Yt+2];ft.children=Ft}if(O&&O.defaultProps)for(Z in xt=O.defaultProps,xt)ft[Z]===void 0&&(ft[Z]=xt[Z]);return U(O,Et,ft)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(O){return{$$typeof:h,render:O}},ie.isValidElement=V,ie.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:K}},ie.memo=function(O,at){return{$$typeof:p,type:O,compare:at===void 0?null:at}},ie.startTransition=function(O){var at=z.T,St={};z.T=St;try{var Z=O(),ft=z.S;ft!==null&&ft(St,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(P,yt)}catch(Et){yt(Et)}finally{at!==null&&St.types!==null&&(at.types=St.types),z.T=at}},ie.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ie.use=function(O){return z.H.use(O)},ie.useActionState=function(O,at,St){return z.H.useActionState(O,at,St)},ie.useCallback=function(O,at){return z.H.useCallback(O,at)},ie.useContext=function(O){return z.H.useContext(O)},ie.useDebugValue=function(){},ie.useDeferredValue=function(O,at){return z.H.useDeferredValue(O,at)},ie.useEffect=function(O,at){return z.H.useEffect(O,at)},ie.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ie.useId=function(){return z.H.useId()},ie.useImperativeHandle=function(O,at,St){return z.H.useImperativeHandle(O,at,St)},ie.useInsertionEffect=function(O,at){return z.H.useInsertionEffect(O,at)},ie.useLayoutEffect=function(O,at){return z.H.useLayoutEffect(O,at)},ie.useMemo=function(O,at){return z.H.useMemo(O,at)},ie.useOptimistic=function(O,at){return z.H.useOptimistic(O,at)},ie.useReducer=function(O,at,St){return z.H.useReducer(O,at,St)},ie.useRef=function(O){return z.H.useRef(O)},ie.useState=function(O){return z.H.useState(O)},ie.useSyncExternalStore=function(O,at,St){return z.H.useSyncExternalStore(O,at,St)},ie.useTransition=function(){return z.H.useTransition()},ie.version="19.2.8",ie}var d0;function uh(){return d0||(d0=1,If.exports=oS()),If.exports}var ye=uh(),Ff={exports:{}},bo={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function lS(){return h0||(h0=1,(function(o){function e(B,Q){var K=B.length;B.push(Q);t:for(;0<K;){var yt=K-1>>>1,Tt=B[yt];if(0<l(Tt,Q))B[yt]=Q,B[K]=Tt,K=yt;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Q=B[0],K=B.pop();if(K!==Q){B[0]=K;t:for(var yt=0,Tt=B.length,O=Tt>>>1;yt<O;){var at=2*(yt+1)-1,St=B[at],Z=at+1,ft=B[Z];if(0>l(St,K))Z<Tt&&0>l(ft,St)?(B[yt]=ft,B[Z]=K,yt=Z):(B[yt]=St,B[at]=K,yt=at);else if(Z<Tt&&0>l(ft,K))B[yt]=ft,B[Z]=K,yt=Z;else break t}}return Q}function l(B,Q){var K=B.sortIndex-Q.sortIndex;return K!==0?K:B.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,S=3,M=!1,T=!1,w=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var Q=i(p);Q!==null;){if(Q.callback===null)s(p);else if(Q.startTime<=B)s(p),Q.sortIndex=Q.expirationTime,e(m,Q);else break;Q=i(p)}}function H(B){if(w=!1,C(B),!T)if(i(m)!==null)T=!0,P||(P=!0,lt());else{var Q=i(p);Q!==null&&_t(H,Q.startTime-B)}}var P=!1,z=-1,X=5,U=-1;function R(){return y?!0:!(o.unstable_now()-U<X)}function V(){if(y=!1,P){var B=o.unstable_now();U=B;var Q=!0;try{t:{T=!1,w&&(w=!1,D(z),z=-1),M=!0;var K=S;try{e:{for(C(B),g=i(m);g!==null&&!(g.expirationTime>B&&R());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,S=g.priorityLevel;var Tt=yt(g.expirationTime<=B);if(B=o.unstable_now(),typeof Tt=="function"){g.callback=Tt,C(B),Q=!0;break e}g===i(m)&&s(m),C(B)}else s(m);g=i(m)}if(g!==null)Q=!0;else{var O=i(p);O!==null&&_t(H,O.startTime-B),Q=!1}}break t}finally{g=null,S=K,M=!1}Q=void 0}}finally{Q?lt():P=!1}}}var lt;if(typeof N=="function")lt=function(){N(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,gt=ot.port2;ot.port1.onmessage=V,lt=function(){gt.postMessage(null)}}else lt=function(){v(V,0)};function _t(B,Q){z=v(function(){B(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(B){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var K=S;S=Q;try{return B()}finally{S=K}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=S;S=B;try{return Q()}finally{S=K}},o.unstable_scheduleCallback=function(B,Q,K){var yt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?yt+K:yt):K=yt,B){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=K+Tt,B={id:x++,callback:Q,priorityLevel:B,startTime:K,expirationTime:Tt,sortIndex:-1},K>yt?(B.sortIndex=K,e(p,B),i(m)===null&&B===i(p)&&(w?(D(z),z=-1):w=!0,_t(H,K-yt))):(B.sortIndex=Tt,e(m,B),T||M||(T=!0,P||(P=!0,lt()))),B},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(B){var Q=S;return function(){var K=S;S=Q;try{return B.apply(this,arguments)}finally{S=K}}}})(Gf)),Gf}var p0;function cS(){return p0||(p0=1,Hf.exports=lS()),Hf.exports}var Vf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function uS(){if(m0)return An;m0=1;var o=uh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,x)},An.flushSync=function(m){var p=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=x,s.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},An.requestFormReset=function(m){s.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.8",An}var g0;function fS(){if(g0)return Vf.exports;g0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Vf.exports=uS(),Vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function dS(){if(_0)return bo;_0=1;var o=cS(),e=uh(),i=fS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,r=f;break}if(E===r){_=!0,r=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,r=c;break}if(E===r){_=!0,r=f,a=c;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case N:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var _t=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function O(t){return{current:t}}function at(t){0>Tt||(t.current=yt[Tt],yt[Tt]=null,Tt--)}function St(t,n){Tt++,yt[Tt]=t.current,t.current=n}var Z=O(null),ft=O(null),Et=O(null),xt=O(null);function Ft(t,n){switch(St(Et,n),St(ft,t),St(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ng(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ng(n),t=Lg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(Z),St(Z,t)}function Yt(){at(Z),at(ft),at(Et)}function Kt(t){t.memoizedState!==null&&St(xt,t);var n=Z.current,a=Lg(n,t.type);n!==a&&(St(ft,t),St(Z,a))}function ke(t){ft.current===t&&(at(Z),at(ft)),xt.current===t&&(at(xt),xo._currentValue=K)}var Ge,ue;function G(t){if(Ge===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ge=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ge+t+ue}var bn=!1;function ce(t,n){if(!t||bn)return"";bn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(rt){var et=rt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(rt){et=rt}t.call(mt.prototype)}}else{try{throw Error()}catch(rt){et=rt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(rt){if(rt&&et&&typeof rt.stack=="string")return[rt.stack,et.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var I=_.split(`
`),tt=E.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===tt.length)for(r=I.length-1,c=tt.length-1;1<=r&&0<=c&&I[r]!==tt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==tt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==tt[c]){var ut=`
`+I[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=c);break}}}finally{bn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?G(a):""}function he(t,n){switch(t.tag){case 26:case 27:case 5:return G(t.type);case 16:return G("Lazy");case 13:return t.child!==n&&n!==null?G("Suspense Fallback"):G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return ce(t.type,!1);case 11:return ce(t.type.render,!1);case 1:return ce(t.type,!0);case 31:return G("Activity");default:return""}}function Xt(t){try{var n="",a=null;do n+=he(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ue=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,L=o.unstable_cancelCallback,b=o.unstable_shouldYield,nt=o.unstable_requestPaint,dt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,pe=o.unstable_IdlePriority,At=o.log,Bt=o.unstable_setDisableYieldValue,Zt=null,Vt=null;function Ot(t){if(typeof At=="function"&&Bt(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Zt,t)}catch{}}var Jt=Math.clz32?Math.clz32:j,ae=Math.log,Oe=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(ae(t)/Oe|0)|0}var Rt=256,ct=262144,vt=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Ct(r):(_&=E,_!==0?c=Ct(_):a||(a=E&~t,a!==0&&(c=Ct(a))))):(E=r&~f,E!==0?c=Ct(E):_!==0?c=Ct(_):a||(a=r&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function qe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var t=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),t}function be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _n(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function di(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,I=t.expirationTimes,tt=t.hiddenUpdates;for(a=_&~a;0<a;){var ut=31-Jt(a),mt=1<<ut;E[ut]=0,I[ut]=-1;var et=tt[ut];if(et!==null)for(tt[ut]=null,ut=0;ut<et.length;ut++){var rt=et[ut];rt!==null&&(rt.lane&=-536870913)}a&=~mt}r!==0&&Dr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Dr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Jt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ur(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Jt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ti(t,n){var a=n&-n;return a=(a&42)!==0?1:Xa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nr(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:n0(t.type))}function Wa(t,n){var a=Q.p;try{return Q.p=t,n()}finally{Q.p=a}}var hi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+hi,vn="__reactProps$"+hi,Oi="__reactContainer$"+hi,Lr="__reactEvents$"+hi,Dc="__reactListeners$"+hi,Uc="__reactHandles$"+hi,Fo="__reactResources$"+hi,ja="__reactMarker$"+hi;function Or(t){delete t[Ke],delete t[vn],delete t[Lr],delete t[Dc],delete t[Uc]}function A(t){var n=t[Ke];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Oi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Hg(t);t!==null;){if(a=t[Ke])return a;t=Hg(t)}return n}t=a,a=t.parentNode}return null}function q(t){if(t=t[Ke]||t[Oi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function it(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function st(t){var n=t[Fo];return n||(n=t[Fo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(t){t[ja]=!0}var bt=new Set,Ut={};function Lt(t,n){zt(t,n),zt(t+"Capture",n)}function zt(t,n){for(Ut[t]=n,t=0;t<n.length;t++)bt.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Wt={};function _e(t){return Ue.call(Wt,t)?!0:Ue.call(ee,t)?!1:te.test(t)?Wt[t]=!0:(ee[t]=!0,!1)}function ve(t,n,a){if(_e(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Te(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Me(t){if(!t._valueTracker){var n=qt(t)?"checked":"value";t._valueTracker=cn(t,n,""+t[n])}}function Ln(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=qt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wn=/[\n"\\]/g;function hn(t){return t.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(t,n,a,r,c,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,_,ne(n)):a!=null?Tn(t,_,ne(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ne(E):t.removeAttribute("name")}function Dn(t,n,a,r,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Me(t);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Me(t)}function Tn(t,n,a){n==="number"&&pi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qe(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function xn(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function Ts(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(_t(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Me(t)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var tv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wh(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||tv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Dh(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&wh(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&wh(t,f,n[f])}function Nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(t){return nv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Lc=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var As=null,Rs=null;function Uh(t){var n=q(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[vn]||null;if(!c)throw Error(s(90));ze(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Ln(r)}break t;case"textarea":xn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}}}var zc=!1;function Nh(t,n,a){if(zc)return t(n,a);zc=!0;try{var r=t(n);return r}finally{if(zc=!1,(As!==null||Rs!==null)&&(Rl(),As&&(n=As,t=Rs,Rs=As=null,Uh(n),t)))for(n=0;n<t.length;n++)Uh(t[n])}}function zr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[vn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=!1;if(Pi)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{Pc=!1}var ua=null,Bc=null,Go=null;function Lh(){if(Go)return Go;var t,n=Bc,a=n.length,r,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return Go=c.slice(t,1<r?1-r:void 0)}function Vo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Oh(){return!1}function zn(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:Oh,this.isPropagationStopped=Oh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=zn(qa),Br=g({},qa,{view:0,detail:0}),iv=zn(Br),Ic,Fc,Ir,Wo=g({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ir&&(Ir&&t.type==="mousemove"?(Ic=t.screenX-Ir.screenX,Fc=t.screenY-Ir.screenY):Fc=Ic=0,Ir=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),zh=zn(Wo),av=g({},Wo,{dataTransfer:0}),sv=zn(av),rv=g({},Br,{relatedTarget:0}),Hc=zn(rv),ov=g({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),lv=zn(ov),cv=g({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uv=zn(cv),fv=g({},qa,{data:0}),Ph=zn(fv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=pv[t])?!!n[t]:!1}function Gc(){return mv}var gv=g({},Br,{key:function(t){if(t.key){var n=dv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_v=zn(gv),vv=g({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=zn(vv),xv=g({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Sv=zn(xv),yv=g({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=zn(yv),Ev=g({},Wo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=zn(Ev),Tv=g({},qa,{newState:0,oldState:0}),Av=zn(Tv),Rv=[9,13,27,32],Vc=Pi&&"CompositionEvent"in window,Fr=null;Pi&&"documentMode"in document&&(Fr=document.documentMode);var Cv=Pi&&"TextEvent"in window&&!Fr,Ih=Pi&&(!Vc||Fr&&8<Fr&&11>=Fr),Fh=" ",Hh=!1;function Gh(t,n){switch(t){case"keyup":return Rv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function wv(t,n){switch(t){case"compositionend":return Vh(n);case"keypress":return n.which!==32?null:(Hh=!0,Fh);case"textInput":return t=n.data,t===Fh&&Hh?null:t;default:return null}}function Dv(t,n){if(Cs)return t==="compositionend"||!Vc&&Gh(t,n)?(t=Lh(),Go=Bc=ua=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ih&&n.locale!=="ko"?null:n.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Uv[t.type]:n==="textarea"}function Xh(t,n,a,r){As?Rs?Rs.push(r):Rs=[r]:As=r,n=Ol(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Hr=null,Gr=null;function Nv(t){Ag(t,0)}function jo(t){var n=it(t);if(Ln(n))return t}function Wh(t,n){if(t==="change")return n}var jh=!1;if(Pi){var kc;if(Pi){var Xc="oninput"in document;if(!Xc){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Xc=typeof qh.oninput=="function"}kc=Xc}else kc=!1;jh=kc&&(!document.documentMode||9<document.documentMode)}function Yh(){Hr&&(Hr.detachEvent("onpropertychange",Zh),Gr=Hr=null)}function Zh(t){if(t.propertyName==="value"&&jo(Gr)){var n=[];Xh(n,Gr,t,Oc(t)),Nh(Nv,n)}}function Lv(t,n,a){t==="focusin"?(Yh(),Hr=n,Gr=a,Hr.attachEvent("onpropertychange",Zh)):t==="focusout"&&Yh()}function Ov(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Gr)}function zv(t,n){if(t==="click")return jo(n)}function Pv(t,n){if(t==="input"||t==="change")return jo(n)}function Bv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Bv;function Vr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ue.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function Kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qh(t,n){var a=Kh(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kh(a)}}function Jh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Jh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function $h(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pi(t.document)}return n}function Wc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Iv=Pi&&"documentMode"in document&&11>=document.documentMode,ws=null,jc=null,kr=null,qc=!1;function tp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||ws==null||ws!==pi(r)||(r=ws,"selectionStart"in r&&Wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Vr(kr,r)||(kr=r,r=Ol(jc,"onSelect"),0<r.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ws)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ds={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Yc={},ep={};Pi&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Za(t){if(Yc[t])return Yc[t];if(!Ds[t])return t;var n=Ds[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ep)return Yc[t]=n[a];return t}var np=Za("animationend"),ip=Za("animationiteration"),ap=Za("animationstart"),Fv=Za("transitionrun"),Hv=Za("transitionstart"),Gv=Za("transitioncancel"),sp=Za("transitionend"),rp=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function mi(t,n){rp.set(t,n),Lt(n,[t])}var qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Us=0,Kc=0;function Yo(){for(var t=Us,n=Kc=Us=0;n<t;){var a=ni[n];ni[n++]=null;var r=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&op(a,c,f)}}function Zo(t,n,a,r){ni[Us++]=t,ni[Us++]=n,ni[Us++]=a,ni[Us++]=r,Kc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Qc(t,n,a,r){return Zo(t,n,a,r),Ko(t)}function Ka(t,n){return Zo(t,null,null,n),Ko(t)}function op(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Jt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Ko(t){if(50<fo)throw fo=0,of=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ns={};function Vv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new Vv(t,n,a,r)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Qo(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")Jc(t)&&(_=1);else if(typeof t=="string")_=qx(t,a,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=jn(31,a,n,c),t.elementType=U,t.lanes=f,t;case w:return Qa(a.children,c,f,n);case y:_=8,c|=24;break;case v:return t=jn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case H:return t=jn(13,a,n,c),t.elementType=H,t.lanes=f,t;case P:return t=jn(19,a,n,c),t.elementType=P,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:_=10;break t;case D:_=9;break t;case C:_=11;break t;case z:_=14;break t;case X:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Qa(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function $c(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function cp(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function tu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var up=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=up.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xt(n)},up.set(t,n),n)}return{value:t,source:n,stack:Xt(n)}}var Ls=[],Os=0,Jo=null,Xr=0,ai=[],si=0,fa=null,Ai=1,Ri="";function Ii(t,n){Ls[Os++]=Xr,Ls[Os++]=Jo,Jo=t,Xr=n}function fp(t,n,a){ai[si++]=Ai,ai[si++]=Ri,ai[si++]=fa,fa=t;var r=Ai;t=Ri;var c=32-Jt(r)-1;r&=~(1<<c),a+=1;var f=32-Jt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ai=1<<32-Jt(n)+c|a<<c|r,Ri=f+t}else Ai=1<<f|a<<c|r,Ri=t}function eu(t){t.return!==null&&(Ii(t,1),fp(t,1,0))}function nu(t){for(;t===Jo;)Jo=Ls[--Os],Ls[Os]=null,Xr=Ls[--Os],Ls[Os]=null;for(;t===fa;)fa=ai[--si],ai[si]=null,Ri=ai[--si],ai[si]=null,Ai=ai[--si],ai[si]=null}function dp(t,n){ai[si++]=Ai,ai[si++]=Ri,ai[si++]=fa,Ai=n.id,Ri=n.overflow,fa=t}var Sn=null,We=null,xe=!1,da=null,ri=!1,iu=Error(s(519));function ha(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wr(ii(n,t)),iu}function hp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ke]=t,n[vn]=r,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)de(po[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Dn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Ts(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Dg(n.textContent,a)?(r.popover!=null&&(de("beforetoggle",n),de("toggle",n)),r.onScroll!=null&&de("scroll",n),r.onScrollEnd!=null&&de("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||ha(t,!0)}function pp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:Sn=Sn.return}}function zs(t){if(t!==Sn)return!1;if(!xe)return pp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Mf(t.type,t.memoizedProps)),a=!a),a&&We&&ha(t),pp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=Fg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=Fg(t)}else n===27?(n=We,Ra(t.type)?(t=Rf,Rf=null,We=t):We=n):We=Sn?li(t.stateNode.nextSibling):null;return!0}function Ja(){We=Sn=null,xe=!1}function au(){var t=da;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),da=null),t}function Wr(t){da===null?da=[t]:da.push(t)}var su=O(null),$a=null,Fi=null;function pa(t,n,a){St(su,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=su.current,at(su)}function ru(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function ou(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var I=0;I<n.length;I++)if(E.context===n[I]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ru(f.return,a,t),r||(_=null);break t}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),ru(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Ps(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=c.type;Wn(c.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(c===xt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(xo):t=[xo])}c=c.return}t!==null&&ou(n,t,a,r),n.flags|=262144}function $o(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ts(t){$a=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return mp($a,t)}function tl(t,n){return $a===null&&ts(t),mp(t,n)}function mp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(s(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var kv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Xv=o.unstable_scheduleCallback,Wv=o.unstable_NormalPriority,nn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lu(){return{controller:new kv,data:new Map,refCount:0}}function jr(t){t.refCount--,t.refCount===0&&Xv(Wv,function(){t.controller.abort()})}var qr=null,cu=0,Bs=0,Is=null;function jv(t,n){if(qr===null){var a=qr=[];cu=0,Bs=hf(),Is={status:"pending",value:void 0,then:function(r){a.push(r)}}}return cu++,n.then(gp,gp),n}function gp(){if(--cu===0&&qr!==null){Is!==null&&(Is.status="fulfilled");var t=qr;qr=null,Bs=0,Is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function qv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var _p=B.S;B.S=function(t,n){tg=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jv(t,n),_p!==null&&_p(t,n)};var es=O(null);function uu(){var t=es.current;return t!==null?t:Ve.pooledCache}function el(t,n){n===null?St(es,es.current):St(es,n.pool)}function vp(){var t=uu();return t===null?null:{parent:nn._currentValue,pool:t}}var Fs=Error(s(460)),fu=Error(s(474)),nl=Error(s(542)),il={then:function(){}};function xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t}throw is=n,Fs}}function ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(is=a,Fs):a}}var is=null;function yp(){if(is===null)throw Error(s(459));var t=is;return is=null,t}function Mp(t){if(t===Fs||t===nl)throw Error(s(483))}var Hs=null,Yr=0;function al(t){var n=Yr;return Yr+=1,Hs===null&&(Hs=[]),Sp(Hs,t,n)}function Zr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function sl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ep(t){function n(Y,k){if(t){var $=Y.deletions;$===null?(Y.deletions=[k],Y.flags|=16):$.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function r(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Bi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<k?(Y.flags|=67108866,k):$):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,k,$,ht){return k===null||k.tag!==6?(k=$c($,Y.mode,ht),k.return=Y,k):(k=c(k,$),k.return=Y,k)}function I(Y,k,$,ht){var jt=$.type;return jt===w?ut(Y,k,$.props.children,ht,$.key):k!==null&&(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===X&&ns(jt)===k.type)?(k=c(k,$.props),Zr(k,$),k.return=Y,k):(k=Qo($.type,$.key,$.props,null,Y.mode,ht),Zr(k,$),k.return=Y,k)}function tt(Y,k,$,ht){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=tu($,Y.mode,ht),k.return=Y,k):(k=c(k,$.children||[]),k.return=Y,k)}function ut(Y,k,$,ht,jt){return k===null||k.tag!==7?(k=Qa($,Y.mode,ht,jt),k.return=Y,k):(k=c(k,$),k.return=Y,k)}function mt(Y,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=$c(""+k,Y.mode,$),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=Qo(k.type,k.key,k.props,null,Y.mode,$),Zr($,k),$.return=Y,$;case T:return k=tu(k,Y.mode,$),k.return=Y,k;case X:return k=ns(k),mt(Y,k,$)}if(_t(k)||lt(k))return k=Qa(k,Y.mode,$,null),k.return=Y,k;if(typeof k.then=="function")return mt(Y,al(k),$);if(k.$$typeof===N)return mt(Y,tl(Y,k),$);sl(Y,k)}return null}function et(Y,k,$,ht){var jt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return jt!==null?null:E(Y,k,""+$,ht);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===jt?I(Y,k,$,ht):null;case T:return $.key===jt?tt(Y,k,$,ht):null;case X:return $=ns($),et(Y,k,$,ht)}if(_t($)||lt($))return jt!==null?null:ut(Y,k,$,ht,null);if(typeof $.then=="function")return et(Y,k,al($),ht);if($.$$typeof===N)return et(Y,k,tl(Y,$),ht);sl(Y,$)}return null}function rt(Y,k,$,ht,jt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get($)||null,E(k,Y,""+ht,jt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return Y=Y.get(ht.key===null?$:ht.key)||null,I(k,Y,ht,jt);case T:return Y=Y.get(ht.key===null?$:ht.key)||null,tt(k,Y,ht,jt);case X:return ht=ns(ht),rt(Y,k,$,ht,jt)}if(_t(ht)||lt(ht))return Y=Y.get($)||null,ut(k,Y,ht,jt,null);if(typeof ht.then=="function")return rt(Y,k,$,al(ht),jt);if(ht.$$typeof===N)return rt(Y,k,$,tl(k,ht),jt);sl(k,ht)}return null}function It(Y,k,$,ht){for(var jt=null,Ae=null,Ht=k,re=k=0,ge=null;Ht!==null&&re<$.length;re++){Ht.index>re?(ge=Ht,Ht=null):ge=Ht.sibling;var Re=et(Y,Ht,$[re],ht);if(Re===null){Ht===null&&(Ht=ge);break}t&&Ht&&Re.alternate===null&&n(Y,Ht),k=f(Re,k,re),Ae===null?jt=Re:Ae.sibling=Re,Ae=Re,Ht=ge}if(re===$.length)return a(Y,Ht),xe&&Ii(Y,re),jt;if(Ht===null){for(;re<$.length;re++)Ht=mt(Y,$[re],ht),Ht!==null&&(k=f(Ht,k,re),Ae===null?jt=Ht:Ae.sibling=Ht,Ae=Ht);return xe&&Ii(Y,re),jt}for(Ht=r(Ht);re<$.length;re++)ge=rt(Ht,Y,re,$[re],ht),ge!==null&&(t&&ge.alternate!==null&&Ht.delete(ge.key===null?re:ge.key),k=f(ge,k,re),Ae===null?jt=ge:Ae.sibling=ge,Ae=ge);return t&&Ht.forEach(function(Na){return n(Y,Na)}),xe&&Ii(Y,re),jt}function Qt(Y,k,$,ht){if($==null)throw Error(s(151));for(var jt=null,Ae=null,Ht=k,re=k=0,ge=null,Re=$.next();Ht!==null&&!Re.done;re++,Re=$.next()){Ht.index>re?(ge=Ht,Ht=null):ge=Ht.sibling;var Na=et(Y,Ht,Re.value,ht);if(Na===null){Ht===null&&(Ht=ge);break}t&&Ht&&Na.alternate===null&&n(Y,Ht),k=f(Na,k,re),Ae===null?jt=Na:Ae.sibling=Na,Ae=Na,Ht=ge}if(Re.done)return a(Y,Ht),xe&&Ii(Y,re),jt;if(Ht===null){for(;!Re.done;re++,Re=$.next())Re=mt(Y,Re.value,ht),Re!==null&&(k=f(Re,k,re),Ae===null?jt=Re:Ae.sibling=Re,Ae=Re);return xe&&Ii(Y,re),jt}for(Ht=r(Ht);!Re.done;re++,Re=$.next())Re=rt(Ht,Y,re,Re.value,ht),Re!==null&&(t&&Re.alternate!==null&&Ht.delete(Re.key===null?re:Re.key),k=f(Re,k,re),Ae===null?jt=Re:Ae.sibling=Re,Ae=Re);return t&&Ht.forEach(function(aS){return n(Y,aS)}),xe&&Ii(Y,re),jt}function Ie(Y,k,$,ht){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var jt=$.key;k!==null;){if(k.key===jt){if(jt=$.type,jt===w){if(k.tag===7){a(Y,k.sibling),ht=c(k,$.props.children),ht.return=Y,Y=ht;break t}}else if(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===X&&ns(jt)===k.type){a(Y,k.sibling),ht=c(k,$.props),Zr(ht,$),ht.return=Y,Y=ht;break t}a(Y,k);break}else n(Y,k);k=k.sibling}$.type===w?(ht=Qa($.props.children,Y.mode,ht,$.key),ht.return=Y,Y=ht):(ht=Qo($.type,$.key,$.props,null,Y.mode,ht),Zr(ht,$),ht.return=Y,Y=ht)}return _(Y);case T:t:{for(jt=$.key;k!==null;){if(k.key===jt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Y,k.sibling),ht=c(k,$.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}ht=tu($,Y.mode,ht),ht.return=Y,Y=ht}return _(Y);case X:return $=ns($),Ie(Y,k,$,ht)}if(_t($))return It(Y,k,$,ht);if(lt($)){if(jt=lt($),typeof jt!="function")throw Error(s(150));return $=jt.call($),Qt(Y,k,$,ht)}if(typeof $.then=="function")return Ie(Y,k,al($),ht);if($.$$typeof===N)return Ie(Y,k,tl(Y,$),ht);sl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Y,k.sibling),ht=c(k,$),ht.return=Y,Y=ht):(a(Y,k),ht=$c($,Y.mode,ht),ht.return=Y,Y=ht),_(Y)):a(Y,k)}return function(Y,k,$,ht){try{Yr=0;var jt=Ie(Y,k,$,ht);return Hs=null,jt}catch(Ht){if(Ht===Fs||Ht===nl)throw Ht;var Ae=jn(29,Ht,null,Y.mode);return Ae.lanes=ht,Ae.return=Y,Ae}finally{}}}var as=Ep(!0),bp=Ep(!1),ma=!1;function du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Ko(t),op(t,null,a),n}return Zo(t,r,n,a),Ko(t)}function Kr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ur(t,a)}}function pu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var mu=!1;function Qr(){if(mu){var t=Is;if(t!==null)throw t}}function Jr(t,n,a,r){mu=!1;var c=t.updateQueue;ma=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var I=E,tt=I.next;I.next=null,_===null?f=tt:_.next=tt,_=I;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==_&&(E===null?ut.firstBaseUpdate=tt:E.next=tt,ut.lastBaseUpdate=I))}if(f!==null){var mt=c.baseState;_=0,ut=tt=I=null,E=f;do{var et=E.lane&-536870913,rt=et!==E.lane;if(rt?(me&et)===et:(r&et)===et){et!==0&&et===Bs&&(mu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var It=t,Qt=E;et=n;var Ie=a;switch(Qt.tag){case 1:if(It=Qt.payload,typeof It=="function"){mt=It.call(Ie,mt,et);break t}mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Qt.payload,et=typeof It=="function"?It.call(Ie,mt,et):It,et==null)break t;mt=g({},mt,et);break t;case 2:ma=!0}}et=E.callback,et!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[et]:rt.push(et))}else rt={lane:et,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(tt=ut=rt,I=mt):ut=ut.next=rt,_|=et;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ut===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=tt,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ma|=_,t.lanes=_,t.memoizedState=mt}}function Tp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Ap(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Tp(a[t],n)}var Gs=O(null),rl=O(0);function Rp(t,n){t=Zi,St(rl,t),St(Gs,n),Zi=t|n.baseLanes}function gu(){St(rl,Zi),St(Gs,Gs.current)}function _u(){Zi=rl.current,at(Gs),at(rl)}var qn=O(null),oi=null;function va(t){var n=t.alternate;St(tn,tn.current&1),St(qn,t),oi===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(oi=t)}function vu(t){St(tn,tn.current),St(qn,t),oi===null&&(oi=t)}function Cp(t){t.tag===22?(St(tn,tn.current),St(qn,t),oi===null&&(oi=t)):xa()}function xa(){St(tn,tn.current),St(qn,qn.current)}function Yn(t){at(qn),oi===t&&(oi=null),at(tn)}var tn=O(0);function ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Tf(a)||Af(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,se=null,Pe=null,an=null,ll=!1,Vs=!1,ss=!1,cl=0,$r=0,ks=null,Yv=0;function Je(){throw Error(s(321))}function xu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Su(t,n,a,r,c,f){return Gi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?fm:zu,ss=!1,f=a(r,c),ss=!1,Vs&&(f=Dp(n,a,r,c)),wp(t),f}function wp(t){B.H=no;var n=Pe!==null&&Pe.next!==null;if(Gi=0,an=Pe=se=null,ll=!1,$r=0,ks=null,n)throw Error(s(300));t===null||sn||(t=t.dependencies,t!==null&&$o(t)&&(sn=!0))}function Dp(t,n,a,r){se=t;var c=0;do{if(Vs&&(ks=null),$r=0,Vs=!1,25<=c)throw Error(s(301));if(c+=1,an=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=dm,f=n(a,r)}while(Vs);return f}function Zv(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(se.flags|=1024),n}function yu(){var t=cl!==0;return cl=0,t}function Mu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Eu(t){if(ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ll=!1}Gi=0,an=Pe=se=null,Vs=!1,$r=cl=0,ks=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?se.memoizedState=an=t:an=an.next=t,an}function en(){if(Pe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=an===null?se.memoizedState:an.next;if(n!==null)an=n,Pe=t;else{if(t===null)throw se.alternate===null?Error(s(467)):Error(s(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},an===null?se.memoizedState=an=t:an=an.next=t}return an}function ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$r;return $r+=1,ks===null&&(ks=[]),t=Sp(ks,t,n),n=se,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?fm:zu),t}function fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===N)return yn(t)}throw Error(s(438,String(t)))}function bu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ul(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function dl(t){var n=en();return Tu(n,Pe,t)}function Tu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=_=null,I=null,tt=n,ut=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(me&mt)===mt:(Gi&mt)===mt){var et=tt.revertLane;if(et===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===Bs&&(ut=!0);else if((Gi&et)===et){tt=tt.next,et===Bs&&(ut=!0);continue}else mt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(E=I=mt,_=f):I=I.next=mt,se.lanes|=et,Ma|=et;mt=tt.action,ss&&a(f,mt),f=tt.hasEagerState?tt.eagerState:a(f,mt)}else et={lane:mt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(E=I=et,_=f):I=I.next=et,se.lanes|=mt,Ma|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?_=f:I.next=E,!Wn(f,t.memoizedState)&&(sn=!0,ut&&(a=Is,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Au(t){var n=en(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Wn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Up(t,n,a){var r=se,c=en(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Wn((Pe||c).memoizedState,a);if(_&&(c.memoizedState=a,sn=!0),c=c.queue,wu(Op.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||an!==null&&an.memoizedState.tag&1){if(r.flags|=2048,Xs(9,{destroy:void 0},Lp.bind(null,r,c,a,n),null),Ve===null)throw Error(s(349));f||(Gi&127)!==0||Np(r,n,a)}return a}function Np(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=ul(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Lp(t,n,a,r){n.value=a,n.getSnapshot=r,zp(n)&&Pp(t)}function Op(t,n,a){return a(function(){zp(n)&&Pp(t)})}function zp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Pp(t){var n=Ka(t,2);n!==null&&Hn(n,t,2)}function Ru(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),ss){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function Bp(t,n,a,r){return t.baseState=a,Tu(t,Pe,typeof r=="function"?r:Vi)}function Kv(t,n,a,r,c){if(ml(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Ip(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ip(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=B.T,_={};B.T=_;try{var E=a(c,r),I=B.S;I!==null&&I(_,E),Fp(t,n,E)}catch(tt){Cu(t,n,tt)}finally{f!==null&&_.types!==null&&(f.types=_.types),B.T=f}}else try{f=a(c,r),Fp(t,n,f)}catch(tt){Cu(t,n,tt)}}function Fp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Hp(t,n,r)},function(r){return Cu(t,n,r)}):Hp(t,n,a)}function Hp(t,n,a){n.status="fulfilled",n.value=a,Gp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ip(t,a)))}function Cu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Gp(n),n=n.next;while(n!==r)}t.action=null}function Gp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Vp(t,n){return n}function kp(t,n){if(xe){var a=Ve.formState;if(a!==null){t:{var r=se;if(xe){if(We){e:{for(var c=We,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=li(c.nextSibling),r=c.data==="F!";break t}}ha(r)}r=!1}r&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vp,lastRenderedState:n},a.queue=r,a=lm.bind(null,se,r),r.dispatch=a,r=Ru(!1),f=Ou.bind(null,se,!1,r.queue),r=Un(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Kv.bind(null,se,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Xp(t){var n=en();return Wp(n,Pe,t)}function Wp(t,n,a){if(n=Tu(t,n,Vp)[0],t=dl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=to(n)}catch(_){throw _===Fs?nl:_}else r=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Xs(9,{destroy:void 0},Qv.bind(null,c,a),null)),[r,f,t]}function Qv(t,n){t.action=n}function jp(t){var n=en(),a=Pe;if(a!==null)return Wp(n,a,t);en(),n=n.memoizedState,a=en();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Xs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=se.updateQueue,n===null&&(n=ul(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function qp(){return en().memoizedState}function hl(t,n,a,r){var c=Un();se.flags|=t,c.memoizedState=Xs(1|n,{destroy:void 0},a,r===void 0?null:r)}function pl(t,n,a,r){var c=en();r=r===void 0?null:r;var f=c.memoizedState.inst;Pe!==null&&r!==null&&xu(r,Pe.memoizedState.deps)?c.memoizedState=Xs(n,f,a,r):(se.flags|=t,c.memoizedState=Xs(1|n,f,a,r))}function Yp(t,n){hl(8390656,8,t,n)}function wu(t,n){pl(2048,8,t,n)}function Jv(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=ul(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Zp(t){var n=en().memoizedState;return Jv({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Kp(t,n){return pl(4,2,t,n)}function Qp(t,n){return pl(4,4,t,n)}function Jp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $p(t,n,a){a=a!=null?a.concat([t]):null,pl(4,4,Jp.bind(null,n,t),a)}function Du(){}function tm(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&xu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function em(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&xu(n,r[1]))return r[0];if(r=t(),ss){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function Uu(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ng(),se.lanes|=t,Ma|=t,a)}function nm(t,n,a,r){return Wn(a,n)?a:Gs.current!==null?(t=Uu(t,a,r),Wn(t,n)||(sn=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(me&261930)===0?(sn=!0,t.memoizedState=a):(t=ng(),se.lanes|=t,Ma|=t,n)}function im(t,n,a,r,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var _=B.T,E={};B.T=E,Ou(t,!1,n,a);try{var I=c(),tt=B.S;if(tt!==null&&tt(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ut=qv(I,r);eo(t,n,ut,Qn(t))}else eo(t,n,r,Qn(t))}catch(mt){eo(t,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{Q.p=f,_!==null&&E.types!==null&&(_.types=E.types),B.T=_}}function $v(){}function Nu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=am(t).queue;im(t,c,n,K,a===null?$v:function(){return sm(t),a(r)})}function am(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function sm(t){var n=am(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},Qn())}function Lu(){return yn(xo)}function rm(){return en().memoizedState}function om(){return en().memoizedState}function tx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=ga(a);var r=_a(n,t,a);r!==null&&(Hn(r,n,a),Kr(r,n,a)),n={cache:lu()},t.payload=n;return}n=n.return}}function ex(t,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ml(t)?cm(n,a):(a=Qc(t,n,a,r),a!==null&&(Hn(a,t,r),um(a,n,r)))}function lm(t,n,a){var r=Qn();eo(t,n,a,r)}function eo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ml(t))cm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,_))return Zo(t,n,c,0),Ve===null&&Yo(),!1}catch{}finally{}if(a=Qc(t,n,c,r),a!==null)return Hn(a,t,r),um(a,n,r),!0}return!1}function Ou(t,n,a,r){if(r={lane:2,revertLane:hf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ml(t)){if(n)throw Error(s(479))}else n=Qc(t,a,r,2),n!==null&&Hn(n,t,2)}function ml(t){var n=t.alternate;return t===se||n!==null&&n===se}function cm(t,n){Vs=ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function um(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ur(t,a)}}var no={readContext:yn,use:fl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};no.useEffectEvent=Je;var fm={readContext:yn,use:fl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:Yp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hl(4194308,4,Jp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hl(4194308,4,t,n)},useInsertionEffect:function(t,n){hl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var r=t();if(ss){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Un();if(a!==void 0){var c=a(n);if(ss){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=ex.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=Ru(t);var n=t.queue,a=lm.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Du,useDeferredValue:function(t,n){var a=Un();return Uu(a,t,n)},useTransition:function(){var t=Ru(!1);return t=im.bind(null,se,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=se,c=Un();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(me&127)!==0||Np(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Yp(Op.bind(null,r,f,t),[t]),r.flags|=2048,Xs(9,{destroy:void 0},Lp.bind(null,r,f,a,n),null),a},useId:function(){var t=Un(),n=Ve.identifierPrefix;if(xe){var a=Ri,r=Ai;a=(r&~(1<<32-Jt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Yv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Lu,useFormState:kp,useActionState:kp,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ou.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:bu,useCacheRefresh:function(){return Un().memoizedState=tx.bind(null,se)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},zu={readContext:yn,use:fl,useCallback:tm,useContext:yn,useEffect:wu,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:dl,useRef:qp,useState:function(){return dl(Vi)},useDebugValue:Du,useDeferredValue:function(t,n){var a=en();return nm(a,Pe.memoizedState,t,n)},useTransition:function(){var t=dl(Vi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Up,useId:rm,useHostTransitionStatus:Lu,useFormState:Xp,useActionState:Xp,useOptimistic:function(t,n){var a=en();return Bp(a,Pe,t,n)},useMemoCache:bu,useCacheRefresh:om};zu.useEffectEvent=Zp;var dm={readContext:yn,use:fl,useCallback:tm,useContext:yn,useEffect:wu,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:Au,useRef:qp,useState:function(){return Au(Vi)},useDebugValue:Du,useDeferredValue:function(t,n){var a=en();return Pe===null?Uu(a,t,n):nm(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Au(Vi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Up,useId:rm,useHostTransitionStatus:Lu,useFormState:jp,useActionState:jp,useOptimistic:function(t,n){var a=en();return Pe!==null?Bp(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:bu,useCacheRefresh:om};dm.useEffectEvent=Zp;function Pu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ga(r);c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Hn(n,t,r),Kr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ga(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Hn(n,t,r),Kr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),r=ga(a);r.tag=2,n!=null&&(r.callback=n),n=_a(t,r,a),n!==null&&(Hn(n,t,a),Kr(n,t,a))}};function hm(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Vr(a,r)||!Vr(c,f):!0}function pm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Bu.enqueueReplaceState(n,n.state,null)}function rs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function mm(t){qo(t)}function gm(t){console.error(t)}function _m(t){qo(t)}function gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function vm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Iu(t,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(t,n)},a}function xm(t){return t=ga(t),t.tag=3,t}function Sm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){vm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){vm(n,a,r),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function nx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ps(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Cl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),uf(t,r,c)),!1;case 22:return a.flags|=65536,r===il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),uf(t,r,c)),!1}throw Error(s(435,a.tag))}return uf(t,r,c),Cl(),!1}if(xe)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==iu&&(t=Error(s(422),{cause:r}),Wr(ii(t,a)))):(r!==iu&&(n=Error(s(423),{cause:r}),Wr(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ii(r,a),c=Iu(t.stateNode,r,c),pu(t,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:r});if(f=ii(f,a),uo===null?uo=[f]:uo.push(f),$e!==4&&($e=2),n===null)return!0;r=ii(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Iu(a.stateNode,r,t),pu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=xm(c),Sm(c,t,a,r),pu(a,c),!1}a=a.return}while(a!==null);return!1}var Fu=Error(s(461)),sn=!1;function Mn(t,n,a,r){n.child=t===null?bp(n,null,a,r):as(n,t.child,a,r)}function ym(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return ts(n),r=Su(t,n,a,_,f,c),E=yu(),t!==null&&!sn?(Mu(t,n,c),ki(t,n,c)):(xe&&E&&eu(n),n.flags|=1,Mn(t,n,r,c),n.child)}function Mm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!Jc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Em(t,n,f,r,c)):(t=Qo(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!qu(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vr,a(_,r)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Bi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Em(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Vr(f,r)&&t.ref===n.ref)if(sn=!1,n.pendingProps=r=f,qu(t,c))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Hu(t,n,a,r,c)}function bm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Tm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&el(n,f!==null?f.cachePool:null),f!==null?Rp(n,f):gu(),Cp(n);else return r=n.lanes=536870912,Tm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(el(n,f.cachePool),Rp(n,f),xa(),n.memoizedState=null):(t!==null&&el(n,null),gu(),xa());return Mn(t,n,c,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Tm(t,n,a,r,c){var f=uu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&el(n,null),gu(),Cp(n),t!==null&&Ps(t,n,r,!0),n.childLanes=c,null}function _l(t,n){return n=xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Am(t,n,a){return as(n,t.child,null,a),t=_l(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function ix(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=_l(n,r),n.lanes=536870912,io(null,t);if(vu(n),(t=We)?(t=Ig(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=cp(t),a.return=n,n.child=a,Sn=n,We=null)):t=null,t===null)throw ha(n);return n.lanes=536870912,null}return _l(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(vu(n),c)if(n.flags&256)n.flags&=-257,n=Am(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(sn||Ps(t,n,a,!1),c=(a&t.childLanes)!==0,sn||c){if(r=Ve,r!==null&&(_=Ti(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ka(t,_),Hn(r,t,_),Fu;Cl(),n=Am(t,n,a)}else t=f.treeContext,We=li(_.nextSibling),Sn=n,xe=!0,da=null,ri=!1,t!==null&&dp(n,t),n=_l(n,r),n.flags|=4096;return n}return t=Bi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Hu(t,n,a,r,c){return ts(n),a=Su(t,n,a,r,void 0,c),r=yu(),t!==null&&!sn?(Mu(t,n,c),ki(t,n,c)):(xe&&r&&eu(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Rm(t,n,a,r,c,f){return ts(n),n.updateQueue=null,a=Dp(n,r,a,c),wp(t),r=yu(),t!==null&&!sn?(Mu(t,n,f),ki(t,n,f)):(xe&&r&&eu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Cm(t,n,a,r,c){if(ts(n),n.stateNode===null){var f=Ns,_=a.contextType;typeof _=="object"&&_!==null&&(f=yn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Bu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},du(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?yn(_):Ns,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Pu(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Bu.enqueueReplaceState(f,f.state,null),Jr(n,r,f,c),Qr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,I=rs(a,E);f.props=I;var tt=f.context,ut=a.contextType;_=Ns,typeof ut=="object"&&ut!==null&&(_=yn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||tt!==_)&&pm(n,f,r,_),ma=!1;var et=n.memoizedState;f.state=et,Jr(n,r,f,c),Qr(),tt=n.memoizedState,E||et!==tt||ma?(typeof mt=="function"&&(Pu(n,a,mt,r),tt=n.memoizedState),(I=ma||hm(n,a,I,r,et,tt,_))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=_,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,hu(t,n),_=n.memoizedProps,ut=rs(a,_),f.props=ut,mt=n.pendingProps,et=f.context,tt=a.contextType,I=Ns,typeof tt=="object"&&tt!==null&&(I=yn(tt)),E=a.getDerivedStateFromProps,(tt=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==mt||et!==I)&&pm(n,f,r,I),ma=!1,et=n.memoizedState,f.state=et,Jr(n,r,f,c),Qr();var rt=n.memoizedState;_!==mt||et!==rt||ma||t!==null&&t.dependencies!==null&&$o(t.dependencies)?(typeof E=="function"&&(Pu(n,a,E,r),rt=n.memoizedState),(ut=ma||hm(n,a,ut,r,et,rt,I)||t!==null&&t.dependencies!==null&&$o(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=I,r=ut):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,vl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=as(n,t.child,null,c),n.child=as(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function wm(t,n,a,r){return Ja(),n.flags|=256,Mn(t,n,a,r),n.child}var Gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vu(t){return{baseLanes:t,cachePool:vp()}}function ku(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Dm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?va(n):xa(),(t=We)?(t=Ig(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=cp(t),a.return=n,n.child=a,Sn=n,We=null)):t=null,t===null)throw ha(n);return Af(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(xa(),c=n.mode,E=xl({mode:"hidden",children:E},c),r=Qa(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Vu(a),r.childLanes=ku(t,_,a),n.memoizedState=Gu,io(null,r)):(va(n),Xu(n,E))}var I=t.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=Wu(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),E=r.fallback,c=n.mode,r=xl({mode:"visible",children:r.children},c),E=Qa(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,as(n,t.child,null,a),r=n.child,r.memoizedState=Vu(a),r.childLanes=ku(t,_,a),n.memoizedState=Gu,n=io(null,r));else if(va(n),Af(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var tt=_.dgst;_=tt,r=Error(s(419)),r.stack="",r.digest=_,Wr({value:r,source:null,stack:null}),n=Wu(t,n,a)}else if(sn||Ps(t,n,a,!1),_=(a&t.childLanes)!==0,sn||_){if(_=Ve,_!==null&&(r=Ti(_,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,Ka(t,r),Hn(_,t,r),Fu;Tf(E)||Cl(),n=Wu(t,n,a)}else Tf(E)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,We=li(E.nextSibling),Sn=n,xe=!0,da=null,ri=!1,t!==null&&dp(n,t),n=Xu(n,r.children),n.flags|=4096);return n}return c?(xa(),E=r.fallback,c=n.mode,I=t.child,tt=I.sibling,r=Bi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,tt!==null?E=Bi(tt,E):(E=Qa(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,io(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Vu(a):(c=E.cachePool,c!==null?(I=nn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=vp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=ku(t,_,a),n.memoizedState=Gu,io(t.child,r)):(va(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Xu(t,n){return n=xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function Wu(t,n,a){return as(n,t.child,null,a),t=Xu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Um(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ru(t.return,n,a)}function ju(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Nm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=tn.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,St(tn,_),Mn(t,n,r,a),r=xe?Xr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Um(t,a,n);else if(t.tag===19)Um(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ol(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ju(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ol(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ju(n,!0,a,null,f,r);break;case"together":ju(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ps(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function qu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$o(t)))}function ax(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),pa(n,nn,t.memoizedState.cache),Ja();break;case 27:case 5:Kt(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dm(t,n,a):(va(n),t=ki(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ps(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Nm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(tn,tn.current),r)break;return null;case 22:return n.lanes=0,bm(t,n,a,n.pendingProps);case 24:pa(n,nn,t.memoizedState.cache)}return ki(t,n,a)}function Lm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!qu(t,a)&&(n.flags&128)===0)return sn=!1,ax(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,xe&&(n.flags&1048576)!==0&&fp(n,Xr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ns(n.elementType),n.type=t,typeof t=="function")Jc(t)?(r=rs(t,r),n.tag=1,n=Cm(null,n,t,r,a)):(n.tag=0,n=Hu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===C){n.tag=11,n=ym(null,n,t,r,a);break t}else if(c===z){n.tag=14,n=Mm(null,n,t,r,a);break t}}throw n=gt(t)||t,Error(s(306,n,""))}}return n;case 0:return Hu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=rs(r,n.pendingProps),Cm(t,n,r,c,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,hu(t,n),Jr(n,r,null,a);var _=n.memoizedState;if(r=_.cache,pa(n,nn,r),r!==f.cache&&ou(n,[nn],a,!0),Qr(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=wm(t,n,r,a);break t}else if(r!==c){c=ii(Error(s(424)),n),Wr(c),n=wm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(We=li(t.firstChild),Sn=n,xe=!0,da=null,ri=!0,a=bp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),r===c){n=ki(t,n,a);break t}Mn(t,n,r,a)}n=n.child}return n;case 26:return vl(t,n),t===null?(a=Xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=zl(Et.current).createElement(a),r[Ke]=n,r[vn]=t,En(r,a,t),W(r),n.stateNode=r):n.memoizedState=Xg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kt(n),t===null&&xe&&(r=n.stateNode=Gg(n.type,n.pendingProps,Et.current),Sn=n,ri=!0,c=We,Ra(n.type)?(Rf=c,We=li(r.firstChild)):We=c),Mn(t,n,n.pendingProps.children,a),vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=r=We)&&(r=Ox(r,n.type,n.pendingProps,ri),r!==null?(n.stateNode=r,Sn=n,We=li(r.firstChild),ri=!1,c=!0):c=!1),c||ha(n)),Kt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Mf(c,f)?r=null:_!==null&&Mf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Su(t,n,Zv,null,null,a),xo._currentValue=c),vl(t,n),Mn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=We)&&(a=zx(a,n.pendingProps,ri),a!==null?(n.stateNode=a,Sn=n,We=null,t=!0):t=!1),t||ha(n)),null;case 13:return Dm(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=as(n,null,r,a):Mn(t,n,r,a),n.child;case 11:return ym(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),Mn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ts(n),c=yn(c),r=r(c),n.flags|=1,Mn(t,n,r,a),n.child;case 14:return Mm(t,n,n.type,n.pendingProps,a);case 15:return Em(t,n,n.type,n.pendingProps,a);case 19:return Nm(t,n,a);case 31:return ix(t,n,a);case 22:return bm(t,n,a,n.pendingProps);case 24:return ts(n),r=yn(nn),t===null?(c=uu(),c===null&&(c=Ve,f=lu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},du(n),pa(n,nn,c)):((t.lanes&a)!==0&&(hu(t,n),Jr(n,null,null,a),Qr()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,nn,r)):(r=f.cache,pa(n,nn,r),r!==c.cache&&ou(n,[nn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(t){t.flags|=4}function Yu(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(rg())t.flags|=8192;else throw is=il,fu}else t.flags&=-16777217}function Om(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Zg(n))if(rg())t.flags|=8192;else throw is=il,fu}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ln():536870912,t.lanes|=n,Ys|=n)}function ao(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function sx(t,n,a){var r=n.pendingProps;switch(nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Hi(nn),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zs(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,au())),je(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(je(n),Om(n,f)):(je(n),Yu(n,c,null,r,a))):f?f!==t.memoizedState?(Xi(n),je(n),Om(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Xi(n),je(n),Yu(n,c,t,r,a)),null;case 27:if(ke(n),a=Et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}t=Z.current,zs(n)?hp(n):(t=Gg(c,r,a),n.stateNode=t,Xi(n))}return je(n),null;case 5:if(ke(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=Z.current,zs(n))hp(n);else{var _=zl(Et.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[Ke]=n,f[vn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(En(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Xi(n)}}return je(n),Yu(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Et.current,zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ke]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Dg(t.nodeValue,a)),t||ha(n,!0)}else t=zl(t).createTextNode(r),t[Ke]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ke]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ke]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),je(n),null);case 4:return Yt(),t===null&&_f(n.stateNode.containerInfo),je(n),null;case 10:return Hi(n.type),je(n),null;case 19:if(at(tn),r=n.memoizedState,r===null)return je(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ao(r,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ol(t),f!==null){for(n.flags|=128,ao(r,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lp(a,t),a=a.sibling;return St(tn,tn.current&1|2),xe&&Ii(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&dt()>Tl&&(n.flags|=128,c=!0,ao(r,!1),n.lanes=4194304)}else{if(!c)if(t=ol(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),ao(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return je(n),null}else 2*dt()-r.renderingStartTime>Tl&&a!==536870912&&(n.flags|=128,c=!0,ao(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=dt(),t.sibling=null,a=tn.current,St(tn,c?a&1|2:a&1),xe&&Ii(n,r.treeForkCount),t):(je(n),null);case 22:case 23:return Yn(n),_u(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&at(es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(nn),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function rx(t,n){switch(nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(nn),Yt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at(tn),null;case 4:return Yt(),null;case 10:return Hi(n.type),null;case 22:case 23:return Yn(n),_u(),t!==null&&at(es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(nn),null;case 25:return null;default:return null}}function zm(t,n){switch(nu(n),n.tag){case 3:Hi(nn),Yt();break;case 26:case 27:case 5:ke(n);break;case 4:Yt();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:at(tn);break;case 10:Hi(n.type);break;case 22:case 23:Yn(n),_u(),t!==null&&at(es);break;case 24:Hi(nn)}}function so(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(E){Le(n,n.return,E)}}function Sa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var I=a,tt=E;try{tt()}catch(ut){Le(c,I,ut)}}}r=r.next}while(r!==f)}}catch(ut){Le(n,n.return,ut)}}function Pm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ap(n,a)}catch(r){Le(t,t.return,r)}}}function Bm(t,n,a){a.props=rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Le(t,n,r)}}function ro(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Le(t,n,c)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function Im(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function Zu(t,n,a){try{var r=t.stateNode;Cx(r,t.type,a,n),r[vn]=n}catch(c){Le(t,t.return,c)}}function Fm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function Ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Fm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Qu(t,n,a),t=t.sibling;t!==null;)Qu(t,n,a),t=t.sibling}function yl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yl(t,n,a),t=t.sibling;t!==null;)yl(t,n,a),t=t.sibling}function Hm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,r,a),n[Ke]=t,n[vn]=a}catch(f){Le(t,t.return,f)}}var Wi=!1,rn=!1,Ju=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function ox(t,n){if(t=t.containerInfo,Sf=Vl,t=$h(t),Wc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,E=-1,I=-1,tt=0,ut=0,mt=t,et=null;e:for(;;){for(var rt;mt!==a||c!==0&&mt.nodeType!==3||(E=_+c),mt!==f||r!==0&&mt.nodeType!==3||(I=_+r),mt.nodeType===3&&(_+=mt.nodeValue.length),(rt=mt.firstChild)!==null;)et=mt,mt=rt;for(;;){if(mt===t)break e;if(et===a&&++tt===c&&(E=_),et===f&&++ut===r&&(I=_),(rt=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=rt}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:t,selectionRange:a},Vl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var It=rs(a.type,c);t=r.getSnapshotBeforeUpdate(It,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){Le(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Vm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),r&4&&so(5,a);break;case 1:if(qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Le(a,a.return,_)}else{var c=rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Le(a,a.return,_)}}r&64&&Pm(a),r&512&&ro(a,a.return);break;case 3:if(qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ap(t,n)}catch(_){Le(a,a.return,_)}}break;case 27:n===null&&r&4&&Hm(a);case 26:case 5:qi(t,a),n===null&&r&4&&Im(a),r&512&&ro(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),r&4&&Wm(t,a);break;case 13:qi(t,a),r&4&&jm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=gx.bind(null,a),Px(t,a))));break;case 22:if(r=a.memoizedState!==null||Wi,!r){n=n!==null&&n.memoizedState!==null||rn,c=Wi;var f=rn;Wi=r,(rn=n)&&!f?Yi(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),Wi=c,rn=f}break;case 30:break;default:qi(t,a)}}function km(t){var n=t.alternate;n!==null&&(t.alternate=null,km(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Or(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Pn=!1;function ji(t,n,a){for(a=a.child;a!==null;)Xm(t,n,a),a=a.sibling}function Xm(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:rn||Ci(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ci(a,n);var r=Ye,c=Pn;Ra(a.type)&&(Ye=a.stateNode,Pn=!1),ji(t,n,a),go(a.stateNode),Ye=r,Pn=c;break;case 5:rn||Ci(a,n);case 6:if(r=Ye,c=Pn,Ye=null,ji(t,n,a),Ye=r,Pn=c,Ye!==null)if(Pn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:Ye!==null&&(Pn?(t=Ye,Pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),nr(t)):Pg(Ye,a.stateNode));break;case 4:r=Ye,c=Pn,Ye=a.stateNode.containerInfo,Pn=!0,ji(t,n,a),Ye=r,Pn=c;break;case 0:case 11:case 14:case 15:Sa(2,a,n),rn||Sa(4,a,n),ji(t,n,a);break;case 1:rn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Bm(a,n,r)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:rn=(r=rn)||a.memoizedState!==null,ji(t,n,a),rn=r;break;default:ji(t,n,a)}}function Wm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{nr(t)}catch(a){Le(n,n.return,a)}}}function jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nr(t)}catch(a){Le(n,n.return,a)}}function lx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Gm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Gm),n;default:throw Error(s(435,t.tag))}}function Ml(t,n){var a=lx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=_x.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(Ra(E.type)){Ye=E.stateNode,Pn=!1;break t}break;case 5:Ye=E.stateNode,Pn=!1;break t;case 3:case 4:Ye=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(Ye===null)throw Error(s(160));Xm(f,_,c),Ye=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)qm(n,t),n=n.sibling}var gi=null;function qm(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),r&4&&(Sa(3,t,t.return),so(3,t),Sa(5,t,t.return));break;case 1:Bn(n,t),In(t),r&512&&(rn||a===null||Ci(a,a.return)),r&64&&Wi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=gi;if(Bn(n,t),In(t),r&512&&(rn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ja]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,r,a),f[Ke]=t,W(f),r=f;break t;case"link":var _=qg("link","href",c).get(r+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;case"meta":if(_=qg("meta","content",c).get(r+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ke]=t,W(f),r=f}t.stateNode=r}else Yg(c,t.type,t.stateNode);else t.stateNode=jg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Yg(c,t.type,t.stateNode):jg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Zu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),r&512&&(rn||a===null||Ci(a,a.return)),a!==null&&r&4&&Zu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),r&512&&(rn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{On(c,"")}catch(It){Le(t,t.return,It)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,Zu(t,c,a!==null?a.memoizedProps:c)),r&1024&&(Ju=!0);break;case 6:if(Bn(n,t),In(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(It){Le(t,t.return,It)}}break;case 3:if(Il=null,c=gi,gi=Pl(n.containerInfo),Bn(n,t),gi=c,In(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{nr(n.containerInfo)}catch(It){Le(t,t.return,It)}Ju&&(Ju=!1,Ym(t));break;case 4:r=gi,gi=Pl(t.stateNode.containerInfo),Bn(n,t),In(t),gi=r;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ml(t,r)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bl=dt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ml(t,r)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=Wi,ut=rn;if(Wi=tt||c,rn=ut||I,Bn(n,t),rn=ut,Wi=tt,In(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Wi||rn||os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=I.stateNode;var mt=I.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(It){Le(I,I.return,It)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(It){Le(I,I.return,It)}}}else if(n.tag===18){if(a===null){I=n;try{var rt=I.stateNode;c?Bg(rt,!0):Bg(I.stateNode,!1)}catch(It){Le(I,I.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ml(t,a))));break;case 19:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ml(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Fm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Ku(t);yl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(On(_,""),a.flags&=-33);var E=Ku(t);yl(t,E,_);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=Ku(t);Qu(t,tt,I);break;default:throw Error(s(161))}}catch(ut){Le(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ym(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vm(t,n.alternate,n),n=n.sibling}function os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),os(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bm(n,n.return,a),os(n);break;case 27:go(n.stateNode);case 26:case 5:Ci(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}t=t.sibling}}function Yi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(c,f,a),so(4,f);break;case 1:if(Yi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Le(r,r.return,tt)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Tp(I[c],E)}catch(tt){Le(r,r.return,tt)}}a&&_&64&&Pm(f),ro(f,f.return);break;case 27:Hm(f);case 26:case 5:Yi(c,f,a),a&&r===null&&_&4&&Im(f),ro(f,f.return);break;case 12:Yi(c,f,a);break;case 31:Yi(c,f,a),a&&_&4&&Wm(c,f);break;case 13:Yi(c,f,a),a&&_&4&&jm(c,f);break;case 22:f.memoizedState===null&&Yi(c,f,a),ro(f,f.return);break;case 30:break;default:Yi(c,f,a)}n=n.sibling}}function $u(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&jr(a))}function tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jr(t))}function _i(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zm(t,n,a,r),n=n.sibling}function Zm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,r),c&2048&&so(9,n);break;case 1:_i(t,n,a,r);break;case 3:_i(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jr(t)));break;case 12:if(c&2048){_i(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Le(n,n.return,I)}}else _i(t,n,a,r);break;case 31:_i(t,n,a,r);break;case 13:_i(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?_i(t,n,a,r):oo(t,n):f._visibility&2?_i(t,n,a,r):(f._visibility|=2,Ws(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&$u(_,n);break;case 24:_i(t,n,a,r),c&2048&&tf(n.alternate,n);break;default:_i(t,n,a,r)}}function Ws(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,I=r,tt=_.flags;switch(_.tag){case 0:case 11:case 15:Ws(f,_,E,I,c),so(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?Ws(f,_,E,I,c):oo(f,_):(ut._visibility|=2,Ws(f,_,E,I,c)),c&&tt&2048&&$u(_.alternate,_);break;case 24:Ws(f,_,E,I,c),c&&tt&2048&&tf(_.alternate,_);break;default:Ws(f,_,E,I,c)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:oo(a,r),c&2048&&$u(r.alternate,r);break;case 24:oo(a,r),c&2048&&tf(r.alternate,r);break;default:oo(a,r)}n=n.sibling}}var lo=8192;function js(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)Km(t,n,a),t=t.sibling}function Km(t,n,a){switch(t.tag){case 26:js(t,n,a),t.flags&lo&&t.memoizedState!==null&&Yx(a,gi,t.memoizedState,t.memoizedProps);break;case 5:js(t,n,a);break;case 3:case 4:var r=gi;gi=Pl(t.stateNode.containerInfo),js(t,n,a),gi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=lo,lo=16777216,js(t,n,a),lo=r):js(t,n,a));break;default:js(t,n,a)}}function Qm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,$m(r,t)}Qm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jm(t),t=t.sibling}function Jm(t){switch(t.tag){case 0:case 11:case 15:co(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:co(t);break;case 12:co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,El(t)):co(t);break;default:co(t)}}function El(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,$m(r,t)}Qm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),El(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,El(n));break;default:El(n)}t=t.sibling}}function $m(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,pn=r;else t:for(a=t;pn!==null;){r=pn;var c=r.sibling,f=r.return;if(km(r),r===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}var cx={getCacheForType:function(t){var n=yn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return yn(nn).controller.signal}},ux=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,fe=null,me=0,Ne=0,Zn=null,ya=!1,qs=!1,ef=!1,Zi=0,$e=0,Ma=0,ls=0,nf=0,Kn=0,Ys=0,uo=null,Fn=null,af=!1,bl=0,tg=0,Tl=1/0,Al=null,Ea=null,un=0,ba=null,Zs=null,Ki=0,sf=0,rf=null,eg=null,fo=0,of=null;function Qn(){return(De&2)!==0&&me!==0?me&-me:B.T!==null?hf():Nr()}function ng(){if(Kn===0)if((me&536870912)===0||xe){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),Kn=t}else Kn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===Ve&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)&&(Ks(t,0),Ta(t,me,Kn,!1)),_n(t,a),((De&2)===0||t!==Ve)&&(t===Ve&&((De&2)===0&&(ls|=a),$e===4&&Ta(t,me,Kn,!1)),wi(t))}function ig(t,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||$t(t,n),c=r?hx(t,n):cf(t,n,!0),f=r;do{if(c===0){qs&&!r&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!fx(a)){c=cf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;c=uo;var I=E.current.memoizedState.isDehydrated;if(I&&(Ks(E,_).flags|=256),_=cf(E,_,!1),_!==2){if(ef&&!I){E.errorRecoveryDisabledLanes|=f,ls|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Ks(t,0),Ta(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ta(r,n,Kn,!ya);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=bl+300-dt(),10<c)){if(Ta(r,n,Kn,!ya),Dt(r,0,!0)!==0)break t;Ki=n,r.timeoutHandle=Og(ag.bind(null,r,a,Fn,Al,af,n,Kn,ls,Ys,ya,f,"Throttled",-0,0),c);break t}ag(r,a,Fn,Al,af,n,Kn,ls,Ys,ya,f,null,-0,0)}}break}while(!0);wi(t)}function ag(t,n,a,r,c,f,_,E,I,tt,ut,mt,et,rt){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},Km(n,f,mt);var It=(f&62914560)===f?bl-dt():(f&4194048)===f?tg-dt():0;if(It=Zx(mt,It),It!==null){Ki=f,t.cancelPendingCommit=It(dg.bind(null,t,n,f,a,r,c,_,E,I,ut,mt,null,et,rt)),Ta(t,f,_,!tt);return}}dg(t,n,f,a,r,c,_,E,I)}function fx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,r){n&=~nf,n&=~ls,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Jt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Dr(t,a,n)}function Rl(){return(De&6)===0?(ho(0),!1):!0}function lf(){if(fe!==null){if(Ne===0)var t=fe.return;else t=fe,Fi=$a=null,Eu(t),Hs=null,Yr=0,t=fe;for(;t!==null;)zm(t.alternate,t),t=t.return;fe=null}}function Ks(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ux(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,lf(),Ve=t,fe=a=Bi(t.current,null),me=n,Ne=0,Zn=null,ya=!1,qs=$t(t,n),ef=!1,Ys=Kn=nf=ls=Ma=$e=0,Fn=uo=null,af=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Jt(r),f=1<<c;n|=t[c],r&=~f}return Zi=n,Yo(),a}function sg(t,n){se=null,B.H=no,n===Fs||n===nl?(n=yp(),Ne=3):n===fu?(n=yp(),Ne=4):Ne=n===Fu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,fe===null&&($e=1,gl(t,ii(n,t.current)))}function rg(){var t=qn.current;return t===null?!0:(me&4194048)===me?oi===null:(me&62914560)===me||(me&536870912)!==0?t===oi:!1}function og(){var t=B.H;return B.H=no,t===null?no:t}function lg(){var t=B.A;return B.A=cx,t}function Cl(){$e=4,ya||(me&4194048)!==me&&qn.current!==null||(qs=!0),(Ma&134217727)===0&&(ls&134217727)===0||Ve===null||Ta(Ve,me,Kn,!1)}function cf(t,n,a){var r=De;De|=2;var c=og(),f=lg();(Ve!==t||me!==n)&&(Al=null,Ks(t,n)),n=!1;var _=$e;t:do try{if(Ne!==0&&fe!==null){var E=fe,I=Zn;switch(Ne){case 8:lf(),_=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var tt=Ne;if(Ne=0,Zn=null,Qs(t,E,I,tt),a&&qs){_=0;break t}break;default:tt=Ne,Ne=0,Zn=null,Qs(t,E,I,tt)}}dx(),_=$e;break}catch(ut){sg(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Fi=$a=null,De=r,B.H=c,B.A=f,fe===null&&(Ve=null,me=0,Yo()),_}function dx(){for(;fe!==null;)cg(fe)}function hx(t,n){var a=De;De|=2;var r=og(),c=lg();Ve!==t||me!==n?(Al=null,Tl=dt()+500,Ks(t,n)):qs=$t(t,n);t:do try{if(Ne!==0&&fe!==null){n=fe;var f=Zn;e:switch(Ne){case 1:Ne=0,Zn=null,Qs(t,n,f,1);break;case 2:case 9:if(xp(f)){Ne=0,Zn=null,ug(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==t||(Ne=7),wi(t)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:xp(f)?(Ne=0,Zn=null,ug(n)):(Ne=0,Zn=null,Qs(t,n,f,7));break;case 5:var _=null;switch(fe.tag){case 26:_=fe.memoizedState;case 5:case 27:var E=fe;if(_?Zg(_):E.stateNode.complete){Ne=0,Zn=null;var I=E.sibling;if(I!==null)fe=I;else{var tt=E.return;tt!==null?(fe=tt,wl(tt)):fe=null}break e}}Ne=0,Zn=null,Qs(t,n,f,5);break;case 6:Ne=0,Zn=null,Qs(t,n,f,6);break;case 8:lf(),$e=6;break t;default:throw Error(s(462))}}px();break}catch(ut){sg(t,ut)}while(!0);return Fi=$a=null,B.H=r,B.A=c,De=a,fe!==null?0:(Ve=null,me=0,Yo(),$e)}function px(){for(;fe!==null&&!b();)cg(fe)}function cg(t){var n=Lm(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?wl(t):fe=n}function ug(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rm(a,n,n.pendingProps,n.type,void 0,me);break;case 11:n=Rm(a,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:Eu(n);default:zm(a,n),n=fe=lp(n,Zi),n=Lm(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?wl(t):fe=n}function Qs(t,n,a,r){Fi=$a=null,Eu(n),Hs=null,Yr=0;var c=n.return;try{if(nx(t,c,n,a,me)){$e=1,gl(t,ii(a,t.current)),fe=null;return}}catch(f){if(c!==null)throw fe=c,f;$e=1,gl(t,ii(a,t.current)),fe=null;return}n.flags&32768?(xe||r===1?t=!0:qs||(me&536870912)!==0?t=!1:(ya=t=!0,(r===2||r===9||r===3||r===6)&&(r=qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),fg(n,t)):wl(n)}function wl(t){var n=t;do{if((n.flags&32768)!==0){fg(n,ya);return}t=n.return;var a=sx(n.alternate,n,Zi);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=t}while(n!==null);$e===0&&($e=5)}function fg(t,n){do{var a=rx(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);$e=6,fe=null}function dg(t,n,a,r,c,f,_,E,I){t.cancelPendingCommit=null;do Dl();while(un!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Kc,di(t,a,f,_,E,I),t===Ve&&(fe=Ve=null,me=0),Zs=n,ba=t,Ki=a,sf=f,rf=c,eg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vx(wt,function(){return _g(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,c=Q.p,Q.p=2,_=De,De|=4;try{ox(t,n,a)}finally{De=_,Q.p=c,B.T=r}}un=1,hg(),pg(),mg()}}function hg(){if(un===1){un=0;var t=ba,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=Q.p;Q.p=2;var c=De;De|=4;try{qm(n,t);var f=yf,_=$h(t.containerInfo),E=f.focusedElem,I=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&Jh(E.ownerDocument.documentElement,E)){if(I!==null&&Wc(E)){var tt=I.start,ut=I.end;if(ut===void 0&&(ut=tt),"selectionStart"in E)E.selectionStart=tt,E.selectionEnd=Math.min(ut,E.value.length);else{var mt=E.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var rt=et.getSelection(),It=E.textContent.length,Qt=Math.min(I.start,It),Ie=I.end===void 0?Qt:Math.min(I.end,It);!rt.extend&&Qt>Ie&&(_=Ie,Ie=Qt,Qt=_);var Y=Qh(E,Qt),k=Qh(E,Ie);if(Y&&k&&(rt.rangeCount!==1||rt.anchorNode!==Y.node||rt.anchorOffset!==Y.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var $=mt.createRange();$.setStart(Y.node,Y.offset),rt.removeAllRanges(),Qt>Ie?(rt.addRange($),rt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),rt.addRange($))}}}}for(mt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var ht=mt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Vl=!!Sf,yf=Sf=null}finally{De=c,Q.p=r,B.T=a}}t.current=n,un=2}}function pg(){if(un===2){un=0;var t=ba,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=Q.p;Q.p=2;var c=De;De|=4;try{Vm(t,n.alternate,n)}finally{De=c,Q.p=r,B.T=a}}un=3}}function mg(){if(un===4||un===3){un=0,nt();var t=ba,n=Zs,a=Ki,r=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Zs=ba=null,gg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),bs(a),n=n.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Zt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,c=Q.p,Q.p=2,B.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var E=r[_];f(E.value,{componentStack:E.stack})}}finally{B.T=n,Q.p=c}}(Ki&3)!==0&&Dl(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===of?fo++:(fo=0,of=t):fo=0,ho(0)}}function gg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,jr(n)))}function Dl(){return hg(),pg(),mg(),_g()}function _g(){if(un!==5)return!1;var t=ba,n=sf;sf=0;var a=bs(Ki),r=B.T,c=Q.p;try{Q.p=32>a?32:a,B.T=null,a=rf,rf=null;var f=ba,_=Ki;if(un=0,Zs=ba=null,Ki=0,(De&6)!==0)throw Error(s(331));var E=De;if(De|=4,Jm(f.current),Zm(f,f.current,_,a),De=E,ho(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Zt,f)}catch{}return!0}finally{Q.p=c,B.T=r,gg(t,n)}}function vg(t,n,a){n=ii(a,n),n=Iu(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(_n(t,2),wi(t))}function Le(t,n,a){if(t.tag===3)vg(t,t,a);else for(;n!==null;){if(n.tag===3){vg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))){t=ii(a,t),a=xm(2),r=_a(n,a,2),r!==null&&(Sm(a,r,n,t),_n(r,2),wi(r));break}}n=n.return}}function uf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new ux;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(ef=!0,c.add(a),t=mx.bind(null,t,n,a),n.then(t,t))}function mx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(me&a)===a&&($e===4||$e===3&&(me&62914560)===me&&300>dt()-bl?(De&2)===0&&Ks(t,0):nf|=a,Ys===me&&(Ys=0)),wi(t)}function xg(t,n){n===0&&(n=ln()),t=Ka(t,n),t!==null&&(_n(t,n),wi(t))}function gx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),xg(t,a)}function _x(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),xg(t,a)}function vx(t,n){return kt(t,n)}var Ul=null,Js=null,ff=!1,Nl=!1,df=!1,Aa=0;function wi(t){t!==Js&&t.next===null&&(Js===null?Ul=Js=t:Js=Js.next=t),Nl=!0,ff||(ff=!0,Sx())}function ho(t,n){if(!df&&Nl){df=!0;do for(var a=!1,r=Ul;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Jt(42|t)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Eg(r,f))}else f=me,f=Dt(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||$t(r,f)||(a=!0,Eg(r,f));r=r.next}while(a);df=!1}}function xx(){Sg()}function Sg(){Nl=ff=!1;var t=0;Aa!==0&&Dx()&&(t=Aa);for(var n=dt(),a=null,r=Ul;r!==null;){var c=r.next,f=yg(r,n);f===0?(r.next=null,a===null?Ul=c:a.next=c,c===null&&(Js=a)):(a=r,(t!==0||(f&3)!==0)&&(Nl=!0)),r=c}un!==0&&un!==5||ho(t),Aa!==0&&(Aa=0)}function yg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Jt(f),E=1<<_,I=c[_];I===-1?((E&a)===0||(E&r)!==0)&&(c[_]=qe(E,n)):I<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ve,a=me,a=Dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&L(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&L(r),bs(a)){case 2:case 8:a=Gt;break;case 32:a=wt;break;case 268435456:a=pe;break;default:a=wt}return r=Mg.bind(null,t),a=kt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&L(r),t.callbackPriority=2,t.callbackNode=null,2}function Mg(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dl()&&t.callbackNode!==a)return null;var r=me;return r=Dt(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(ig(t,r,n),yg(t,dt()),t.callbackNode!=null&&t.callbackNode===a?Mg.bind(null,t):null)}function Eg(t,n){if(Dl())return null;ig(t,n,!0)}function Sx(){Nx(function(){(De&6)!==0?kt(pt,xx):Sg()})}function hf(){if(Aa===0){var t=Bs;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Aa=t}return Aa}function bg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ho(""+t)}function Tg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function yx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=bg((c[vn]||null).action),_=r.submitter;_&&(n=(n=_[vn]||null)?bg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Xo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Aa!==0){var I=_?Tg(c,_):new FormData(c);Nu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(E.preventDefault(),I=_?Tg(c,_):new FormData(c),Nu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var pf=0;pf<Zc.length;pf++){var mf=Zc[pf],Mx=mf.toLowerCase(),Ex=mf[0].toUpperCase()+mf.slice(1);mi(Mx,"on"+Ex)}mi(np,"onAnimationEnd"),mi(ip,"onAnimationIteration"),mi(ap,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Fv,"onTransitionRun"),mi(Hv,"onTransitionStart"),mi(Gv,"onTransitionCancel"),mi(sp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Ag(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],I=E.instance,tt=E.currentTarget;if(E=E.listener,I!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=tt;try{f(c)}catch(ut){qo(ut)}c.currentTarget=null,f=I}else for(_=0;_<r.length;_++){if(E=r[_],I=E.instance,tt=E.currentTarget,E=E.listener,I!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=tt;try{f(c)}catch(ut){qo(ut)}c.currentTarget=null,f=I}}}}function de(t,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var r=t+"__bubble";a.has(r)||(Rg(n,t,2,!1),a.add(r))}function gf(t,n,a){var r=0;n&&(r|=4),Rg(a,t,r,n)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function _f(t){if(!t[Ll]){t[Ll]=!0,bt.forEach(function(a){a!=="selectionchange"&&(bx.has(a)||gf(a,!1,t),gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ll]||(n[Ll]=!0,gf("selectionchange",!1,n))}}function Rg(t,n,a,r){switch(n0(n)){case 2:var c=Jx;break;case 8:c=$x;break;default:c=Nf}a=c.bind(null,n,a,t),c=void 0,!Pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function vf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=r.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=A(E),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){r=f=_;continue t}E=E.parentNode}}r=r.return}Nh(function(){var tt=f,ut=Oc(a),mt=[];t:{var et=rp.get(t);if(et!==void 0){var rt=Xo,It=t;switch(t){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":rt=_v;break;case"focusin":It="focus",rt=Hc;break;case"focusout":It="blur",rt=Hc;break;case"beforeblur":case"afterblur":rt=Hc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Sv;break;case np:case ip:case ap:rt=lv;break;case sp:rt=Mv;break;case"scroll":case"scrollend":rt=iv;break;case"wheel":rt=bv;break;case"copy":case"cut":case"paste":rt=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Bh;break;case"toggle":case"beforetoggle":rt=Av}var Qt=(n&4)!==0,Ie=!Qt&&(t==="scroll"||t==="scrollend"),Y=Qt?et!==null?et+"Capture":null:et;Qt=[];for(var k=tt,$;k!==null;){var ht=k;if($=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||$===null||Y===null||(ht=zr(k,Y),ht!=null&&Qt.push(mo(k,ht,$))),Ie)break;k=k.return}0<Qt.length&&(et=new rt(et,It,null,a,ut),mt.push({event:et,listeners:Qt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",et&&a!==Lc&&(It=a.relatedTarget||a.fromElement)&&(A(It)||It[Oi]))break t;if((rt||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,rt?(It=a.relatedTarget||a.toElement,rt=tt,It=It?A(It):null,It!==null&&(Ie=u(It),Qt=It.tag,It!==Ie||Qt!==5&&Qt!==27&&Qt!==6)&&(It=null)):(rt=null,It=tt),rt!==It)){if(Qt=zh,ht="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Bh,ht="onPointerLeave",Y="onPointerEnter",k="pointer"),Ie=rt==null?et:it(rt),$=It==null?et:it(It),et=new Qt(ht,k+"leave",rt,a,ut),et.target=Ie,et.relatedTarget=$,ht=null,A(ut)===tt&&(Qt=new Qt(Y,k+"enter",It,a,ut),Qt.target=$,Qt.relatedTarget=Ie,ht=Qt),Ie=ht,rt&&It)e:{for(Qt=Tx,Y=rt,k=It,$=0,ht=Y;ht;ht=Qt(ht))$++;ht=0;for(var jt=k;jt;jt=Qt(jt))ht++;for(;0<$-ht;)Y=Qt(Y),$--;for(;0<ht-$;)k=Qt(k),ht--;for(;$--;){if(Y===k||k!==null&&Y===k.alternate){Qt=Y;break e}Y=Qt(Y),k=Qt(k)}Qt=null}else Qt=null;rt!==null&&Cg(mt,et,rt,Qt,!1),It!==null&&Ie!==null&&Cg(mt,Ie,It,Qt,!0)}}t:{if(et=tt?it(tt):window,rt=et.nodeName&&et.nodeName.toLowerCase(),rt==="select"||rt==="input"&&et.type==="file")var Ae=Wh;else if(kh(et))if(jh)Ae=Pv;else{Ae=Ov;var Ht=Lv}else rt=et.nodeName,!rt||rt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?tt&&Nc(tt.elementType)&&(Ae=Wh):Ae=zv;if(Ae&&(Ae=Ae(t,tt))){Xh(mt,Ae,a,ut);break t}Ht&&Ht(t,et,tt),t==="focusout"&&tt&&et.type==="number"&&tt.memoizedProps.value!=null&&Tn(et,"number",et.value)}switch(Ht=tt?it(tt):window,t){case"focusin":(kh(Ht)||Ht.contentEditable==="true")&&(ws=Ht,jc=tt,kr=null);break;case"focusout":kr=jc=ws=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,tp(mt,a,ut);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":tp(mt,a,ut)}var re;if(Vc)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else Cs?Gh(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Ih&&a.locale!=="ko"&&(Cs||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Cs&&(re=Lh()):(ua=ut,Bc="value"in ua?ua.value:ua.textContent,Cs=!0)),Ht=Ol(tt,ge),0<Ht.length&&(ge=new Ph(ge,t,null,a,ut),mt.push({event:ge,listeners:Ht}),re?ge.data=re:(re=Vh(a),re!==null&&(ge.data=re)))),(re=Cv?wv(t,a):Dv(t,a))&&(ge=Ol(tt,"onBeforeInput"),0<ge.length&&(Ht=new Ph("onBeforeInput","beforeinput",null,a,ut),mt.push({event:Ht,listeners:ge}),Ht.data=re)),yx(mt,t,tt,a,ut)}Ag(mt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ol(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zr(t,a),c!=null&&r.unshift(mo(t,c,f)),c=zr(t,n),c!=null&&r.push(mo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Tx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Cg(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var E=a,I=E.alternate,tt=E.stateNode;if(E=E.tag,I!==null&&I===r)break;E!==5&&E!==26&&E!==27||tt===null||(I=tt,c?(tt=zr(a,f),tt!=null&&_.unshift(mo(a,tt,I))):c||(tt=zr(a,f),tt!=null&&_.push(mo(a,tt,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Ax=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(Ax,`
`).replace(Rx,"")}function Dg(t,n){return n=wg(n),wg(t)===n}function Be(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||On(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&On(t,""+r);break;case"className":Xe(t,"class",r);break;case"tabIndex":Xe(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,r);break;case"style":Dh(t,r,f);break;case"data":if(n!=="object"){Xe(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ho(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ho(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=zi);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ho(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":de("beforetoggle",t),de("toggle",t),ve(t,"popover",r);break;case"xlinkActuate":Te(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Te(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Te(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Te(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Te(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Te(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Te(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Te(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Te(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ve(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ev.get(a)||a,ve(t,a,r))}}function xf(t,n,a,r,c,f){switch(a){case"style":Dh(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?On(t,r):(typeof r=="number"||typeof r=="bigint")&&On(t,""+r);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"onClick":r!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ve(t,a,r)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,_,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var E=f=_=c=null,I=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":_=ut;break;case"checked":I=ut;break;case"defaultChecked":tt=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Be(t,n,r,ut,a,null)}}Dn(t,f,E,I,tt,_,c,!1);return;case"select":de("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:Be(t,n,c,E,a,null)}n=f,a=_,t.multiple=!!r,n!=null?Qe(t,!!r,n,!1):a!=null&&Qe(t,!!r,a,!0);return;case"textarea":de("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Be(t,n,_,E,a,null)}Ts(t,r,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Be(t,n,I,r,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(r=0;r<po.length;r++)de(po[r],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,tt,r,a,null)}return;default:if(Nc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&xf(t,n,ut,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Be(t,n,E,r,a,null))}function Cx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,I=null,tt=null,ut=null;for(rt in a){var mt=a[rt];if(a.hasOwnProperty(rt)&&mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":I=mt;default:r.hasOwnProperty(rt)||Be(t,n,rt,null,r,mt)}}for(var et in r){var rt=r[et];if(mt=a[et],r.hasOwnProperty(et)&&(rt!=null||mt!=null))switch(et){case"type":f=rt;break;case"name":c=rt;break;case"checked":tt=rt;break;case"defaultChecked":ut=rt;break;case"value":_=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==mt&&Be(t,n,et,rt,r,mt)}}ze(t,_,E,I,tt,ut,f,c);return;case"select":rt=_=E=et=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":rt=I;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":et=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==I&&Be(t,n,c,f,r,I)}n=E,a=_,r=rt,et!=null?Qe(t,!!a,et,!1):!!r!=!!a&&(n!=null?Qe(t,!!a,n,!0):Qe(t,!!a,a?[]:"",!1));return;case"textarea":rt=et=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Be(t,n,E,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":et=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,_,c,r,f)}xn(t,et,rt);return;case"option":for(var It in a)if(et=a[It],a.hasOwnProperty(It)&&et!=null&&!r.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:Be(t,n,It,null,r,et)}for(I in r)if(et=r[I],rt=a[I],r.hasOwnProperty(I)&&et!==rt&&(et!=null||rt!=null))switch(I){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Be(t,n,I,et,r,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)et=a[Qt],a.hasOwnProperty(Qt)&&et!=null&&!r.hasOwnProperty(Qt)&&Be(t,n,Qt,null,r,et);for(tt in r)if(et=r[tt],rt=a[tt],r.hasOwnProperty(tt)&&et!==rt&&(et!=null||rt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Be(t,n,tt,et,r,rt)}return;default:if(Nc(n)){for(var Ie in a)et=a[Ie],a.hasOwnProperty(Ie)&&et!==void 0&&!r.hasOwnProperty(Ie)&&xf(t,n,Ie,void 0,r,et);for(ut in r)et=r[ut],rt=a[ut],!r.hasOwnProperty(ut)||et===rt||et===void 0&&rt===void 0||xf(t,n,ut,et,r,rt);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!r.hasOwnProperty(Y)&&Be(t,n,Y,null,r,et);for(mt in r)et=r[mt],rt=a[mt],!r.hasOwnProperty(mt)||et===rt||et==null&&rt==null||Be(t,n,mt,et,r,rt)}function Ug(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&Ug(_)){for(_=0,E=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],tt=I.startTime;if(tt>E)break;var ut=I.transferSize,mt=I.initiatorType;ut&&Ug(mt)&&(I=I.responseEnd,_+=ut*(I<E?1:(E-tt)/(I-tt)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Sf=null,yf=null;function zl(t){return t.nodeType===9?t:t.ownerDocument}function Ng(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Mf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function Dx(){var t=window.event;return t&&t.type==="popstate"?t===Ef?!1:(Ef=t,!0):(Ef=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,Nx=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(t){return zg.resolve(null).then(t).catch(Lx)}:Og;function Lx(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function Pg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),nr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[ja]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&go(t.ownerDocument.body);a=c}while(a);nr(n)}function Bg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bf(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ox(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ja])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function zx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Ig(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Tf(t){return t.data==="$?"||t.data==="$~"}function Af(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Px(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Rf=null;function Fg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Hg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Gg(t,n,a){switch(n=zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Or(t)}var ci=new Map,Vg=new Set;function Pl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=Q.d;Q.d={f:Bx,r:Ix,D:Fx,C:Hx,L:Gx,m:Vx,X:Xx,S:kx,M:Wx};function Bx(){var t=Qi.f(),n=Rl();return t||n}function Ix(t){var n=q(t);n!==null&&n.tag===5&&n.type==="form"?sm(n):Qi.r(t)}var $s=typeof document>"u"?null:document;function kg(t,n,a){var r=$s;if(r&&typeof n=="string"&&n){var c=hn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Vg.has(c)||(Vg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),En(n,"link",t),W(n),r.head.appendChild(n)))}}function Fx(t){Qi.D(t),kg("dns-prefetch",t,null)}function Hx(t,n){Qi.C(t,n),kg("preconnect",t,n)}function Gx(t,n,a){Qi.L(t,n,a);var r=$s;if(r&&t&&n){var c='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hn(a.imageSizes)+'"]')):c+='[href="'+hn(t)+'"]';var f=c;switch(n){case"style":f=tr(t);break;case"script":f=er(t)}ci.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(_o(f))||n==="script"&&r.querySelector(vo(f))||(n=r.createElement("link"),En(n,"link",t),W(n),r.head.appendChild(n)))}}function Vx(t,n){Qi.m(t,n);var a=$s;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hn(r)+'"][href="'+hn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=er(t)}if(!ci.has(f)&&(t=g({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}r=a.createElement("link"),En(r,"link",t),W(r),a.head.appendChild(r)}}}function kx(t,n,a){Qi.S(t,n,a);var r=$s;if(r&&t){var c=st(r).hoistableStyles,f=tr(t);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(_o(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Cf(t,a);var I=_=r.createElement("link");W(I),En(I,"link",t),I._p=new Promise(function(tt,ut){I.onload=tt,I.onerror=ut}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Bl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function Xx(t,n){Qi.X(t,n);var a=$s;if(a&&t){var r=st(a).hoistableScripts,c=er(t),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0},n),(n=ci.get(c))&&wf(t,n),f=a.createElement("script"),W(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Wx(t,n){Qi.M(t,n);var a=$s;if(a&&t){var r=st(a).hoistableScripts,c=er(t),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&wf(t,n),f=a.createElement("script"),W(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Xg(t,n,a,r){var c=(c=Et.current)?Pl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=st(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=tr(a.href);var f=st(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(_o(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||jx(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=er(a),a=st(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function tr(t){return'href="'+hn(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Wg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function jx(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),En(n,"link",a),W(n),t.head.appendChild(n))}function er(t){return'[src="'+hn(t)+'"]'}function vo(t){return"script[async]"+t}function jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+hn(a.href)+'"]');if(r)return n.instance=r,W(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),W(r),En(r,"style",c),Bl(r,a.precedence,t),n.instance=r;case"stylesheet":c=tr(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,W(f),f;r=Wg(a),(c=ci.get(c))&&Cf(r,c),f=(t.ownerDocument||t).createElement("link"),W(f);var _=f;return _._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),En(f,"link",r),n.state.loading|=4,Bl(f,a.precedence,t),n.instance=f;case"script":return f=er(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,W(c),c):(r=a,(c=ci.get(f))&&(r=g({},a),wf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),W(c),En(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Bl(r,a.precedence,t));return n.instance}function Bl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Cf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Il=null;function qg(t,n,a){if(Il===null){var r=new Map,c=Il=new Map;c.set(a,r)}else c=Il,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ja]||f[Ke]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(f):r.set(_,[f])}}return r}function Yg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function qx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Yx(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=tr(r.href),f=n.querySelector(_o(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Fl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,W(f);return}f=n.ownerDocument||n,r=Wg(r),(c=ci.get(c))&&Cf(r,c),f=f.createElement("link"),W(f);var _=f;_._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),En(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Fl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Df=0;function Zx(t,n){return t.stylesheets&&t.count===0&&Gl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Df===0&&(Df=62500*wx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Df?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Fl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hl=null;function Gl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hl=new Map,n.forEach(Kx,t),Hl=null,Fl.call(t))}function Kx(t,n){if(!(n.state.loading&4)){var a=Hl.get(t);if(a)var r=a.get(null);else{a=new Map,Hl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Fl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var xo={$$typeof:N,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Qx(t,n,a,r,c,f,_,E,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Kg(t,n,a,r,c,f,_,E,I,tt,ut,mt){return t=new Qx(t,n,a,_,I,tt,ut,mt,E),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=lu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},du(f),t}function Qg(t){return t?(t=Ns,t):Ns}function Jg(t,n,a,r,c,f){c=Qg(c),r.context===null?r.context=c:r.pendingContext=c,r=ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=_a(t,r,n),a!==null&&(Hn(a,t,n),Kr(a,t,n))}function $g(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Uf(t,n){$g(t,n),(t=t.alternate)&&$g(t,n)}function t0(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&Hn(n,t,67108864),Uf(t,67108864)}}function e0(t){if(t.tag===13||t.tag===31){var n=Qn();n=Xa(n);var a=Ka(t,n);a!==null&&Hn(a,t,n),Uf(t,n)}}var Vl=!0;function Jx(t,n,a,r){var c=B.T;B.T=null;var f=Q.p;try{Q.p=2,Nf(t,n,a,r)}finally{Q.p=f,B.T=c}}function $x(t,n,a,r){var c=B.T;B.T=null;var f=Q.p;try{Q.p=8,Nf(t,n,a,r)}finally{Q.p=f,B.T=c}}function Nf(t,n,a,r){if(Vl){var c=Lf(r);if(c===null)vf(t,n,r,kl,a),i0(t,r);else if(eS(c,t,n,a,r))r.stopPropagation();else if(i0(t,r),n&4&&-1<tS.indexOf(t)){for(;c!==null;){var f=q(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ct(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var I=1<<31-Jt(_);E.entanglements[1]|=I,_&=~I}wi(f),(De&6)===0&&(Tl=dt()+500,ho(0))}}break;case 31:case 13:E=Ka(f,2),E!==null&&Hn(E,f,2),Rl(),Uf(f,2)}if(f=Lf(r),f===null&&vf(t,n,r,kl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else vf(t,n,r,null,a)}}function Lf(t){return t=Oc(t),Of(t)}var kl=null;function Of(t){if(kl=null,t=A(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return kl=t,null}function n0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case pt:return 2;case Gt:return 8;case wt:case Pt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var zf=!1,Ca=null,wa=null,Da=null,So=new Map,yo=new Map,Ua=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i0(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=q(n),n!==null&&t0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function eS(t,n,a,r,c){switch(n){case"focusin":return Ca=Mo(Ca,t,n,a,r,c),!0;case"dragenter":return wa=Mo(wa,t,n,a,r,c),!0;case"mouseover":return Da=Mo(Da,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,Mo(So.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,Mo(yo.get(f)||null,t,n,a,r,c)),!0}return!1}function a0(t){var n=A(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Wa(t.priority,function(){e0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Wa(t.priority,function(){e0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Lc=r,a.target.dispatchEvent(r),Lc=null}else return n=q(a),n!==null&&t0(n),t.blockedOn=a,!1;n.shift()}return!0}function s0(t,n,a){Xl(t)&&a.delete(n)}function nS(){zf=!1,Ca!==null&&Xl(Ca)&&(Ca=null),wa!==null&&Xl(wa)&&(wa=null),Da!==null&&Xl(Da)&&(Da=null),So.forEach(s0),yo.forEach(s0)}function Wl(t,n){t.blockedOn===n&&(t.blockedOn=null,zf||(zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nS)))}var jl=null;function r0(t){jl!==t&&(jl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jl===t&&(jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Of(r||a)===null)continue;break}var f=q(a);f!==null&&(t.splice(n,3),n-=3,Nu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function nr(t){function n(I){return Wl(I,t)}Ca!==null&&Wl(Ca,t),wa!==null&&Wl(wa,t),Da!==null&&Wl(Da,t),So.forEach(n),yo.forEach(n);for(var a=0;a<Ua.length;a++){var r=Ua[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)a0(a),a.blockedOn===null&&Ua.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[vn]||null;if(typeof f=="function")_||r0(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[vn]||null)E=_.formAction;else if(Of(c)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),r0(a)}}}function o0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Pf(t){this._internalRoot=t}ql.prototype.render=Pf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();Jg(a,r,t,n,null,null)},ql.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jg(t.current,2,null,t,null,null),Rl(),n[Oi]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Nr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,t),a===0&&a0(t)}};var l0=e.version;if(l0!=="19.2.8")throw Error(s(527,l0,"19.2.8"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var iS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Zt=Yl.inject(iS),Vt=Yl}catch{}}return bo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=mm,f=gm,_=_m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Kg(t,1,!1,null,null,a,r,null,c,f,_,o0),t[Oi]=n.current,_f(t),new Pf(n)},bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=mm,_=gm,E=_m,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Kg(t,1,!0,n,a??null,r,c,I,f,_,E,o0),n.context=Qg(null),a=n.current,r=Qn(),r=Xa(r),c=ga(r),c.callback=null,_a(a,c,r),a=r,n.current.lanes=a,_n(n,a),wi(n),t[Oi]=n.current,_f(t),new ql(n)},bo.version="19.2.8",bo}var v0;function hS(){if(v0)return Ff.exports;v0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ff.exports=dS(),Ff.exports}var pS=hS();/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=o=>{const e=gS(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},vS=ye.createContext({}),xS=()=>ye.useContext(vS),SS=ye.forwardRef(({color:o,size:e,strokeWidth:i,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},m)=>{const{size:p=24,strokeWidth:x=2,absoluteStrokeWidth:g=!1,color:S="currentColor",className:M=""}=xS()??{},T=s??g?Number(i??x)*24/Number(e??p):i??x;return ye.createElement("svg",{ref:m,...kf,width:e??p??kf.width,height:e??p??kf.height,stroke:o??S,strokeWidth:T,className:x_("lucide",M,l),...!u&&!_S(h)&&{"aria-hidden":"true"},...h},[...d.map(([w,y])=>ye.createElement(w,y)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=(o,e)=>{const i=ye.forwardRef(({className:s,...l},u)=>ye.createElement(SS,{ref:u,iconNode:e,className:x_(`lucide-${mS(x0(o))}`,`lucide-${o}`,s),...l}));return i.displayName=x0(o),i};/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],S_=gn("arrow-down-left",yS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],fh=gn("arrow-up-right",MS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],bS=gn("arrow-up",ES);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],AS=gn("check",TS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],y_=gn("circle-check",RS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],wS=gn("copy",CS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],US=gn("key",DS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],LS=gn("message-square",NS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],zS=gn("mic-off",OS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],BS=gn("mic",PS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],M_=gn("rotate-ccw-clock",IS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],S0=gn("search",FS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Md=gn("send",HS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ac=gn("shield-check",GS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],kS=gn("sparkles",VS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],E_=gn("user",XS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],dh=gn("wallet",WS);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qS=gn("x",jS),YS=({onSearchQuery:o,onOpenProfile:e})=>{const[i,s]=ye.useState(!1),[l,u]=ye.useState(""),d=h=>{h.preventDefault(),l.trim()&&o&&(o(l.trim()),s(!1),u(""))};return F.jsxs(F.Fragment,{children:[F.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-[#0f141a]/60 backdrop-blur-xl border-b border-white/5",children:F.jsxs("nav",{className:"flex justify-between items-center px-6 h-16 w-full max-w-[1200px] mx-auto",children:[F.jsxs("div",{className:"flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer",children:[F.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-[#fcc82c] to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-[#fcc82c]/20",children:F.jsx(Ac,{className:"w-5 h-5 stroke-[2.5]"})}),F.jsx("span",{className:"font-bold text-xl tracking-tighter text-[#dee2ec]",children:"KIVO"})]}),F.jsxs("div",{className:"flex items-center gap-4",children:[F.jsx("button",{onClick:()=>s(!0),className:"p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer",title:"Search Kivo",children:F.jsx(S0,{className:"w-5 h-5"})}),F.jsx("button",{onClick:e,className:"w-8 h-8 rounded-full border border-white/10 overflow-hidden active:scale-95 transition-transform cursor-pointer flex items-center justify-center bg-slate-800 text-amber-400 hover:border-amber-400/50",title:"User Profile",children:F.jsx(E_,{className:"w-4 h-4"})})]})]})}),i&&F.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4",children:F.jsxs("div",{className:"bg-[#1b2027] border border-white/10 w-full max-w-lg rounded-2xl p-6 space-y-4 shadow-2xl",children:[F.jsxs("div",{className:"flex items-center justify-between",children:[F.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[F.jsx(S0,{className:"w-5 h-5 text-amber-400"}),"Search Kivo Engine"]}),F.jsx("button",{onClick:()=>s(!1),className:"text-slate-400 hover:text-white cursor-pointer",children:F.jsx(qS,{className:"w-5 h-5"})})]}),F.jsxs("form",{onSubmit:d,className:"space-y-3",children:[F.jsx("input",{type:"text",value:l,onChange:h=>u(h.target.value),placeholder:"Search transactions, assets, or ask a question...",className:"w-full bg-[#0f141a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm",autoFocus:!0}),F.jsxs("div",{className:"flex justify-end gap-2",children:[F.jsx("button",{type:"button",onClick:()=>s(!1),className:"px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs cursor-pointer",children:"Cancel"}),F.jsxs("button",{type:"submit",className:"px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-semibold text-xs flex items-center gap-1 cursor-pointer hover:bg-amber-300",children:[F.jsx(AS,{className:"w-3.5 h-3.5"}),"Search"]})]})]})]})})]})},ZS=({activeTab:o,setActiveTab:e})=>{const i=[{id:"assistant",label:"Assistant",icon:LS},{id:"wallet",label:"Wallet",icon:dh},{id:"history",label:"History",icon:M_},{id:"profile",label:"Profile",icon:E_}];return F.jsx("aside",{className:"hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40",children:F.jsx("div",{className:"flex flex-col items-center justify-center gap-6 py-6 px-3 bg-[#1a1f26]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl",children:i.map(s=>{const l=s.icon,u=o===s.id;return F.jsxs("button",{onClick:()=>e(s.id),className:`relative group p-3 rounded-full transition-all cursor-pointer ${u?"text-[#fcc82c] bg-white/10 shadow-lg":"text-slate-400 hover:text-white hover:bg-white/5"}`,title:s.label,children:[F.jsx(l,{className:"w-5 h-5"}),u&&F.jsx("span",{className:"absolute left-full ml-3 w-1.5 h-1.5 bg-[#fcc82c] rounded-full top-1/2 -translate-y-1/2"}),F.jsx("span",{className:"absolute left-14 bg-[#1f2630] text-slate-200 border border-white/10 px-3 py-1 rounded-lg text-xs uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl",children:s.label})]},s.id)})})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="174",KS=0,y0=1,QS=2,b_=1,JS=2,ia=3,Va=0,Vn=1,aa=2,Ha=0,vr=1,M0=2,E0=3,b0=4,$S=5,vs=100,ty=101,ey=102,ny=103,iy=104,ay=200,sy=201,ry=202,oy=203,Ed=204,bd=205,ly=206,cy=207,uy=208,fy=209,dy=210,hy=211,py=212,my=213,gy=214,Td=0,Ad=1,Rd=2,yr=3,Cd=4,wd=5,Dd=6,Ud=7,ph=0,_y=1,vy=2,Ga=0,xy=1,Sy=2,yy=3,My=4,Ey=5,by=6,Ty=7,T_=300,Mr=301,Er=302,Nd=303,Ld=304,Rc=306,Od=1e3,Ss=1001,zd=1002,bi=1003,Ay=1004,Zl=1005,Ui=1006,Xf=1007,ys=1008,la=1009,A_=1010,R_=1011,No=1012,mh=1013,Ms=1014,sa=1015,Lo=1016,gh=1017,_h=1018,br=1020,C_=35902,w_=1021,D_=1022,Mi=1023,U_=1024,N_=1025,xr=1026,Tr=1027,L_=1028,vh=1029,O_=1030,xh=1031,Sh=1033,_c=33776,vc=33777,xc=33778,Sc=33779,Pd=35840,Bd=35841,Id=35842,Fd=35843,Hd=36196,Gd=37492,Vd=37496,kd=37808,Xd=37809,Wd=37810,jd=37811,qd=37812,Yd=37813,Zd=37814,Kd=37815,Qd=37816,Jd=37817,$d=37818,th=37819,eh=37820,nh=37821,yc=36492,ih=36494,ah=36495,z_=36283,sh=36284,rh=36285,oh=36286,Ry=3200,Cy=3201,P_=0,wy=1,Fa="",fi="srgb",Ar="srgb-linear",Ec="linear",Fe="srgb",ir=7680,T0=519,Dy=512,Uy=513,Ny=514,B_=515,Ly=516,Oy=517,zy=518,Py=519,A0=35044,R0="300 es",ra=2e3,bc=2001;class Cr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=Math.PI/180,lh=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function By(o,e){return(o%e+e)%e}function jf(o,e,i){return(1-i)*o+i*e}function To(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,i=0){Ee.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,s,l,u,d,h,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p)}set(e,i,s,l,u,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],x=s[4],g=s[7],S=s[2],M=s[5],T=s[8],w=l[0],y=l[3],v=l[6],D=l[1],N=l[4],C=l[7],H=l[2],P=l[5],z=l[8];return u[0]=d*w+h*D+m*H,u[3]=d*y+h*N+m*P,u[6]=d*v+h*C+m*z,u[1]=p*w+x*D+g*H,u[4]=p*y+x*N+g*P,u[7]=p*v+x*C+g*z,u[2]=S*w+M*D+T*H,u[5]=S*y+M*N+T*P,u[8]=S*v+M*C+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-s*u*x+s*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*d-h*p,S=h*m-x*u,M=p*u-d*m,T=i*g+s*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(l*p-x*s)*w,e[2]=(h*s-l*d)*w,e[3]=S*w,e[4]=(x*i-l*m)*w,e[5]=(l*u-h*i)*w,e[6]=M*w,e[7]=(s*m-p*i)*w,e[8]=(d*i-s*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(qf.makeScale(e,i)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new oe;function I_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Tc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Iy(){const o=Tc("canvas");return o.style.display="block",o}const C0={};function ms(o){o in C0||(C0[o]=!0,console.warn(o))}function Fy(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function Hy(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const w0=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D0=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vy(){const o={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Fe&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Fe&&(l.r=Sr(l.r),l.g=Sr(l.g),l.b=Sr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Ec:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ar]:{primaries:e,whitePoint:s,transfer:Ec,toXYZ:w0,fromXYZ:D0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:w0,fromXYZ:D0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Ce=Vy();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Sr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ar;class ky{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=Tc("canvas")),ar.width=e.width,ar.height=e.height;const s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ar}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Tc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=oa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xy=0;class yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Yf(l[d].image)):u.push(Yf(l[d]))}else u=Yf(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Yf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ky.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wy=0;class kn extends Cr{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=Ss,l=Ss,u=Ui,d=ys,h=Mi,m=la,p=kn.DEFAULT_ANISOTROPY,x=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Oo(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=T_;kn.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,s=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],x=m[4],g=m[8],S=m[1],M=m[5],T=m[9],w=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,C=(M+1)/2,H=(v+1)/2,P=(x+S)/4,z=(g+w)/4,X=(T+y)/4;return N>C&&N>H?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=P/s,u=z/s):C>H?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=P/l,u=X/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=z/u,l=X/u),this.set(s,l,u,i),this}let D=Math.sqrt((y-T)*(y-T)+(g-w)*(g-w)+(S-x)*(S-x));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(g-w)/D,this.z=(S-x)/D,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jy extends Cr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new kn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new yh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends jy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class F_ extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qy extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3];const S=u[d+0],M=u[d+1],T=u[d+2],w=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h===1){e[i+0]=S,e[i+1]=M,e[i+2]=T,e[i+3]=w;return}if(g!==w||m!==S||p!==M||x!==T){let y=1-h;const v=m*S+p*M+x*T+g*w,D=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const H=Math.sqrt(N),P=Math.atan2(H,v*D);y=Math.sin(y*P)/H,h=Math.sin(h*P)/H}const C=h*D;if(m=m*y+S*C,p=p*y+M*C,x=x*y+T*C,g=g*y+w*C,y===1-h){const H=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=H,p*=H,x*=H,g*=H}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=u[d],S=u[d+1],M=u[d+2],T=u[d+3];return e[i]=h*T+x*g+m*M-p*S,e[i+1]=m*T+x*S+p*g-h*M,e[i+2]=p*T+x*M+h*S-m*g,e[i+3]=x*T-h*g-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),g=h(u/2),S=m(s/2),M=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=S*x*g+p*M*T,this._y=p*M*g-S*x*T,this._z=p*x*T+S*M*g,this._w=p*x*g-S*M*T;break;case"YXZ":this._x=S*x*g+p*M*T,this._y=p*M*g-S*x*T,this._z=p*x*T-S*M*g,this._w=p*x*g+S*M*T;break;case"ZXY":this._x=S*x*g-p*M*T,this._y=p*M*g+S*x*T,this._z=p*x*T+S*M*g,this._w=p*x*g-S*M*T;break;case"ZYX":this._x=S*x*g-p*M*T,this._y=p*M*g+S*x*T,this._z=p*x*T-S*M*g,this._w=p*x*g+S*M*T;break;case"YZX":this._x=S*x*g+p*M*T,this._y=p*M*g+S*x*T,this._z=p*x*T-S*M*g,this._w=p*x*g-S*M*T;break;case"XZY":this._x=S*x*g-p*M*T,this._y=p*M*g-S*x*T,this._z=p*x*T+S*M*g,this._w=p*x*g+S*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=s+h+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(s>h&&s>g){const M=2*Math.sqrt(1+s-h-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-s-g);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-s-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-s*p,this._z=u*x+d*p+s*m-l*h,this._w=d*x-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,h),g=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=d*g+this._w*S,this._x=s*g+this._x*S,this._y=l*g+this._y*S,this._z=u*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,i=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(U0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(U0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),x=2*(h*i-u*l),g=2*(u*s-d*i);return this.x=i+m*p+d*g-h*x,this.y=s+m*x+h*p-u*g,this.z=l+m*g+u*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Zf.copy(this).projectOnVector(e),this.sub(Zf)}reflect(e){return this.sub(Zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new J,U0=new zo;class Po{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,vi):vi.fromBufferAttribute(u,d),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Kl.copy(s.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Ql.subVectors(this.max,Ao),sr.subVectors(e.a,Ao),rr.subVectors(e.b,Ao),or.subVectors(e.c,Ao),La.subVectors(rr,sr),Oa.subVectors(or,rr),cs.subVectors(sr,or);let i=[0,-La.z,La.y,0,-Oa.z,Oa.y,0,-cs.z,cs.y,La.z,0,-La.x,Oa.z,0,-Oa.x,cs.z,0,-cs.x,-La.y,La.x,0,-Oa.y,Oa.x,0,-cs.y,cs.x,0];return!Kf(i,sr,rr,or,Ql)||(i=[1,0,0,0,1,0,0,0,1],!Kf(i,sr,rr,or,Ql))?!1:(Jl.crossVectors(La,Oa),i=[Jl.x,Jl.y,Jl.z],Kf(i,sr,rr,or,Ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new J,new J,new J,new J,new J,new J,new J,new J],vi=new J,Kl=new Po,sr=new J,rr=new J,or=new J,La=new J,Oa=new J,cs=new J,Ao=new J,Ql=new J,Jl=new J,us=new J;function Kf(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){us.fromArray(o,u);const h=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=e.dot(us),p=i.dot(us),x=s.dot(us);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const Yy=new Po,Ro=new J,Qf=new J;class Mh{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Yy.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ro,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Qf)),this.expandByPoint(Ro.copy(e.center).sub(Qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new J,Jf=new J,$l=new J,za=new J,$f=new J,tc=new J,td=new J;class Zy{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Jf.copy(e).add(i).multiplyScalar(.5),$l.copy(i).sub(e).normalize(),za.copy(this.origin).sub(Jf);const u=e.distanceTo(i)*.5,d=-this.direction.dot($l),h=za.dot(this.direction),m=-za.dot($l),p=za.lengthSq(),x=Math.abs(1-d*d);let g,S,M,T;if(x>0)if(g=d*m-h,S=d*h-m,T=u*x,g>=0)if(S>=-T)if(S<=T){const w=1/x;g*=w,S*=w,M=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S<=-T?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=T?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Jf).addScaledVector($l,S),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(u=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(u=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,s,l,u){$f.subVectors(i,e),tc.subVectors(s,e),td.crossVectors($f,tc);let d=this.direction.dot(td),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;za.subVectors(this.origin,e);const m=h*this.direction.dot(tc.crossVectors(za,tc));if(m<0)return null;const p=h*this.direction.dot($f.cross(za));if(p<0||m+p>d)return null;const x=-h*za.dot(td);return x<0?null:this.at(x/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,s,l,u,d,h,m,p,x,g,S,M,T,w,y){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p,x,g,S,M,T,w,y)}set(e,i,s,l,u,d,h,m,p,x,g,S,M,T,w,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=S,v[3]=M,v[7]=T,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/lr.setFromMatrixColumn(e,0).length(),u=1/lr.setFromMatrixColumn(e,1).length(),d=1/lr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=d*x,M=d*g,T=h*x,w=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=M+T*p,i[5]=S-w*p,i[9]=-h*m,i[2]=w-S*p,i[6]=T+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*x,M=m*g,T=p*x,w=p*g;i[0]=S+w*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=M*h-T,i[6]=w+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*x,M=m*g,T=p*x,w=p*g;i[0]=S-w*h,i[4]=-d*g,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*x,i[9]=w-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*x,M=d*g,T=h*x,w=h*g;i[0]=m*x,i[4]=T*p-M,i[8]=S*p+w,i[1]=m*g,i[5]=w*p+S,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,T=h*m,w=h*p;i[0]=m*x,i[4]=w-S*g,i[8]=T*g+M,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*g+T,i[10]=S-w*g}else if(e.order==="XZY"){const S=d*m,M=d*p,T=h*m,w=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+w,i[5]=d*x,i[9]=M*g-T,i[2]=T*g-M,i[6]=h*x,i[10]=w*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ky,e,Qy)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Pa.crossVectors(s,Jn),Pa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Pa.crossVectors(s,Jn)),Pa.normalize(),ec.crossVectors(Jn,Pa),l[0]=Pa.x,l[4]=ec.x,l[8]=Jn.x,l[1]=Pa.y,l[5]=ec.y,l[9]=Jn.y,l[2]=Pa.z,l[6]=ec.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],x=s[1],g=s[5],S=s[9],M=s[13],T=s[2],w=s[6],y=s[10],v=s[14],D=s[3],N=s[7],C=s[11],H=s[15],P=l[0],z=l[4],X=l[8],U=l[12],R=l[1],V=l[5],lt=l[9],ot=l[13],gt=l[2],_t=l[6],B=l[10],Q=l[14],K=l[3],yt=l[7],Tt=l[11],O=l[15];return u[0]=d*P+h*R+m*gt+p*K,u[4]=d*z+h*V+m*_t+p*yt,u[8]=d*X+h*lt+m*B+p*Tt,u[12]=d*U+h*ot+m*Q+p*O,u[1]=x*P+g*R+S*gt+M*K,u[5]=x*z+g*V+S*_t+M*yt,u[9]=x*X+g*lt+S*B+M*Tt,u[13]=x*U+g*ot+S*Q+M*O,u[2]=T*P+w*R+y*gt+v*K,u[6]=T*z+w*V+y*_t+v*yt,u[10]=T*X+w*lt+y*B+v*Tt,u[14]=T*U+w*ot+y*Q+v*O,u[3]=D*P+N*R+C*gt+H*K,u[7]=D*z+N*V+C*_t+H*yt,u[11]=D*X+N*lt+C*B+H*Tt,u[15]=D*U+N*ot+C*Q+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],S=e[10],M=e[14],T=e[3],w=e[7],y=e[11],v=e[15];return T*(+u*m*g-l*p*g-u*h*S+s*p*S+l*h*M-s*m*M)+w*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*x-u*m*x)+y*(+i*p*g-i*h*M-u*d*g+s*d*M+u*h*x-s*p*x)+v*(-l*h*x-i*m*g+i*h*S+l*d*g-s*d*S+s*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],S=e[10],M=e[11],T=e[12],w=e[13],y=e[14],v=e[15],D=g*y*p-w*S*p+w*m*M-h*y*M-g*m*v+h*S*v,N=T*S*p-x*y*p-T*m*M+d*y*M+x*m*v-d*S*v,C=x*w*p-T*g*p+T*h*M-d*w*M-x*h*v+d*g*v,H=T*g*m-x*w*m-T*h*S+d*w*S+x*h*y-d*g*y,P=i*D+s*N+l*C+u*H;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=D*z,e[1]=(w*S*u-g*y*u-w*l*M+s*y*M+g*l*v-s*S*v)*z,e[2]=(h*y*u-w*m*u+w*l*p-s*y*p-h*l*v+s*m*v)*z,e[3]=(g*m*u-h*S*u-g*l*p+s*S*p+h*l*M-s*m*M)*z,e[4]=N*z,e[5]=(x*y*u-T*S*u+T*l*M-i*y*M-x*l*v+i*S*v)*z,e[6]=(T*m*u-d*y*u-T*l*p+i*y*p+d*l*v-i*m*v)*z,e[7]=(d*S*u-x*m*u+x*l*p-i*S*p-d*l*M+i*m*M)*z,e[8]=C*z,e[9]=(T*g*u-x*w*u-T*s*M+i*w*M+x*s*v-i*g*v)*z,e[10]=(d*w*u-T*h*u+T*s*p-i*w*p-d*s*v+i*h*v)*z,e[11]=(x*h*u-d*g*u-x*s*p+i*g*p+d*s*M-i*h*M)*z,e[12]=H*z,e[13]=(x*w*l-T*g*l+T*s*S-i*w*S-x*s*y+i*g*y)*z,e[14]=(T*h*l-d*w*l-T*s*m+i*w*m+d*s*y-i*h*y)*z,e[15]=(d*g*l-x*h*l+x*s*m-i*g*m-d*s*S+i*h*S)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,m=e.z,p=u*d,x=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,g=h+h,S=u*p,M=u*x,T=u*g,w=d*x,y=d*g,v=h*g,D=m*p,N=m*x,C=m*g,H=s.x,P=s.y,z=s.z;return l[0]=(1-(w+v))*H,l[1]=(M+C)*H,l[2]=(T-N)*H,l[3]=0,l[4]=(M-C)*P,l[5]=(1-(S+v))*P,l[6]=(y+D)*P,l[7]=0,l[8]=(T+N)*z,l[9]=(y-D)*z,l[10]=(1-(S+w))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=lr.set(l[0],l[1],l[2]).length();const d=lr.set(l[4],l[5],l[6]).length(),h=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],xi.copy(this);const p=1/u,x=1/d,g=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=x,xi.elements[5]*=x,xi.elements[6]*=x,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,i.setFromRotationMatrix(xi),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=ra){const m=this.elements,p=2*u/(i-e),x=2*u/(s-l),g=(i+e)/(i-e),S=(s+l)/(s-l);let M,T;if(h===ra)M=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(h===bc)M=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=x,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=ra){const m=this.elements,p=1/(i-e),x=1/(s-l),g=1/(d-u),S=(i+e)*p,M=(s+l)*x;let T,w;if(h===ra)T=(d+u)*g,w=-2*g;else if(h===bc)T=u*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*x,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const lr=new J,xi=new Ze,Ky=new J(0,0,0),Qy=new J(1,1,1),Pa=new J,ec=new J,Jn=new J,N0=new Ze,L0=new zo;class Li{constructor(e=0,i=0,s=0,l=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return N0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return L0.setFromEuler(this),this.setFromQuaternion(L0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class H_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jy=0;const O0=new J,cr=new zo,ta=new Ze,nc=new J,Co=new J,$y=new J,tM=new zo,z0=new J(1,0,0),P0=new J(0,1,0),B0=new J(0,0,1),I0={type:"added"},eM={type:"removed"},ur={type:"childadded",child:null},ed={type:"childremoved",child:null};class Xn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new J,i=new Li,s=new zo,l=new J(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new oe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(z0,e)}rotateY(e){return this.rotateOnAxis(P0,e)}rotateZ(e){return this.rotateOnAxis(B0,e)}translateOnAxis(e,i){return O0.copy(e).applyQuaternion(this.quaternion),this.position.add(O0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(z0,e)}translateY(e){return this.translateOnAxis(P0,e)}translateZ(e){return this.translateOnAxis(B0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?nc.copy(e):nc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Co,nc,this.up):ta.lookAt(nc,Co,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(ta),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I0),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eM),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I0),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,$y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,tM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),g=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new J(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new J,ea=new J,nd=new J,na=new J,fr=new J,dr=new J,F0=new J,id=new J,ad=new J,sd=new J,rd=new He,od=new He,ld=new He;class yi{constructor(e=new J,i=new J,s=new J){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Si.subVectors(e,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Si.subVectors(l,i),ea.subVectors(s,i),nd.subVectors(e,i);const d=Si.dot(Si),h=Si.dot(ea),m=Si.dot(nd),p=ea.dot(ea),x=ea.dot(nd),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-h*x)*S,T=(d*x-h*m)*S;return u.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,s,l,u,d,h,m){return this.getBarycoord(e,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(d,na.y),m.addScaledVector(h,na.z),m)}static getInterpolatedAttribute(e,i,s,l,u,d){return rd.setScalar(0),od.setScalar(0),ld.setScalar(0),rd.fromBufferAttribute(e,i),od.fromBufferAttribute(e,s),ld.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(rd,u.x),d.addScaledVector(od,u.y),d.addScaledVector(ld,u.z),d}static isFrontFacing(e,i,s,l){return Si.subVectors(s,i),ea.subVectors(e,i),Si.cross(ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),Si.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return yi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;fr.subVectors(l,s),dr.subVectors(u,s),id.subVectors(e,s);const m=fr.dot(id),p=dr.dot(id);if(m<=0&&p<=0)return i.copy(s);ad.subVectors(e,l);const x=fr.dot(ad),g=dr.dot(ad);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(fr,d);sd.subVectors(e,u);const M=fr.dot(sd),T=dr.dot(sd);if(T>=0&&M<=T)return i.copy(u);const w=M*p-m*T;if(w<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(dr,h);const y=x*T-M*g;if(y<=0&&g-x>=0&&M-T>=0)return F0.subVectors(u,l),h=(g-x)/(g-x+(M-T)),i.copy(l).addScaledVector(F0,h);const v=1/(y+w+S);return d=w*v,h=S*v,i.copy(s).addScaledVector(fr,d).addScaledVector(dr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},ic={h:0,s:0,l:0};function cd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class we{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ce.workingColorSpace){if(e=By(e,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=cd(d,u,e+1/3),this.g=cd(d,u,e),this.b=cd(d,u,e-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(e,i=fi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const s=G_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ce.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Se(Cn.r*255,0,255))*65536+Math.round(Se(Cn.g*255,0,255))*256+Math.round(Se(Cn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,u=Cn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=fi){Ce.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,l=Cn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+i,Ba.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ba),e.getHSL(ic);const s=jf(Ba.h,ic.h,i),l=jf(Ba.s,ic.s,i),u=jf(Ba.l,ic.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new we;we.NAMES=G_;let nM=0;class Bo extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=vr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=bd,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ed&&(s.blendSrc=this.blendSrc),this.blendDst!==bd&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Eh extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new J,ac=new Ee;let iM=0;class Ni{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=A0,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(e),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=To(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A0&&(e.usage=this.usage),e}}class V_ extends Ni{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class k_ extends Ni{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ei extends Ni{constructor(e,i,s){super(new Float32Array(e),i,s)}}let aM=0;const ui=new Ze,ud=new Xn,hr=new J,$n=new Po,wo=new Po,mn=new J;class ca extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?k_:V_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new oe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,s){return ui.makeTranslation(e,i,s),this.applyMatrix4(ui),this}scale(e,i,s){return ui.makeScale(e,i,s),this.applyMatrix4(ui),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ei(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(mn.addVectors($n.min,wo.min),$n.expandByPoint(mn),mn.addVectors($n.max,wo.max),$n.expandByPoint(mn)):($n.expandByPoint(wo.min),$n.expandByPoint(wo.max))}$n.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)mn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(mn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)mn.fromBufferAttribute(h,p),m&&(hr.fromBufferAttribute(e,p),mn.add(hr)),l=Math.max(l,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<s.count;X++)h[X]=new J,m[X]=new J;const p=new J,x=new J,g=new J,S=new Ee,M=new Ee,T=new Ee,w=new J,y=new J;function v(X,U,R){p.fromBufferAttribute(s,X),x.fromBufferAttribute(s,U),g.fromBufferAttribute(s,R),S.fromBufferAttribute(u,X),M.fromBufferAttribute(u,U),T.fromBufferAttribute(u,R),x.sub(p),g.sub(p),M.sub(S),T.sub(S);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(w.copy(x).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(V),h[X].add(w),h[U].add(w),h[R].add(w),m[X].add(y),m[U].add(y),m[R].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,U=D.length;X<U;++X){const R=D[X],V=R.start,lt=R.count;for(let ot=V,gt=V+lt;ot<gt;ot+=3)v(e.getX(ot+0),e.getX(ot+1),e.getX(ot+2))}const N=new J,C=new J,H=new J,P=new J;function z(X){H.fromBufferAttribute(l,X),P.copy(H);const U=h[X];N.copy(U),N.sub(H.multiplyScalar(H.dot(U))).normalize(),C.crossVectors(P,U);const V=C.dot(m[X])<0?-1:1;d.setXYZW(X,N.x,N.y,N.z,V)}for(let X=0,U=D.length;X<U;++X){const R=D[X],V=R.start,lt=R.count;for(let ot=V,gt=V+lt;ot<gt;ot+=3)z(e.getX(ot+0)),z(e.getX(ot+1)),z(e.getX(ot+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new J,u=new J,d=new J,h=new J,m=new J,p=new J,x=new J,g=new J;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),w=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),x.subVectors(d,u),g.subVectors(l,u),x.cross(g),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),h.add(x),m.add(x),p.add(x),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,u),g.subVectors(l,u),x.cross(g),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,S=new p.constructor(m.length*x);let M=0,T=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?M=m[w]*h.data.stride+h.offset:M=m[w]*x;for(let v=0;v<x;v++)S[T++]=p[M++]}return new Ni(S,x,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ca,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,g=p.length;x<g;x++){const S=p[x],M=e(S,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],g=u[p];for(let S=0,M=g.length;S<M;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H0=new Ze,fs=new Zy,sc=new Mh,G0=new J,rc=new J,oc=new J,lc=new J,fd=new J,cc=new J,V0=new J,uc=new J;class Ei extends Xn{constructor(e=new ca,i=new Eh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){cc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],g=u[m];x!==0&&(fd.fromBufferAttribute(g,e),d?cc.addScaledVector(fd,x):cc.addScaledVector(fd.sub(i),x))}i.add(cc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),sc.copy(s.boundingSphere),sc.applyMatrix4(u),fs.copy(e.ray).recast(e.near),!(sc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(sc,G0)===null||fs.origin.distanceToSquared(G0)>(e.far-e.near)**2))&&(H0.copy(u).invert(),fs.copy(e.ray).applyMatrix4(H0),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,fs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,w=S.length;T<w;T++){const y=S[T],v=d[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=D,H=N;C<H;C+=3){const P=h.getX(C),z=h.getX(C+1),X=h.getX(C+2);l=fc(this,v,e,s,p,x,g,P,z,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let y=T,v=w;y<v;y+=3){const D=h.getX(y),N=h.getX(y+1),C=h.getX(y+2);l=fc(this,d,e,s,p,x,g,D,N,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,w=S.length;T<w;T++){const y=S[T],v=d[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=D,H=N;C<H;C+=3){const P=C,z=C+1,X=C+2;l=fc(this,v,e,s,p,x,g,P,z,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=T,v=w;y<v;y+=3){const D=y,N=y+1,C=y+2;l=fc(this,d,e,s,p,x,g,D,N,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function sM(o,e,i,s,l,u,d,h){let m;if(e.side===Vn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,e.side===Va,h),m===null)return null;uc.copy(h),uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(uc);return p<i.near||p>i.far?null:{distance:p,point:uc.clone(),object:o}}function fc(o,e,i,s,l,u,d,h,m,p){o.getVertexPosition(h,rc),o.getVertexPosition(m,oc),o.getVertexPosition(p,lc);const x=sM(o,e,i,s,rc,oc,lc,V0);if(x){const g=new J;yi.getBarycoord(V0,rc,oc,lc,g),l&&(x.uv=yi.getInterpolatedAttribute(l,h,m,p,g,new Ee)),u&&(x.uv1=yi.getInterpolatedAttribute(u,h,m,p,g,new Ee)),d&&(x.normal=yi.getInterpolatedAttribute(d,h,m,p,g,new J),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new J,materialIndex:0};yi.getNormal(rc,oc,lc,S.normal),x.face=S,x.barycoord=g}return x}class Io extends ca{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],g=[];let S=0,M=0;T("z","y","x",-1,-1,s,i,e,d,u,0),T("z","y","x",1,-1,s,i,-e,d,u,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,u,4),T("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ei(p,3)),this.setAttribute("normal",new ei(x,3)),this.setAttribute("uv",new ei(g,2));function T(w,y,v,D,N,C,H,P,z,X,U){const R=C/z,V=H/X,lt=C/2,ot=H/2,gt=P/2,_t=z+1,B=X+1;let Q=0,K=0;const yt=new J;for(let Tt=0;Tt<B;Tt++){const O=Tt*V-ot;for(let at=0;at<_t;at++){const St=at*R-lt;yt[w]=St*D,yt[y]=O*N,yt[v]=gt,p.push(yt.x,yt.y,yt.z),yt[w]=0,yt[y]=0,yt[v]=P>0?1:-1,x.push(yt.x,yt.y,yt.z),g.push(at/z),g.push(1-Tt/X),Q+=1}}for(let Tt=0;Tt<X;Tt++)for(let O=0;O<z;O++){const at=S+O+_t*Tt,St=S+O+_t*(Tt+1),Z=S+(O+1)+_t*(Tt+1),ft=S+(O+1)+_t*Tt;m.push(at,St,ft),m.push(St,Z,ft),K+=6}h.addGroup(M,K,U),M+=K,S+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const s=Rr(o[i]);for(const l in s)e[l]=s[l]}return e}function rM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function X_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const oM={clone:Rr,merge:Nn};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class W_ extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new J,k0=new Ee,X0=new Ee;class ti extends W_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(Wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,i){return this.getViewBounds(e,k0,X0),i.subVectors(X0,k0)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Wf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class uM extends Xn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ti(pr,mr,e,i);l.layers=this.layers,this.add(l);const u=new ti(pr,mr,e,i);u.layers=this.layers,this.add(u);const d=new ti(pr,mr,e,i);d.layers=this.layers,this.add(d);const h=new ti(pr,mr,e,i);h.layers=this.layers,this.add(h);const m=new ti(pr,mr,e,i);m.layers=this.layers,this.add(m);const p=new ti(pr,mr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(g,S,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class j_ extends kn{constructor(e,i,s,l,u,d,h,m,p,x){e=e!==void 0?e:[],i=i!==void 0?i:Mr,super(e,i,s,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends Es{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new j_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ui}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Io(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Rr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new Ei(l,u),h=i.minFilter;return i.minFilter===ys&&(i.minFilter=Ui),new uM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}class dc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,s),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new dc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class hM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const hd=new J,pM=new J,mM=new oe;class gs{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=hd.subVectors(s,i).cross(pM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(hd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||mM.getNormalMatrix(e),l=this.coplanarPoint(hd).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Mh,hc=new J;class bh{constructor(e=new gs,i=new gs,s=new gs,l=new gs,u=new gs,d=new gs){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra){const s=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],x=l[5],g=l[6],S=l[7],M=l[8],T=l[9],w=l[10],y=l[11],v=l[12],D=l[13],N=l[14],C=l[15];if(s[0].setComponents(m-u,S-p,y-M,C-v).normalize(),s[1].setComponents(m+u,S+p,y+M,C+v).normalize(),s[2].setComponents(m+d,S+x,y+T,C+D).normalize(),s[3].setComponents(m-d,S-x,y-T,C-D).normalize(),s[4].setComponents(m-h,S-g,y-w,C-N).normalize(),i===ra)s[5].setComponents(m+h,S+g,y+w,C+N).normalize();else if(i===bc)s[5].setComponents(h,g,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(hc.x=l.normal.x>0?e.max.x:e.min.x,hc.y=l.normal.y>0?e.max.y:e.min.y,hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q_ extends kn{constructor(e,i,s,l,u,d,h,m,p,x=xr){if(x!==xr&&x!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&x===xr&&(s=Ms),s===void 0&&x===Tr&&(s=br),super(null,l,u,d,h,m,x,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:bi,this.minFilter=m!==void 0?m:bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Th extends ca{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],d=[];h(l),p(s),x(),this.setAttribute("position",new ei(u,3)),this.setAttribute("normal",new ei(u.slice(),3)),this.setAttribute("uv",new ei(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const N=new J,C=new J,H=new J;for(let P=0;P<i.length;P+=3)M(i[P+0],N),M(i[P+1],C),M(i[P+2],H),m(N,C,H,D)}function m(D,N,C,H){const P=H+1,z=[];for(let X=0;X<=P;X++){z[X]=[];const U=D.clone().lerp(C,X/P),R=N.clone().lerp(C,X/P),V=P-X;for(let lt=0;lt<=V;lt++)lt===0&&X===P?z[X][lt]=U:z[X][lt]=U.clone().lerp(R,lt/V)}for(let X=0;X<P;X++)for(let U=0;U<2*(P-X)-1;U++){const R=Math.floor(U/2);U%2===0?(S(z[X][R+1]),S(z[X+1][R]),S(z[X][R])):(S(z[X][R+1]),S(z[X+1][R+1]),S(z[X+1][R]))}}function p(D){const N=new J;for(let C=0;C<u.length;C+=3)N.x=u[C+0],N.y=u[C+1],N.z=u[C+2],N.normalize().multiplyScalar(D),u[C+0]=N.x,u[C+1]=N.y,u[C+2]=N.z}function x(){const D=new J;for(let N=0;N<u.length;N+=3){D.x=u[N+0],D.y=u[N+1],D.z=u[N+2];const C=y(D)/2/Math.PI+.5,H=v(D)/Math.PI+.5;d.push(C,1-H)}T(),g()}function g(){for(let D=0;D<d.length;D+=6){const N=d[D+0],C=d[D+2],H=d[D+4],P=Math.max(N,C,H),z=Math.min(N,C,H);P>.9&&z<.1&&(N<.2&&(d[D+0]+=1),C<.2&&(d[D+2]+=1),H<.2&&(d[D+4]+=1))}}function S(D){u.push(D.x,D.y,D.z)}function M(D,N){const C=D*3;N.x=e[C+0],N.y=e[C+1],N.z=e[C+2]}function T(){const D=new J,N=new J,C=new J,H=new J,P=new Ee,z=new Ee,X=new Ee;for(let U=0,R=0;U<u.length;U+=9,R+=6){D.set(u[U+0],u[U+1],u[U+2]),N.set(u[U+3],u[U+4],u[U+5]),C.set(u[U+6],u[U+7],u[U+8]),P.set(d[R+0],d[R+1]),z.set(d[R+2],d[R+3]),X.set(d[R+4],d[R+5]),H.copy(D).add(N).add(C).divideScalar(3);const V=y(H);w(P,R+0,D,V),w(z,R+2,N,V),w(X,R+4,C,V)}}function w(D,N,C,H){H<0&&D.x===1&&(d[N]=D.x-1),C.x===0&&C.z===0&&(d[N]=H/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function v(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.vertices,e.indices,e.radius,e.details)}}class Ah extends Th{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Ah(e.radius,e.detail)}}class Cc extends ca{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,g=e/h,S=i/m,M=[],T=[],w=[],y=[];for(let v=0;v<x;v++){const D=v*S-d;for(let N=0;N<p;N++){const C=N*g-u;T.push(C,-D,0),w.push(0,0,1),y.push(N/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<h;D++){const N=D+p*v,C=D+p*(v+1),H=D+1+p*(v+1),P=D+1+p*v;M.push(N,C,P),M.push(C,H,P)}this.setIndex(M),this.setAttribute("position",new ei(T,3)),this.setAttribute("normal",new ei(w,3)),this.setAttribute("uv",new ei(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rh extends ca{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const x=[],g=new J,S=new J,M=[],T=[],w=[],y=[];for(let v=0;v<=s;v++){const D=[],N=v/s;let C=0;v===0&&d===0?C=.5/i:v===s&&m===Math.PI&&(C=-.5/i);for(let H=0;H<=i;H++){const P=H/i;g.x=-e*Math.cos(l+P*u)*Math.sin(d+N*h),g.y=e*Math.cos(d+N*h),g.z=e*Math.sin(l+P*u)*Math.sin(d+N*h),T.push(g.x,g.y,g.z),S.copy(g).normalize(),w.push(S.x,S.y,S.z),y.push(P+C,1-N),D.push(p++)}x.push(D)}for(let v=0;v<s;v++)for(let D=0;D<i;D++){const N=x[v][D+1],C=x[v][D],H=x[v+1][D],P=x[v+1][D+1];(v!==0||d>0)&&M.push(N,C,P),(v!==s-1||m<Math.PI)&&M.push(C,H,P)}this.setIndex(M),this.setAttribute("position",new ei(T,3)),this.setAttribute("normal",new ei(w,3)),this.setAttribute("uv",new ei(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gM extends Bo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=P_,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _M extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vM extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Y_ extends Xn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const pd=new Ze,W0=new J,j0=new J;class xM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;W0.setFromMatrixPosition(e.matrixWorld),i.position.copy(W0),j0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(j0),i.updateMatrixWorld(),pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const q0=new Ze,Do=new J,md=new J;class SM extends xM{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Do.setFromMatrixPosition(e.matrixWorld),s.position.copy(Do),md.copy(s.position),md.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(md),s.updateMatrixWorld(),l.makeTranslation(-Do.x,-Do.y,-Do.z),q0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(q0)}}class yM extends Y_{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new SM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class MM extends W_{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class EM extends Y_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class bM extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Y0(o,e,i,s){const l=TM(s);switch(i){case w_:return o*e;case U_:return o*e;case N_:return o*e*2;case L_:return o*e/l.components*l.byteLength;case vh:return o*e/l.components*l.byteLength;case O_:return o*e*2/l.components*l.byteLength;case xh:return o*e*2/l.components*l.byteLength;case D_:return o*e*3/l.components*l.byteLength;case Mi:return o*e*4/l.components*l.byteLength;case Sh:return o*e*4/l.components*l.byteLength;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xc:case Sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Fd:return Math.max(o,16)*Math.max(e,8)/4;case Pd:case Id:return Math.max(o,8)*Math.max(e,8)/2;case Hd:case Gd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yc:case ih:case ah:return Math.ceil(o/4)*Math.ceil(e/4)*16;case z_:case sh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case rh:case oh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function TM(o){switch(o){case la:case A_:return{byteLength:1,components:1};case No:case R_:case Lo:return{byteLength:2,components:1};case gh:case _h:return{byteLength:2,components:4};case Ms:case mh:case sa:return{byteLength:4,components:1};case C_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Z_(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function AM(o){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,x);else{g.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<g.length;M++){const T=g[S],w=g[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,g[S]=w)}g.length=S+1;for(let M=0,T=g.length;M<T;M++){const w=g[M];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
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
#endif`,wM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
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
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HM=`#ifdef USE_IRIDESCENCE
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
#endif`,GM=`#ifdef USE_BUMPMAP
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,KM=`#define PI 3.141592653589793
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
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JM=`vec3 transformedNormal = objectNormal;
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
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sE=`#ifdef USE_ENVMAP
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
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
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
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
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
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bE=`PhysicalMaterial material;
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
#endif`,TE=`struct PhysicalMaterial {
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
}`,AE=`
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
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
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PE=`#if defined( USE_POINTS_UV )
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
#endif`,BE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
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
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fb=`float getShadowMask() {
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
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
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
}`,Lb=`#if DEPTH_PACKING == 3200
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
}`,Ob=`#define DISTANCE
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
}`,zb=`#define DISTANCE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#define LAMBERT
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
}`,kb=`#define LAMBERT
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
}`,Xb=`#define MATCAP
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
}`,Wb=`#define MATCAP
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
}`,jb=`#define NORMAL
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
}`,qb=`#define NORMAL
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
}`,Yb=`#define PHONG
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
}`,Zb=`#define PHONG
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
}`,Kb=`#define STANDARD
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
}`,Qb=`#define STANDARD
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
}`,Jb=`#define TOON
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
}`,$b=`#define TOON
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
}`,t1=`uniform float size;
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
}`,e1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 color;
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
}`,a1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:RM,alphahash_pars_fragment:CM,alphamap_fragment:wM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:NM,aomap_fragment:LM,aomap_pars_fragment:OM,batching_pars_vertex:zM,batching_vertex:PM,begin_vertex:BM,beginnormal_vertex:IM,bsdfs:FM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:WM,color_fragment:jM,color_pars_fragment:qM,color_pars_vertex:YM,color_vertex:ZM,common:KM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:JM,displacementmap_pars_vertex:$M,displacementmap_vertex:tE,emissivemap_fragment:eE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:aE,envmap_fragment:sE,envmap_common_pars_fragment:rE,envmap_pars_fragment:oE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:xE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:fE,fog_fragment:dE,fog_pars_fragment:hE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:_E,lights_pars_begin:vE,lights_toon_fragment:SE,lights_toon_pars_fragment:yE,lights_phong_fragment:ME,lights_phong_pars_fragment:EE,lights_physical_fragment:bE,lights_physical_pars_fragment:TE,lights_fragment_begin:AE,lights_fragment_maps:RE,lights_fragment_end:CE,logdepthbuf_fragment:wE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:NE,map_fragment:LE,map_pars_fragment:OE,map_particle_fragment:zE,map_particle_pars_fragment:PE,metalnessmap_fragment:BE,metalnessmap_pars_fragment:IE,morphinstance_vertex:FE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:kE,normal_fragment_begin:XE,normal_fragment_maps:WE,normal_pars_fragment:jE,normal_pars_vertex:qE,normal_vertex:YE,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:$E,opaque_fragment:tb,packing:eb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:ab,dithering_pars_fragment:sb,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:ub,shadowmask_pars_fragment:fb,skinbase_vertex:db,skinning_pars_vertex:hb,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:_b,tonemapping_fragment:vb,tonemapping_pars_fragment:xb,transmission_fragment:Sb,transmission_pars_fragment:yb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:bb,worldpos_vertex:Tb,background_vert:Ab,background_frag:Rb,backgroundCube_vert:Cb,backgroundCube_frag:wb,cube_vert:Db,cube_frag:Ub,depth_vert:Nb,depth_frag:Lb,distanceRGBA_vert:Ob,distanceRGBA_frag:zb,equirect_vert:Pb,equirect_frag:Bb,linedashed_vert:Ib,linedashed_frag:Fb,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Vb,meshlambert_frag:kb,meshmatcap_vert:Xb,meshmatcap_frag:Wb,meshnormal_vert:jb,meshnormal_frag:qb,meshphong_vert:Yb,meshphong_frag:Zb,meshphysical_vert:Kb,meshphysical_frag:Qb,meshtoon_vert:Jb,meshtoon_frag:$b,points_vert:t1,points_frag:e1,shadow_vert:n1,shadow_frag:i1,sprite_vert:a1,sprite_frag:s1},Nt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Di={basic:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Nn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Nn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Nn([Nt.points,Nt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Nn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Nn([Nt.common,Nt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Nn([Nt.sprite,Nt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Nn([Nt.common,Nt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Nn([Nt.lights,Nt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Di.physical={uniforms:Nn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const pc={r:0,b:0,g:0},hs=new Li,r1=new Ze;function o1(o,e,i,s,l,u,d){const h=new we(0);let m=u===!0?0:1,p,x,g=null,S=0,M=null;function T(N){let C=N.isScene===!0?N.background:null;return C&&C.isTexture&&(C=(N.backgroundBlurriness>0?i:e).get(C)),C}function w(N){let C=!1;const H=T(N);H===null?v(h,m):H&&H.isColor&&(v(H,1),C=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?s.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,C){const H=T(C);H&&(H.isCubeTexture||H.mapping===Rc)?(x===void 0&&(x=new Ei(new Io(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Rr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(P,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),hs.copy(C.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),x.material.uniforms.envMap.value=H,x.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(hs)),x.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Fe,(g!==H||S!==H.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,g=H,S=H.version,M=o.toneMapping),x.layers.enableAll(),N.unshift(x,x.geometry,x.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Ei(new Cc(2,2),new ka({name:"BackgroundMaterial",uniforms:Rr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Fe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||S!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=H,S=H.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,C){N.getRGB(pc,X_(o)),s.buffers.color.setClear(pc.r,pc.g,pc.b,C,d)}function D(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,C=1){h.set(N),m=C,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(h,m)},render:w,addToRenderList:y,dispose:D}}function l1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,d=!1;function h(R,V,lt,ot,gt){let _t=!1;const B=g(ot,lt,V);u!==B&&(u=B,p(u.object)),_t=M(R,ot,lt,gt),_t&&T(R,ot,lt,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(_t||d)&&(d=!1,C(R,V,lt,ot),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function x(R){return o.deleteVertexArray(R)}function g(R,V,lt){const ot=lt.wireframe===!0;let gt=s[R.id];gt===void 0&&(gt={},s[R.id]=gt);let _t=gt[V.id];_t===void 0&&(_t={},gt[V.id]=_t);let B=_t[ot];return B===void 0&&(B=S(m()),_t[ot]=B),B}function S(R){const V=[],lt=[],ot=[];for(let gt=0;gt<i;gt++)V[gt]=0,lt[gt]=0,ot[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:lt,attributeDivisors:ot,object:R,attributes:{},index:null}}function M(R,V,lt,ot){const gt=u.attributes,_t=V.attributes;let B=0;const Q=lt.getAttributes();for(const K in Q)if(Q[K].location>=0){const Tt=gt[K];let O=_t[K];if(O===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),Tt===void 0||Tt.attribute!==O||O&&Tt.data!==O.data)return!0;B++}return u.attributesNum!==B||u.index!==ot}function T(R,V,lt,ot){const gt={},_t=V.attributes;let B=0;const Q=lt.getAttributes();for(const K in Q)if(Q[K].location>=0){let Tt=_t[K];Tt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));const O={};O.attribute=Tt,Tt&&Tt.data&&(O.data=Tt.data),gt[K]=O,B++}u.attributes=gt,u.attributesNum=B,u.index=ot}function w(){const R=u.newAttributes;for(let V=0,lt=R.length;V<lt;V++)R[V]=0}function y(R){v(R,0)}function v(R,V){const lt=u.newAttributes,ot=u.enabledAttributes,gt=u.attributeDivisors;lt[R]=1,ot[R]===0&&(o.enableVertexAttribArray(R),ot[R]=1),gt[R]!==V&&(o.vertexAttribDivisor(R,V),gt[R]=V)}function D(){const R=u.newAttributes,V=u.enabledAttributes;for(let lt=0,ot=V.length;lt<ot;lt++)V[lt]!==R[lt]&&(o.disableVertexAttribArray(lt),V[lt]=0)}function N(R,V,lt,ot,gt,_t,B){B===!0?o.vertexAttribIPointer(R,V,lt,gt,_t):o.vertexAttribPointer(R,V,lt,ot,gt,_t)}function C(R,V,lt,ot){w();const gt=ot.attributes,_t=lt.getAttributes(),B=V.defaultAttributeValues;for(const Q in _t){const K=_t[Q];if(K.location>=0){let yt=gt[Q];if(yt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const Tt=yt.normalized,O=yt.itemSize,at=e.get(yt);if(at===void 0)continue;const St=at.buffer,Z=at.type,ft=at.bytesPerElement,Et=Z===o.INT||Z===o.UNSIGNED_INT||yt.gpuType===mh;if(yt.isInterleavedBufferAttribute){const xt=yt.data,Ft=xt.stride,Yt=yt.offset;if(xt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<K.locationSize;Kt++)v(K.location+Kt,xt.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Kt=0;Kt<K.locationSize;Kt++)y(K.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Kt=0;Kt<K.locationSize;Kt++)N(K.location+Kt,O/K.locationSize,Z,Tt,Ft*ft,(Yt+O/K.locationSize*Kt)*ft,Et)}else{if(yt.isInstancedBufferAttribute){for(let xt=0;xt<K.locationSize;xt++)v(K.location+xt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let xt=0;xt<K.locationSize;xt++)y(K.location+xt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let xt=0;xt<K.locationSize;xt++)N(K.location+xt,O/K.locationSize,Z,Tt,O*ft,O/K.locationSize*xt*ft,Et)}}else if(B!==void 0){const Tt=B[Q];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(K.location,Tt);break;case 3:o.vertexAttrib3fv(K.location,Tt);break;case 4:o.vertexAttrib4fv(K.location,Tt);break;default:o.vertexAttrib1fv(K.location,Tt)}}}}D()}function H(){X();for(const R in s){const V=s[R];for(const lt in V){const ot=V[lt];for(const gt in ot)x(ot[gt].object),delete ot[gt];delete V[lt]}delete s[R]}}function P(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const lt in V){const ot=V[lt];for(const gt in ot)x(ot[gt].object),delete ot[gt];delete V[lt]}delete s[R.id]}function z(R){for(const V in s){const lt=s[V];if(lt[R.id]===void 0)continue;const ot=lt[R.id];for(const gt in ot)x(ot[gt].object),delete ot[gt];delete lt[R.id]}}function X(){U(),d=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:U,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:D}}function c1(o,e,i){let s;function l(p){s=p}function u(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function d(p,x,g){g!==0&&(o.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let M=0;for(let T=0;T<g;T++)M+=x[T];i.update(M,s,1)}function m(p,x,g,S){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)d(p[T],x[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,g);let T=0;for(let w=0;w<g;w++)T+=x[w]*S[w];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function u1(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Mi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const X=z===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==la&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!X)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:H,maxSamples:P}}function f1(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new gs,h=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||s!==0||l;return l=S,s=g.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,M){const T=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,v=o.get(g);if(!l||T===null||T.length===0||u&&!y)u?x(null):p();else{const D=u?0:s,N=D*4;let C=v.clippingState||null;m.value=C,C=x(T,S,N,M);for(let H=0;H!==N;++H)C[H]=i[H];v.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,S,M,T){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=m.value,T!==!0||y===null){const v=M+w*4,D=S.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,C=M;N!==w;++N,C+=4)d.copy(g[N]).applyMatrix4(D,h),d.normal.toArray(y,C),y[C+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function d1(o){let e=new WeakMap;function i(d,h){return h===Nd?d.mapping=Mr:h===Ld&&(d.mapping=Er),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Nd||h===Ld)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new fM(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const _r=4,Z0=[.125,.215,.35,.446,.526,.582],xs=20,gd=new MM,K0=new we;let _d=null,vd=0,xd=0,Sd=!1;const _s=(1+Math.sqrt(5))/2,gr=1/_s,Q0=[new J(-_s,gr,0),new J(_s,gr,0),new J(-gr,0,_s),new J(gr,0,_s),new J(0,_s,-gr),new J(0,_s,gr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],h1=new J;class J0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=h1}=u;_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,vd,xd),this._renderer.xr.enabled=Sd,e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Mr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Lo,format:Mi,colorSpace:Ar,depthBuffer:!1},l=$0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$0(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p1(u)),this._blurMaterial=m1(u,e,i)}return l}_compileMaterial(e){const i=new Ei(this._lodPlanes[0],e);this._renderer.compile(i,gd)}_sceneToCubeUV(e,i,s,l,u){const m=new ti(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(K0),g.toneMapping=Ga,g.autoClear=!1;const T=new Eh({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),w=new Ei(new Io,T);let y=!1;const v=e.background;v?v.isColor&&(T.color.copy(v),e.background=null,y=!0):(T.color.copy(K0),y=!0);for(let D=0;D<6;D++){const N=D%3;N===0?(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[D],u.y,u.z)):N===1?(m.up.set(0,0,p[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[D],u.z)):(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[D]));const C=this._cubeSize;mc(l,N*C,D>2?C:0,C,C),g.setRenderTarget(l),y&&g.render(w,m),g.render(e,m)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=M,g.autoClear=S,e.background=v}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Mr||e.mapping===Er;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ei(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;mc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,gd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Q0[(l-u-1)%Q0.length];this._blur(e,u-1,u,d,h)}i.autoClear=s}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,g=new Ei(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*xs-1),w=u/T,y=isFinite(u)?1+Math.floor(x*w):xs;y>xs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xs}`);const v=[];let D=0;for(let z=0;z<xs;++z){const X=z/w,U=Math.exp(-X*X/2);v.push(U),z===0?D+=U:z<y&&(D+=2*U)}for(let z=0;z<v.length;z++)v[z]=v[z]/D;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=T,S.mipInt.value=N-s;const C=this._sizeLods[l],H=3*C*(l>N-_r?l-N+_r:0),P=4*(this._cubeSize-C);mc(i,H,P,3*C,2*C),m.setRenderTarget(i),m.render(g,gd)}}function p1(o){const e=[],i=[],s=[];let l=o;const u=o-_r+1+Z0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-_r?m=Z0[d-o+_r-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,T=6,w=3,y=2,v=1,D=new Float32Array(w*T*M),N=new Float32Array(y*T*M),C=new Float32Array(v*T*M);for(let P=0;P<M;P++){const z=P%3*2/3-1,X=P>2?0:-1,U=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];D.set(U,w*T*P),N.set(S,y*T*P);const R=[P,P,P,P,P,P];C.set(R,v*T*P)}const H=new ca;H.setAttribute("position",new Ni(D,w)),H.setAttribute("uv",new Ni(N,y)),H.setAttribute("faceIndex",new Ni(C,v)),e.push(H),l>_r&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function $0(o,e,i){const s=new Es(o,e,i);return s.texture.mapping=Rc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function mc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function m1(o,e,i){const s=new Float32Array(xs),l=new J(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function t_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function e_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function g1(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Nd||m===Ld,x=m===Mr||m===Er;if(p||x){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new J0(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new J0(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function _1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ms("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function v1(o,e,i,s){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,T=g.attributes.position;let w=0;if(M!==null){const D=M.array;w=M.version;for(let N=0,C=D.length;N<C;N+=3){const H=D[N+0],P=D[N+1],z=D[N+2];S.push(H,P,P,z,z,H)}}else if(T!==void 0){const D=T.array;w=T.version;for(let N=0,C=D.length/3-1;N<C;N+=3){const H=N+0,P=N+1,z=N+2;S.push(H,P,P,z,z,H)}}else return;const y=new(I_(S)?k_:V_)(S,1);y.version=w;const v=u.get(g);v&&e.remove(v),u.set(g,y)}function x(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function x1(o,e,i){let s;function l(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*d),i.update(M,s,1)}function p(S,M,T){T!==0&&(o.drawElementsInstanced(s,M,u,S*d,T),i.update(M,s,T))}function x(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,T);let y=0;for(let v=0;v<T;v++)y+=M[v];i.update(y,s,1)}function g(S,M,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/d,M[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,w,0,T);let v=0;for(let D=0;D<T;D++)v+=M[D]*w[D];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function S1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function y1(o,e,i){const s=new WeakMap,l=new He;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let S=s.get(h);if(S===void 0||S.count!==g){let R=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const T=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let H=h.attributes.position.count*C,P=1;H>e.maxTextureSize&&(P=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*P*4*g),X=new F_(z,H,P,g);X.type=sa,X.needsUpdate=!0;const U=C*4;for(let V=0;V<g;V++){const lt=v[V],ot=D[V],gt=N[V],_t=H*P*4*V;for(let B=0;B<lt.count;B++){const Q=B*U;T===!0&&(l.fromBufferAttribute(lt,B),z[_t+Q+0]=l.x,z[_t+Q+1]=l.y,z[_t+Q+2]=l.z,z[_t+Q+3]=0),w===!0&&(l.fromBufferAttribute(ot,B),z[_t+Q+4]=l.x,z[_t+Q+5]=l.y,z[_t+Q+6]=l.z,z[_t+Q+7]=0),y===!0&&(l.fromBufferAttribute(gt,B),z[_t+Q+8]=l.x,z[_t+Q+9]=l.y,z[_t+Q+10]=l.z,z[_t+Q+11]=gt.itemSize===4?l.w:1)}}S={count:g,texture:X,size:new Ee(H,P)},s.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const w=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function M1(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const K_=new kn,n_=new q_(1,1),Q_=new F_,J_=new qy,$_=new j_,i_=[],a_=[],s_=new Float32Array(16),r_=new Float32Array(9),o_=new Float32Array(4);function wr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=i_[l];if(u===void 0&&(u=new Float32Array(l),i_[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function wc(o,e){let i=a_[e];i===void 0&&(i=new Int32Array(e),a_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function E1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function A1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function R1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,s))return;o_.set(s),o.uniformMatrix2fv(this.addr,!1,o_),dn(i,s)}}function C1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,s))return;r_.set(s),o.uniformMatrix3fv(this.addr,!1,r_),dn(i,s)}}function w1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,s))return;s_.set(s),o.uniformMatrix4fv(this.addr,!1,s_),dn(i,s)}}function D1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function U1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function N1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function L1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function O1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function z1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function P1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function B1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function I1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(n_.compareFunction=B_,u=n_):u=K_,i.setTexture2D(e||u,l)}function F1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||J_,l)}function H1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||$_,l)}function G1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Q_,l)}function V1(o){switch(o){case 5126:return E1;case 35664:return b1;case 35665:return T1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return w1;case 5124:case 35670:return D1;case 35667:case 35671:return U1;case 35668:case 35672:return N1;case 35669:case 35673:return L1;case 5125:return O1;case 36294:return z1;case 36295:return P1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return G1}}function k1(o,e){o.uniform1fv(this.addr,e)}function X1(o,e){const i=wr(e,this.size,2);o.uniform2fv(this.addr,i)}function W1(o,e){const i=wr(e,this.size,3);o.uniform3fv(this.addr,i)}function j1(o,e){const i=wr(e,this.size,4);o.uniform4fv(this.addr,i)}function q1(o,e){const i=wr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Y1(o,e){const i=wr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Z1(o,e){const i=wr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function K1(o,e){o.uniform1iv(this.addr,e)}function Q1(o,e){o.uniform2iv(this.addr,e)}function J1(o,e){o.uniform3iv(this.addr,e)}function $1(o,e){o.uniform4iv(this.addr,e)}function tT(o,e){o.uniform1uiv(this.addr,e)}function eT(o,e){o.uniform2uiv(this.addr,e)}function nT(o,e){o.uniform3uiv(this.addr,e)}function iT(o,e){o.uniform4uiv(this.addr,e)}function aT(o,e,i){const s=this.cache,l=e.length,u=wc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||K_,u[d])}function sT(o,e,i){const s=this.cache,l=e.length,u=wc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||J_,u[d])}function rT(o,e,i){const s=this.cache,l=e.length,u=wc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||$_,u[d])}function oT(o,e,i){const s=this.cache,l=e.length,u=wc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Q_,u[d])}function lT(o){switch(o){case 5126:return k1;case 35664:return X1;case 35665:return W1;case 35666:return j1;case 35674:return q1;case 35675:return Y1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return $1;case 5125:return tT;case 36294:return eT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return oT}}class cT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=V1(i.type)}}class uT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lT(i.type)}}class fT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function l_(o,e){o.seq.push(e),o.map[e.id]=e}function dT(o,e,i){const s=o.name,l=s.length;for(yd.lastIndex=0;;){const u=yd.exec(s),d=yd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){l_(i,p===void 0?new cT(h,o,e):new uT(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new fT(h),l_(i,g)),i=g}}}class Mc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);dT(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function c_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const hT=37297;let pT=0;function mT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const u_=new oe;function gT(o){Ce._getMatrix(u_,Ce.workingColorSpace,o);const e=`mat3( ${u_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Ec:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function f_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+mT(o.getShaderSource(e),d)}else return l}function _T(o,e){const i=gT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function vT(o,e){let i;switch(e){case xy:i="Linear";break;case Sy:i="Reinhard";break;case yy:i="Cineon";break;case My:i="ACESFilmic";break;case by:i="AgX";break;case Ty:i="Neutral";break;case Ey:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gc=new J;function xT(){Ce.getLuminanceCoefficients(gc);const o=gc.x.toFixed(4),e=gc.y.toFixed(4),i=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ST(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function yT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function MT(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Uo(o){return o!==""}function d_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(o){return o.replace(ET,TT)}const bT=new Map;function TT(o,e){let i=le[e];if(i===void 0){const s=bT.get(e);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ch(i)}const AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(o){return o.replace(AT,RT)}function RT(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function m_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===JS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function wT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Mr:case Er:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function UT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ph:e="ENVMAP_BLENDING_MULTIPLY";break;case _y:e="ENVMAP_BLENDING_MIX";break;case vy:e="ENVMAP_BLENDING_ADD";break}return e}function NT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function LT(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=CT(i),p=wT(i),x=DT(i),g=UT(i),S=NT(i),M=ST(i),T=yT(u),w=l.createProgram();let y,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Uo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Uo).join(`
`),v.length>0&&(v+=`
`)):(y=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),v=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?le.tonemapping_pars_fragment:"",i.toneMapping!==Ga?vT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,_T("linearToOutputTexel",i.outputColorSpace),xT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),d=ch(d),d=d_(d,i),d=h_(d,i),h=ch(h),h=d_(h,i),h=h_(h,i),d=p_(d),h=p_(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===R0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=D+y+d,C=D+v+h,H=c_(l,l.VERTEX_SHADER,N),P=c_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,H),l.attachShader(w,P),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(V){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(w).trim(),ot=l.getShaderInfoLog(H).trim(),gt=l.getShaderInfoLog(P).trim();let _t=!0,B=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(_t=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,P);else{const Q=f_(l,H,"vertex"),K=f_(l,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+Q+`
`+K)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(ot===""||gt==="")&&(B=!1);B&&(V.diagnostics={runnable:_t,programLog:lt,vertexShader:{log:ot,prefix:y},fragmentShader:{log:gt,prefix:v}})}l.deleteShader(H),l.deleteShader(P),X=new Mc(l,w),U=MT(l,w)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,hT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=P,this}let OT=0;class zT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new PT(e),i.set(e,s)),s}}class PT{constructor(e){this.id=OT++,this.code=e,this.usedTimes=0}}function BT(o,e,i,s,l,u,d){const h=new H_,m=new zT,p=new Set,x=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(U){return p.add(U),U===0?"uv":`uv${U}`}function y(U,R,V,lt,ot){const gt=lt.fog,_t=ot.geometry,B=U.isMeshStandardMaterial?lt.environment:null,Q=(U.isMeshStandardMaterial?i:e).get(U.envMap||B),K=Q&&Q.mapping===Rc?Q.image.height:null,yt=T[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const Tt=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,O=Tt!==void 0?Tt.length:0;let at=0;_t.morphAttributes.position!==void 0&&(at=1),_t.morphAttributes.normal!==void 0&&(at=2),_t.morphAttributes.color!==void 0&&(at=3);let St,Z,ft,Et;if(yt){const be=Di[yt];St=be.vertexShader,Z=be.fragmentShader}else St=U.vertexShader,Z=U.fragmentShader,m.update(U),ft=m.getVertexShaderID(U),Et=m.getFragmentShaderID(U);const xt=o.getRenderTarget(),Ft=o.state.buffers.depth.getReversed(),Yt=ot.isInstancedMesh===!0,Kt=ot.isBatchedMesh===!0,ke=!!U.map,Ge=!!U.matcap,ue=!!Q,G=!!U.aoMap,bn=!!U.lightMap,ce=!!U.bumpMap,he=!!U.normalMap,Xt=!!U.displacementMap,Ue=!!U.emissiveMap,kt=!!U.metalnessMap,L=!!U.roughnessMap,b=U.anisotropy>0,nt=U.clearcoat>0,dt=U.dispersion>0,Mt=U.iridescence>0,pt=U.sheen>0,Gt=U.transmission>0,wt=b&&!!U.anisotropyMap,Pt=nt&&!!U.clearcoatMap,pe=nt&&!!U.clearcoatNormalMap,At=nt&&!!U.clearcoatRoughnessMap,Bt=Mt&&!!U.iridescenceMap,Zt=Mt&&!!U.iridescenceThicknessMap,Vt=pt&&!!U.sheenColorMap,Ot=pt&&!!U.sheenRoughnessMap,Jt=!!U.specularMap,ae=!!U.specularColorMap,Oe=!!U.specularIntensityMap,j=Gt&&!!U.transmissionMap,Rt=Gt&&!!U.thicknessMap,ct=!!U.gradientMap,vt=!!U.alphaMap,Ct=U.alphaTest>0,Dt=!!U.alphaHash,$t=!!U.extensions;let qe=Ga;U.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(qe=o.toneMapping);const ln={shaderID:yt,shaderType:U.type,shaderName:U.name,vertexShader:St,fragmentShader:Z,defines:U.defines,customVertexShaderID:ft,customFragmentShaderID:Et,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&ot._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&ot.instanceColor!==null,instancingMorph:Yt&&ot.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:xt===null?o.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Ar,alphaToCoverage:!!U.alphaToCoverage,map:ke,matcap:Ge,envMap:ue,envMapMode:ue&&Q.mapping,envMapCubeUVHeight:K,aoMap:G,lightMap:bn,bumpMap:ce,normalMap:he,displacementMap:S&&Xt,emissiveMap:Ue,normalMapObjectSpace:he&&U.normalMapType===wy,normalMapTangentSpace:he&&U.normalMapType===P_,metalnessMap:kt,roughnessMap:L,anisotropy:b,anisotropyMap:wt,clearcoat:nt,clearcoatMap:Pt,clearcoatNormalMap:pe,clearcoatRoughnessMap:At,dispersion:dt,iridescence:Mt,iridescenceMap:Bt,iridescenceThicknessMap:Zt,sheen:pt,sheenColorMap:Vt,sheenRoughnessMap:Ot,specularMap:Jt,specularColorMap:ae,specularIntensityMap:Oe,transmission:Gt,transmissionMap:j,thicknessMap:Rt,gradientMap:ct,opaque:U.transparent===!1&&U.blending===vr&&U.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ct,alphaHash:Dt,combine:U.combine,mapUv:ke&&w(U.map.channel),aoMapUv:G&&w(U.aoMap.channel),lightMapUv:bn&&w(U.lightMap.channel),bumpMapUv:ce&&w(U.bumpMap.channel),normalMapUv:he&&w(U.normalMap.channel),displacementMapUv:Xt&&w(U.displacementMap.channel),emissiveMapUv:Ue&&w(U.emissiveMap.channel),metalnessMapUv:kt&&w(U.metalnessMap.channel),roughnessMapUv:L&&w(U.roughnessMap.channel),anisotropyMapUv:wt&&w(U.anisotropyMap.channel),clearcoatMapUv:Pt&&w(U.clearcoatMap.channel),clearcoatNormalMapUv:pe&&w(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&w(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(U.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&w(U.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&w(U.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&w(U.sheenRoughnessMap.channel),specularMapUv:Jt&&w(U.specularMap.channel),specularColorMapUv:ae&&w(U.specularColorMap.channel),specularIntensityMapUv:Oe&&w(U.specularIntensityMap.channel),transmissionMapUv:j&&w(U.transmissionMap.channel),thicknessMapUv:Rt&&w(U.thicknessMap.channel),alphaMapUv:vt&&w(U.alphaMap.channel),vertexTangents:!!_t.attributes.tangent&&(he||b),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!_t.attributes.uv&&(ke||vt),fog:!!gt,useFog:U.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ft,skinning:ot.isSkinnedMesh===!0,morphTargets:_t.morphAttributes.position!==void 0,morphNormals:_t.morphAttributes.normal!==void 0,morphColors:_t.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:at,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:ke&&U.map.isVideoTexture===!0&&Ce.getTransfer(U.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ue&&U.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(U.emissiveMap.colorSpace)===Fe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===aa,flipSided:U.side===Vn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:$t&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&U.extensions.multiDraw===!0||Kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function v(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)R.push(V),R.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(D(R,U),N(R,U),R.push(o.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function D(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function N(U,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),U.push(h.mask)}function C(U){const R=T[U.type];let V;if(R){const lt=Di[R];V=oM.clone(lt.uniforms)}else V=U.uniforms;return V}function H(U,R){let V;for(let lt=0,ot=x.length;lt<ot;lt++){const gt=x[lt];if(gt.cacheKey===R){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new LT(o,R,U,u),x.push(V)),V}function P(U){if(--U.usedTimes===0){const R=x.indexOf(U);x[R]=x[x.length-1],x.pop(),U.destroy()}}function z(U){m.remove(U)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:H,releaseProgram:P,releaseShaderCache:z,programs:x,dispose:X}}function IT(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function FT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function g_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function __(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(g,S,M,T,w,y){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:M,groupOrder:T,renderOrder:g.renderOrder,z:w,group:y},o[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=M,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=w,v.group=y),e++,v}function h(g,S,M,T,w,y){const v=d(g,S,M,T,w,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,S,M,T,w,y){const v=d(g,S,M,T,w,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||FT),s.length>1&&s.sort(S||g_),l.length>1&&l.sort(S||g_)}function x(){for(let g=e,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function HT(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new __,o.set(s,[d])):l>=u.length?(d=new __,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function GT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new we};break;case"SpotLight":i={position:new J,direction:new J,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=i,i}}}function VT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let kT=0;function XT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function WT(o){const e=new GT,i=VT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,u=new Ze,d=new Ze;function h(p){let x=0,g=0,S=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,T=0,w=0,y=0,v=0,D=0,N=0,C=0,H=0,P=0,z=0;p.sort(XT);for(let U=0,R=p.length;U<R;U++){const V=p[U],lt=V.color,ot=V.intensity,gt=V.distance,_t=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)x+=lt.r*ot,g+=lt.g*ot,S+=lt.b*ot;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],ot);z++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,K=i.get(V);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,s.directionalShadow[M]=K,s.directionalShadowMap[M]=_t,s.directionalShadowMatrix[M]=V.shadow.matrix,D++}s.directional[M]=B,M++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(lt).multiplyScalar(ot),B.distance=gt,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[w]=B;const Q=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,Q.updateMatrices(V),V.castShadow&&P++),s.spotLightMatrix[w]=Q.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,s.spotShadow[w]=K,s.spotShadowMap[w]=_t,C++}w++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(lt).multiplyScalar(ot),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=B,y++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const Q=V.shadow,K=i.get(V);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,s.pointShadow[T]=K,s.pointShadowMap[T]=_t,s.pointShadowMatrix[T]=V.shadow.matrix,N++}s.point[T]=B,T++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(ot),B.groundColor.copy(V.groundColor).multiplyScalar(ot),s.hemi[v]=B,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=S;const X=s.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==v||X.numDirectionalShadows!==D||X.numPointShadows!==N||X.numSpotShadows!==C||X.numSpotMaps!==H||X.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=C+H-P,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=z,X.directionalLength=M,X.pointLength=T,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=v,X.numDirectionalShadows=D,X.numPointShadows=N,X.numSpotShadows=C,X.numSpotMaps=H,X.numLightProbes=z,s.version=kT++)}function m(p,x){let g=0,S=0,M=0,T=0,w=0;const y=x.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const N=p[v];if(N.isDirectionalLight){const C=s.directional[g];C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),g++}else if(N.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(y),d.identity(),u.copy(N.matrixWorld),u.premultiply(y),d.extractRotation(u),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(N.isPointLight){const C=s.point[S];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:s}}function v_(o){const e=new WT(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function u(x){i.push(x)}function d(x){s.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function jT(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new v_(o),e.set(l,[h])):u>=d.length?(h=new v_(o),d.push(h)):h=d[u],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const qT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YT=`uniform sampler2D shadow_pass;
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
}`;function ZT(o,e,i){let s=new bh;const l=new Ee,u=new Ee,d=new He,h=new _M({depthPacking:Cy}),m=new vM,p={},x=i.maxTextureSize,g={[Va]:Vn,[Vn]:Va,[aa]:aa},S=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:qT,fragmentShader:YT}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new ca;T.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ei(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b_;let v=this.type;this.render=function(P,z,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const U=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ha),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const ot=v!==ia&&this.type===ia,gt=v===ia&&this.type!==ia;for(let _t=0,B=P.length;_t<B;_t++){const Q=P[_t],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const yt=K.getFrameExtents();if(l.multiply(yt),u.copy(K.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/yt.x),l.x=u.x*yt.x,K.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/yt.y),l.y=u.y*yt.y,K.mapSize.y=u.y)),K.map===null||ot===!0||gt===!0){const O=this.type!==ia?{minFilter:bi,magFilter:bi}:{};K.map!==null&&K.map.dispose(),K.map=new Es(l.x,l.y,O),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const Tt=K.getViewportCount();for(let O=0;O<Tt;O++){const at=K.getViewport(O);d.set(u.x*at.x,u.y*at.y,u.x*at.z,u.y*at.w),lt.viewport(d),K.updateMatrices(Q,O),s=K.getFrustum(),C(z,X,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===ia&&D(K,X),K.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(U,R,V)};function D(P,z){const X=e.update(w);S.defines.VSM_SAMPLES!==P.blurSamples&&(S.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Es(l.x,l.y)),S.uniforms.shadow_pass.value=P.map.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(z,null,X,S,w,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(z,null,X,M,w,null)}function N(P,z,X,U){let R=null;const V=X.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)R=V;else if(R=X.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const lt=R.uuid,ot=z.uuid;let gt=p[lt];gt===void 0&&(gt={},p[lt]=gt);let _t=gt[ot];_t===void 0&&(_t=R.clone(),gt[ot]=_t,z.addEventListener("dispose",H)),R=_t}if(R.visible=z.visible,R.wireframe=z.wireframe,U===ia?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:g[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=o.properties.get(R);lt.light=X}return R}function C(P,z,X,U,R){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===ia)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld);const ot=e.update(P),gt=P.material;if(Array.isArray(gt)){const _t=ot.groups;for(let B=0,Q=_t.length;B<Q;B++){const K=_t[B],yt=gt[K.materialIndex];if(yt&&yt.visible){const Tt=N(P,yt,U,R);P.onBeforeShadow(o,P,z,X,ot,Tt,K),o.renderBufferDirect(X,null,ot,Tt,P,K),P.onAfterShadow(o,P,z,X,ot,Tt,K)}}}else if(gt.visible){const _t=N(P,gt,U,R);P.onBeforeShadow(o,P,z,X,ot,_t,null),o.renderBufferDirect(X,null,ot,_t,P,null),P.onAfterShadow(o,P,z,X,ot,_t,null)}}const lt=P.children;for(let ot=0,gt=lt.length;ot<gt;ot++)C(lt[ot],z,X,U,R)}function H(P){P.target.removeEventListener("dispose",H);for(const X in p){const U=p[X],R=P.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const KT={[Td]:Ad,[Rd]:Dd,[Cd]:Ud,[yr]:wd,[Ad]:Td,[Dd]:Rd,[Ud]:Cd,[wd]:yr};function QT(o,e){function i(){let j=!1;const Rt=new He;let ct=null;const vt=new He(0,0,0,0);return{setMask:function(Ct){ct!==Ct&&!j&&(o.colorMask(Ct,Ct,Ct,Ct),ct=Ct)},setLocked:function(Ct){j=Ct},setClear:function(Ct,Dt,$t,qe,ln){ln===!0&&(Ct*=qe,Dt*=qe,$t*=qe),Rt.set(Ct,Dt,$t,qe),vt.equals(Rt)===!1&&(o.clearColor(Ct,Dt,$t,qe),vt.copy(Rt))},reset:function(){j=!1,ct=null,vt.set(-1,0,0,0)}}}function s(){let j=!1,Rt=!1,ct=null,vt=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const $t=e.get("EXT_clip_control");Rt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const qe=Ct;Ct=null,this.setClear(qe)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?xt(o.DEPTH_TEST):Ft(o.DEPTH_TEST)},setMask:function(Dt){ct!==Dt&&!j&&(o.depthMask(Dt),ct=Dt)},setFunc:function(Dt){if(Rt&&(Dt=KT[Dt]),vt!==Dt){switch(Dt){case Td:o.depthFunc(o.NEVER);break;case Ad:o.depthFunc(o.ALWAYS);break;case Rd:o.depthFunc(o.LESS);break;case yr:o.depthFunc(o.LEQUAL);break;case Cd:o.depthFunc(o.EQUAL);break;case wd:o.depthFunc(o.GEQUAL);break;case Dd:o.depthFunc(o.GREATER);break;case Ud:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}vt=Dt}},setLocked:function(Dt){j=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){j=!1,ct=null,vt=null,Ct=null,Rt=!1}}}function l(){let j=!1,Rt=null,ct=null,vt=null,Ct=null,Dt=null,$t=null,qe=null,ln=null;return{setTest:function(be){j||(be?xt(o.STENCIL_TEST):Ft(o.STENCIL_TEST))},setMask:function(be){Rt!==be&&!j&&(o.stencilMask(be),Rt=be)},setFunc:function(be,_n,di){(ct!==be||vt!==_n||Ct!==di)&&(o.stencilFunc(be,_n,di),ct=be,vt=_n,Ct=di)},setOp:function(be,_n,di){(Dt!==be||$t!==_n||qe!==di)&&(o.stencilOp(be,_n,di),Dt=be,$t=_n,qe=di)},setLocked:function(be){j=be},setClear:function(be){ln!==be&&(o.clearStencil(be),ln=be)},reset:function(){j=!1,Rt=null,ct=null,vt=null,Ct=null,Dt=null,$t=null,qe=null,ln=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,M=[],T=null,w=!1,y=null,v=null,D=null,N=null,C=null,H=null,P=null,z=new we(0,0,0),X=0,U=!1,R=null,V=null,lt=null,ot=null,gt=null;const _t=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=Q>=1):K.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=Q>=2);let yt=null,Tt={};const O=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),St=new He().fromArray(O),Z=new He().fromArray(at);function ft(j,Rt,ct,vt){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(j,Dt),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<ct;$t++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const Et={};Et[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),Et[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Et[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),xt(o.DEPTH_TEST),d.setFunc(yr),ce(!1),he(y0),xt(o.CULL_FACE),G(Ha);function xt(j){x[j]!==!0&&(o.enable(j),x[j]=!0)}function Ft(j){x[j]!==!1&&(o.disable(j),x[j]=!1)}function Yt(j,Rt){return g[j]!==Rt?(o.bindFramebuffer(j,Rt),g[j]=Rt,j===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Rt),j===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Kt(j,Rt){let ct=M,vt=!1;if(j){ct=S.get(Rt),ct===void 0&&(ct=[],S.set(Rt,ct));const Ct=j.textures;if(ct.length!==Ct.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)ct[Dt]=o.COLOR_ATTACHMENT0+Dt;ct.length=Ct.length,vt=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,vt=!0);vt&&o.drawBuffers(ct)}function ke(j){return T!==j?(o.useProgram(j),T=j,!0):!1}const Ge={[vs]:o.FUNC_ADD,[ty]:o.FUNC_SUBTRACT,[ey]:o.FUNC_REVERSE_SUBTRACT};Ge[ny]=o.MIN,Ge[iy]=o.MAX;const ue={[ay]:o.ZERO,[sy]:o.ONE,[ry]:o.SRC_COLOR,[Ed]:o.SRC_ALPHA,[dy]:o.SRC_ALPHA_SATURATE,[uy]:o.DST_COLOR,[ly]:o.DST_ALPHA,[oy]:o.ONE_MINUS_SRC_COLOR,[bd]:o.ONE_MINUS_SRC_ALPHA,[fy]:o.ONE_MINUS_DST_COLOR,[cy]:o.ONE_MINUS_DST_ALPHA,[hy]:o.CONSTANT_COLOR,[py]:o.ONE_MINUS_CONSTANT_COLOR,[my]:o.CONSTANT_ALPHA,[gy]:o.ONE_MINUS_CONSTANT_ALPHA};function G(j,Rt,ct,vt,Ct,Dt,$t,qe,ln,be){if(j===Ha){w===!0&&(Ft(o.BLEND),w=!1);return}if(w===!1&&(xt(o.BLEND),w=!0),j!==$S){if(j!==y||be!==U){if((v!==vs||C!==vs)&&(o.blendEquation(o.FUNC_ADD),v=vs,C=vs),be)switch(j){case vr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case M0:o.blendFunc(o.ONE,o.ONE);break;case E0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case b0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case vr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case M0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case E0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case b0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}D=null,N=null,H=null,P=null,z.set(0,0,0),X=0,y=j,U=be}return}Ct=Ct||Rt,Dt=Dt||ct,$t=$t||vt,(Rt!==v||Ct!==C)&&(o.blendEquationSeparate(Ge[Rt],Ge[Ct]),v=Rt,C=Ct),(ct!==D||vt!==N||Dt!==H||$t!==P)&&(o.blendFuncSeparate(ue[ct],ue[vt],ue[Dt],ue[$t]),D=ct,N=vt,H=Dt,P=$t),(qe.equals(z)===!1||ln!==X)&&(o.blendColor(qe.r,qe.g,qe.b,ln),z.copy(qe),X=ln),y=j,U=!1}function bn(j,Rt){j.side===aa?Ft(o.CULL_FACE):xt(o.CULL_FACE);let ct=j.side===Vn;Rt&&(ct=!ct),ce(ct),j.blending===vr&&j.transparent===!1?G(Ha):G(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const vt=j.stencilWrite;h.setTest(vt),vt&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ue(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(j){R!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),R=j)}function he(j){j!==KS?(xt(o.CULL_FACE),j!==V&&(j===y0?o.cullFace(o.BACK):j===QS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ft(o.CULL_FACE),V=j}function Xt(j){j!==lt&&(B&&o.lineWidth(j),lt=j)}function Ue(j,Rt,ct){j?(xt(o.POLYGON_OFFSET_FILL),(ot!==Rt||gt!==ct)&&(o.polygonOffset(Rt,ct),ot=Rt,gt=ct)):Ft(o.POLYGON_OFFSET_FILL)}function kt(j){j?xt(o.SCISSOR_TEST):Ft(o.SCISSOR_TEST)}function L(j){j===void 0&&(j=o.TEXTURE0+_t-1),yt!==j&&(o.activeTexture(j),yt=j)}function b(j,Rt,ct){ct===void 0&&(yt===null?ct=o.TEXTURE0+_t-1:ct=yt);let vt=Tt[ct];vt===void 0&&(vt={type:void 0,texture:void 0},Tt[ct]=vt),(vt.type!==j||vt.texture!==Rt)&&(yt!==ct&&(o.activeTexture(ct),yt=ct),o.bindTexture(j,Rt||Et[j]),vt.type=j,vt.texture=Rt)}function nt(){const j=Tt[yt];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function dt(){try{o.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Mt(){try{o.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{o.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Gt(){try{o.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function wt(){try{o.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pe(){try{o.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function At(){try{o.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Bt(){try{o.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Zt(){try{o.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Vt(j){St.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),St.copy(j))}function Ot(j){Z.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Z.copy(j))}function Jt(j,Rt){let ct=p.get(Rt);ct===void 0&&(ct=new WeakMap,p.set(Rt,ct));let vt=ct.get(j);vt===void 0&&(vt=o.getUniformBlockIndex(Rt,j.name),ct.set(j,vt))}function ae(j,Rt){const vt=p.get(Rt).get(j);m.get(Rt)!==vt&&(o.uniformBlockBinding(Rt,vt,j.__bindingPointIndex),m.set(Rt,vt))}function Oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},yt=null,Tt={},g={},S=new WeakMap,M=[],T=null,w=!1,y=null,v=null,D=null,N=null,C=null,H=null,P=null,z=new we(0,0,0),X=0,U=!1,R=null,V=null,lt=null,ot=null,gt=null,St.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:xt,disable:Ft,bindFramebuffer:Yt,drawBuffers:Kt,useProgram:ke,setBlending:G,setMaterial:bn,setFlipSided:ce,setCullFace:he,setLineWidth:Xt,setPolygonOffset:Ue,setScissorTest:kt,activeTexture:L,bindTexture:b,unbindTexture:nt,compressedTexImage2D:dt,compressedTexImage3D:Mt,texImage2D:Bt,texImage3D:Zt,updateUBOMapping:Jt,uniformBlockBinding:ae,texStorage2D:pe,texStorage3D:At,texSubImage2D:pt,texSubImage3D:Gt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Pt,scissor:Vt,viewport:Ot,reset:Oe}}function JT(o,e,i,s,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ee,x=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,b){return M?new OffscreenCanvas(L,b):Tc("canvas")}function w(L,b,nt){let dt=1;const Mt=kt(L);if((Mt.width>nt||Mt.height>nt)&&(dt=nt/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const pt=Math.floor(dt*Mt.width),Gt=Math.floor(dt*Mt.height);g===void 0&&(g=T(pt,Gt));const wt=b?T(pt,Gt):g;return wt.width=pt,wt.height=Gt,wt.getContext("2d").drawImage(L,0,0,pt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+pt+"x"+Gt+")."),wt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,b,nt,dt,Mt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pt=b;if(b===o.RED&&(nt===o.FLOAT&&(pt=o.R32F),nt===o.HALF_FLOAT&&(pt=o.R16F),nt===o.UNSIGNED_BYTE&&(pt=o.R8)),b===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(pt=o.R8UI),nt===o.UNSIGNED_SHORT&&(pt=o.R16UI),nt===o.UNSIGNED_INT&&(pt=o.R32UI),nt===o.BYTE&&(pt=o.R8I),nt===o.SHORT&&(pt=o.R16I),nt===o.INT&&(pt=o.R32I)),b===o.RG&&(nt===o.FLOAT&&(pt=o.RG32F),nt===o.HALF_FLOAT&&(pt=o.RG16F),nt===o.UNSIGNED_BYTE&&(pt=o.RG8)),b===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(pt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(pt=o.RG16UI),nt===o.UNSIGNED_INT&&(pt=o.RG32UI),nt===o.BYTE&&(pt=o.RG8I),nt===o.SHORT&&(pt=o.RG16I),nt===o.INT&&(pt=o.RG32I)),b===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),nt===o.UNSIGNED_INT&&(pt=o.RGB32UI),nt===o.BYTE&&(pt=o.RGB8I),nt===o.SHORT&&(pt=o.RGB16I),nt===o.INT&&(pt=o.RGB32I)),b===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(pt=o.RGBA32UI),nt===o.BYTE&&(pt=o.RGBA8I),nt===o.SHORT&&(pt=o.RGBA16I),nt===o.INT&&(pt=o.RGBA32I)),b===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),b===o.RGBA){const Gt=Mt?Ec:Ce.getTransfer(dt);nt===o.FLOAT&&(pt=o.RGBA32F),nt===o.HALF_FLOAT&&(pt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(pt=Gt===Fe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function C(L,b){let nt;return L?b===null||b===Ms||b===br?nt=o.DEPTH24_STENCIL8:b===sa?nt=o.DEPTH32F_STENCIL8:b===No&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ms||b===br?nt=o.DEPTH_COMPONENT24:b===sa?nt=o.DEPTH_COMPONENT32F:b===No&&(nt=o.DEPTH_COMPONENT16),nt}function H(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==bi&&L.minFilter!==Ui?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function P(L){const b=L.target;b.removeEventListener("dispose",P),X(b),b.isVideoTexture&&x.delete(b)}function z(L){const b=L.target;b.removeEventListener("dispose",z),R(b)}function X(L){const b=s.get(L);if(b.__webglInit===void 0)return;const nt=L.source,dt=S.get(nt);if(dt){const Mt=dt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(L),Object.keys(dt).length===0&&S.delete(nt)}s.remove(L)}function U(L){const b=s.get(L);o.deleteTexture(b.__webglTexture);const nt=L.source,dt=S.get(nt);delete dt[b.__cacheKey],d.memory.textures--}function R(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let Mt=0;Mt<b.__webglFramebuffer[dt].length;Mt++)o.deleteFramebuffer(b.__webglFramebuffer[dt][Mt]);else o.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)o.deleteFramebuffer(b.__webglFramebuffer[dt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=L.textures;for(let dt=0,Mt=nt.length;dt<Mt;dt++){const pt=s.get(nt[dt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),d.memory.textures--),s.remove(nt[dt])}s.remove(L)}let V=0;function lt(){V=0}function ot(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function gt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function _t(L,b){const nt=s.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){const dt=L.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(nt,L,b);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+b)}function B(L,b){const nt=s.get(L);if(L.version>0&&nt.__version!==L.version){Z(nt,L,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+b)}function Q(L,b){const nt=s.get(L);if(L.version>0&&nt.__version!==L.version){Z(nt,L,b);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+b)}function K(L,b){const nt=s.get(L);if(L.version>0&&nt.__version!==L.version){ft(nt,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+b)}const yt={[Od]:o.REPEAT,[Ss]:o.CLAMP_TO_EDGE,[zd]:o.MIRRORED_REPEAT},Tt={[bi]:o.NEAREST,[Ay]:o.NEAREST_MIPMAP_NEAREST,[Zl]:o.NEAREST_MIPMAP_LINEAR,[Ui]:o.LINEAR,[Xf]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},O={[Dy]:o.NEVER,[Py]:o.ALWAYS,[Uy]:o.LESS,[B_]:o.LEQUAL,[Ny]:o.EQUAL,[zy]:o.GEQUAL,[Ly]:o.GREATER,[Oy]:o.NOTEQUAL};function at(L,b){if(b.type===sa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ui||b.magFilter===Xf||b.magFilter===Zl||b.magFilter===ys||b.minFilter===Ui||b.minFilter===Xf||b.minFilter===Zl||b.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,yt[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,yt[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,yt[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Tt[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Tt[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bi||b.minFilter!==Zl&&b.minFilter!==ys||b.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function St(L,b){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",P));const dt=b.source;let Mt=S.get(dt);Mt===void 0&&(Mt={},S.set(dt,Mt));const pt=gt(b);if(pt!==L.__cacheKey){Mt[pt]===void 0&&(Mt[pt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),Mt[pt].usedTimes++;const Gt=Mt[L.__cacheKey];Gt!==void 0&&(Mt[L.__cacheKey].usedTimes--,Gt.usedTimes===0&&U(b)),L.__cacheKey=pt,L.__webglTexture=Mt[pt].texture}return nt}function Z(L,b,nt){let dt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=o.TEXTURE_3D);const Mt=St(L,b),pt=b.source;i.bindTexture(dt,L.__webglTexture,o.TEXTURE0+nt);const Gt=s.get(pt);if(pt.version!==Gt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+nt);const wt=Ce.getPrimaries(Ce.workingColorSpace),Pt=b.colorSpace===Fa?null:Ce.getPrimaries(b.colorSpace),pe=b.colorSpace===Fa||wt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let At=w(b.image,!1,l.maxTextureSize);At=Ue(b,At);const Bt=u.convert(b.format,b.colorSpace),Zt=u.convert(b.type);let Vt=N(b.internalFormat,Bt,Zt,b.colorSpace,b.isVideoTexture);at(dt,b);let Ot;const Jt=b.mipmaps,ae=b.isVideoTexture!==!0,Oe=Gt.__version===void 0||Mt===!0,j=pt.dataReady,Rt=H(b,At);if(b.isDepthTexture)Vt=C(b.format===Tr,b.type),Oe&&(ae?i.texStorage2D(o.TEXTURE_2D,1,Vt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Vt,At.width,At.height,0,Bt,Zt,null));else if(b.isDataTexture)if(Jt.length>0){ae&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,Vt,Jt[0].width,Jt[0].height);for(let ct=0,vt=Jt.length;ct<vt;ct++)Ot=Jt[ct],ae?j&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Bt,Zt,Ot.data):i.texImage2D(o.TEXTURE_2D,ct,Vt,Ot.width,Ot.height,0,Bt,Zt,Ot.data);b.generateMipmaps=!1}else ae?(Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,Vt,At.width,At.height),j&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Bt,Zt,At.data)):i.texImage2D(o.TEXTURE_2D,0,Vt,At.width,At.height,0,Bt,Zt,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Vt,Jt[0].width,Jt[0].height,At.depth);for(let ct=0,vt=Jt.length;ct<vt;ct++)if(Ot=Jt[ct],b.format!==Mi)if(Bt!==null)if(ae){if(j)if(b.layerUpdates.size>0){const Ct=Y0(Ot.width,Ot.height,b.format,b.type);for(const Dt of b.layerUpdates){const $t=Ot.data.subarray(Dt*Ct/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,Dt,Ot.width,Ot.height,1,Bt,$t)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,At.depth,Bt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,Vt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?j&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,At.depth,Bt,Zt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,Vt,Ot.width,Ot.height,At.depth,0,Bt,Zt,Ot.data)}else{ae&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,Vt,Jt[0].width,Jt[0].height);for(let ct=0,vt=Jt.length;ct<vt;ct++)Ot=Jt[ct],b.format!==Mi?Bt!==null?ae?j&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Bt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?j&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Bt,Zt,Ot.data):i.texImage2D(o.TEXTURE_2D,ct,Vt,Ot.width,Ot.height,0,Bt,Zt,Ot.data)}else if(b.isDataArrayTexture)if(ae){if(Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Vt,At.width,At.height,At.depth),j)if(b.layerUpdates.size>0){const ct=Y0(At.width,At.height,b.format,b.type);for(const vt of b.layerUpdates){const Ct=At.data.subarray(vt*ct/At.data.BYTES_PER_ELEMENT,(vt+1)*ct/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Bt,Zt,Ct)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Bt,Zt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,At.width,At.height,At.depth,0,Bt,Zt,At.data);else if(b.isData3DTexture)ae?(Oe&&i.texStorage3D(o.TEXTURE_3D,Rt,Vt,At.width,At.height,At.depth),j&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Bt,Zt,At.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,At.width,At.height,At.depth,0,Bt,Zt,At.data);else if(b.isFramebufferTexture){if(Oe)if(ae)i.texStorage2D(o.TEXTURE_2D,Rt,Vt,At.width,At.height);else{let ct=At.width,vt=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Vt,ct,vt,0,Bt,Zt,null),ct>>=1,vt>>=1}}else if(Jt.length>0){if(ae&&Oe){const ct=kt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Vt,ct.width,ct.height)}for(let ct=0,vt=Jt.length;ct<vt;ct++)Ot=Jt[ct],ae?j&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Bt,Zt,Ot):i.texImage2D(o.TEXTURE_2D,ct,Vt,Bt,Zt,Ot);b.generateMipmaps=!1}else if(ae){if(Oe){const ct=kt(At);i.texStorage2D(o.TEXTURE_2D,Rt,Vt,ct.width,ct.height)}j&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Zt,At)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Bt,Zt,At);y(b)&&v(dt),Gt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ft(L,b,nt){if(b.image.length!==6)return;const dt=St(L,b),Mt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+nt);const pt=s.get(Mt);if(Mt.version!==pt.__version||dt===!0){i.activeTexture(o.TEXTURE0+nt);const Gt=Ce.getPrimaries(Ce.workingColorSpace),wt=b.colorSpace===Fa?null:Ce.getPrimaries(b.colorSpace),Pt=b.colorSpace===Fa||Gt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const pe=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Bt=[];for(let vt=0;vt<6;vt++)!pe&&!At?Bt[vt]=w(b.image[vt],!0,l.maxCubemapSize):Bt[vt]=At?b.image[vt].image:b.image[vt],Bt[vt]=Ue(b,Bt[vt]);const Zt=Bt[0],Vt=u.convert(b.format,b.colorSpace),Ot=u.convert(b.type),Jt=N(b.internalFormat,Vt,Ot,b.colorSpace),ae=b.isVideoTexture!==!0,Oe=pt.__version===void 0||dt===!0,j=Mt.dataReady;let Rt=H(b,Zt);at(o.TEXTURE_CUBE_MAP,b);let ct;if(pe){ae&&Oe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){ct=Bt[vt].mipmaps;for(let Ct=0;Ct<ct.length;Ct++){const Dt=ct[Ct];b.format!==Mi?Vt!==null?ae?j&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Dt.width,Dt.height,Vt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Dt.width,Dt.height,Vt,Ot,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Jt,Dt.width,Dt.height,0,Vt,Ot,Dt.data)}}}else{if(ct=b.mipmaps,ae&&Oe){ct.length>0&&Rt++;const vt=kt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){ae?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt[vt].width,Bt[vt].height,Vt,Ot,Bt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Jt,Bt[vt].width,Bt[vt].height,0,Vt,Ot,Bt[vt].data);for(let Ct=0;Ct<ct.length;Ct++){const $t=ct[Ct].image[vt].image;ae?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,$t.width,$t.height,Vt,Ot,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Jt,$t.width,$t.height,0,Vt,Ot,$t.data)}}else{ae?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Vt,Ot,Bt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Jt,Vt,Ot,Bt[vt]);for(let Ct=0;Ct<ct.length;Ct++){const Dt=ct[Ct];ae?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,Vt,Ot,Dt.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Jt,Vt,Ot,Dt.image[vt])}}}y(b)&&v(o.TEXTURE_CUBE_MAP),pt.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Et(L,b,nt,dt,Mt,pt){const Gt=u.convert(nt.format,nt.colorSpace),wt=u.convert(nt.type),Pt=N(nt.internalFormat,Gt,wt,nt.colorSpace),pe=s.get(b),At=s.get(nt);if(At.__renderTarget=b,!pe.__hasExternalTextures){const Bt=Math.max(1,b.width>>pt),Zt=Math.max(1,b.height>>pt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,pt,Pt,Bt,Zt,b.depth,0,Gt,wt,null):i.texImage2D(Mt,pt,Pt,Bt,Zt,0,Gt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),he(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Mt,At.__webglTexture,0,ce(b)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Mt,At.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function xt(L,b,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const dt=b.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,pt=C(b.stencilBuffer,Mt),Gt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ce(b);he(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,pt,b.width,b.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,pt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,pt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Gt,o.RENDERBUFFER,L)}else{const dt=b.textures;for(let Mt=0;Mt<dt.length;Mt++){const pt=dt[Mt],Gt=u.convert(pt.format,pt.colorSpace),wt=u.convert(pt.type),Pt=N(pt.internalFormat,Gt,wt,pt.colorSpace),pe=ce(b);nt&&he(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Pt,b.width,b.height):he(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,Pt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ft(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_t(b.depthTexture,0);const Mt=dt.__webglTexture,pt=ce(b);if(b.depthTexture.format===xr)he(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(b.depthTexture.format===Tr)he(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Yt(L){const b=s.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const dt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=dt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,L)}else if(nt){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=o.createRenderbuffer(),xt(b.__webglDepthbuffer[dt],L,!1);else{const Mt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),xt(b.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(L,b,nt){const dt=s.get(L);b!==void 0&&Et(dt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Yt(L)}function ke(L){const b=L.texture,nt=s.get(L),dt=s.get(b);L.addEventListener("dispose",z);const Mt=L.textures,pt=L.isWebGLCubeRenderTarget===!0,Gt=Mt.length>1;if(Gt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=b.version,d.memory.textures++),pt){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)nt.__webglFramebuffer[wt][Pt]=o.createFramebuffer()}else nt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Gt)for(let wt=0,Pt=Mt.length;wt<Pt;wt++){const pe=s.get(Mt[wt]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&he(L)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<Mt.length;wt++){const Pt=Mt[wt];nt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);const pe=u.convert(Pt.format,Pt.colorSpace),At=u.convert(Pt.type),Bt=N(Pt.internalFormat,pe,At,Pt.colorSpace,L.isXRRenderTarget===!0),Zt=ce(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Bt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),xt(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),at(o.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Et(nt.__webglFramebuffer[wt][Pt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Pt);else Et(nt.__webglFramebuffer[wt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(b)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let wt=0,Pt=Mt.length;wt<Pt;wt++){const pe=Mt[wt],At=s.get(pe);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),at(o.TEXTURE_2D,pe),Et(nt.__webglFramebuffer,L,pe,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),y(pe)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,dt.__webglTexture),at(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Et(nt.__webglFramebuffer[Pt],L,b,o.COLOR_ATTACHMENT0,wt,Pt);else Et(nt.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,wt,0);y(b)&&v(wt),i.unbindTexture()}L.depthBuffer&&Yt(L)}function Ge(L){const b=L.textures;for(let nt=0,dt=b.length;nt<dt;nt++){const Mt=b[nt];if(y(Mt)){const pt=D(L),Gt=s.get(Mt).__webglTexture;i.bindTexture(pt,Gt),v(pt),i.unbindTexture()}}}const ue=[],G=[];function bn(L){if(L.samples>0){if(he(L)===!1){const b=L.textures,nt=L.width,dt=L.height;let Mt=o.COLOR_BUFFER_BIT;const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Gt=s.get(L),wt=b.length>1;if(wt)for(let Pt=0;Pt<b.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Gt.__webglColorRenderbuffer[Pt]);const pe=s.get(b[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,Mt,o.NEAREST),m===!0&&(ue.length=0,G.length=0,ue.push(o.COLOR_ATTACHMENT0+Pt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ue.push(pt),G.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Pt=0;Pt<b.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Gt.__webglColorRenderbuffer[Pt]);const pe=s.get(b[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ce(L){return Math.min(l.maxSamples,L.samples)}function he(L){const b=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(L){const b=d.render.frame;x.get(L)!==b&&(x.set(L,b),L.update())}function Ue(L,b){const nt=L.colorSpace,dt=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==Ar&&nt!==Fa&&(Ce.getTransfer(nt)===Fe?(dt!==Mi||Mt!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function kt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=lt,this.setTexture2D=_t,this.setTexture2DArray=B,this.setTexture3D=Q,this.setTextureCube=K,this.rebindTextures=Kt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=he}function $T(o,e){function i(s,l=Fa){let u;const d=Ce.getTransfer(l);if(s===la)return o.UNSIGNED_BYTE;if(s===gh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===_h)return o.UNSIGNED_SHORT_5_5_5_1;if(s===C_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===A_)return o.BYTE;if(s===R_)return o.SHORT;if(s===No)return o.UNSIGNED_SHORT;if(s===mh)return o.INT;if(s===Ms)return o.UNSIGNED_INT;if(s===sa)return o.FLOAT;if(s===Lo)return o.HALF_FLOAT;if(s===w_)return o.ALPHA;if(s===D_)return o.RGB;if(s===Mi)return o.RGBA;if(s===U_)return o.LUMINANCE;if(s===N_)return o.LUMINANCE_ALPHA;if(s===xr)return o.DEPTH_COMPONENT;if(s===Tr)return o.DEPTH_STENCIL;if(s===L_)return o.RED;if(s===vh)return o.RED_INTEGER;if(s===O_)return o.RG;if(s===xh)return o.RG_INTEGER;if(s===Sh)return o.RGBA_INTEGER;if(s===_c||s===vc||s===xc||s===Sc)if(d===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===_c)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===_c)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pd||s===Bd||s===Id||s===Fd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Pd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Id)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hd||s===Gd||s===Vd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Hd||s===Gd)return d===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Vd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kd||s===Xd||s===Wd||s===jd||s===qd||s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===th||s===eh||s===nh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===kd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$d)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===th)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===eh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yc||s===ih||s===ah)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===yc)return d===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ih)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ah)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===z_||s===sh||s===rh||s===oh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===yc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===sh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===oh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const tA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eA=`
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

}`;class nA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new kn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ka({vertexShader:tA,fragmentShader:eA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new Cc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iA extends Cr{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,S=null,M=null,T=null;const w=new nA,y=i.getContextAttributes();let v=null,D=null;const N=[],C=[],H=new Ee;let P=null;const z=new ti;z.viewport=new He;const X=new ti;X.viewport=new He;const U=[z,X],R=new bM;let V=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ft=N[Z];return ft===void 0&&(ft=new dd,N[Z]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Z){let ft=N[Z];return ft===void 0&&(ft=new dd,N[Z]=ft),ft.getGripSpace()},this.getHand=function(Z){let ft=N[Z];return ft===void 0&&(ft=new dd,N[Z]=ft),ft.getHandSpace()};function ot(Z){const ft=C.indexOf(Z.inputSource);if(ft===-1)return;const Et=N[ft];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,p||d),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function gt(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",_t);for(let Z=0;Z<N.length;Z++){const ft=C[Z];ft!==null&&(C[Z]=null,N[Z].disconnect(ft))}V=null,lt=null,w.reset(),e.setRenderTarget(v),M=null,S=null,g=null,l=null,D=null,St.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",_t),y.xrCompatible!==!0&&await i.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,xt=null,Ft=null;y.depth&&(Ft=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=y.stencil?Tr:xr,xt=y.stencil?br:Ms);const Yt={colorFormat:i.RGBA8,depthFormat:Ft,scaleFactor:u};g=new XRWebGLBinding(l,i),S=g.createProjectionLayer(Yt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new Es(S.textureWidth,S.textureHeight,{format:Mi,type:la,depthTexture:new q_(S.textureWidth,S.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Et={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Es(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:la,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function _t(Z){for(let ft=0;ft<Z.removed.length;ft++){const Et=Z.removed[ft],xt=C.indexOf(Et);xt>=0&&(C[xt]=null,N[xt].disconnect(Et))}for(let ft=0;ft<Z.added.length;ft++){const Et=Z.added[ft];let xt=C.indexOf(Et);if(xt===-1){for(let Yt=0;Yt<N.length;Yt++)if(Yt>=C.length){C.push(Et),xt=Yt;break}else if(C[Yt]===null){C[Yt]=Et,xt=Yt;break}if(xt===-1)break}const Ft=N[xt];Ft&&Ft.connect(Et)}}const B=new J,Q=new J;function K(Z,ft,Et){B.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(Et.matrixWorld);const xt=B.distanceTo(Q),Ft=ft.projectionMatrix.elements,Yt=Et.projectionMatrix.elements,Kt=Ft[14]/(Ft[10]-1),ke=Ft[14]/(Ft[10]+1),Ge=(Ft[9]+1)/Ft[5],ue=(Ft[9]-1)/Ft[5],G=(Ft[8]-1)/Ft[0],bn=(Yt[8]+1)/Yt[0],ce=Kt*G,he=Kt*bn,Xt=xt/(-G+bn),Ue=Xt*-G;if(ft.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ue),Z.translateZ(Xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ft[10]===-1)Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const kt=Kt+Xt,L=ke+Xt,b=ce-Ue,nt=he+(xt-Ue),dt=Ge*ke/L*kt,Mt=ue*ke/L*kt;Z.projectionMatrix.makePerspective(b,nt,dt,Mt,kt,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function yt(Z,ft){ft===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ft.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ft=Z.near,Et=Z.far;w.texture!==null&&(w.depthNear>0&&(ft=w.depthNear),w.depthFar>0&&(Et=w.depthFar)),R.near=X.near=z.near=ft,R.far=X.far=z.far=Et,(V!==R.near||lt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,lt=R.far),z.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,R.layers.mask=z.layers.mask|X.layers.mask;const xt=Z.parent,Ft=R.cameras;yt(R,xt);for(let Yt=0;Yt<Ft.length;Yt++)yt(Ft[Yt],xt);Ft.length===2?K(R,z,X):R.projectionMatrix.copy(z.projectionMatrix),Tt(Z,R,xt)};function Tt(Z,ft,Et){Et===null?Z.matrix.copy(ft.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ft.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=lh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Z){m=Z,S!==null&&(S.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let O=null;function at(Z,ft){if(x=ft.getViewerPose(p||d),T=ft,x!==null){const Et=x.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let xt=!1;Et.length!==R.cameras.length&&(R.cameras.length=0,xt=!0);for(let Kt=0;Kt<Et.length;Kt++){const ke=Et[Kt];let Ge=null;if(M!==null)Ge=M.getViewport(ke);else{const G=g.getViewSubImage(S,ke);Ge=G.viewport,Kt===0&&(e.setRenderTargetTextures(D,G.colorTexture,S.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(D))}let ue=U[Kt];ue===void 0&&(ue=new ti,ue.layers.enable(Kt),ue.viewport=new He,U[Kt]=ue),ue.matrix.fromArray(ke.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ke.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Kt===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xt===!0&&R.cameras.push(ue)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const Kt=g.getDepthInformation(Et[0]);Kt&&Kt.isValid&&Kt.texture&&w.init(e,Kt,l.renderState)}}for(let Et=0;Et<N.length;Et++){const xt=C[Et],Ft=N[Et];xt!==null&&Ft!==void 0&&Ft.update(xt,ft,p||d)}O&&O(Z,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),T=null}const St=new Z_;St.setAnimationLoop(at),this.setAnimationLoop=function(Z){O=Z},this.dispose=function(){}}}const ps=new Li,aA=new Ze;function sA(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,X_(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,D,N,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),x(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,C)):v.isMeshMatcapMaterial?(u(y,v),T(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),w(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,D,N):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Vn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Vn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=e.get(v),N=D.envMap,C=D.envMapRotation;N&&(y.envMap.value=N,ps.copy(C),ps.x*=-1,ps.y*=-1,ps.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(ps)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,D,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=N*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const D=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function rA(o,e,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const C=N.program;s.uniformBlockBinding(D,C)}function p(D,N){let C=l[D.id];C===void 0&&(T(D),C=x(D),l[D.id]=C,D.addEventListener("dispose",y));const H=N.program;s.updateUBOMapping(D,H);const P=e.render.frame;u[D.id]!==P&&(S(D),u[D.id]=P)}function x(D){const N=g();D.__bindingPointIndex=N;const C=o.createBuffer(),H=D.__size,P=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,H,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,C),C}function g(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const N=l[D.id],C=D.uniforms,H=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let P=0,z=C.length;P<z;P++){const X=Array.isArray(C[P])?C[P]:[C[P]];for(let U=0,R=X.length;U<R;U++){const V=X[U];if(M(V,P,U,H)===!0){const lt=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let _t=0;_t<ot.length;_t++){const B=ot[_t],Q=w(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,lt+gt,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,gt),gt+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(D,N,C,H){const P=D.value,z=N+"_"+C;if(H[z]===void 0)return typeof P=="number"||typeof P=="boolean"?H[z]=P:H[z]=P.clone(),!0;{const X=H[z];if(typeof P=="number"||typeof P=="boolean"){if(X!==P)return H[z]=P,!0}else if(X.equals(P)===!1)return X.copy(P),!0}return!1}function T(D){const N=D.uniforms;let C=0;const H=16;for(let z=0,X=N.length;z<X;z++){const U=Array.isArray(N[z])?N[z]:[N[z]];for(let R=0,V=U.length;R<V;R++){const lt=U[R],ot=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,_t=ot.length;gt<_t;gt++){const B=ot[gt],Q=w(B),K=C%H,yt=K%Q.boundary,Tt=K+yt;C+=yt,Tt!==0&&H-Tt<Q.storage&&(C+=H-Tt),lt.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=C,C+=Q.storage}}}const P=C%H;return P>0&&(C+=H-P),D.__size=C,D.__cache={},this}function w(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),N}function y(D){const N=D.target;N.removeEventListener("dispose",y);const C=d.indexOf(N.__bindingPointIndex);d.splice(C,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}class oA{constructor(e={}){const{canvas:i=Iy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const D=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=Ga,this.toneMappingExposure=1;const C=this;let H=!1,P=0,z=0,X=null,U=-1,R=null;const V=new He,lt=new He;let ot=null;const gt=new we(0);let _t=0,B=i.width,Q=i.height,K=1,yt=null,Tt=null;const O=new He(0,0,B,Q),at=new He(0,0,B,Q);let St=!1;const Z=new bh;let ft=!1,Et=!1;this.transmissionResolutionScale=1;const xt=new Ze,Ft=new Ze,Yt=new J,Kt=new He,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ue(){return X===null?K:1}let G=s;function bn(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hh}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),G===null){const q="webgl2";if(G=bn(q,A),G===null)throw bn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,he,Xt,Ue,kt,L,b,nt,dt,Mt,pt,Gt,wt,Pt,pe,At,Bt,Zt,Vt,Ot,Jt,ae,Oe,j;function Rt(){ce=new _1(G),ce.init(),ae=new $T(G,ce),he=new u1(G,ce,e,ae),Xt=new QT(G,ce),he.reverseDepthBuffer&&S&&Xt.buffers.depth.setReversed(!0),Ue=new S1(G),kt=new IT,L=new JT(G,ce,Xt,kt,he,ae,Ue),b=new d1(C),nt=new g1(C),dt=new AM(G),Oe=new l1(G,dt),Mt=new v1(G,dt,Ue,Oe),pt=new M1(G,Mt,dt,Ue),Vt=new y1(G,he,L),At=new f1(kt),Gt=new BT(C,b,nt,ce,he,Oe,At),wt=new sA(C,kt),Pt=new HT,pe=new jT(ce),Zt=new o1(C,b,nt,Xt,pt,M,m),Bt=new ZT(C,pt,he),j=new rA(G,Ue,he,Xt),Ot=new c1(G,ce,Ue),Jt=new x1(G,ce,Ue),Ue.programs=Gt.programs,C.capabilities=he,C.extensions=ce,C.properties=kt,C.renderLists=Pt,C.shadowMap=Bt,C.state=Xt,C.info=Ue}Rt();const ct=new iA(C,G);this.xr=ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(B,Q,!1))},this.getSize=function(A){return A.set(B,Q)},this.setSize=function(A,q,it=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,Q=q,i.width=Math.floor(A*K),i.height=Math.floor(q*K),it===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(B*K,Q*K).floor()},this.setDrawingBufferSize=function(A,q,it){B=A,Q=q,K=it,i.width=Math.floor(A*it),i.height=Math.floor(q*it),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,q,it,st){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,q,it,st),Xt.viewport(V.copy(O).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,q,it,st){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,q,it,st),Xt.scissor(lt.copy(at).multiplyScalar(K).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Xt.setScissorTest(St=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){Tt=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,it=!0){let st=0;if(A){let W=!1;if(X!==null){const bt=X.texture.format;W=bt===Sh||bt===xh||bt===vh}if(W){const bt=X.texture.type,Ut=bt===la||bt===Ms||bt===No||bt===br||bt===gh||bt===_h,Lt=Zt.getClearColor(),zt=Zt.getClearAlpha(),te=Lt.r,ee=Lt.g,Wt=Lt.b;Ut?(T[0]=te,T[1]=ee,T[2]=Wt,T[3]=zt,G.clearBufferuiv(G.COLOR,0,T)):(w[0]=te,w[1]=ee,w[2]=Wt,w[3]=zt,G.clearBufferiv(G.COLOR,0,w))}else st|=G.COLOR_BUFFER_BIT}q&&(st|=G.DEPTH_BUFFER_BIT),it&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Zt.dispose(),Pt.dispose(),pe.dispose(),kt.dispose(),b.dispose(),nt.dispose(),pt.dispose(),Oe.dispose(),j.dispose(),Gt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Dr),ct.removeEventListener("sessionend",Ur),Ti.stop()};function vt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Ue.autoReset,q=Bt.enabled,it=Bt.autoUpdate,st=Bt.needsUpdate,W=Bt.type;Rt(),Ue.autoReset=A,Bt.enabled=q,Bt.autoUpdate=it,Bt.needsUpdate=st,Bt.type=W}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const q=A.target;q.removeEventListener("dispose",$t),qe(q)}function qe(A){ln(A),kt.remove(A)}function ln(A){const q=kt.get(A).programs;q!==void 0&&(q.forEach(function(it){Gt.releaseProgram(it)}),A.isShaderMaterial&&Gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,it,st,W,bt){q===null&&(q=ke);const Ut=W.isMesh&&W.matrixWorld.determinant()<0,Lt=Lr(A,q,it,st,W);Xt.setMaterial(st,Ut);let zt=it.index,te=1;if(st.wireframe===!0){if(zt=Mt.getWireframeAttribute(it),zt===void 0)return;te=2}const ee=it.drawRange,Wt=it.attributes.position;let _e=ee.start*te,ve=(ee.start+ee.count)*te;bt!==null&&(_e=Math.max(_e,bt.start*te),ve=Math.min(ve,(bt.start+bt.count)*te)),zt!==null?(_e=Math.max(_e,0),ve=Math.min(ve,zt.count)):Wt!=null&&(_e=Math.max(_e,0),ve=Math.min(ve,Wt.count));const Xe=ve-_e;if(Xe<0||Xe===1/0)return;Oe.setup(W,st,Lt,it,zt);let Te,ne=Ot;if(zt!==null&&(Te=dt.get(zt),ne=Jt,ne.setIndex(Te)),W.isMesh)st.wireframe===!0?(Xt.setLineWidth(st.wireframeLinewidth*ue()),ne.setMode(G.LINES)):ne.setMode(G.TRIANGLES);else if(W.isLine){let qt=st.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*ue()),W.isLineSegments?ne.setMode(G.LINES):W.isLineLoop?ne.setMode(G.LINE_LOOP):ne.setMode(G.LINE_STRIP)}else W.isPoints?ne.setMode(G.POINTS):W.isSprite&&ne.setMode(G.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))ne.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const qt=W._multiDrawStarts,cn=W._multiDrawCounts,Me=W._multiDrawCount,Ln=zt?dt.get(zt).bytesPerElement:1,pi=kt.get(st).currentProgram.getUniforms();for(let wn=0;wn<Me;wn++)pi.setValue(G,"_gl_DrawID",wn),ne.render(qt[wn]/Ln,cn[wn])}else if(W.isInstancedMesh)ne.renderInstances(_e,Xe,W.count);else if(it.isInstancedBufferGeometry){const qt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,cn=Math.min(it.instanceCount,qt);ne.renderInstances(_e,Xe,cn)}else ne.render(_e,Xe)};function be(A,q,it){A.transparent===!0&&A.side===aa&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,Ke(A,q,it),A.side=Va,A.needsUpdate=!0,Ke(A,q,it),A.side=aa):Ke(A,q,it)}this.compile=function(A,q,it=null){it===null&&(it=A),v=pe.get(it),v.init(q),N.push(v),it.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),A!==it&&A.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const st=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const bt=W.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Lt=bt[Ut];be(Lt,it,W),st.add(Lt)}else be(bt,it,W),st.add(bt)}),v=N.pop(),st},this.compileAsync=function(A,q,it=null){const st=this.compile(A,q,it);return new Promise(W=>{function bt(){if(st.forEach(function(Ut){kt.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){W(A);return}setTimeout(bt,10)}ce.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let _n=null;function di(A){_n&&_n(A)}function Dr(){Ti.stop()}function Ur(){Ti.start()}const Ti=new Z_;Ti.setAnimationLoop(di),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){_n=A,ct.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},ct.addEventListener("sessionstart",Dr),ct.addEventListener("sessionend",Ur),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(q),q=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,q,X),v=pe.get(A,N.length),v.init(q),N.push(v),Ft.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Z.setFromProjectionMatrix(Ft),Et=this.localClippingEnabled,ft=At.init(this.clippingPlanes,Et),y=Pt.get(A,D.length),y.init(),D.push(y),ct.enabled===!0&&ct.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Xa(bt,q,-1/0,C.sortObjects)}Xa(A,q,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(yt,Tt),Ge=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ge&&Zt.addToRenderList(y,A),this.info.render.frame++,ft===!0&&At.beginShadows();const it=v.state.shadowsArray;Bt.render(it,A,q),ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,W=y.transmissive;if(v.setupLights(),q.isArrayCamera){const bt=q.cameras;if(W.length>0)for(let Ut=0,Lt=bt.length;Ut<Lt;Ut++){const zt=bt[Ut];Nr(st,W,A,zt)}Ge&&Zt.render(A);for(let Ut=0,Lt=bt.length;Ut<Lt;Ut++){const zt=bt[Ut];bs(y,A,zt,zt.viewport)}}else W.length>0&&Nr(st,W,A,q),Ge&&Zt.render(A),bs(y,A,q);X!==null&&z===0&&(L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,q),Oe.resetDefaultState(),U=-1,R=null,N.pop(),N.length>0?(v=N[N.length-1],ft===!0&&At.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Xa(A,q,it,st){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){st&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ft);const Ut=pt.update(A),Lt=A.material;Lt.visible&&y.push(A,Ut,Lt,it,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Ut=pt.update(A),Lt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Kt.copy(Ut.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(Ft)),Array.isArray(Lt)){const zt=Ut.groups;for(let te=0,ee=zt.length;te<ee;te++){const Wt=zt[te],_e=Lt[Wt.materialIndex];_e&&_e.visible&&y.push(A,Ut,_e,it,Kt.z,Wt)}}else Lt.visible&&y.push(A,Ut,Lt,it,Kt.z,null)}}const bt=A.children;for(let Ut=0,Lt=bt.length;Ut<Lt;Ut++)Xa(bt[Ut],q,it,st)}function bs(A,q,it,st){const W=A.opaque,bt=A.transmissive,Ut=A.transparent;v.setupLightsView(it),ft===!0&&At.setGlobalState(C.clippingPlanes,it),st&&Xt.viewport(V.copy(st)),W.length>0&&Wa(W,q,it),bt.length>0&&Wa(bt,q,it),Ut.length>0&&Wa(Ut,q,it),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Nr(A,q,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new Es(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Lo:la,minFilter:ys,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const bt=v.state.transmissionRenderTarget[st.id],Ut=st.viewport||V;bt.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const Lt=C.getRenderTarget();C.setRenderTarget(bt),C.getClearColor(gt),_t=C.getClearAlpha(),_t<1&&C.setClearColor(16777215,.5),C.clear(),Ge&&Zt.render(it);const zt=C.toneMapping;C.toneMapping=Ga;const te=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),ft===!0&&At.setGlobalState(C.clippingPlanes,st),Wa(A,it,st),L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Wt=0,_e=q.length;Wt<_e;Wt++){const ve=q[Wt],Xe=ve.object,Te=ve.geometry,ne=ve.material,qt=ve.group;if(ne.side===aa&&Xe.layers.test(st.layers)){const cn=ne.side;ne.side=Vn,ne.needsUpdate=!0,hi(Xe,it,st,Te,ne,qt),ne.side=cn,ne.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt))}C.setRenderTarget(Lt),C.setClearColor(gt,_t),te!==void 0&&(st.viewport=te),C.toneMapping=zt}function Wa(A,q,it){const st=q.isScene===!0?q.overrideMaterial:null;for(let W=0,bt=A.length;W<bt;W++){const Ut=A[W],Lt=Ut.object,zt=Ut.geometry,te=st===null?Ut.material:st,ee=Ut.group;Lt.layers.test(it.layers)&&hi(Lt,q,it,zt,te,ee)}}function hi(A,q,it,st,W,bt){A.onBeforeRender(C,q,it,st,W,bt),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,q,it,st,A,bt),W.transparent===!0&&W.side===aa&&W.forceSinglePass===!1?(W.side=Vn,W.needsUpdate=!0,C.renderBufferDirect(it,q,st,W,A,bt),W.side=Va,W.needsUpdate=!0,C.renderBufferDirect(it,q,st,W,A,bt),W.side=aa):C.renderBufferDirect(it,q,st,W,A,bt),A.onAfterRender(C,q,it,st,W,bt)}function Ke(A,q,it){q.isScene!==!0&&(q=ke);const st=kt.get(A),W=v.state.lights,bt=v.state.shadowsArray,Ut=W.state.version,Lt=Gt.getParameters(A,W.state,bt,q,it),zt=Gt.getProgramCacheKey(Lt);let te=st.programs;st.environment=A.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(A.isMeshStandardMaterial?nt:b).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",$t),te=new Map,st.programs=te);let ee=te.get(zt);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Ut)return Oi(A,Lt),ee}else Lt.uniforms=Gt.getUniforms(A),A.onBeforeCompile(Lt,C),ee=Gt.acquireProgram(Lt,zt),te.set(zt,ee),st.uniforms=Lt.uniforms;const Wt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=At.uniform),Oi(A,Lt),st.needsLights=Uc(A),st.lightsStateVersion=Ut,st.needsLights&&(Wt.ambientLightColor.value=W.state.ambient,Wt.lightProbe.value=W.state.probe,Wt.directionalLights.value=W.state.directional,Wt.directionalLightShadows.value=W.state.directionalShadow,Wt.spotLights.value=W.state.spot,Wt.spotLightShadows.value=W.state.spotShadow,Wt.rectAreaLights.value=W.state.rectArea,Wt.ltc_1.value=W.state.rectAreaLTC1,Wt.ltc_2.value=W.state.rectAreaLTC2,Wt.pointLights.value=W.state.point,Wt.pointLightShadows.value=W.state.pointShadow,Wt.hemisphereLights.value=W.state.hemi,Wt.directionalShadowMap.value=W.state.directionalShadowMap,Wt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Wt.spotShadowMap.value=W.state.spotShadowMap,Wt.spotLightMatrix.value=W.state.spotLightMatrix,Wt.spotLightMap.value=W.state.spotLightMap,Wt.pointShadowMap.value=W.state.pointShadowMap,Wt.pointShadowMatrix.value=W.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function vn(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Mc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Oi(A,q){const it=kt.get(A);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.batchingColor=q.batchingColor,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.instancingMorph=q.instancingMorph,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function Lr(A,q,it,st,W){q.isScene!==!0&&(q=ke),L.resetTextureUnits();const bt=q.fog,Ut=st.isMeshStandardMaterial?q.environment:null,Lt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ar,zt=(st.isMeshStandardMaterial?nt:b).get(st.envMap||Ut),te=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ee=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!it.morphAttributes.position,_e=!!it.morphAttributes.normal,ve=!!it.morphAttributes.color;let Xe=Ga;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=C.toneMapping);const Te=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ne=Te!==void 0?Te.length:0,qt=kt.get(st),cn=v.state.lights;if(ft===!0&&(Et===!0||A!==R)){const Qe=A===R&&st.id===U;At.setState(st,A,Qe)}let Me=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==cn.state.version||qt.outputColorSpace!==Lt||W.isBatchedMesh&&qt.batching===!1||!W.isBatchedMesh&&qt.batching===!0||W.isBatchedMesh&&qt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&qt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&qt.instancing===!1||!W.isInstancedMesh&&qt.instancing===!0||W.isSkinnedMesh&&qt.skinning===!1||!W.isSkinnedMesh&&qt.skinning===!0||W.isInstancedMesh&&qt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&qt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&qt.instancingMorph===!1&&W.morphTexture!==null||qt.envMap!==zt||st.fog===!0&&qt.fog!==bt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==At.numPlanes||qt.numIntersection!==At.numIntersection)||qt.vertexAlphas!==te||qt.vertexTangents!==ee||qt.morphTargets!==Wt||qt.morphNormals!==_e||qt.morphColors!==ve||qt.toneMapping!==Xe||qt.morphTargetsCount!==ne)&&(Me=!0):(Me=!0,qt.__version=st.version);let Ln=qt.currentProgram;Me===!0&&(Ln=Ke(st,q,W));let pi=!1,wn=!1,hn=!1;const ze=Ln.getUniforms(),Dn=qt.uniforms;if(Xt.useProgram(Ln.program)&&(pi=!0,wn=!0,hn=!0),st.id!==U&&(U=st.id,wn=!0),pi||R!==A){Xt.buffers.depth.getReversed()?(xt.copy(A.projectionMatrix),Hy(xt),Gy(xt),ze.setValue(G,"projectionMatrix",xt)):ze.setValue(G,"projectionMatrix",A.projectionMatrix),ze.setValue(G,"viewMatrix",A.matrixWorldInverse);const xn=ze.map.cameraPosition;xn!==void 0&&xn.setValue(G,Yt.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&ze.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ze.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,wn=!0,hn=!0)}if(W.isSkinnedMesh){ze.setOptional(G,W,"bindMatrix"),ze.setOptional(G,W,"bindMatrixInverse");const Qe=W.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ze.setValue(G,"boneTexture",Qe.boneTexture,L))}W.isBatchedMesh&&(ze.setOptional(G,W,"batchingTexture"),ze.setValue(G,"batchingTexture",W._matricesTexture,L),ze.setOptional(G,W,"batchingIdTexture"),ze.setValue(G,"batchingIdTexture",W._indirectTexture,L),ze.setOptional(G,W,"batchingColorTexture"),W._colorsTexture!==null&&ze.setValue(G,"batchingColorTexture",W._colorsTexture,L));const Tn=it.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Vt.update(W,it,Ln),(wn||qt.receiveShadow!==W.receiveShadow)&&(qt.receiveShadow=W.receiveShadow,ze.setValue(G,"receiveShadow",W.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Dn.envMap.value=zt,Dn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),wn&&(ze.setValue(G,"toneMappingExposure",C.toneMappingExposure),qt.needsLights&&Dc(Dn,hn),bt&&st.fog===!0&&wt.refreshFogUniforms(Dn,bt),wt.refreshMaterialUniforms(Dn,st,K,Q,v.state.transmissionRenderTarget[A.id]),Mc.upload(G,vn(qt),Dn,L)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Mc.upload(G,vn(qt),Dn,L),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ze.setValue(G,"center",W.center),ze.setValue(G,"modelViewMatrix",W.modelViewMatrix),ze.setValue(G,"normalMatrix",W.normalMatrix),ze.setValue(G,"modelMatrix",W.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Qe=st.uniformsGroups;for(let xn=0,Ts=Qe.length;xn<Ts;xn++){const On=Qe[xn];j.update(On,Ln),j.bind(On,Ln)}}return Ln}function Dc(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Uc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,q,it){kt.get(A.texture).__webglTexture=q,kt.get(A.depthTexture).__webglTexture=it;const st=kt.get(A);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const it=kt.get(A);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0};const Fo=G.createFramebuffer();this.setRenderTarget=function(A,q=0,it=0){X=A,P=q,z=it;let st=!0,W=null,bt=!1,Ut=!1;if(A){const zt=kt.get(A);if(zt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(G.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(zt.__hasExternalTextures)L.rebindTextures(A,kt.get(A.texture).__webglTexture,kt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(zt.__boundDepthTexture!==Wt){if(Wt!==null&&kt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ut=!0);const ee=kt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?W=ee[q][it]:W=ee[q],bt=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?W=kt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?W=ee[it]:W=ee,V.copy(A.viewport),lt.copy(A.scissor),ot=A.scissorTest}else V.copy(O).multiplyScalar(K).floor(),lt.copy(at).multiplyScalar(K).floor(),ot=St;if(it!==0&&(W=Fo),Xt.bindFramebuffer(G.FRAMEBUFFER,W)&&st&&Xt.drawBuffers(A,W),Xt.viewport(V),Xt.scissor(lt),Xt.setScissorTest(ot),bt){const zt=kt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,it)}else if(Ut){const zt=kt.get(A.texture),te=q;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,zt.__webglTexture,it,te)}else if(A!==null&&it!==0){const zt=kt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,it)}U=-1},this.readRenderTargetPixels=function(A,q,it,st,W,bt,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){Xt.bindFramebuffer(G.FRAMEBUFFER,Lt);try{const zt=A.texture,te=zt.format,ee=zt.type;if(!he.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-st&&it>=0&&it<=A.height-W&&G.readPixels(q,it,st,W,ae.convert(te),ae.convert(ee),bt)}finally{const zt=X!==null?kt.get(X).__webglFramebuffer:null;Xt.bindFramebuffer(G.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,q,it,st,W,bt,Ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){const zt=A.texture,te=zt.format,ee=zt.type;if(!he.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-st&&it>=0&&it<=A.height-W){Xt.bindFramebuffer(G.FRAMEBUFFER,Lt);const Wt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.bufferData(G.PIXEL_PACK_BUFFER,bt.byteLength,G.STREAM_READ),G.readPixels(q,it,st,W,ae.convert(te),ae.convert(ee),0);const _e=X!==null?kt.get(X).__webglFramebuffer:null;Xt.bindFramebuffer(G.FRAMEBUFFER,_e);const ve=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Fy(G,ve,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,bt),G.deleteBuffer(Wt),G.deleteSync(ve),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,it=0){A.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const st=Math.pow(2,-it),W=Math.floor(A.image.width*st),bt=Math.floor(A.image.height*st),Ut=q!==null?q.x:0,Lt=q!==null?q.y:0;L.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,it,0,0,Ut,Lt,W,bt),Xt.unbindTexture()};const ja=G.createFramebuffer(),Or=G.createFramebuffer();this.copyTextureToTexture=function(A,q,it=null,st=null,W=0,bt=null){A.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,A=arguments[1],q=arguments[2],bt=arguments[3]||0,it=null),bt===null&&(W!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=W,W=0):bt=0);let Ut,Lt,zt,te,ee,Wt,_e,ve,Xe;const Te=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(it!==null)Ut=it.max.x-it.min.x,Lt=it.max.y-it.min.y,zt=it.isBox3?it.max.z-it.min.z:1,te=it.min.x,ee=it.min.y,Wt=it.isBox3?it.min.z:0;else{const Tn=Math.pow(2,-W);Ut=Math.floor(Te.width*Tn),Lt=Math.floor(Te.height*Tn),A.isDataArrayTexture?zt=Te.depth:A.isData3DTexture?zt=Math.floor(Te.depth*Tn):zt=1,te=0,ee=0,Wt=0}st!==null?(_e=st.x,ve=st.y,Xe=st.z):(_e=0,ve=0,Xe=0);const ne=ae.convert(q.format),qt=ae.convert(q.type);let cn;q.isData3DTexture?(L.setTexture3D(q,0),cn=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),cn=G.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),cn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=G.getParameter(G.UNPACK_ROW_LENGTH),Ln=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pi=G.getParameter(G.UNPACK_SKIP_PIXELS),wn=G.getParameter(G.UNPACK_SKIP_ROWS),hn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Te.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Te.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const ze=A.isDataArrayTexture||A.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Tn=kt.get(A),Qe=kt.get(q),xn=kt.get(Tn.__renderTarget),Ts=kt.get(Qe.__renderTarget);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,xn.__webglFramebuffer),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let On=0;On<zt;On++)ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(A).__webglTexture,W,Wt+On),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(q).__webglTexture,bt,Xe+On)),G.blitFramebuffer(te,ee,Ut,Lt,_e,ve,Ut,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||kt.has(A)){const Tn=kt.get(A),Qe=kt.get(q);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,ja),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Or);for(let xn=0;xn<zt;xn++)ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,W,Wt+xn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,W),Dn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qe.__webglTexture,bt,Xe+xn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Qe.__webglTexture,bt),W!==0?G.blitFramebuffer(te,ee,Ut,Lt,_e,ve,Ut,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Dn?G.copyTexSubImage3D(cn,bt,_e,ve,Xe+xn,te,ee,Ut,Lt):G.copyTexSubImage2D(cn,bt,_e,ve,te,ee,Ut,Lt);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Dn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(cn,bt,_e,ve,Xe,Ut,Lt,zt,ne,qt,Te.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(cn,bt,_e,ve,Xe,Ut,Lt,zt,ne,Te.data):G.texSubImage3D(cn,bt,_e,ve,Xe,Ut,Lt,zt,ne,qt,Te):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,bt,_e,ve,Ut,Lt,ne,qt,Te.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,bt,_e,ve,Te.width,Te.height,ne,Te.data):G.texSubImage2D(G.TEXTURE_2D,bt,_e,ve,Ut,Lt,ne,qt,Te);G.pixelStorei(G.UNPACK_ROW_LENGTH,Me),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ln),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pi),G.pixelStorei(G.UNPACK_SKIP_ROWS,wn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,hn),bt===0&&q.generateMipmaps&&G.generateMipmap(cn),Xt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,it=null,st=null,W=0){return A.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,A=arguments[2],q=arguments[3],W=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,it,st,W)},this.initRenderTarget=function(A){kt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Xt.unbindTexture()},this.resetState=function(){P=0,z=0,X=null,Xt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const lA=({status:o="idle"})=>{const e=ye.useRef(null),i=ye.useRef(null),s=ye.useRef(null);return ye.useEffect(()=>{const l=e.current;if(!l)return;const u=l.clientWidth||320,d=l.clientHeight||320,h=new hM,m=new ti(75,u/d,.1,1e3),p=new oA({alpha:!0,antialias:!0});p.setSize(u,d),p.setPixelRatio(window.devicePixelRatio||1),l.appendChild(p.domElement);const x=new Ah(1.5,64),g=new gM({color:16168764,emissive:16168764,emissiveIntensity:.5,shininess:100,transparent:!0,opacity:.9});s.current=g;const S=new Ei(x,g);i.current=S,h.add(S);const M=new Rh(.8,32,32),T=new Eh({color:16777215,transparent:!0,opacity:.3}),w=new Ei(M,T);h.add(w);const y=new yM(16168764,2,10);y.position.set(2,2,5),h.add(y);const v=new EM(4210752,1);h.add(v),m.position.z=5;let D;const N=()=>{D=requestAnimationFrame(N);const H=Date.now()*.001,P=Math.sin(H*2)*.05+1;S.scale.set(P,P,P),S.rotation.y+=.005,S.rotation.z+=.003,S.position.y=Math.sin(H*1.5)*.1,p.render(h,m)};N();const C=()=>{if(!l)return;const H=l.clientWidth||320,P=l.clientHeight||320;m.aspect=H/P,m.updateProjectionMatrix(),p.setSize(H,P)};return window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C),cancelAnimationFrame(D),l.contains(p.domElement)&&l.removeChild(p.domElement),p.dispose()}},[]),ye.useEffect(()=>{s.current&&(o==="computing"?(s.current.color.setHex(440020),s.current.emissive.setHex(440020)):o==="success"?(s.current.color.setHex(1096065),s.current.emissive.setHex(1096065)):(s.current.color.setHex(16168764),s.current.emissive.setHex(16168764)))},[o]),F.jsxs("div",{className:"relative w-full h-full flex items-center justify-center",children:[F.jsx("div",{className:"absolute inset-0 bg-[#fcc82c]/10 blur-[100px] rounded-full scale-75 animate-pulse"}),F.jsx("div",{ref:e,className:"w-full h-full animate-float transition-transform duration-300 ease-out"})]})},cA=()=>{const o=ye.useRef(null);return ye.useEffect(()=>{const e=o.current;if(!e)return;function i(){if(!e)return;const C=e.clientWidth||1280,H=e.clientHeight||720;(e.width!==C||e.height!==H)&&(e.width=C,e.height=H)}let s=null;typeof ResizeObserver<"u"&&(s=new ResizeObserver(i),s.observe(e)),i();const l=e.getContext("webgl")||e.getContext("experimental-webgl");if(!l)return;const u=`
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `,d=`
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
          vec2 uv = v_texCoord;
          
          float noise = sin(uv.x * 3.0 + u_time * 0.5) * cos(uv.y * 2.0 - u_time * 0.3);
          noise += sin(uv.y * 5.0 + u_time * 0.8) * cos(uv.x * 4.0 + u_time * 0.2);
          
          vec3 baseColor = vec3(0.035, 0.043, 0.063); // #090B10
          vec3 accentColor = vec3(0.965, 0.718, 0.235); // #F6B73C
          
          float highlight = smoothstep(0.1, 0.9, noise * 0.5 + 0.5);
          vec3 finalColor = mix(baseColor, baseColor + accentColor * 0.08, highlight);
          
          float vignette = 1.0 - length(uv - 0.5) * 1.2;
          finalColor *= smoothstep(0.0, 0.8, vignette);

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;function h(C,H){if(!l)return null;const P=l.createShader(C);return P?(l.shaderSource(P,H),l.compileShader(P),P):null}const m=h(l.VERTEX_SHADER,u),p=h(l.FRAGMENT_SHADER,d);if(!m||!p)return;const x=l.createProgram();if(!x)return;l.attachShader(x,m),l.attachShader(x,p),l.linkProgram(x),l.useProgram(x);const g=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,g),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),l.STATIC_DRAW);const S=l.getAttribLocation(x,"a_position");l.enableVertexAttribArray(S),l.vertexAttribPointer(S,2,l.FLOAT,!1,0,0);const M=l.getUniformLocation(x,"u_time"),T=l.getUniformLocation(x,"u_resolution"),w=l.getUniformLocation(x,"u_mouse"),y={x:e.width/2,y:e.height/2},v=C=>{if(!e)return;const H=e.getBoundingClientRect();if(H.width&&H.height){const P=(C.clientX-H.left)/H.width,z=1-(C.clientY-H.top)/H.height;y.x=P*e.width,y.y=z*e.height}};window.addEventListener("mousemove",v);let D;function N(C){!l||!e||(typeof ResizeObserver>"u"&&i(),l.viewport(0,0,e.width,e.height),M&&l.uniform1f(M,C*.001),T&&l.uniform2f(T,e.width,e.height),w&&l.uniform2f(w,y.x,y.y),l.drawArrays(l.TRIANGLE_STRIP,0,4),D=requestAnimationFrame(N))}return D=requestAnimationFrame(N),()=>{window.removeEventListener("mousemove",v),s&&e&&s.unobserve(e),cancelAnimationFrame(D)}},[]),F.jsx("div",{className:"fixed inset-0 w-full h-full pointer-events-none z-0 opacity-60 overflow-hidden",children:F.jsx("canvas",{ref:o,className:"block w-full h-full"})})},uA=({onSendMessage:o})=>{const[e,i]=ye.useState(""),[s,l]=ye.useState(!1),[u,d]=ye.useState(null);ye.useEffect(()=>{const x=window.SpeechRecognition||window.webkitSpeechRecognition;if(x){const g=new x;g.continuous=!1,g.interimResults=!1,g.lang="en-US",g.onresult=S=>{const M=S.results[0][0].transcript;M&&i(M),l(!1)},g.onerror=()=>{l(!1)},g.onend=()=>{l(!1)},d(g)}},[]);const h=()=>{if(!u){alert("Speech recognition is not supported on this browser engine.");return}if(s)u.stop(),l(!1);else try{u.start(),l(!0)}catch{l(!1)}},m=x=>{x&&x.preventDefault(),e.trim()&&(o(e.trim()),i(""))},p=x=>{x.key==="Enter"&&m()};return F.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-6 z-40",children:F.jsx("div",{className:"max-w-[720px] mx-auto relative",children:F.jsxs("form",{onSubmit:m,className:"relative group",children:[F.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-[#fcc82c]/20 to-[#fcc82c]/0 rounded-full blur opacity-25 group-focus-within:opacity-50 transition-opacity"}),F.jsxs("div",{className:"relative flex items-center bg-[#1a1f26]/80 backdrop-blur-2xl border border-white/10 rounded-full h-16 px-5 shadow-2xl transition-all duration-300 group-focus-within:border-[#fcc82c]/30",children:[F.jsx(kS,{className:"w-5 h-5 text-amber-400/60 ml-1 shrink-0"}),F.jsx("input",{type:"text",value:e,onChange:x=>i(x.target.value),onKeyDown:p,placeholder:s?"Listening to voice...":"Ask Kivo anything...",className:"flex-1 bg-transparent border-none focus:outline-none text-white placeholder-slate-500 px-4 text-sm font-medium"}),F.jsxs("div",{className:"flex items-center gap-2 pr-1",children:[F.jsx("button",{type:"button",onClick:h,className:`w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-pointer ${s?"bg-rose-500 text-white animate-pulse":"text-slate-400 hover:text-amber-400 hover:bg-white/5"}`,title:s?"Stop Voice Input":"Start Voice Input",children:s?F.jsx(zS,{className:"w-4 h-4"}):F.jsx(BS,{className:"w-4 h-4"})}),F.jsx("button",{type:"submit",disabled:!e.trim(),className:"w-10 h-10 flex items-center justify-center rounded-full bg-[#fcc82c] text-slate-950 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#fcc82c]/20 disabled:opacity-40 disabled:hover:scale-100 cursor-pointer",children:F.jsx(bS,{className:"w-5 h-5 stroke-[2.5]"})})]})]})]})})})},fA=({transactions:o,onSendTx:e})=>{const i="0x71C7656EC7ab88b098defB751B7401B5f6d8976F",[s,l]=ye.useState(!1),[u,d]=ye.useState(!1),[h,m]=ye.useState(""),[p,x]=ye.useState(""),[g,S]=ye.useState("ETH"),[M,T]=ye.useState(!1),w=()=>{navigator.clipboard.writeText(i),l(!0),setTimeout(()=>l(!1),2e3)},y=async D=>{if(D.preventDefault(),!(!h||!p||isNaN(Number(p))||Number(p)<=0)){T(!0);try{await e(h,Number(p),g),d(!1),m(""),x("")}catch(N){console.error(N)}finally{T(!1)}}},v=4.85-o.filter(D=>D.type==="send").reduce((D,N)=>D+N.amount,0);return F.jsxs("div",{className:"space-y-6 max-w-4xl mx-auto pb-24",children:[F.jsxs("div",{className:"bg-gradient-to-br from-[#1a1f26] to-[#0f141a] border border-[#fcc82c]/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden",children:[F.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-[#fcc82c]/5 rounded-full blur-3xl pointer-events-none"}),F.jsxs("div",{className:"flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6",children:[F.jsxs("div",{children:[F.jsxs("span",{className:"text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5",children:[F.jsx(Ac,{className:"w-4 h-4 text-amber-400"}),"Verified Wallet Vault"]}),F.jsxs("h2",{className:"text-4xl font-bold text-white tracking-tight mt-1 font-mono",children:[v.toFixed(4)," ",F.jsx("span",{className:"text-amber-400 text-2xl font-sans",children:"ETH"})]}),F.jsxs("p",{className:"text-slate-400 text-xs mt-1",children:["Estimated Value: $",(v*3450).toLocaleString("en-US",{minimumFractionDigits:2})," USD"]})]}),F.jsx("div",{className:"flex items-center gap-3",children:F.jsxs("button",{onClick:()=>d(!0),className:"px-5 py-2.5 rounded-xl bg-[#fcc82c] text-slate-950 font-semibold text-xs flex items-center gap-2 hover:bg-amber-300 transition-all cursor-pointer shadow-lg shadow-[#fcc82c]/20",children:[F.jsx(Md,{className:"w-3.5 h-3.5"}),"Send Funds"]})})]}),F.jsxs("div",{className:"flex items-center justify-between bg-slate-950/60 border border-white/5 rounded-xl p-3 text-xs font-mono",children:[F.jsx("span",{className:"text-slate-400 truncate max-w-[280px] sm:max-w-none",children:i}),F.jsxs("button",{onClick:w,className:"text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors",children:[s?F.jsx(y_,{className:"w-3.5 h-3.5 text-emerald-400"}):F.jsx(wS,{className:"w-3.5 h-3.5"}),s?"Copied":"Copy"]})]})]}),F.jsxs("div",{className:"bg-[#1a1f26]/80 border border-white/10 rounded-2xl p-6 space-y-4",children:[F.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[F.jsx(dh,{className:"w-5 h-5 text-amber-400"}),"Recent Cryptographic Ledger"]}),F.jsx("div",{className:"divide-y divide-white/5",children:o.map(D=>F.jsxs("div",{className:"py-3.5 flex items-center justify-between text-sm",children:[F.jsxs("div",{className:"flex items-center gap-3",children:[F.jsx("div",{className:`w-9 h-9 rounded-xl flex items-center justify-center ${D.type==="send"?"bg-rose-500/10 text-rose-400 border border-rose-500/20":"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`,children:D.type==="send"?F.jsx(fh,{className:"w-4 h-4"}):F.jsx(S_,{className:"w-4 h-4"})}),F.jsxs("div",{children:[F.jsx("div",{className:"font-semibold text-white",children:D.type==="send"?"Sent Payment":"Received Payment"}),F.jsx("div",{className:"text-xs text-slate-500 font-mono",children:D.timestamp})]})]}),F.jsxs("div",{className:"text-right",children:[F.jsxs("div",{className:`font-mono font-bold ${D.type==="send"?"text-rose-400":"text-emerald-400"}`,children:[D.type==="send"?"-":"+",D.amount," ",D.currency]}),F.jsxs("div",{className:"text-[10px] text-slate-500 font-mono truncate max-w-[120px]",children:[D.hash.substring(0,10),"..."]})]})]},D.id))})]}),u&&F.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:F.jsxs("div",{className:"bg-[#1b2027] border border-white/10 w-full max-w-md rounded-2xl p-6 space-y-5 shadow-2xl",children:[F.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2",children:[F.jsx(Md,{className:"w-5 h-5 text-amber-400"}),"Cryptographic Send Transfer"]}),F.jsxs("form",{onSubmit:y,className:"space-y-4 text-sm",children:[F.jsxs("div",{children:[F.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Recipient Address or ENS"}),F.jsx("input",{type:"text",value:h,onChange:D=>m(D.target.value),placeholder:"0x... or name.eth",className:"w-full bg-[#0f141a] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono text-xs",required:!0})]}),F.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[F.jsxs("div",{className:"col-span-2",children:[F.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Amount"}),F.jsx("input",{type:"number",step:"0.001",value:p,onChange:D=>x(D.target.value),placeholder:"0.05",className:"w-full bg-[#0f141a] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono text-xs",required:!0})]}),F.jsxs("div",{children:[F.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Asset"}),F.jsxs("select",{value:g,onChange:D=>S(D.target.value),className:"w-full bg-[#0f141a] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-400 font-mono text-xs",children:[F.jsx("option",{value:"ETH",children:"ETH"}),F.jsx("option",{value:"USDC",children:"USDC"}),F.jsx("option",{value:"WBTC",children:"WBTC"})]})]})]}),F.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-white/5 text-xs text-slate-400 space-y-1 font-mono",children:[F.jsxs("div",{className:"flex justify-between",children:[F.jsx("span",{children:"Network Fee (Est.):"}),F.jsx("span",{className:"text-amber-400",children:"0.0012 ETH"})]}),F.jsxs("div",{className:"flex justify-between",children:[F.jsx("span",{children:"Web Crypto Hash Signature:"}),F.jsx("span",{className:"text-slate-500",children:"SHA-256 Enabled"})]})]}),F.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[F.jsx("button",{type:"button",onClick:()=>d(!1),className:"px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs cursor-pointer",children:"Cancel"}),F.jsx("button",{type:"submit",disabled:M,className:"px-5 py-2.5 rounded-xl bg-[#fcc82c] text-slate-950 font-semibold text-xs flex items-center gap-1.5 cursor-pointer hover:bg-amber-300",children:M?"Signing Hash...":"Sign & Submit"})]})]})]})})]})},dA=({transactions:o})=>F.jsx("div",{className:"space-y-6 max-w-4xl mx-auto pb-24",children:F.jsxs("div",{className:"bg-[#1a1f26]/80 border border-white/10 rounded-2xl p-6 space-y-4",children:[F.jsxs("div",{className:"flex items-center justify-between",children:[F.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[F.jsx(M_,{className:"w-5 h-5 text-amber-400"}),"Cryptographic Transaction History Ledger"]}),F.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[o.length," Verified Entries"]})]}),F.jsx("div",{className:"divide-y divide-white/5",children:o.map(e=>F.jsxs("div",{className:"py-4 space-y-2",children:[F.jsxs("div",{className:"flex items-center justify-between text-sm",children:[F.jsxs("div",{className:"flex items-center gap-3",children:[F.jsx("div",{className:`w-9 h-9 rounded-xl flex items-center justify-center ${e.type==="send"?"bg-rose-500/10 text-rose-400 border border-rose-500/20":"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`,children:e.type==="send"?F.jsx(fh,{className:"w-4 h-4"}):F.jsx(S_,{className:"w-4 h-4"})}),F.jsxs("div",{children:[F.jsx("div",{className:"font-semibold text-white",children:e.type==="send"?`To: ${e.recipientOrSender}`:`From: ${e.recipientOrSender}`}),F.jsx("div",{className:"text-xs text-slate-500 font-mono",children:e.timestamp})]})]}),F.jsxs("div",{className:"text-right",children:[F.jsxs("div",{className:`font-mono font-bold ${e.type==="send"?"text-rose-400":"text-emerald-400"}`,children:[e.type==="send"?"-":"+",e.amount," ",e.currency]}),F.jsx("span",{className:"text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 uppercase font-semibold",children:e.status})]})]}),F.jsxs("div",{className:"bg-slate-950/60 p-2.5 rounded-xl border border-white/5 text-[11px] font-mono flex items-center justify-between text-slate-400",children:[F.jsxs("span",{className:"truncate max-w-[320px] sm:max-w-none",children:["Hash: ",F.jsx("strong",{className:"text-amber-200/90",children:e.hash})]}),F.jsxs("span",{className:"flex items-center gap-1 text-slate-500 text-[10px]",children:[F.jsx(Ac,{className:"w-3 h-3 text-emerald-400"}),"Verified"]})]})]},e.id))})]})}),hA=()=>{const[o,e]=ye.useState("0x04bf6936359d99c4bf3b2f2c8f8b89e7a2c091d3"),[i,s]=ye.useState(!1),l=async()=>{s(!0);try{const u=await crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"]),d=await crypto.subtle.exportKey("spki",u.publicKey),m="0x"+Array.from(new Uint8Array(d)).map(p=>p.toString(16).padStart(2,"0")).join("").substring(0,40);e(m)}catch{console.warn("Subtle crypto export fallback")}finally{s(!1)}};return F.jsx("div",{className:"space-y-6 max-w-4xl mx-auto pb-24",children:F.jsxs("div",{className:"bg-[#1a1f26]/80 border border-white/10 rounded-2xl p-6 space-y-6",children:[F.jsxs("div",{className:"flex items-center gap-4",children:[F.jsx("div",{className:"w-16 h-16 rounded-full bg-slate-900 border-2 border-amber-400/50 flex items-center justify-center text-amber-400 text-2xl font-bold font-mono shadow-xl",children:"KIVO"}),F.jsxs("div",{children:[F.jsx("h2",{className:"text-xl font-bold text-white",children:"Stewardship Identity Vault"}),F.jsx("p",{className:"text-xs text-slate-400",children:"Enterprise Web Crypto Identity Verification"})]})]}),F.jsxs("div",{className:"space-y-4 pt-4 border-t border-white/5",children:[F.jsxs("div",{className:"flex items-center justify-between",children:[F.jsxs("span",{className:"text-sm font-semibold text-white flex items-center gap-2",children:[F.jsx(US,{className:"w-4 h-4 text-amber-400"}),"Active Hardware ECDSA Public Key"]}),F.jsx("button",{onClick:l,disabled:i,className:"px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 text-xs font-semibold cursor-pointer transition-all",children:i?"Generating Key...":"Rotate Key Pair"})]}),F.jsx("div",{className:"bg-slate-950 p-4 rounded-xl font-mono text-xs text-amber-200/90 border border-white/5 break-all select-all",children:o})]}),F.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2 text-xs text-slate-300",children:[F.jsxs("div",{className:"flex items-center gap-2 font-semibold text-emerald-400",children:[F.jsx(y_,{className:"w-4 h-4"}),"Hardware Security Enclave Status: ACTIVE"]}),F.jsx("p",{className:"text-slate-400 leading-relaxed",children:"All user operations are protected with browser-native SubtleCrypto cryptography. Zero unencrypted payload transfer."})]})]})})},pA=({messages:o,transactions:e,onTriggerSendModal:i,onOpenTab:s})=>{const l=4.85-e.filter(u=>u.type==="send").reduce((u,d)=>u+d.amount,0);return F.jsx("div",{className:"space-y-4 max-w-2xl mx-auto w-full pb-32",children:o.map(u=>F.jsx("div",{className:`flex flex-col ${u.sender==="user"?"items-end":"items-start"}`,children:F.jsxs("div",{className:`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm shadow-xl ${u.sender==="user"?"bg-amber-400 text-slate-950 font-medium rounded-br-none":"bg-[#1a1f26]/90 backdrop-blur-xl border border-white/10 text-white rounded-bl-none"}`,children:[F.jsx("div",{children:u.text}),F.jsx("div",{className:`text-[10px] mt-1 font-mono ${u.sender==="user"?"text-slate-900/60":"text-slate-500"}`,children:u.timestamp}),u.sender==="kivo"&&u.actionCard==="show_balance"&&F.jsxs("div",{className:"mt-3 p-4 rounded-xl bg-slate-950/80 border border-amber-400/30 text-white space-y-2",children:[F.jsxs("div",{className:"flex items-center justify-between text-xs text-amber-400 font-semibold",children:[F.jsxs("span",{className:"flex items-center gap-1",children:[F.jsx(Ac,{className:"w-3.5 h-3.5"})," Verified Wallet Vault"]}),F.jsx("span",{children:"Active"})]}),F.jsxs("div",{className:"text-2xl font-bold font-mono text-white",children:[l.toFixed(4)," ETH"]}),F.jsxs("div",{className:"text-xs text-slate-400",children:["Total USD Value: $",(l*3450).toLocaleString("en-US",{minimumFractionDigits:2})]}),F.jsxs("button",{onClick:()=>s&&s("wallet"),className:"w-full mt-2 py-2 rounded-lg bg-amber-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1 cursor-pointer hover:bg-amber-300",children:[F.jsx(dh,{className:"w-3.5 h-3.5"}),"View Full Wallet"]})]}),u.sender==="kivo"&&u.actionCard==="send_money"&&F.jsxs("div",{className:"mt-3 p-4 rounded-xl bg-slate-950/80 border border-amber-400/30 text-white space-y-2",children:[F.jsxs("div",{className:"text-xs font-semibold text-amber-400 flex items-center gap-1",children:[F.jsx(Md,{className:"w-3.5 h-3.5"})," Ready to Execute Transfer"]}),F.jsx("p",{className:"text-xs text-slate-300",children:"Click below to open the secure cryptographic payment interface with SHA-256 signatures."}),F.jsxs("button",{onClick:i,className:"w-full mt-2 py-2 rounded-lg bg-[#fcc82c] text-slate-950 font-semibold text-xs flex items-center justify-center gap-1 cursor-pointer hover:bg-amber-300",children:[F.jsx(fh,{className:"w-3.5 h-3.5 stroke-[2.5]"}),"Open Payment Transfer Modal"]})]}),u.sender==="kivo"&&u.actionCard==="portfolio"&&F.jsxs("div",{className:"mt-3 p-4 rounded-xl bg-slate-950/80 border border-amber-400/30 text-white space-y-2",children:[F.jsx("div",{className:"text-xs font-semibold text-amber-400",children:"Portfolio Breakdown Summary"}),F.jsxs("div",{className:"space-y-1 text-xs font-mono text-slate-300",children:[F.jsxs("div",{className:"flex justify-between",children:[F.jsx("span",{children:"ETH Holding:"}),F.jsx("span",{children:"4.85 ETH"})]}),F.jsxs("div",{className:"flex justify-between",children:[F.jsx("span",{children:"WBTC Holding:"}),F.jsx("span",{children:"0.12 WBTC"})]}),F.jsxs("div",{className:"flex justify-between",children:[F.jsx("span",{children:"SOL Holding:"}),F.jsx("span",{children:"45.0 SOL"})]})]}),F.jsx("button",{onClick:()=>s&&s("portfolio"),className:"w-full mt-2 py-2 rounded-lg bg-amber-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1 cursor-pointer hover:bg-amber-300",children:"Inspect Live Portfolio"})]})]})},u.id))})};function mA(){const[o,e]=ye.useState("assistant"),[i,s]=ye.useState("idle"),[l,u]=ye.useState(!1),[d,h]=ye.useState(()=>{const S=localStorage.getItem("kivo_transactions");if(S)try{return JSON.parse(S)}catch{}return[{id:"tx-101",type:"send",recipientOrSender:"0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",amount:.15,currency:"ETH",timestamp:new Date(Date.now()-36e5).toLocaleTimeString(),status:"completed",hash:"0xe7c8a91b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f"},{id:"tx-100",type:"receive",recipientOrSender:"0x3C44CdD4596942666A3186595808293d052B34c4",amount:1.25,currency:"ETH",timestamp:new Date(Date.now()-864e5).toLocaleTimeString(),status:"completed",hash:"0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b"}]});ye.useEffect(()=>{localStorage.setItem("kivo_transactions",JSON.stringify(d))},[d]);const[m,p]=ye.useState([]),x=async(S,M,T)=>{s("computing");const w=`${S}-${M}-${T}-${Date.now()}`,v=new TextEncoder().encode(w),D=await crypto.subtle.digest("SHA-256",v),C="0x"+Array.from(new Uint8Array(D)).map(P=>P.toString(16).padStart(2,"0")).join(""),H={id:`tx-${Date.now()}`,type:"send",recipientOrSender:S,amount:M,currency:T,timestamp:new Date().toLocaleTimeString(),status:"completed",hash:C};return h(P=>[H,...P]),s("success"),setTimeout(()=>{s("idle")},2500),H},g=S=>{const M={id:Date.now().toString(),sender:"user",text:S,timestamp:new Date().toLocaleTimeString()};p(w=>[...w,M]),s("computing");const T=S.toLowerCase();setTimeout(()=>{let w="",y;T.includes("balance")||T.includes("show balance")?(w="Here is your current verified wallet balance and asset valuation.",y="show_balance"):T.includes("send")||T.includes("transfer")||T.includes("pay")?(w="I can help you send funds with SHA-256 Web Crypto signatures. Click below to proceed.",y="send_money"):T.includes("portfolio")||T.includes("holdings")?(w="Here is your current aggregate crypto portfolio breakdown.",y="portfolio"):w=`I have analyzed your request: "${S}". How would you like to proceed with your wallet stewardship?`;const v={id:(Date.now()+1).toString(),sender:"kivo",text:w,timestamp:new Date().toLocaleTimeString(),actionCard:y};p(D=>[...D,v]),s("idle")},800)};return F.jsxs("div",{className:"relative min-h-screen bg-[#0f141a] text-slate-100 selection:bg-[#fcc82c]/30 selection:text-[#fcc82c] overflow-x-hidden font-sans",children:[F.jsx(cA,{}),F.jsx(YS,{onSearchQuery:S=>g(S),onOpenProfile:()=>e("profile")}),F.jsx(ZS,{activeTab:o,setActiveTab:e}),F.jsxs("main",{className:"relative z-10 pt-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col items-center",children:[o==="assistant"&&F.jsxs("div",{className:"w-full flex flex-col items-center",children:[F.jsx("div",{className:"relative w-full max-w-[360px] aspect-square my-2",children:F.jsx(lA,{status:i})}),m.length===0&&F.jsxs("div",{className:"text-center space-y-2 mb-8 z-10",children:[F.jsxs("h1",{className:"text-4xl sm:text-5xl font-bold tracking-tight text-white",children:["Good Evening ",F.jsx("br",{}),F.jsx("span",{className:"text-[#fcc82c]",children:"I'm KIVO."})]}),F.jsx("p",{className:"text-slate-400 text-sm",children:"How can I help you today?"})]}),m.length===0&&F.jsx("div",{className:"w-full max-w-2xl overflow-x-auto no-scrollbar mb-8",children:F.jsxs("div",{className:"flex items-center justify-center gap-3 whitespace-nowrap px-4",children:[F.jsx("button",{onClick:()=>g("I want to send money"),className:"px-5 py-2.5 rounded-full bg-[#252a32]/60 border border-white/5 backdrop-blur-md text-slate-300 hover:text-[#fcc82c] hover:border-[#fcc82c]/30 hover:bg-[#30353d] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider",children:"Send money"}),F.jsx("button",{onClick:()=>g("Request payment"),className:"px-5 py-2.5 rounded-full bg-[#252a32]/60 border border-white/5 backdrop-blur-md text-slate-300 hover:text-[#fcc82c] hover:border-[#fcc82c]/30 hover:bg-[#30353d] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider",children:"Request payment"}),F.jsx("button",{onClick:()=>g("Show my portfolio"),className:"px-5 py-2.5 rounded-full bg-[#252a32]/60 border border-white/5 backdrop-blur-md text-slate-300 hover:text-[#fcc82c] hover:border-[#fcc82c]/30 hover:bg-[#30353d] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider",children:"Portfolio"}),F.jsx("button",{onClick:()=>g("Show balance"),className:"px-5 py-2.5 rounded-full bg-[#252a32]/60 border border-white/5 backdrop-blur-md text-slate-300 hover:text-[#fcc82c] hover:border-[#fcc82c]/30 hover:bg-[#30353d] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider",children:"Show balance"})]})}),m.length>0&&F.jsx(pA,{messages:m,transactions:d,onTriggerSendModal:()=>e("wallet"),onOpenTab:S=>e(S)}),F.jsx(uA,{onSendMessage:g})]}),o==="wallet"&&F.jsx("div",{className:"w-full",children:F.jsx(fA,{transactions:d,onSendTx:x})}),o==="history"&&F.jsx("div",{className:"w-full",children:F.jsx(dA,{transactions:d})}),o==="profile"&&F.jsx("div",{className:"w-full",children:F.jsx(hA,{})})]})]})}pS.createRoot(document.getElementById("root")).render(F.jsx(ye.StrictMode,{children:F.jsx(mA,{})}));
