module.exports = {
  prefix: '',
  purge: {
    content : ["./src/**/*.{html,ts"],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    
    extend: {
      colors:{
      green_gaia: '#047A3A',
      orange_gaia: '#F06E30',
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
