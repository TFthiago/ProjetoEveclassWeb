describe('Teste de criação de conta - Plataforma testando Eveclass', () => {
    
    before(() => {

        //Visitar página de cadastro
        cy.visit('/')

        cy.get('#main-action')
            .eq(0)
            .should('have.attr', 'href', '/pt/auth/registrar')
            .click()

        // cy.reload()
        cy.visit('auth/registrar')

    })

    it('Teste cadastro de conta', () => {

        //Verificação do título
        cy.get(' h1')
            .eq(0)
            .should('have.text', 'Criar conta')
        
        //Inserir nome completo
        cy.getActElement('[data-vv-as="Seu nome completo"]', 'Usuario')
        
        //Inserir email
        cy.getActElement('[data-vv-as="Seu email"]', 'testmail5@yopmail.com')

        //Confirmar email
        cy.getActElement('[data-vv-as="Confirme seu email"]', 'testmail5@yopmail.com')
        
        //Botão 'Próximo'
        cy.get('.button-text')
            .should('be.visible')
            .should('have.text', '\n            Próximo\n          ')
            .click()
        
        cy.resolveCaptcha()

        //Botão 'Próximo'
        cy.get('.button-text')
            .should('be.visible')
            .should('have.text', '\n            Próximo\n          ')
            .click()
        
        //Inserir senha
        cy.getActElement('[data-vv-as="Sua senha"]', '12345')

        //Confirmar senha
        cy.getActElement('[data-vv-as="Confirme sua senha"]', '12345')

        //Botão 'Criar conta'
        cy.get('.button-default')
            .should('be.visible')
            .should('have.text', ' \n            Criar Conta\n           ')
            .click()

        //Verificação do título / página de perfil
        cy.get('[class="header"]')
            .should('have.text', '\n      Todos Cursos\n    ')
    })
})