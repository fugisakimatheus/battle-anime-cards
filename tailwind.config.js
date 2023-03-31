/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'board': "url('/src/assets/board.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ],
}

