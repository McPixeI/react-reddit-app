const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#0079d3',
      bgdark: '#111827',
      bglight: '#dae0e6',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      yellow: colors.yellow,
      red: colors.red
    },
    extend: {}
  },
  plugins: []
}
