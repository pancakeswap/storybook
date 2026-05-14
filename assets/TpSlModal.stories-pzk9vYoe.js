import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{At as n,Nt as r,a as i,i as a,it as o,jt as s,kt as c,m as l,n as u,nt as d,r as f,rt as p,s as m,sn as h,t as g}from"./iframe-BH0EN6Jm.js";import{t as _}from"./Text-BRDHz0kF.js";import{n as v,t as y}from"./Input-Dv7QZT9S.js";var b,x,S,C,w,T,E,D,O,k,A=e((()=>{b=t(h(),1),s(),d(),i(),y(),_(),u(),a(),x=c(),S=r(p)`
  flex-direction: column;
  gap: 8px;
`,C=r(p)`
  gap: 8px;
`,w=r.div`
  height: 1px;
  width: 100%;
  background: ${({theme:e})=>e.colors.cardBorder};
  margin: 4px 0;
`,T=r(l).attrs({fontSize:`14px`,color:`textSubtle`})``,E=r(v)`
  height: 37px;
  padding: 8px 12px;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  background: ${({theme:e})=>e.colors.input};
  border: 1px solid ${({theme:e})=>e.colors.inputSecondary};
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.text};
  &::placeholder {
    color: ${({theme:e})=>e.colors.textSubtle};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    border-color: ${({theme:e})=>e.colors.secondary};
  }
`,D=r(p)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`,O=e=>e,k=({isOpen:e,symbol:t,positionSide:r,qty:i,entryPrice:a,markPrice:s,onConfirm:c,onClose:u,t:d=O})=>{let h=n(),_=r===`LONG`?1:-1,[v,y]=(0,b.useState)(``),[k,A]=(0,b.useState)(``),[j,M]=(0,b.useState)(``),[N,P]=(0,b.useState)(``),[F,I]=(0,b.useState)(!1);(0,b.useEffect)(()=>{e||(y(``),A(``),M(``),P(``))},[e]);let L=e=>i>0?a+_*e/i:NaN,R=e=>i>0?_*(e-a)*i:NaN,z=(e,t=2)=>Number.isFinite(e)?e.toLocaleString(void 0,{maximumFractionDigits:t}):``,B=e=>{y(e);let t=Number(e);A(Number.isFinite(t)&&e!==``?z(R(t),4):``)},V=e=>{A(e);let t=Number(e);y(Number.isFinite(t)&&e!==``?z(L(t),2):``)},H=e=>{M(e);let t=Number(e);P(Number.isFinite(t)&&e!==``?z(R(t),4):``)},U=e=>{P(e);let t=Number(e);Number.isFinite(t)&&e!==``?M(z(L(t),2)):P(``)},W=(0,b.useMemo)(()=>{let e=Number(v),t=Number(j),n=v!==``&&Number.isFinite(e),i=j!==``&&Number.isFinite(t);if(r===`LONG`){if(n&&e<=a)return d(`Take Profit price must be above entry for a LONG position.`);if(i&&t>=a)return d(`Stop Loss price must be below entry for a LONG position.`)}else{if(n&&e>=a)return d(`Take Profit price must be below entry for a SHORT position.`);if(i&&t<=a)return d(`Stop Loss price must be above entry for a SHORT position.`)}},[v,j,r,a,d]),G=!F&&(v!==``||j!==``)&&!W;return(0,x.jsx)(f,{isOpen:e,onDismiss:u,closeOnOverlayClick:!0,children:(0,x.jsx)(g,{title:d(`Set TP / SL`),onDismiss:u,children:(0,x.jsxs)(p,{flexDirection:`column`,style:{gap:12,minWidth:340,maxWidth:440},children:[(0,x.jsxs)(D,{children:[(0,x.jsx)(l,{fontSize:`14px`,color:`textSubtle`,children:d(`Symbol`)}),(0,x.jsxs)(l,{fontSize:`14px`,bold:!0,style:{color:r===`LONG`?h.colors.success:h.colors.failure},children:[t,` · `,r]})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(l,{fontSize:`14px`,color:`textSubtle`,children:d(`Entry`)}),(0,x.jsx)(l,{fontSize:`14px`,bold:!0,style:{fontVariantNumeric:`tabular-nums`},children:Number.isFinite(a)?a.toFixed(2):`—`})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(l,{fontSize:`14px`,color:`textSubtle`,children:d(`Mark`)}),(0,x.jsx)(l,{fontSize:`14px`,bold:!0,style:{fontVariantNumeric:`tabular-nums`},children:Number.isFinite(s)?s.toFixed(2):`—`})]}),(0,x.jsx)(w,{}),(0,x.jsxs)(S,{children:[(0,x.jsx)(l,{fontSize:`14px`,bold:!0,color:h.colors.success,children:d(`Take Profit`)}),(0,x.jsxs)(C,{children:[(0,x.jsxs)(o,{style:{flex:1},children:[(0,x.jsx)(T,{children:d(`Trigger Price`)}),(0,x.jsx)(E,{value:v,onChange:e=>B(e.target.value),placeholder:`0.00`,inputMode:`decimal`})]}),(0,x.jsxs)(o,{style:{flex:1},children:[(0,x.jsx)(T,{children:d(`PnL (USDT)`)}),(0,x.jsx)(E,{value:k,onChange:e=>V(e.target.value),placeholder:`0.00`,inputMode:`decimal`})]})]})]}),(0,x.jsxs)(S,{children:[(0,x.jsx)(l,{fontSize:`14px`,bold:!0,color:h.colors.failure,children:d(`Stop Loss`)}),(0,x.jsxs)(C,{children:[(0,x.jsxs)(o,{style:{flex:1},children:[(0,x.jsx)(T,{children:d(`Trigger Price`)}),(0,x.jsx)(E,{value:j,onChange:e=>H(e.target.value),placeholder:`0.00`,inputMode:`decimal`})]}),(0,x.jsxs)(o,{style:{flex:1},children:[(0,x.jsx)(T,{children:d(`PnL (USDT)`)}),(0,x.jsx)(E,{value:N,onChange:e=>U(e.target.value),placeholder:`0.00`,inputMode:`decimal`})]})]})]}),W&&(0,x.jsx)(l,{fontSize:`14px`,color:`failure`,children:W}),(0,x.jsx)(m,{onClick:async()=>{if(G){I(!0);try{await c({symbol:t,closeSide:r===`LONG`?`SELL`:`BUY`,tpPrice:v,slPrice:j,qty:String(i),closePosition:!0}),u()}finally{I(!1)}}},disabled:!G,isLoading:F,scale:`md`,children:d(`Confirm`)})]})})})},k.__docgenInfo={description:`TP/SL setup for an existing position.

Price↔PnL sync is bidirectional but direction-aware:
  - LONG:  PnL = (exitPrice - entry) × qty    → TP price above entry
  - SHORT: PnL = (entry - exitPrice) × qty    → TP price below entry

The widget tracks which input the user last typed into so it doesn't
fight the cursor — editing Price only propagates to PnL, and vice
versa.

A direction sanity check surfaces an inline warning when the user
types a nonsensical value (e.g. TP below entry on a LONG). The server
would reject anyway, but surfacing it early is friendlier.`,methods:[],displayName:`TpSlModal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:`Controlled open state.`},symbol:{required:!0,tsType:{name:`string`},description:``},positionSide:{required:!0,tsType:{name:`union`,raw:`'LONG' | 'SHORT'`,elements:[{name:`literal`,value:`'LONG'`},{name:`literal`,value:`'SHORT'`}]},description:``},qty:{required:!0,tsType:{name:`number`},description:`Absolute position size (base asset).`},entryPrice:{required:!0,tsType:{name:`number`},description:``},markPrice:{required:!0,tsType:{name:`number`},description:`Resolved mark price — displayed in the summary row.`},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(intent: TpSlIntent) => Promise<void> | void`,signature:{arguments:[{type:{name:`TpSlIntent`},name:`intent`}],return:{name:`union`,raw:`Promise<void> | void`,elements:[{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`},{name:`void`}]}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => string`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(s: string) => s`,computed:!1}}}}})),j,M,N,P,F,I,L,R;e((()=>{j=t(h(),1),i(),A(),M=c(),{fn:N}=__STORYBOOK_MODULE_TEST__,P={title:`Widgets/Tp Sl Modal 🆕`,component:k,tags:[`autodocs`],parameters:{layout:`centered`},args:{isOpen:!0,symbol:`BTCUSDT`,positionSide:`LONG`,qty:.05,entryPrice:78250,markPrice:78900,onConfirm:N(),onClose:N()}},F={},I={args:{positionSide:`SHORT`,entryPrice:3250,markPrice:3180,qty:.8,symbol:`ETHUSDT`}},L={render:e=>{let[t,n]=(0,j.useState)(!1);return(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{onClick:()=>n(!0),children:`Set TP / SL`}),(0,M.jsx)(k,{...e,isOpen:t,onConfirm:t=>{console.log(`TpSl intent`,t),e.onConfirm(t)},onClose:()=>n(!1)})]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    positionSide: 'SHORT',
    entryPrice: 3250,
    markPrice: 3180,
    qty: 0.8,
    symbol: 'ETHUSDT'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Set TP / SL</Button>
        <TpSlModal {...args} isOpen={open} onConfirm={intent => {
        // eslint-disable-next-line no-console
        console.log('TpSl intent', intent);
        args.onConfirm(intent);
      }} onClose={() => setOpen(false)} />
      </div>;
  }
}`,...L.parameters?.docs?.source},description:{story:`Interactive — open/close from a parent button, confirm logs to console.`,...L.parameters?.docs?.description}}},R=[`Long`,`Short`,`Interactive`]}))();export{L as Interactive,F as Long,I as Short,R as __namedExportsOrder,P as default};