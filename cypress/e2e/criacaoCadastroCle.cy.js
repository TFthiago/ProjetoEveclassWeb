describe('Teste de criação de conta - Plataforma testando Eveclass', () => {
    
    before(() => {
    //Página de cadastro
        cy.visit('/auth/registrar')
    })

    it('Teste cadastro de conta', () => {
        
        //Inserir nome completo
        cy.getActElement('[data-vv-as="Seu nome completo"]', 'Usuario674')
        
        //Inserir email
        cy.getActElement('[data-vv-as="Seu email"]', 'testerqa62@yopmail.com')

        //Confirmar email
        cy.getActElement('[data-vv-as="Confirme seu email"]', 'testerqa62@yopmail.com')
        
        //Botão 'Próximo'
        cy.get('.button-text')
            .should('be.visible')
            .should('have.text', '\n            Próximo\n          ')
            .click()

        //Inserir senha
        cy.getActElement('[data-vv-as="Sua senha"]', '123456789')

        //Confirmar senha
        cy.getActElement('[data-vv-as="Confirme sua senha"]', '123456789')

        //Botão 'Criar conta'
        cy.get('.button-default')
            .should('be.visible')
            .should('have.text', ' \n            Criar Conta\n           ')
            .click()
    })
})