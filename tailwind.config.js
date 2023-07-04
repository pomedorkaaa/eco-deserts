/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  // content: ["./index.html"],
  theme: {
    fontFamily: { 
       'Alegreya': ['Alegreya', 'serif'],
       'Plov': ["Plov"]
    },
    extend: {
      backgroundImage: {
        "block-one-bg": "url(../images/BackroundHeader.png)",
      },
      colors: {"coralred": "#E46358"}
    },
  },
  plugins: [],
};
