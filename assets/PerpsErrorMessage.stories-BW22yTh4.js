import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,a as r,it as i,jt as a,kt as o,m as s,nt as c,rt as l,s as u,sn as d}from"./iframe-BH0EN6Jm.js";import{t as f}from"./Text-BRDHz0kF.js";import{n as p,r as m,t as h}from"./Message-fTku3PP4.js";var g,_,v,y,b,x,S=e((()=>{g=t(d(),1),a(),c(),r(),h(),f(),_=o(),v=n(i)`
  margin-top: 6px;
  padding: 8px;
  background: ${({theme:e})=>e.colors.input};
  border-radius: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.textSubtle};
  word-break: break-all;
  white-space: pre-wrap;
  max-height: 120px;
  overflow: auto;
`,y=n(u).attrs({variant:`text`,scale:`xs`})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`,b=e=>e,x=({variant:e,title:t,message:n,details:r,t:i=b})=>{let[a,o]=(0,g.useState)(!1);return t?(0,_.jsx)(p,{variant:e,children:(0,_.jsxs)(l,{flexDirection:`column`,children:[(0,_.jsx)(m,{children:(0,_.jsx)(s,{fontSize:`13px`,bold:!0,children:t})}),(0,_.jsx)(m,{children:(0,_.jsx)(s,{fontSize:`12px`,children:n})}),r&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(y,{onClick:()=>o(e=>!e),children:i(a?`Hide details`:`Show details`)}),a&&(0,_.jsx)(v,{children:r})]})]})}):(0,_.jsx)(p,{variant:e,children:(0,_.jsx)(m,{children:n})})},x.__docgenInfo={description:`User-facing error display. Never renders raw viem/wagmi stack traces,
hex payloads, or provider internals directly — those hide behind a
"Show details" disclosure so designers/support can still grab them
when needed.

The consumer (pancake-frontend) classifies its own error objects and
maps them to the \`variant\` + \`title\` + \`message\` + \`details\` props.
Keeps this widget agnostic to error-handling libraries (viem, wagmi,
Aster classifier, etc.).`,methods:[],displayName:`PerpsErrorMessage`,props:{variant:{required:!0,tsType:{name:`union`,raw:`'primary' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:`Visual severity. The consumer maps its domain-specific error
classification (e.g. user-rejected → primary, network → danger) to
one of these four buckets. The widget never inspects the original
error object — keeps the storybook surface free of consumer-specific
error types.`},title:{required:!1,tsType:{name:`string`},description:`Optional bold heading. When omitted the widget renders a single-line
message — matches the "user-rejected" understated style in
pancake-frontend (no title, just the cancellation note).`},message:{required:!0,tsType:{name:`string`},description:`Plain-language explanation of what went wrong / what to do next.`},details:{required:!1,tsType:{name:`string`},description:`Optional raw stack/hex/payload string. When present a "Show details"
toggle appears that reveals the text in a monospace box. Consumers
should only pass this for kinds where seeing internals helps support
(e.g. unexpected RPC errors), never for user-rejection / validation.`},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => string`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`string`}}},description:`Translator for the toggle labels. Defaults to identity.`,defaultValue:{value:`(s: string) => s`,computed:!1}}}}})),C,w,T,E,D,O,k;e((()=>{S(),C=o(),w={title:`Widgets/Perps Error Message 🆕`,component:x,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,C.jsx)(`div`,{style:{width:420},children:(0,C.jsx)(e,{})})]},T={args:{variant:`primary`,message:`You cancelled the transaction in your wallet.`}},E={args:{variant:`warning`,title:`Margin is insufficient`,message:`Your available USDT is below what this order needs at the chosen leverage.`}},D={args:{variant:`danger`,title:`Aster rejected the order`,message:`The exchange returned an error. You can try again, or copy the details below for support.`,details:`{ "code": -2010, "msg": "ReduceOnly Order is rejected" }
  at processCommand (aster.signedRequest:148)
  at submitOrder (placeOrder.ts:204)`}},O={args:{variant:`success`,title:`Position closed`,message:`Your BTCUSDT short was fully closed at the market price.`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    message: 'You cancelled the transaction in your wallet.'
  }
}`,...T.parameters?.docs?.source},description:{story:`User cancelled in their wallet — understated, no title.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Margin is insufficient',
    message: 'Your available USDT is below what this order needs at the chosen leverage.'
  }
}`,...E.parameters?.docs?.source},description:{story:`Validation / soft warning.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Aster rejected the order',
    message: 'The exchange returned an error. You can try again, or copy the details below for support.',
    details: '{ "code": -2010, "msg": "ReduceOnly Order is rejected" }\\n  at processCommand (aster.signedRequest:148)\\n  at submitOrder (placeOrder.ts:204)'
  }
}`,...D.parameters?.docs?.source},description:{story:`Hard error with raw payload behind the disclosure.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Position closed',
    message: 'Your BTCUSDT short was fully closed at the market price.'
  }
}`,...O.parameters?.docs?.source},description:{story:`Success — used for confirmation states (rare but supported).`,...O.parameters?.docs?.description}}},k=[`UserRejected`,`InsufficientFunds`,`NetworkError`,`Confirmation`]}))();export{O as Confirmation,E as InsufficientFunds,D as NetworkError,T as UserRejected,k as __namedExportsOrder,w as default};