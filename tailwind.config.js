/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  // content: ["./index.html"],
  theme: {
    fontFamily: {
      Alegreya: ['Alegreya'],
      Plov: ['Plovdiv Display'],
      Cleopatra: ['Cleopatra'],
      BrushType: ['BrushType'],
    },
    extend: {
      backgroundImage: {
        'block-one-bg': 'url(../images/BackroundHeader.png)',
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
