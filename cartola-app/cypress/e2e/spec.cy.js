describe('testar funcionalidades basicas do cartola', () => {
  
  it('acessar a pagina de jogadores do flamengo', () => {
    cy.visit('http://localhost:5173/')
    cy.get(':nth-child(1) > a > .times-card-container').click()
    cy.url().should('include', '/time/262')
    cy.url().should('eq', 'http://localhost:5173/time/262') 
  })

  it('acessar a pagina de jogadores do botafogo e depois voltar para a home pelo logo do cartola', () => {
    cy.visit('http://localhost:5173/')
    cy.get(':nth-child(2) > a > .times-card-container').click()
    cy.url().should('include', '/time/263')
    cy.url().should('eq', 'http://localhost:5173/time/263') 
    cy.get('.cartola-logo').click()
    cy.url().should('include', '/')
    cy.url().should('eq', 'http://localhost:5173/') 
  })

  it('acessar a pagina de jogadores da portuguesa para verificar se a mensagem de erro esta sendo exibida', () => {
    cy.visit('http://localhost:5173/')
    cy.get(':nth-child(10) > a > .times-card-container').click()
    cy.url().should('include', '/time/278')
    cy.url().should('eq', 'http://localhost:5173/time/278') 
    cy.get('h2').contains("Esse time não possui atletas cadastrados")
  })
})