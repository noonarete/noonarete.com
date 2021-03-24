const defaultTheme = require('tailwindcss/defaultTheme');

const themeDir = __dirname;

module.exports = {
  purge: [
    themeDir + '/layouts/**/*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        noonblue: { DEFAULT: '#0080D8', },
        sushi: { DEFAULT: '#39A17A', },
        scooter: { DEFAULT: '#11D1D1', },
        carrara: { DEFAULT: '#F1F2F3', },
        shakespeare: { DEFAULT: '#75BAD2', },
        calypso: { DEFAULT: '#396795', },
        valhalla: { DEFAULT: '#121B32', },
      },
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(4rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.75s ease-out',
      },
    },
  },
  variants: {},
  plugins: [],
}
