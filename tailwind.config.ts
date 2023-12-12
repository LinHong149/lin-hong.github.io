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

          "primary": "#62BAF3", // Blue
          "secondary": "#838CF1", // Purple
          "info": "#4BA2E3", // Blue
          "success": "#D672A8", // Green
          "warning": "#ECC164", // Yellow
          "accent": "#D672A8", // Pink
          "error": "#EA7887", // Red

        },
      },
      "light"
    ],
  },
  plugins: [require('daisyui')],
}
export default config
