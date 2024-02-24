import type { Config } from 'tailwindcss'



const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "white": "#F6F6F8",
        "black": "#1C2021",
      },
      padding: {
        "parent" : "5rem"
      }
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["night"],
          "neutral": "#20293A", // Grey
          "base-100": "#1C2021", // Black
          "base-content": "#F6F6F8", // White

          // custom themes
          ".bg-cyan": {
            "background-color": "#97D4D7"
          },
          ".bg-pink": {
            "background-color": "#F1A1CC"
          },
          ".bg-orange": {
            "background-color": "#FFD19B"
          },
          ".text-cyan": {
            "color": "#97D4D7"
          },
          ".text-pink": {
            "color": "#F1A1CC"
          },
          ".text-orange": {
            "color": "#FFD19B"
          },
          ".text-gradient-white-black": {
            "background": "linear-gradient(to bottom, #F6F6F8 30%, transparent)",
            "-webkit-background-clip": "text",
            "color": "transparent",
            "display": "inline",
          },
        },
      },
      "light"
    ],
  },
  plugins: [require('daisyui')],
}
export default config
