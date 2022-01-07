module.exports = {
  content: [
    './src/*.tsx',
    './src/**/**/*.tsx',
    './src/styles/*.scss',
    './src/styles/**/*.scss',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: '#3485FF',
      WText: '#FAFAFA',
      TText: '#0D114F',
      GreyBlue: '#A1B2CD',
      GreyGrey: '#4D5E77',
      background: '#FBFCFF',
      Liblue: '#E0ECFF',
      trash: '#E83F5B',
    },
    backgroundImage: {
      main: 'linear-gradient(195.96deg, #5498FF -122.01%, #428EFF -8.36%, #297FFF 98.4%)',
    },
    extend: {},
  },
  plugins: [],
}
