import{n as e}from"./chunk-zsgVPwQN.js";import{Nt as t,at as n,jt as r,lt as i,ot as a,st as o}from"./iframe-BH0EN6Jm.js";var s,c=e((()=>{s={SM:`sm`,MD:`md`}})),l,u,d,f=e((()=>{a(),r(),o(),c(),l=({scale:e})=>{switch(e){case s.SM:return`24px`;case s.MD:default:return`32px`}},u=({scale:e})=>{switch(e){case s.SM:return`12px`;case s.MD:default:return`20px`}},d=t.input.attrs({type:`radio`}).withConfig({shouldForwardProp:n})`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${l};
  width: ${l};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: ${({theme:e})=>e.isDark?`solid 1px ${e.colors.disabled}`:`0`};
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.cardBorder};
  box-shadow: ${({theme:e})=>e.shadows.inset};

  &:after {
    border-radius: 50%;
    content: "";
    height: ${u};
    left: 6px;
    position: absolute;
    top: 6px;
    width: ${u};
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({theme:e})=>e.shadows.focus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({theme:e})=>e.shadows.focus};
  }

  &:checked {
    border: 0;
    background-color: ${({theme:e})=>e.colors.success};
    &:after {
      background-color: ${({theme:e})=>e.radio.handleBackground};
    }
  }

  &:disabled {
    border: 0;
    cursor: default;
    opacity: 0.6;
  }
  ${i}
`,d.defaultProps={scale:s.MD,m:0}})),p=e((()=>{f()}));export{d as n,p as t};