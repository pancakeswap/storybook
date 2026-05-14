import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,jt as r,kt as i,sn as a}from"./iframe-BH0EN6Jm.js";import{n as o,t as s}from"./TokenizedAssetsList-BNo9sHQg.js";import{n as c,t as l}from"./TokenizedAssetsChartPanel-B2k8AV0n.js";import{n as u,t as d}from"./TokenizedAssetsTradePanel-BdQdhZ57.js";function f({chartOff:e=!1}={}){let[t,n]=(0,p.useState)(`nvda`),[r,i]=(0,p.useState)([]),[a,o]=(0,p.useState)(``),[c,u]=(0,p.useState)([`Stocks`]),[f,F]=(0,p.useState)(`swap`),[I,L]=(0,p.useState)(``),[R,z]=(0,p.useState)(``),[B,V]=(0,p.useState)(`5m`),H=(0,p.useMemo)(()=>N.find(e=>e.id===t)??N[0],[t]),U=(0,p.useMemo)(()=>{let e=a.trim().toLowerCase();return e?N.filter(t=>t.name.toLowerCase().includes(e)||t.ticker.toLowerCase().includes(e)):N},[a]),W=e=>i(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),G=e=>u(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,m.jsxs)(h,{"aria-label":`Tokenized assets`,children:[(0,m.jsxs)(g,{children:[(0,m.jsxs)(_,{children:[(0,m.jsx)(v,{"aria-hidden":!0,children:`🐰`}),`PancakeSwap`]}),(0,m.jsx)(y,{}),(0,m.jsxs)(b,{children:[(0,m.jsx)(x,{"aria-hidden":!0,children:`🦊`}),`$1,098.99`]}),(0,m.jsxs)(b,{children:[(0,m.jsx)(x,{"aria-hidden":!0,children:`🦊`}),`0x40cf…5461`]})]}),(0,m.jsxs)(S,{children:[(0,m.jsxs)(C,{children:[(0,m.jsxs)(w,{children:[(0,m.jsx)(T,{children:`Tokenized assets`}),(0,m.jsx)(E,{children:`Trade real-world assets on-chain`})]}),(0,m.jsxs)(D,{children:[(0,m.jsxs)(O,{children:[N.length,` assets`,(0,m.jsx)(k,{"aria-hidden":!0}),`BNB Chain`]}),(0,m.jsxs)(A,{role:`status`,children:[(0,m.jsx)(j,{"aria-hidden":!0}),`Markets open`]})]})]}),(0,m.jsxs)(M,{$chartOff:e,children:[(0,m.jsx)(s,{assets:U,selectedAssetId:H.id,onAssetSelect:n,favorites:r,onToggleFavorite:W,searchQuery:a,onSearchChange:o,filters:P,activeFilters:c,onFilterToggle:G}),!e&&(0,m.jsx)(l,{name:H.name.toUpperCase(),ticker:H.ticker,metaLabel:`$5.7T MC`,iconColor:H.iconColor,iconInitials:H.iconInitials,price:H.price,priceDelta:H.changePct>=0?`+$8.82`:`-$3.21`,priceDeltaPct:`(${H.changePct>=0?`+`:``}${H.changePct.toFixed(2)}%)`,isPositive:H.changePct>=0,timeframe:B,onTimeframeChange:V}),(0,m.jsx)(d,{mode:f,onModeChange:F,pay:{symbol:`BNB`,iconColor:`#F0B90B`,balance:`0.00`,usdValue:`$0.00`},payAmount:I,onPayAmountChange:L,receive:{symbol:H.ticker,iconColor:H.iconColor,iconInitials:H.iconInitials,balance:`0.00`,usdValue:`$0.00`},receiveAmount:R,onReceiveAmountChange:z,slippage:`0.5`,rateLabel:`1 BNB = 326.01 ${H.ticker}`,offHoursWarning:!0,ctaLabel:`Connect Wallet`,ctaDisabled:!1})]})]})]})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{p=t(a(),1),r(),o(),c(),u(),m=i(),h=n.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.background};
  font-family: 'Kanit', sans-serif;
  color: ${({theme:e})=>e.colors.text};
`,g=n.header`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 0 24px;
  background: ${({theme:e})=>e.colors.card};
  border-bottom: 1px solid ${({theme:e})=>e.colors.cardBorder};
  flex-shrink: 0;
`,_=n.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.text};
`,v=n.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: linear-gradient(135deg, #d1884f 0%, #f8c5a3 100%);
  font-size: 14px;
`,y=n.div`
  flex: 1;
`,b=n.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 4px 12px 4px 4px;
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,x=n.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff8866 0%, #ffd166 100%);
  font-size: 12px;
`,S=n.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
  padding: 32px 24px 48px;
`,C=n.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,w=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,T=n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.secondary};
`,E=n.h1`
  margin: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,D=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 4px;
`,O=n.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.textSubtle};
`,k=n.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.textSubtle};
`,A=n.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(49, 208, 170, 0.10);
  border: 1px solid rgba(49, 208, 170, 0.40);
  color: ${({theme:e})=>e.colors.success};
  font-size: 14px;
  font-weight: 600;
`,j=n.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.success};
  box-shadow: 0 0 0 3px rgba(49, 208, 170, 0.25);
`,M=n.div`
  display: grid;
  grid-template-columns: ${({$chartOff:e})=>e?`338px 480px`:`338px 468px 480px`};
  gap: 16px;
  justify-content: ${({$chartOff:e})=>e?`center`:`start`};
  align-items: start;
`,N=[{id:`nvda`,name:`Nvidia corp`,ticker:`NVDAx`,price:`$235.31`,changePct:3.89,iconColor:`#76B900`,iconInitials:`N`},{id:`googl`,name:`Alphabet Inc`,ticker:`GOOGLx`,price:`$399.88`,changePct:-.46,iconColor:`#4285F4`,iconInitials:`G`},{id:`aapl`,name:`Apple Inc`,ticker:`AAPLx`,price:`$298.39`,changePct:-.37,iconColor:`#1D1D1F`,iconInitials:``},{id:`msft`,name:`Microsoft Corp`,ticker:`MSFTx`,price:`$408.89`,changePct:.92,iconColor:`#00A4EF`,iconInitials:`M`},{id:`amzn`,name:`Amazon.com Inc`,ticker:`AMZNx`,price:`$408.89`,changePct:.92,iconColor:`#FF9900`,iconInitials:`a`},{id:`tsl`,name:`Tesla Inc`,ticker:`TSLx`,price:`$408.89`,changePct:.92,iconColor:`#E31937`,iconInitials:`T`},{id:`wbtc`,name:`WBTC`,ticker:`WBTC`,price:`$108,408`,changePct:.92,iconColor:`#F7931A`,iconInitials:`₿`}],P=[`Stocks`,`Crypto`,`ETFs`],f.__docgenInfo={description:``,methods:[],displayName:`TokenizedAssetsPage`}})),I,L,R,z;e((()=>{F(),I={title:`Apps/Tokenized Assets`,component:f,parameters:{layout:`fullscreen`}},L={args:{chartOff:!1}},R={args:{chartOff:!0}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    chartOff: false
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    chartOff: true
  }
}`,...R.parameters?.docs?.source}}},z=[`ChartOn`,`ChartOff`]}))();export{R as ChartOff,L as ChartOn,z as __namedExportsOrder,I as default};