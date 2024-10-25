describe('Fluxo para compra de curso - Plataforma testando Eveclass', () => {
    let credenciais;

        
        
    before(() => {

        cy.visit('https://testando.eveclass.com/pt/auth/entrar')
        
        // Realizando Login na plataforma
        cy.get('[data-vv-as="Email"]')
            .should('be.visible')
            .click()
            .type('testerqa-137@yopmail.com')

        cy.get('[data-vv-as="Senha"]')
            .should('be.visible')
            .click()
            .type('123456')

        cy.get('.button-default')
            .should('be.visible')
            .click()

        // Pausa para resolução do captcha
        cy.resolveCaptcha()

        cy.get('.button-default')
            .should('be.visible')
            .click()

        // cy.get('.fa-times')
        //     .should('be.visible')
        //     .click()
    })
    
    it('Realização da compra', () => {

        cy.get('.button-default')
            .should('contain.text', ' \n        Procurar cursos\n       ')
            .eq(0)
            .click()
        
        cy.get('[class="content-card-name variant-primary "]')
            .should('be.visible')
            .eq(0)
            .click()
    })



    
})