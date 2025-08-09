/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        bounceDelay1: 'bounceUpDown 1s ease-in-out infinite',
        bounceDelay2: 'bounceUpDown 1s ease-in-out infinite 0.2s',
        bounceDelay3: 'bounceUpDown 1s ease-in-out infinite 0.4s',
        bounceDelayName: 'bounceUpDown 1s ease-in-out infinite 20s',
      },
    },
  },
  plugins: [],
}

