import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Foi utilizada IA como apoio para resolver a restrição de CORS da API da FreeToGame.
// O navegador bloqueia chamadas diretas a domínios que não autorizam CORS explicitamente.
// Esse proxy do Vite contorna isso redirecionando as chamadas por um servidor local:
// quem conversa com a FreeToGame passa a ser o servidor de desenvolvido abaixo e não o navegador,
// então a restrição de CORS não se aplica.

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.freetogame.com/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});