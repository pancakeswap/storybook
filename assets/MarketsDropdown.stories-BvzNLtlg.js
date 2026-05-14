import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,t as a}from"./MarketsDropdown-DHYEUEVb.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(r(),1),i(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Widgets/Markets Dropdown 🆕`,component:a,parameters:{layout:`centered`},decorators:[e=>(0,s.jsx)(`div`,{style:{width:560},children:(0,s.jsx)(e,{})})],args:{markets:[{symbol:`BTCUSDT`,lastPrice:`84185.5`,priceChangePercent:`-0.52`,quoteVolume:`19401160`,maxLeverage:125},{symbol:`ETHUSDT`,lastPrice:`3245.8`,priceChangePercent:`1.04`,quoteVolume:`9831422`,maxLeverage:100},{symbol:`SOLUSDT`,lastPrice:`182.35`,priceChangePercent:`3.14`,quoteVolume:`4120999`,maxLeverage:75},{symbol:`BNBUSDT`,lastPrice:`608.1`,priceChangePercent:`-0.18`,quoteVolume:`2810500`,maxLeverage:75},{symbol:`XRPUSDT`,lastPrice:`2.412`,priceChangePercent:`5.67`,quoteVolume:`1920345`,maxLeverage:50},{symbol:`DOGEUSDT`,lastPrice:`0.1821`,priceChangePercent:`-2.33`,quoteVolume:`1128870`,maxLeverage:50},{symbol:`AVAXUSDT`,lastPrice:`41.27`,priceChangePercent:`0.44`,quoteVolume:`740120`,maxLeverage:25}],favorites:[],onSelect:c(),onToggleFavorite:c()}},u={},d={args:{favorites:[`BTCUSDT`,`ETHUSDT`]}},f={args:{markets:[],isLoading:!0}},p={args:{markets:[]}},m={render:e=>{let[t,n]=(0,o.useState)([`BTCUSDT`]),[r,i]=(0,o.useState)(`BTCUSDT`);return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{style:{marginBottom:12,fontSize:14},children:[`Selected: `,r]}),(0,s.jsx)(a,{...e,favorites:t,onSelect:i,onToggleFavorite:e=>n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    favorites: ['BTCUSDT', 'ETHUSDT']
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    markets: [],
    isLoading: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    markets: []
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [favorites, setFavorites] = useState<string[]>(['BTCUSDT']);
    const [selected, setSelected] = useState('BTCUSDT');
    return <div>
        <div style={{
        marginBottom: 12,
        fontSize: 14
      }}>Selected: {selected}</div>
        <MarketsDropdown {...args} favorites={favorites} onSelect={setSelected} onToggleFavorite={sym => setFavorites(prev => prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym])} />
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Interactive — favorites + selection maintained locally.`,...m.parameters?.docs?.description}}},h=[`Default`,`WithFavorites`,`Loading`,`Empty`,`Interactive`]}))();export{u as Default,p as Empty,m as Interactive,f as Loading,d as WithFavorites,h as __namedExportsOrder,l as default};