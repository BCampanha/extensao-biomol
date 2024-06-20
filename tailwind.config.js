/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          principal: '#38c958',
          escuro: '#149c68',
          claro: '#aee637'
        },
        creme: '#fffedb',
        escuro: '#383939',
        laranja: '#e36f40'
      }
    },
  },
  plugins: [],
}

