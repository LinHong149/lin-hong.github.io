// custom.d.ts or any other .d.ts file in your project
declare module "*.pdf" {
    const content: string;
    export default content;
  }
  