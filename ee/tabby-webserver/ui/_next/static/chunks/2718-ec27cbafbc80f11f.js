(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2718],{70652:function(e,t,n){e.exports=n(54007)},11978:function(e,t,n){e.exports=n(77280)},65122:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},65727:function(e,t,n){"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}n.d(t,{M:function(){return r}})},85656:function(e,t,n){"use strict";n.d(t,{B:function(){return l}});var r=n(3546),o=n(47091),u=n(79869),i=n(74047);function l(e){let t=e+"CollectionProvider",[n,l]=(0,o.b)(t),[a,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,l=c(s,n),a=(0,u.e)(t,l.collectionRef);return r.createElement(i.g7,{ref:a},o)}),d=e+"CollectionItemSlot",m="data-radix-collection-item",p=r.forwardRef((e,t)=>{let{scope:n,children:o,...l}=e,a=r.useRef(null),s=(0,u.e)(t,a),f=c(d,n);return r.useEffect(()=>(f.itemMap.set(a,{ref:a,...l}),()=>void f.itemMap.delete(a))),r.createElement(i.g7,{[m]:"",ref:s},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return r.createElement(a,{scope:t,itemMap:u,collectionRef:o},n)},Slot:f,ItemSlot:p},function(t){let n=c(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},l]}},79869:function(e,t,n){"use strict";n.d(t,{F:function(){return o},e:function(){return u}});var r=n(3546);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function u(...e){return(0,r.useCallback)(o(...e),e)}},47091:function(e,t,n){"use strict";n.d(t,{b:function(){return u},k:function(){return o}});var r=n(3546);function o(e,t){let n=(0,r.createContext)(t);function o(e){let{children:t,...o}=e,u=(0,r.useMemo)(()=>o,Object.values(o));return(0,r.createElement)(n.Provider,{value:u},t)}return o.displayName=e+"Provider",[o,function(o){let u=(0,r.useContext)(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],o=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let o=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let u=(0,r.createContext)(o),i=n.length;function l(t){let{scope:n,children:o,...l}=t,a=(null==n?void 0:n[e][i])||u,c=(0,r.useMemo)(()=>l,Object.values(l));return(0,r.createElement)(a.Provider,{value:c},o)}return n=[...n,o],l.displayName=t+"Provider",[l,function(n,l){let a=(null==l?void 0:l[e][i])||u,c=(0,r.useContext)(a);if(c)return c;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),u=o[`__scope${r}`];return{...t,...u}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}},57541:function(e,t,n){"use strict";n.d(t,{gm:function(){return u}});var r=n(3546);let o=(0,r.createContext)(void 0);function u(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},29434:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r,o=n(3546),u=n(65292);let i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),l=0;function a(e){let[t,n]=o.useState(i());return(0,u.b)(()=>{e||n(e=>null!=e?e:String(l++))},[e]),e||(t?`radix-${t}`:"")}},96497:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(3546),o=n(30171),u=n(79869),i=n(65292);let l=e=>{let{present:t,children:n}=e,l=function(e){var t;let[n,u]=(0,r.useState)(),l=(0,r.useRef)({}),c=(0,r.useRef)(e),s=(0,r.useRef)("none"),f=e?"mounted":"unmounted",[d,m]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},f));return(0,r.useEffect)(()=>{let e=a(l.current);s.current="mounted"===d?e:"none"},[d]),(0,i.b)(()=>{let t=l.current,n=c.current,r=n!==e;if(r){let r=s.current,o=a(t);e?m("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?m("UNMOUNT"):n&&r!==o?m("ANIMATION_OUT"):m("UNMOUNT"),c.current=e}},[e,m]),(0,i.b)(()=>{if(n){let e=e=>{let t=a(l.current),r=t.includes(e.animationName);e.target===n&&r&&(0,o.flushSync)(()=>m("ANIMATION_END"))},t=e=>{e.target===n&&(s.current=a(l.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}m("ANIMATION_END")},[n,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,r.useCallback)(e=>{e&&(l.current=getComputedStyle(e)),u(e)},[])}}(t),c="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),s=(0,u.e)(l.ref,c.ref),f="function"==typeof n;return f||l.isPresent?(0,r.cloneElement)(c,{ref:s}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},72205:function(e,t,n){"use strict";n.d(t,{WV:function(){return l},jH:function(){return a}});var r=n(65122),o=n(3546),u=n(30171),i=n(74047);let l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,o.forwardRef)((e,n)=>{let{asChild:u,...l}=e,a=u?i.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(a,(0,r.Z)({},l,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&(0,u.flushSync)(()=>e.dispatchEvent(t))}},1333:function(e,t,n){"use strict";n.d(t,{Pc:function(){return w},ck:function(){return _},fC:function(){return A}});var r=n(65122),o=n(3546),u=n(65727),i=n(85656),l=n(79869),a=n(47091),c=n(29434),s=n(72205),f=n(17957),d=n(27250),m=n(57541);let p="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[h,E,g]=(0,i.B)(b),[C,w]=(0,a.b)(b,[g]),[M,y]=C(b),R=(0,o.forwardRef)((e,t)=>(0,o.createElement)(h.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(h.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(N,(0,r.Z)({},e,{ref:t}))))),N=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:i,loop:a=!1,dir:c,currentTabStopId:b,defaultCurrentTabStopId:h,onCurrentTabStopIdChange:g,onEntryFocus:C,...w}=e,y=(0,o.useRef)(null),R=(0,l.e)(t,y),N=(0,m.gm)(c),[T=null,I]=(0,d.T)({prop:b,defaultProp:h,onChange:g}),[A,_]=(0,o.useState)(!1),F=(0,f.W)(C),P=E(n),x=(0,o.useRef)(!1),[O,D]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=y.current;if(e)return e.addEventListener(p,F),()=>e.removeEventListener(p,F)},[F]),(0,o.createElement)(M,{scope:n,orientation:i,dir:N,loop:a,currentTabStopId:T,onItemFocus:(0,o.useCallback)(e=>I(e),[I]),onItemShiftTab:(0,o.useCallback)(()=>_(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>D(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>D(e=>e-1),[])},(0,o.createElement)(s.WV.div,(0,r.Z)({tabIndex:A||0===O?-1:0,"data-orientation":i},w,{ref:R,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{x.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let t=!x.current;if(e.target===e.currentTarget&&t&&!A){let t=new CustomEvent(p,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=P().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===T),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);S(o)}}x.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>_(!1))})))}),T=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:i=!0,active:l=!1,tabStopId:a,...f}=e,d=(0,c.M)(),m=a||d,p=y("RovingFocusGroupItem",n),v=p.currentTabStopId===m,b=E(n),{onFocusableItemAdd:g,onFocusableItemRemove:C}=p;return(0,o.useEffect)(()=>{if(i)return g(),()=>C()},[i,g,C]),(0,o.createElement)(h.ItemSlot,{scope:n,id:m,focusable:i,active:l},(0,o.createElement)(s.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":p.orientation},f,{ref:t,onMouseDown:(0,u.M)(e.onMouseDown,e=>{i?p.onItemFocus(m):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>p.onItemFocus(m)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return I[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable),u=o.map(e=>e.ref.current);if("last"===t)u.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&u.reverse();let o=u.indexOf(e.currentTarget);u=p.loop?(n=u,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):u.slice(o+1)}setTimeout(()=>S(u))}})})))}),I={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function S(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let A=R,_=T},74047:function(e,t,n){"use strict";n.d(t,{A4:function(){return a},g7:function(){return i}});var r=n(65122),o=n(3546),u=n(79869);let i=(0,o.forwardRef)((e,t)=>{let{children:n,...u}=e,i=o.Children.toArray(n),a=i.find(c);if(a){let e=a.props.children,n=i.map(t=>t!==a?t:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(l,(0,r.Z)({},u,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,n):null)}return(0,o.createElement)(l,(0,r.Z)({},u,{ref:t}),n)});i.displayName="Slot";let l=(0,o.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,o.isValidElement)(n)?(0,o.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],u=t[r],i=/^on[A-Z]/.test(r);i?o&&u?n[r]=(...e)=>{u(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...u}:"className"===r&&(n[r]=[o,u].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,u.F)(t,n.ref):n.ref}):o.Children.count(n)>1?o.Children.only(null):null});l.displayName="SlotClone";let a=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function c(e){return(0,o.isValidElement)(e)&&e.type===a}},6044:function(e,t,n){"use strict";n.d(t,{VY:function(){return S},aV:function(){return T},fC:function(){return N},xz:function(){return I}});var r=n(65122),o=n(3546),u=n(65727),i=n(47091),l=n(1333),a=n(96497),c=n(72205),s=n(57541),f=n(27250),d=n(29434);let m="Tabs",[p,v]=(0,i.b)(m,[l.Pc]),b=(0,l.Pc)(),[h,E]=p(m),g=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:u,onValueChange:i,defaultValue:l,orientation:a="horizontal",dir:m,activationMode:p="automatic",...v}=e,b=(0,s.gm)(m),[E,g]=(0,f.T)({prop:u,onChange:i,defaultProp:l});return(0,o.createElement)(h,{scope:n,baseId:(0,d.M)(),value:E,onValueChange:g,orientation:a,dir:b,activationMode:p},(0,o.createElement)(c.WV.div,(0,r.Z)({dir:b,"data-orientation":a},v,{ref:t})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:u=!0,...i}=e,a=E("TabsList",n),s=b(n);return(0,o.createElement)(l.fC,(0,r.Z)({asChild:!0},s,{orientation:a.orientation,dir:a.dir,loop:u}),(0,o.createElement)(c.WV.div,(0,r.Z)({role:"tablist","aria-orientation":a.orientation},i,{ref:t})))}),w=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:i,disabled:a=!1,...s}=e,f=E("TabsTrigger",n),d=b(n),m=y(f.baseId,i),p=R(f.baseId,i),v=i===f.value;return(0,o.createElement)(l.ck,(0,r.Z)({asChild:!0},d,{focusable:!a,active:v}),(0,o.createElement)(c.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":v,"aria-controls":p,"data-state":v?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:m},s,{ref:t,onMouseDown:(0,u.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():f.onValueChange(i)}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&f.onValueChange(i)}),onFocus:(0,u.M)(e.onFocus,()=>{let e="manual"!==f.activationMode;v||a||!e||f.onValueChange(i)})})))}),M=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:u,forceMount:i,children:l,...s}=e,f=E("TabsContent",n),d=y(f.baseId,u),m=R(f.baseId,u),p=u===f.value,v=(0,o.useRef)(p);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(a.z,{present:i||p},({present:n})=>(0,o.createElement)(c.WV.div,(0,r.Z)({"data-state":p?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:m,tabIndex:0},s,{ref:t,style:{...e.style,animationDuration:v.current?"0s":void 0}}),n&&l))});function y(e,t){return`${e}-trigger-${t}`}function R(e,t){return`${e}-content-${t}`}let N=g,T=C,I=w,S=M},17957:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(3546);function o(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},27250:function(e,t,n){"use strict";n.d(t,{T:function(){return u}});var r=n(3546),o=n(17957);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[u]=n,i=(0,r.useRef)(u),l=(0,o.W)(t);return(0,r.useEffect)(()=>{i.current!==u&&(l(u),i.current=u)},[u,i,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,a=l?e:u,c=(0,o.W)(n),s=(0,r.useCallback)(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else i(t)},[l,e,i,c]);return[a,s]}},65292:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(3546);let o=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);