module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '50%': '50%',
        '25px': '25px',
      },
      colors: {
        primary: '#fcbf17',
      }
    },
    screens: {
      "xs": "420px",
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2x': "1400px",
      '3xl': '1536px',
    },
  },
  plugins: [],
}