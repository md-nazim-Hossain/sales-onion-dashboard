/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "theme-base-1": "#282C35",
        "theme-base-2": "#1A1C22",
        primary: "#FF7100",
        secondary: "#9E9E9E",
      },

      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
