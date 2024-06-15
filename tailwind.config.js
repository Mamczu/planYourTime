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
      sm: '576px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      tablet: '576px',
      // => @media (min-width: 576px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  plugins: [],
};
