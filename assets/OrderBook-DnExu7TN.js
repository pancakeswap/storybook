import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{At as n,Nt as r,jt as i,kt as a,nt as o,rt as s,sn as c}from"./iframe-BH0EN6Jm.js";import{i as l,t as u}from"./primitives-CLkCgKst.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G=e((()=>{d=t(c(),1),i(),o(),l(),f=a(),p=10,m=27,h=r(s)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`,g=r(s)`
  gap: 5px;
`,_=r.button`
  width: 26px;
  height: 24px;
  background: ${({$active:e,theme:t})=>e?t.colors.input:`transparent`};
  border: 0;
  padding: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: ${({$active:e})=>e?1:.45};
  transition: opacity 0.12s, background 0.12s;
  &:hover {
    opacity: ${({$active:e})=>e?1:.8};
  }
`,v=r.div`
  position: relative;
`,y=r.button`
  background: transparent;
  border: 0;
  color: ${({theme:e})=>e.colors.text};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 0;
  font-variant-numeric: tabular-nums;
  &:hover {
    opacity: 0.75;
  }
`,b=r.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 8px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  min-width: 60px;
  overflow: hidden;
  z-index: 200;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
`,x=r.button`
  background: transparent;
  border: 0;
  color: ${({$active:e,theme:t})=>e?t.colors.primary:t.colors.text};
  font-size: 14px;
  font-weight: 400;
  padding: 8px 16px;
  text-align: center;
  cursor: pointer;
  font-variant-numeric: tabular-nums;
  transition: background 0.1s;
  &:hover {
    background: ${({theme:e})=>e.colors.input};
  }
`,S=r(s)`
  align-items: center;
  gap: 2px;
`,C=r.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({theme:e})=>e.colors.textSubtle};
  flex-shrink: 0;
`,w=r.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,T=r.div`
  height: ${({$size:e})=>e===`full`?p*2*m:p*m}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,E=r.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${m}px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  line-height: 1.5;
  overflow: hidden;
  &:hover {
    filter: brightness(1.06);
  }
`,D=r.span`
  position: relative;
  z-index: 1;
  color: ${({$side:e,theme:t})=>e===`bid`?`#129E7D`:t.colors.failure};
`,O=r.span`
  position: relative;
  z-index: 1;
  text-align: ${({$align:e})=>e??`right`};
`,k=r.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4px 16px;
  gap: 4px;
  background: ${({theme:e})=>e.colors.input};
  font-size: 14px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.colors.text};
  flex-shrink: 0;
`,A=r.span`
  color: ${({theme:e})=>e.colors.textSubtle};
`,j=r.span`
  text-align: center;
`,M=r.span`
  text-align: right;
  color: ${({theme:e})=>e.colors.textSubtle};
`,N=(e,t,n,r,i)=>{if(r<=1)return e;let a=n*r,o=new Map;for(let[n,r]of e){let e=Number(n),s=Number(r);if(!Number.isFinite(e)||!Number.isFinite(s))continue;let c=(t===`bid`?Math.floor(e/a)*a:Math.ceil(e/a)*a).toFixed(i);o.set(c,(o.get(c)??0)+s)}return[...o.entries()].sort((e,n)=>t===`bid`?Number(n[0])-Number(e[0]):Number(e[0])-Number(n[0])).map(([e,t])=>[e,t.toString()])},P=[100,50,10,1],F=e=>e===0?`1`:`0.${`0`.repeat(e-1)}1`,I=e=>!e||e<=0?0:Math.round(-Math.log10(e)),L=(e,t)=>{let n=[];for(let e of P)t>e*10&&n.push(String(e));let r=I(e);for(let e=1;e<=r;e++)n.push(F(e));return n},R=(e,t)=>{(0,d.useEffect)(()=>{let n=n=>{e.current&&!e.current.contains(n.target)&&t()};return window.addEventListener(`mousedown`,n),()=>window.removeEventListener(`mousedown`,n)},[e,t])},z=({label:e,items:t,activeValue:n,onSelect:r})=>{let[i,a]=(0,d.useState)(!1),o=(0,d.useRef)(null);return R(o,()=>a(!1)),(0,f.jsxs)(v,{ref:o,children:[(0,f.jsxs)(y,{onClick:()=>a(e=>!e),children:[e,` `,i?`▴`:`▾`]}),i&&(0,f.jsx)(b,{children:t.map(e=>(0,f.jsx)(x,{$active:e.value===n,onClick:()=>{r(e.value),a(!1)},children:e.label},e.value))})]})},B=({bidColor:e,askColor:t,listColor:n})=>(0,f.jsxs)(`svg`,{width:`16`,height:`15`,viewBox:`0 0 16 15`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:`6`,height:`6`,stroke:t}),(0,f.jsx)(`rect`,{x:`0.5`,y:`8.5`,width:`6`,height:`6`,stroke:e}),(0,f.jsx)(`rect`,{x:`8`,y:`0`,width:`8`,height:`3`,fill:n}),(0,f.jsx)(`rect`,{x:`8`,y:`4`,width:`8`,height:`3`,fill:n}),(0,f.jsx)(`rect`,{x:`8`,y:`8`,width:`8`,height:`3`,fill:n}),(0,f.jsx)(`rect`,{x:`8`,y:`12`,width:`8`,height:`3`,fill:n})]}),V=({bidColor:e,listColor:t})=>(0,f.jsxs)(`svg`,{width:`16`,height:`15`,viewBox:`0 0 16 15`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:`6`,height:`14`,stroke:e}),(0,f.jsx)(`rect`,{x:`8`,y:`0`,width:`8`,height:`3`,fill:t}),(0,f.jsx)(`rect`,{x:`8`,y:`4`,width:`8`,height:`3`,fill:t}),(0,f.jsx)(`rect`,{x:`8`,y:`8`,width:`8`,height:`3`,fill:t}),(0,f.jsx)(`rect`,{x:`8`,y:`12`,width:`8`,height:`3`,fill:t})]}),H=({askColor:e,listColor:t})=>(0,f.jsxs)(`svg`,{width:`16`,height:`15`,viewBox:`0 0 16 15`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:`6`,height:`14`,stroke:e}),(0,f.jsx)(`rect`,{x:`8`,y:`0`,width:`8`,height:`3`,fill:t}),(0,f.jsx)(`rect`,{x:`8`,y:`4`,width:`8`,height:`3`,fill:t}),(0,f.jsx)(`rect`,{x:`8`,y:`8`,width:`8`,height:`3`,fill:t}),(0,f.jsx)(`rect`,{x:`8`,y:`12`,width:`8`,height:`3`,fill:t})]}),U=e=>e,W=({asks:e,bids:t,baseAsset:r,quoteAsset:i,tickSize:a,pricePrecision:o=2,lastPrice:s=0,view:c,onViewChange:l,priceStep:m,onPriceStepChange:v,sizeUnit:y,onSizeUnitChange:b,hidden:x,embedded:P,t:F=U})=>{let I=n(),R=y===`QUOTE`?i:r,W=(0,d.useMemo)(()=>L(a,s),[a,s]);(0,d.useEffect)(()=>{W.length!==0&&(W.includes(m)||v(W[W.length-1]))},[W,m,v]);let G=(0,d.useMemo)(()=>{let n=Math.max(a,Number(m)||a),r=Math.max(1,Math.round(n/a)),i=N(e,`ask`,a,r,o),s=N(t,`bid`,a,r,o),c=p*2,l=i.slice(0,c).reverse(),u=s.slice(0,c),d=e[0]?Number(e[0][0]):void 0,f=t[0]?Number(t[0][0]):void 0;return{asks:l,bids:u,spread:d&&f?d-f:void 0,spreadPct:d&&f?(d-f)/d*100:void 0}},[e,t,m,a,o]),K=e=>{let t=0;return e.map(([e,n])=>{let r=Number(n),i=Number(e),a=y===`QUOTE`?r*i:r;return t+=a,{price:e,qty:String(a),total:t}})},q=(0,d.useMemo)(()=>K([...G.asks].reverse()).reverse(),[G.asks,y]),J=(0,d.useMemo)(()=>K(G.bids),[G.bids,y]),Y=(0,d.useMemo)(()=>{let e=q[0]?.total??0,t=J[J.length-1]?.total??0;return Math.max(e,t,1)},[q,J]),X=(e,t)=>{let n=e===`bid`?I.colors.success:I.colors.failure,r=Math.max(0,Math.min(100,t*100)).toFixed(2);return{background:`linear-gradient(to right, ${`color-mix(in srgb, ${n} 30%, transparent)`} 0%, ${`color-mix(in srgb, ${n} 10%, transparent)`} ${r}%, transparent ${r}%, transparent 100%)`}},Z=e=>y===`QUOTE`?e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(2)}K`:e.toFixed(2):e.toFixed(3),Q=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h,{children:[(0,f.jsxs)(g,{children:[(0,f.jsx)(_,{title:F(`Both`),$active:c===`both`,onClick:()=>l(`both`),"aria-label":F(`Both`),children:(0,f.jsx)(B,{bidColor:I.colors.success,askColor:I.colors.failure,listColor:I.colors.textSubtle})}),(0,f.jsx)(_,{title:F(`Bids`),$active:c===`bids`,onClick:()=>l(`bids`),"aria-label":F(`Bids`),children:(0,f.jsx)(V,{bidColor:I.colors.success,listColor:I.colors.textSubtle})}),(0,f.jsx)(_,{title:F(`Asks`),$active:c===`asks`,onClick:()=>l(`asks`),"aria-label":F(`Asks`),children:(0,f.jsx)(H,{askColor:I.colors.failure,listColor:I.colors.textSubtle})})]}),(0,f.jsxs)(S,{children:[(0,f.jsx)(z,{label:m,items:W.map(e=>({value:e,label:e})),activeValue:m,onSelect:v}),(0,f.jsx)(z,{label:R,items:[{value:`BASE`,label:r},{value:`QUOTE`,label:i}],activeValue:y,onSelect:e=>b(e)})]})]}),(0,f.jsxs)(C,{children:[(0,f.jsxs)(`span`,{children:[F(`Price`),` (`,i,`)`]}),(0,f.jsxs)(`span`,{style:{textAlign:`center`},children:[F(`Amount`),` (`,R,`)`]}),(0,f.jsxs)(`span`,{style:{textAlign:`right`},children:[F(`SUM`),` (`,R,`)`]})]}),(0,f.jsxs)(w,{children:[c!==`bids`&&(0,f.jsx)(T,{$size:c===`asks`?`full`:`half`,children:q.slice(c===`asks`?0:Math.max(0,q.length-p)).map(e=>(0,f.jsxs)(E,{$side:`ask`,style:X(`ask`,e.total/Y),children:[(0,f.jsx)(D,{$side:`ask`,children:e.price}),(0,f.jsx)(O,{$align:`center`,children:Z(Number(e.qty))}),(0,f.jsx)(O,{$align:`right`,children:Z(e.total)})]},`a-${e.price}`))}),c===`both`&&(0,f.jsxs)(k,{role:`row`,"aria-label":F(`Spread`),children:[(0,f.jsx)(A,{children:F(`Spread`)}),(0,f.jsx)(j,{children:G.spread===void 0?`—`:G.spread.toFixed(2)}),(0,f.jsx)(M,{children:G.spreadPct===void 0?``:`${G.spreadPct.toFixed(3)}%`})]}),c!==`asks`&&(0,f.jsx)(T,{$size:c===`bids`?`full`:`half`,children:J.slice(0,c===`bids`?p*2:p).map(e=>(0,f.jsxs)(E,{$side:`bid`,style:X(`bid`,e.total/Y),children:[(0,f.jsx)(D,{$side:`bid`,children:e.price}),(0,f.jsx)(O,{$align:`center`,children:Z(Number(e.qty))}),(0,f.jsx)(O,{$align:`right`,children:Z(e.total)})]},`b-${e.price}`))})]})]});return P?(0,f.jsx)(`div`,{style:x?{display:`none`}:{display:`contents`},children:Q}):(0,f.jsx)(u,{style:x?{display:`none`}:void 0,children:Q})},W.__docgenInfo={description:`Live depth book — bid/ask ladder with heatbar backgrounds, price-step
aggregation dropdown, size-unit toggle, and view-mode toggle
(both / bids / asks).

All data + selected step / view / sizeUnit come in as props; consumer
persists selection across sessions. \`onPriceStepChange\` may be called
when the current \`priceStep\` isn't valid for the symbol (e.g. user
had "100" from BTCUSDT and switched to ASTER) — the widget snaps to
the finest available option and emits a change.`,methods:[],displayName:`OrderBook`,props:{asks:{required:!0,tsType:{name:`Array`,elements:[{name:`tuple`,raw:`[string, string]`,elements:[{name:`string`},{name:`string`}]}],raw:`DepthLevel[]`},description:"Asks sorted ascending (best ask first). Raw `[price, qty]` tuples."},bids:{required:!0,tsType:{name:`Array`,elements:[{name:`tuple`,raw:`[string, string]`,elements:[{name:`string`},{name:`string`}]}],raw:`DepthLevel[]`},description:`Bids sorted descending (best bid first).`},baseAsset:{required:!0,tsType:{name:`string`},description:`Base asset symbol, e.g. "BTC".`},quoteAsset:{required:!0,tsType:{name:`string`},description:`Quote asset symbol, e.g. "USDT".`},tickSize:{required:!0,tsType:{name:`number`},description:`Native tick size from the exchange's PRICE_FILTER. Drives aggregation.`},pricePrecision:{required:!1,tsType:{name:`number`},description:`Decimal places for the price column.`,defaultValue:{value:`2`,computed:!1}},lastPrice:{required:!1,tsType:{name:`number`},description:`Last traded price — drives which aggregation step options are offered.`,defaultValue:{value:`0`,computed:!1}},view:{required:!0,tsType:{name:`union`,raw:`'both' | 'bids' | 'asks'`,elements:[{name:`literal`,value:`'both'`},{name:`literal`,value:`'bids'`},{name:`literal`,value:`'asks'`}]},description:``},onViewChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(v: OrderBookView) => void`,signature:{arguments:[{type:{name:`union`,raw:`'both' | 'bids' | 'asks'`,elements:[{name:`literal`,value:`'both'`},{name:`literal`,value:`'bids'`},{name:`literal`,value:`'asks'`}]},name:`v`}],return:{name:`void`}}},description:``},priceStep:{required:!0,tsType:{name:`string`},description:``},onPriceStepChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(v: string) => void`,signature:{arguments:[{type:{name:`string`},name:`v`}],return:{name:`void`}}},description:``},sizeUnit:{required:!0,tsType:{name:`union`,raw:`'BASE' | 'QUOTE'`,elements:[{name:`literal`,value:`'BASE'`},{name:`literal`,value:`'QUOTE'`}]},description:``},onSizeUnitChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(v: OrderBookSizeUnit) => void`,signature:{arguments:[{type:{name:`union`,raw:`'BASE' | 'QUOTE'`,elements:[{name:`literal`,value:`'BASE'`},{name:`literal`,value:`'QUOTE'`}]},name:`v`}],return:{name:`void`}}},description:``},hidden:{required:!1,tsType:{name:`boolean`},description:`Hide the panel without unmounting — preserves the caller's depth
subscription when toggled inside a tabbed panel.`},embedded:{required:!1,tsType:{name:`boolean`},description:`Skip the PerpsPanel shell — caller already wraps us.`},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => string`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(s: string) => s`,computed:!1}}}}}));export{G as n,W as t};