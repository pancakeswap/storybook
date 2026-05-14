import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,P as r,U as i,jt as a,k as o,kt as s,m as c,sn as l,tt as u}from"./iframe-BH0EN6Jm.js";import{t as d}from"./primitives-TqZgnvKf.js";function f(e){return e.length<=10?e:`${e.slice(0,6)}...${e.slice(-4)}`}function p({address:e,avatarUrl:t,walletIconUrl:n,size:a=40,fontSize:s=32,onCopy:l}){let[u,d]=(0,m.useState)(!1),p=(0,m.useCallback)(()=>{l?l(e):navigator.clipboard.writeText(e),d(!0),setTimeout(()=>d(!1),2e3)},[e,l]);return(0,h.jsxs)(g,{children:[(0,h.jsxs)(_,{$size:a,children:[t?(0,h.jsx)(v,{src:t,alt:`Wallet avatar`,$size:a}):(0,h.jsx)(i,{size:a,"aria-label":`Wallet avatar`}),n&&(0,h.jsx)(y,{children:(0,h.jsx)(b,{src:n,alt:`Wallet provider`})})]}),(0,h.jsx)(c,{bold:!0,fontSize:`${s}px`,style:{fontFamily:`Kanit, sans-serif`,lineHeight:`120%`,letterSpacing:`-0.32px`,fontFeatureSettings:`"liga" off`,color:`var(--pcs-colors-text)`},children:f(e)}),(0,h.jsx)(x,{onClick:p,"aria-label":`Copy address`,children:u?(0,h.jsx)(o,{width:`24px`,height:`24px`,color:`success`}):(0,h.jsx)(r,{width:`24px`,height:`24px`})})]})}var m,h,g,_,v,y,b,x,S=e((()=>{m=t(l(),1),a(),d(),u(),h=s(),g=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,_=n.div`
  position: relative;
  flex-shrink: 0;
  padding-right: 12px;
`,v=n.img`
  width: ${({$size:e})=>e}px;
  height: ${({$size:e})=>e}px;
  border-radius: 50%;
  display: block;
`,y=n.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: white;
  border-bottom: 1px solid ${({theme:e})=>e.colors.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6px 2.4px;
  box-sizing: border-box;
`,b=n.img`
  width: 12px;
  height: 12px;
`,x=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.textSubtle};
  &:hover {
    opacity: 0.65;
  }
  &:active {
    transform: translateY(1px);
  }
`,p.__docgenInfo={description:``,methods:[],displayName:`WalletAvatar`,props:{address:{required:!0,tsType:{name:`string`},description:`Wallet address (full hex string)`},avatarUrl:{required:!1,tsType:{name:`string`},description:`Avatar image URL (e.g. pixel art profile picture). Falls back to PixelAvatarIcon if omitted.`},walletIconUrl:{required:!1,tsType:{name:`string`},description:`Wallet provider icon URL (e.g. MetaMask fox)`},size:{required:!1,tsType:{name:`number`},description:`Avatar diameter in px. Default 40`,defaultValue:{value:`40`,computed:!1}},fontSize:{required:!1,tsType:{name:`number`},description:`Address font size in px. Default 32`,defaultValue:{value:`32`,computed:!1}},onCopy:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(address: string) => void`,signature:{arguments:[{type:{name:`string`},name:`address`}],return:{name:`void`}}},description:`Callback when copy button is clicked. If omitted, uses navigator.clipboard`}}}})),C=e((()=>{S()})),w,T,E,D,O,k,A,j,M,N;e((()=>{C(),{expect:w,fn:T}=__STORYBOOK_MODULE_TEST__,E={title:`Widgets/WalletAvatar`,component:p,tags:[`autodocs`]},D=`https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg`,O={args:{address:`0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461`,walletIconUrl:D},play:async({canvas:e})=>{await w(e.getByText(`0x40Cf...5461`)).toBeInTheDocument(),await w(e.getByLabelText(`Copy address`)).toBeInTheDocument(),await w(e.getByLabelText(`Wallet avatar`)).toBeInTheDocument()}},k={args:{address:`0x1234567890abcdef1234567890abcdef12345678`,avatarUrl:`https://api.dicebear.com/9.x/pixel-art/svg?seed=0x1234`,walletIconUrl:D},play:async({canvas:e})=>{await w(e.getByText(`0x1234...5678`)).toBeInTheDocument(),await w(e.getByAltText(`Wallet avatar`)).toBeInTheDocument()}},A={args:{address:`0x1234567890abcdef1234567890abcdef12345678`},play:async({canvas:e})=>{await w(e.getByText(`0x1234...5678`)).toBeInTheDocument()}},j={args:{address:`0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef`,walletIconUrl:D,onCopy:T()},play:async({canvas:e,args:t})=>{await e.getByLabelText(`Copy address`).click(),await w(t.onCopy).toHaveBeenCalledWith(`0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef`)}},M={args:{address:`0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461`,walletIconUrl:D,size:24,fontSize:20}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    address: "0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461",
    walletIconUrl: metamaskIcon
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("0x40Cf...5461")).toBeInTheDocument();
    await expect(canvas.getByLabelText("Copy address")).toBeInTheDocument();
    await expect(canvas.getByLabelText("Wallet avatar")).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    avatarUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=0x1234",
    walletIconUrl: metamaskIcon
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("0x1234...5678")).toBeInTheDocument();
    await expect(canvas.getByAltText("Wallet avatar")).toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("0x1234...5678")).toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    address: "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    walletIconUrl: metamaskIcon,
    onCopy: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    const copyBtn = canvas.getByLabelText("Copy address");
    await copyBtn.click();
    await expect(args.onCopy).toHaveBeenCalledWith("0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef");
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    address: "0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461",
    walletIconUrl: metamaskIcon,
    size: 24,
    fontSize: 20
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithCustomAvatar`,`WithoutWalletIcon`,`CustomCopyHandler`,`SmallSize`]}))();export{j as CustomCopyHandler,O as Default,M as SmallSize,k as WithCustomAvatar,A as WithoutWalletIcon,N as __namedExportsOrder,E as default};