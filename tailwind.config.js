module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        computertheme: {
          primary: "#f9f3e5",
          secondary: "#a86446",
          accent: "#83b8a1",
          neutral: "#5c8271",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
