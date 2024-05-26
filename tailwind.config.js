/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#293551',
        'light-blue': '#3b82f6',
        'dark-red': '#a50101',
        'dark-green': '#00913d',
      },
    },
    screens: {
      tablet: '576px',
      // => @media (min-width: 576px) { ... }

      desktop: '1280px',
      // => @media (min-width: 960px) { ... }
    },
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  plugins: [],
};
