module.exports = {
  purge: {
    content: [
      "./layouts/**/*.html",
      "./content/**/*.md",
      "./content/**/*.html"
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Oswald'],
      serif: ['Quattrocento'],
      body: ['Quattrocento'],
    },
  },
  variants: {},
  plugins: [],
}
