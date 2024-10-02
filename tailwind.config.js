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
        gray: {
          400: "var(--gray_400)", 600: "var(--gray_600)",
        },
        green: {
          800: "var(--green_800)", 
          a200: "var(--green_a200)",
          a200_01: "var(--green_a200_01)",
        },
        indigo: {
          200: "var(--indigo_200)",
        },
        light_blue: {
          a400: "var(--light_blue_a400)",
        },
        orange: {
          a700: "var(--orange_a700)",
        },
        white: {
          a700: "var(--white_a700)",
          a700_2d: "var(--white_a700_2d)",
        },
      },
      boxShadow: {
        xs: "0 4px 32px 0 #00000014",
        sm: "0 4px 32px 0 #0000001e",
        md: "0 12px 32px 0 #0000001e",
      },
      fontFamily: {
        opensans: "Open Sans",
        manrope: "Manrope",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #0a2640, #0a26401b, #0a264000, #0a2640)",
      },
    },
  },
  plugins: [require("@tailwind/forms")],
}

