import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Growth Garden Aesthetic
        primary: {
          green: {
            DEFAULT: "#4CAF50",
            light: "#66BB6A",
          },
        },
        earth: {
          DEFAULT: "#8D6E63",
          light: "#A1887F",
        },
        warm: {
          DEFAULT: "#FFB74D",
          light: "#FFA726",
        },
        background: {
          DEFAULT: "#F5F5F5",
          light: "#FAFAFA",
        },
        text: {
          DEFAULT: "#424242",
          light: "#616161",
        },
      },
      fontFamily: {
        heading: ["Nunito", "Poppins", "sans-serif"],
        body: ["Inter", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

