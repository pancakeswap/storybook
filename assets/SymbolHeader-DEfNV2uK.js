import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{At as n,Et as r,Nt as i,j as a,jt as o,kt as s,m as c,nt as l,rt as u,sn as d,tt as f}from"./iframe-BH0EN6Jm.js";import{t as p}from"./Text-BRDHz0kF.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V=e((()=>{m=t(d(),1),h=t(r(),1),o(),l(),p(),f(),g=s(),_=i(u)`
  align-items: center;
  gap: 24px;
  padding: 12px;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  border-bottom: 2px solid ${({theme:e})=>e.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`,v=i(u)`
  align-items: center;
  gap: 8px;
  background: ${({theme:e})=>e.colors.input};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`,y=i.button`
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: inherit;
  font: inherit;
  transition: filter 0.12s;
  &:hover {
    filter: brightness(1.08);
  }
`,b=i.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`,x=i.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.warning};
  cursor: pointer;
  flex-shrink: 0;
`,S=i.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 800;
  font-size: 12px;
  flex-shrink: 0;
  background: ${({$bg:e,theme:t})=>e??t.colors.primary};
  overflow: hidden;
`,C=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,w=i(c)`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`,i.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.tertiary};
  color: ${({theme:e})=>e.colors.secondary};
  flex-shrink: 0;
`,T=i.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`,E=i(u)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`,D=i(u)`
  flex-direction: column;
  flex-shrink: 0;
`,O=i(c)`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({$dashed:e,theme:t})=>e?`border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;`:``}
`,k=i(c)`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`,A=i(u)`
  align-items: baseline;
  white-space: nowrap;
`,j=i.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({$negative:e,theme:t})=>e?t.colors.failure:t.colors.success};
`,M=i.span`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.textSubtle};
  padding: 0 2px;
`,N=(e,t=4)=>{if(!e)return`—`;let n=Number(e)*100;return Number.isFinite(n)?`${n>=0?`+`:``}${n.toFixed(t)}%`:`—`},P=(e,t=2)=>{if(!e)return`—`;let n=Number(e);return Number.isFinite(n)?`${n>=0?`+`:``}${n.toFixed(t)}%`:`—`},F=e=>{if(!e)return`—`;let t=Math.max(0,e-Date.now()),n=Math.floor(t/36e5),r=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3);return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`},I=e=>{if(!e)return`—`;let t=Number(e);return Number.isFinite(t)?`$${t.toLocaleString(`en-US`,{maximumFractionDigits:2})}`:`—`},L=e=>(e.split(/[- ]/)[0]??e).slice(0,1)||`?`,R=()=>(0,g.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`currentColor`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:(0,g.jsx)(`path`,{d:`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z`})}),z=e=>e,B=({symbol:e,pairLabel:t,logoUrl:r,leverage:i,lastPrice:o,markPrice:s,indexPrice:c,fundingRate:l,nextFundingTime:u,change24h:d,volume24h:f,favorited:p=!1,onToggleFavorite:B,renderMarketsDropdown:V,t:H=z})=>{let U=n(),[W,G]=(0,m.useState)(!1),[K,q]=(0,m.useState)(null),J=(0,m.useRef)(null),Y=(0,m.useRef)(null);(0,m.useLayoutEffect)(()=>{if(!W||!J.current)return;let e=()=>{let e=J.current.getBoundingClientRect();q({top:e.bottom+8,left:e.left})};return e(),window.addEventListener(`resize`,e),window.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`resize`,e),window.removeEventListener(`scroll`,e,!0)}},[W]),(0,m.useEffect)(()=>{if(!W)return;let e=e=>{let t=e.target;J.current?.contains(t)||Y.current?.contains(t)||G(!1)},t=e=>{e.key===`Escape`&&G(!1)};return window.addEventListener(`mousedown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`keydown`,t)}},[W]);let X=(0,m.useCallback)(()=>G(!1),[]),Z=Number(l)<0,Q=Number(d)<0;return(0,g.jsxs)(_,{"aria-label":`${e} ticker`,children:[(0,g.jsxs)(v,{children:[B&&(0,g.jsx)(x,{onClick:e=>{e.stopPropagation(),B()},"aria-label":H(p?`Unfavorite`:`Favorite`),"aria-pressed":p,children:(0,g.jsx)(R,{})}),(0,g.jsxs)(y,{ref:J,"aria-haspopup":`listbox`,"aria-expanded":W,disabled:!V,onClick:()=>V&&G(e=>!e),children:[(0,g.jsx)(S,{$bg:r?`transparent`:`linear-gradient(180deg, #F7931A, #E8850C)`,children:r?(0,g.jsx)(C,{src:r,alt:t}):L(t)}),(0,g.jsx)(w,{children:t}),(0,g.jsx)(a,{width:`16px`,color:`textSubtle`})]})]}),W&&K&&typeof document<`u`&&V?(0,h.createPortal)((0,g.jsx)(b,{ref:Y,style:{top:K.top,left:K.left},children:V(X)}),document.body):null,(0,g.jsx)(T,{"aria-label":`Last price: ${o??``}`,children:o??`—`}),(0,g.jsxs)(E,{role:`list`,children:[(0,g.jsxs)(D,{role:`listitem`,children:[(0,g.jsx)(O,{$dashed:!0,children:H(`Mark`)}),(0,g.jsx)(k,{children:s??`—`})]}),(0,g.jsxs)(D,{role:`listitem`,children:[(0,g.jsx)(O,{$dashed:!0,children:H(`Index`)}),(0,g.jsx)(k,{children:c??`—`})]}),(0,g.jsxs)(D,{role:`listitem`,children:[(0,g.jsx)(O,{$dashed:!0,children:H(`Funding / Countdown`)}),(0,g.jsxs)(A,{children:[(0,g.jsx)(j,{$negative:Z,children:N(l)}),(0,g.jsx)(M,{children:`/`}),(0,g.jsx)(k,{as:`span`,children:F(u)})]})]}),(0,g.jsxs)(D,{role:`listitem`,children:[(0,g.jsx)(O,{children:H(`24h Change`)}),(0,g.jsx)(k,{style:{color:d?Q?U.colors.failure:U.colors.success:void 0},children:P(d)})]}),(0,g.jsxs)(D,{role:`listitem`,children:[(0,g.jsx)(O,{children:H(`24h Volume (USDT)`)}),(0,g.jsx)(k,{children:I(f)})]})]})]})},B.__docgenInfo={description:`Top-of-terminal row — pair-pill selector, last price, and live stats
strip (Mark / Index / Funding / 24h Change / 24h Volume). Stateless
apart from the markets-dropdown open state (pure view-state).

The dropdown content is injected via \`renderMarketsDropdown\` so the
consumer's picker (hooked up to its own ticker query + navigation)
can drop in without the widget knowing about data sources. Portal
anchoring + outside-click / Escape dismissal stay here.`,methods:[],displayName:`SymbolHeader`,props:{symbol:{required:!0,tsType:{name:`string`},description:`Full venue symbol — used as React key + aria labels.`},pairLabel:{required:!0,tsType:{name:`string`},description:`Pre-formatted pair label for the pill, e.g. "BTC - USDT". Consumer
chooses the base/quote split (frontend preserves USDT / USDC / USD1
distinction rather than collapsing to "USD").`},logoUrl:{required:!1,tsType:{name:`string`},description:`Optional logo image URL. Widget falls back to a single-letter glyph
on missing / broken image.`},leverage:{required:!0,tsType:{name:`number`},description:`Current leverage — rendered as the small pill next to the price.`},lastPrice:{required:!1,tsType:{name:`string`},description:`Last traded price (unformatted).`},markPrice:{required:!1,tsType:{name:`string`},description:``},indexPrice:{required:!1,tsType:{name:`string`},description:``},fundingRate:{required:!1,tsType:{name:`string`},description:`Signed fraction funding rate (e.g. "0.0001" = 0.01%).`},nextFundingTime:{required:!1,tsType:{name:`number`},description:`Epoch ms of the next funding payment. Widget renders HH:MM:SS to it.`},change24h:{required:!1,tsType:{name:`string`},description:`Signed 24h change percent (e.g. "1.04" or "-0.52").`},volume24h:{required:!1,tsType:{name:`string`},description:`Raw 24h quote volume.`},favorited:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onToggleFavorite:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},renderMarketsDropdown:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(close: () => void) => React.ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},name:`close`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:`Render-prop for the markets picker that pops below the pair pill.
Called with a \`close\` callback the consumer's onSelect handler
can fire to dismiss the dropdown after the user picks a new symbol.
Omit to make the pair pill non-interactive (no dropdown).`},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => string`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(s: string) => s`,computed:!1}}}}}));export{V as n,B as t};