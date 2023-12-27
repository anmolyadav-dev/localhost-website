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
    },
  },
  plugins: [],
};
export default config
