import{n as e}from"./chunk-zsgVPwQN.js";import{Mt as t,N as n,Nt as r,V as i,W as a,Z as o,a as s,j as c,jt as l,kt as u,s as d,sn as f,tt as p}from"./iframe-BH0EN6Jm.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q=e((()=>{f(),l(),s(),p(),m=u(),h=r.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 480px;
  flex-shrink: 0;
  gap: 8px;
`,g=r.div`
  background: ${({theme:e})=>e.colors.card};
  border-top: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-right: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-bottom: 2px solid ${({theme:e})=>e.colors.cardBorder};
  border-left: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 24px;
`,_=r(g)`
  display: flex;
  height: 72px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`,v=r(g)`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`,y=r(g)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
  align-self: stretch;
`,b=r.div`
  display: inline-flex;
  align-items: stretch;
  flex: 1;
  background: ${({theme:e})=>e.colors.input};
  border-radius: 16px;
  padding: 4px;
  gap: 4px;
`,x=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 32px;
  border: 0;
  border-radius: 12px;
  background: ${({$active:e,theme:t})=>e?t.colors.card:`transparent`};
  color: ${({$active:e,theme:t})=>e?t.colors.secondary:t.colors.textSubtle};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  ${({$active:e})=>e&&t`
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    `}
  &:hover {
    color: ${({theme:e})=>e.colors.secondary};
  }
`,S=r.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,C=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: ${({theme:e})=>e.colors.textSubtle};
  cursor: pointer;
  &:hover {
    color: ${({theme:e})=>e.colors.text};
    background: ${({theme:e})=>e.colors.input};
  }
`,w=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
`,T=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,E=r.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textSubtle};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,D=r.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textSubtle};
  font-variant-numeric: tabular-nums;
`,O=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,k=r.input`
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  outline: none;
  font-family: inherit;
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-variant-numeric: tabular-nums;
  padding: 0;
  &::placeholder {
    color: ${({theme:e})=>e.colors.textDisabled};
  }
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,A=r.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 4px 12px 4px 4px;
  border: 0;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.input};
  color: ${({theme:e})=>e.colors.text};
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background: ${({theme:e})=>e.colors.background};
  }
`,j=r.span`
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: ${({$color:e})=>e};
  color: #fff;
  font-weight: 700;
  font-size: 12px;
`,M=r.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textSubtle};
  font-variant-numeric: tabular-nums;
`,N=r.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 4px solid ${({theme:e})=>e.colors.card};
  background: ${({theme:e})=>e.colors.input};
  color: ${({theme:e})=>e.colors.secondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: ${({theme:e})=>e.colors.text};
  }
`,P=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  gap: 12px;
`,F=r.span`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.textSubtle};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,I=r.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 999px;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${({theme:e})=>e.colors.secondary};
    border-color: ${({theme:e})=>e.colors.secondary};
  }
`,L=r.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(255, 178, 55, 0.10);
  border: 1px solid rgba(255, 178, 55, 0.40);
  color: ${({theme:e})=>e.colors.warning};
`,R=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,z=r.span`
  font-size: 13px;
  font-weight: 600;
`,B=r.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textSubtle};
  line-height: 1.45;
`,V=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  gap: 8px;
  padding: 0 4px;
`,H=r.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-variant-numeric: tabular-nums;
`,U=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: ${({theme:e})=>e.colors.textSubtle};
  cursor: pointer;
  &:hover {
    color: ${({theme:e})=>e.colors.text};
  }
`,W=r(d)`
  width: 100%;
  height: 48px;
  font-size: 16px;
`,G=[{key:`swap`,label:`Swap`},{key:`twap`,label:`TWAP`},{key:`limit`,label:`Limit`}],K=({mode:e=`swap`,onModeChange:t,pay:r,payAmount:s,onPayAmountChange:l,onSelectPayToken:u,receive:d,receiveAmount:f,onReceiveAmountChange:p,onSelectReceiveToken:g,slippage:K,onSlippageClick:q,rateLabel:J,onRefreshRate:Y,offHoursWarning:X=!1,ctaLabel:Z,ctaDisabled:Q=!1,onCtaClick:$,onSwapDirections:ee,onSettingsClick:te})=>(0,m.jsxs)(h,{"aria-label":`Trade panel`,children:[(0,m.jsxs)(_,{children:[(0,m.jsx)(b,{role:`tablist`,"aria-label":`Trade mode`,children:G.map(n=>(0,m.jsx)(x,{type:`button`,role:`tab`,"aria-selected":n.key===e,$active:n.key===e,onClick:()=>t?.(n.key),children:n.label},n.key))}),(0,m.jsx)(S,{children:(0,m.jsx)(C,{type:`button`,"aria-label":`Settings`,onClick:te,children:(0,m.jsx)(n,{width:18,color:`currentColor`})})})]}),(0,m.jsxs)(w,{children:[(0,m.jsxs)(y,{children:[(0,m.jsxs)(T,{children:[(0,m.jsx)(E,{children:`Pay`}),(0,m.jsxs)(D,{children:[`Bal: `,r.balance]})]}),(0,m.jsxs)(O,{children:[(0,m.jsx)(k,{inputMode:`decimal`,placeholder:`0.00`,value:s,onChange:e=>l?.(e.target.value),"aria-label":`Pay amount in ${r.symbol}`}),(0,m.jsxs)(A,{type:`button`,onClick:u,children:[(0,m.jsx)(j,{$color:r.iconColor,children:r.iconInitials??r.symbol.slice(0,1)}),r.symbol,(0,m.jsx)(c,{width:16,color:`currentColor`})]})]}),r.usdValue&&(0,m.jsxs)(M,{children:[`≈ `,r.usdValue]})]}),(0,m.jsx)(N,{type:`button`,"aria-label":`Swap direction`,onClick:ee,children:(0,m.jsx)(o,{width:20,color:`currentColor`})}),(0,m.jsxs)(y,{children:[(0,m.jsxs)(T,{children:[(0,m.jsx)(E,{children:`Receive`}),(0,m.jsxs)(D,{children:[`Bal: `,d.balance]})]}),(0,m.jsxs)(O,{children:[(0,m.jsx)(k,{inputMode:`decimal`,placeholder:`0.00`,value:f,onChange:e=>p?.(e.target.value),"aria-label":`Receive amount in ${d.symbol}`}),(0,m.jsxs)(A,{type:`button`,onClick:g,children:[(0,m.jsx)(j,{$color:d.iconColor,children:d.iconInitials??d.symbol.replace(/x$/i,``).slice(0,1)}),d.symbol,(0,m.jsx)(c,{width:16,color:`currentColor`})]})]}),d.usdValue&&(0,m.jsxs)(M,{children:[`≈ `,d.usdValue]})]})]}),(0,m.jsxs)(v,{children:[(0,m.jsxs)(P,{children:[(0,m.jsxs)(F,{children:[`Slippage Tolerance`,(0,m.jsx)(i,{width:14,color:`currentColor`})]}),(0,m.jsxs)(I,{type:`button`,onClick:q,children:[K,`%`,(0,m.jsx)(c,{width:14,color:`currentColor`})]})]}),X&&(0,m.jsxs)(L,{role:`status`,children:[(0,m.jsx)(i,{width:18,color:`currentColor`}),(0,m.jsxs)(R,{children:[(0,m.jsx)(z,{children:`Trading outside market hours`}),(0,m.jsx)(B,{children:`Tokenized stock orders placed off-hours will be settled when the underlying market re-opens.`})]})]}),(0,m.jsx)(W,{type:`button`,disabled:Q,onClick:$,children:Z}),(0,m.jsxs)(V,{children:[(0,m.jsx)(H,{children:J}),(0,m.jsx)(U,{type:`button`,"aria-label":`Refresh rate`,onClick:Y,children:(0,m.jsx)(a,{width:14,color:`currentColor`})})]})]})]}),K.__docgenInfo={description:``,methods:[],displayName:`TokenizedAssetsTradePanel`,props:{mode:{required:!1,tsType:{name:`union`,raw:`'swap' | 'twap' | 'limit'`,elements:[{name:`literal`,value:`'swap'`},{name:`literal`,value:`'twap'`},{name:`literal`,value:`'limit'`}]},description:``,defaultValue:{value:`'swap'`,computed:!1}},onModeChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: TradeMode) => void`,signature:{arguments:[{type:{name:`union`,raw:`'swap' | 'twap' | 'limit'`,elements:[{name:`literal`,value:`'swap'`},{name:`literal`,value:`'twap'`},{name:`literal`,value:`'limit'`}]},name:`next`}],return:{name:`void`}}},description:``},pay:{required:!0,tsType:{name:`TradePanelTokenSide`},description:``},payAmount:{required:!0,tsType:{name:`string`},description:`Pay-side input value. Empty string ⇒ placeholder shown.`},onPayAmountChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: string) => void`,signature:{arguments:[{type:{name:`string`},name:`next`}],return:{name:`void`}}},description:``},onSelectPayToken:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},receive:{required:!0,tsType:{name:`TradePanelTokenSide`},description:``},receiveAmount:{required:!0,tsType:{name:`string`},description:``},onReceiveAmountChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: string) => void`,signature:{arguments:[{type:{name:`string`},name:`next`}],return:{name:`void`}}},description:``},onSelectReceiveToken:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},slippage:{required:!0,tsType:{name:`string`},description:`Slippage tolerance % as string (e.g. "0.5").`},onSlippageClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},rateLabel:{required:!0,tsType:{name:`string`},description:`Conversion rate footer text (e.g. "1 BNB = 326.01 NVIDIAx").`},onRefreshRate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},offHoursWarning:{required:!1,tsType:{name:`boolean`},description:`Show the "Trade off-hours" notice card above the CTA.`,defaultValue:{value:`false`,computed:!1}},ctaLabel:{required:!0,tsType:{name:`string`},description:`CTA label (e.g. "Connect Wallet", "Swap").`},ctaDisabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onCtaClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSwapDirections:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSettingsClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}}));export{q as n,K as t};