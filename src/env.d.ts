/// <reference types="vite/client" />
// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
}
declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
