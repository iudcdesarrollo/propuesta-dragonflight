/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFDF7',
          100: '#FEF9E7',
          200: '#F5E6C8',
          300: '#E8D5A3',
          400: '#D4AF37',
          500: '#B8960B',
          600: '#9A7B0A',
          700: '#7C6208',
          800: '#5E4906',
          900: '#3F3004',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FEFEFE',
          200: '#FAF9F7',
          300: '#F5F4F0',
          400: '#EBE9E4',
          500: '#E0DED8',
          600: '#C8C5BC',
          700: '#9E9B92',
          800: '#6B6862',
          900: '#3D3B37',
        },
        charcoal: {
          50: '#F7F7F6',
          100: '#E8E8E6',
          200: '#D4D3D0',
          300: '#A8A6A2',
          400: '#78766F',
          500: '#4A4844',
          600: '#2D2B28',
          700: '#1F1E1C',
          800: '#141312',
          900: '#0A0908',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E8D5A3 50%, #D4AF37 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FEFEFE 0%, #F5F4F0 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 8px 40px rgba(212, 175, 55, 0.2)',
        'elegant': '0 4px 30px rgba(0, 0, 0, 0.08)',
        'elegant-lg': '0 10px 50px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
