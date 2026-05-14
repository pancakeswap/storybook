import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,jt as r,kt as i,sn as a}from"./iframe-BH0EN6Jm.js";import{i as o,t as s}from"./primitives-CLkCgKst.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=e((()=>{c=t(a(),1),r(),o(),l=i(),u=n(s)`
  background: ${({theme:e})=>e.colors.card};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  align-self: stretch;
  overflow: hidden;

  /* PerpsPanel injects an inner <div> — flatten so the table sits flush. */
  & > div {
    background: transparent;
    padding: 0;
  }
`,d=n.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.cardBorder};
`,f=n.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({$active:e})=>e?600:400};
  color: ${({$active:e,theme:t})=>e?t.colors.text:t.colors.textSubtle};
  cursor: pointer;
  padding: 16px 0;
  border-bottom: 2px solid ${({$active:e,theme:t})=>e?t.colors.text:`transparent`};
  &:hover { color: ${({theme:e})=>e.colors.text}; }
`,p=n.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`,m=n.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`,h=n.div`
  padding: 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,g=n.div`
  padding: 16px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text};
  font-variant-numeric: tabular-nums;
`,_=n(g)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,v=n.span`
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({$color:e})=>e};
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`,y=n.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`,b=n.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,x=n.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textSubtle};
`,S=n(g)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid
    ${({$direction:e,theme:t})=>e===`up`?t.colors.success:t.colors.failure};
  color: ${({$direction:e,theme:t})=>e===`up`?t.colors.success:t.colors.failure};
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
  margin: 16px;
`,C=n(g)`
  color: ${({$sign:e,theme:t})=>e===`positive`?t.colors.success:e===`negative`?t.colors.failure:t.colors.text};
  font-weight: 600;
  font-size: 16px;
`,w=n(g)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,T=n.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.input};
  overflow: hidden;
  max-width: 94px;
`,E=n.div`
  height: 100%;
  width: ${({$pct:e})=>`${Math.max(0,Math.min(100,e))}%`};
  background: ${({$status:e,theme:t})=>e===`safe`?t.colors.success:e===`warn`?t.colors.warning:t.colors.failure};
  border-radius: 999px;
`,D=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 16px 12px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.input};
  color: ${({theme:e})=>e.colors.failure};
  cursor: pointer;
  &:hover { filter: brightness(0.95); }
`,O=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({theme:e})=>e.colors.textSubtle};
  font-size: 14px;
`,k=n.span`
  color: ${({$side:e,theme:t})=>e===`BUY`?t.colors.success:t.colors.failure};
  font-weight: 600;
`,A={BNB:`#F0B90B`,BTC:`#F7931A`,ETH:`#627EEA`,USDC:`#2775CA`,USDT:`#26A17B`,CAKE:`#23CAD5`},j=e=>A[e.toUpperCase()]??`#7A6EAA`,M=e=>e===`up`?`↑`:`↓`,N=e=>e===`up`?`Up/Long`:`Down/Short`,P=()=>(0,l.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":!0,children:(0,l.jsx)(`path`,{d:`M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z`})}),F=({tab:e,onTabChange:t,positions:n,openOrders:r,historyEmpty:i=!0,onClosePosition:a,renderTokenIcon:o})=>(0,l.jsxs)(u,{children:[(0,l.jsxs)(d,{role:`tablist`,children:[(0,l.jsx)(f,{type:`button`,role:`tab`,"aria-selected":e===`positions`,$active:e===`positions`,onClick:()=>t(`positions`),children:`Positions`}),(0,l.jsx)(f,{type:`button`,role:`tab`,"aria-selected":e===`orders`,$active:e===`orders`,onClick:()=>t(`orders`),children:`Open Orders`}),(0,l.jsx)(f,{type:`button`,role:`tab`,"aria-selected":e===`history`,$active:e===`history`,onClick:()=>t(`history`),children:`Transaction history`})]}),e===`positions`&&(n.length===0?(0,l.jsx)(O,{children:`No open positions`}):(0,l.jsxs)(p,{role:`table`,children:[(0,l.jsx)(h,{children:`Token`}),(0,l.jsx)(h,{children:`Direction`}),(0,l.jsx)(h,{children:`Unrealized PnL`}),(0,l.jsx)(h,{children:`Entry Price`}),(0,l.jsx)(h,{children:`Liq. Price`}),(0,l.jsx)(h,{children:`Distance to Liq`}),(0,l.jsx)(h,{}),n.map(e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsxs)(_,{children:[o?o(e):(0,l.jsx)(v,{$color:e.iconColor??j(e.symbol),children:e.symbol.slice(0,1)}),(0,l.jsxs)(y,{children:[(0,l.jsx)(b,{children:e.symbol}),(0,l.jsx)(x,{children:e.chainLabel})]})]}),(0,l.jsxs)(S,{$direction:e.direction,children:[M(e.direction),` `,N(e.direction)]}),(0,l.jsx)(C,{$sign:e.pnlSign,children:e.unrealizedPnl}),(0,l.jsx)(g,{children:e.entryPrice}),(0,l.jsx)(g,{children:e.liqPrice}),(0,l.jsxs)(w,{children:[(0,l.jsx)(T,{children:(0,l.jsx)(E,{$pct:e.liqDistancePct,$status:e.liqStatus})}),(0,l.jsx)(`span`,{children:e.liqStatusLabel})]}),(0,l.jsx)(D,{type:`button`,"aria-label":`Close position`,onClick:()=>a(e.id),children:(0,l.jsx)(P,{})})]},e.id))]})),e===`orders`&&(r.length===0?(0,l.jsx)(O,{children:`No open orders`}):(0,l.jsxs)(m,{role:`table`,children:[(0,l.jsx)(h,{children:`Symbol`}),(0,l.jsx)(h,{children:`Side`}),(0,l.jsx)(h,{children:`Type`}),(0,l.jsx)(h,{children:`Price`}),(0,l.jsx)(h,{children:`Size`}),(0,l.jsx)(h,{children:`Filled`}),(0,l.jsx)(h,{children:`Status`}),r.map(e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(g,{children:e.symbol}),(0,l.jsx)(g,{children:(0,l.jsx)(k,{$side:e.side,children:e.side})}),(0,l.jsx)(g,{children:e.type}),(0,l.jsx)(g,{children:e.price}),(0,l.jsx)(g,{children:e.origQty}),(0,l.jsx)(g,{children:e.executedQty}),(0,l.jsx)(g,{children:e.status})]},e.id))]})),e===`history`&&(0,l.jsx)(O,{children:`No transaction history`})]}),F.__docgenInfo={description:``,methods:[],displayName:`SimplePositionsCard`,props:{tab:{required:!0,tsType:{name:`union`,raw:`'positions' | 'orders' | 'history'`,elements:[{name:`literal`,value:`'positions'`},{name:`literal`,value:`'orders'`},{name:`literal`,value:`'history'`}]},description:``},onTabChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tab: SimplePositionsTab) => void`,signature:{arguments:[{type:{name:`union`,raw:`'positions' | 'orders' | 'history'`,elements:[{name:`literal`,value:`'positions'`},{name:`literal`,value:`'orders'`},{name:`literal`,value:`'history'`}]},name:`tab`}],return:{name:`void`}}},description:``},positions:{required:!0,tsType:{name:`unknown`},description:``},openOrders:{required:!0,tsType:{name:`unknown`},description:``},historyEmpty:{required:!1,tsType:{name:`boolean`},description:`Whether the History tab content is empty (placeholder until the Aster
history shape is finalised). When true, render a "no history yet"
message; when false, render the same message until consumers wire
history data.`,defaultValue:{value:`true`,computed:!1}},onClosePosition:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},renderTokenIcon:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(row: SimplePositionRow) => React.ReactNode`,signature:{arguments:[{type:{name:`SimplePositionRow`},name:`row`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:"Optional row icon renderer; defaults to a colored letter chip from the\nrow's `iconColor` or a sensible per-symbol fallback."}}}}));export{I as n,F as t};