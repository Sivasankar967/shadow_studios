/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#D4FF00',
          hover: '#c0ea00',
          neon: '#E6FF47',
          glow: 'rgba(212, 255, 0, 0.35)',
        },
        cyber: {
          cyan: '#00F0FF',
          purple: '#9D4EDD',
          emerald: '#10F38B',
          dark: '#07080A',
          surface: '#0E1017',
          card: '#131620',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      boxShadow: {
        'lime-glow': '0 0 35px -5px rgba(212, 255, 0, 0.3)',
        'cyan-glow': '0 0 35px -5px rgba(0, 240, 255, 0.3)',
        'purple-glow': '0 0 35px -5px rgba(157, 78, 221, 0.3)',
      }
    },
  },
  plugins: [],
};
