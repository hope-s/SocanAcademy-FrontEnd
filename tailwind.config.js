module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        "mx-auto": "auto"
      },
      colors: {
        primary: '#fcbf17',
        block: "#0b032d"
      },
      borderRadius: {
        'none': '0',
        '4xl': '2.5rem',
        '30%': '30%',
      },
      minWidth: {
        '800': '800px',
      },
      textAlign: {
        "unset" : "unset"
      },
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