describe('Fluxo para compra de curso - Plataforma testando Eveclass', () => {
       
    before(() => {
        //Login com Cookie
        cy.setCookie('ev_at_62bf145fd8ff1ef247cd4eda', 'a0ecd970-9461-11ef-8c2a-e1b8a98d0262d7597506-1611-409b-a6e6-da0c1efa711e')

        //Visitar página de perfil
        cy.visit('/conta/meus-cursos')
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