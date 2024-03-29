/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      fontFamily: {
        robotoflex: ["Roboto Flex", "sans-serif"],
        cormorantgaramond: ["Cormorant Garamond", "serif"],
        sans: ["Nunito Sans", "Helvetica", "Arial", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      letterSpacing: {
        widest: ".10em",
      },
      width: {
   
        100: "480px",
        120: "20rem",
        128: "25rem",
        130: "28rem",
      },
      height: {
        120: "20rem",
        128: "25rem",
        130: "28rem",
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
