describe('Teste de criação de conta - Plataforma testando Eveclass', () => {
    
    before(() => {
    //Página de cadastro
        cy.visit('/auth/registrar')
    })

    it('Teste cadastro de conta', () => {
        
        //Inserir nome completo
        cy.get('[data-vv-as="Seu nome completo"]')
            .should('be.visible')
            .click()
            .type('Usuario442')

        //Inserir email
        cy.get('[data-vv-as="Seu email"]')
            .should('be.visible')
            .click()
            .type('testerqa6@yopmail.com')

        //Confirmar email
        cy.get('[data-vv-as="Confirme seu email"]')
            .should('be.visible')
            .click()
            .type('testerqa6@yopmail.com')
        
        //Botão 'Próximo'
        cy.get('.button-text')
            .should('be.visible')
            .should('have.text', '\n            Próximo\n          ')
            // .contains(/^Próximo$/)
            .click()

        // cy.resolveCaptcha()

        //Inserir senha
        cy.get('[data-vv-as="Sua senha"]')
            .should('be.visible')
            .click()
            .type('123456789')

        //Confirmar senha
        cy.get('[data-vv-as="Confirme sua senha"]')
            .should('be.visible')
            .click()
            .type('123456789')

        //Botão 'Criar conta'
        cy.get('.button-default')
            .should('be.visible')
            .should('have.text', ' \n            Criar Conta\n           ')
            .click()
    })
})