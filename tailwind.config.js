const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#67A7DB",
        secondary: "#487599",
        tertiary: "#393E46",
        borderMain: "#5E6E85",
        border2: "#FAFAFA",
        backgroundColor: "#EEEEEE",
        bgButton: "#D1E5F4",
        pureWhite: "#FFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      letterSpacing: {
        moreWide: ".75em",
      },
    },
  },
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),
  ],
};
