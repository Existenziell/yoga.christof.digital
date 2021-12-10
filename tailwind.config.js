module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // https://tailwindcss.com/docs/font-family#customizing
        sans: [
          'Gotu'
        ],
      },
      colors: {
        'brand': '#C90076',
      },
      backgroundImage: {
        'cloth-pattern': "url('/icons/cloth.jpg')",
        'cloth-pattern-dark': "url('/icons/cloth-dark.jpg')",
        'parallax-1': "url('/parallax/1.webp')",
        'parallax-2': "url('/parallax/2.webp')",
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
    gradientColorStops: theme => ({
      primary: '#fdbb2d',
      secondary: '#22c1c3',
      // primary: '#00c3ff',
      // secondary: '#ffff1c',
      // primary: '#F4D03F',
      // secondary: '#16A085',
      // primary: '#36D1DC',
      // secondary: '#5B86E5',
      // primary: '#007991',
      // secondary: '#78ffd6',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
