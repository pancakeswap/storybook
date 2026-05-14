import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,t as a}from"./OrderBook-DnExu7TN.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{o=t(r(),1),i(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l=78500,u=.1,d={title:`Widgets/Order Book 🆕`,component:a,parameters:{layout:`centered`},decorators:[e=>(0,s.jsx)(`div`,{style:{width:340,height:620,display:`flex`},children:(0,s.jsx)(e,{})})],args:{asks:Array.from({length:20},(e,t)=>{let n=l+(t+1)*u*5,r=.05+t*31%120/1e3;return[n.toFixed(1),r.toFixed(3)]}),bids:Array.from({length:20},(e,t)=>{let n=l-(t+1)*u*5,r=.05+t*47%150/1e3;return[n.toFixed(1),r.toFixed(3)]}),baseAsset:`BTC`,quoteAsset:`USDT`,tickSize:.1,pricePrecision:1,lastPrice:78500,view:`both`,priceStep:`0.1`,sizeUnit:`BASE`,onViewChange:c(),onPriceStepChange:c(),onSizeUnitChange:c()}},f={},p={args:{view:`bids`}},m={args:{view:`asks`}},h={args:{sizeUnit:`QUOTE`}},g={render:e=>{let[t,n]=(0,o.useState)(`both`),[r,i]=(0,o.useState)(`0.1`),[c,l]=(0,o.useState)(`BASE`);return(0,s.jsx)(a,{...e,view:t,onViewChange:n,priceStep:r,onPriceStepChange:i,sizeUnit:c,onSizeUnitChange:l})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'bids'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'asks'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    sizeUnit: 'QUOTE'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [view, setView] = useState<OrderBookView>('both');
    const [priceStep, setPriceStep] = useState('0.1');
    const [sizeUnit, setSizeUnit] = useState<OrderBookSizeUnit>('BASE');
    return <OrderBook {...args} view={view} onViewChange={setView} priceStep={priceStep} onPriceStepChange={setPriceStep} sizeUnit={sizeUnit} onSizeUnitChange={setSizeUnit} />;
  }
}`,...g.parameters?.docs?.source},description:{story:`Interactive — view / step / size-unit persisted locally.`,...g.parameters?.docs?.description}}},_=[`Both`,`BidsOnly`,`AsksOnly`,`QuoteSize`,`Interactive`]}))();export{m as AsksOnly,p as BidsOnly,f as Both,g as Interactive,h as QuoteSize,_ as __namedExportsOrder,d as default};