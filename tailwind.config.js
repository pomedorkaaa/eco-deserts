/* @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind.config = {
  plugins: [require("prettier-plugin-tailwindcss")],
  content: ["./**/*.html"],
  // content: ["./index.html"],
  theme: {
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
      "2xl": "1536px", // => @media (min-width: 1536px) { ... }
      //
      _2xl: { max: "1535px" }, // => @media (max-width: 1535px) { ... }

      _xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }

      _lg: { max: "1023px" }, // => @media (max-width: 1023px) { ... }

      _md: { max: "767px" }, // => @media (max-width: 767px) { ... }

      _sm: { max: "639px" }, // => @media (max-width: 639px) { ... }
    },
    backgroundPosition: {
      "bottom-5": "center bottom 37px",
    },

    fontFamily: {
      Alegreya: ["Alegreya"],
      Plov: ["Plovdiv Display"],
      Cleopatra: ["Cleopatra"],
      BrushType: ["BrushType"],
    },
    extend: {
      backgroundImage: {
        "block-one-bg-y": "url(../images/brown-bg-y.jpg)",
        "block-one-bg-x": "url(../images/brown-bg-x.jpg)",
        "block-three-bg-y": "url(../images/block-three-bg-y.png)",
        "block-three-bg-x": "url(../images/block-three-bg-x.png)",
        "block-seven-bg-x": "url(../images/block-seven-bg-x.png)",
        "block-seven-bg-y": "url(../images/block-seven-bg-y.png)",
        "heart-bg": "url(../images/heart.svg)",
        // 'main-bg': 'url(../images/main-bg.jpg)',
      },
      colors: {
        coralred: "#E46358",
        chocolate: "#6A2021",
        "light-choco": "#DBAB83",
      },
    },
  },
  plugins: [],
};
