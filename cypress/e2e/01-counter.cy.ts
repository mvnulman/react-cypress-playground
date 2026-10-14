describe('Contador', () => {
  it('incrementa ao clicar no botão', () => {
    cy.visit('/')

    cy.contains('output', '0')          
    cy.contains('button', '+').click() 
    cy.contains('output', '1')         
  })

  it('decrementa ao clicar no botão', () => {
    cy.visit('/')

    cy.contains('output', '0')         
    cy.contains('button', '−').click()  
    cy.contains('output', '-1')         
  })

    it('reseta ao clicar no botão', () => {
    cy.visit('/')

    cy.contains('output', '0')          
    cy.contains('button', '+').click() 
    cy.contains('output', '1')         
    cy.contains('button', 'Reset').click() 
    cy.contains('output', '0')       
  })
})

