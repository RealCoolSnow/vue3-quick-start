declare module '*.svg' {
  const src: string
  const VueComponent: SVGElement

  export { VueComponent }
  export default src
}
