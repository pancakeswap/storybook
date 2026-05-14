import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,g as r,jt as i,kt as a,sn as o,y as s}from"./iframe-BH0EN6Jm.js";var c,l=e((()=>{c={SM:`sm`,MD:`md`,LG:`lg`}})),u,d,f,p=e((()=>{i(),l(),u=({isSuccess:e=!1,isWarning:t=!1,isError:n=!1,theme:r})=>t?r.shadows.warning:e?r.shadows.success:n?r.shadows.danger:r.shadows.inset,d=({scale:e=c.MD})=>{switch(e){case c.SM:return`32px`;case c.LG:return`48px`;case c.MD:default:return`40px`}},f=n(`input`).withConfig({shouldForwardProp:e=>![`scale`,`isSuccess`,`isWarning`,`isError`].includes(e)})`
  background-color: ${({theme:e})=>e.colors.input};
  border-radius: 16px;
  box-shadow: ${u};
  color: ${({theme:e})=>e.colors.text};
  display: block;
  font-size: 16px;
  height: ${d};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid ${({theme:e})=>e.colors.inputSecondary};

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSubtle};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({theme:e})=>e.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${({theme:e,isWarning:t,isSuccess:n,isError:r})=>t?e.shadows.warning:n?e.shadows.success:r?e.shadows.danger:e.shadows.focus};
  }
`,f.defaultProps={scale:c.MD,isSuccess:!1,isWarning:!1,isError:!1}})),m,h,g,_,v,y,b=e((()=>{m=t(o(),1),i(),s(),p(),l(),h=a(),g=(e,t)=>{if(!t)return`16px`;switch(e){case c.SM:return`32px`;case c.LG:return`56px`;case c.MD:default:return`48px`}},_=n(r)`
  ${f} {
    padding-left: ${({hasStartIcon:e,scale:t})=>g(t,e)};
    padding-right: ${({hasEndIcon:e,scale:t})=>g(t,e)};
  }
`,v=n.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;

  ${({$isEndIcon:e,scale:t})=>e?`
    right: ${t===c.SM?`8px`:`16px`};
  `:`
    left: ${t===c.SM?`8px`:`16px`};
  `}
`,y=({scale:e=c.MD,startIcon:t,endIcon:n,children:r,...i})=>(0,h.jsxs)(_,{scale:e,width:`100%`,position:`relative`,hasStartIcon:!!t,hasEndIcon:!!n,...i,children:[t&&(0,h.jsx)(v,{scale:e,children:t}),(0,m.cloneElement)(r,{scale:e}),n&&(0,h.jsx)(v,{scale:e,$isEndIcon:!0,children:n})]}),y.__docgenInfo={description:``,methods:[],displayName:`InputGroup`,props:{scale:{required:!1,tsType:{name:`unknown[union]`,raw:`(typeof scales)[keyof typeof scales]`},description:``,defaultValue:{value:`"md"`,computed:!1}},startIcon:{required:!1,tsType:{name:`ReactElement`},description:``},endIcon:{required:!1,tsType:{name:`ReactElement`},description:``},children:{required:!0,tsType:{name:`JSX.Element`},description:``}},composes:[`SpaceProps`]}})),x=e((()=>{p(),b()}));export{f as n,x as t};