module.exports = {
  // ...existing config...
  theme: {
    extend: {
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
        },
      },
      animation: {
        vibrate: 'vibrate 0.3s linear',
      },
    },
  },
  // ...rest of config...
};