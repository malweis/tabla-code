/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        "btn-primary" : "#C6FCEC",
        "text-main": "#fbf3f3",
        "text-secondary": "#111827",
        "secondary-btn": "#eae8ed"

      }
    },
  },
  plugins: [],
}

