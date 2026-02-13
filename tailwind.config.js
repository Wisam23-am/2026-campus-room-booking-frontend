/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#217ff2',
        'primary-dark': '#1a6bd1',
        'primary-hover': '#1a6bd1',
        danger: '#ef4444',
        'danger-hover': '#dc2626',
        success: '#22c55e',
        'background-light': '#f5f7f8',
        'background-dark': '#101822',
        'surface-light': '#ffffff',
        'surface-dark': '#1a2432',
        'border-light': '#e2e8f0',
        'border-dark': '#334155',
        'neutral-light': '#dae6f5',
        'neutral-dark': '#1e2e42',
        'neutral-100': '#eef4fb',
        'neutral-200': '#dae6f5',
        'neutral-300': '#b6cfe9',
        'neutral-600': '#4a6b8c',
        'neutral-800': '#1e2e42',
      },
      fontFamily: {
        display: ['Public Sans', 'sans-serif'],
        lexend: ['Lexend', 'Public Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
