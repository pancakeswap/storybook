import{n as e}from"./chunk-zsgVPwQN.js";import{Nt as t,jt as n,kt as r,nt as i,rt as a,sn as o}from"./iframe-BH0EN6Jm.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e((()=>{o(),n(),i(),s=r(),c=t.div`
  display: flex;
  width: 1058px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  border-top: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-right: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-bottom: 2px solid ${({theme:e})=>e.colors.cardBorder};
  border-left: 1px solid ${({theme:e})=>e.colors.cardBorder};
  background: ${({theme:e})=>e.colors.card};
  font-variant-numeric: tabular-nums;
`,l=t.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  color: ${({theme:e})=>e.colors.text};
  text-align: left;
`,u=t.span`
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: #f7931a;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
`,d=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f=t.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,p=t.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,m=t.span`
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.textSubtle};
  color: ${({theme:e})=>e.colors.invertedContrast};
  font-size: 12px;
  letter-spacing: 0.12px;
`,h=t.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,g=t.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.text};
`,_=t.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({theme:e,$positive:t})=>t?`color-mix(in srgb, ${e.colors.success} 18%, transparent)`:`color-mix(in srgb, ${e.colors.failure} 18%, transparent)`};
  font-size: 16px;
  color: ${({theme:e})=>e.colors.text};
`,v=t(a)`
  align-items: center;
  gap: 24px;
  height: 56px;
`,y=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,b=t.span`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.textSubtle};
`,x=t.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,S=()=>(0,s.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`currentColor`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{d:`M6 2l5 8H1z`})}),C=()=>(0,s.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`currentColor`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{d:`M6 10L1 2h10z`})}),w=({baseAsset:e,pair:t,price:n,pricePnlPct:r,volume24h:i,openInterest:a,fundingRate:o,nextFunding:w,onSymbolClick:T})=>{let E=r>=0;return(0,s.jsxs)(c,{children:[(0,s.jsxs)(l,{type:`button`,onClick:T,disabled:!T,"aria-label":`Change market · ${t}`,children:[(0,s.jsx)(u,{children:e}),(0,s.jsxs)(d,{children:[(0,s.jsxs)(f,{children:[(0,s.jsx)(p,{children:t}),(0,s.jsx)(m,{children:`Perp`})]}),(0,s.jsxs)(h,{children:[(0,s.jsx)(g,{children:n}),(0,s.jsxs)(_,{$positive:E,children:[E?(0,s.jsx)(S,{}):(0,s.jsx)(C,{}),r.toFixed(2),`%`]})]})]})]}),(0,s.jsxs)(v,{children:[(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{children:`24h Volume`}),(0,s.jsx)(x,{children:i})]}),(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{children:`Open Interest`}),(0,s.jsx)(x,{children:a})]}),(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{children:`Funding Rate`}),(0,s.jsx)(x,{children:o})]}),(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{children:`Next Funding`}),(0,s.jsx)(x,{children:w})]})]})]})},w.__docgenInfo={description:``,methods:[],displayName:`SimpleTickerCard`,props:{baseAsset:{required:!0,tsType:{name:`string`},description:``},pair:{required:!0,tsType:{name:`string`},description:``},price:{required:!0,tsType:{name:`string`},description:``},pricePnlPct:{required:!0,tsType:{name:`number`},description:``},volume24h:{required:!0,tsType:{name:`string`},description:``},openInterest:{required:!0,tsType:{name:`string`},description:``},fundingRate:{required:!0,tsType:{name:`string`},description:``},nextFunding:{required:!0,tsType:{name:`string`},description:``},onSymbolClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}}));export{T as n,w as t};