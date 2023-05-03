# @exactpro/docs-web-toolkit

Welcome to Exactpro Docs Web Toolkit! 

This template repository was created to help you build a documentation website for your project.

Questions? Reach out to us: [docops@exactpro.com](mailto:docops@exactpro.com).

## Prerequisites

The Docs Web Toolkit is based on the Nuxt.js framework. 

To use it, refer to the Nuxt prerequisites list: https://nuxt.com/docs/getting-started/installation#prerequisites.

## Installation

Install this package from npm:

```shell
npm install @exactpro/docs-web-toolkit
```

## Configuration

### Typings

In development mode, you might want to suggestions from IDE. To do that, you should create `tsconfig.json` file in the docs directory.

```json
{
  // https://v3.nuxtjs.org/concepts/typescript
  "extends": "./.nuxt/tsconfig.json"
}

```

Then generate `.nuxt` directory with all necessary typings:

```shell
npx nuxi prepare
```

If you have docs as subproject:
  
```shell
npx nuxi prepare my-docs/
```

### Basic features

In order to turn on base features of toolkit create `nuxt.config.ts` file in the directory where you want to build your docs website.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  extends: [
    '@exactpro/docs-web-toolkit',
  ]
})
```

### Basic customization

Add specific information about your project in `app.config.ts` file:

```ts
// app.config.ts
export default defineAppConfig({
  exactproDocs: {
    title: 'Exactpro Docs'
  }
})
```

## Local writing

Enjoy writing with [Nuxt Content](https://content.nuxtjs.org/guide/writing/content-directory). 

If you want to display changes in real time, run local server:

```shell
npx nuxi dev
```

If you have docs as subproject:
  
```shell
npx nuxi dev my-docs/
```

## Static hosting

To generate HTML files for static hosting:

```shell
npx nuxi generate
```

If you have docs as subproject:
  
```shell
npx nuxi generate my-docs/
```

Generated files can be located in:

- `dist`
- `.output/public`

## Check built site locally

To check built site locally:

```shell
npx nuxi preview
```

If you have docs as subproject:
  
```shell
npx nuxi preview my-docs/
```