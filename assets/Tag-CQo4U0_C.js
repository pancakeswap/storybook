import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,ct as r,dt as i,jt as a,kt as o,lt as s,sn as c,st as l}from"./iframe-BH0EN6Jm.js";var u,d,f=e((()=>{u={PRIMARY:`primary`,SECONDARY:`secondary`,SUCCESS:`success`,TEXTDISABLED:`textDisabled`,TEXTSUBTLE:`textSubtle`,BINANCE:`binance`,FAILURE:`failure`,WARNING:`warning`,GRADIENTBOLD:`gradientBold`,SUCCESS_LOW_CONTRAST:`successLowContrast`,FAILURE_LOW_CONTRAST:`failureLowContrast`,TERTIARY:`tertiary`,PRIMARY60:`primary60`},d={MD:`md`,SM:`sm`}})),p,m,h=e((()=>{f(),p={[d.MD]:{height:`28px`,padding:`0 8px`,fontSize:`14px`},[d.SM]:{height:`24px`,padding:`0 4px`,fontSize:`12px`}},m={[u.PRIMARY]:{backgroundColor:`primary`},[u.SECONDARY]:{backgroundColor:`secondary`},[u.SUCCESS]:{backgroundColor:`success`},[u.TEXTDISABLED]:{backgroundColor:`textDisabled`},[u.TEXTSUBTLE]:{backgroundColor:`textSubtle`},[u.BINANCE]:{backgroundColor:`binance`},[u.FAILURE]:{backgroundColor:`failure`},[u.WARNING]:{backgroundColor:`warning`},[u.GRADIENTBOLD]:{bg:`gradientBold`},[u.FAILURE_LOW_CONTRAST]:{backgroundColor:`destructive10`,color:`destructive`,border:`2px solid`,borderColor:`destructive20`},[u.SUCCESS_LOW_CONTRAST]:{backgroundColor:`positive10`,color:`positive60`,border:`2px solid`,borderColor:`positive20`},[u.TERTIARY]:{backgroundColor:`tertiary`,color:`textSubtle`,border:`2px solid`,borderColor:`tertiary20`},[u.PRIMARY60]:{backgroundColor:`primary10`,color:`primary60`,border:`2px solid`,borderColor:`primary20`}}})),g,_,v=e((()=>{a(),l(),h(),f(),g=({outline:e,theme:t,variant:n=u.PRIMARY})=>{if(e){let e=m[n].backgroundColor,r=t.colors[e];return`
      color: ${r};
      background: none;
      border: 2px solid ${r};
    `}return``},_=n.div.withConfig({shouldForwardProp:e=>![`variant`,`scale`,`outline`,`textTransform`,`startIcon`,`endIcon`].includes(e)})`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${({textTransform:e})=>e&&`text-transform: ${e};`}

  ${r({prop:`scale`,variants:p})}
  ${r({variants:m})}
  ${s}
  ${i}

  ${g}
`})),y,b,x,S=e((()=>{y=t(c(),1),f(),v(),b=o(),x=({startIcon:e,endIcon:t,variant:n=`primary`,scale:r=d.MD,outline:i=!1,children:a,...o})=>(0,b.jsxs)(_,{variant:n,scale:r,outline:i,...o,children:[y.isValidElement(e)&&y.cloneElement(e,{mr:`0.5em`}),a,y.isValidElement(t)&&y.cloneElement(t,{ml:`0.5em`})]}),x.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{variant:{required:!1,tsType:{name:`unknown[union]`,raw:`(typeof variants)[keyof typeof variants]`},description:``,defaultValue:{value:`"primary"`,computed:!1}},scale:{required:!1,tsType:{name:`unknown[union]`,raw:`(typeof scales)[keyof typeof scales]`},description:``,defaultValue:{value:`"md"`,computed:!1}},startIcon:{required:!1,tsType:{name:`ReactNode`},description:``},endIcon:{required:!1,tsType:{name:`ReactNode`},description:``},outline:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},textTransform:{required:!1,tsType:{name:`union`,raw:`"uppercase" | "lowercase" | "capitalize"`,elements:[{name:`literal`,value:`"uppercase"`},{name:`literal`,value:`"lowercase"`},{name:`literal`,value:`"capitalize"`}]},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``}},composes:[`SpaceProps`,`TypographyProps`]}})),C=e((()=>{S()}));export{x as n,C as t};