/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto Condensed", "sans-serif"],
        "nasalization": ['Nasalization', 'sans-serif'],
      },
      backgroundImage: {
        "aboutUs": "url('/assets/images/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg')",
        "events": "url('/assets/images/rachel-coyne-U7HLzMO4SIY-unsplash 2.jpg')",
        "getStarted": "url('/assets/images/yannis-papanastasopoulos-yWF2LLan-_o-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}