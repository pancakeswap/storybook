import{n as e}from"./chunk-zsgVPwQN.js";import{A as t,L as n,M as r,Nt as i,T as a,V as o,a as s,jt as c,kt as l,m as u,o as d,sn as f,tt as p,v as m,y as h}from"./iframe-BH0EN6Jm.js";import{t as g}from"./Text-BRDHz0kF.js";var _,v=e((()=>{_={INFO:`info`,DANGER:`danger`,SUCCESS:`success`,WARNING:`warning`}})),y,b,x,S,C,w,T,E,D,O=e((()=>{f(),c(),h(),s(),p(),g(),v(),y=l(),b=({theme:e,variant:t=_.INFO})=>{switch(t){case _.DANGER:return e.colors.failure;case _.WARNING:return e.colors.warning;case _.SUCCESS:return e.colors.success;case _.INFO:default:return e.colors.secondary}},x=(e=_.INFO)=>{switch(e){case _.DANGER:return a;case _.WARNING:return n;case _.SUCCESS:return t;case _.INFO:default:return o}},S=i.div`
  background-color: ${b};
  border-radius: 16px 0 0 16px;
  color: ${({theme:e})=>e.alert.background};
  padding: 12px;
`,C=52,w=i.div`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({$hasHandler:e})=>e?`${C}px`:`12px`};
  padding-top: 12px;
`,T=i.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`,E=i(m)`
  position: relative;
  background-color: ${({theme:e})=>e.alert.background};
  border-radius: 16px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
`,D=({title:e,children:t,variant:n,onClick:i})=>(0,y.jsxs)(E,{children:[(0,y.jsx)(S,{variant:n,children:(0,y.jsx)(x(n),{color:`currentColor`,width:`24px`})}),(0,y.jsxs)(w,{$hasHandler:!!i,children:[typeof e==`string`?(0,y.jsx)(u,{bold:!0,children:e}):e,typeof t==`string`?(0,y.jsx)(u,{style:{wordBreak:`break-word`},as:`p`,children:t}):t]}),i&&(0,y.jsx)(T,{children:(0,y.jsx)(d,{scale:`sm`,variant:`text`,onClick:i,"aria-label":`Close`,children:(0,y.jsx)(r,{width:`24px`,color:`currentColor`})})})]}),D.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`unknown[union]`,raw:`(typeof variants)[keyof typeof variants]`},description:``},title:{required:!0,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(evt: MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEvent<HTMLButtonElement>`},name:`evt`}],return:{name:`void`}}},description:``}}}})),k=e((()=>{O(),v()}));export{D as n,_ as r,k as t};