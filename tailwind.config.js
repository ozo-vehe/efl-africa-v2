/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'efl-green-20': '#d1ebdb',
        'efl-green-40': '#a1d6b5',
        'efl-green-60': '#72c291',
        'efl-green-80': '#44ad6c',
        'efl-green-base': '#159947',
        'efl-blue-20': '#ced4e0',
        'efl-blue-40': '#a1abc2',
        'efl-blue-60': '#7181a3',
        'efl-blue-80': '#425987',
        'efl-blue-base': '#101d6a',
      },
    },
  },
  plugins: [],
}
