/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#03281E',
          900: '#064E3B', // Deep Emerald
          800: '#065F46',
          700: '#047857', // Forest Green
          600: '#059669',
          500: '#10B981',
          100: '#D1FAE5',
          50: '#ECFDF5',
        },
        amber: {
          700: '#B45309',
          600: '#D97706', // Warm Amber
          500: '#F59E0B', // Soft Gold
          400: '#FBBF24',
          100: '#FEF3C7',
          50: '#FFFBEB',
        },
        ivory: {
          DEFAULT: '#FAF8F0',
          50: '#FDFCF7',
          100: '#FAF8F0',
          200: '#F3EEDB',
          300: '#EAE1C5',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E8F0E9', // Light Sage
          200: '#D3E2D5',
          300: '#BCCFBEC',
        },
        charcoal: {
          950: '#131A15',
          900: '#202923', // Dark Charcoal
          800: '#2D3931',
          700: '#3E4D43',
          600: '#526458',
        },
        schoolBlue: {
          900: '#112D6E',
          800: '#183B88',
          700: '#1E4DB7',
          600: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(6, 78, 59, 0.06)',
        'elevated': '0 12px 32px -4px rgba(6, 78, 59, 0.12)',
        'premium': '0 20px 40px -10px rgba(6, 78, 59, 0.18)',
        'gold-glow': '0 0 25px rgba(245, 158, 11, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
