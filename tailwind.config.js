/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'voxpro': {
          navy: '#0A0B2E',
          'navy-light': '#1E1F4B',
          coral: '#FF9EAE',
          'coral-light': '#FFB5C1',
          blue: '#2E3784',
          'blue-light': '#4B55B2',
          light: '#F5F7FF',
          gray: '#8892B0',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'url("/hero-pattern.svg")',
      },
    },
  },
  plugins: [],
} 