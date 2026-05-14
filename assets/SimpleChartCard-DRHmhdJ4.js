import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{At as n,Nt as r,jt as i,kt as a,sn as o}from"./iframe-BH0EN6Jm.js";import{i as s,t as c}from"./primitives-CLkCgKst.js";function l(e){if(e.length<2)return null;let t=Math.min(...e.map(e=>e.price)),n=Math.max(...e.map(e=>e.price))-t||1,r=e.map((t,n)=>n/(e.length-1)*x),i=e.map(e=>C+(1-(e.price-t)/n)*(S-C-w)),a=`M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;for(let e=0;e<r.length-1;e++){let t=r[e-1]??r[e],n=i[e-1]??i[e],o=r[e],s=i[e],c=r[e+1],l=i[e+1],u=r[e+2]??r[e+1],d=i[e+2]??i[e+1],f=o+(c-t)/6,p=s+(l-n)/6,m=c-(u-o)/6,h=l-(d-s)/6;a+=` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`}let o=`${a} L ${x} ${S} L 0 ${S} Z`,s=i[i.length-1];return{line:a,area:o,endY:s}}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{u=t(o(),1),i(),s(),d=a(),f=r(c)`
  background: ${({theme:e})=>e.colors.card};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  padding: 16px 24px 24px;
  height: 480px;
  align-self: stretch;
  position: relative;
  overflow: hidden;

  /* PerpsPanel injects an inner <div>; flatten its background + padding so
     the chart fills edge-to-edge while keeping our outer card framing. */
  & > div {
    background: transparent;
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`,p=r.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`,m=r.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({$active:e})=>e?`13px`:`14px`};
  font-weight: ${({$active:e})=>e?700:400};
  color: ${({$active:e,theme:t})=>e?t.colors.primary:t.colors.textSubtle};
  cursor: pointer;
`,h=r.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`,g=r.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`,_=r.div`
  position: relative;
  overflow: visible;
`,v=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`,y=r.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.textSubtle};
  padding-top: 8px;
`,b=r.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.invertedContrast};
  font-size: 16px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  pointer-events: none;
`,x=1e3,S=360,C=20,w=70,T=`
  M 0 290
  C 60 290, 110 280, 170 250
  C 230 220, 290 175, 360 145
  C 420 120, 470 110, 510 130
  C 560 150, 590 195, 660 230
  C 720 260, 770 280, 830 250
  C 880 230, 920 195, 960 200
  L 1000 200
`,E=`
  M 0 290
  C 60 290, 110 280, 170 250
  C 230 220, 290 175, 360 145
  C 420 120, 470 110, 510 130
  C 560 150, 590 195, 660 230
  C 720 260, 770 280, 830 250
  C 880 230, 920 195, 960 200
  L 1000 200
  L 1000 360
  L 0 360
  Z
`,D=200,O=({timeframe:e,timeframes:t,onTimeframeChange:r,points:i,currentPriceLabel:a,yTicks:o,xTicks:s})=>{let c=n(),C=`simple-chart-fill-${(0,u.useId)().replace(/:/g,``)}`,w=c?.colors?.primary??`#1FC7D4`,O=(0,u.useMemo)(()=>l(i),[i]),k=O?.line??T,A=O?.area??E,j=O?.endY??D;return(0,d.jsxs)(f,{children:[(0,d.jsx)(p,{role:`tablist`,children:t.map(t=>(0,d.jsx)(m,{type:`button`,role:`tab`,"aria-selected":e===t,$active:e===t,onClick:()=>r(t),children:t},t))}),(0,d.jsxs)(h,{children:[(0,d.jsxs)(g,{children:[(0,d.jsxs)(_,{children:[(0,d.jsxs)(`svg`,{viewBox:`0 0 ${x} ${S}`,preserveAspectRatio:`none`,style:{width:`100%`,height:`100%`,display:`block`},"aria-hidden":!0,children:[(0,d.jsx)(`defs`,{children:(0,d.jsxs)(`linearGradient`,{id:C,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,d.jsx)(`stop`,{offset:`0%`,stopColor:w,stopOpacity:`0.30`}),(0,d.jsx)(`stop`,{offset:`100%`,stopColor:w,stopOpacity:`0.02`})]})}),(0,d.jsx)(`path`,{d:A,fill:`url(#${C})`}),(0,d.jsx)(`path`,{d:k,fill:`none`,stroke:w,strokeWidth:`2`}),(0,d.jsx)(`line`,{x1:`0`,y1:j,x2:x-10,y2:j,stroke:w,strokeWidth:`1`,strokeDasharray:`4 4`,opacity:`0.7`})]}),(0,d.jsx)(b,{style:{right:-8,top:`calc(${j}/${S} * 100% - 14px)`},children:a})]}),(0,d.jsx)(v,{"aria-hidden":!0,children:o.map((e,t)=>(0,d.jsx)(`span`,{children:e},`${e}-${t}`))})]}),(0,d.jsx)(y,{"aria-hidden":!0,children:s.map((e,t)=>(0,d.jsx)(`span`,{children:e},`${e}-${t}`))})]})]})},O.__docgenInfo={description:``,methods:[],displayName:`SimpleChartCard`,props:{timeframe:{required:!0,tsType:{name:`string`},description:`Active timeframe pill label, e.g. '1d' | '1h' | '30m' | '15m' | '5m'.`},timeframes:{required:!0,tsType:{name:`unknown`},description:`All timeframe options to render as pills, in render order.`},onTimeframeChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tf: string) => void`,signature:{arguments:[{type:{name:`string`},name:`tf`}],return:{name:`void`}}},description:``},points:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{ time: number; price: number }`,signature:{properties:[{key:`time`,value:{name:`number`,required:!0}},{key:`price`,value:{name:`number`,required:!0}}]}}],raw:`ReadonlyArray<{ time: number; price: number }>`},description:`Smoothed series ordered oldest → newest. SVG path is built from these
 via a Catmull-Rom-to-Bezier or simple quadratic-curve smoothing — match
 the look of the original page's hand-tuned cubic path.`},currentPriceLabel:{required:!0,tsType:{name:`string`},description:`Pre-formatted current-price label for the trailing pill (e.g. "640").`},yTicks:{required:!0,tsType:{name:`unknown`},description:`Pre-formatted Y axis ticks, top→bottom (e.g. ['670','660','650','640','630','620','610','USD']).`},xTicks:{required:!0,tsType:{name:`unknown`},description:`Pre-formatted X axis labels, left→right (e.g. ['5:00 AM', …]).`}}}}));export{k as n,O as t};