const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layout/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fff',
        black: '#000',
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529'
        }
      },
      fontSize: {
        xs: ['12px', '1rem'],
        sm: ['14px', '1.25rem'],
        base: ['16px', '1.5rem'],
        lg: ['18px', '1.75rem'],
        xl: ['20px', '1.75rem'],
        '2xl': ['24px', '2rem'],
        '3xl': ['28px', '2.25rem'],
        '4xl': ['32px', '1'],
        '5xl': ['36px', '1']
      },
      typography: ({ theme }) => ({
        gray: {
          css: {
            '--tw-prose-body': theme('colors.gray[800]'),
            '--tw-prose-headings': theme('colors.gray[900]'),
            '--tw-prose-lead': theme('colors.gray[700]'),
            '--tw-prose-links': theme('colors.blue[500]'),
            '--tw-prose-bold': theme('colors.gray[900]'),
            '--tw-prose-counters': theme('colors.gray[600]'),
            '--tw-prose-bullets': theme('colors.gray[400]'),
            '--tw-prose-hr': theme('colors.gray[300]'),
            '--tw-prose-quotes': theme('colors.gray[900]'),
            '--tw-prose-quote-borders': theme('colors.gray[300]'),
            '--tw-prose-captions': theme('colors.gray[700]'),
            '--tw-prose-code': theme('colors.gray[800]'),
            '--tw-prose-pre-code': theme('colors.gray[100]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.gray[300]'),
            '--tw-prose-td-borders': theme('colors.gray[300]'),
            // invert
            '--tw-prose-invert-body': theme('colors.gray[400]'),
            '--tw-prose-invert-headings': theme('colors.gray[300]'),
            '--tw-prose-invert-lead': theme('colors.gray[300]'),
            '--tw-prose-invert-links': theme('colors.blue[500]'),
            '--tw-prose-invert-bold': theme('colors.gray[100]'),
            '--tw-prose-invert-counters': theme('colors.gray[400]'),
            '--tw-prose-invert-bullets': theme('colors.gray[600]'),
            '--tw-prose-invert-hr': theme('colors.gray[700]'),
            '--tw-prose-invert-quotes': theme('colors.gray[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.gray[700]'),
            '--tw-prose-invert-captions': theme('colors.gray[400]'),
            '--tw-prose-invert-code': theme('colors.gray[200]'),
            '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.gray[700]'),
            '--tw-prose-invert-td-borders': theme('colors.gray[700]')
          }
        }
      })
    }
    // variants: {
    //   typography: ["dark"]
    // }
  },
  plugins: [require('@tailwindcss/typography')]
};
