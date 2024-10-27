describe('Fluxo para compra de curso - Plataforma testando Eveclass', () => {

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

    })
    
    it('Realização da compra', () => {

        //Página de perfil (Meus cursos)//

        //Botão 'Procurar cursos' 
        cy.get('.button-default')
            .should('contain.text', ' \n        Procurar cursos\n       ')
            .eq(0)
            .click()
        

    //Página catálogo de cursos//

        //Verificação do título
        cy.get('h1.course-list-nav')
            .should('contain.text', 'Todos cursos')

        //Primeiro link / banner da página
        cy.get('[class="content-card-name variant-primary "]')
            .should('be.visible')
            .eq(0)
            .click()


    //Página do curso//
        
        //Validação de preço
        cy.get('.content-price')
            .eq(0)
            .contains(/^R\$ 0,00$/)
                            
        //Botão comprar
        cy.get('.content-action')
            .should('be.visible')
            .eq(0)
            .click()


        //Prenchimento do formulário//

        //Inserir CPF
        cy.getActElement('[data-vv-as="CPF"]', '96680716039' )

        //Inserir telefone
        cy.getActElement('[data-vv-as="Telefone"]', '55555555555' )

        //Inserir CEP
        cy.getActElement('[data-vv-as="CEP"]', '07111050' )

        //Inserir complemento / número
        cy.get('[data-vv-as="Número"]')
            .should('be.visible')
            .click()
            .clear()
            .type('13')

        //Confirmar compra
        cy.get('.button-text')
            .contains(/^Confirmar Compra$/)
            .click()
    })
})