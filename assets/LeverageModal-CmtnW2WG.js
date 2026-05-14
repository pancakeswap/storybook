import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,a as r,i,it as a,jt as o,kt as s,m as c,n as l,nt as u,r as d,rt as f,s as p,sn as m,t as h}from"./iframe-BH0EN6Jm.js";import{n as g,t as _}from"./BunnySlider-Dwcr_zsn.js";import{t as v}from"./Text-BRDHz0kF.js";var y,b,x,S,C,w,T,E=e((()=>{y=t(m(),1),o(),u(),r(),g(),v(),l(),i(),b=s(),x=n(f)`
  gap: 10px;
  align-items: stretch;
`,S=n(p).attrs({variant:`tertiary`,scale:`md`})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`,C=n(f)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`,w=(e,t)=>t?Object.entries(t).reduce((e,[t,n])=>e.split(`%${t}%`).join(String(n)),e):e,T=({isOpen:e,symbol:t,currentLeverage:n,minLeverage:r=1,maxLeverage:i=100,availableBalance:o,onConfirm:s,onClose:l,isSubmitting:u=!1,errorSlot:m,t:g=w})=>{let[v,T]=(0,y.useState)(n);(0,y.useEffect)(()=>{e&&T(n)},[e,n]);let E=e=>Math.max(r,Math.min(i,Math.round(e))),D=o*v;return(0,b.jsx)(d,{isOpen:e,onDismiss:l,closeOnOverlayClick:!0,children:(0,b.jsx)(h,{title:g(`%symbol% Adjust Leverage`,{symbol:t}),onDismiss:l,children:(0,b.jsxs)(f,{flexDirection:`column`,style:{gap:16,minWidth:340,maxWidth:440},children:[(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{onClick:()=>T(e=>E(e-1)),disabled:v<=r,"aria-label":`minus`,children:`−`}),(0,b.jsxs)(C,{children:[v,`X`]}),(0,b.jsx)(S,{onClick:()=>T(e=>E(e+1)),disabled:v>=i,"aria-label":`plus`,children:`+`})]}),(0,b.jsx)(_,{name:`perp-leverage`,min:r,max:i,value:v,onValueChanged:e=>T(E(e)),width:`100%`}),(0,b.jsxs)(a,{children:[(0,b.jsx)(c,{fontSize:`14px`,color:`textSubtle`,children:g(`Maximum position at current leverage:`)}),(0,b.jsx)(c,{fontSize:`18px`,bold:!0,style:{fontVariantNumeric:`tabular-nums`},children:Number.isFinite(D)&&D>0?`${D.toLocaleString(void 0,{maximumFractionDigits:0})} USDT`:`—`})]}),(0,b.jsx)(c,{fontSize:`12px`,color:`textSubtle`,children:g(`Please note that setting higher leverage increases the risk of liquidation.`)}),m,(0,b.jsx)(p,{scale:`md`,disabled:u,onClick:()=>s(v),children:g(u?`Confirming…`:`Confirm`)})]})})})},T.__docgenInfo={description:``,methods:[],displayName:`LeverageModal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:`Controlled open state.`},symbol:{required:!0,tsType:{name:`string`},description:``},currentLeverage:{required:!0,tsType:{name:`number`},description:`Initial leverage shown when the modal opens.`},minLeverage:{required:!1,tsType:{name:`number`},description:`Inclusive bounds — defaults [1, 100].`,defaultValue:{value:`1`,computed:!1}},maxLeverage:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},availableBalance:{required:!0,tsType:{name:`number`},description:`USDT (or quote) balance available for new positions. Used to display
the "Maximum position at current leverage" preview line.`},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(leverage: number) => void`,signature:{arguments:[{type:{name:`number`},name:`leverage`}],return:{name:`void`}}},description:`Called when the user clicks Confirm with their chosen leverage. The
consumer is responsible for the async write back to the venue, error
handling, and closing the modal (via \`isOpen=false\`) on success.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isSubmitting:{required:!1,tsType:{name:`boolean`},description:`Disables the confirm button (e.g. while the consumer's mutation is in-flight).`,defaultValue:{value:`false`,computed:!1}},errorSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional content slot rendered above the Confirm button. Use for
caller-classified error messages, info hints, or warnings.`},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string, options?: Record<string, string | number | undefined>) => string`,signature:{arguments:[{type:{name:`string`},name:`key`},{type:{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | undefined`,elements:[{name:`string`},{name:`number`},{name:`undefined`}]}],raw:`Record<string, string | number | undefined>`},name:`options`}],return:{name:`string`}}},description:"Translator signature matches PancakeSwap's `@pancakeswap/localization`\n`TranslateFunction` (data values are `string | number | undefined`) so\npancake-frontend can pass its `t` directly without a cast. Storybook\nstories that don't need i18n can omit this prop — `defaultT` handles\n`%placeholder%` substitution locally.",defaultValue:{value:`(
  key: string,
  options?: Record<string, string | number | undefined>,
): string => {
  if (!options) return key
  return Object.entries(options).reduce(
    (acc, [k, v]) => acc.split(\`%\${k}%\`).join(String(v)),
    key,
  )
}`,computed:!1}}}}}));export{E as n,T as t};