import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,jt as r,kt as i,sn as a}from"./iframe-BH0EN6Jm.js";import{i as o,t as s}from"./primitives-CLkCgKst.js";var c,l,u,d,f,p,m,h,g,_,v,y=e((()=>{c=t(a(),1),r(),o(),l=i(),u=n.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
`,d=n.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({theme:e})=>e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,f=n.div`
  overflow-y: auto;
  min-height: 0;
`,p=n.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`,m=n.span`
  color: ${({$maker:e,theme:t})=>e?t.colors.failure:t.colors.success};
`,h=n.span`
  text-align: right;
`,g=n(h)`
  color: ${({theme:e})=>e.colors.textSubtle};
`,_=e=>{let t=new Date(e);return`${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)}`},v=({trades:e,title:t,labels:n,hidden:r,embedded:i})=>{let a=(0,c.useMemo)(()=>[...e].sort((e,t)=>t.time-e.time),[e]),o=n?.price??`Price`,v=n?.size??`Size`,y=n?.time??`Time`,b=(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)(u,{children:t}),(0,l.jsxs)(d,{children:[(0,l.jsx)(`span`,{children:o}),(0,l.jsx)(`span`,{style:{textAlign:`right`},children:v}),(0,l.jsx)(`span`,{style:{textAlign:`right`},children:y})]}),(0,l.jsx)(f,{children:a.map(e=>(0,l.jsxs)(p,{children:[(0,l.jsx)(m,{$maker:!!e.isBuyerMaker,children:e.price}),(0,l.jsx)(h,{children:e.size}),(0,l.jsx)(g,{children:_(e.time)})]},e.id))})]});return i?(0,l.jsx)(`div`,{style:r?{display:`none`}:{display:`contents`},children:b}):(0,l.jsx)(s,{style:r?{display:`none`}:void 0,children:b})},v.__docgenInfo={description:``,methods:[],displayName:`RecentTrades`,props:{trades:{required:!0,tsType:{name:`Array`,elements:[{name:`RecentTradeRow`}],raw:`RecentTradeRow[]`},description:`Trades to render — already sorted newest-first by the consumer.`},title:{required:!1,tsType:{name:`string`},description:`Optional title above the column headers. Omit when embedded inside a tabbed container.`},labels:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ price?: string; size?: string; time?: string }`,signature:{properties:[{key:`price`,value:{name:`string`,required:!1}},{key:`size`,value:{name:`string`,required:!1}},{key:`time`,value:{name:`string`,required:!1}}]}},description:`Translatable column labels. Defaults to English literals.`},hidden:{required:!1,tsType:{name:`boolean`},description:"Render with `display: none` instead of unmounting — preserves the\ncaller's WebSocket subscription when toggled inside a tabbed panel."},embedded:{required:!1,tsType:{name:`boolean`},description:`Render only the inner content (column header + body), no PerpsPanel
shell. Use when the consumer is already wrapping us in a panel /
tabbed container.`}}}})),b,x,S,C,w,T,E,D,O;e((()=>{y(),b=i(),x=75500,S=Date.now(),C=Array.from({length:40},(e,t)=>{let n=(Math.sin(t*1.31)+Math.cos(t*.47))*.5<=0,r=x+(t*37%90/10-4.5)+(n?-.1:.1),i=.002+t*29%790/1e4;return{id:`t${t}`,price:(Math.round(r*10)/10).toFixed(1),size:i.toFixed(3),time:S-t*2300,isBuyerMaker:n}}),w={title:`Widgets/Recent Trades 🆕`,component:v,parameters:{layout:`centered`},decorators:[e=>(0,b.jsx)(`div`,{style:{width:280,height:520,border:`1px solid var(--pcs-colors-card-border)`,borderRadius:12,overflow:`hidden`,display:`flex`},children:(0,b.jsx)(e,{})})]},T={args:{trades:C,title:`Recent Trades`}},E={args:{trades:C,embedded:!0}},D={args:{trades:[],title:`Recent Trades`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    trades: MOCK_TRADES,
    title: 'Recent Trades'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    trades: MOCK_TRADES,
    embedded: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    trades: [],
    title: 'Recent Trades'
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Embedded`,`Empty`]}))();export{T as Default,E as Embedded,D as Empty,O as __namedExportsOrder,w as default};