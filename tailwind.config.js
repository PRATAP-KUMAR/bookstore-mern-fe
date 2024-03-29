/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cred: {
          500: '#00ff00',
        },
      }
    },
  },
  plugins: [],
}