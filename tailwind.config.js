/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fastHand": ["Fasthand", "cursive"],
      },
      backgroundImage: {
        "aboutUs": "url('assets/images/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}