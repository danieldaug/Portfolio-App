/// <reference types="react-scripts" />

declare module '*.css' {}
declare module '*.scss' {}
declare module '*.sass' {}

declare module '*.JPG' {
  const src: string;
  export default src;
}

declare module '*.JPEG' {
  const src: string;
  export default src;
}

declare module '*.PNG' {
  const src: string;
  export default src;
}
