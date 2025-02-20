import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "30px",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "900px",
      xl: "1300px",
    },
    extend: {
      colors: {
        bg: "#151515",
        primary: "#0CE6DF",
        text: "#dcdcdc",
        text2: "#FCFCFC",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
