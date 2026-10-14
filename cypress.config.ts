import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // URL base da aplicação. Assim os testes usam cy.visit('/')
    // em vez de repetir o endereço completo em cada arquivo.
    baseUrl: 'http://localhost:5173',
  },
})
