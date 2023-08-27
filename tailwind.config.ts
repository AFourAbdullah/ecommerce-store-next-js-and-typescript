import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    clipPath: {
      mypolygon: "polygon(78% 0, 100% 0, 100% 100%, 33% 100%);",
    },
  },
  plugins: [require("tailwind-clip-path")],
};
export default config;