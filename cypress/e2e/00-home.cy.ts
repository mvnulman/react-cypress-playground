describe('Página inicial', () => {
  it('abre a aplicação', () => {
    cy.visit('/')

    cy.contains('h1', 'Playground de testes').should('be.visible')
  })
})
