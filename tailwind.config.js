module.exports = {
  content: ["./*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'blue':{
        50:'#F3F5FC',
        100:'#EFF1FA',
        200:'#E9ECF8',
        300:'#AAB2D5',
        400:'#757FB2',
        500:'#609ED4',
        600:'#356EA9',
        700:'#0A3871',
        800:'#072B61',
        900:'#052051'
      },
      'yellow':{
        600:'#ca8a04',
      },
      'gray':{
        100:'#CED4DA',
        200:'#ADB5BD',
        300:'#d1d5db',
        400:'#495057',
        500:'#6b7280',
        700:'#374151',
        800:'#1f2937',
        900:'#111827'
      }

    }
  },
  plugins: [],
}
