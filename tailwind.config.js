/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'onboarding': {
          'background': '#151825',
          'background-secondary': '#343A4E',
          'title': '#FAFCFD',
          'subtitle': '#C6C9D2',
          'button-bg': '#0366FF',
          'button-text': '#FAFCFD',
          'icon': '#FAFCFD',
          'border': '#5E6266',
          'card': '#27283E',
        }
      },
      boxShadow: {
        'soft': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
