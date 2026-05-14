import{n as e}from"./chunk-zsgVPwQN.js";import{Nt as t,jt as n,kt as r,m as i}from"./iframe-BH0EN6Jm.js";import{t as a}from"./primitives-TqZgnvKf.js";function o(e){return Array.isArray(e)?`linear-gradient(to bottom, ${e[0]}, ${e[1]})`:e}function s({items:e}){return(0,c.jsxs)(l,{children:[(0,c.jsx)(u,{children:e.filter(e=>e.percentage>0).map((e,t,n)=>(0,c.jsx)(d,{$pct:e.percentage,$bg:o(e.color),$isFirst:t===0,$isLast:t===n.length-1},e.title))}),(0,c.jsx)(f,{children:e.map(e=>(0,c.jsxs)(p,{children:[(0,c.jsxs)(m,{children:[(0,c.jsx)(h,{$bg:o(e.color)}),(0,c.jsxs)(g,{children:[(0,c.jsx)(i,{bold:!0,fontSize:`16px`,color:`textSubtle`,children:e.title}),(0,c.jsxs)(i,{fontSize:`12px`,color:`textSubtle`,style:{letterSpacing:`0.12px`},children:[e.percentage,`%`]})]})]}),(0,c.jsx)(i,{bold:!0,fontSize:`16px`,style:{fontVariantNumeric:`tabular-nums`},children:e.balance})]},e.title))})]})}var c,l,u,d,f,p,m,h,g,_=e((()=>{n(),a(),c=r(),l=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,u=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.input};
  border: 1px solid ${({theme:e})=>e.colors.inputSecondary};
`,d=t.div`
  height: 100%;
  min-width: ${({$pct:e})=>e>0?`2px`:`0`};
  flex: ${({$pct:e})=>e} 0 0%;
  background: ${({$bg:e})=>e};
  border-radius: ${({$isFirst:e,$isLast:t})=>{let n=e?`99px`:`0`,r=t?`99px`:`0`;return`${n} ${r} ${r} ${n}`}};
`,f=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,p=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,m=t.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,h=t.div`
  width: 4px;
  align-self: stretch;
  border-radius: 99px;
  background: ${({$bg:e})=>e};
`,g=t.div`
  display: flex;
  flex-direction: column;
`,s.__docgenInfo={description:``,methods:[],displayName:`PortfolioBreakdown`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreakdownItem`}],raw:`BreakdownItem[]`},description:``}}}})),v=e((()=>{_()})),y,b,x,S,C,w,T,E,D;e((()=>{v(),y=r(),{expect:b}=__STORYBOOK_MODULE_TEST__,x={title:`Widgets/PortfolioBreakdown`,component:s,tags:[`autodocs`],decorators:[e=>(0,y.jsx)(`div`,{style:{maxWidth:400},children:(0,y.jsx)(e,{})})]},S=[{color:[`#53DEE9`,`#1FC7D4`],title:`Wallet balance`,percentage:62,balance:`$4,00.01`},{color:[`#8051D6`,`#492286`],title:`Positions`,percentage:38,balance:`$1,492.25`},{color:[`#CBD7EF`,`#9A9FD0`],title:`Unclaimed rewards`,percentage:0,balance:`$0`}],C={args:{items:S},play:async({canvas:e})=>{await b(e.getByText(`Wallet balance`)).toBeInTheDocument(),await b(e.getByText(`62%`)).toBeInTheDocument(),await b(e.getByText(`$4,00.01`)).toBeInTheDocument(),await b(e.getByText(`Positions`)).toBeInTheDocument(),await b(e.getByText(`38%`)).toBeInTheDocument(),await b(e.getByText(`Unclaimed rewards`)).toBeInTheDocument()}},w={args:{items:[{color:[`#53DEE9`,`#1FC7D4`],title:`DeFi`,percentage:33,balance:`$1,200.00`},{color:[`#8051D6`,`#492286`],title:`NFTs`,percentage:33,balance:`$1,200.00`},{color:[`#CBD7EF`,`#9A9FD0`],title:`Staking`,percentage:34,balance:`$1,236.00`}]}},T={args:{items:[{color:[`#53DEE9`,`#1FC7D4`],title:`Wallet balance`,percentage:100,balance:`$10,000.00`}]}},E={args:{items:[{color:`#1FC7D4`,title:`Primary`,percentage:50,balance:`$5,000`},{color:`#7645D9`,title:`Secondary`,percentage:30,balance:`$3,000`},{color:`#ED4B9E`,title:`Failure`,percentage:20,balance:`$2,000`}]}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Wallet balance")).toBeInTheDocument();
    await expect(canvas.getByText("62%")).toBeInTheDocument();
    await expect(canvas.getByText("$4,00.01")).toBeInTheDocument();
    await expect(canvas.getByText("Positions")).toBeInTheDocument();
    await expect(canvas.getByText("38%")).toBeInTheDocument();
    await expect(canvas.getByText("Unclaimed rewards")).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      color: ["#53DEE9", "#1FC7D4"],
      title: "DeFi",
      percentage: 33,
      balance: "$1,200.00"
    }, {
      color: ["#8051D6", "#492286"],
      title: "NFTs",
      percentage: 33,
      balance: "$1,200.00"
    }, {
      color: ["#CBD7EF", "#9A9FD0"],
      title: "Staking",
      percentage: 34,
      balance: "$1,236.00"
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      color: ["#53DEE9", "#1FC7D4"],
      title: "Wallet balance",
      percentage: 100,
      balance: "$10,000.00"
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      color: "#1FC7D4",
      title: "Primary",
      percentage: 50,
      balance: "$5,000"
    }, {
      color: "#7645D9",
      title: "Secondary",
      percentage: 30,
      balance: "$3,000"
    }, {
      color: "#ED4B9E",
      title: "Failure",
      percentage: 20,
      balance: "$2,000"
    }]
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`EvenSplit`,`SingleItem`,`SolidColors`]}))();export{C as Default,w as EvenSplit,T as SingleItem,E as SolidColors,D as __namedExportsOrder,x as default};