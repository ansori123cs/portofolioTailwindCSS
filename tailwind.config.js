/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        oswald: ['Oswald'],
        sacramento: ['Sacramento'],
      },
      screens: {
        '2xl': '1320px',
      },
    },
    colors: {
      primary: '#b91c1c',
      secondary: '#64748b',
      dark: '#18181b',
      white: '#fff',
    },
  },
  plugins: [],
};
