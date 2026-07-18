/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./projects/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        calibri: ['myCalibriLight', 'Calibri Light', 'Calibri', 'sans-serif'],
      },
      colors: {
        'accent-pink': 'rgba(255, 165, 165, 0.336)',
        'accent-pink-hover': 'rgba(185, 118, 118, 0.336)',
        'accent-border': 'rgba(72, 18, 18, 0.52)',
      }
    },
  },
  plugins: [],
}

