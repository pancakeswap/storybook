import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,jt as r,kt as i,sn as a}from"./iframe-BH0EN6Jm.js";import{n as o,t as ee}from"./DepositModal-DPv3lCtN.js";import{n as s,t as te}from"./SimpleBetPanel-GB_cCvkJ.js";import{n as c,t as ne}from"./SimpleTickerCard-CBawnBzA.js";import{n as l,t as re}from"./SimpleChartCard-DRHmhdJ4.js";import{n as u,t as ie}from"./SimplePositionsCard-agRTh8YS.js";function d({initialPair:e=`BTC/USD`}={}){let[t,n]=(0,f.useState)(`1d`),[r,i]=(0,f.useState)(`positions`),[a,o]=(0,f.useState)(!1),[s,c]=(0,f.useState)(!1),[l,u]=(0,f.useState)(``),[d,y]=(0,f.useState)(10);return(0,p.jsxs)(v,{"aria-label":`Perpetuals · Simple mode · ${e}`,children:[(0,p.jsx)(Z,{onDeposit:()=>o(!0)}),(0,p.jsxs)(A,{children:[(0,p.jsxs)(j,{children:[(0,p.jsx)(ne,{baseAsset:`BTC`,pair:`BTC/USD`,price:`78,053.6`,pricePnlPct:.93,volume24h:`$2.13B`,openInterest:`$2.13B`,fundingRate:`+0.010%`,nextFunding:`4h 12m`}),(0,p.jsx)(re,{timeframe:t,timeframes:m,onTimeframeChange:e=>n(e),points:[],currentPriceLabel:`640`,yTicks:h,xTicks:g}),(0,p.jsx)(ie,{tab:r,onTabChange:i,positions:_,openOrders:[],historyEmpty:!0,onClosePosition:()=>void 0})]}),(0,p.jsx)(te,{...oe(l,u,d,y,()=>o(!0),()=>c(!0))})]}),(0,p.jsx)(X,{isOpen:s,onClose:()=>c(!1)}),(0,p.jsx)(ee,{isOpen:a,onClose:()=>o(!1),step:`select`,evmAddress:`0x1234…abcd`,assets:[],onSelectAsset:()=>void 0,amount:``,onAmountChange:()=>void 0,onPercentClick:()=>void 0,submitState:`idle`,canContinue:!1,onContinue:()=>void 0,onBack:()=>o(!1)})]})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,ae,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,oe,se=e((()=>{f=t(a(),1),r(),s(),c(),l(),u(),o(),p=i(),m=[`1d`,`1h`,`30m`,`15m`,`5m`],h=[`670`,`660`,`650`,`640`,`630`,`620`,`610`,`USD`],g=[`5:00 AM`,`9:00 AM`,`1:00 PM`,`5:00 PM`,`9:00 PM`,`1:00 AM`,`5:00 AM`,`9:00 AM`,`1:00 PM`],_=[{id:`bnb-long`,symbol:`BNB`,chainLabel:`BNB CHAIN`,iconColor:`#F3BA2F`,direction:`up`,unrealizedPnl:`+$10.09`,pnlSign:`positive`,entryPrice:`$649.98`,liqPrice:`$637.00`,liqDistancePct:90,liqStatus:`safe`,liqStatusLabel:`Safe`}],v=n.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.background};
  font-family: 'Kanit', sans-serif;
  color: ${({theme:e})=>e.colors.text};
`,y=n.header`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 0 16px;
  background: ${({theme:e})=>e.colors.card};
  border-bottom: 1px solid ${({theme:e})=>e.colors.cardBorder};
  flex-shrink: 0;
`,b=n.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.text};
  margin-right: 32px;
`,x=n.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d1884f 0%, #f8c5a3 100%);
  border-radius: 50%;
  font-size: 14px;
`,S=n.div`
  display: inline-flex;
  align-items: stretch;
  background: ${({theme:e})=>e.colors.input};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 999px;
  padding: 0;
`,C=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border: 0;
  border-radius: 999px;
  background: ${({$active:e,theme:t})=>e?t.colors.textSubtle:`transparent`};
  color: ${({$active:e,theme:t})=>e?t.colors.invertedContrast:t.colors.textSubtle};
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({$active:e})=>e?600:400};
  min-width: 88px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.12s, color 0.12s;
  &:hover {
    color: ${({theme:e})=>e.colors.text};
  }
`,w=n.div`
  flex: 1;
`,T=n.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,E=n.button`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  height: 32px;
  border: 0;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.invertedContrast};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover { filter: brightness(1.05); }
`,D=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${({theme:e})=>e.colors.textSubtle};
  cursor: pointer;
  &:hover { background: ${({theme:e})=>e.colors.input}; }
`,O=n.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 4px 8px 4px 4px;
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 16px;
  background: ${({theme:e})=>e.colors.card};
  color: ${({theme:e})=>e.colors.text};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: ${({theme:e})=>e.colors.input}; }
`,k=n.span`
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff8866 0%, #ffd166 100%);
  font-size: 14px;
`,A=n.div`
  display: flex;
  align-items: stretch;
  min-height: 0;
  flex: 1;
`,j=n.div`
  flex: 1;
  min-width: 0;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: radial-gradient(
    circle at 50% 50%,
    ${({theme:e})=>e.colors.card} 0%,
    ${({theme:e})=>e.colors.input} 100%
  );
`,M=n.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`,N=n.div`
  display: flex;
  width: 480px;
  min-width: 360px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px;
  border-top: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-right: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-bottom: 2px solid ${({theme:e})=>e.colors.cardBorder};
  border-left: 1px solid ${({theme:e})=>e.colors.cardBorder};
  background: ${({theme:e})=>e.colors.card};
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 4px 8px 0 rgba(0, 0, 0, 0.16);
  padding: 16px;
  gap: 16px;
`,ae=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`,P=n.h3`
  margin: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,F=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.colors.textSubtle};
  cursor: pointer;
  border-radius: 999px;
  &:hover { background: ${({theme:e})=>e.colors.input}; }
`,I=n.label`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 12px 16px;
  border-radius: 16px;
  background: ${({theme:e})=>e.colors.input};
  color: ${({theme:e})=>e.colors.textSubtle};
`,L=n.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text};
  &::placeholder { color: ${({theme:e})=>e.colors.textSubtle}; }
`,R=n.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`,z=n.button`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  padding: 12px 8px;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 12px;
  text-align: left;
  font-family: inherit;
  &:hover { background: ${({theme:e})=>e.colors.input}; }
`,B=n.span`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: ${({$color:e})=>e};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
`,V=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,H=n.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
`,U=n.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,W=n.span`
  color: ${({theme:e})=>e.colors.textSubtle};
`,G=n.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.secondary};
  background: rgba(118, 69, 217, 0.10);
  padding: 2px 8px;
  border-radius: 999px;
  width: fit-content;
`,K=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-family: 'Kanit', sans-serif;
`,q=n.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-variant-numeric: tabular-nums;
`,J=n.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textSubtle};
  font-variant-numeric: tabular-nums;
`,Y=[{symbol:`BNB`,name:`BNB chain native token`,amount:`23.62`,valueUsd:`$18,053.62`,color:`#F0B90B`},{symbol:`CAKE`,name:`PancakeSwap Token`,amount:`987.98`,valueUsd:`$1,390.98`,color:`#23CAD5`},{symbol:`USDC`,name:`Circle USDC`,amount:`1,000`,valueUsd:`$999.98`,color:`#2775CA`},{symbol:`USDT`,name:`Tether USDT`,amount:`20`,valueUsd:`$19.98`,color:`#26A17B`}],X=({isOpen:e,onClose:t})=>e?(0,p.jsx)(M,{onClick:t,children:(0,p.jsxs)(N,{onClick:e=>e.stopPropagation(),children:[(0,p.jsxs)(ae,{children:[(0,p.jsx)(P,{children:`Collateral`}),(0,p.jsx)(F,{type:`button`,onClick:t,"aria-label":`Close`,children:(0,p.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":!0,children:(0,p.jsx)(`path`,{d:`M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z`})})})]}),(0,p.jsxs)(I,{children:[(0,p.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":!0,children:(0,p.jsx)(`path`,{d:`M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z`})}),(0,p.jsx)(L,{type:`text`,placeholder:`Search`})]}),(0,p.jsx)(R,{children:Y.map(e=>(0,p.jsxs)(z,{type:`button`,children:[(0,p.jsx)(B,{$color:e.color,children:e.symbol.slice(0,1)}),(0,p.jsxs)(V,{children:[(0,p.jsxs)(H,{children:[(0,p.jsx)(U,{children:e.symbol}),(0,p.jsx)(W,{children:e.name})]}),(0,p.jsx)(G,{children:`COLLATERAL`})]}),(0,p.jsxs)(K,{children:[(0,p.jsx)(q,{children:e.amount}),(0,p.jsx)(J,{children:e.valueUsd})]})]},e.symbol))})]})}):null,Z=({onDeposit:e})=>(0,p.jsxs)(y,{children:[(0,p.jsxs)(b,{children:[(0,p.jsx)(x,{"aria-hidden":!0,children:`🐰`}),`PancakeSwap`]}),(0,p.jsxs)(S,{role:`tablist`,"aria-label":`Trading mode`,children:[(0,p.jsx)(C,{type:`button`,role:`tab`,"aria-selected":!0,$active:!0,children:`Simple`}),(0,p.jsx)(C,{type:`button`,role:`tab`,"aria-selected":!1,children:`Pro`})]}),(0,p.jsx)(w,{}),(0,p.jsxs)(T,{children:[(0,p.jsx)(E,{type:`button`,onClick:e,children:`Deposit`}),(0,p.jsx)(D,{type:`button`,"aria-label":`Settings`,children:(0,p.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":!0,children:(0,p.jsx)(`path`,{d:`M19.43 12.98a8.54 8.54 0 0 0 0-1.96l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.45 7.45 0 0 0-1.7-.98l-.38-2.65A.5.5 0 0 0 13.99 2h-4a.5.5 0 0 0-.49.42l-.38 2.65c-.6.24-1.17.58-1.7.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65a8.54 8.54 0 0 0 0 1.96l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.14.24.43.34.69.22l2.49-1c.53.4 1.1.74 1.7.98l.38 2.65a.5.5 0 0 0 .49.42h4a.5.5 0 0 0 .49-.42l.38-2.65a7.45 7.45 0 0 0 1.7-.98l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z`})})}),(0,p.jsxs)(O,{type:`button`,children:[(0,p.jsx)(k,{"aria-hidden":!0,children:`🦊`}),`$6,488.98`,(0,p.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":!0,children:(0,p.jsx)(`path`,{d:`M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z`})})]})]})]}),oe=(e,t,n,r,i,a)=>({symbol:`BTCUSDT`,baseAsset:`BTC`,pair:`BTC/USDT`,price:`78,053.6`,pricePnlPct:.93,bet:e,onBetChange:t,leverage:n,onLeverageChange:r,quoteAsset:`USDT`,fundBalanceText:`20.00 USDT`,onTopUpFund:a,estimatedEntry:`$78,053.60`,liqIfLong:`$66,092.23 (-2.0%)`,marginRequired:`$400 USDT`,openingFee:`$10.00 (0.05%)`,canSubmit:!0,onUp:()=>void 0,onDown:()=>void 0,onDeposit:i,onWithdraw:()=>void 0,unrealizedPnl:`$0`}),d.__docgenInfo={description:``,methods:[],displayName:`SimplePerpsPage`}})),ce,Q,$;e((()=>{se(),ce={title:`Apps/Perps · Simple`,component:d,parameters:{layout:`fullscreen`}},Q={args:{initialPair:`BTC/USD`}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    initialPair: 'BTC/USD'
  }
}`,...Q.parameters?.docs?.source}}},$=[`BTC`]}))();export{Q as BTC,$ as __namedExportsOrder,ce as default};