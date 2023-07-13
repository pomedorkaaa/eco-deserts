/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  // content: ["./index.html"],
  theme: {
    screens: {
      sm: '640px', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    backgroundPosition: {
      'bottom-5': 'center bottom 37px',
    },

    fontFamily: {
      Alegreya: ['Alegreya'],
      Plov: ['Plovdiv Display'],
      Cleopatra: ['Cleopatra'],
      BrushType: ['BrushType'],
    },
    extend: {
      backgroundImage: {
        'block-one-bg-y': 'url(../images/brown-bg-y.jpg)',
        'block-one-bg-x': 'url(../images/brown-bg-x.jpg)',
        // 'main-bg': 'url(../images/main-bg.jpg)',
      },
      colors: {
        coralred: '#E46358',
        chocolate: '#6A2021',
      },
    },
  },
  plugins: [],
};
