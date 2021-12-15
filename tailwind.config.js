module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      opacity: {
        10: '0.1',
      },
    },
  },
  variants: {
    extend: { backgroundColor: ['active'] },
  },
  plugins: [],
};
