## Customize the Title

Set up your very own website title in `app.config.ts`. Simply assign a new value to the string variable `title` (see below).

```ts
export default defineAppConfig({
  exactproDocs: {
    title: 'Exactpro Docs'
  }
})
```

## Customize the Header logo

Set up your very own logo with an image of your choice in two ways:
1. Place an image named `logo.{some-extension}` in the `assets/theme` folder  
2. Redefine the vue component `components/exactpro-docs/Logo.vue`

## Customize the Header background

Set up your very own header background with an image of your choice by placing an image file named `header-bg.{some-extension}` in the `assets/theme` folder. 

## Configuring a base url 

This option might be required when hosting your website on [GitHub Pages](https://pages.github.com/) or [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/).  

1. Customize the `baseURL` in the `nuxt.config.ts` file. 

2. Create the string variable `baseURL` within the `app` object and assign a value. In the example below, we have assigned the value `/my-project` to the baseURL variable. 

```ts
export default defineNuxtConfig({
  app: {
    baseURL: "/my-project",
    // other config options
  }
})
```
::notice{note}

Although fixed in [newer versions of Nuxt Content](https://github.com/nuxt/content/releases/tag/v2.4.0), please be aware that links within the documentation might break when a baseURL is added.

::

Read official Nuxt 3 documentation [here](https://nuxt.com/docs/api/configuration/nuxt-config#baseurl). 

## Replacing Favicon

Set up your very own favicon with an image of your choice, by placing an image named `favicon.ico` into the public directory (`public\favicon.ico`).

## Tailwind Customization

Tailwind CSS has been used customize this template.

### Color Palette

A color palette comprising of the 4 main Exactpro corporate colors can be found in the `tailwind.config.js` file. 
Each color comes in 10 shades. 

The color palette is:
- primary : **[Navy Blue]{.text-primary}**
- secondary : **[Danube]{.text-secondary}**
- accent : **[Turquois]{.text-accent}**
- error : **[Chestnut]{.text-error}**

You may use [tailwind shades](https://www.tailwindshades.com/) to create your own color palettes.


