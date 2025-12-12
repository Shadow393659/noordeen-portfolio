import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
=======
  base: process.env.NODE_ENV === 'production' ? '/noordeen-portfolio/' : '/',
>>>>>>> cfbe04b6f9696dab8f69ed951e02dfff43b403d5
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // <-- crucial
    },
  },
  base: "./", // important for GitHub Pages
});
