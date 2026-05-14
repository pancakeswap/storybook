import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,jt as r,kt as i,sn as a}from"./iframe-BH0EN6Jm.js";import{i as o,n as s,r as c,t as l}from"./primitives-CLkCgKst.js";var u,d,f,p,m,h,g=e((()=>{a(),r(),o(),u=i(),d=n(l)`
  height: 100%;
`,f=n.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,p=n.div`
  display: ${({$hidden:e})=>e?`none`:`contents`};
`,m=e=>e,h=({tab:e,onTabChange:t,bookContent:n,tradesContent:r,t:i=m})=>(0,u.jsxs)(d,{children:[(0,u.jsxs)(c,{fullWidth:!0,activeIndex:e===`book`?0:1,onItemClick:e=>t(e===0?`book`:`trades`),children:[(0,u.jsx)(s,{children:i(`Order Book`)}),(0,u.jsx)(s,{children:i(`Trades`)})]}),(0,u.jsxs)(f,{children:[(0,u.jsx)(p,{$hidden:e!==`book`,children:n}),(0,u.jsx)(p,{$hidden:e!==`trades`,children:r})]})]}),h.__docgenInfo={description:`Tabbed container for Order Book + Recent Trades — one panel, one
header. The two child slots are always mounted (hidden via
\`display: none\` rather than conditional rendering) so live WS
subscriptions inside them don't tear down on every tab toggle.`,methods:[],displayName:`BookTradesPanel`,props:{tab:{required:!0,tsType:{name:`union`,raw:`'book' | 'trades'`,elements:[{name:`literal`,value:`'book'`},{name:`literal`,value:`'trades'`}]},description:`Controlled active tab.`},onTabChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tab: BookTradesTab) => void`,signature:{arguments:[{type:{name:`union`,raw:`'book' | 'trades'`,elements:[{name:`literal`,value:`'book'`},{name:`literal`,value:`'trades'`}]},name:`tab`}],return:{name:`void`}}},description:``},bookContent:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Order-book content. Both slots are kept mounted; the inactive one is
hidden via \`display: none\` so live WS subscriptions don't tear down
on each tab switch and the trades ring buffer keeps filling while
the user is on the Book tab.`},tradesContent:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},t:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => string`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`string`}}},description:`Translator.`,defaultValue:{value:`(s: string) => s`,computed:!1}}}}})),_,v,y,b,x,S,C,w,T;e((()=>{_=t(a(),1),g(),v=i(),{fn:y}=__STORYBOOK_MODULE_TEST__,b=({label:e})=>(0,v.jsx)(`div`,{style:{flex:1,display:`grid`,placeItems:`center`,color:`var(--pcs-colors-text-subtle)`,fontFamily:`monospace`,fontSize:12,padding:16},children:e}),x={title:`Widgets/Book Trades Panel 🆕`,component:h,parameters:{layout:`centered`},decorators:[e=>(0,v.jsx)(`div`,{style:{width:320,height:540,display:`flex`},children:(0,v.jsx)(e,{})})],args:{tab:`book`,onTabChange:y(),bookContent:(0,v.jsx)(b,{label:`OrderBook goes here`}),tradesContent:(0,v.jsx)(b,{label:`RecentTrades goes here`})}},S={},C={args:{tab:`trades`}},w={render:e=>{let[t,n]=(0,_.useState)(`book`);return(0,v.jsx)(h,{...e,tab:t,onTabChange:n})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    tab: 'trades'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState<BookTradesTab>('book');
    return <BookTradesPanel {...args} tab={tab} onTabChange={setTab} />;
  }
}`,...w.parameters?.docs?.source},description:{story:`Interactive — tab persisted locally.`,...w.parameters?.docs?.description}}},T=[`Book`,`Trades`,`Interactive`]}))();export{S as Book,w as Interactive,C as Trades,T as __namedExportsOrder,x as default};