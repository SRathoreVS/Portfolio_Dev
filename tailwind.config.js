/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          950: '#07080f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(139,92,246,0.3)',
        'glow-sm': '0 0 20px rgba(139,92,246,0.2)',
        'glow-pink': '0 0 40px rgba(236,72,153,0.3)',
      },
      backgroundImage: {
        'grad-violet': 'linear-gradient(135deg, #7c3aed, #a855f7)',
        'grad-hero': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.25) 0%, transparent 70%)',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};