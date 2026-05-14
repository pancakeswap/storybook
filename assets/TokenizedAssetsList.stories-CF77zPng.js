import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{kt as n,sn as r}from"./iframe-BH0EN6Jm.js";import{n as i,t as a}from"./TokenizedAssetsList-BNo9sHQg.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{o=t(r(),1),i(),s=n(),{expect:c,fn:l,userEvent:u}=__STORYBOOK_MODULE_TEST__,d=[{id:`nvda`,name:`Nvidia corp`,ticker:`NVDAx`,price:`$235.31`,changePct:3.89,iconColor:`#76B900`,iconInitials:`N`},{id:`googl`,name:`Alphabet Inc`,ticker:`GOOGLx`,price:`$399.88`,changePct:-.46,iconColor:`#4285F4`,iconInitials:`G`},{id:`aapl`,name:`Apple Inc`,ticker:`AAPLx`,price:`$298.39`,changePct:-.37,iconColor:`#1D1D1F`},{id:`msft`,name:`Microsoft Corp`,ticker:`MSFTx`,price:`$408.89`,changePct:.92,iconColor:`#00A4EF`,iconInitials:`M`},{id:`amzn`,name:`Amazon.com Inc`,ticker:`AMZNx`,price:`$408.89`,changePct:.92,iconColor:`#FF9900`,iconInitials:`a`},{id:`tsl`,name:`Tesla Inc`,ticker:`TSLx`,price:`$408.89`,changePct:.92,iconColor:`#E31937`,iconInitials:`T`},{id:`wbtc`,name:`WBTC`,ticker:`WBTC`,price:`$108,408`,changePct:.92,iconColor:`#F7931A`,iconInitials:`₿`}],f={title:`Widgets/Tokenized Assets/List`,component:a,parameters:{layout:`centered`},args:{assets:d,selectedAssetId:`nvda`,filters:[`Stocks`,`Crypto`,`ETFs`],activeFilters:[`Stocks`],favorites:[`msft`],onAssetSelect:l(),onToggleFavorite:l(),onSearchChange:l(),onFilterToggle:l()}},p={},m={args:{filters:[],activeFilters:[]}},h={render:e=>(0,s.jsx)(()=>{let[t,n]=(0,o.useState)(e.selectedAssetId??`nvda`),[r,i]=(0,o.useState)(``),[c,l]=(0,o.useState)([`msft`]),u=d.filter(e=>!r||e.name.toLowerCase().includes(r.toLowerCase())||e.ticker.toLowerCase().includes(r.toLowerCase()));return(0,s.jsx)(a,{...e,assets:u,selectedAssetId:t,onAssetSelect:t=>{e.onAssetSelect?.(t),n(t)},searchQuery:r,onSearchChange:t=>{e.onSearchChange?.(t),i(t)},favorites:c,onToggleFavorite:t=>{e.onToggleFavorite?.(t),l(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t])}})},{}),play:async({canvas:e,args:t})=>{let n=e.getByLabelText(`Search tokens or stocks`);await u.type(n,`apple`),await c(t.onSearchChange).toHaveBeenCalled(),await c(e.getByText(`Apple Inc`)).toBeInTheDocument(),await u.clear(n),await u.click(e.getByText(`Microsoft Corp`)),await c(t.onAssetSelect).toHaveBeenCalledWith(`msft`)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    filters: [] as string[],
    activeFilters: [] as string[]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Wrapped = () => {
      const [selectedId, setSelectedId] = useState<string>(args.selectedAssetId ?? 'nvda');
      const [search, setSearch] = useState('');
      const [favorites, setFavorites] = useState<string[]>(['msft']);
      const visible = SAMPLE_ASSETS.filter(a => !search || a.name.toLowerCase().includes(search.toLowerCase()) || a.ticker.toLowerCase().includes(search.toLowerCase()));
      return <TokenizedAssetsList {...args} assets={visible} selectedAssetId={selectedId} onAssetSelect={id => {
        args.onAssetSelect?.(id);
        setSelectedId(id);
      }} searchQuery={search} onSearchChange={s => {
        args.onSearchChange?.(s);
        setSearch(s);
      }} favorites={favorites} onToggleFavorite={id => {
        args.onToggleFavorite?.(id);
        setFavorites(curr => curr.includes(id) ? curr.filter(x => x !== id) : [...curr, id]);
      }} />;
    };
    return <Wrapped />;
  },
  play: async ({
    canvas,
    args
  }) => {
    const search = canvas.getByLabelText('Search tokens or stocks');
    await userEvent.type(search, 'apple');
    await expect(args.onSearchChange).toHaveBeenCalled();
    await expect(canvas.getByText('Apple Inc')).toBeInTheDocument();
    // Clear and select a different asset row.
    await userEvent.clear(search);
    await userEvent.click(canvas.getByText('Microsoft Corp'));
    await expect(args.onAssetSelect).toHaveBeenCalledWith('msft');
  }
}`,...h.parameters?.docs?.source},description:{story:`A controlled-state variant so the search/select interactions actually update.`,...h.parameters?.docs?.description}}},g=[`Default`,`NoFilters`,`Interactive`]}))();export{p as Default,h as Interactive,m as NoFilters,g as __namedExportsOrder,f as default};