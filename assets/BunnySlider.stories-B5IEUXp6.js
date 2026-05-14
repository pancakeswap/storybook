import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,t as a}from"./BunnySlider-Dwcr_zsn.js";function o({initial:e,min:t=0,max:n=100,disabled:r=!1,showLabel:i=!1}){let[o,l]=(0,s.useState)(e);return(0,c.jsx)(`div`,{style:{width:320,padding:`40px 0`},children:(0,c.jsx)(a,{min:t,max:n,value:o,onValueChanged:l,disabled:r,valueLabel:i?`${Math.round(o)}`:void 0})})}var s,c,l,u,d,f,p,m,h,g;e((()=>{s=t(r(),1),i(),c=n(),l={title:`Widgets/Bunny Slider 🆕`,component:a,parameters:{layout:`centered`}},u={render:()=>(0,c.jsx)(o,{initial:0})},d={render:()=>(0,c.jsx)(o,{initial:50})},f={render:()=>(0,c.jsx)(o,{initial:100})},p={render:()=>(0,c.jsx)(o,{initial:40,disabled:!0})},m={render:()=>(0,c.jsx)(o,{initial:32,showLabel:!0})},h={render:()=>(0,c.jsx)(o,{initial:10,min:1,max:1001,showLabel:!0})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Demo initial={0} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Demo initial={50} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Demo initial={100} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Demo initial={40} disabled />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Demo initial={32} showLabel />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Demo initial={10} min={1} max={1001} showLabel />
}`,...h.parameters?.docs?.source}}},g=[`Zero`,`Half`,`Full`,`Disabled`,`WithLabel`,`LeverageRange`]}))();export{p as Disabled,f as Full,d as Half,h as LeverageRange,m as WithLabel,u as Zero,g as __namedExportsOrder,l as default};