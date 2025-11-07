/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#E6E6FA',
        violet: '#8A2BE2',
        deepPurple: '#4B0082',
        night: '#1a0828',
      },
      backgroundImage: {
        'love-gradient': 'radial-gradient(circle at 30% 30%, rgba(230,230,250,0.35), transparent 60%), radial-gradient(circle at 70% 60%, rgba(138,43,226,0.25), transparent 65%), linear-gradient(135deg,#1a0828,#240c40,#4B0082,#2e0e50)',
      },
      fontFamily: {
        serif: ['Crimson Pro', 'Georgia', 'serif'],
        elegant: ['Italiana', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 0 12px -2px rgba(230,230,250,0.7), 0 0 30px -4px rgba(138,43,226,0.6)',
        'glow-soft': '0 0 16px -4px rgba(138,43,226,0.5)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        drift: 'drift 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(-6px)' },
          '50%': { transform: 'translateY(6px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.85', filter: 'blur(0px)' },
          '50%': { opacity: '1', filter: 'blur(2px)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(200px, -120px, 0)' },
        },
      },
    },
  },
  plugins: [],
};
