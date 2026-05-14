import{n as e}from"./chunk-zsgVPwQN.js";import{kt as t}from"./iframe-BH0EN6Jm.js";import{n,t as r}from"./AccountPanel-BabYvwNl.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Widgets/Account Panel 🆕`,component:r,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,i.jsx)(`div`,{style:{width:320,height:420,border:`1px solid var(--pcs-colors-card-border)`,display:`flex`},children:(0,i.jsx)(e,{})})],args:{onDeposit:a(),onWithdraw:a(),onEnableTrading:a()}},s={args:{state:{kind:`no-wallet`},canDeposit:!1,canWithdraw:!1}},c={args:{walletDisplay:`0x1234…abcd`,canDeposit:!0,canWithdraw:!1,state:{kind:`needs-deposit`}}},l={args:{walletDisplay:`0x1234…abcd`,canDeposit:!0,canWithdraw:!1,state:{kind:`needs-trading`}}},u={args:{walletDisplay:`0x1234…abcd`,canDeposit:!0,canWithdraw:!0,state:{kind:`ready`,equity:`1234.56`,available:`987.21`,unrealizedPnl:`+12.34`,pnlSign:`positive`,marginMode:`Cross`}}},d={args:{walletDisplay:`0x1234…abcd`,canDeposit:!0,canWithdraw:!0,state:{kind:`ready`,equity:`1234.56`,available:`987.21`,unrealizedPnl:`-45.67`,pnlSign:`negative`,marginMode:`Cross`}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: 'no-wallet'
    },
    canDeposit: false,
    canWithdraw: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    walletDisplay: '0x1234…abcd',
    canDeposit: true,
    canWithdraw: false,
    state: {
      kind: 'needs-deposit'
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    walletDisplay: '0x1234…abcd',
    canDeposit: true,
    canWithdraw: false,
    state: {
      kind: 'needs-trading'
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    walletDisplay: '0x1234…abcd',
    canDeposit: true,
    canWithdraw: true,
    state: {
      kind: 'ready',
      equity: '1234.56',
      available: '987.21',
      unrealizedPnl: '+12.34',
      pnlSign: 'positive',
      marginMode: 'Cross'
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    walletDisplay: '0x1234…abcd',
    canDeposit: true,
    canWithdraw: true,
    state: {
      kind: 'ready',
      equity: '1234.56',
      available: '987.21',
      unrealizedPnl: '-45.67',
      pnlSign: 'negative',
      marginMode: 'Cross'
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`NoWallet`,`NeedsDeposit`,`NeedsTrading`,`ReadyPositive`,`ReadyNegative`]}))();export{c as NeedsDeposit,l as NeedsTrading,s as NoWallet,d as ReadyNegative,u as ReadyPositive,f as __namedExportsOrder,o as default};