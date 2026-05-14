import{n as e}from"./chunk-zsgVPwQN.js";import{Nt as t,S as n,a as r,i,jt as a,kt as o,m as s,n as c,nt as l,r as ee,rt as u,s as d,sn as f,t as p,tt as m}from"./iframe-BH0EN6Jm.js";import{t as h}from"./Text-BRDHz0kF.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B=e((()=>{f(),a(),l(),r(),h(),m(),c(),i(),g=o(),_=t(u)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`,v=t.div`
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`,y=t(u)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({theme:e})=>e.colors.backgroundAlt};
`,b=t(s).attrs({fontSize:`14px`,bold:!0})`
  font-variant-numeric: tabular-nums;
`,x=t(u)`
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.cardBorder};
  background: ${({theme:e})=>e.colors.background};
  justify-content: space-between;
  align-items: center;
`,S=t(s).attrs({fontSize:`12px`,bold:!0})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,C=t(u)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`,w=t.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 12px;
  border: 0;
  background: ${({$selected:e,theme:t})=>e?t.colors.tertiary:`transparent`};
  cursor: pointer;
  width: 100%;
  text-align: left;
  &:hover {
    background: ${({theme:e})=>e.colors.input};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,T=t(u)`
  flex-direction: column;
`,E=t(u)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 16px;
  background: ${({theme:e})=>e.colors.input};
`,D=t.input`
  background: transparent;
  border: 0;
  outline: 0;
  width: 100%;
  text-align: right;
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({theme:e})=>e.colors.textSubtle};
  }
`,O=t(u)`
  gap: 6px;
  margin-top: 4px;
`,k=t.button`
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.primary};
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  cursor: pointer;
  &:hover {
    background: ${({theme:e})=>e.colors.tertiary};
  }
`,A=t.div`
  background: ${({theme:e})=>e.colors.backgroundAlt};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j=t(u)`
  justify-content: space-between;
  align-items: center;
`,M=t(u)`
  flex-direction: column;
  gap: 8px;
`,N=t(u)`
  align-items: center;
  gap: 8px;
  opacity: ${({$state:e})=>e===`pending`?.5:1};
`,P=t.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({$state:e,theme:t})=>e===`done`?t.colors.success:t.colors.input};
  color: ${({$state:e,theme:t})=>e===`done`?`#fff`:t.colors.text};
`,F=t(s).attrs({fontSize:`32px`,bold:!0})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`,I=t.div`
  width: ${({$size:e=24})=>e}px;
  height: ${({$size:e=24})=>e}px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.tertiary};
  color: ${({theme:e})=>e.colors.text};
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
`,L=(e,t)=>t?Object.entries(t).reduce((e,[t,n])=>e.split(`%${t}%`).join(String(n)),e):e,R=[25,50,75],z=({isOpen:e,onClose:t,step:r,evmAddress:i,solanaAddress:a,isLoadingAssets:o=!1,assets:c,selectedAssetId:l,onSelectAsset:f,otherSupportedSymbols:m=[],selectedAsset:h,amount:z,onAmountChange:B,sourceAddress:te,errorSlot:V,onPercentClick:H,submitState:U,canContinue:ne,onContinue:re,onBack:ie,receipt:W,checkingElapsedMs:G=0,onDepositAgain:K,onRetry:q,t:J=L,renderTokenIcon:Y,renderSpinner:X})=>{let ae=J(r===`success`?`Deposit Successful`:r===`checking`?`Processing Deposit`:r===`failed`?`Deposit Failed`:`Fund your Account`),oe=(()=>{switch(U){case`switching-chain`:return J(`Switching chain...`);case`approving`:return J(`Approve in wallet...`);case`approve-confirming`:return J(`Confirming approval...`);case`depositing`:return J(`Confirm in wallet...`);case`deposit-confirming`:return J(`Confirming deposit...`);case`done`:return J(`Done`);case`failed`:return J(`Retry`);default:return J(`Continue`)}})(),Z=(e,t=24)=>Y?Y(e,t):(0,g.jsx)(I,{$size:t,children:e.symbol.slice(0,1)}),Q=e=>X?X(e):(0,g.jsx)(`div`,{style:{width:e,height:e,borderRadius:`50%`,border:`${Math.max(2,Math.round(e/16))}px solid currentColor`,borderTopColor:`transparent`,animation:`pcs-deposit-spin 0.8s linear infinite`},children:(0,g.jsx)(`style`,{children:`@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}`})}),$=U===`switching-chain`||U===`approving`||U===`approve-confirming`||U===`depositing`||U===`deposit-confirming`;return(0,g.jsx)(ee,{isOpen:e,onDismiss:t,closeOnOverlayClick:!0,children:(0,g.jsx)(p,{title:ae,onDismiss:t,children:(0,g.jsxs)(_,{children:[r===`amount`&&(0,g.jsx)(u,{justifyContent:`flex-start`,children:(0,g.jsx)(d,{scale:`sm`,variant:`text`,onClick:ie,"aria-label":`back`,startIcon:(0,g.jsx)(n,{width:`18px`}),children:J(`Back`)})}),r===`select`&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(v,{children:[i&&(0,g.jsxs)(y,{children:[(0,g.jsx)(`div`,{style:{width:24,height:24,borderRadius:999,background:`linear-gradient(135deg, #f0b90b, #fd621d)`}}),(0,g.jsx)(b,{children:i}),(0,g.jsx)(s,{fontSize:`11px`,color:`textSubtle`,style:{marginLeft:`auto`},children:`EVM`})]}),a&&(0,g.jsxs)(y,{style:{borderTop:i?`1px solid var(--colors-cardBorder)`:void 0},children:[(0,g.jsx)(`div`,{style:{width:24,height:24,borderRadius:999,background:`linear-gradient(135deg, #14f195, #9945ff)`}}),(0,g.jsx)(b,{children:a}),(0,g.jsx)(s,{fontSize:`11px`,color:`textSubtle`,style:{marginLeft:`auto`},children:`Solana`})]}),(0,g.jsxs)(x,{children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(S,{color:`textSubtle`,children:J(`Balance`)}),(0,g.jsx)(s,{fontSize:`12px`,color:`textSubtle`,children:J(`In your wallet`)})]}),(0,g.jsx)(s,{fontSize:`14px`,bold:!0,children:c.some(e=>e.hasBalance)?J(`Ready`):`—`})]})]}),o&&(0,g.jsx)(s,{fontSize:`12px`,children:J(`Loading tokens...`)}),!o&&c.length===0&&(0,g.jsxs)(u,{flexDirection:`column`,alignItems:`center`,style:{gap:6,padding:`24px 12px`,border:`1px dashed`,borderRadius:12},children:[(0,g.jsx)(s,{fontSize:`14px`,bold:!0,children:J(`No depositable tokens in your wallet`)}),(0,g.jsx)(s,{fontSize:`12px`,color:`textSubtle`,textAlign:`center`,children:J(`Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.`)}),m.length>0&&(0,g.jsx)(s,{fontSize:`11px`,color:`textSubtle`,textAlign:`center`,children:J(`Supported: %tokens%`,{tokens:m.slice(0,8).join(` · `)})})]}),c.length>0&&(0,g.jsx)(C,{children:c.map(e=>(0,g.jsx)(w,{$selected:l===e.id,onClick:()=>f(e.id),title:e.displayName,children:(0,g.jsxs)(u,{alignItems:`center`,style:{gap:12},children:[Z(e,32),(0,g.jsxs)(T,{children:[(0,g.jsx)(s,{fontSize:`14px`,bold:!0,children:e.displayName||e.symbol}),(0,g.jsxs)(s,{fontSize:`12px`,color:`textSubtle`,children:[e.balanceText,` `,e.symbol]})]})]})},e.id))}),c.length>0&&m.length>0&&(0,g.jsx)(s,{fontSize:`11px`,color:`textSubtle`,textAlign:`center`,children:J(`Also supported: %tokens%`,{tokens:m.slice(0,8).join(` · `)})})]}),r===`amount`&&h&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(E,{children:[(0,g.jsxs)(u,{alignItems:`center`,style:{gap:12},children:[Z(h,40),(0,g.jsxs)(u,{flexDirection:`column`,children:[(0,g.jsx)(s,{fontSize:`14px`,bold:!0,children:h.displayName||h.symbol}),(0,g.jsx)(s,{fontSize:`12px`,color:`textSubtle`,children:h.balanceText})]})]}),(0,g.jsxs)(u,{flexDirection:`column`,alignItems:`flex-end`,style:{minWidth:0,flex:1},children:[(0,g.jsx)(D,{value:z,onChange:e=>B(e.target.value),placeholder:`0`,inputMode:`decimal`}),(0,g.jsxs)(O,{children:[R.map(e=>(0,g.jsxs)(k,{onClick:()=>H(e),children:[e,`%`]},e)),(0,g.jsx)(k,{onClick:()=>H(100),children:J(`MAX`)})]})]})]}),(0,g.jsxs)(A,{children:[(0,g.jsxs)(j,{children:[(0,g.jsx)(S,{color:`textSubtle`,children:J(`Source`)}),(0,g.jsx)(s,{fontSize:`14px`,children:te??`—`})]}),(0,g.jsxs)(j,{children:[(0,g.jsx)(S,{color:`textSubtle`,children:J(`Destination`)}),(0,g.jsx)(s,{fontSize:`14px`,children:J(`Aster perp account`)})]}),(0,g.jsxs)(j,{children:[(0,g.jsx)(S,{color:`textSubtle`,children:J(`Token`)}),(0,g.jsxs)(u,{alignItems:`center`,style:{gap:6},children:[Z(h,16),(0,g.jsx)(s,{fontSize:`14px`,bold:!0,children:h.symbol})]})]})]}),V,(0,g.jsx)(d,{onClick:re,disabled:!ne||$,isLoading:$,scale:`md`,children:oe})]}),r===`checking`&&W&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(u,{flexDirection:`column`,alignItems:`center`,style:{gap:8},children:[Q(72),(0,g.jsx)(s,{fontSize:`14px`,color:`textSubtle`,textAlign:`center`,children:J(`Your deposit is on its way. This usually takes 30-60 seconds.`)})]}),(0,g.jsxs)(M,{children:[(0,g.jsxs)(N,{$state:`done`,children:[(0,g.jsx)(P,{$state:`done`,children:`✓`}),(0,g.jsx)(s,{fontSize:`13px`,children:J(`Transaction broadcast`)})]}),(0,g.jsxs)(N,{$state:`done`,children:[(0,g.jsx)(P,{$state:`done`,children:`✓`}),(0,g.jsx)(s,{fontSize:`13px`,children:J(`Confirmed on-chain`)})]}),(0,g.jsxs)(N,{$state:`active`,children:[(0,g.jsx)(P,{$state:`active`,children:Q(16)}),(0,g.jsx)(s,{fontSize:`13px`,children:J(`Waiting for Aster to credit your account…`)})]})]}),(0,g.jsxs)(A,{children:[(0,g.jsxs)(j,{children:[(0,g.jsx)(S,{color:`textSubtle`,children:J(`Amount`)}),(0,g.jsxs)(s,{fontSize:`14px`,bold:!0,children:[W.amount,` `,W.assetSymbol]})]}),(0,g.jsxs)(j,{children:[(0,g.jsx)(S,{color:`textSubtle`,children:J(`Tx hash`)}),(0,g.jsxs)(s,{fontSize:`14px`,bold:!0,style:{fontVariantNumeric:`tabular-nums`},children:[W.hash.slice(0,10),`…`,W.hash.slice(-8)]})]}),(0,g.jsxs)(j,{children:[(0,g.jsx)(S,{color:`textSubtle`,children:J(`Elapsed`)}),(0,g.jsxs)(s,{fontSize:`14px`,bold:!0,style:{fontVariantNumeric:`tabular-nums`},children:[Math.floor(G/1e3),`s`]})]})]}),(0,g.jsx)(d,{scale:`md`,variant:`secondary`,onClick:t,children:J(`Close`)})]}),r===`success`&&W&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(F,{children:[W.amount,` `,W.assetSymbol]}),(0,g.jsxs)(A,{children:[(0,g.jsxs)(j,{children:[(0,g.jsx)(s,{fontSize:`14px`,color:`textSubtle`,children:J(`Source`)}),(0,g.jsx)(s,{fontSize:`14px`,bold:!0,children:W.sourceAddress??`—`})]}),(0,g.jsxs)(j,{children:[(0,g.jsx)(s,{fontSize:`14px`,color:`textSubtle`,children:J(`Destination`)}),(0,g.jsx)(s,{fontSize:`14px`,bold:!0,children:J(`Aster perp account`)})]}),(0,g.jsxs)(j,{children:[(0,g.jsx)(s,{fontSize:`14px`,color:`textSubtle`,children:J(`Processing time`)}),(0,g.jsx)(s,{fontSize:`14px`,bold:!0,children:J(`~1-2 min`)})]})]}),(0,g.jsx)(A,{children:(0,g.jsxs)(j,{children:[(0,g.jsx)(s,{fontSize:`14px`,color:`textSubtle`,children:J(`Tx hash`)}),(0,g.jsxs)(s,{fontSize:`14px`,bold:!0,style:{fontVariantNumeric:`tabular-nums`},children:[W.hash.slice(0,10),`…`,W.hash.slice(-8)]})]})}),(0,g.jsxs)(u,{style:{gap:8},children:[(0,g.jsx)(d,{style:{flex:1},scale:`md`,onClick:t,children:J(`View Balance`)}),(0,g.jsx)(d,{style:{flex:1},scale:`md`,variant:`secondary`,onClick:K,children:J(`Deposit Again`)})]})]}),r===`failed`&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(u,{flexDirection:`column`,alignItems:`center`,style:{gap:8},children:[(0,g.jsx)(s,{fontSize:`44px`,bold:!0,style:{lineHeight:1},children:`⚠️`}),(0,g.jsx)(s,{fontSize:`14px`,color:`textSubtle`,textAlign:`center`,children:J(`The transaction did not go through. Your funds did not move.`)})]}),V,(0,g.jsxs)(u,{style:{gap:8},children:[(0,g.jsx)(d,{style:{flex:1},scale:`md`,onClick:q,children:J(`Try Again`)}),(0,g.jsx)(d,{style:{flex:1},scale:`md`,variant:`secondary`,onClick:t,children:J(`Close`)})]})]})]})})})},z.__docgenInfo={description:`Multi-step deposit flow. Fully presentation — the consumer
(pancake-frontend) owns the wallet/balance fetches, the on-chain
deposit hook lifecycle, the post-broadcast polling that detects
when Aster credits the deposit, and the step transitions. The
widget renders whatever the current \`step\` says to render.

\`renderTokenIcon\` + \`renderSpinner\` slots let the consumer plug in
its own visual primitives (PCS uikit Spinner, project's TokenIcon)
without storybook bundling them.`,methods:[],displayName:`DepositModal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},step:{required:!0,tsType:{name:`union`,raw:`'select' | 'amount' | 'checking' | 'success' | 'failed'`,elements:[{name:`literal`,value:`'select'`},{name:`literal`,value:`'amount'`},{name:`literal`,value:`'checking'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'failed'`}]},description:`Controlled step. Consumer drives transitions in response to user actions.`},evmAddress:{required:!1,tsType:{name:`string`},description:`Pre-truncated EVM address, e.g. "0x1234…abcd".`},solanaAddress:{required:!1,tsType:{name:`string`},description:`Pre-truncated Solana address.`},isLoadingAssets:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},assets:{required:!0,tsType:{name:`Array`,elements:[{name:`DepositTokenRow`}],raw:`DepositTokenRow[]`},description:``},selectedAssetId:{required:!1,tsType:{name:`string`},description:``},onSelectAsset:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},otherSupportedSymbols:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},selectedAsset:{required:!1,tsType:{name:`DepositTokenRow`},description:``},amount:{required:!0,tsType:{name:`string`},description:``},onAmountChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(v: string) => void`,signature:{arguments:[{type:{name:`string`},name:`v`}],return:{name:`void`}}},description:``},sourceAddress:{required:!1,tsType:{name:`string`},description:``},exceedsBalance:{required:!1,tsType:{name:`boolean`},description:``},errorSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onPercentClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(pct: number) => void`,signature:{arguments:[{type:{name:`number`},name:`pct`}],return:{name:`void`}}},description:``},submitState:{required:!0,tsType:{name:`union`,raw:`| 'idle'
| 'switching-chain'
| 'approving'
| 'approve-confirming'
| 'depositing'
| 'deposit-confirming'
| 'done'
| 'failed'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'switching-chain'`},{name:`literal`,value:`'approving'`},{name:`literal`,value:`'approve-confirming'`},{name:`literal`,value:`'depositing'`},{name:`literal`,value:`'deposit-confirming'`},{name:`literal`,value:`'done'`},{name:`literal`,value:`'failed'`}]},description:``},canContinue:{required:!0,tsType:{name:`boolean`},description:``},onContinue:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onBack:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},receipt:{required:!1,tsType:{name:`DepositReceipt`},description:``},checkingElapsedMs:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onDepositAgain:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string, options?: Record<string, string | number | undefined>) => string`,signature:{arguments:[{type:{name:`string`},name:`key`},{type:{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | undefined`,elements:[{name:`string`},{name:`number`},{name:`undefined`}]}],raw:`Record<string, string | number | undefined>`},name:`options`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(
  key: string,
  options?: Record<string, string | number | undefined>,
): string => {
  if (!options) return key
  return Object.entries(options).reduce((acc, [k, v]) => acc.split(\`%\${k}%\`).join(String(v)), key)
}`,computed:!1}},renderTokenIcon:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(asset: DepositTokenRow, size?: number) => React.ReactNode`,signature:{arguments:[{type:{name:`DepositTokenRow`},name:`asset`},{type:{name:`number`},name:`size`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:`Optional custom token-icon renderer (consumer's TokenIcon).`},renderSpinner:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(size: number) => React.ReactNode`,signature:{arguments:[{type:{name:`number`},name:`size`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:`Optional spinner override (consumer's Spinner).`}}}}));export{B as n,z as t};