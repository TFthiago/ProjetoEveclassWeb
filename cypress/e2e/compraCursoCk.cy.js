describe('Fluxo para compra de curso - Plataforma testando Eveclass', () => {
    let credenciais;

        
        
    before(() => {

        //Login com memória de Cookie
        cy.setCookie('ev_at_62bf145fd8ff1ef247cd4eda', '13cdf900-9305-11ef-a3b4-1595982be9f6a7554584-5b05-42d8-95e4-55fe3af64018')

        //Visitar página de perfil
        cy.visit('/conta/meus-cursos')
        

    })
    
    it('Realização da compra', () => {

        //Página de perfil (Meus cursos)//
        cy.get('.button-default')
            .should('contain.text', ' \n        Procurar cursos\n       ')
            .eq(0)
            .click()
        
        //Página catálogo de cursos//

        cy.get('h1.course-list-nav')
            .should('contain.text', 'Todos cursos')

        cy.get('[class="content-card-name variant-primary "]')
            .should('be.visible')
            .eq(0)
            .click()


        //Página do curso//
        
        //Validação de preço
        cy.get('.content-price')
            .eq(0)
            .contains(/^R\$ 0,00$/)
                               
        cy.get('.content-action')
            .should('be.visible')
            .eq(0)
            .click()

        //Prenchimento do formulário
        cy.get('[data-vv-as="CPF"]')
            .should('be.visible')
            .click()
            .type('96680716039')
        
        cy.get('[data-vv-as="Telefone"]')
            .should('be.visible')
            .click()
            .type('55555555555')
        
        cy.get('[data-vv-as="CEP"]')
            .should('be.visible')
            .click()
            .type('07111050')

        cy.get('[data-vv-as="Número"]')
            .should('be.visible')
            .click()
            .type('13')

        cy.get('.button-text')
            .contains(/^Confirmar Compra$/)
            .click()

        //Resolver captcha de segurança
        cy.resolveCaptcha()
            
    })



    
})