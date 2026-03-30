/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#06070b',
        ink: '#10111a',
        haze: '#1d2030',
        ember: '#ff7a1a',
        neon: '#ff3bb8',
        volt: '#d4ff39',
        cobalt: '#30c9ff',
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 80px rgba(0, 0, 0, 0.38)',
        glow: '0 0 50px rgba(255, 59, 184, 0.18)',
        lime: '0 0 45px rgba(212, 255, 57, 0.16)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 7s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
        'gradient-shift': 'gradientShift 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(0.96)' },
          '50%': { opacity: '0.95', transform: 'scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
