import{createSignal as t,createEffect as e}from"solid-js";let s=null;const c=()=>s??=document.querySelectorAll("style[data-stitches]"),r=(t,e)=>t.cssText.includes(e);function n(t){c().forEach((e=>{Array.from(e.sheet?.cssRules||[]).filter((e=>!r(e,t))).forEach((t=>{e.sheet?.insertRule(t.cssText)}))}))}function o(s,c){return function(r){const[o,l]=t(s({})());return e((()=>{const t=s({...c(r)});n(t.className),l(t())})),o}}export{o as createStyledHook,n as removeStyles};
//# sourceMappingURL=solid.ts.js.map