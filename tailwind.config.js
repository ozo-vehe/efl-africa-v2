/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-20': '#d1ebdb',
        'green-40': '#a1d6b5',
        'green-60': '#72c291',
        'green-80': '#44ad6c',
        'green-base': '#159947',
        'blue-20': '#ced4e0',
        'blue-40': '#a1abc2',
        'blue-60': '#7181a3',
        'blue-80': '#425987',
        'blue-base': '#101d6a',
      },
    },
  },
  plugins: [],
}
