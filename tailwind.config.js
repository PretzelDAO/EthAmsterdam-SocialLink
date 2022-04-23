module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "hacker-color": {
          200: "#0E1234",
        },
        "hacker-accent": {
          200: "#6FFFDD",
          400: "#00E0AC",
          600: "#0E1234",
        },
        "background": {
          200: "#DADFE7",
        },
      },
      fontFamily: {
        body: ["Sans"],
      },
    },
  },
  // plugins: [require('tw-elements/dist/plugin')],
};
