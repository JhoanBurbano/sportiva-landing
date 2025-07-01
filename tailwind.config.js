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
        'blue-electric': 'rgb(var(--color-blue-electric) / <alpha-value>)',
        'green-lime': 'rgb(var(--color-green-lime) / <alpha-value>)',
        'white': 'rgb(var(--color-white) / <alpha-value>)',
        'dark': 'rgb(var(--color-dark) / <alpha-value>)',
        'dark-alt': 'rgb(var(--color-dark-alt) / <alpha-value>)'
      },
      fontFamily: {
        'outfit': 'var(--font-outfit)',
        'inter': 'var(--font-inter)',
        'urbanist': 'var(--font-urbanist)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
