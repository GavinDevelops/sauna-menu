/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0D0D0D',
        'bg-card': '#1A1A1A',
        'bg-elevated': '#242424',
        'sunset-yellow': '#FFD93D',
        'sunset-orange': '#FF914D',
        'sunset-red': '#C23A22',
        'neon-pink': '#FF2D95',
        'neon-magenta': '#D946EF',
        'neon-orange': '#FF6B35',
      },
      fontFamily: {
        'heading': ['Bebas Neue', 'sans-serif'],
        'body': ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF2D95, 0 0 10px #FF2D95' },
          '100%': { boxShadow: '0 0 10px #FF2D95, 0 0 20px #FF2D95, 0 0 30px #FF2D95' },
        },
      },
    },
  },
  plugins: [],
}
