/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-500": '#3A0CA3',
        "secondary-500": '#4361EE',
        "info": '#4CC9F0',
        "rose": '#F72585',
        "dark-1": '#0B090A',
        "dark-2": '#2B2B2B',
        "dark-3": '#808080',
        "dark-4": '#1E1E1E',
        "light-1": "#AAAAAA",
        "light-2": "#D4D4D4",


      },

      fontSize: {
        'heading1-semibold': [
          '60px',
          {
            lineHeight: '65',
            fontWeight: '600'
          }
        ],

        'heading2-semibold': [
          '40px',
          {
            lineHeight: '47',
            fontWeight: '600'
          }
        ],

        'heading2-medium': [
          '40px',
          {
            lineHeight: '47',
            fontWeight: '500'
          }
        ],

        'heading3-semibold': [
          '28px',
          {
            lineHeight: '1',
            fontWeight: '600'
          }
        ],

        'heading3-medium': [
          '28px',
          {
            lineHeight: '1',
            fontWeight: '500'
          }
        ],

        'heading4-semibold': [
          '20px',
          {
            lineHeight: '1',
            fontWeight: '600'
          }
        ],

        'heading4-medium': [
          '20px',
          {
            lineHeight: '1',
            fontWeight: '500'
          }
        ],

        'buttons-text': [
          '16px',
          {
            lineHeight: '1',
            fontWeight: '500'
          }
        ],

        'regular-text': [
          '16px',
          {
            lineHeight: '26',
            fontWeight: '400'
          }
        ],

        'small-text': [
          '14px',
          {
            lineHeight: '22',
            fontWeight: '400'
          }
        ],

      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}