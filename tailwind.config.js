const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans-primary': ['Roboto', 'sans-serif'],
      'sans-secondary': ['Raleway'],
      'sans-body-alternative': ['Barlow', 'Roboto', 'sans-serif'],
    },
    colors: {
      transparent: colors.transparent,
      orange: {
        DEFAULT: '#ec7423',
        light: '#f47724',
      },
      white: colors.white,
      blue: {
        light: '#c5dfff',
      },
      dark: {
        DEFAULT: '#383838',
      }
    },
    extend: {
      backgroundImage: theme => ({
        'splash': "url('/images/top-bg.jpg')",
        'cta-pattern': "url('/images/cta-bg.png')",
        'code-illustration': "url('/images/code-illustration.png')",
        'guy-illustration-2': "url('/images/david2.png')"
      }),
      scale: {
        '-1': '-1',
      },
      zIndex: {
        '-1': '-1',
      },
      screens: {
        '2xl': '1280px',
      },
      backgroundSize: {
        '60%': '60%',
      },
      backgroundPosition: {
        'top-1': '1rem top',
      },
      rotate: {
        '225': '225deg',
      },
      padding: {
        '65%': '65%',
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: 0,
        '2xl': 0,
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
