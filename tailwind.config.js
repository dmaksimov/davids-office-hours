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
      orange: {
        DEFAULT: '#ec7423'
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
      }),
      scale: {
        '-1': '-1',
      },
      zIndex: {
        '-1': '-1',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
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
