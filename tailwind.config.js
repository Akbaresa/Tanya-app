/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./pages/app.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
    'node_modules/preline/dist/*.js',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
    require("tw-elements/dist/plugin.cjs"),
    

  ],
  darkMode: "class"
}

