/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f6',
          100: '#d0ece2',
          200: '#a7dcc7',
          300: '#72c4a5',
          400: '#46ac8a',
          500: '#1F8A70', // Primary color
          600: '#197659',
          700: '#145f47',
          800: '#0f4a36',
          900: '#0a3021',
        },
        secondary: {
          50: '#fefce8',
          100: '#fff9c2',
          200: '#ffed86',
          300: '#ffdf4d',
          400: '#FFD700', // Gold accent
          500: '#efc000',
          600: '#ca9a00',
          700: '#a67e00',
          800: '#806000',
          900: '#664c00',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Amiri', 'system-ui', 'sans-serif'],
        heading: ['Scheherazade New', 'serif'],
      },
      backgroundImage: {
        'pattern-light': "url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        'pattern-dark': "url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};