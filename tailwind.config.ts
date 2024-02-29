import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-dino": 'url("../public/images/bg1.png")',
        "bg-star": 'url("../public/images/bg2.png")',
      },
      fontFamily: {
        minecraft: ["Minecraft", "sans-serif"],
        northwood: ["Northwood", "sans-serif"],
        glitch: ["Glitch", "sans-serif"],
        technopollas: ["Technopollas", "sans-serif"],
        NIKOLETA: ["NIKOLETA", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        greenblue: "#4DFFDB",
        pink: "#AF3683",
      },
    },
  },
  plugins: [],
};
export default config
