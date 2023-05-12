/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: {
        DEFAULT: "#1D00B2",
        75: "#5640C5",
        50: "#8E80D9",
        25: "C6BFEC",
      },
      grey: {
        DEFAULT: "#5F5F5D",
        75: "#919190",
        50: "#C9C9C9",
        25: "#EAEAE9 ",
      },
      orange: {
        DEFAULT: "#E36409",
      },
      link: {
        DEFAULT: "#035FCC",
      },
      white: {
        DEFAULT: "#FAFAFA",
      },
      error: {
        DEFAULT: "#EE3900",
      },
    },
    fontFamily: {
      //add font families here
    },
    fontSize: {
      12: "0.75rem",
      14: "0.875rem",
      base: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      64: "4rem",
    },
    borderWidth: {
      DEFAULT: "1px",
      1.5: "1.5px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  plugins: [],
};
