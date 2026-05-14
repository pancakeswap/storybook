import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{a as n,kt as r,s as i,sn as a}from"./iframe-BH0EN6Jm.js";import{n as o,t as s}from"./LeverageModal-CmtnW2WG.js";import{n as c,r as l,t as u}from"./Message-fTku3PP4.js";var d,f,p,m,h,g,_,v,y;e((()=>{d=t(a(),1),n(),u(),o(),f=r(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Widgets/Leverage Modal 🆕`,component:s,tags:[`autodocs`],parameters:{layout:`centered`}},h={args:{isOpen:!0,symbol:`BTCUSDT`,currentLeverage:25,minLeverage:1,maxLeverage:100,availableBalance:1e3,onConfirm:p(),onClose:p()}},g={args:{...h.args,isSubmitting:!0}},_={args:{...h.args,errorSlot:(0,f.jsx)(c,{variant:`danger`,children:(0,f.jsx)(l,{children:`Aster rejected the leverage update — try again in a moment.`})})}},v={args:{isOpen:!1,symbol:`ETHUSDT`,currentLeverage:10,availableBalance:500,onConfirm:p(),onClose:p()},render:e=>{let[t,n]=(0,d.useState)(!1),[r,a]=(0,d.useState)(e.currentLeverage);return(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(i,{onClick:()=>n(!0),children:[`Adjust leverage (`,r,`x)`]}),(0,f.jsx)(s,{...e,isOpen:t,currentLeverage:r,onConfirm:e=>{a(e),n(!1)},onClose:()=>n(!1)})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    symbol: 'BTCUSDT',
    currentLeverage: 25,
    minLeverage: 1,
    maxLeverage: 100,
    availableBalance: 1000,
    onConfirm: fn(),
    onClose: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Open.args!,
    isSubmitting: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Open.args!,
    errorSlot: <Message variant="danger">
        <MessageText>Aster rejected the leverage update — try again in a moment.</MessageText>
      </Message>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    symbol: 'ETHUSDT',
    currentLeverage: 10,
    availableBalance: 500,
    onConfirm: fn(),
    onClose: fn()
  },
  render: args => {
    const [open, setOpen] = useState(false);
    const [lev, setLev] = useState(args.currentLeverage);
    return <div>
        <Button onClick={() => setOpen(true)}>Adjust leverage ({lev}x)</Button>
        <LeverageModal {...args} isOpen={open} currentLeverage={lev} onConfirm={value => {
        setLev(value);
        setOpen(false);
      }} onClose={() => setOpen(false)} />
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Interactive — drives the modal from a parent button to mirror the consumer's flow.`,...v.parameters?.docs?.description}}},y=[`Open`,`Submitting`,`WithError`,`Interactive`]}))();export{v as Interactive,h as Open,g as Submitting,_ as WithError,y as __namedExportsOrder,m as default};