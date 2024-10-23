/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        static: "url('/src/components/Reusable/tvStatic.webm')",
      },
      fontFamily: {
        arvo: ["Arvo", "serif"],
        monoton: ["Monoton", "cursive"],
        moda: ["Bodoni Moda", "serif"],
        modaCaps: ["Bodoni Moda SC", "serif"],
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
