/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        amber: { a700: "var(--amber_a700)"},
        black: { 900: "var(--black_900)", "900_14": "var(--black_900_14)", "900_1e" : "var(--black_900_1e)" },
        blue_gray: {
          50: "var(--blue_gray_50)",
          300: "var(--blue_gray_50)",
          800: "var(--blue_gray_50)",
          900: "var(--blue_gray_50)",
          "900_00": "var(--blue_gray_900_00)",
          "900_1b": "var(--blue_gray_900_1b)",
        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      spacing: {
        12: "3rem",
        16: "4rem",
        24: "6rem",
        32: "8rem",
        48: "12rem",
      },
    },
  },
  plugins: [],
}

