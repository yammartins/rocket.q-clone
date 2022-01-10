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
      wtext: '#FAFAFA',
      ttext: '#0D114F',
      greyblue: '#A1B2CD',
      greygrey: '#4D5E77',
      liblue: '#E0ECFF',
      trash: '#E83F5B',
      icon: '#A5B0C1',
      cancel: '#E5EAF1'
    },
    backgroundImage: {
      main: 'linear-gradient(195.96deg, #5498FF -122.01%, #428EFF -8.36%, #297FFF 98.4%)',
    },
    fontFamily: {
      sans: ['Open Sans', 'system-ui', 'sans-serif'],
      poppins: ['Poppins', 'system-ui', 'sans-serif']

    },
    fontSize: {
      title: ['28px', '42px'],
      base: ['16px', '24px'],
      sub: ['18px', '27px'],
      details: ['14px', '19px'],
      box: ['24px', '34px']
    },
    screens: {
      'ws': '1120px'
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
