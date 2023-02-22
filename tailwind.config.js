const srcDir = '.'

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#286455',
          '50': '#D1EDE6',
          '100': '#C3E7DE',
          '200': '#A6DBCE',
          '300': '#88D0BE',
          '400': '#6BC4AE',
          '500': '#4EB89E',
          '600': '#3F9E87',
          '700': '#34816E',
          '800': '#286455',
          '900': '#183C33'
        },
        secondary: {
          DEFAULT: '#53B57F',
          '50': '#D3ECDF',
          '100': '#C5E6D4',
          '200': '#A9DABF',
          '300': '#8CCEA9',
          '400': '#70C194',
          '500': '#53B57F',
          '600': '#3F9164',
          '700': '#2E6A49',
          '800': '#1D432E',
          '900': '#0C1C13'
        },
        tertiary: {
          DEFAULT: '#A3D3C5',
          '50': '#E8F4F1',
          '100': '#DAEDE8',
          '200': '#BFE0D6',
          '300': '#A3D3C5',
          '400': '#7DC1AD',
          '500': '#57AF95',
          '600': '#438B76',
          '700': '#306556',
          '800': '#1E3F36',
          '900': '#0C1915'
        },
        accent: {
          DEFAULT: '#112A4D',
          '50': '#A5C2EB',
          '100': '#94B7E7',
          '200': '#73A0E0',
          '300': '#518AD9',
          '400': '#3073D1',
          '500': '#2761B1',
          '600': '#204E90',
          '700': '#183C6E',
          '800': '#112A4D',
          '900': '#07111F'
        },
        error: {
          DEFAULT: '#B64C4C',
          '50': '#EBCECE',
          '100': '#E5C0C0',
          '200': '#D9A3A3',
          '300': '#CE8686',
          '400': '#C26969',
          '500': '#B64C4C',
          '600': '#8F3A3A',
          '700': '#682A2A',
          '800': '#401A1A',
          '900': '#180A0A'
        }
      }
    },
  },
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
