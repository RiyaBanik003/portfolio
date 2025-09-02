import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            gray: {
              200: "#D5DAE1",
            },
            black: {
              DEFAULT: "#000",
              500: "#1D2235",
            },
            blue: {
              500: "#2b77e7",
            },
          },
          fontFamily: {
            worksans: ["Work Sans", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
          },
          boxShadow: {
            card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
          },
        },
      },
    }),
  ],
  assetsInclude: ["**/*.glb"],
});
