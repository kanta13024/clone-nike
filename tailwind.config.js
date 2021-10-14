module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".link": {
          // CSS-in-JS 構文になる
          color: "#3490dc",
          borderBottom: "solid 1px #3490dc",
          "&:hover": {
            cursor: "pointer",
          },
          "&:active": {
            color: "#fff",
          },
        },
        ".click": {
          "&:active": {
            transform: "scale(0.9)",
            animationFillMode: "forwards",
          },
          "&:hover": {
            cursor: "pointer",
          },
        },
        ".category": {
          "&:hover": {
            cursor: "pointer",
            color: "#d3d3d3",
            transform: "scale(1.1)",
            animationFillMode: "forwards",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
