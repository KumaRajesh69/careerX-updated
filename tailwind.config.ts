import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        bgLightBlue: "#F4F7FB",
        bluePrimary: "#114388",
        lightBlue: "#1C6FE3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "why-career-x-bg": "url('/whyCareerX.svg')",
        "why-career-x-bg-mob": "url('/whyCareerXMob.svg')",
        "work-bg": "url('/workBg.svg')",
        "stay-updated-bg": "url('/stayUpdated.svg')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
