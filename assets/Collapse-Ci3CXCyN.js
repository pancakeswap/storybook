import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,g as r,j as i,jt as a,kt as o,sn as s,tt as c,y as l}from"./iframe-BH0EN6Jm.js";var u,d,f,p,m,h,g,_=e((()=>{u=t(s(),1),a(),l(),c(),d=o(),f=n(r)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`,p=n(r)`
  overflow: hidden;
`,m=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(0deg);
  transition: transform 0.25s ease;
  cursor: pointer;
  &.open {
    transform: rotate(180deg);
  }
`,h=n(r)`
  overflow: hidden;
  display: flex;
  width: 100%;
  flex-direction: column;
  will-change: height;
  transition: height 0.25s ease-in-out;
`,g=({title:e,content:t,isOpen:n,onToggle:r,recalculateDep:a=!1,titleBoxProps:o,contentBoxProps:s,contentExtendableMaxHeight:c,...l})=>{let g=(0,u.useRef)(null),_=(0,u.useRef)(null),v=(0,u.useRef)(null),y=()=>{r?.()};return(0,u.useEffect)(()=>{if(!g.current||!_.current||!v.current)return;let e=g.current.scrollHeight,t=_.current.scrollHeight,r=c??e;v.current.style.height=`${n?t+r:t}px`},[n,a,c]),(0,d.jsxs)(h,{ref:v,...l,children:[(0,d.jsxs)(f,{ref:_,onClick:y,...o,children:[e,(0,d.jsx)(m,{className:n?`open`:void 0,children:(0,d.jsx)(i,{color:`textSubtle`,width:`24px`})})]}),(0,d.jsx)(p,{ref:g,...s,children:t})]})},g.__docgenInfo={description:``,methods:[],displayName:`Collapse`,props:{recalculateDep:{defaultValue:{value:`false`,computed:!1},required:!1}}}}));export{_ as n,g as t};