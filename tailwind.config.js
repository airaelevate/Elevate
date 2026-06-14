/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        gold: 'var(--gold)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        destructive: 'var(--destructive)',
        'primary-foreground': '#080706',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.215, 0.610, 0.355, 1) infinite',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: 0.5 },
          '80%, 100%': { transform: 'scale(2.2)', opacity: 0 },
        },
        'fade-in': {
          'from': { opacity: 0, transform: 'translateY(10px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
