/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        static:
          "url('https://storage.googleapis.com/ciyp-photos/tvStatic.webp')",
      },
      fontFamily: {
        arvo: ["Arvo", "serif"],
        londrina: ["Londrina Outline", "cursive"],
        rubik: ["Rubik Moonrocks", "cursive"],
        monoton: ["Monoton", "cursive"],
        bungee: ["Bungee Shade", "cursive"],
        aoboshi: ["Aoboshi One", "serif"],
        della: ["Della Respira", "serif"],
        eagle: ["Eagle Lake", "serif"],
        righteous: ["Righteous", "sans-serif"],
        moda: ["Bodoni Moda", "serif"],
        modaCaps: ["Bodoni Moda SC", "serif"]
      },
    },
    screens: {
      tablet: "760px",
      desktop: "950px",
      wide: "1200px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
