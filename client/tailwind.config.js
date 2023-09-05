/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'static': "url('./imagesAndVideos/tvStatic.gif')"
      },
      fontFamily: {
        'arvo': ['Arvo', 'serif'],
        'londrina': ['Londrina Outline', 'cursive'],
        'rampart': ['Rampart One', 'cursive'],
        'rubik': ['Rubik Moonrocks', 'cursive'],
        'monoton': ['Monoton', 'cursive'],
        'bungee': ['Bungee Shade', 'cursive']
      }
    },
    screens: {
      'tablet': '760px',
      'desktop': '950px',
      'wide': '1200px'
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
