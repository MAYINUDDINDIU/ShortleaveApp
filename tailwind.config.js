module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#22c55e",
          "secondary": "#3b82f6",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#ff5252",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}