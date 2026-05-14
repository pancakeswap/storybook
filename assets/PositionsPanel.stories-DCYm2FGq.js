import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,t as a}from"./PositionsPanel-x0Q4NyPZ.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{o=t(r(),1),i(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l=[{id:`BTCUSDT-LONG`,symbol:`BTCUSDT`,positionAmt:.05,entryPrice:78250,leverage:25,unrealizedProfit:`42.15`,tpStopPrice:`80000`,slStopPrice:`77000`},{id:`ETHUSDT-SHORT`,symbol:`ETHUSDT`,positionAmt:-.8,entryPrice:3212,leverage:10,unrealizedProfit:`-18.40`}],u=[{id:101,orderId:101,symbol:`BTCUSDT`,side:`BUY`,type:`LIMIT`,price:`77800`,origQty:`0.01`,executedQty:`0`,status:`NEW`},{id:102,orderId:102,symbol:`ETHUSDT`,side:`SELL`,type:`STOP_MARKET`,price:`3250`,origQty:`0.5`,executedQty:`0`,status:`NEW`}],d=e=>e===`BTCUSDT`?78900:3180,f={title:`Widgets/Positions Panel 🆕`,component:a,parameters:{layout:`fullscreen`},args:{tab:`positions`,positions:l,openOrders:u,tradeHistory:[{id:`t1`,date:`2025-04-17`,time:`01:37:26`,symbol:`BTCUSDT`,side:`BUY`,price:`86,000`,quantity:`30 USDT`,fee:`0.0002 USDT`,realizedProfit:`+0.01 USDT`},{id:`t2`,date:`2025-04-17`,time:`01:37:26`,symbol:`BTCUSDT`,side:`BUY`,price:`86,000`,quantity:`30 USDT`,fee:`0.0002 USDT`,realizedProfit:`+0.01 USDT`},{id:`t3`,date:`2025-04-17`,time:`01:37:26`,symbol:`ETHUSDT`,side:`SELL`,price:`3,210`,quantity:`120 USDT`,fee:`0.0008 USDT`,realizedProfit:`-0.42 USDT`}],transactionHistory:[{id:`x1`,date:`2025-04-17`,time:`01:37:26`,type:`Realized PNL`,amount:`30 USDT`,symbol:`BTCUSDT`},{id:`x2`,date:`2025-04-17`,time:`01:37:26`,type:`Realized PNL`,amount:`30 USDT`,symbol:`BTCUSDT`},{id:`x3`,date:`2025-04-17`,time:`01:35:14`,type:`Funding`,amount:`-0.12 USDT`,symbol:`ETHUSDT`}],onTabChange:c(),onClosePosition:c(),onEditTpSl:c(),onCancelOrder:c(),onShareTrade:c(),useMarkPriceForSymbol:d,computeLiqPrice:({side:e,entryPrice:t,leverage:n})=>{let r=1/n-.005;return e===`BUY`?t*(1-r):t*(1+r)}}},p={},m={args:{tab:`orders`}},h={args:{tab:`history`}},g={args:{tab:`trades`}},_={args:{tab:`transactions`}},v={args:{positions:[]}},y={render:e=>{let[t,n]=(0,o.useState)(`positions`);return(0,s.jsx)(a,{...e,tab:t,onTabChange:n})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tab: 'orders'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tab: 'history'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tab: 'trades'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tab: 'transactions'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    positions: []
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState<PositionsPanelTab>('positions');
    return <PositionsPanel {...args} tab={tab} onTabChange={setTab} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`Interactive — tab state managed locally.`,...y.parameters?.docs?.description}}},b=[`Positions`,`OpenOrders`,`OrderHistory`,`TradeHistory`,`TransactionHistory`,`EmptyPositions`,`Interactive`]}))();export{v as EmptyPositions,y as Interactive,m as OpenOrders,h as OrderHistory,p as Positions,g as TradeHistory,_ as TransactionHistory,b as __namedExportsOrder,f as default};