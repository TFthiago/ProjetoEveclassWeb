describe('Fluxo para compra de curso - Plataforma testando Eveclass', () => {
    let credenciais;

    before(() => {
        cy.visit("https://testando.eveclass.com/pt/auth/entrar");
        cy.fixture("credenciais").then((cred) => {
            credenciais = cred
        });

        cy.get(".input-wrapper-inpt")
            .eq(0)
            .should('be.visible')
            .click()
            .type('testerqa-165@yopmail.com')

        cy.get(".input-wrapper-inpt")
            .eq(1)
            .should('be.visible')
            .click()
            .type('1234567')

        cy.get('.button-default')
            .should('be.visible')
            .click()

        // cy.wait()
    })
    
    it('', () => {

    })



    
})