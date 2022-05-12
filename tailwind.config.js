module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 7s infinite linear'
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(10deg)",
          },
          "75%": {
            transform: "rotate(-10deg)",
          }
          },
        },
      },
    },
  
  plugins: [
  ],
}
