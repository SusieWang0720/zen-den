/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e9ede3',
          200: '#d5dcc8',
          300: '#b8c5a4',
          400: '#9cad7e',
          500: '#829461',
          600: '#66764b',
          700: '#515e3e',
          800: '#424d34',
          900: '#39422e',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 