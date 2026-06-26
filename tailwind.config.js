/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#0F4C81',
        navy: '#0B2545',
        sand: '#F4E1B9',
        gold: '#D4AF37',
        crimson: '#B22222',
        paper: '#FDFDFD',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        parchment:
          "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(178,34,34,0.06), transparent 45%)",
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-3%) translateY(2%)' },
        },
        drift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        wave: 'wave 6s ease-in-out infinite',
        drift: 'drift 40s linear infinite',
        bob: 'bob 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
