import{n as e}from"./chunk-zsgVPwQN.js";import{a as t,kt as n,s as r}from"./iframe-BH0EN6Jm.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./Toast-n3VrSlMH.js";function u(){let{toastInfo:e,toastSuccess:t,toastWarning:n,toastError:i}=c();return(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,d.jsx)(r,{onClick:()=>e(`Info`,`Informational message`),children:`Info`}),(0,d.jsx)(r,{onClick:()=>t(`Success`,`Transaction confirmed!`),variant:`success`,children:`Success`}),(0,d.jsx)(r,{onClick:()=>n(`Warning`,`High slippage`),variant:`tertiary`,children:`Warning`}),(0,d.jsx)(r,{onClick:()=>i(`Error`,`Transaction failed`),variant:`danger`,children:`Error`})]})}var d,f,p,m,h,g,_,v,y,b;e((()=>{i(),l(),t(),d=n(),{expect:f,fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Toast`,component:s,tags:[`autodocs`],decorators:[e=>(0,d.jsxs)(o,{children:[(0,d.jsx)(a,{duration:6e3,position:`top-right`,gap:24}),(0,d.jsx)(e,{})]})]},h={args:{toast:{id:`1`,type:`info`,title:`Info`,description:`This is an informational message.`},onRemove:p()},play:async({canvas:e})=>{await f(e.getByText(`Info`)).toBeInTheDocument()}},g={args:{toast:{id:`2`,type:`success`,title:`Success`,description:`Transaction confirmed!`},onRemove:p()}},_={args:{toast:{id:`3`,type:`warning`,title:`Warning`,description:`Slippage may be high.`},onRemove:p()}},v={args:{toast:{id:`4`,type:`danger`,title:`Error`,description:`Transaction failed. Please try again.`},onRemove:p()}},y={render:()=>(0,d.jsx)(u,{}),play:async({canvas:e})=>{await f(e.getByText(`Info`)).toBeInTheDocument()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    toast: {
      id: "1",
      type: "info",
      title: "Info",
      description: "This is an informational message."
    },
    onRemove: fn()
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Info")).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    toast: {
      id: "2",
      type: "success",
      title: "Success",
      description: "Transaction confirmed!"
    },
    onRemove: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    toast: {
      id: "3",
      type: "warning",
      title: "Warning",
      description: "Slippage may be high."
    },
    onRemove: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    toast: {
      id: "4",
      type: "danger",
      title: "Error",
      description: "Transaction failed. Please try again."
    },
    onRemove: fn()
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Info")).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}},b=[`Info`,`Success`,`Warning`,`Danger`,`Interactive`]}))();export{v as Danger,h as Info,y as Interactive,g as Success,_ as Warning,b as __namedExportsOrder,m as default};