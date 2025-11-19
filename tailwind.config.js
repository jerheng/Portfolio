module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'slow-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.45' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
      },
      animation: {
        'slow-pulse': 'slow-pulse 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}