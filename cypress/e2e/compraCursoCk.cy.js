describe('Fluxo para compra de curso - Plataforma testando Eveclass', () => {
       
    before(() => {
        //Login com Cookie
        cy.setCookie('ev_at_62bf145fd8ff1ef247cd4eda', '63287080-9494-11ef-8c2a-e1b8a98d02626a5ca044-4c0c-436d-9e6d-4931be443f45')

        //Visitar página de perfil
        cy.visit('/conta/meus-cursos')
    })
    
    it('Teste de compra do curso "Progr@mação JavaScript - Básico" ', () => {

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

        //Link do curso
        cy.get('[class="content-card-name variant-primary "]')
            .should('be.visible')
            .eq(0)
            .should('have.text', 'Progr@mação JavaScript - ...')
            .click()


    //Página do curso//
        
        //Validação de preço
        cy.get('.content-price')
            .eq(0)
            .contains(/^R\$ 0,00$/)

        //Validação do nome
        cy.get(' h1')
            .eq(0)
            .should('have.text', 'Progr@mação JavaScript - Básicojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjllllllllllllllllllllllllllllllllrrrrrrrrrrrrrrriiiiiiiiiiiiiiiiiiiiiiiiiiiuuuuuuuuuuuuuuuuuuuuuuuhhhhhhg ')
                            
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