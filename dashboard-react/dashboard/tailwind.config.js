/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/***/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        btn: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        ip: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        shadowcard : 'box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
        navshadow : 'box-shadow: 1px 5px 17px -1px rgba(31, 31, 31, 0.75);',
        tabledatashadow : 'box-shadow: 0px 1px 2px 0px rgba(162, 163, 163, 0.15); ',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary :  "#2CAEFF",
      yellow : "#ffc107",
      black : '#111111',
      white : "#ffffff",
      gray : "#4F4F4F",
      blue : "#1A365C",
      darkyellow : "#f88500",
      red   : "#9e1311",
      green : "#3d8c0d",
      lightgray: '#A4A4A4'
    },
    fontFamily: {
      sans: ['poppins', 'sans-serif']
    },
    fontSize:{
      h1:'40px'
    },
    fontWeight: {
      100 : 100,
      200 : 200,
      300 : 300,
      400 : 400,
      500 : 500,
      600 : 600,
      700 : 700,
      800 : 800,
      900 : 900,
      1000 : 1000
    }
  },
  plugins: [],
}
