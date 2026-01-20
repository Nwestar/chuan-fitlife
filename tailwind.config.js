/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7f5",
          100: "#d7ebe6",
          200: "#b0d7cd",
          300: "#7fbeb2",
          400: "#4f9f92",
          500: "#2f7d72",
          600: "#225e57",
          700: "#1b4b46",
          800: "#163a36",
          900: "#122f2c",
        },
      },
    },
  },
  plugins: [],
};
