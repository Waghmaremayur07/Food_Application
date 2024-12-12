/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5A1F',
        secondary: '#1F2937',
        background: '#FFFFFF',
        accent: '#F3F4F6',
        'accent-foreground': '#111827',
        'secondary-foreground': '#F9FAFB',
        input: '#E5E7EB',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
};