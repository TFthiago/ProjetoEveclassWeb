describe('Fluxo para compra de curso - Plataforma testando Eveclass', () => {
    let credenciais;

        
        
    before(() => {

        cy.setCookie('ev_at_62bf145fd8ff1ef247cd4eda', '13cdf900-9305-11ef-a3b4-1595982be9f6a7554584-5b05-42d8-95e4-55fe3af64018', {
        })
        // domain: '.testando.eveclass.com',
        //     path: '/'
        cy.visit('/conta/meus-cursos')
        

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