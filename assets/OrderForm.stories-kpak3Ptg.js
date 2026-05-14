import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,t as a}from"./OrderForm-Bt-sXBHj.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{o=t(r(),1),i(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={side:`BUY`,leverage:25,marginMode:`CROSS`,sizeUnit:`BASE`,quantity:``,price:``,reduceOnly:!1,tpSlEnabled:!1,takeProfitPrice:``,stopLossPrice:``,timeInForce:`GTC`,stopPrice:``,stopPriceSource:`LAST`},u={title:`Widgets/Order Form 🆕`,component:a,parameters:{layout:`centered`},decorators:[e=>(0,s.jsx)(`div`,{style:{width:320},children:(0,s.jsx)(e,{})})],args:{symbol:`BTCUSDT`,baseAsset:`BTC`,quoteAsset:`USDT`,draft:l,onDraftChange:c(),typeKey:`market`,onTypeKeyChange:c(),availableBalanceText:`1234.56`,preview:{cost:`15.65 USDT`,liq:`75100 USDT`},feeText:`0.02% / 0.05%`,sizePercent:0,onSizePercentChange:c(),cta:`Buy / Long`,canSubmit:!0,onSubmit:c(),onLeverageClick:c(),onMarginModeToggle:c(),onDepositClick:c(),authReady:!0,hasAddress:!0}},d={},f={args:{typeKey:`limit`,draft:{...l,price:`78250`}}},p={args:{typeKey:`stop-limit`,draft:{...l,stopPrice:`76000`,price:`75800`,quantity:`0.05`,stopPriceSource:`LAST`,timeInForce:`GTC`},preview:{cost:`15.18 USDT`,liq:`—`},sizePercent:12}},m={args:{typeKey:`stop-market`,draft:{...l,side:`SELL`,stopPrice:`74500`,quantity:`0.05`,stopPriceSource:`MARK`},cta:`Sell / Short`,preview:{cost:`14.90 USDT`,liq:`—`},sizePercent:12}},h={args:{draft:{...l,side:`SELL`},cta:`Sell / Short`}},g={args:{isSubmitting:!0,cta:`Submitting...`,canSubmit:!1}},_={args:{hasAddress:!1,authReady:!1,cta:`Connect Wallet`,canSubmit:!1}},v={render:e=>{let[t,n]=(0,o.useState)(l),[r,i]=(0,o.useState)(`market`),[c,u]=(0,o.useState)(0);return(0,s.jsx)(a,{...e,draft:t,onDraftChange:n,typeKey:r,onTypeKeyChange:i,sizePercent:c,onSizePercentChange:u})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    typeKey: 'limit',
    draft: {
      ...seedDraft,
      price: '78250'
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    typeKey: 'stop-limit',
    draft: {
      ...seedDraft,
      stopPrice: '76000',
      price: '75800',
      quantity: '0.05',
      stopPriceSource: 'LAST',
      timeInForce: 'GTC'
    },
    preview: {
      cost: '15.18 USDT',
      liq: '—'
    },
    sizePercent: 12
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    typeKey: 'stop-market',
    draft: {
      ...seedDraft,
      side: 'SELL',
      stopPrice: '74500',
      quantity: '0.05',
      stopPriceSource: 'MARK'
    },
    cta: 'Sell / Short',
    preview: {
      cost: '14.90 USDT',
      liq: '—'
    },
    sizePercent: 12
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    draft: {
      ...seedDraft,
      side: 'SELL'
    },
    cta: 'Sell / Short'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isSubmitting: true,
    cta: 'Submitting...',
    canSubmit: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    hasAddress: false,
    authReady: false,
    cta: 'Connect Wallet',
    canSubmit: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [draft, setDraft] = useState<OrderFormDraft>(seedDraft);
    const [typeKey, setTypeKey] = useState<OrderTypeKey>('market');
    const [sizePercent, setSizePercent] = useState(0);
    return <OrderForm {...args} draft={draft} onDraftChange={setDraft} typeKey={typeKey} onTypeKeyChange={setTypeKey} sizePercent={sizePercent} onSizePercentChange={setSizePercent} />;
  }
}`,...v.parameters?.docs?.source},description:{story:`Interactive — full draft state managed locally.`,...v.parameters?.docs?.description}}},y=[`Market`,`Limit`,`StopLimitFilled`,`StopMarketFilled`,`Selling`,`Submitting`,`ConnectWallet`,`Interactive`]}))();export{_ as ConnectWallet,v as Interactive,f as Limit,d as Market,h as Selling,p as StopLimitFilled,m as StopMarketFilled,g as Submitting,y as __namedExportsOrder,u as default};