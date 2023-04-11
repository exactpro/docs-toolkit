/*
 * Copyright 2023 Exactpro (Exactpro Systems Limited)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const srcDir = '.'

const defaultTheme = require('tailwindcss/defaultTheme') // eslint-disable-line @typescript-eslint/no-var-requires

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          DEFAULT: '#1E2736',
          50: '#CCD5E3',
          100: '#BFCADB',
          200: '#A5B4CD',
          300: '#8B9EBE',
          400: '#7088B0',
          500: '#58739F',
          600: '#4A6085',
          700: '#3B4D6A',
          800: '#2D3A50',
          900: '#1E2736'
        },
        secondary: {
          DEFAULT: '#5293C9',
          50: '#DEEAF5',
          100: '#CEE1F0',
          200: '#AFCDE6',
          300: '#90BADC',
          400: '#71A6D3',
          500: '#5293C9',
          600: '#3677AD',
          700: '#295A82',
          800: '#1B3C57',
          900: '#0E1F2D'
        },
        accent: {
          DEFAULT: '#3F979F',
          50: '#D1EBED',
          100: '#C3E4E7',
          200: '#A6D7DC',
          300: '#88CAD0',
          400: '#6BBDC4',
          500: '#4EB0B9',
          600: '#3F979F',
          700: '#2F7177',
          800: '#1F4B4F',
          900: '#0F2526'
        },
        error: {
          DEFAULT: '#B64C4C',
          50: '#EBCECE',
          100: '#E5C0C0',
          200: '#D9A3A3',
          300: '#CE8686',
          400: '#C26969',
          500: '#B64C4C',
          600: '#8F3A3A',
          700: '#682A2A',
          800: '#401A1A',
          900: '#180A0A'
        }
      }
    }
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
  plugins: [require('@tailwindcss/typography')]
}
