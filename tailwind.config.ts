import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    fontFamily: {
      primary: "var(--font-fira-code)",
    },
    extend: {
      screens: {
        xs: "500px",
      },
      colors: {
        primary: "#282C33",
        secondary: "#1A3843",
        gray: "#ABB2BF",
        accent: {
          DEFAULT: "#C778DD",
          hover: "#00e187",
        },
      },
    },
  },
  plugins: [],
};
export default config;
