import{n as e}from"./chunk-zsgVPwQN.js";import{Nt as t,a as n,jt as r,kt as i,m as a,nt as o,rt as s,s as c,sn as l}from"./iframe-BH0EN6Jm.js";import{t as u}from"./Text-BRDHz0kF.js";import{i as d,t as f}from"./primitives-CLkCgKst.js";import{n as p,r as m,t as h}from"./Message-fTku3PP4.js";var g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{l(),r(),n(),o(),h(),u(),d(),g=i(),_=t(f)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`,v=t(a).attrs({fontSize:`16px`})`
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.text};
`,y=t(s)`
  justify-content: space-between;
  align-items: center;
`,b=t(a).attrs({fontSize:`14px`,color:`textSubtle`})``,x=t(a).attrs({fontSize:`14px`})`
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.colors.text};
  text-align: right;
`,S=t.button`
  flex: 1;
  height: 48px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: filter 0.12s, transform 0.1s;
  background: ${({$variant:e,theme:t})=>e===`primary`?t.colors.primary:t.colors.input};
  color: ${({$variant:e,theme:t})=>e===`primary`?t.colors.invertedContrast:t.colors.primary};
  &:hover:not(:disabled) {
    filter: brightness(1.08);
  }
  &:active:not(:disabled) {
    transform: scale(0.98);
    filter: brightness(0.95);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,C=t(s)`
  flex-direction: column;
  gap: 8px;
`,w=t(x)`
  color: ${({$sign:e,theme:t})=>e===`positive`?t.colors.success:e===`negative`?t.colors.failure:t.colors.text};
`,T=e=>e,E=({walletDisplay:e,state:t,canDeposit:n=!0,canWithdraw:r=!0,onDeposit:i,onWithdraw:o,onEnableTrading:l,t:u=T})=>(0,g.jsxs)(_,{children:[(0,g.jsxs)(s,{style:{gap:8},children:[(0,g.jsx)(S,{$variant:`primary`,onClick:i,disabled:!n,children:u(`Deposit`)}),(0,g.jsx)(S,{$variant:`secondary`,onClick:o,disabled:!r,children:u(`Withdraw`)})]}),t.kind===`needs-deposit`&&(0,g.jsx)(p,{variant:`warning`,children:(0,g.jsxs)(s,{flexDirection:`column`,style:{gap:4},children:[(0,g.jsx)(a,{fontSize:`14px`,bold:!0,children:u(`Deposit to get started`)}),(0,g.jsx)(m,{fontSize:`12px`,children:u(`Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.`)})]})}),t.kind===`needs-trading`&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{variant:`warning`,children:(0,g.jsxs)(s,{flexDirection:`column`,style:{gap:4},children:[(0,g.jsx)(a,{fontSize:`14px`,bold:!0,children:u(`Enable Trading to view your Aster balance`)}),(0,g.jsx)(m,{fontSize:`12px`,children:u(`Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.`)})]})}),(0,g.jsx)(c,{onClick:l,scale:`sm`,variant:`primary`,children:u(`Enable Trading`)})]}),t.kind===`ready`&&(0,g.jsxs)(C,{children:[(0,g.jsx)(v,{children:u(`Account Equity`)}),(0,g.jsxs)(y,{children:[(0,g.jsx)(b,{children:u(`Wallet`)}),(0,g.jsx)(x,{children:e??`—`})]}),(0,g.jsxs)(y,{children:[(0,g.jsx)(b,{children:u(`Equity`)}),(0,g.jsx)(x,{children:t.equity||`—`})]}),(0,g.jsxs)(y,{children:[(0,g.jsx)(b,{children:u(`Available`)}),(0,g.jsx)(x,{children:t.available||`—`})]}),(0,g.jsxs)(y,{children:[(0,g.jsx)(b,{children:u(`Unrealized PnL`)}),(0,g.jsx)(w,{$sign:t.pnlSign,children:t.unrealizedPnl||`—`})]}),(0,g.jsxs)(y,{children:[(0,g.jsx)(b,{children:u(`Margin mode`)}),(0,g.jsx)(x,{children:t.marginMode??u(`Cross`)})]})]})]}),E.__docgenInfo={description:``,methods:[],displayName:`AccountPanel`,props:{walletDisplay:{required:!1,tsType:{name:`string`},description:`The user's external EOA — always shown above the equity rows when
present. Pre-truncate at the call site (e.g. "0x1234…abcd"); the
widget renders the string as-is.`},state:{required:!0,tsType:{name:`union`,raw:`| { kind: 'no-wallet' }
| { kind: 'needs-deposit' }
| { kind: 'needs-trading' }
| {
    kind: 'ready'
    /** Pre-formatted equity in quote asset (e.g. "1234.56"). */
    equity: string
    /** Pre-formatted available balance. */
    available: string
    /** Pre-formatted unrealized PnL — caller computes sign + decimals. */
    unrealizedPnl: string
    /** Display the PnL line in success / failure color. */
    pnlSign?: 'positive' | 'negative' | 'zero'
    /** Defaults to "Cross". */
    marginMode?: string
  }`,elements:[{name:`signature`,type:`object`,raw:`{ kind: 'no-wallet' }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'no-wallet'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: 'needs-deposit' }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'needs-deposit'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: 'needs-trading' }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'needs-trading'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  kind: 'ready'
  /** Pre-formatted equity in quote asset (e.g. "1234.56"). */
  equity: string
  /** Pre-formatted available balance. */
  available: string
  /** Pre-formatted unrealized PnL — caller computes sign + decimals. */
  unrealizedPnl: string
  /** Display the PnL line in success / failure color. */
  pnlSign?: 'positive' | 'negative' | 'zero'
  /** Defaults to "Cross". */
  marginMode?: string
}`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'ready'`,required:!0}},{key:`equity`,value:{name:`string`,required:!0},description:`Pre-formatted equity in quote asset (e.g. "1234.56").`},{key:`available`,value:{name:`string`,required:!0},description:`Pre-formatted available balance.`},{key:`unrealizedPnl`,value:{name:`string`,required:!0},description:`Pre-formatted unrealized PnL — caller computes sign + decimals.`},{key:`pnlSign`,value:{name:`union`,raw:`'positive' | 'negative' | 'zero'`,elements:[{name:`literal`,value:`'positive'`},{name:`literal`,value:`'negative'`},{name:`literal`,value:`'zero'`}],required:!1},description:`Display the PnL line in success / failure color.`},{key:`marginMode`,value:{name:`string`,required:!1},description:`Defaults to "Cross".`}]}}]},description:``},canDeposit:{required:!1,tsType:{name:`boolean`},description:`Disable Deposit / Withdraw buttons (e.g. wallet not connected).`,defaultValue:{value:`true`,computed:!1}},canWithdraw:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},onDeposit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onWithdraw:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onEnableTrading:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string, options?: Record<string, string | number | undefined>) => string`,signature:{arguments:[{type:{name:`string`},name:`key`},{type:{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | undefined`,elements:[{name:`string`},{name:`number`},{name:`undefined`}]}],raw:`Record<string, string | number | undefined>`},name:`options`}],return:{name:`string`}}},description:"Translator signature matches PancakeSwap's `@pancakeswap/localization`\n`TranslateFunction` so pancake-frontend can pass its `t` directly\nwithout a cast. Storybook stories that don't need i18n can omit this\nprop — widget defaults to identity.",defaultValue:{value:`(s: string) => s`,computed:!1}}}}}));export{D as n,E as t};