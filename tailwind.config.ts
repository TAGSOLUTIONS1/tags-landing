/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#F7F9FA',
        light: {
          white: '#FFFFFF',
          cutomwhite: '#FBFBFB',
        },
        dark: {
          secondary: '#4F4A45',
          nameclr: '#292929',
          ceoclr: '#666666',
          p4: '#3D3D3D',
        },
        gray: {
          200: '#E4E4E7',
        },
        orange: {
          primary: '#E46625',
        },
        red: {
          50: '#FFDFDD',
          100: '#FFBFBD',
          200: '#FF8D8C',
          300: '#FE7B7C',
          400: '#FC686C',
          500: '#F8535C',
          600: '#D8474F',
          700: '#9A3036',
          800: '#451114',
          900: '#2C080A',
        },
        green: {
          50: '#DCF5E6',
          100: '#B7EACD',
          200: '#90DFB5',
          300: '#64D39C',
          400: '#47CD90',
          500: '#16C784',
          600: '#0D9360',
          700: '#06623F',
          800: '#034C2F',
          900: '#023620',
          contractname: '#4EA6FF',
        },
        'main-green': {
          50: '#F4FFE1',
          100: '#E8FFC2',
          200: '#DDFFA0',
          300: '#D2FF78',
          400: '#CCFF60',
          500: '#C7FF41',
          600: '#ADDE37',
          700: '#93BE2E',
          800: '#62801C',
          900: '#4C6313',
          link: '#C6FF41',
        },
      },
      fontFamily: {
        customFont: [
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
      fontSize: {
        h1: '54px',
        p1: '16px',
        Heading: '36px',
        p2: '14px',
        p3: '18px',
        p4: '24px',
        h2: '32px',
        h3: '40px',
        h6: '20px',
        h5: '28px',
        h4: '32px',
        button: '16px',
        mainH: '60px',

        s: '10px',
      },
      fontWeight: {
        h1: 700,
        p1: 500,
        p2: 400,
        p3: 400,
        Heading: 700,
        'h-bold': 600,
        button: 500,
      },
      lineHeight: {
        h1: '60px',
        p1: '24px',
        Heading: '43.57px',
        p2: '20px',
        p3: '28px',
        p4: '32px',
        h2: '40px',

        h3: '56px',
        h6: '28px',
        h5: '40px',
        h4: '46px',

        button: '24px',
      },
      letterSpacing: {
        s: '10px',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px #00000040',
        globe: '0px 1px 6px 15px rgba(25, 33, 61, 0.08)',
      },
      mixBlendMode: {
        luminosity: 'luminosity',
        normal: 'normal',
      },
    },
  },
  plugins: [],
};
