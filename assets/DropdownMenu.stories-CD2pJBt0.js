import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Et as n,K as r,Nt as i,Q as a,jt as o,kt as s,s as c,sn as l,tt as u}from"./iframe-BH0EN6Jm.js";import{t as d}from"./primitives-TqZgnvKf.js";function f({trigger:e,items:t,placement:n=`bottom-end`}){let[r,i]=(0,p.useState)(!1),a=(0,p.useRef)(null),o=(0,p.useRef)(null),[s,c]=(0,p.useState)({top:0,left:0}),l=(0,p.useCallback)(()=>i(e=>!e),[]);return(0,p.useLayoutEffect)(()=>{if(!r||!a.current||!o.current)return;let e=a.current.getBoundingClientRect(),t=o.current.getBoundingClientRect(),i=e.bottom+8,s;s=n===`bottom-end`?e.right-t.width:e.left;let l=window.innerWidth-t.width-8;s=Math.max(8,Math.min(s,l)),c({top:i,left:s})},[r,n]),(0,p.useEffect)(()=>{if(!r)return;let e=e=>{let t=e.target;a.current&&!a.current.contains(t)&&o.current&&!o.current.contains(t)&&i(!1)};return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[r]),(0,h.jsxs)(g,{ref:a,children:[(0,h.jsx)(_,{onClick:l,children:e}),r&&(0,m.createPortal)((0,h.jsx)(v,{ref:o,style:{top:s.top,left:s.left},children:t.map(e=>(0,h.jsx)(y,{startIcon:e.icon,onClick:()=>{e.onClick?.(),i(!1)},children:e.label},e.label))}),document.body)]})}var p,m,h,g,_,v,y,b=e((()=>{p=t(l(),1),m=t(n(),1),o(),d(),h=s(),g=i.div`
  display: inline-flex;
`,_=i.div`
  cursor: pointer;
  display: inline-flex;
`,v=i.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  width: 220px;
  flex-direction: column;
  align-items: flex-start;
  background: ${({theme:e})=>e.colors.input};
  border-top: 1px solid ${({theme:e})=>e.colors.inputSecondary};
  border-right: 1px solid ${({theme:e})=>e.colors.inputSecondary};
  border-bottom: 2px solid ${({theme:e})=>e.colors.inputSecondary};
  border-left: 1px solid ${({theme:e})=>e.colors.inputSecondary};
  border-radius: 16px;
  box-shadow:
    0 0 0 1px ${({theme:e})=>e.colors.secondary},
    0 0 0 4px rgba(118, 69, 217, 0.2);
  overflow: hidden;
`,y=i(c).attrs({variant:`text`})`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  width: 100%;
  border-radius: 0;
  justify-content: flex-start;
  height: auto;
  font-family: Kanit, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  font-feature-settings: 'liga' off;
  color: ${({theme:e})=>e.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  svg {
    fill: ${({theme:e})=>e.colors.textSubtle};
  }
  &:hover:not(:disabled):not(:active) {
    background: ${({theme:e})=>e.colors.tertiary};
  }
`,f.__docgenInfo={description:``,methods:[],displayName:`DropdownMenu`,props:{trigger:{required:!0,tsType:{name:`ReactNode`},description:`The trigger element (e.g. a Button)`},items:{required:!0,tsType:{name:`Array`,elements:[{name:`DropdownMenuItem`}],raw:`DropdownMenuItem[]`},description:`Menu items to display in the panel`},placement:{required:!1,tsType:{name:`union`,raw:`"bottom-start" | "bottom-end"`,elements:[{name:`literal`,value:`"bottom-start"`},{name:`literal`,value:`"bottom-end"`}]},description:`Placement relative to trigger. Default "bottom-end"`,defaultValue:{value:`"bottom-end"`,computed:!1}}}}})),x=e((()=>{b()})),S,C,w,T,E,D,O,k;e((()=>{x(),d(),u(),S=s(),{expect:C,fn:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Widgets/DropdownMenu`,component:f,tags:[`autodocs`]},D={args:{trigger:(0,S.jsx)(c,{variant:`light`,scale:`sm`,endIcon:(0,S.jsx)(r,{width:`20px`}),children:`Share`}),items:[{label:`Copy portfolio link`,icon:(0,S.jsx)(r,{width:`20px`}),onClick:w()},{label:`Share on X`,icon:(0,S.jsx)(a,{width:`20px`}),onClick:w()}]},play:async({canvas:e})=>{let t=e.getByText(`Share`);await C(t).toBeInTheDocument(),await t.click();let n=T(document.body);await C(n.getByText(`Copy portfolio link`)).toBeInTheDocument(),await C(n.getByText(`Share on X`)).toBeInTheDocument()}},O={args:{placement:`bottom-start`,trigger:(0,S.jsx)(c,{variant:`subtle`,scale:`sm`,children:`Options`}),items:[{label:`Edit`,onClick:w()},{label:`Delete`,onClick:w()}]}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="light" scale="sm" endIcon={<ShareIcon width="20px" />}>
        Share
      </Button>,
    items: [{
      label: "Copy portfolio link",
      icon: <ShareIcon width="20px" />,
      onClick: fn()
    }, {
      label: "Share on X",
      icon: <TwitterIcon width="20px" />,
      onClick: fn()
    }]
  },
  play: async ({
    canvas
  }) => {
    // Panel should not be visible initially
    const trigger = canvas.getByText("Share");
    await expect(trigger).toBeInTheDocument();

    // Open the dropdown (portal renders in document.body)
    await trigger.click();
    const body = within(document.body);
    await expect(body.getByText("Copy portfolio link")).toBeInTheDocument();
    await expect(body.getByText("Share on X")).toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    placement: "bottom-start",
    trigger: <Button variant="subtle" scale="sm">
        Options
      </Button>,
    items: [{
      label: "Edit",
      onClick: fn()
    }, {
      label: "Delete",
      onClick: fn()
    }]
  }
}`,...O.parameters?.docs?.source}}},k=[`ShareButton`,`BottomStart`]}))();export{O as BottomStart,D as ShareButton,k as __namedExportsOrder,E as default};