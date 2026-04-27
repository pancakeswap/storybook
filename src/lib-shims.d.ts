// Vite's `import foo from './foo.svg'` style asset imports are handled
// by the `vite/client` ambient types. The library tsconfig doesn't load
// `vite/client` (it's a runtime-only build helper, not a source dep), so
// we inline the bare-minimum module shims that our source needs.

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.css' {
  const styles: { [className: string]: string }
  export default styles
}
