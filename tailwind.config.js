const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layout/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#fff",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999999",
          400: "#888888",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111"
        },
        biliPink: "#fb7299",
        biliBlue: "#73c9e5"
      },
      fontFamily: {
        sans: ["Noto Sans SC", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    typography: ["dark"]
  },
  plugins: [require("@tailwindcss/typography")]
};
