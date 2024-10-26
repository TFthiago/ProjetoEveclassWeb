describe('Fluxo para criação de curso - Plataforma Eveclass', () => {
    
    before(() => {
        //Login com memória de Cookie
        cy.setCookie('ev_at_62bf145fd8ff1ef247cd4eda', 'e02788f0-93d1-11ef-a3b4-1595982be9f6437c1fb7-94b9-4c49-a515-bffca139ee41')
    
        //Visitar página de admin
        cy.visit('/admin/conteudo')
    })

    it('Teste de criação de curso', () => {
        
    //Página do admin    
        cy.get('h1.overview-group-title_primary')
            .should('have.text', 'Visão Geral')

        cy.get('[class="widget widget COURSES "]')
            .should('have.attr', 'href', '/pt/admin/conteudo/cursos')
            .click()
        
    //Início do fluxo de criação
        cy.get('[class="fas fa-plus"]')
            .should('be.visible')
            .click()

        //Estrutura em módulos
        cy.get('[class="far fa-cube"]')
            .should('be.visible')
            .click()

        //Botão 'Prosseguir'
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()

        //Cronograma flexível
        cy.get('[class="far fa-user-clock"]')
            .should('be.visible')
            .click()

        cy.get('[type="submit"]')
            .should('be.visible')
            .click()

        // cy.get('[class="form-group-header"]')
        //     .should('be.visible')
        //     .eq(0)
        //     .click()

        //Inserir nome do curso
        cy.get('[placeholder="Insira o nome"]')
            .should('be.visible')
            .click({force: true})
            .type('Curso teste')

        //Inserir autor do curso
        // cy.get('[class="vs__selected-options"]')
        //     .should('be.visible')
        //     .eq(0)
        //     .click({force: true})
        //     .type({force: true},'Thiago Freitas de Andrade Silva')

        cy.scrollTo('bottom')

        //Selecionar módulo
        cy.get('[class="fas fa-hand-point-up"]')
            .click()
        cy.get('[class="list-item list-item-link"]')
            .eq(0)
            .click()
        
        //'Salvar' / Concluir
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()

    })
})