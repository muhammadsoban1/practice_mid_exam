/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bluish': '#4266b0',
      },
      spacing: {
        'custom-margin': '297px', // Define a custom spacing value for margins
        '120':"120%"
      },
      screens: {
        '3xl': '1501px', // Define a custom breakpoint
      },
      
    },
  },
  plugins: [],
}

