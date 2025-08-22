/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0f8f62",
          dark: "#0b6c4a",
          light: "#CFFFEF",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,0.08)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
