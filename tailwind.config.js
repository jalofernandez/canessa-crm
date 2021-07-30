module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge: {
  //   // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     'nuxt.config.js'
  //   ]
  // },

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      // fill: (theme) => ({
      //   yellow: theme('colors.yellow.400'),
      //   blue: theme('colors.blue.900'),
      // }),
      // backgroundColor: (theme) => ({
      //   light: theme('colors.gray-main.300'), // new color declared just below
      //   dark: theme('colors.navy.900'),
      //   dark: theme('colors.navy.700'),
      // }),
      // textColor: (theme) => ({
      //   dark: theme('colors.sky.300'),
      // }),
      // backgroundColor: ['active'],
      colors: {
        'gray-main': {
          300: '#EAEDF2',
        },
        'navy': {
          900: '#0F253A',
          700: '#1B4360',
          500: '#22567b',
          300: '#3584bd',
        },
        'sky': {
          300: '#B8DFF4',
          100: '#f3fafd',
        },
        // main corp. color (orange)
        'brand': {
          600: '#D2560D',
          500: '#F06311',
          300: '#F38241',
          100: '#FFD2B7',
        },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
}
