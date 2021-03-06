module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  // change existing style
  theme: {
    // add additional values to tailwindcss
    extend: {
      borderRadius: {
        "p-lg": "3rem",
        lg: "5rem",
      },
      margin: {
        "-68": "-17rem",
      },
      fontSize: {
        "8.5xl": [
          "6.8rem",
          {
            letterSpacing: "-0.01em",
          },
        ],
      },
      backgroundColor: {
        "green-400": "#029F58",
        "green-500": "#039352",
        "green-600": "#029C56",
        "gray-100": "#F0F0E6",
        "gray-200": "#fafafa",
        "gray-300": "#FFFFFD",
        "gray-400": "#F3F3F3",
        "gray-500": "#363636",
        "gray-600": "#2e2e2e",
        "gray-700": "rgba(0,0,0, .2)",
        "gray-800": "#272727",
        "gray-900": "#202020",
        "yellow-400": "#FFBB62",
        "red-600": "#E34D4D",
      },
      borderWidth: {
        12: "12px",
      },
      colors: {
        "green-500": "#007640",
        "gray-100": "rgba(255,255,255, .9)",
        "gray-200": "#121212",
        "gray-300": "#a6a6a6",
        "gray-500": "rgba(255, 255,255, .6)",
        "gray-400": "rgba(18,18,18, .6)",
        "yellow-300": "#FFBB62",
      },
      fontFamily: {
        dmsans: ["DM Sans, sans"],
      },
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      "yellow-400": "#FFBB62",
      "yellow-500": "#FF8C62",
      "gray-500": "#363636",
      "gray-400": "#2e2e2e",
      "gray-300": "rgba(0, 0, 0, 0.2)",
    }),
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      bm: "903px",
      lg: "1024px",
      blg: "1185px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
