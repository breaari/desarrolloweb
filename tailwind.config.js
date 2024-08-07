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
      screens: {
        mq1220: {
          raw: "screen and (max-width: 1220px)",
        },
        mq980: {
            raw: "screen and (max-width: 980px)",
          },
        mq400: {
          raw: "screen and (max-width: 400px)",
        }
    }
    }
  },
  plugins: [],
}

