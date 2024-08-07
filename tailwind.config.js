/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/index.css",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blanco: "#FFFFFF",
        azuloscuro: "#08152F",
        celeste: "#506DAD",
        celesteclaro: "#A4B9E4",
        celestemuyclaro: "#eff4ff"
      },
      fontFamily: {
        beiruti: ['Beiruti', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

