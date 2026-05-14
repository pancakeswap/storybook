import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,a as r,i,it as a,jt as o,kt as s,m as c,n as l,nt as u,r as d,rt as f,s as p,sn as m,t as h}from"./iframe-BH0EN6Jm.js";import{t as g}from"./Text-BRDHz0kF.js";import{n as _,t as v}from"./Checkbox-Cv2F55Eb.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{y=t(m(),1),o(),u(),r(),v(),g(),l(),i(),b=s(),x=n(f)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`,S=n(c).attrs({fontSize:`12px`,color:`textSubtle`})``,C=n(c).attrs({fontSize:`13px`,bold:!0})`
  font-variant-numeric: tabular-nums;
`,w=n(f)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`,T=n.span`
  color: ${({$side:e,theme:t})=>e===`BUY`?t.colors.success:t.colors.failure};
  font-weight: 800;
`,E=n(C)`
  color: ${({theme:e})=>e.colors.failure};
`,D=n(p)`
  width: 100%;
  background: ${({$side:e,theme:t})=>e===`BUY`?t.colors.success:t.colors.failure};
  color: ${({theme:e})=>e.colors.invertedContrast};
`,O=(e,t)=>t?Object.entries(t).reduce((e,[t,n])=>e.split(`%${t}%`).join(String(n)),e):e,k=e=>e?Number(e).toLocaleString(void 0,{maximumFractionDigits:4}):`—`,A=(e,t)=>{switch(e){case`MARKET`:return t(`Market`);case`LIMIT`:return t(`Limit`);case`STOP`:return t(`Stop Limit`);case`STOP_MARKET`:return t(`Stop Market`);case`TAKE_PROFIT`:return t(`Take Profit`);case`TAKE_PROFIT_MARKET`:return t(`Take Profit Market`);default:return e}},j=({isOpen:e,details:t,onConfirm:n,onClose:r,onSkipFutureChange:i,t:o=O})=>{let[s,l]=(0,y.useState)(!1);return(0,b.jsx)(d,{isOpen:e,onDismiss:r,closeOnOverlayClick:!0,children:(0,b.jsx)(h,{title:o(`Confirm Order`),onDismiss:r,children:(0,b.jsxs)(f,{flexDirection:`column`,style:{gap:4,minWidth:320,maxWidth:420},children:[(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:o(`Symbol`)}),(0,b.jsx)(C,{children:t.symbol})]}),(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:o(`Side / Type`)}),(0,b.jsxs)(C,{children:[(0,b.jsx)(T,{$side:t.side,children:t.side===`BUY`?o(`Buy / Long`):o(`Sell / Short`)}),` · `,A(t.type,o)]})]}),(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:o(`Size`)}),(0,b.jsxs)(C,{children:[t.quantity,` `,t.baseAsset]})]}),t.price&&(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:o(`Price`)}),(0,b.jsxs)(C,{children:[k(t.price),` `,t.quoteAsset]})]}),t.stopPrice&&(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:o(`Trigger Price`)}),(0,b.jsxs)(C,{children:[k(t.stopPrice),` `,t.quoteAsset]})]}),(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:o(`Leverage`)}),(0,b.jsxs)(C,{children:[t.leverage,`x`]})]}),(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:o(`Cost`)}),(0,b.jsx)(C,{children:t.costUsdt?`${t.costUsdt.toFixed(2)} ${t.quoteAsset}`:`—`})]}),(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:o(`Est. Liq. Price`)}),(0,b.jsx)(E,{children:t.liqPrice?`${t.liqPrice.toFixed(2)} ${t.quoteAsset}`:`—`})]}),t.reduceOnly&&(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:o(`Reduce Only`)}),(0,b.jsx)(C,{children:o(`Yes`)})]}),(0,b.jsxs)(w,{children:[(0,b.jsx)(_,{scale:`sm`,checked:s,onChange:e=>l(e.target.checked)}),(0,b.jsx)(c,{fontSize:`12px`,children:o(`Don't show this again`)})]}),(0,b.jsx)(a,{mt:`8px`,children:(0,b.jsx)(D,{$side:t.side,onClick:()=>{s&&i?.(!0),n(),r()},scale:`md`,children:t.side===`BUY`?o(`Confirm Buy / Long`):o(`Confirm Sell / Short`)})})]})})})},j.__docgenInfo={description:`Order-preview confirmation shown before placing the order. The
"Don't show this again" checkbox is purely a UI hint — the consumer
persists the preference (typically a localStorage atom) via the
\`onSkipFutureChange\` callback and decides whether to skip this modal
on subsequent submits.`,methods:[],displayName:`OrderConfirmModal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:`Controlled open state.`},details:{required:!0,tsType:{name:`OrderConfirmDetails`},description:`Order summary to render. Caller only sets isOpen=true when ready.`},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the user clicks Confirm Buy/Sell.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSkipFutureChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(skip: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`skip`}],return:{name:`void`}}},description:`Called when the user toggles "Don't show this again" before
confirming. Consumer persists the preference (e.g. localStorage)
and skips this modal on subsequent submits.`},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string, options?: Record<string, string | number | undefined>) => string`,signature:{arguments:[{type:{name:`string`},name:`key`},{type:{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | undefined`,elements:[{name:`string`},{name:`number`},{name:`undefined`}]}],raw:`Record<string, string | number | undefined>`},name:`options`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(
  key: string,
  options?: Record<string, string | number | undefined>,
): string => {
  if (!options) return key
  return Object.entries(options).reduce(
    (acc, [k, v]) => acc.split(\`%\${k}%\`).join(String(v)),
    key,
  )
}`,computed:!1}}}}})),N,P,F,I,L,R,z;e((()=>{M(),{fn:N}=__STORYBOOK_MODULE_TEST__,P={symbol:`BTCUSDT`,side:`BUY`,type:`LIMIT`,quantity:`0.005`,baseAsset:`BTC`,quoteAsset:`USDT`,price:`78250.5`,leverage:25,costUsdt:15.65,liqPrice:75100},F={title:`Widgets/Order Confirm Modal 🆕`,component:j,tags:[`autodocs`],parameters:{layout:`centered`},args:{isOpen:!0,onConfirm:N(),onClose:N(),onSkipFutureChange:N()}},I={args:{details:P}},L={args:{details:{...P,side:`SELL`,type:`MARKET`,price:void 0,leverage:10,liqPrice:81200}}},R={args:{details:{...P,type:`STOP_MARKET`,side:`SELL`,price:void 0,stopPrice:`76000`,reduceOnly:!0}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    details: baseDetails
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    details: {
      ...baseDetails,
      side: 'SELL',
      type: 'MARKET',
      price: undefined,
      leverage: 10,
      liqPrice: 81200
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    details: {
      ...baseDetails,
      type: 'STOP_MARKET',
      side: 'SELL',
      price: undefined,
      stopPrice: '76000',
      reduceOnly: true
    }
  }
}`,...R.parameters?.docs?.source}}},z=[`BuyLimit`,`SellMarket`,`StopMarket`]}))();export{I as BuyLimit,L as SellMarket,R as StopMarket,z as __namedExportsOrder,F as default};