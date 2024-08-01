import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: '1440px',
      },
      boxShadow: {
        DEFAULT: '-2px 2px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
}
export default config
