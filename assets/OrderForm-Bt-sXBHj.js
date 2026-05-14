import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Et as n,Nt as r,a as i,it as a,jt as o,kt as ee,m as s,nt as c,o as te,rt as l,s as u,sn as d,tt as f,x as ne}from"./iframe-BH0EN6Jm.js";import{t as p}from"./Text-BRDHz0kF.js";import{i as re,t as m}from"./primitives-CLkCgKst.js";import{n as h,t as g}from"./Checkbox-Cv2F55Eb.js";import{n as _,t as v}from"./Input-Dv7QZT9S.js";import{n as y,t as ie}from"./Slider-C1S5TFjq.js";var b,x,S,C,w,T,ae,E,D,oe,se,ce,le,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,ue,q,de=e((()=>{b=t(d(),1),x=t(n(),1),o(),c(),i(),g(),v(),y(),p(),f(),re(),S=ee(),C=r(m)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`,w=r(l)`
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.colors.cardBorder};
`,T=r.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({$active:e,theme:t})=>e?t.colors.primary:`transparent`};
  margin-bottom: -1px;
  padding: 12px 0;
  margin-right: 16px;
  font-size: 14px;
  font-weight: 600;
  color: ${({$active:e,theme:t})=>e?t.colors.secondary:t.colors.textSubtle};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.12s, border-color 0.12s;
  &:hover {
    color: ${({theme:e})=>e.colors.text};
  }
`,ae=r(l)`
  background: ${({theme:e})=>e.colors.input};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`,E=r.button`
  flex: 1;
  border: 0;
  background: ${({$active:e,$side:t,theme:n})=>e?t===`BUY`?n.colors.success:n.colors.failure:`transparent`};
  color: ${({$active:e,theme:t})=>e?t.colors.invertedContrast:t.colors.textSubtle};
  font-weight: ${({$active:e})=>e?600:400};
  font-size: 16px;
  padding: 6px 8px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
`,D=r.button`
  flex: 1;
  background: ${({theme:e})=>e.colors.input};
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.primary};
  font-size: 16px;
  font-weight: 600;
  padding: 4px 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.12s;
  &:hover {
    filter: brightness(1.08);
  }
`,oe=r(l)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`,se=r(s).attrs({fontSize:`14px`,color:`textSubtle`})``,ce=r(l)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`,le=r.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background: ${({theme:e})=>e.colors.input};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 16px;
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
  gap: 8px;
`,O=r(s).attrs({fontSize:`14px`,color:`textSubtle`})`
  pointer-events: none;
  flex-shrink: 0;
`,k=r.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({theme:e})=>e.colors.textSubtle};
  }
`,A=r(u).attrs({variant:`text`,scale:`xs`})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text};
  gap: 2px;
  height: auto;
`,j=r.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background: ${({theme:e})=>e.colors.input};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 16px;
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
  gap: 8px;
`,M=r.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({theme:e})=>e.colors.textSubtle};
  }
`,N=r.button`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  padding: 0;
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  &:hover {
    opacity: 0.8;
  }
`,P=r.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 160px;
  background: ${({theme:e})=>e.colors.input};
  border-top: 1px solid ${({theme:e})=>e.colors.inputSecondary};
  border-right: 1px solid ${({theme:e})=>e.colors.inputSecondary};
  border-bottom: 2px solid ${({theme:e})=>e.colors.inputSecondary};
  border-left: 1px solid ${({theme:e})=>e.colors.inputSecondary};
  border-radius: 12px;
  box-shadow:
    0 0 0 1px ${({theme:e})=>e.colors.secondary},
    0 0 0 4px rgba(118, 69, 217, 0.2);
  overflow: hidden;
`,F=r.button`
  background: ${({$active:e,theme:t})=>e?t.colors.tertiary:`transparent`};
  border: 0;
  padding: 10px 14px;
  text-align: left;
  font-family: Kanit, sans-serif;
  font-size: 14px;
  font-weight: ${({$active:e})=>e?600:400};
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  &:hover {
    background: ${({theme:e})=>e.colors.tertiary};
  }
`,I=r.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`,L=r(_)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`,R=r.div`
  padding: 4px 0;
`,z=r(l)`
  gap: 8px;
`,B=r.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({theme:e})=>e.colors.input};
`,V=r.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({$active:e,theme:t})=>e?t.colors.card:`transparent`};
  color: ${({$active:e,theme:t})=>e?t.colors.text:t.colors.textSubtle};
  font-weight: ${({$active:e})=>e?600:400};
`,H=({value:e,onChange:t})=>(0,S.jsxs)(B,{role:`tablist`,"aria-label":`Trigger source`,children:[(0,S.jsx)(V,{type:`button`,role:`tab`,"aria-selected":e===`LAST`,$active:e===`LAST`,onClick:()=>t(`LAST`),children:`Last`}),(0,S.jsx)(V,{type:`button`,role:`tab`,"aria-selected":e===`MARK`,$active:e===`MARK`,onClick:()=>t(`MARK`),children:`Mark`})]}),U=r(u)`
  background: ${({$side:e,theme:t})=>e===`BUY`?t.colors.success:t.colors.failure};
  color: ${({theme:e})=>e.colors.invertedContrast};
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  height: 48px;
  &:hover:not(:disabled) {
    filter: brightness(1.07);
  }
`,W=r.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.colors.cardBorder};
`,G=r(s).attrs({fontSize:`14px`,color:`textSubtle`})``,K=r(s).attrs({fontSize:`14px`})`
  font-variant-numeric: tabular-nums;
  text-align: right;
`,ue=(e,t)=>t?Object.entries(t).reduce((e,[t,n])=>e.split(`%${t}%`).join(String(n)),e):e,q=({baseAsset:e,quoteAsset:t,draft:n,onDraftChange:r,typeKey:i,onTypeKeyChange:o,availableBalanceText:ee,preview:c,feeText:u,sizePercent:d,onSizePercentChange:f,cta:p,canSubmit:re,isSubmitting:m=!1,marginSubmitting:g=!1,authReady:_=!0,hasAddress:v=!0,errorSlot:y,onSubmit:B,onLeverageClick:V,onMarginModeToggle:q,onDepositClick:de,t:J=ue})=>{let fe=n.sizeUnit===`QUOTE`?t:e,pe=e=>r({...n,side:e}),me=()=>r({...n,sizeUnit:n.sizeUnit===`BASE`?`QUOTE`:`BASE`,quantity:``}),he=()=>r({...n,tpSlEnabled:!n.tpSlEnabled}),Y=i===`stop-limit`||i===`stop-market`,ge=i===`limit`||i===`stop-limit`,_e=Y,X=(0,b.useRef)(null),Z=(0,b.useRef)(null),[Q,$]=(0,b.useState)(!1),[ve,ye]=(0,b.useState)({top:0,left:0});(0,b.useEffect)(()=>{if(!Q||!X.current||!Z.current)return;let e=X.current.getBoundingClientRect(),t=Z.current.getBoundingClientRect(),n=e.bottom+4,r=window.innerWidth-t.width-8;ye({top:n,left:Math.max(8,Math.min(e.left,r))})},[Q]),(0,b.useEffect)(()=>{if(!Q)return;let e=e=>{let t=e.target;X.current&&!X.current.contains(t)&&Z.current&&!Z.current.contains(t)&&$(!1)};return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[Q]);let be=Y,xe=i===`stop-market`?`${J(`Stop Market`)} ▾`:`${J(`Stop Limit`)} ▾`,Se=()=>{$(e=>!e)},Ce=e=>{o(e),$(!1)};return(0,S.jsxs)(C,{children:[(0,S.jsxs)(w,{children:[[`market`,`limit`].map(e=>(0,S.jsx)(T,{$active:i===e,onClick:()=>o(e),children:J(e===`market`?`Market`:`Limit`)},e)),(0,S.jsx)(T,{ref:X,$active:be,onClick:Se,"aria-haspopup":`menu`,"aria-expanded":Q,children:xe}),Q&&typeof document<`u`&&(0,x.createPortal)((0,S.jsxs)(P,{ref:Z,style:{top:ve.top,left:ve.left},role:`menu`,children:[(0,S.jsx)(F,{$active:i===`stop-limit`,role:`menuitem`,onClick:()=>Ce(`stop-limit`),children:J(`Stop Limit`)}),(0,S.jsx)(F,{$active:i===`stop-market`,role:`menuitem`,onClick:()=>Ce(`stop-market`),children:J(`Stop Market`)})]}),document.body)]}),(0,S.jsxs)(ae,{children:[(0,S.jsx)(E,{$active:n.side===`BUY`,$side:`BUY`,onClick:()=>pe(`BUY`),children:J(`Buy`)}),(0,S.jsx)(E,{$active:n.side===`SELL`,$side:`SELL`,onClick:()=>pe(`SELL`),children:J(`Sell`)})]}),(0,S.jsxs)(l,{style:{gap:8},children:[(0,S.jsx)(D,{disabled:g,onClick:q,title:J(`Margin mode`),children:n.marginMode===`CROSS`?J(`Cross`):J(`Isolated`)}),(0,S.jsxs)(D,{onClick:V,title:J(`Leverage`),children:[n.leverage,`x`]})]}),(0,S.jsxs)(oe,{children:[(0,S.jsx)(se,{children:J(`Avbl`)}),(0,S.jsxs)(ce,{children:[(0,S.jsxs)(s,{fontSize:`14px`,style:{fontVariantNumeric:`tabular-nums`},children:[ee,` `,t]}),(0,S.jsx)(te,{variant:`text`,scale:`xs`,onClick:de,title:J(`Deposit`),"aria-label":J(`Deposit`),style:{width:18,height:18,minWidth:18,borderRadius:999},children:(0,S.jsx)(ne,{color:`primary`,width:`10px`})})]})]}),_e&&(0,S.jsxs)(j,{children:[(0,S.jsx)(O,{children:J(`Stop`)}),(0,S.jsx)(M,{value:n.stopPrice,onChange:e=>r({...n,stopPrice:e.target.value}),placeholder:`0`,inputMode:`decimal`,"aria-label":J(`Stop price`)}),(0,S.jsxs)(N,{type:`button`,onClick:()=>r({...n,stopPriceSource:n.stopPriceSource===`MARK`?`LAST`:`MARK`}),title:J(`Trigger source`),children:[n.stopPriceSource===`MARK`?J(`Mark`):J(`Last`),` ▾`]})]}),ge&&(0,S.jsxs)(j,{children:[(0,S.jsx)(O,{children:J(`Price`)}),(0,S.jsx)(M,{value:n.price,onChange:e=>r({...n,price:e.target.value}),placeholder:`0`,inputMode:`decimal`,"aria-label":J(`Limit price`)}),(0,S.jsx)(A,{as:`div`,onClick:void 0,style:{cursor:`default`},children:t})]}),i===`stop-limit`&&(0,S.jsxs)(j,{children:[(0,S.jsx)(O,{children:J(`TIF`)}),(0,S.jsx)(l,{flex:1}),(0,S.jsxs)(I,{value:n.timeInForce===`GTX`?`GTC`:n.timeInForce,onChange:e=>r({...n,timeInForce:e.target.value}),"aria-label":J(`Time in force`),children:[(0,S.jsx)(`option`,{value:`GTC`,children:`GTC`}),(0,S.jsx)(`option`,{value:`IOC`,children:`IOC`}),(0,S.jsx)(`option`,{value:`FOK`,children:`FOK`})]})]}),(0,S.jsxs)(le,{children:[(0,S.jsx)(O,{children:J(`Size`)}),(0,S.jsx)(k,{value:n.quantity,onChange:e=>r({...n,quantity:e.target.value}),placeholder:`0`,inputMode:`decimal`}),(0,S.jsxs)(A,{onClick:me,title:J(`Toggle unit`),children:[fe,` ▾`]})]}),(0,S.jsx)(R,{children:(0,S.jsx)(ie,{variant:`dotted`,min:0,max:100,value:d,onValueChanged:f,name:`perp-size-percent`})}),(0,S.jsxs)(l,{alignItems:`center`,style:{gap:8},children:[(0,S.jsx)(h,{scale:`sm`,checked:n.reduceOnly,onChange:e=>r({...n,reduceOnly:e.target.checked})}),(0,S.jsx)(s,{fontSize:`14px`,children:J(`Reduce Only`)})]}),(0,S.jsxs)(l,{alignItems:`center`,style:{gap:8},children:[(0,S.jsx)(h,{scale:`sm`,checked:n.tpSlEnabled,onChange:he}),(0,S.jsx)(s,{fontSize:`14px`,children:J(`Take Profit / Stop Loss`)})]}),n.tpSlEnabled&&(0,S.jsxs)(l,{flexDirection:`column`,style:{gap:12},children:[(0,S.jsxs)(a,{children:[(0,S.jsxs)(l,{alignItems:`center`,justifyContent:`space-between`,mb:`6px`,children:[(0,S.jsx)(s,{fontSize:`13px`,bold:!0,color:`success`,children:J(`Take Profit`)}),(0,S.jsx)(H,{value:n.takeProfitSource??`LAST`,onChange:e=>r({...n,takeProfitSource:e})})]}),(0,S.jsxs)(z,{children:[(0,S.jsxs)(a,{style:{flex:1},children:[(0,S.jsx)(s,{fontSize:`12px`,color:`textSubtle`,mb:`4px`,children:J(`Trigger Price`)}),(0,S.jsx)(L,{value:n.takeProfitPrice,onChange:e=>r({...n,takeProfitPrice:e.target.value}),placeholder:`0.00`,inputMode:`decimal`})]}),(0,S.jsxs)(a,{style:{flex:1},children:[(0,S.jsx)(s,{fontSize:`12px`,color:`textSubtle`,mb:`4px`,children:J(`PnL (USDT)`)}),(0,S.jsx)(L,{value:n.takeProfitPnl??``,onChange:e=>r({...n,takeProfitPnl:e.target.value}),placeholder:`0.00`,inputMode:`decimal`})]})]})]}),(0,S.jsxs)(a,{children:[(0,S.jsxs)(l,{alignItems:`center`,justifyContent:`space-between`,mb:`6px`,children:[(0,S.jsx)(s,{fontSize:`13px`,bold:!0,color:`failure`,children:J(`Stop Loss`)}),(0,S.jsx)(H,{value:n.stopLossSource??`LAST`,onChange:e=>r({...n,stopLossSource:e})})]}),(0,S.jsxs)(z,{children:[(0,S.jsxs)(a,{style:{flex:1},children:[(0,S.jsx)(s,{fontSize:`12px`,color:`textSubtle`,mb:`4px`,children:J(`Trigger Price`)}),(0,S.jsx)(L,{value:n.stopLossPrice,onChange:e=>r({...n,stopLossPrice:e.target.value}),placeholder:`0.00`,inputMode:`decimal`})]}),(0,S.jsxs)(a,{style:{flex:1},children:[(0,S.jsx)(s,{fontSize:`12px`,color:`textSubtle`,mb:`4px`,children:J(`PnL (USDT)`)}),(0,S.jsx)(L,{value:n.stopLossPnl??``,onChange:e=>r({...n,stopLossPnl:e.target.value}),placeholder:`0.00`,inputMode:`decimal`})]})]})]})]}),y,_?(0,S.jsx)(U,{onClick:B,disabled:!re,isLoading:m,scale:`md`,$side:n.side,children:p}):(0,S.jsx)(U,{$side:n.side,onClick:B,scale:`md`,disabled:!v,children:p}),(0,S.jsxs)(W,{children:[(0,S.jsx)(G,{children:J(`Cost`)}),(0,S.jsx)(K,{children:c.cost}),!Y&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(G,{children:J(`Est. Liq. Price`)}),(0,S.jsx)(K,{children:c.liq})]}),(0,S.jsx)(G,{children:J(`Fees`)}),(0,S.jsx)(K,{children:u})]})]})},q.__docgenInfo={description:`Trading order entry form. Stateless — the consumer owns the full
\`OrderFormDraft\` (typically persisted to localStorage via jotai),
the computed display strings (availableBalance / preview / cta) and
the async submit lifecycle (canSubmit, isSubmitting, errorSlot).

The widget renders the visual surface and dispatches user intent via
callbacks: \`onDraftChange\` for any field edit, \`onSubmit\` for the
primary action, \`onLeverageClick\` / \`onMarginModeToggle\` /
\`onDepositClick\` for the inline pills.

Sub-modals (LeverageModal, OrderConfirmModal, DepositModal,
EnableTradingModal) are rendered by the consumer alongside this
form — keeps the widget free of any imperative-modal coupling.`,methods:[],displayName:`OrderForm`,props:{symbol:{required:!0,tsType:{name:`string`},description:``},baseAsset:{required:!0,tsType:{name:`string`},description:``},quoteAsset:{required:!0,tsType:{name:`string`},description:``},draft:{required:!0,tsType:{name:`OrderFormDraft`},description:``},onDraftChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(next: OrderFormDraft) => void`,signature:{arguments:[{type:{name:`OrderFormDraft`},name:`next`}],return:{name:`void`}}},description:``},typeKey:{required:!0,tsType:{name:`union`,raw:`'market' | 'limit' | 'stop-limit' | 'stop-market'`,elements:[{name:`literal`,value:`'market'`},{name:`literal`,value:`'limit'`},{name:`literal`,value:`'stop-limit'`},{name:`literal`,value:`'stop-market'`}]},description:``},onTypeKeyChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(next: OrderTypeKey) => void`,signature:{arguments:[{type:{name:`union`,raw:`'market' | 'limit' | 'stop-limit' | 'stop-market'`,elements:[{name:`literal`,value:`'market'`},{name:`literal`,value:`'limit'`},{name:`literal`,value:`'stop-limit'`},{name:`literal`,value:`'stop-market'`}]},name:`next`}],return:{name:`void`}}},description:``},availableBalanceText:{required:!0,tsType:{name:`string`},description:`Pre-formatted available balance text (e.g. "1234.56" or "--").`},preview:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ cost: string; liq: string }`,signature:{properties:[{key:`cost`,value:{name:`string`,required:!0}},{key:`liq`,value:{name:`string`,required:!0}}]}},description:`Pre-formatted preview lines for the summary footer.`},feeText:{required:!0,tsType:{name:`string`},description:`Maker/taker fee bps for the summary footer (e.g. "0.02% / 0.05%").`},sizePercent:{required:!0,tsType:{name:`number`},description:`Slider position 0-100 (consumer computes from quantity ÷ maxSize).`},onSizePercentChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(pct: number) => void`,signature:{arguments:[{type:{name:`number`},name:`pct`}],return:{name:`void`}}},description:``},cta:{required:!0,tsType:{name:`string`},description:`Submit button label (consumer computes — "Connect Wallet" / "Buy / Long" / etc.).`},canSubmit:{required:!0,tsType:{name:`boolean`},description:`Submit button enabled?`},isSubmitting:{required:!1,tsType:{name:`boolean`},description:`Submit in flight (button shows isLoading).`,defaultValue:{value:`false`,computed:!1}},marginSubmitting:{required:!1,tsType:{name:`boolean`},description:`Margin-mode toggle in flight (disables the margin button).`,defaultValue:{value:`false`,computed:!1}},authReady:{required:!1,tsType:{name:`boolean`},description:`auth.ready — when false the submit click routes via consumer to deposit/enable-trading.`,defaultValue:{value:`true`,computed:!1}},hasAddress:{required:!1,tsType:{name:`boolean`},description:`Wallet address present? When false the submit button is disabled in the un-ready branch.`,defaultValue:{value:`true`,computed:!1}},errorSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Consumer renders its classified error here (e.g. PerpsErrorMessage).`},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Click submit — consumer routes via canSubmit (place order) or shows the deposit/auth modals.`},onLeverageClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Open the leverage adjuster modal.`},onMarginModeToggle:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Toggle margin mode (consumer fires the signed setMarginType call).`},onDepositClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Open the deposit modal (Avbl row + connector for not-yet-deposited users).`},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string, options?: Record<string, string | number | undefined>) => string`,signature:{arguments:[{type:{name:`string`},name:`key`},{type:{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | undefined`,elements:[{name:`string`},{name:`number`},{name:`undefined`}]}],raw:`Record<string, string | number | undefined>`},name:`options`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(
  key: string,
  options?: Record<string, string | number | undefined>,
): string => {
  if (!options) return key
  return Object.entries(options).reduce((acc, [k, v]) => acc.split(\`%\${k}%\`).join(String(v)), key)
}`,computed:!1}}}}}));export{de as n,q as t};