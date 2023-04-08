/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounced: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.1)" },
          "70%": { transform: "scale(1)" },
          "85%": { transform: "scale(1.03)" },
          "100%": { transform: "scale(1)" },
        },
        alert: {
          "0%": { transform: "translateX(-200%)" },
          "50%": { transform: "translateX(3%)" },
          "60%": { transform: "translateX(-3%)" },
          "70%": { transform: "translateX(2%)" },
          "80%": { transform: "translateX(-2%)" },
          "90%": { transform: "translateX(1%)" },
          "100%": { transform: "translateX(0)" },
        },
        tableInit: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        bounced: "bounced .5s ease-in-out",
        alert: "alert .7s ease-in-out",
        tableInit: "tableInit .5s ease-in-out .4s forwards",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        firago: ["FiraGO", "sans-serif"],
      },
    },
  },
  plugins: [],
}
