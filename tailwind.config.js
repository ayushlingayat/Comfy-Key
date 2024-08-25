/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        regular:['Regular'],
        medium:['Medium'],
        black:['Black'],

        resgakRegular:['resRegular'],
        resgakMedium:['resMedium'],
        resgakSemiBold:['resSemiBold'],
        resgakBold:['resBold'],
      },
      colors:{
        green : '#18473D',
        grey : "#8D8A8A",
        lightBrown : "#C5AC8D",
        lightGrey : "#ABA7A7",
        darkGrey : "#848282",
        darkGreen:"#143F36",
      },

    },
  },
  plugins: [],
}

