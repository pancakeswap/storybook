import{n as e}from"./chunk-zsgVPwQN.js";import{kt as t}from"./iframe-BH0EN6Jm.js";import{n,t as r}from"./Alert-Cg-0-Y3a.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Alert`,component:n,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,i.jsx)(`div`,{style:{width:420},children:(0,i.jsx)(e,{})})],args:{title:`Heads up`,children:`This is an alert message — pass content via children.`}},s={args:{variant:`info`}},c={args:{variant:`success`,title:`Order placed`,children:`Your limit order is resting on the book.`}},l={args:{variant:`warning`,title:`Low margin`,children:`You are within 10% of the maintenance margin threshold.`}},u={args:{variant:`danger`,title:`Order rejected`,children:`Aster returned: Margin is insufficient.`}},d={args:{variant:`info`,title:`You can close me`,children:`Click the × in the corner.`,onClick:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Order placed',
    children: 'Your limit order is resting on the book.'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Low margin',
    children: 'You are within 10% of the maintenance margin threshold.'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Order rejected',
    children: 'Aster returned: Margin is insufficient.'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'You can close me',
    children: 'Click the × in the corner.',
    onClick: fn()
  }
}`,...d.parameters?.docs?.source},description:{story:"Dismissible — pass `onClick` to render a close button in the upper-right.",...d.parameters?.docs?.description}}},f=[`Info`,`Success`,`Warning`,`Danger`,`Dismissible`]}))();export{u as Danger,d as Dismissible,s as Info,c as Success,l as Warning,f as __namedExportsOrder,o as default};