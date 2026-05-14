import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{J as n,Nt as r,jt as i,kt as a,q as o,sn as s,y as c}from"./iframe-BH0EN6Jm.js";var l,u,d,f,p,m,h=e((()=>{i(),l=t(s(),1),c(),u=a(),d=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 1px 2px 3px;
  margin-left: 4px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  background: ${({theme:e})=>e.colors.tertiary};
  overflow: hidden;
  path {
    fill: ${({theme:e})=>e.colors.textDisabled};
  }
  &.descend {
    background: ${({theme:e})=>e.colors.textSubtle};
    border-bottom-color: rgba(0, 0, 0, 0.3);
    path:first-child { fill: rgba(255, 255, 255, 1); }
    path:last-child { fill: rgba(255, 255, 255, 0.3); }
  }
  &.ascend {
    background: ${({theme:e})=>e.colors.textSubtle};
    border-bottom-color: rgba(0, 0, 0, 0.3);
    path:first-child { fill: rgba(255, 255, 255, 0.3); }
    path:last-child { fill: rgba(255, 255, 255, 1); }
  }
`,f=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 1px 2px 3px;
  margin-left: 4px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  background: ${({theme:e})=>e.colors.tertiary};
  overflow: hidden;
  path {
    fill: ${({theme:e})=>e.colors.textDisabled};
  }
  &.descend {
    background: ${({theme:e})=>e.colors.textSubtle};
    border-bottom-color: rgba(0, 0, 0, 0.3);
    path { fill: rgba(255, 255, 255, 1); }
  }
`,p=function(e){return e[e.NULL=0]=`NULL`,e[e.ASC=1]=`ASC`,e[e.DESC=-1]=`DESC`,e}({}),m=e=>{let{onSort:t,sortOrder:r,onlyDESC:i,width:a=`14px`,...s}=e,[c,m]=(0,l.useState)(p.NULL),h=(0,l.useMemo)(()=>t?r:c,[r,c,t]),g=(0,l.useCallback)(()=>{let e=h===p.NULL?p.DESC:h===p.DESC?p.ASC:p.NULL;t?t(e):m(e)},[t,h]),_=(0,l.useMemo)(()=>{switch(h){case p.DESC:return`descend`;case p.ASC:return`ascend`;default:return``}},[h]);return i?(0,u.jsx)(f,{onClick:g,className:_,children:(0,u.jsx)(n,{width:a,height:a})}):(0,u.jsx)(d,{onClick:g,className:_,children:(0,u.jsx)(o,{width:a,height:a})})},m.__docgenInfo={description:``,methods:[],displayName:`SortArrowButton`,props:{width:{required:!1,tsType:{name:`string`},description:``},height:{required:!1,tsType:{name:`string`},description:``},onSort:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(sortOrder: ISortOrder) => void`,signature:{arguments:[{type:{name:`union`,raw:`SORT_ORDER.NULL | SORT_ORDER.ASC | SORT_ORDER.DESC`,elements:[{name:`SORT_ORDER.NULL`},{name:`SORT_ORDER.ASC`},{name:`SORT_ORDER.DESC`}]},name:`sortOrder`}],return:{name:`void`}}},description:``},sortOrder:{required:!1,tsType:{name:`union`,raw:`SORT_ORDER.NULL | SORT_ORDER.ASC | SORT_ORDER.DESC`,elements:[{name:`SORT_ORDER.NULL`},{name:`SORT_ORDER.ASC`},{name:`SORT_ORDER.DESC`}]},description:``},onlyDESC:{required:!1,tsType:{name:`boolean`},description:``}}}})),g,_,v,y,b,x,S,C,w,T=e((()=>{g=t(s(),1),i(),h(),_=a(),v=r.table`
  width: 100%;

  tr {
    th,
    td {
      padding: 16px;
      vertical-align: middle;
    }

    td {
      display: table-cell;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      align-self: stretch;
    }

    th {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
`,y=r.thead`
  text-align: left;
  th {
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    vertical-align: middle;
    color: ${({theme:e})=>e.colors.secondary};

    button {
      margin-left: 8px;
    }
  }
`,b=r.tbody``,x=r.tr`
  border-top: 1px solid ${({theme:e})=>e.colors.cardBorder};
  transition: background 0.2s ease-in-out;
  ${({$withLink:e,theme:t})=>e&&`
    cursor: pointer;

    &:hover {
      background: ${t.isDark?t.colors.v2Disabled10:t.colors.backgroundHover};
    }

    &:active {
      background: ${t.colors.backgroundTapped};
    }
  `}

  &:last-child {
    border-bottom: 1px solid ${({theme:e})=>e.colors.cardBorder};
  }
`,S=r.td``,C=({col:e,data:t,idx:n})=>(0,_.jsx)(S,{style:{display:e.display===!1?`none`:`table-cell`,textAlign:e.align??`left`},"data-un-clickable":e.clickable===!1?!0:void 0,children:e.render?e.render(e.dataIndex?t[e.dataIndex]:t,t,n):e.dataIndex?t[e.dataIndex]:null},e.key),w=({columns:e,data:t,rowKey:n,getRowKey:r,onSort:i,sortOrder:a,sortField:o,onRowClick:s,rowStyle:c})=>{let l=(0,g.useCallback)(e=>r?r(e):n?e[n]:e.key??Object.values(e).slice(0,2).join(`-`),[n,r]),u=(0,g.useCallback)((e,t)=>{i?.({order:e,dataIndex:t})},[i]),d=(0,g.useCallback)((e,t)=>{t.target instanceof Element&&t.target.closest(`[data-un-clickable]`)||s?.(e,t)},[s]);return(0,_.jsxs)(v,{children:[(0,_.jsx)(y,{children:(0,_.jsx)(x,{style:c,children:e.map(e=>(0,_.jsxs)(`th`,{style:{minWidth:e.minWidth??`auto`,width:e.width??`auto`,display:e.display===!1?`none`:`table-cell`,textAlign:e.align??`left`},children:[typeof e.title==`function`?e.title():typeof e.title==`string`?e.title.toUpperCase():e.title,e.sorter?(0,_.jsx)(m,{onlyDESC:!0,width:`14px`,onSort:t=>u(t,e.dataIndex),sortOrder:o===e.dataIndex?a:p.NULL}):null]},e.key))})}),(0,_.jsx)(b,{children:t.map(t=>(0,_.jsx)(x,{style:c,$withLink:!!s,onClick:e=>d(t,e),children:e.map((e,n)=>(0,_.jsx)(C,{col:e,data:t,idx:n},e.key))},l(t)))})]})},w.__docgenInfo={description:``,methods:[],displayName:`TableView`,props:{getRowKey:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: T) => string`,signature:{arguments:[{type:{name:`T`},name:`item`}],return:{name:`string`}}},description:``},rowKey:{required:!1,tsType:{name:`string`},description:``},columns:{required:!0,tsType:{name:`Array`,elements:[{name:`IColumnsType`,elements:[{name:`T`}],raw:`IColumnsType<T>`}],raw:`IColumnsType<T>[]`},description:``},data:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},rowStyle:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},onSort:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(parms: { dataIndex: IColumnsType<T>["dataIndex"]; order: ISortOrder }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ dataIndex: IColumnsType<T>["dataIndex"]; order: ISortOrder }`,signature:{properties:[{key:`dataIndex`,value:{name:`IColumnsType["dataIndex"]`,raw:`IColumnsType<T>["dataIndex"]`,required:!0}},{key:`order`,value:{name:`union`,raw:`SORT_ORDER.NULL | SORT_ORDER.ASC | SORT_ORDER.DESC`,elements:[{name:`SORT_ORDER.NULL`},{name:`SORT_ORDER.ASC`},{name:`SORT_ORDER.DESC`}],required:!0}}]}},name:`parms`}],return:{name:`void`}}},description:``},sortOrder:{required:!1,tsType:{name:`union`,raw:`SORT_ORDER.NULL | SORT_ORDER.ASC | SORT_ORDER.DESC`,elements:[{name:`SORT_ORDER.NULL`},{name:`SORT_ORDER.ASC`},{name:`SORT_ORDER.DESC`}]},description:``},sortField:{required:!1,tsType:{name:`IColumnsType["dataIndex"]`,raw:`IColumnsType<T>["dataIndex"]`},description:``},onRowClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(record: T, e: React.MouseEvent) => void`,signature:{arguments:[{type:{name:`T`},name:`record`},{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent`},name:`e`}],return:{name:`void`}}},description:``}}}})),E=e((()=>{T(),h()}));export{w as n,E as t};