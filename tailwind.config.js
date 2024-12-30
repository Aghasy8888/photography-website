/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1850px',
        '4xl': '2100px',
      },
      fontFamily: {
        // roboto: ['Roboto', 'sans-serif'],
      },
      transitionDuration: {
        350: '350ms',
      },
      colors: {
        persianRed: '#cb2845',
        charcoalGray: '#262626',
        stoneGray: '#898989',
        steelGray: '#6e6e6e',
        darkCharcoal: '#151515',
        mediumDarkGray: '#4b4b4b',
        pinkishRed: '#ea667d',
        crimsonRed: '#a81c34',
        roseRed: '#ed3857',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('autofill', '&:-webkit-autofill');
    },
  ],
};
