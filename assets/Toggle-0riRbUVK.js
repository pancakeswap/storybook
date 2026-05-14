import{n as e}from"./chunk-zsgVPwQN.js";import{Nt as t,jt as n,kt as r,sn as i,v as a,y as o}from"./iframe-BH0EN6Jm.js";var s,c=e((()=>{s={SM:`sm`,MD:`md`,LG:`lg`}})),l,u,d,f,p,m=e((()=>{n(),c(),l={sm:{handleHeight:`16px`,handleWidth:`16px`,handleLeft:`2px`,handleTop:`2px`,checkedLeft:`calc(100% - 18px)`,toggleHeight:`20px`,toggleWidth:`36px`},md:{handleHeight:`26px`,handleWidth:`26px`,handleLeft:`3px`,handleTop:`3px`,checkedLeft:`calc(100% - 30px)`,toggleHeight:`32px`,toggleWidth:`56px`},lg:{handleHeight:`32px`,handleWidth:`32px`,handleLeft:`4px`,handleTop:`4px`,checkedLeft:`calc(100% - 36px)`,toggleHeight:`40px`,toggleWidth:`72px`}},u=e=>({scale:t=s.LG})=>l[t][e],d=t.div`
  background-color: ${({theme:e})=>e.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${u(`handleHeight`)};
  left: ${u(`handleLeft`)};
  position: absolute;
  top: ${u(`handleTop`)};
  transition: left 200ms ease-in;
  width: ${u(`handleWidth`)};
  z-index: 1;
`,f=t.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${d} {
    left: ${u(`checkedLeft`)};
  }

  &:focus + ${d} {
    box-shadow: ${({theme:e})=>e.shadows.focus};
  }

  &:hover + ${d}:not(:disabled):not(:checked) {
    box-shadow: ${({theme:e})=>e.shadows.focus};
  }
`,p=t.div`
  align-items: center;
  background-color: ${({theme:e,$checked:t,$checkedColor:n,$defaultColor:r,disabled:i})=>e.colors[t&&!i?n:r]};
  border-radius: 24px;
  box-shadow: ${({theme:e})=>e.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${u(`toggleHeight`)};
  position: relative;
  transition: background-color 200ms;
  width: ${u(`toggleWidth`)};
`})),h,g,_=e((()=>{i(),o(),m(),c(),h=r(),g=({checked:e,defaultColor:t=`input`,checkedColor:n=`success`,scale:r=s.LG,startIcon:i,endIcon:o,disabled:c,...l})=>(0,h.jsxs)(p,{disabled:c,$checked:!!e,$checkedColor:n,$defaultColor:t,scale:r,children:[(0,h.jsx)(f,{disabled:c,checked:e,scale:r,...l,type:`checkbox`}),i&&o?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{scale:r,children:(0,h.jsx)(a,{height:`100%`,alignItems:`center`,justifyContent:`center`,children:e?o(e):i(!e)})}),(0,h.jsxs)(a,{width:`100%`,height:`100%`,justifyContent:`space-around`,alignItems:`center`,children:[i(),o()]})]}):(0,h.jsx)(d,{scale:r})]}),g.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{scale:{required:!1,tsType:{name:`unknown[union]`,raw:`(typeof scales)[keyof typeof scales]`},description:``,defaultValue:{value:`"lg"`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:``},checkedColor:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:``,defaultValue:{value:`"success"`,computed:!1}},defaultColor:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:``,defaultValue:{value:`"input"`,computed:!1}},startIcon:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isActive?: boolean) => ReactNode`,signature:{arguments:[{type:{name:`boolean`},name:`isActive`}],return:{name:`ReactNode`}}},description:``},endIcon:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isActive?: boolean) => ReactNode`,signature:{arguments:[{type:{name:`boolean`},name:`isActive`}],return:{name:`ReactNode`}}},description:``}},composes:[`InputHTMLAttributes`]}})),v=e((()=>{_()}));export{g as n,v as t};