const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layout/**/*.tsx"],
  darkMode: "media",
  theme: {
    extend: {
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
