module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.vue', './src/**/*.js', './src/**/*.ts'],
  },
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
