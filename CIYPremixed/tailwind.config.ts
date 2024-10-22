import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        static:
          "url('https://storage.googleapis.com/ciyp-photos/tvStatic.gif')",
      },
      fontFamily: {
        arvo: ["Arvo", "serif"],
        londrina: ["Londrina Outline", "cursive"],
        rampart: ["Rampart One", "cursive"],
        rubik: ["Rubik Moonrocks", "cursive"],
        monoton: ["Monoton", "cursive"],
        bungee: ["Bungee Shade", "cursive"],
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

