import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        static: "url('./app/assets/tvStatic.gif')",
      },
      fontFamily: {
        // arvo: ["Arvo", "serif"],
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
} satisfies Config;
