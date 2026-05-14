import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,S as r,a as i,i as a,it as o,jt as s,kt as c,m as l,n as u,nt as d,r as f,rt as p,s as m,sn as h,t as g,tt as _}from"./iframe-BH0EN6Jm.js";import{t as v}from"./Text-BRDHz0kF.js";import{n as y,r as b,t as x}from"./Message-fTku3PP4.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z=e((()=>{h(),s(),d(),i(),v(),_(),u(),a(),S=c(),C=(e,t)=>t?Object.entries(t).reduce((e,[t,n])=>e.split(`%${t}%`).join(String(n)),e):e,w=n(p)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`,T=n(l).attrs({fontSize:`12px`,bold:!0})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,E=n(p)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`,D=n.button`
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
`,O=n(p)`
  flex-direction: column;
`,k=n.div`
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
`,A=n(p)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.inputSecondary};
  border-radius: 16px;
  background: ${({theme:e})=>e.colors.input};
  box-shadow: ${({theme:e})=>`inset 0px 2px 0px -1px ${e.colors.cardBorder}`};
  transition: border-color 0.12s, box-shadow 0.12s;
  &:focus-within {
    border-color: ${({theme:e})=>e.colors.secondary};
    box-shadow:
      inset 0px 2px 0px -1px ${({theme:e})=>e.colors.cardBorder},
      0 0 0 4px ${({theme:e})=>`color-mix(in srgb, ${e.colors.secondary} 20%, transparent)`};
  }
`,j=n.input`
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
`,M=n(p)`
  gap: 6px;
  margin-top: 4px;
`,N=n.button`
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
`,P=n.div`
  background: ${({theme:e})=>e.colors.backgroundAlt};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,F=n(p)`
  justify-content: space-between;
  align-items: center;
`,I=n(p)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({theme:e})=>e.colors.cardBorder};
  border-radius: 12px;
`,L=[25,50,75],R=({isOpen:e,step:t,isLoadingAssets:n=!1,assets:i,selectedAssetId:a,onSelectAsset:s,selectedAsset:c,destinationAddress:u,destinationChainName:d=`BSC`,feeText:h,amount:_,onAmountChange:v,onPercentClick:y,onBack:b,onWithdraw:x,onClose:R,isSubmitting:z=!1,canSubmit:B=!0,errorSlot:V,t:H=C,renderTokenIcon:U})=>{let W=(e,t=24)=>U?U(e,t):(0,S.jsx)(k,{$size:t,children:e.symbol.slice(0,1)});return(0,S.jsx)(f,{isOpen:e,onDismiss:R,closeOnOverlayClick:!0,children:(0,S.jsx)(g,{title:t===`select`?H(`Withdraw from Aster`):H(`Withdraw %asset%`,{asset:c?.symbol??``}),onDismiss:R,children:(0,S.jsxs)(w,{children:[t===`amount`&&(0,S.jsx)(p,{justifyContent:`flex-start`,children:(0,S.jsx)(m,{scale:`sm`,variant:`text`,onClick:b,"aria-label":`back`,startIcon:(0,S.jsx)(r,{width:`18px`}),children:H(`Back`)})}),t===`select`&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(o,{children:[(0,S.jsx)(T,{color:`textSubtle`,children:H(`Select asset`)}),(0,S.jsx)(l,{fontSize:`12px`,color:`textSubtle`,children:H(`Pick an asset to withdraw from your Aster perp account.`)})]}),n&&(0,S.jsx)(l,{fontSize:`12px`,children:H(`Loading assets...`)}),!n&&i.length===0&&(0,S.jsxs)(I,{children:[(0,S.jsx)(l,{fontSize:`14px`,bold:!0,children:H(`Nothing to withdraw yet`)}),(0,S.jsx)(l,{fontSize:`12px`,color:`textSubtle`,textAlign:`center`,children:H(`Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.`)})]}),i.length>0&&(0,S.jsx)(E,{children:i.map(e=>(0,S.jsxs)(D,{$selected:a===e.id,onClick:()=>s(e.id),disabled:!e.hasBalance,title:e.displayName,children:[(0,S.jsxs)(p,{alignItems:`center`,style:{gap:12},children:[W(e,32),(0,S.jsxs)(O,{children:[(0,S.jsx)(l,{fontSize:`14px`,bold:!0,children:e.displayName||e.symbol}),(0,S.jsx)(l,{fontSize:`11px`,color:`textSubtle`,children:H(`Withdrawable`)})]})]}),(0,S.jsxs)(p,{flexDirection:`column`,alignItems:`flex-end`,children:[(0,S.jsx)(l,{fontSize:`14px`,bold:!0,style:{fontVariantNumeric:`tabular-nums`},children:e.withdrawableText}),(0,S.jsx)(l,{fontSize:`11px`,color:`textSubtle`,children:e.symbol})]})]},e.id))})]}),t===`amount`&&c&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(A,{children:[(0,S.jsxs)(p,{alignItems:`center`,style:{gap:12},children:[W(c,40),(0,S.jsxs)(p,{flexDirection:`column`,children:[(0,S.jsx)(l,{fontSize:`14px`,bold:!0,children:c.displayName||c.symbol}),(0,S.jsx)(l,{fontSize:`12px`,color:`textSubtle`,children:H(`Withdrawable: %amt% %sym%`,{amt:c.withdrawableText,sym:c.symbol})})]})]}),(0,S.jsxs)(p,{flexDirection:`column`,alignItems:`flex-end`,style:{minWidth:0,flex:1},children:[(0,S.jsx)(j,{value:_,onChange:e=>v(e.target.value),placeholder:`0`,inputMode:`decimal`}),y&&(0,S.jsxs)(M,{children:[L.map(e=>(0,S.jsxs)(N,{onClick:()=>y(e),children:[e,`%`]},e)),(0,S.jsx)(N,{onClick:()=>y(100),children:H(`MAX`)})]})]})]}),(0,S.jsxs)(P,{children:[(0,S.jsxs)(F,{children:[(0,S.jsx)(T,{color:`textSubtle`,children:H(`Destination`)}),(0,S.jsx)(l,{fontSize:`14px`,style:{fontVariantNumeric:`tabular-nums`},children:u??`—`})]}),(0,S.jsxs)(F,{children:[(0,S.jsx)(T,{color:`textSubtle`,children:H(`Network`)}),(0,S.jsx)(l,{fontSize:`14px`,children:d})]}),(0,S.jsxs)(F,{children:[(0,S.jsx)(T,{color:`textSubtle`,children:H(`Token`)}),(0,S.jsxs)(p,{alignItems:`center`,style:{gap:6},children:[W(c,16),(0,S.jsx)(l,{fontSize:`14px`,bold:!0,children:c.symbol})]})]}),(0,S.jsxs)(F,{children:[(0,S.jsx)(T,{color:`textSubtle`,children:H(`Fee`)}),(0,S.jsxs)(l,{fontSize:`14px`,style:{fontVariantNumeric:`tabular-nums`},children:[h??`—`,` `,c.symbol]})]})]}),V,(0,S.jsx)(m,{onClick:x,disabled:!B||!_||z,isLoading:z,scale:`md`,children:H(z?`Withdrawing...`:`Sign & Withdraw`)}),(0,S.jsx)(l,{fontSize:`11px`,color:`textSubtle`,children:H(`You sign a withdrawal request with your main wallet. The agent wallet is never involved.`)})]})]})})})},R.__docgenInfo={description:`Withdraw flow modal — multi-step (select asset → enter amount). The
consumer (pancake-frontend) wires the asset list from \`/fapi/v3/account\`
(per-asset \`maxWithdrawAmount\`), the destination address from the user's
EOA, the fee from the bapi withdraw-fee quote, and the submit handler
from the signed v3 withdraw call. This widget is presentation-only.`,methods:[],displayName:`WithdrawModal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:`Controlled open state.`},step:{required:!0,tsType:{name:`union`,raw:`'select' | 'amount'`,elements:[{name:`literal`,value:`'select'`},{name:`literal`,value:`'amount'`}]},description:`Controlled step — consumer drives transitions.`},isLoadingAssets:{required:!1,tsType:{name:`boolean`},description:`Show a loading shimmer while the consumer is fetching account assets.`,defaultValue:{value:`false`,computed:!1}},assets:{required:!0,tsType:{name:`Array`,elements:[{name:`WithdrawTokenRow`}],raw:`WithdrawTokenRow[]`},description:`Withdrawable assets returned from /fapi/v3/account, mapped to display rows.`},selectedAssetId:{required:!1,tsType:{name:`string`},description:`Currently selected row id.`},onSelectAsset:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:`Fired when the user picks an asset — consumer transitions to step="amount".`},selectedAsset:{required:!1,tsType:{name:`WithdrawTokenRow`},description:`The selected row, used to render the amount input header.`},destinationAddress:{required:!1,tsType:{name:`string`},description:`Destination wallet address — caller pre-truncates (e.g. "0x1234…abcd").
Shown in the "Destination" line for user confirmation.`},destinationChainName:{required:!1,tsType:{name:`string`},description:`Display label for the destination chain — e.g. "BSC".`,defaultValue:{value:`'BSC'`,computed:!1}},feeText:{required:!1,tsType:{name:`string`},description:`Pre-formatted fee string with asset, e.g. "0.1234" — combined with
the selected asset symbol in the helper line. Pass "—" when unknown.`},amount:{required:!0,tsType:{name:`string`},description:`Controlled amount input.`},onAmountChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onPercentClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(pct: number) => void`,signature:{arguments:[{type:{name:`number`},name:`pct`}],return:{name:`void`}}},description:`Fired when user clicks one of the percent chips (25/50/75/MAX).`},onBack:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Step-back handler — consumer transitions step back to "select".`},onWithdraw:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the user clicks Sign & Withdraw.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isSubmitting:{required:!1,tsType:{name:`boolean`},description:`Disable + show "Withdrawing..." when the consumer's mutation is in flight.`,defaultValue:{value:`false`,computed:!1}},canSubmit:{required:!1,tsType:{name:`boolean`},description:`When false the submit button is disabled. Use to gate on wallet
connection / minimum amount / Aster auth ready.`,defaultValue:{value:`true`,computed:!1}},errorSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:"Optional error block — consumer renders the classified\n`PerpsErrorMessage` (or anything else) into this slot."},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string, options?: Record<string, string | number | undefined>) => string`,signature:{arguments:[{type:{name:`string`},name:`key`},{type:{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | undefined`,elements:[{name:`string`},{name:`number`},{name:`undefined`}]}],raw:`Record<string, string | number | undefined>`},name:`options`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(
  key: string,
  options?: Record<string, string | number | undefined>,
): string => {
  if (!options) return key
  return Object.entries(options).reduce(
    (acc, [k, v]) => acc.split(\`%\${k}%\`).join(String(v)),
    key,
  )
}`,computed:!1}},renderTokenIcon:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(asset: WithdrawTokenRow, size?: number) => React.ReactNode`,signature:{arguments:[{type:{name:`WithdrawTokenRow`},name:`asset`},{type:{name:`number`},name:`size`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:`Optional custom token-icon renderer (consumer's TokenIcon).`}}}})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{B=t(h(),1),i(),x(),z(),V=c(),{fn:H}=__STORYBOOK_MODULE_TEST__,U={title:`Widgets/Withdraw Modal 🆕`,component:R,tags:[`autodocs`],parameters:{layout:`centered`}},W=[{id:`USDT`,symbol:`USDT`,displayName:`Tether USD`,withdrawableText:`1,234.5678`,hasBalance:!0},{id:`USDC`,symbol:`USDC`,displayName:`USD Coin`,withdrawableText:`500.00`,hasBalance:!0},{id:`BNB`,symbol:`BNB`,displayName:`BNB`,withdrawableText:`0.0000`,hasBalance:!1}],G={args:{isOpen:!0,step:`select`,assets:W,selectedAssetId:void 0,onSelectAsset:H(),destinationAddress:`0x1234…abcd`,destinationChainName:`BSC`,feeText:`0.1234`,amount:``,onAmountChange:H(),onPercentClick:H(),onBack:H(),onWithdraw:H(),onClose:H()}},K={args:{...G.args,assets:[],isLoadingAssets:!0}},q={args:{...G.args,assets:[],isLoadingAssets:!1}},J={args:{...G.args,step:`amount`,selectedAssetId:`USDT`,selectedAsset:W[0],amount:``}},Y={args:{...J.args,amount:`125.50`}},X={args:{...J.args,amount:`125.50`,isSubmitting:!0}},Z={args:{...J.args,amount:`5000`,errorSlot:(0,V.jsx)(y,{variant:`danger`,children:(0,V.jsx)(b,{children:`Withdrawal would exceed your available balance.`})})}},Q={args:{isOpen:!1,step:`select`,assets:W,selectedAssetId:void 0,onSelectAsset:H(),destinationAddress:`0x9876…1234`,destinationChainName:`BSC`,feeText:`0.10`,amount:``,onAmountChange:H(),onPercentClick:H(),onBack:H(),onWithdraw:H(),onClose:H()},render:e=>{let[t,n]=(0,B.useState)(!1),[r,i]=(0,B.useState)(`select`),[a,o]=(0,B.useState)(),[s,c]=(0,B.useState)(``);return(0,V.jsxs)(`div`,{children:[(0,V.jsx)(m,{onClick:()=>{i(`select`),o(void 0),c(``),n(!0)},children:`Withdraw`}),(0,V.jsx)(R,{...e,isOpen:t,step:r,selectedAssetId:a?.id,selectedAsset:a,amount:s,onSelectAsset:t=>{let n=e.assets.find(e=>e.id===t);n&&(o(n),i(`amount`))},onAmountChange:c,onPercentClick:e=>{a&&c((parseFloat(a.withdrawableText.replace(/,/g,``))*e/100).toFixed(4))},onBack:()=>i(`select`),onWithdraw:()=>{e.onWithdraw(),n(!1)},onClose:()=>n(!1)})]})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    step: 'select',
    assets: ASSETS,
    selectedAssetId: undefined,
    onSelectAsset: fn(),
    destinationAddress: '0x1234…abcd',
    destinationChainName: 'BSC',
    feeText: '0.1234',
    amount: '',
    onAmountChange: fn(),
    onPercentClick: fn(),
    onBack: fn(),
    onWithdraw: fn(),
    onClose: fn()
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Select.args!,
    assets: [],
    isLoadingAssets: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Select.args!,
    assets: [],
    isLoadingAssets: false
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...Select.args!,
    step: 'amount',
    selectedAssetId: 'USDT',
    selectedAsset: ASSETS[0],
    amount: ''
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...AmountStep.args!,
    amount: '125.50'
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...AmountStep.args!,
    amount: '125.50',
    isSubmitting: true
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...AmountStep.args!,
    amount: '5000',
    errorSlot: <Message variant="danger">
        <MessageText>Withdrawal would exceed your available balance.</MessageText>
      </Message>
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    step: 'select',
    assets: ASSETS,
    selectedAssetId: undefined,
    onSelectAsset: fn(),
    destinationAddress: '0x9876…1234',
    destinationChainName: 'BSC',
    feeText: '0.10',
    amount: '',
    onAmountChange: fn(),
    onPercentClick: fn(),
    onBack: fn(),
    onWithdraw: fn(),
    onClose: fn()
  },
  render: args => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState<WithdrawStep>('select');
    const [selected, setSelected] = useState<WithdrawTokenRow | undefined>();
    const [amount, setAmount] = useState('');
    return <div>
        <Button onClick={() => {
        setStep('select');
        setSelected(undefined);
        setAmount('');
        setOpen(true);
      }}>
          Withdraw
        </Button>
        <WithdrawModal {...args} isOpen={open} step={step} selectedAssetId={selected?.id} selectedAsset={selected} amount={amount} onSelectAsset={id => {
        const a = args.assets.find(x => x.id === id);
        if (!a) return;
        setSelected(a);
        setStep('amount');
      }} onAmountChange={setAmount} onPercentClick={pct => {
        if (!selected) return;
        const max = parseFloat(selected.withdrawableText.replace(/,/g, ''));
        setAmount((max * pct / 100).toFixed(4));
      }} onBack={() => setStep('select')} onWithdraw={() => {
        args.onWithdraw();
        setOpen(false);
      }} onClose={() => setOpen(false)} />
      </div>;
  }
}`,...Q.parameters?.docs?.source},description:{story:`Interactive — drives controlled step + amount + open state from a parent button.`,...Q.parameters?.docs?.description}}},$=[`Select`,`Loading`,`Empty`,`AmountStep`,`Filled`,`Submitting`,`WithError`,`Interactive`]}))();export{J as AmountStep,q as Empty,Y as Filled,Q as Interactive,K as Loading,G as Select,X as Submitting,Z as WithError,$ as __namedExportsOrder,U as default};