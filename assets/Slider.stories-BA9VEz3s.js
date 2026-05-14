import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,t as a}from"./Slider-C1S5TFjq.js";var o,s,c,l,u,d,f,p,m;e((()=>{o=t(r(),1),i(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Slider`,component:a,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,s.jsx)(`div`,{style:{width:360,padding:24},children:(0,s.jsx)(e,{})})],args:{name:`demo-slider`,onValueChanged:c()}},u={args:{min:0,max:100,value:25,width:`100%`},render:e=>{let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(a,{...e,value:t,onValueChanged:n})}},d={args:{min:0,max:100,value:40,step:1,width:`100%`},render:e=>{let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(a,{...e,value:t,onValueChanged:n,valueLabel:`${t}%`})}},f={args:{min:0,max:100,value:25,step:1,width:`100%`,variant:`dotted`,dotStep:25},render:e=>{let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(a,{...e,value:t,onValueChanged:n})}},p={args:{min:0,max:100,value:60,disabled:!0,width:`100%`},render:e=>{let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(a,{...e,value:t,onValueChanged:n})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 25,
    width: '100%'
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Slider {...args} value={value} onValueChanged={setValue} />;
  }
}`,...u.parameters?.docs?.source},description:{story:`Default bunny variant — the classic PCS bunny-thumb slider.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 40,
    step: 1,
    width: '100%'
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Slider {...args} value={value} onValueChanged={setValue} valueLabel={\`\${value}%\`} />;
  }
}`,...d.parameters?.docs?.source},description:{story:'Bunny with live `valueLabel` above the thumb (renders "MAX" at 100).',...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 25,
    step: 1,
    width: '100%',
    variant: 'dotted',
    dotStep: 25
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Slider {...args} value={value} onValueChanged={setValue} />;
  }
}`,...f.parameters?.docs?.source},description:{story:`Dotted variant — percentage rail with clickable stops. Used by the
perps OrderPanel size-percent slider.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 60,
    disabled: true,
    width: '100%'
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Slider {...args} value={value} onValueChanged={setValue} />;
  }
}`,...p.parameters?.docs?.source},description:{story:`Disabled — bunny + bar lose color, input ignores input.`,...p.parameters?.docs?.description}}},m=[`Bunny`,`BunnyWithValueLabel`,`Dotted`,`Disabled`]}))();export{u as Bunny,d as BunnyWithValueLabel,p as Disabled,f as Dotted,m as __namedExportsOrder,l as default};