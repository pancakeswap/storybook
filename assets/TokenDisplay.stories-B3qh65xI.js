import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{I as n,Nt as r,jt as i,kt as a,m as o,sn as s,tt as c}from"./iframe-BH0EN6Jm.js";import{t as l}from"./primitives-TqZgnvKf.js";var u,d,f,p,m,h=e((()=>{u=t(s(),1),i(),c(),d=a(),f={},p=r.img`
  width: ${({$size:e})=>e};
  height: ${({$size:e})=>e};
  border-radius: 50%;
  transition: opacity 0.3s ease;
  opacity: ${({$isLoaded:e})=>e?1:0};
`,m=({srcs:e,size:t=`40px`,alt:r,...i})=>{let[,a]=(0,u.useState)(0),[o,s]=(0,u.useState)(!1),c=e.find(e=>!f[e]);return c?(0,d.jsx)(p,{...i,alt:r,src:c,$isLoaded:o,$size:t,onLoad:()=>s(!0),onError:()=>{f[c]=!0,s(!1),a(e=>e+1)}}):(0,d.jsx)(n,{width:t,height:t})},m.__docgenInfo={description:``,methods:[],displayName:`TokenLogo`,props:{size:{defaultValue:{value:`"40px"`,computed:!1},required:!1}}}}));function g({token:e,size:t=40,showChainLogo:n}){let r=Math.round(t*v),i=n??!!e.chainLogoUrl;return(0,_.jsxs)(y,{children:[(0,_.jsxs)(b,{$size:t,children:[(0,_.jsx)(m,{srcs:e.logoUrls,size:`${t}px`,alt:`${e.symbol} logo`}),(0,_.jsx)(x,{}),i&&e.chainLogoUrl&&(0,_.jsx)(S,{$badgeSize:r,children:(0,_.jsx)(C,{src:e.chainLogoUrl,alt:e.chainName??`chain`,$size:Math.round(r*.667)})})]}),(0,_.jsxs)(w,{children:[(0,_.jsx)(o,{bold:!0,fontSize:`16px`,ellipsis:!0,children:e.symbol}),e.chainName&&(0,_.jsx)(o,{fontSize:`12px`,color:`textSubtle`,bold:!0,textTransform:`uppercase`,ellipsis:!0,style:{letterSpacing:`0.24px`},children:e.chainName})]})]})}var _,v,y,b,x,S,C,w,T=e((()=>{i(),l(),h(),_=a(),v=.4167,y=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,b=r.div`
  position: relative;
  width: ${({$size:e})=>e}px;
  height: ${({$size:e})=>e}px;
  flex-shrink: 0;
`,x=r.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`,S=r.div`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: ${({$badgeSize:e})=>e}px;
  height: ${({$badgeSize:e})=>e}px;
  border-radius: 35%;
  background: ${({theme:e})=>e.colors.card};
  border: 2px solid ${({theme:e})=>e.colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,C=r.img`
  width: ${({$size:e})=>e}px;
  height: ${({$size:e})=>e}px;
  border-radius: 35%;
`,w=r.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,g.__docgenInfo={description:``,methods:[],displayName:`TokenDisplay`,props:{token:{required:!0,tsType:{name:`TokenInfo`},description:``},size:{required:!1,tsType:{name:`number`},description:`Token logo diameter in px. Default 40`,defaultValue:{value:`40`,computed:!1}},showChainLogo:{required:!1,tsType:{name:`boolean`},description:`Show the chain network badge on the logo. Default true if chainLogoUrl provided`}}}})),E=e((()=>{T(),h()})),D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{E(),D=a(),{expect:O}=__STORYBOOK_MODULE_TEST__,k={symbol:`BNB`,chainName:`BNB Chain`,logoUrls:[`https://tokens.pancakeswap.finance/images/symbol/bnb.png`],chainLogoUrl:`https://assets.pancakeswap.finance/web/chains/square/56.svg`},A={symbol:`CAKE`,chainName:`BNB Chain`,logoUrls:[`https://tokens.pancakeswap.finance/images/symbol/cake.png`],chainLogoUrl:`https://assets.pancakeswap.finance/web/chains/square/56.svg`},j={symbol:`ETH`,chainName:`Ethereum`,logoUrls:[`https://tokens.pancakeswap.finance/images/symbol/eth.png`],chainLogoUrl:`https://assets.pancakeswap.finance/web/chains/square/1.svg`},M={symbol:`USDT`,chainName:`Arbitrum`,logoUrls:[`https://tokens.pancakeswap.finance/images/symbol/usdt.png`],chainLogoUrl:`https://assets.pancakeswap.finance/web/chains/square/42161.svg`},N={symbol:`UNKNOWN`,chainName:`Unknown Chain`,logoUrls:[`https://invalid-url.example/nothing.png`]},P={title:`Widgets/TokenDisplay`,component:g,tags:[`autodocs`]},F={args:{token:k},play:async({canvas:e})=>{await O(e.getByText(`BNB`)).toBeInTheDocument(),await O(e.getByText(`BNB Chain`)).toBeInTheDocument(),await O(e.getByAltText(`BNB logo`)).toBeInTheDocument()}},I={args:{token:{...A,chainLogoUrl:void 0}},play:async({canvas:e})=>{await O(e.getByText(`CAKE`)).toBeInTheDocument()}},L={args:{token:{symbol:`WBTC`,logoUrls:[`https://tokens.pancakeswap.finance/images/symbol/wbtc.png`]}},play:async({canvas:e})=>{await O(e.getByText(`WBTC`)).toBeInTheDocument()}},R={args:{token:N},play:async({canvas:e})=>{await O(e.getByText(`UNKNOWN`)).toBeInTheDocument()}},z={args:{token:j,size:24},play:async({canvas:e})=>{await O(e.getByText(`ETH`)).toBeInTheDocument()}},B={args:{token:A,size:56}},V={render:()=>(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,D.jsx)(g,{token:k}),(0,D.jsx)(g,{token:A}),(0,D.jsx)(g,{token:j}),(0,D.jsx)(g,{token:M}),(0,D.jsx)(g,{token:N})]}),play:async({canvas:e})=>{await O(e.getByText(`BNB`)).toBeInTheDocument(),await O(e.getByText(`CAKE`)).toBeInTheDocument(),await O(e.getByText(`ETH`)).toBeInTheDocument(),await O(e.getByText(`USDT`)).toBeInTheDocument(),await O(e.getByText(`UNKNOWN`)).toBeInTheDocument()}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    token: bnb
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("BNB")).toBeInTheDocument();
    await expect(canvas.getByText("BNB Chain")).toBeInTheDocument();
    await expect(canvas.getByAltText("BNB logo")).toBeInTheDocument();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    token: {
      ...cake,
      chainLogoUrl: undefined
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("CAKE")).toBeInTheDocument();
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    token: {
      symbol: "WBTC",
      logoUrls: ["https://tokens.pancakeswap.finance/images/symbol/wbtc.png"]
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("WBTC")).toBeInTheDocument();
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    token: unknownToken
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("UNKNOWN")).toBeInTheDocument();
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    token: eth,
    size: 24
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("ETH")).toBeInTheDocument();
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    token: cake,
    size: 56
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <TokenDisplay token={bnb} />
      <TokenDisplay token={cake} />
      <TokenDisplay token={eth} />
      <TokenDisplay token={usdt} />
      <TokenDisplay token={unknownToken} />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("BNB")).toBeInTheDocument();
    await expect(canvas.getByText("CAKE")).toBeInTheDocument();
    await expect(canvas.getByText("ETH")).toBeInTheDocument();
    await expect(canvas.getByText("USDT")).toBeInTheDocument();
    await expect(canvas.getByText("UNKNOWN")).toBeInTheDocument();
  }
}`,...V.parameters?.docs?.source}}},H=[`Default`,`WithoutChainBadge`,`WithoutChainName`,`FallbackIcon`,`SmallSize`,`LargeSize`,`MultipleTokens`]}))();export{F as Default,R as FallbackIcon,B as LargeSize,V as MultipleTokens,z as SmallSize,I as WithoutChainBadge,L as WithoutChainName,H as __namedExportsOrder,P as default};