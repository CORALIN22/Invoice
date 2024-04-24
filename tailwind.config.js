/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#67A7DB",
        secondary: "#487599",
        tertiary: "#393E46",
        borderMain: "#d6d6d6",
        border2: "#FAFAFA",
        backgroundColor: "#EEEEEE",
        bgButton: "#D1E5F4",
        pureWhite: "#FFFF",
        placeHolder: "#AAAAAA",
      },
      letterSpacing: {
        moreWide: ".75em",
      },
    },
  },
  plugins: [],
};
