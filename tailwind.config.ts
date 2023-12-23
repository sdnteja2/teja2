/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    fontSize: {
      'xs': '0.611rem',
      'sm': '0.778rem',
      'base': '1rem',
      'xl': '1.333rem',
      '2xl': '1.722rem',
      '3xl': '2.222rem',
      '4xl': '2.944rem',
      '5xl': '3.833rem',
      '6xl': '5.056rem',
    },
    extend: {
      colors: {
        merah: {
          DEFAULT: '#F22727',
          50: '#FCD4D4',
          100: '#FBC1C1',
          200: '#F99A9A',
          300: '#F77474',
          400: '#F44D4D',
          500: '#F22727',
          600: '#D40D0D',
          700: '#9F0A0A',
          800: '#6A0606',
          900: '#350303',
          950: '#1B0202',
        },
        kuning: {
          DEFAULT: '#F2A516',
          50: '#FCE8C4',
          100: '#FBE1B1',
          200: '#F8D28A',
          300: '#F6C363',
          400: '#F4B43D',
          500: '#F2A516',
          600: '#C5840B',
          700: '#906008',
          800: '#5B3D05',
          900: '#261902',
          950: '#0B0701',
        },
      },
      fontFamily: {
        body: ['Rethink Sans', 'sans-serif'],
        title: ['Eczar', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './content/**/*.md',
  ],
}
