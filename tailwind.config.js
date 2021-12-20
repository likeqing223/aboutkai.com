const { spacing } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layout/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#fff",
        black: "#000",
        gray: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529"
        }
      },
      fontSize: {
        xs: ["12px", "1rem"],
        sm: ["14px", "1.25rem"],
        base: ["16px", "1.5rem"],
        lg: ["18px", "1.75rem"],
        xl: ["20px", "1.75rem"],
        "2xl": ["24px", "2rem"],
        "3xl": ["28px", "2.25rem"],
        "4xl": ["32px", "1"],
        "5xl": ["36px", "1"]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700")
              },
              code: { color: theme("colors.blue.400") }
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32]
            },
            thead: {
              borderBottomColor: theme("colors.gray.200")
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false
          }
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600")
              },
              code: { color: theme("colors.blue.400") }
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.600")
            },
            "h2,h3,h4": {
              color: theme("colors.gray.200"),
              "scroll-margin-top": spacing[32]
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") }
              }
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") }
              }
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.600")
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700")
              }
            }
          }
        }
      })
    },
    variants: {
      typography: ["dark"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
