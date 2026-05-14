import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{G as n,Nt as r,jt as i,kt as a,m as o,nt as s,rt as c,sn as l,tt as u}from"./iframe-BH0EN6Jm.js";import{t as d}from"./Text-BRDHz0kF.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=e((()=>{f=t(l(),1),i(),s(),d(),u(),p=a(),m=r.div`
  width: 100%;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  height: 50vh;
  max-height: 50vh;
  display: flex;
  flex-direction: column;

  /* On mobile viewports the dropdown takes over the screen as a
   * full-page action sheet — same behaviour as the symbol-pill on
   * MobilePerpsPage, but applied directly to the widget so it works
   * when used standalone too. */
  @media (max-width: 767px) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    z-index: 200;
    padding: 12px 12px 16px;
  }
`,h=r(c)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.cardBorder};
`,g=r.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({$active:e,theme:t})=>e?t.colors.primary:`transparent`};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({$active:e,theme:t})=>e?t.colors.secondary:t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,_=r.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({theme:e})=>e.colors.input};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`,v=r.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  &::placeholder {
    color: ${({theme:e})=>e.colors.textSubtle};
  }
`,y=r.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textSubtle};
  border-bottom: 1px solid ${({theme:e})=>e.colors.cardBorder};
`,b=r.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`,x=r.button`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding: 10px 8px;
  width: 100%;
  text-align: left;
  background: transparent;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  transition: background 0.12s;
  &:hover {
    background: ${({theme:e})=>e.colors.cardSecondary};
  }
`,S=r.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({$filled:e,theme:t})=>e?t.colors.warning:t.colors.textSubtle};
  &:hover {
    color: ${({theme:e})=>e.colors.warning};
  }
`,C=r(c)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`,w=r.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.tertiary};
  color: ${({theme:e})=>e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`,T=r.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.tertiary};
  color: ${({theme:e})=>e.colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
`,E=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,D=r(o)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({$tone:e,theme:t})=>e===`up`?t.colors.success:e===`down`?t.colors.failure:t.colors.text};
`,O=r(c)`
  padding: 24px;
  justify-content: center;
  color: ${({theme:e})=>e.colors.textSubtle};
`,k=({filled:e})=>(0,p.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:e?`currentColor`:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinejoin:`round`,strokeLinecap:`round`,"aria-hidden":`true`,children:(0,p.jsx)(`path`,{d:`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z`})}),A=e=>{if(!e)return`—`;let t=Number(e);return Number.isFinite(t)?t>=100?t.toLocaleString(`en-US`,{maximumFractionDigits:2}):t>=1?t.toFixed(3):t.toPrecision(4):`—`},j=e=>{if(!e)return`—`;let t=Number(e);return Number.isFinite(t)?`${t>=0?`+`:``}${t.toFixed(2)}%`:`—`},M=e=>{if(!e)return`—`;let t=Number(e);return Number.isFinite(t)?t.toLocaleString(`en-US`,{maximumFractionDigits:0}):`—`},N=e=>e.toUpperCase().replace(/USDT$/,``).replace(/USDC$/,``).replace(/USD$/,``)||e.toUpperCase(),P=e=>N(e).slice(0,1)||e.slice(0,1),F=e=>e,I=({markets:e,favorites:t,onToggleFavorite:r,onSelect:i,logoForSymbol:a,isLoading:s=!1,t:c=F})=>{let[l,u]=(0,f.useState)(`all`),[d,I]=(0,f.useState)(``),L=(0,f.useMemo)(()=>{let n=d.trim().toUpperCase(),r=n?e.filter(e=>e.symbol.toUpperCase().includes(n)):e;return l===`favorites`?r.filter(e=>t.includes(e.symbol)):r},[e,d,l,t]);return(0,p.jsxs)(m,{children:[(0,p.jsxs)(h,{children:[(0,p.jsx)(g,{$active:l===`all`,onClick:()=>u(`all`),children:c(`All Markets`)}),(0,p.jsx)(g,{$active:l===`favorites`,onClick:()=>u(`favorites`),children:c(`Favorites`)})]}),(0,p.jsxs)(_,{children:[(0,p.jsx)(n,{width:`16px`,color:`textSubtle`}),(0,p.jsx)(v,{placeholder:c(`All tokens`),value:d,onChange:e=>I(e.target.value),"aria-label":c(`Search markets`)})]}),(0,p.jsxs)(y,{children:[(0,p.jsx)(`span`,{}),(0,p.jsx)(`span`,{children:c(`Symbols`)}),(0,p.jsx)(D,{as:`span`,style:{color:`inherit`},children:c(`Last Price`)}),(0,p.jsx)(D,{as:`span`,style:{color:`inherit`},children:c(`24h Change`)}),(0,p.jsx)(D,{as:`span`,style:{color:`inherit`},children:c(`24h Vol`)})]}),(0,p.jsx)(b,{role:`listbox`,children:L.length===0?(0,p.jsx)(O,{children:(0,p.jsx)(o,{fontSize:`14px`,color:`textSubtle`,children:c(s?`Loading markets...`:`No markets`)})}):L.map(e=>{let n=t.includes(e.symbol),o=Number(e.priceChangePercent),s=a?.(N(e.symbol));return(0,p.jsxs)(x,{onClick:()=>i(e.symbol),role:`option`,children:[(0,p.jsx)(S,{$filled:n,onClick:t=>{t.stopPropagation(),r(e.symbol)},"aria-label":c(n?`Unfavorite`:`Favorite`),"aria-pressed":n,children:(0,p.jsx)(k,{filled:n})}),(0,p.jsxs)(C,{children:[(0,p.jsx)(T,{children:s?(0,p.jsx)(E,{src:s,alt:N(e.symbol),loading:`lazy`,onError:t=>{let n=t.currentTarget;n.style.display=`none`;let r=n.parentElement;r&&!r.textContent&&(r.textContent=P(e.symbol))}}):P(e.symbol)}),(0,p.jsx)(`span`,{children:e.symbol}),e.maxLeverage!=null&&(0,p.jsxs)(w,{children:[e.maxLeverage,`x`]})]}),(0,p.jsx)(D,{children:A(e.lastPrice)}),(0,p.jsx)(D,{$tone:o>=0?`up`:`down`,children:j(e.priceChangePercent)}),(0,p.jsx)(D,{children:M(e.quoteVolume)})]},e.symbol)})})]})},I.__docgenInfo={description:`Markets picker dropdown - tabs for All / Favorites, text search,
sorted table with live 24h stats. Stateless apart from the search
query and active tab (pure view-state).

Sort order: markets are rendered in the order the consumer provides.
Frontend sorts by 24h quote volume desc at the hook level - matches
Aster's default ordering. If you need a different order (e.g. stable
alpha for storybook stories), sort before passing in.`,methods:[],displayName:`MarketsDropdown`,props:{markets:{required:!0,tsType:{name:`Array`,elements:[{name:`MarketRow`}],raw:`MarketRow[]`},description:`Raw market rows from the consumer's ticker query.`},favorites:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Symbols the user has starred. Consumer persists across sessions.`},onToggleFavorite:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(symbol: string) => void`,signature:{arguments:[{type:{name:`string`},name:`symbol`}],return:{name:`void`}}},description:`Toggle callback — consumer flips the symbol in/out of its favorites set.`},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(symbol: string) => void`,signature:{arguments:[{type:{name:`string`},name:`symbol`}],return:{name:`void`}}},description:`Row click callback — consumer navigates to the selected market.`},logoForSymbol:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(baseAsset: string) => string | undefined`,signature:{arguments:[{type:{name:`string`},name:`baseAsset`}],return:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]}}},description:`Logo lookup by base asset (e.g. \`logoForSymbol('BTC') -> '...png'\`).
Return undefined when no logo is available; the widget falls back to
a single-letter glyph.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show a "Loading markets..." placeholder in the body when true.`,defaultValue:{value:`false`,computed:!1}},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => string`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(s: string) => s`,computed:!1}}}}}));export{L as n,I as t};