module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: "media",
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#182129",
        primary: {
          light: "#00e6cb",
          dark: "#b690ff",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      fontFamily: {
        mono: "'Source Code Pro', monospace",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: "#9ea1a4",
        primary: "#485a73",
      }),
    },
  },
};
