# Docs template

Welcome to Exactpro docs template! 
It was made to help you in building documentation website for your project

Feel free to ask questions if any: [docops@exactpro.com](mailto:docops@exactpro.com)

## Local development

Docs web toolkit is based on Nuxt.js framework. Refer ro prerequisites of Nuxt: https://nuxt.com/docs/getting-started/installation#prerequisites.

Install dependencies:

```shell
npm install
```

Run local server:

```shell
npm run dev
```

Enjoy writing with [Nuxt Content](https://content.nuxtjs.org/guide/writing/content-directory). 
You can read about [MarkDown Components available in this project](components/content/README.md).

## Static hosting

To generate HTML files for static hosting:

```shell
npm run generate
```

Generated files can be located in:

- `dist`
- `.output/public`

## Check built site locally

To check built site locally:

```shell
npm run preview
```