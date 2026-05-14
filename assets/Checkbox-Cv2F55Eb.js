import{n as e}from"./chunk-zsgVPwQN.js";import{Nt as t,jt as n}from"./iframe-BH0EN6Jm.js";var r,i=e((()=>{r={XS:`xs`,SM:`sm`,MD:`md`}})),a,o,s=e((()=>{n(),i(),a=({scale:e=r.MD})=>{switch(e){case r.XS:return`20px`;case r.SM:return`24px`;case r.MD:default:return`32px`}},o=t.input.attrs({type:`checkbox`})`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${a};
  width: ${a};
  min-height: ${a};
  min-width: ${a};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: ${({theme:e,colors:t})=>t?.border?`solid 1px ${e.colors[t.border]}`:`solid 1px ${e.colors.inputSecondary}`};
  border-radius: 8px;
  background-color: ${({theme:e,colors:t})=>e.colors[t?.background??`cardBorder`]};
  box-shadow: ${({theme:e})=>e.shadows.inset};

  &:before {
    content: "";
    position: absolute;
    border-top: 2px solid;
    border-color: transparent;
    top: 50%;
    left: 50%;
    width: 33%;
    height: 0;
    margin: auto;
    transform: translate(-50%, -50%);
    transition: border-color 0.2s ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 30%;
    left: 0;
    right: 0;
    width: 50%;
    height: 25%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  ${({indeterminate:e,theme:t,colors:n})=>e&&`
    border: 0;
    background-color: ${t.colors[n?.checkedBackground??`success`]};
    &:before {
      border-color: ${t.colors.backgroundAlt};
    }
    `}

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({theme:e})=>e.shadows.focus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({theme:e})=>e.shadows.focus};
  }

  &:checked {
    border: 0;
    background-color: ${({theme:e,colors:t})=>e.colors[t?.checkedBackground??`success`]};
    &:after {
      border-color: ${({theme:e,colors:t})=>t?.checkedColor?e.colors[t?.checkedColor]:`white`};
    }
  }

  &:disabled {
    border: 0;
    cursor: default;
    opacity: 0.6;
  }
`})),c=e((()=>{s()}));export{o as n,c as t};