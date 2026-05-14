import{n as e}from"./chunk-zsgVPwQN.js";import{At as t,Nt as n,a as r,jt as i,kt as a,m as o,nt as s,rt as c,s as l,sn as u}from"./iframe-BH0EN6Jm.js";import{t as d}from"./Text-BRDHz0kF.js";import{i as f,n as p,r as m,t as h}from"./primitives-CLkCgKst.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=e((()=>{u(),i(),s(),r(),d(),f(),g=a(),_=n(h)`
  flex: 1;
  min-height: 200px;
`,v=n.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`,y=n(c)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`,b=n.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(min-content, 1fr)) auto;
  /* Cells sit flush horizontally so the row-hover background reads as
   * one continuous strip. Per-cell horizontal padding (applied below)
   * keeps content from touching. */
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`,x=n.div`
  display: contents;
  /* Padding lives on the cells (RowGroup is display:contents so any
   * padding set here would be dropped) — gives the hover strip visible
   * breathing room around the content, matching the MarketsDropdown row. */
  & > * {
    padding: 16px 12px;
    transition: background 0.12s;
  }
  &:hover > * {
    background: ${({theme:e})=>e.colors.cardSecondary};
  }
  /* Round the outer ends of the strip so it reads as a pill. */
  &:hover > *:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:hover > *:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,S=n(c)`
  gap: 6px;
  align-items: center;
`,C=n.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`,w=n.span`
  color: ${({$kind:e,theme:t})=>e===`tp`?t.colors.success:t.colors.failure};
`,T=n.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(min-content, 1fr)) auto;
  /* Match the Positions table spacing: zero column-gap so row hover
   * reads as one strip, and 16px cell padding for breathing room. */
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`,E=n.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`,D=n.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`,O=n.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({theme:e})=>e.colors.textSubtle};
  }
`,k=n.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`,A=n.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  color: ${({theme:e})=>e.colors.textSubtle};
  &:hover { color: ${({theme:e})=>e.colors.text}; }
`,j=n(o).attrs({fontSize:`10px`,color:`textSubtle`})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,M=n(o).attrs({fontSize:`14px`})`
  font-variant-numeric: tabular-nums;
`,N=e=>e,P=({p:e,useMarkPriceForSymbol:n,computeLiqPrice:r,onClose:i,onEditTpSl:a,closingSymbol:o,t:s})=>{let c=t(),u=n?.(e.symbol),d=e.positionAmt>=0?`BUY`:`SELL`,f=Number.isFinite(u)&&Number.isFinite(e.entryPrice)?(u-e.entryPrice)*e.positionAmt:Number(e.unrealizedProfit),p=Number.isFinite(e.entryPrice)&&Number.isFinite(e.leverage)?r?.({side:d,entryPrice:e.entryPrice,leverage:e.leverage}):void 0,m=o===e.symbol;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(M,{bold:!0,children:e.symbol}),(0,g.jsx)(M,{style:{color:d===`BUY`?c.colors.success:c.colors.failure},children:e.positionAmt}),(0,g.jsx)(M,{children:Number.isFinite(e.entryPrice)?e.entryPrice.toFixed(2):`—`}),(0,g.jsx)(M,{children:u!==void 0&&Number.isFinite(u)?u.toFixed(2):`—`}),(0,g.jsxs)(M,{children:[e.leverage,`x`]}),(0,g.jsx)(M,{children:p?p.toFixed(2):`—`}),(0,g.jsx)(M,{style:{color:f>=0?c.colors.success:c.colors.failure},children:Number.isFinite(f)?f.toFixed(4):`—`}),(0,g.jsxs)(C,{children:[(0,g.jsxs)(w,{$kind:`tp`,children:[s(`TP`),`: `,e.tpStopPrice?Number(e.tpStopPrice).toFixed(2):`—`]}),(0,g.jsxs)(w,{$kind:`sl`,children:[s(`SL`),`: `,e.slStopPrice?Number(e.slStopPrice).toFixed(2):`—`]})]}),(0,g.jsxs)(S,{children:[(0,g.jsx)(l,{scale:`xs`,variant:`tertiary`,onClick:()=>a(e,u??NaN),disabled:!Number.isFinite(e.positionAmt)||e.positionAmt===0,children:s(`TP/SL`)}),(0,g.jsx)(l,{scale:`xs`,variant:`secondary`,onClick:()=>i(e),disabled:m||!Number.isFinite(e.positionAmt)||e.positionAmt===0,isLoading:m,children:s(`Close`)})]})]})},F=({tab:e,onTabChange:n,positions:r,openOrders:i,tradeHistory:a=[],transactionHistory:s=[],onShareTrade:u,useMarkPriceForSymbol:d,computeLiqPrice:f,onClosePosition:h,onEditTpSl:C,onCancelOrder:w,closingSymbol:F=null,cancellingOrderId:I=null,t:L=N})=>{let R=t(),z=[`positions`,`orders`,`history`,`trades`,`transactions`];return(0,g.jsxs)(_,{children:[(0,g.jsxs)(m,{activeIndex:z.indexOf(e),onItemClick:e=>n(z[e]),children:[(0,g.jsxs)(p,{children:[L(`Positions`),` (`,r.length,`)`]}),(0,g.jsxs)(p,{children:[L(`Open Orders`),` (`,i.length,`)`]}),(0,g.jsx)(p,{children:L(`Order History`)}),(0,g.jsxs)(p,{children:[L(`Trade History`),` (`,a.length,`)`]}),(0,g.jsxs)(p,{children:[L(`Transaction History`),` (`,s.length,`)`]})]}),(0,g.jsxs)(v,{children:[e===`positions`&&(r.length===0?(0,g.jsx)(y,{children:(0,g.jsx)(o,{fontSize:`12px`,color:`textSubtle`,children:L(`No open positions`)})}):(0,g.jsxs)(b,{children:[(0,g.jsx)(j,{children:L(`Symbol`)}),(0,g.jsx)(j,{children:L(`Size`)}),(0,g.jsx)(j,{children:L(`Entry`)}),(0,g.jsx)(j,{children:L(`Mark`)}),(0,g.jsx)(j,{children:L(`Lev`)}),(0,g.jsx)(j,{children:L(`Liq`)}),(0,g.jsx)(j,{children:L(`uPnL`)}),(0,g.jsx)(j,{children:L(`TP/SL`)}),(0,g.jsx)(j,{}),r.map(e=>(0,g.jsx)(x,{children:(0,g.jsx)(P,{p:e,useMarkPriceForSymbol:d,computeLiqPrice:f,onClose:h,onEditTpSl:C,closingSymbol:F,t:L})},e.id))]})),e===`orders`&&(i.length===0?(0,g.jsx)(y,{children:(0,g.jsx)(o,{fontSize:`12px`,color:`textSubtle`,children:L(`No open orders`)})}):(0,g.jsxs)(T,{children:[(0,g.jsx)(j,{children:L(`Symbol`)}),(0,g.jsx)(j,{children:L(`Side`)}),(0,g.jsx)(j,{children:L(`Type`)}),(0,g.jsx)(j,{children:L(`Price`)}),(0,g.jsx)(j,{children:L(`Size`)}),(0,g.jsx)(j,{children:L(`Filled`)}),(0,g.jsx)(j,{children:L(`Status`)}),(0,g.jsx)(j,{}),i.map(e=>{let t=I===e.id;return(0,g.jsxs)(x,{children:[(0,g.jsx)(M,{bold:!0,children:e.symbol}),(0,g.jsx)(M,{style:{color:e.side===`BUY`?R.colors.success:R.colors.failure},children:e.side}),(0,g.jsx)(M,{children:e.type}),(0,g.jsx)(M,{children:e.price}),(0,g.jsx)(M,{children:e.origQty}),(0,g.jsx)(M,{children:e.executedQty}),(0,g.jsx)(M,{children:e.status}),(0,g.jsx)(S,{children:(0,g.jsx)(l,{scale:`xs`,variant:`secondary`,disabled:t,isLoading:t,onClick:()=>w(e),children:L(`Cancel`)})})]},e.id)})]})),e===`history`&&(0,g.jsx)(y,{children:(0,g.jsx)(o,{fontSize:`12px`,color:`textSubtle`,children:L(`Order history coming soon`)})}),e===`trades`&&(a.length===0?(0,g.jsx)(y,{children:(0,g.jsx)(o,{fontSize:`12px`,color:`textSubtle`,children:L(`No trades yet`)})}):(0,g.jsxs)(E,{children:[(0,g.jsx)(j,{children:L(`Time`)}),(0,g.jsx)(j,{children:L(`Symbol`)}),(0,g.jsx)(j,{children:L(`Price`)}),(0,g.jsx)(j,{children:L(`Quantity`)}),(0,g.jsx)(j,{children:L(`Fee`)}),(0,g.jsx)(j,{children:L(`Realized profit`)}),a.map(e=>{let t=e.side===`BUY`?R.colors.success:R.colors.failure,n=e.realizedProfit.startsWith(`+`);return(0,g.jsxs)(x,{children:[(0,g.jsx)(M,{as:`div`,children:(0,g.jsxs)(O,{children:[(0,g.jsx)(`span`,{children:e.date}),(0,g.jsx)(`span`,{children:e.time})]})}),(0,g.jsx)(M,{as:`div`,children:(0,g.jsxs)(k,{children:[(0,g.jsx)(`span`,{children:e.symbol}),(0,g.jsx)(`span`,{style:{color:t,fontSize:12},children:e.side===`BUY`?L(`Buy`):L(`Sell`)})]})}),(0,g.jsx)(M,{children:e.price}),(0,g.jsx)(M,{children:e.quantity}),(0,g.jsx)(M,{children:e.fee}),(0,g.jsx)(M,{as:`div`,children:(0,g.jsxs)(c,{alignItems:`center`,style:{gap:8},children:[(0,g.jsx)(`span`,{style:{color:n?R.colors.success:R.colors.failure},children:e.realizedProfit}),u&&(0,g.jsx)(A,{type:`button`,onClick:()=>u(e),"aria-label":L(`Share trade`),children:(0,g.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,g.jsx)(`path`,{d:`M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]})})]},e.id)})]})),e===`transactions`&&(s.length===0?(0,g.jsx)(y,{children:(0,g.jsx)(o,{fontSize:`12px`,color:`textSubtle`,children:L(`No transactions yet`)})}):(0,g.jsxs)(D,{children:[(0,g.jsx)(j,{children:L(`Time`)}),(0,g.jsx)(j,{children:L(`Type`)}),(0,g.jsx)(j,{children:L(`Amount`)}),(0,g.jsx)(j,{children:L(`Symbol`)}),s.map(e=>(0,g.jsxs)(x,{children:[(0,g.jsx)(M,{as:`div`,children:(0,g.jsxs)(O,{children:[(0,g.jsx)(`span`,{children:e.date}),(0,g.jsx)(`span`,{children:e.time})]})}),(0,g.jsx)(M,{children:e.type}),(0,g.jsx)(M,{children:e.amount}),(0,g.jsx)(M,{children:e.symbol})]},e.id))]}))]})]})},F.__docgenInfo={description:`Bottom-panel tabs: Positions / Open Orders / History. Stateless apart
from tab view-state, which is controlled by the consumer (so it
survives remount / route changes if the consumer persists it).

Per-row business actions (Close / Cancel / TP+SL editor) fire
callbacks — consumer owns the signed API calls + toast + modal. The
widget just renders.`,methods:[],displayName:`PositionsPanel`,props:{tab:{required:!0,tsType:{name:`union`,raw:`| 'positions'
| 'orders'
| 'history'
| 'trades'
| 'transactions'`,elements:[{name:`literal`,value:`'positions'`},{name:`literal`,value:`'orders'`},{name:`literal`,value:`'history'`},{name:`literal`,value:`'trades'`},{name:`literal`,value:`'transactions'`}]},description:`Controlled active tab.`},onTabChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tab: PositionsPanelTab) => void`,signature:{arguments:[{type:{name:`union`,raw:`| 'positions'
| 'orders'
| 'history'
| 'trades'
| 'transactions'`,elements:[{name:`literal`,value:`'positions'`},{name:`literal`,value:`'orders'`},{name:`literal`,value:`'history'`},{name:`literal`,value:`'trades'`},{name:`literal`,value:`'transactions'`}]},name:`tab`}],return:{name:`void`}}},description:``},positions:{required:!0,tsType:{name:`Array`,elements:[{name:`PositionRow`}],raw:`PositionRow[]`},description:``},openOrders:{required:!0,tsType:{name:`Array`,elements:[{name:`OpenOrderRow`}],raw:`OpenOrderRow[]`},description:``},tradeHistory:{required:!1,tsType:{name:`Array`,elements:[{name:`TradeHistoryRow`}],raw:`TradeHistoryRow[]`},description:`Fills the user has executed (settled trades).`,defaultValue:{value:`[]`,computed:!1}},transactionHistory:{required:!1,tsType:{name:`Array`,elements:[{name:`TransactionHistoryRow`}],raw:`TransactionHistoryRow[]`},description:`Account ledger entries — funding, realized PnL, deposits, etc.`,defaultValue:{value:`[]`,computed:!1}},onShareTrade:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(trade: TradeHistoryRow) => void`,signature:{arguments:[{type:{name:`TradeHistoryRow`},name:`trade`}],return:{name:`void`}}},description:`Share-to-social callback for a trade row (optional).`},useMarkPriceForSymbol:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(symbol: string) => number | undefined`,signature:{arguments:[{type:{name:`string`},name:`symbol`}],return:{name:`union`,raw:`number | undefined`,elements:[{name:`number`},{name:`undefined`}]}}},description:`Hook-like function called inside each position row to get the live
mark price for that symbol. MUST obey the rules of hooks (always
called at the top of the row component). Consumer typically passes
their \`useMarkPrice\` hook from the market-data layer. Return
\`undefined\` if the mark isn't available yet.`},computeLiqPrice:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(args: {
  side: 'BUY' | 'SELL'
  entryPrice: number
  leverage: number
}) => number | undefined`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  side: 'BUY' | 'SELL'
  entryPrice: number
  leverage: number
}`,signature:{properties:[{key:`side`,value:{name:`union`,raw:`'BUY' | 'SELL'`,elements:[{name:`literal`,value:`'BUY'`},{name:`literal`,value:`'SELL'`}],required:!0}},{key:`entryPrice`,value:{name:`number`,required:!0}},{key:`leverage`,value:{name:`number`,required:!0}}]}},name:`args`}],return:{name:`union`,raw:`number | undefined`,elements:[{name:`number`},{name:`undefined`}]}}},description:`Pure function (not a hook) that estimates the liquidation price
for a position. Consumer provides its math implementation —
frontend uses \`estimateLiquidationPrice({ side, entryPrice,
leverage })\` from its lib.`},onClosePosition:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(position: PositionRow) => void`,signature:{arguments:[{type:{name:`PositionRow`},name:`position`}],return:{name:`void`}}},description:`Close the full position.`},onEditTpSl:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(position: PositionRow, markPrice: number) => void`,signature:{arguments:[{type:{name:`PositionRow`},name:`position`},{type:{name:`number`},name:`markPrice`}],return:{name:`void`}}},description:`Open the TP/SL editor for this position (consumer manages the modal).`},onCancelOrder:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(order: OpenOrderRow) => void`,signature:{arguments:[{type:{name:`OpenOrderRow`},name:`order`}],return:{name:`void`}}},description:`Cancel an individual resting order.`},closingSymbol:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`Symbol whose Close button is currently in-flight — disables the
row's close button + shows a spinner. Passed separately from the
rows so the consumer can track it without remapping positions.`,defaultValue:{value:`null`,computed:!1}},cancellingOrderId:{required:!1,tsType:{name:`union`,raw:`OpenOrderRow['id'] | null`,elements:[{name:`OpenOrderRow['id']`,raw:`OpenOrderRow['id']`},{name:`null`}]},description:`\`id\` of the open order whose Cancel button is in-flight. The matching
row's button shows a spinner and is disabled until the consumer
clears this back to \`null\`. Same pattern as {@link closingSymbol}
but scoped per-row (not per-symbol), so cancels for two orders on
the same symbol stay independent.`,defaultValue:{value:`null`,computed:!1}},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => string`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(s: string) => s`,computed:!1}}}}}));export{I as n,F as t};