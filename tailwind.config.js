/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF7F0',
          100: '#F5F2ED',
          200: '#E8E0D4',
          300: '#D4C4B0',
          400: '#B8A082',
          500: '#8B6F47',
          600: '#6B4423',
          700: '#543219',
          800: '#3D2415',
          900: '#2A1810'
        },
        forest: {
          50: '#F0F7F4',
          100: '#DCEFE3',
          200: '#B4DBC4',
          300: '#8BC7A5',
          400: '#62B386',
          500: '#4A7C59',
          600: '#3A6247',
          700: '#2E4F39',
          800: '#213C2B',
          900: '#15291D'
        },
        burlap: {
          50: '#F9F6F2',
          100: '#F3EDE5',
          200: '#E5D4BF',
          300: '#D4BB99',
          400: '#C3A273',
          500: '#8B6F47',
          600: '#6F5938',
          700: '#53432B',
          800: '#3D311F',
          900: '#271F14'
        },
        cream: {
          50: '#FAFAF8',
          100: '#F5F2ED',
          200: '#EBE5D9',
          300: '#E0D8C5',
          400: '#D6CBB1',
          500: '#CCBE9D',
          600: '#A39E7E',
          700: '#7A7D5F',
          800: '#515C40',
          900: '#283B21'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['DM Serif Display', 'serif']
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(107, 68, 35, 0.08)',
        'medium': '0 4px 16px rgba(107, 68, 35, 0.12)',
        'strong': '0 8px 32px rgba(107, 68, 35, 0.16)'
      }
    },
  },
  plugins: [],
}