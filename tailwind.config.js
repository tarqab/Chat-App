/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Bree: ["Bree Serif", "serif"]
    },
    screens : {
      'md': {'max':'860px'},
      'sm': {'max':'675px'},
    },
    extend: {},
  },
  plugins: [],
}
