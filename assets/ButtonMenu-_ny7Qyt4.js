import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,c as r,d as i,jt as a,kt as o,l as s,lt as c,s as l,sn as u,st as d,u as f}from"./iframe-BH0EN6Jm.js";var p,m,h,g,_,v,y=e((()=>{p=t(u(),1),a(),d(),s(),m=o(),h=({theme:e,variant:t})=>e.colors[t===i.SUBTLE?`input`:`tertiary`],g=({theme:e,variant:t})=>e.colors[t===i.SUBTLE?`inputSecondary`:`disabled`],_=n.div.withConfig({shouldForwardProp:e=>![`fullWidth`,`noButtonMargin`].includes(e)})`
  ${e=>e.variant===i.TEXT?``:`
    background-color: ${h(e)};
    border: 1px solid ${g(e)};
    `}
  border-radius: 16px;
  display: ${({fullWidth:e})=>e?`flex`:`inline-flex`};
  width: ${({fullWidth:e})=>e?`100%`:`auto`};
  align-items: center;
  & > button,
  & > a {
    flex: ${({fullWidth:e})=>e?1:`auto`};
  }

  & > button + button,
  & > a + a {
    margin-left: ${({noButtonMargin:e})=>e?`0px`:`2px`};
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({disabled:e,theme:t,variant:n})=>e?`
        opacity: 0.5;

        & > button:disabled {
          color: ${n===i.PRIMARY?t.colors.primary:t.colors.textSubtle};
        }
    `:``}
  ${c}
`,v=({activeIndex:e=0,scale:t=f.MD,variant:n=i.PRIMARY,onItemClick:r,disabled:a,children:o,fullWidth:s=!1,...c})=>(0,m.jsx)(_,{disabled:a,variant:n,fullWidth:s,...c,children:p.Children.map(o,(i,o)=>(0,p.cloneElement)(i,{isActive:e===o,onClick:r?e=>r(o,e):void 0,scale:t,variant:n,disabled:a}))}),v.__docgenInfo={description:``,methods:[],displayName:`ButtonMenu`,props:{variant:{required:!1,tsType:{name:`union`,raw:`typeof variants.PRIMARY | typeof variants.SUBTLE | typeof variants.LIGHT | typeof variants.TEXT`,elements:[{name:`variants.PRIMARY`},{name:`variants.SUBTLE`},{name:`variants.LIGHT`},{name:`variants.TEXT`}]},description:``,defaultValue:{value:`"primary"`,computed:!1}},activeIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onItemClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number, event: React.MouseEvent<HTMLElement>) => void`,signature:{arguments:[{type:{name:`number`},name:`index`},{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLElement>`,elements:[{name:`HTMLElement`}]},name:`event`}],return:{name:`void`}}},description:``},scale:{required:!1,tsType:{name:`unknown[union]`,raw:`(typeof scales)[keyof typeof scales]`},description:``,defaultValue:{value:`"md"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},children:{required:!0,tsType:{name:`Array`,elements:[{name:`ReactElement`}],raw:`ReactElement[]`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},noButtonMargin:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`SpaceProps`]}})),b,x,S,C=e((()=>{a(),r(),s(),b=o(),x=n(l)`
  font-weight: 400;
  background-color: transparent;
  color: ${({theme:e,variant:t})=>t===i.PRIMARY?e.colors.primary:e.colors.textSubtle};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`,S=({isActive:e=!1,variant:t=i.PRIMARY,as:n,...r})=>e?(0,b.jsx)(l,{as:n,variant:t,...r}):(0,b.jsx)(x,{forwardedAs:n,variant:t,...r}),S.__docgenInfo={description:``,methods:[],displayName:`ButtonMenuItem`,props:{as:{required:!1,tsType:{name:`union`,raw:`"a" | "button" | ElementType`,elements:[{name:`literal`,value:`"a"`},{name:`literal`,value:`"button"`},{name:`ElementType`}]},description:``},external:{required:!1,tsType:{name:`boolean`},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``},scale:{required:!1,tsType:{name:`ResponsiveValue`,elements:[{name:`unknown[union]`,raw:`(typeof scales)[keyof typeof scales]`}],raw:`ResponsiveValue<Scale>`},description:``},variant:{required:!1,tsType:{name:`unknown[union]`,raw:`(typeof variants)[keyof typeof variants]`},description:``,defaultValue:{value:`"primary"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},startIcon:{required:!1,tsType:{name:`ReactNode`},description:``},endIcon:{required:!1,tsType:{name:`ReactNode`},description:``},decorator:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  backgroundColor?: string;
  color?: string;
  text: string;
  direction?: "left" | "right";
}`,signature:{properties:[{key:`backgroundColor`,value:{name:`string`,required:!1}},{key:`color`,value:{name:`string`,required:!1}},{key:`text`,value:{name:`string`,required:!0}},{key:`direction`,value:{name:`union`,raw:`"left" | "right"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}],required:!1}}]}},description:``},isActive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`LayoutProps`,`SpaceProps`,`BorderProps`]}})),w=e((()=>{y(),C()}));export{S as n,v as r,w as t};