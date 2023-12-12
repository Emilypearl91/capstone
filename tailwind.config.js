/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        book: ['Inknut Antiqua', 'serif']
      },
      colors: {
        sbb: '#F0EEE0',
        personality: '#DDB7AB',
        sga: '#999B84',
        stl: '#393E41',
      },
    }
  },
  plugins: []
};

