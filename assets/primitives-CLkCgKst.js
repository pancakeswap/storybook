import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,jt as r,kt as i,sn as a}from"./iframe-BH0EN6Jm.js";import{a as o,t as s}from"./Card-CMdTkrqP.js";var c,l,u,d,f,p,m,h=e((()=>{c=t(a(),1),r(),s(),l=i(),u=n(o)`
  border-radius: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;

  & > div {
    border-radius: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 0;
    background: ${({theme:e})=>e.colors.backgroundAlt};
  }
`,d=n.div`
  display: flex;
  gap: ${({$fullWidth:e})=>e?`0`:`16px`};
  padding: ${({$fullWidth:e})=>e?`0`:`0 12px`};
  border-bottom: ${({$fullWidth:e})=>e?`0`:`1px solid`};
  border-bottom-color: ${({theme:e})=>e.colors.cardBorder};
`,f=n.button`
  background: transparent;
  border: 0;
  flex: ${({$fullWidth:e})=>e?`1`:`0 0 auto`};
  padding: ${({$fullWidth:e})=>e?`12px 0`:`8px 0 10px`};
  text-align: ${({$fullWidth:e})=>e?`center`:`left`};
  font-size: 14px;
  font-weight: ${({$active:e})=>e?600:400};
  color: ${({$active:e,theme:t})=>e?t.colors.secondary:t.colors.textSubtle};
  border-bottom: 2px solid
    ${({$active:e,$fullWidth:t,theme:n})=>e?n.colors.primary:t?n.colors.cardBorder:`transparent`};
  margin-bottom: ${({$fullWidth:e})=>e?`0`:`-1px`};
  cursor: pointer;
  transition: color 0.12s, border-color 0.12s;

  &:hover:not(:disabled) {
    color: ${({theme:e})=>e.colors.text};
  }
`,p=({children:e,isActive:t=!1,onClick:n,fullWidth:r=!1})=>(0,l.jsx)(f,{$active:t,$fullWidth:r,onClick:n,type:`button`,children:e}),m=({activeIndex:e,onItemClick:t,children:n,fullWidth:r=!1})=>(0,l.jsx)(d,{$fullWidth:r,children:c.Children.map(n,(n,i)=>!n||typeof n!=`object`?n:(0,c.cloneElement)(n,{isActive:i===e,onClick:()=>t(i),fullWidth:r}))}),p.__docgenInfo={description:``,methods:[],displayName:`UnderlineTab`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},isActive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},m.__docgenInfo={description:`Compose with \`<UnderlineTab>\` children — same API shape as PCS uikit's
ButtonMenu/TabMenu, so swapping is a one-line change if we ever want to
unify later.`,methods:[],displayName:`UnderlineTabs`,props:{activeIndex:{required:!0,tsType:{name:`number`},description:``},onItemClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:`When true, each tab takes equal share (\`flex: 1\`) and centers its text —
matches the segmented bar look used for Order Book / Trades. The
underline border sits under each tab individually. Leave false for
tight groups like the Positions panel's tab row.`,defaultValue:{value:`false`,computed:!1}}}}}));export{h as i,p as n,m as r,u as t};