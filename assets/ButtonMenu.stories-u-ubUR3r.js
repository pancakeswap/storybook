import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,r as a,t as o}from"./ButtonMenu-_ny7Qyt4.js";function s(){let[e,t]=(0,c.useState)(0);return(0,l.jsxs)(a,{activeIndex:e,onItemClick:t,children:[(0,l.jsx)(i,{children:`Market`}),(0,l.jsx)(i,{children:`Limit`}),(0,l.jsx)(i,{children:`TWAP`})]})}var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{c=t(r(),1),o(),l=n(),{expect:u,fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/ButtonMenu`,component:a,tags:[`autodocs`]},p={args:{activeIndex:0,onItemClick:d(),children:[(0,l.jsx)(i,{children:`Button 1`},`1`),(0,l.jsx)(i,{children:`Button 2`},`2`),(0,l.jsx)(i,{children:`Button 3`},`3`)]},play:async({canvas:e,args:t})=>{await u(e.getByText(`Button 1`)).toBeInTheDocument(),await u(e.getByText(`Button 2`)).toBeInTheDocument(),await e.getByText(`Button 2`).click(),await u(t.onItemClick).toHaveBeenCalledWith(1,u.anything())}},m={args:{activeIndex:1,variant:`subtle`,children:[(0,l.jsx)(i,{children:`Option A`},`1`),(0,l.jsx)(i,{children:`Option B`},`2`),(0,l.jsx)(i,{children:`Option C`},`3`)]}},h={args:{activeIndex:0,scale:`sm`,children:[(0,l.jsx)(i,{children:`Small 1`},`1`),(0,l.jsx)(i,{children:`Small 2`},`2`)]}},g={args:{activeIndex:0,fullWidth:!0,children:[(0,l.jsx)(i,{children:`Tab 1`},`1`),(0,l.jsx)(i,{children:`Tab 2`},`2`),(0,l.jsx)(i,{children:`Tab 3`},`3`)]},decorators:[e=>(0,l.jsx)(`div`,{style:{width:600},children:(0,l.jsx)(e,{})})]},_={args:{activeIndex:0,disabled:!0,children:[(0,l.jsx)(i,{children:`Disabled 1`},`1`),(0,l.jsx)(i,{children:`Disabled 2`},`2`)]}},v={render:()=>(0,l.jsx)(s,{}),play:async({canvas:e})=>{await e.getByText(`Limit`).click(),await u(e.getByText(`Limit`)).toBeInTheDocument()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    activeIndex: 0,
    onItemClick: fn(),
    children: [<ButtonMenuItem key="1">Button 1</ButtonMenuItem>, <ButtonMenuItem key="2">Button 2</ButtonMenuItem>, <ButtonMenuItem key="3">Button 3</ButtonMenuItem>]
  },
  play: async ({
    canvas,
    args
  }) => {
    await expect(canvas.getByText("Button 1")).toBeInTheDocument();
    await expect(canvas.getByText("Button 2")).toBeInTheDocument();
    await canvas.getByText("Button 2").click();
    await expect(args.onItemClick).toHaveBeenCalledWith(1, expect.anything());
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    activeIndex: 1,
    variant: "subtle",
    children: [<ButtonMenuItem key="1">Option A</ButtonMenuItem>, <ButtonMenuItem key="2">Option B</ButtonMenuItem>, <ButtonMenuItem key="3">Option C</ButtonMenuItem>]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    activeIndex: 0,
    scale: "sm",
    children: [<ButtonMenuItem key="1">Small 1</ButtonMenuItem>, <ButtonMenuItem key="2">Small 2</ButtonMenuItem>]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    activeIndex: 0,
    fullWidth: true,
    children: [<ButtonMenuItem key="1">Tab 1</ButtonMenuItem>, <ButtonMenuItem key="2">Tab 2</ButtonMenuItem>, <ButtonMenuItem key="3">Tab 3</ButtonMenuItem>]
  },
  decorators: [Story => <div style={{
    width: 600
  }}>
        <Story />
      </div>]
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    activeIndex: 0,
    disabled: true,
    children: [<ButtonMenuItem key="1">Disabled 1</ButtonMenuItem>, <ButtonMenuItem key="2">Disabled 2</ButtonMenuItem>]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />,
  play: async ({
    canvas
  }) => {
    await canvas.getByText("Limit").click();
    // After click, "Limit" should become the active button
    await expect(canvas.getByText("Limit")).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Subtle`,`SmallScale`,`FullWidth`,`Disabled`,`Interactive`]}))();export{p as Default,_ as Disabled,g as FullWidth,v as Interactive,h as SmallScale,m as Subtle,y as __namedExportsOrder,f as default};