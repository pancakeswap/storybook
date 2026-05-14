import{n as e}from"./chunk-zsgVPwQN.js";import{G as t,Mt as n,Nt as r,X as i,Y as a,jt as o,kt as s,sn as c,tt as l}from"./iframe-BH0EN6Jm.js";function u(e){return`${e>=0?`+`:``}${e.toFixed(2)}%`}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j=e((()=>{c(),o(),l(),d=s(),f=r.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 338px;
  height: 470px;
  flex-shrink: 0;
  background: ${({theme:e})=>e.colors.card};
  border-top: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-right: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-bottom: 2px solid ${({theme:e})=>e.colors.cardBorder};
  border-left: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 24px;
  overflow: hidden;
`,p=r.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 16px;
  padding: 24px 24px 16px;
`,m=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,h=r.label`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  padding: 10px 12px;
  border-radius: 16px;
  background: ${({theme:e})=>e.colors.input};
  color: ${({theme:e})=>e.colors.textSubtle};
`,g=r.input`
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text};
  &::placeholder {
    color: ${({theme:e})=>e.colors.textSubtle};
  }
`,_=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.input};
  color: ${({theme:e})=>e.colors.textSubtle};
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    color: ${({theme:e})=>e.colors.text};
  }
`,v=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,y=r.button`
  display: inline-flex;
  align-items: center;
  height: 25px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid
    ${({$active:e,theme:t})=>e?t.colors.secondary:t.colors.cardBorder};
  background: ${({$active:e,theme:t})=>e?`rgba(118, 69, 217, 0.10)`:`transparent`};
  color: ${({$active:e,theme:t})=>e?t.colors.secondary:t.colors.textSubtle};
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: ${({theme:e})=>e.colors.secondary};
    border-color: ${({theme:e})=>e.colors.secondary};
  }
`,b=r.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 4px 12px 16px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`,x=r.button`
  display: grid;
  grid-template-columns: 16px 32px 1fr auto;
  align-items: center;
  gap: 8px;
  padding: 14px 12px;
  border: 0;
  border-radius: 16px;
  background: ${({$selected:e,theme:t})=>e?t.colors.background:`transparent`};
  cursor: pointer;
  text-align: left;
  font-family: inherit;

  &:hover {
    border-radius: 16px;
    background: ${({theme:e})=>e.colors.background};
  }

  ${({$selected:e})=>e&&n`
      box-shadow: inset 0 0 0 1px var(--pcs-colors-card-border, currentColor);
    `}
`,S=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.textSubtle};
  cursor: pointer;

  &:hover {
    color: ${({theme:e})=>e.colors.warning};
  }
`,C=r.span`
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: ${({$color:e})=>e};
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
`,w=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,T=r.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,E=r.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textSubtle};
  letter-spacing: 0.02em;
`,D=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,O=r.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-variant-numeric: tabular-nums;
`,k=r.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({$positive:e,theme:t})=>e?t.colors.success:t.colors.failure};
  font-variant-numeric: tabular-nums;
`,A=({assets:e,selectedAssetId:n,onAssetSelect:r,favorites:o=[],onToggleFavorite:s,searchQuery:c=``,onSearchChange:l,filters:A=[],activeFilters:j=[],onFilterToggle:M})=>{let N=new Set(o);return(0,d.jsxs)(f,{"aria-label":`Tokenized assets`,children:[(0,d.jsxs)(p,{children:[(0,d.jsxs)(m,{children:[(0,d.jsxs)(h,{children:[(0,d.jsx)(t,{width:20,color:`currentColor`}),(0,d.jsx)(g,{type:`search`,placeholder:`Search Tokens / Stocks`,value:c,onChange:e=>l?.(e.target.value),"aria-label":`Search tokens or stocks`})]}),(0,d.jsx)(_,{type:`button`,"aria-label":`Filters`,children:(0,d.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":!0,children:(0,d.jsx)(`path`,{d:`M3 6h18v2H3V6zm3 5h12v2H6v-2zm4 5h4v2h-4v-2z`})})})]}),A.length>0&&(0,d.jsx)(v,{role:`tablist`,"aria-label":`Asset categories`,children:A.map(e=>{let t=j.includes(e);return(0,d.jsx)(y,{type:`button`,$active:t,role:`tab`,"aria-selected":t,onClick:()=>M?.(e),children:e},e)})})]}),(0,d.jsx)(b,{children:e.map(e=>{let t=N.has(e.id),o=n===e.id,c=e.changePct>=0;return(0,d.jsxs)(x,{type:`button`,$selected:o,onClick:()=>r?.(e.id),"aria-current":o?`true`:void 0,children:[(0,d.jsx)(S,{role:`button`,tabIndex:0,"aria-label":t?`Unfavorite ${e.ticker}`:`Favorite ${e.ticker}`,onClick:t=>{t.stopPropagation(),s?.(e.id)},onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),t.stopPropagation(),s?.(e.id))},children:t?(0,d.jsx)(a,{width:16,color:`warning`}):(0,d.jsx)(i,{width:16,color:`currentColor`})}),(0,d.jsx)(C,{$color:e.iconColor,children:e.iconInitials??e.ticker.replace(/x$/i,``).slice(0,1)}),(0,d.jsxs)(w,{children:[(0,d.jsx)(T,{children:e.name}),(0,d.jsx)(E,{children:e.ticker})]}),(0,d.jsxs)(D,{children:[(0,d.jsx)(O,{children:e.price}),(0,d.jsx)(k,{$positive:c,children:u(e.changePct)})]})]},e.id)})})]})},A.__docgenInfo={description:``,methods:[],displayName:`TokenizedAssetsList`,props:{assets:{required:!0,tsType:{name:`unknown`},description:``},selectedAssetId:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},onAssetSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},favorites:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`[]`,computed:!1}},onToggleFavorite:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},searchQuery:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onSearchChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: string) => void`,signature:{arguments:[{type:{name:`string`},name:`next`}],return:{name:`void`}}},description:``},filters:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`[]`,computed:!1}},activeFilters:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`[]`,computed:!1}},onFilterToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(filter: string) => void`,signature:{arguments:[{type:{name:`string`},name:`filter`}],return:{name:`void`}}},description:``}}}}));export{j as n,A as t};