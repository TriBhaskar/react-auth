/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "custom-font-1": ["Cinzel", "serif"],
      "custom-font-2": ["Lato", "sans-serif"],
      "custom-font-3": ["Montserrat", "sans-serif"],
      "custom-font-4": ["Playfair Display", "sans-serif"],
      "custom-font-5": ["Roboto Condensed", "sans-serif"],
      "custom-font-6": ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-color-1": "#1D1A39",
        "custom-color-2": "#423c70",
        "custom-color-3": "#662549",
        "custom-color-4": "#AE445A",
        "custom-color-5": "#e87601",
        "custom-color-6": "#E8BCB9",
        "custom-color-7": "#FFB32B",
        "custom-color-8": "#F5C63C",
        "custom-color-9": "#637296",
        "custom-color-10": "#6f889c",
        "custom-color-11": "#eef6fc",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(360.0deg)" },
        },
      },
      animation: {
        slow: "spin 5s linear infinite",
      },
    },
    plugins: [],
  },
};
