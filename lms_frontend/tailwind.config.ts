import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6d28d9",
        cream: "#faf7f2",
        soft: "#f3f4f6",
      },
    },
  },
  plugins: [],
};

export default config;
