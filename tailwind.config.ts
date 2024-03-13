import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        slider: "linear-gradient(to top, #222 5%, transparent)",
        thumbnails: "linear-gradient(to top, #222 2%, transparent)",
      },
      colors: {
        primary: "#62cbc9",
        "gray-light": "#232028",
        "yellow-hover": "#FFB703",
        "color-contrast": "#A0AAB2",
      },
    },
  },
  plugins: [],
};
export default config;
