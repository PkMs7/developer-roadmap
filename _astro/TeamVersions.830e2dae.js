import{j as e}from"./jsx-runtime.6940b965.js";import{r}from"./index.070054a4.js";import{a as C}from"./http.3e3d4bea.js";import{c as V,r as w,a as $,b as E}from"./resource-progress.3efc99f3.js";import{g as I,d as R,s as A}from"./browser.6245b9a5.js";import{u as L}from"./use-outside-click.5adb83b9.js";import{u as O}from"./use-keydown.bb1f91bb.js";import{i as U}from"./jwt.5556697d.js";import{u as _}from"./use-auth.93b31ecd.js";import{u as D}from"./use-toast.dbd347db.js";import{c as z}from"./classname.0c0e8aac.js";import"./roadmap.2126cc25.js";import"./index.1c368e68.js";import"./index.4b590221.js";import"./toast.5b8c89b6.js";import"./bundle-mjs.58d1fad7.js";function F(i){const{className:n}=i;return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:z("h-5 w-5",n),children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function ae(i){const{t:n}=I();if(!U())return;const{resourceId:m,resourceType:l}=i,c=_(),j=D(),f=r.useRef(null),[v,b]=r.useState(!0),[p,a]=r.useState(!1),[y,N]=r.useState(0),[h,T]=r.useState([]),[s,d]=r.useState(null);let u;const x=s?s.team.avatar:c?.avatar,g=s?s.team.name:c?.name;s?.team.avatar?u=!0:u=!!(!s&&c?.avatar),L(f,()=>{a(!1)}),O("Escape",()=>{a(!1)});async function P(){const{response:t,error:o}=await C(`https://api.roadmap.sh/v1-get-team-versions?${new URLSearchParams({resourceId:m,resourceType:l})}`);if(o||!t){j.error(o?.message||"Failed to load team versions.");return}if(T(t),n){const k=t.find(S=>S.team._id===n)||null;d(k)}setTimeout(()=>{b(!1),setTimeout(()=>{N(100)},50)},0)}return r.useEffect(()=>{P().finally(()=>{})},[]),r.useEffect(()=>{if(V(),!s){R("t"),w(l,m).then();return}A({t:s.team._id}),w(l,m).then(()=>{s.config?.removed?.forEach(t=>{$(t,"removed")}),E()})},[s]),v||!h.length?null:e.jsxs("div",{className:`relative h-7 transition-opacity duration-500 sm:h-auto opacity-${y}`,children:[e.jsxs("button",{className:"inline-flex h-7 items-center justify-between gap-1 rounded-md border px-1.5 py-1.5 text-xs font-medium hover:bg-gray-50 focus:outline-0 sm:h-8 sm:w-40 sm:px-3 sm:text-sm",onClick:()=>a(!p),children:[e.jsxs("div",{className:"hidden w-full items-center justify-between sm:flex",children:[e.jsx("span",{className:"truncate",children:s?.team.name||"Team Versions"}),e.jsx(F,{className:"h-3 w-3 sm:h-4 sm:w-4"})]}),e.jsx("div",{className:"sm:hidden",children:u?e.jsx("img",{src:x?`https://dodrc8eu8m09s.cloudfront.net/avatars/${x}`:"/images/default-avatar.png",alt:`${g} Avatar`,className:"h-5 w-5 rounded-full object-cover"}):e.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs",children:g?.charAt(0).toUpperCase()})})]}),p&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40 block bg-black/20 sm:hidden","aria-hidden":"true"}),e.jsxs("div",{ref:f,className:"fixed bottom-0 left-0 z-50 mt-1 h-fit w-full overflow-hidden rounded-md bg-white py-0.5 shadow-md sm:absolute sm:left-0 sm:right-0 sm:top-full sm:border",children:[e.jsx("button",{className:`flex h-8 w-full items-center justify-between px-3 py-1.5 text-xs font-medium hover:bg-gray-100 sm:text-sm ${s?"bg-white":"bg-gray-100"}`,onClick:()=>{d(null),a(!1)},children:e.jsx("div",{className:"flex w-full items-center justify-between",children:e.jsx("span",{className:"truncate",children:"Personal"})})}),h.map(t=>{const o=s?.team._id===t.team._id;return e.jsx("button",{className:`flex h-8 w-full items-center justify-between px-3 py-1.5 text-xs font-medium hover:bg-gray-100 sm:text-sm ${o?"bg-gray-100":"bg-white"}`,onClick:()=>{d(t),a(!1)},children:e.jsx("div",{className:"flex w-full items-center justify-between",children:e.jsx("span",{className:"truncate",children:t.team.name})})},t?.team?._id)})]})]})]})}export{ae as TeamVersions};
