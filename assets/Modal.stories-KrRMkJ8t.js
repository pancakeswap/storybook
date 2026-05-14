import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{a as n,i as r,kt as i,m as a,n as o,nt as s,r as c,rt as l,s as u,sn as d,t as f}from"./iframe-BH0EN6Jm.js";import{t as p}from"./Text-BRDHz0kF.js";var m,h,g,_,v,y,b,x;e((()=>{m=t(d(),1),n(),s(),p(),o(),r(),h=i(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Widgets/Modal`,component:f,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"The PCS `Modal` is the titled chrome (header + close button + body slot).\nThe `ModalV2` wrapper owns the overlay, portal, and animation — its\n`isOpen` prop is controlled by the consumer.\n\nEvery story here renders the `ModalV2` + `Modal` pair together, which is\nhow downstream widgets (LeverageModal, DepositModal, …) compose them."}}}},v={args:{title:`Modal title`,onDismiss:g()},render:e=>(0,h.jsx)(c,{isOpen:!0,onDismiss:e.onDismiss,closeOnOverlayClick:!0,children:(0,h.jsx)(f,{...e,children:(0,h.jsxs)(l,{flexDirection:`column`,style:{gap:12,minWidth:320,maxWidth:420},children:[(0,h.jsx)(a,{children:`Modal body content lives here. Pass anything as children.`}),(0,h.jsx)(u,{scale:`md`,onClick:e.onDismiss,children:`OK`})]})})})},y={args:{title:`Confirm action`,onDismiss:g()},render:e=>{let[t,n]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(u,{onClick:()=>n(!0),children:`Open modal`}),(0,h.jsx)(c,{isOpen:t,onDismiss:()=>n(!1),closeOnOverlayClick:!0,children:(0,h.jsx)(f,{...e,onDismiss:()=>n(!1),children:(0,h.jsxs)(l,{flexDirection:`column`,style:{gap:12,minWidth:320,maxWidth:420},children:[(0,h.jsx)(a,{children:`Are you sure you want to continue?`}),(0,h.jsxs)(l,{style:{gap:8},children:[(0,h.jsx)(u,{variant:`tertiary`,scale:`md`,style:{flex:1},onClick:()=>n(!1),children:`Cancel`}),(0,h.jsx)(u,{scale:`md`,style:{flex:1},onClick:()=>n(!1),children:`Confirm`})]})]})})})]})}},b={args:{title:`Step 2 of 3`,onDismiss:g(),onBack:g()},render:e=>(0,h.jsx)(c,{isOpen:!0,onDismiss:e.onDismiss,children:(0,h.jsx)(f,{...e,children:(0,h.jsx)(l,{flexDirection:`column`,style:{gap:12,minWidth:320,maxWidth:420},children:(0,h.jsx)(a,{children:"The ← arrow appears because `onBack` is defined."})})})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Modal title',
    onDismiss: fn()
  },
  render: args => <ModalV2 isOpen onDismiss={args.onDismiss} closeOnOverlayClick>
      <Modal {...args}>
        <Flex flexDirection="column" style={{
        gap: 12,
        minWidth: 320,
        maxWidth: 420
      }}>
          <Text>Modal body content lives here. Pass anything as children.</Text>
          <Button scale="md" onClick={args.onDismiss}>
            OK
          </Button>
        </Flex>
      </Modal>
    </ModalV2>
}`,...v.parameters?.docs?.source},description:{story:`Static, always-open for layout review in the storybook canvas.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Confirm action',
    onDismiss: fn()
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <ModalV2 isOpen={open} onDismiss={() => setOpen(false)} closeOnOverlayClick>
          <Modal {...args} onDismiss={() => setOpen(false)}>
            <Flex flexDirection="column" style={{
            gap: 12,
            minWidth: 320,
            maxWidth: 420
          }}>
              <Text>Are you sure you want to continue?</Text>
              <Flex style={{
              gap: 8
            }}>
                <Button variant="tertiary" scale="md" style={{
                flex: 1
              }} onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button scale="md" style={{
                flex: 1
              }} onClick={() => setOpen(false)}>
                  Confirm
                </Button>
              </Flex>
            </Flex>
          </Modal>
        </ModalV2>
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:"The usage pattern a consumer will typically need: parent state drives\n`isOpen`, a trigger button opens the modal, dismissal flips it back.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Step 2 of 3',
    onDismiss: fn(),
    onBack: fn()
  },
  render: args => <ModalV2 isOpen onDismiss={args.onDismiss}>
      <Modal {...args}>
        <Flex flexDirection="column" style={{
        gap: 12,
        minWidth: 320,
        maxWidth: 420
      }}>
          <Text>The ← arrow appears because \`onBack\` is defined.</Text>
        </Flex>
      </Modal>
    </ModalV2>
}`,...b.parameters?.docs?.source},description:{story:"Back-button slot — pass `onBack` to render an arrow in the header for\nmulti-step flows (e.g. the deposit wizard).",...b.parameters?.docs?.description}}},x=[`Open`,`Interactive`,`WithBackButton`]}))();export{y as Interactive,v as Open,b as WithBackButton,x as __namedExportsOrder,_ as default};