import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,t as a}from"./TokenizedAssetsTradePanel-BdQdhZ57.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{o=t(r(),1),i(),s=n(),{expect:c,fn:l,userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Widgets/Tokenized Assets/Trade Panel`,component:a,parameters:{layout:`centered`},args:{mode:`swap`,pay:{symbol:`BNB`,iconColor:`#F0B90B`,balance:`0.00`,usdValue:`$0.00`},payAmount:``,receive:{symbol:`NVIDIAx`,iconColor:`#76B900`,iconInitials:`N`,balance:`0.00`,usdValue:`$0.00`},receiveAmount:``,slippage:`0.5`,rateLabel:`1 BNB = 326.01 NVIDIAx`,offHoursWarning:!0,ctaLabel:`Connect Wallet`,onModeChange:l(),onPayAmountChange:l(),onReceiveAmountChange:l(),onSlippageClick:l(),onRefreshRate:l(),onCtaClick:l(),onSwapDirections:l(),onSettingsClick:l()}},f={},p={args:{offHoursWarning:!1}},m={args:{mode:`limit`}},h={render:e=>(0,s.jsx)(()=>{let[t,n]=(0,o.useState)(e.mode??`swap`),[r,i]=(0,o.useState)(e.payAmount??``);return(0,s.jsx)(a,{...e,mode:t,onModeChange:t=>{e.onModeChange?.(t),n(t)},payAmount:r,onPayAmountChange:t=>{e.onPayAmountChange?.(t),i(t)}})},{}),play:async({canvas:e,args:t})=>{await u.click(e.getByRole(`tab`,{name:`Limit`})),await c(t.onModeChange).toHaveBeenCalledWith(`limit`);let n=e.getByLabelText(`Pay amount in BNB`);await u.type(n,`1.25`),await c(t.onPayAmountChange).toHaveBeenCalled(),await u.click(e.getByRole(`button`,{name:`Connect Wallet`})),await c(t.onCtaClick).toHaveBeenCalled()}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    offHoursWarning: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'limit' as TradeMode
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Wrapped = () => {
      const [mode, setMode] = useState<TradeMode>(args.mode ?? 'swap');
      const [payAmount, setPayAmount] = useState(args.payAmount ?? '');
      return <TokenizedAssetsTradePanel {...args} mode={mode} onModeChange={next => {
        args.onModeChange?.(next);
        setMode(next);
      }} payAmount={payAmount} onPayAmountChange={next => {
        args.onPayAmountChange?.(next);
        setPayAmount(next);
      }} />;
    };
    return <Wrapped />;
  },
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Limit'
    }));
    await expect(args.onModeChange).toHaveBeenCalledWith('limit');
    const input = canvas.getByLabelText('Pay amount in BNB');
    await userEvent.type(input, '1.25');
    await expect(args.onPayAmountChange).toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Connect Wallet'
    }));
    await expect(args.onCtaClick).toHaveBeenCalled();
  }
}`,...h.parameters?.docs?.source},description:{story:`Drives mode and amount state so a play function can assert the callbacks fire.`,...h.parameters?.docs?.description}}},g=[`ConnectWallet`,`NoOffHoursWarning`,`LimitMode`,`Interactive`]}))();export{f as ConnectWallet,h as Interactive,m as LimitMode,p as NoOffHoursWarning,g as __namedExportsOrder,d as default};