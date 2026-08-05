import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F3D2E",
          dark: "#0A291F",
          light: "#165642",
        },
        secondary: "#1F6B52",
        accent: {
          DEFAULT: "#D9A441",
          hover: "#C28F2C",
        },
        wood: {
          DEFAULT: "#8B5E3C",
          light: "#A7744F",
        },
        cream: "#FAFAF8",
        surface: "#FFFFFF",
        dark: {
          DEFAULT: "#111827",
          muted: "#1F2937",
        },
        "gray-soft": "#F3F4F1",
      },
    },
  },
  plugins: [],
};

export default config;
