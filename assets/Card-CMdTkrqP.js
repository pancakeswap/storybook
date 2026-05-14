import{n as e}from"./chunk-zsgVPwQN.js";import{Mt as t,Nt as n,b as r,g as i,jt as a,kt as o,lt as s,sn as c,st as l,y as u}from"./iframe-BH0EN6Jm.js";var d,f,p,m=e((()=>{a(),l(),u(),d=({isActive:e,isSuccess:t,isWarning:n,borderBackground:r,theme:i})=>r||(n?i.colors.warning:t?i.colors.success:e?`linear-gradient(180deg, ${i.colors.primaryBright}, ${i.colors.secondary})`:i.colors.cardBorder),f=n.div.withConfig({shouldForwardProp:e=>![`isActive`,`isSuccess`,`isWarning`,`isDisabled`,`borderBackground`].includes(e)})`
  background: ${d};
  border-radius: ${({theme:e})=>e.radii.card};
  color: ${({theme:e,isDisabled:t})=>e.colors[t?`textDisabled`:`text`]};
  overflow: hidden;
  position: relative;

  ${({isActive:e})=>e&&t`
      animation: ${r} 3s ease infinite;
      background-size: 400% 400%;
    `}

  padding: 1px 1px 3px 1px;

  ${s}
`,p=n(i)`
  width: 100%;
  height: 100%;
  overflow: ${({hasCustomBorder:e})=>e?`initial`:`inherit`};
  background: ${({theme:e,background:t})=>t??e.card.background};
  border-radius: ${({theme:e})=>e.radii.card};
`,f.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1}})),h,g,_=e((()=>{c(),m(),h=o(),g=({ribbon:e,children:t,background:n,innerCardProps:r,...i})=>(0,h.jsx)(f,{...i,children:(0,h.jsxs)(p,{...r,background:n,hasCustomBorder:!!i.borderBackground,children:[e,t]})}),g.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{isActive:{required:!1,tsType:{name:`boolean`},description:``},isSuccess:{required:!1,tsType:{name:`boolean`},description:``},isWarning:{required:!1,tsType:{name:`boolean`},description:``},isDisabled:{required:!1,tsType:{name:`boolean`},description:``},ribbon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},borderBackground:{required:!1,tsType:{name:`string`},description:``},background:{required:!1,tsType:{name:`string`},description:``},innerCardProps:{required:!1,tsType:{name:`ReactHTMLAttributes`,raw:`React.HTMLAttributes<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``}},composes:[`SpaceProps`,`HTMLAttributes`]}})),v,y=e((()=>{a(),l(),v=n.div`
  padding: 24px;
  ${s}
`})),b,x=e((()=>{a(),l(),b=n.div`
  background: ${({theme:e,variant:t=`default`})=>e.card.cardHeaderBackground[t]};
  border-radius: ${({theme:e})=>`${e.radii.card} ${e.radii.card} 0 0`};
  padding: 24px;
  ${s}
`})),S,C=e((()=>{a(),l(),S=n.div`
  border-top: 1px solid ${({theme:e})=>e.colors.cardBorder};
  padding: 24px;
  ${s}
`})),w,T,E,D=e((()=>{c(),a(),w=o(),T=n.div`
  z-index: ${({theme:e})=>e.zIndices.ribbon};
  background-color: ${({variantColor:e=`secondary`,theme:t})=>t.colors[e]};
  color: white;
  margin: 0;
  padding: 8px 0;
  position: absolute;
  right: ${({ribbonPosition:e})=>e===`right`?0:`auto`};
  top: 0;
  text-align: center;
  transform: ${({ribbonPosition:e})=>e===`right`?`translateX(30%) translateY(0%) rotate(45deg)`:`translateX(0%) translateY(200%) rotate(-45deg)`};
  transform-origin: top left;
  width: 96px;

  &:before,
  &:after {
    background-color: ${({variantColor:e=`secondary`,theme:t})=>t.colors[e]};
    content: "";
    height: 100%;
    margin: 0 -1px; /* Removes tiny gap */
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 96px;
  }
`,E=({variantColor:e,text:t,ribbonPosition:n,...r})=>(0,w.jsx)(T,{variantColor:e,ribbonPosition:n,...r,children:(0,w.jsx)(`div`,{title:t,children:t})}),E.defaultProps={ribbonPosition:`right`},E.__docgenInfo={description:``,methods:[],displayName:`CardRibbon`,props:{variantColor:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:``},text:{required:!0,tsType:{name:`string`},description:``},ribbonPosition:{required:!1,tsType:{name:`union`,raw:`"right" | "left"`,elements:[{name:`literal`,value:`"right"`},{name:`literal`,value:`"left"`}]},description:``,defaultValue:{value:`"right"`,computed:!1}}},composes:[`SpaceProps`,`HTMLAttributes`]}})),O=e((()=>{_(),y(),x(),C(),D()}));export{g as a,v as i,S as n,b as r,O as t};