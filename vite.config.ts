import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Porta fixa para não divergir da `baseUrl` do Cypress.
    // Com `strictPort`, o Vite falha (em vez de trocar de porta)
    // se a 5173 já estiver em uso.
    port: 5173,
    strictPort: true,
  },
})
