/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
    },
    extend: {
      colors: {
        primary: {
          first_color: "hsl(219, 69%, 56%)",
          first_color_alt: "hsl(219, 69%, 52%)",
          title_color: "hsl(219, 8%, 95%)",
          text_color:" hsl(219, 8%, 75%)",
          text_color_light: "hsl(219, 4%, 55%)",
          white_color: "#fff",
          body_color: "hsl(219, 4%, 4%)",
          container_color: "hsl(219, 4%, 7%)",
        },
}

    },
  },
  plugins: [],
}

