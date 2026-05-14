import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,t as a}from"./MarketsDropdown-DHYEUEVb.js";import{n as o,t as s}from"./SymbolHeader-DEfNV2uK.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{c=t(r(),1),i(),o(),l=n(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=[{symbol:`BTCUSDT`,lastPrice:`84185.5`,priceChangePercent:`-0.52`,quoteVolume:`19401160`},{symbol:`ETHUSDT`,lastPrice:`3245.8`,priceChangePercent:`1.04`,quoteVolume:`9831422`},{symbol:`SOLUSDT`,lastPrice:`182.35`,priceChangePercent:`3.14`,quoteVolume:`4120999`},{symbol:`BNBUSDT`,lastPrice:`608.1`,priceChangePercent:`-0.18`,quoteVolume:`2810500`}],f={title:`Widgets/Symbol Header 🆕`,component:s,parameters:{layout:`fullscreen`},args:{symbol:`BTCUSDT`,pairLabel:`BTC - USDT`,leverage:25,lastPrice:`84185.5`,markPrice:`84190.1`,indexPrice:`84188.4`,fundingRate:`0.00009`,nextFundingTime:Date.now()+342e4,change24h:`-0.52`,volume24h:`1940116000`,onToggleFavorite:u()}},p={},m={args:{favorited:!0}},h={args:{change24h:`3.17`,fundingRate:`0.0001`}},g={render:e=>{let[t,n]=(0,c.useState)([`BTCUSDT`]);return(0,l.jsx)(s,{...e,renderMarketsDropdown:e=>(0,l.jsx)(a,{markets:d,favorites:t,onToggleFavorite:e=>n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),onSelect:t=>{console.log(`selected`,t),e()}})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    favorited: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    change24h: '3.17',
    fundingRate: '0.0001'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [favorites, setFavorites] = useState<string[]>(['BTCUSDT']);
    return <SymbolHeader {...args} renderMarketsDropdown={close => <MarketsDropdown markets={MOCK_MARKETS} favorites={favorites} onToggleFavorite={sym => setFavorites(prev => prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym])} onSelect={sym => {
      // eslint-disable-next-line no-console
      console.log('selected', sym);
      close();
    }} />} />;
  }
}`,...g.parameters?.docs?.source},description:{story:`Interactive — pair pill opens the markets dropdown (click the pill).`,...g.parameters?.docs?.description}}},_=[`Default`,`Favorited`,`PositiveChange`,`WithDropdown`]}))();export{p as Default,m as Favorited,h as PositiveChange,g as WithDropdown,_ as __namedExportsOrder,f as default};