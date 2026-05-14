import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Nt as n,ft as r,jt as i,kt as a,sn as o,st as s,v as c,y as l}from"./iframe-BH0EN6Jm.js";var u,d,f,p,m,h=e((()=>{u=t(o(),1),i(),l(),d=a(),f=n(c)`
  border-bottom: ${({isShowBorderBottom:e,theme:t})=>e?`2px solid ${t.colors.input}`:`none`};
  overflow-x: auto;
  padding: ${({fullWidth:e})=>e?0:`16px 16px 0 16px`};

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`,p=n(c)`
  justify-content: space-between;

  & > button + button {
    margin-left: ${({gap:e})=>e||`4px`};
  }

  & > button {
    flex-grow: ${({fullWidth:e})=>e?1:0};
  }

  ${({theme:e})=>e.mediaQueries.md} {
    flex-grow: ${({fullWidth:e})=>e?1:0};
  }

  flex-grow: ${({fullWidth:e})=>e?1:0};
`,m=({activeIndex:e=0,onItemClick:t,children:n,fullWidth:r,gap:i,isColorInverse:a=!1,isShowBorderBottom:o=!0,variant:s=`default`})=>(0,d.jsx)(f,{p:s===`text`?`0`:[`0 4px`,`0 16px`],fullWidth:r,isShowBorderBottom:s===`text`?!1:o,children:(0,d.jsx)(p,{fullWidth:r,gap:i,children:u.Children.map(n,(n,r)=>{let i=e===r;return s===`text`?(0,u.cloneElement)(n,{isActive:i,onClick:t?()=>t(r):void 0,color:i?`secondary`:`textSubtle`,backgroundColor:`transparent`,variant:`text`}):(0,u.cloneElement)(n,{isActive:i,onClick:t?()=>t(r):void 0,color:a?i?`textSubtle`:`backgroundAlt`:i?`backgroundAlt`:`textSubtle`,backgroundColor:a?i?`input`:`textSubtle`:i?`textSubtle`:`input`})})})}),m.__docgenInfo={description:``,methods:[],displayName:`TabMenu`,props:{activeIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onItemClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},children:{required:!0,tsType:{name:`Array`,elements:[{name:`ReactReactElement`,raw:`React.ReactElement`}],raw:`React.ReactElement[]`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``},gap:{required:!1,tsType:{name:`string`},description:``},isColorInverse:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isShowBorderBottom:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "text"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"text"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}}})),g,_,v,y=e((()=>{i(),s(),g=({scale:e,variant:t})=>t===`text`?`16px`:e===`md`?`16px 16px 0 0`:`24px 24px 0 0`,_=({scale:e,variant:t})=>t===`text`?`12px`:e===`md`?`8px`:`16px`,v=n.button`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  outline: 0;
  flex-grow: 1;
  padding: ${_};
  border-radius: ${g};
  font-size: 16px;
  font-weight: ${({variant:e,isActive:t})=>e===`text`?t?600:400:600};

  ${({theme:e})=>e.mediaQueries.md} {
    flex-grow: 0;
  }

  ${r}
`,v.defaultProps={scale:`md`}})),b=e((()=>{h(),y()}));export{v as n,m as r,b as t};