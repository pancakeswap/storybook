import{n as e}from"./chunk-zsgVPwQN.js";import{Nt as t,jt as n,kt as r,sn as i}from"./iframe-BH0EN6Jm.js";import{i as a,t as o}from"./primitives-CLkCgKst.js";var s,c,l,u,d=e((()=>{i(),n(),a(),s=r(),c=t(o)`
  flex: 1;
  min-height: ${({$minHeight:e})=>e};
`,l=e=>typeof e==`number`?`${e}px`:e,u=({children:e,minHeight:t=`420px`})=>(0,s.jsx)(c,{$minHeight:l(t),children:e}),u.__docgenInfo={description:`Stylesheet shell for the perps chart. Owns the panel framing
(border, background, min-height) so visual updates flow through this
file; the actual chart implementation is provided by the consumer
via \`children\` (TradingView paid library in pancake-frontend, or
whatever else upstream wants).`,methods:[],displayName:`ChartPanel`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The actual chart widget. The consumer plugs in its
TradingView / lightweight-charts / etc. implementation here so
this widget stays free of any chart-library dependency.`},minHeight:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Minimum height for the chart area. Defaults to 420px (matches the
pancake-frontend perps page). Pass a string ("60vh") or number
(pixels). The panel grows to fill remaining space if the parent
uses flex.`,defaultValue:{value:`'420px'`,computed:!1}}}}})),f,p,m,h,g,_;e((()=>{d(),f=r(),p=({label:e=`Chart goes here`})=>(0,f.jsx)(`div`,{style:{flex:1,display:`grid`,placeItems:`center`,color:`var(--pcs-colors-text-subtle)`,fontFamily:`monospace`,fontSize:14},children:e}),m={title:`Widgets/Chart Panel 🆕`,component:u,parameters:{layout:`centered`},args:{children:(0,f.jsx)(p,{})},decorators:[e=>(0,f.jsx)(`div`,{style:{width:800,height:480,display:`flex`},children:(0,f.jsx)(e,{})})]},h={},g={args:{minHeight:`60vh`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    minHeight: '60vh'
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`TallerMin`]}))();export{h as Default,g as TallerMin,_ as __namedExportsOrder,m as default};