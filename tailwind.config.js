/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
import flowbite from 'flowbite/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animations,
    flowbite
  ],}


