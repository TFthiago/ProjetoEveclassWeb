describe('Fluxo para criação de curso - Plataforma Eveclass', () => {
    
    before(() => {
        //Login com memória de Cookie
        cy.setCookie('ev_at_62bf145fd8ff1ef247cd4eda', '239589c0-9472-11ef-8c2a-e1b8a98d0262971f7d2d-5881-4994-82e0-bd1afa5df1d8')
    
        //Visitar página de admin
        cy.visit('/admin/conteudo')
    })

    it('Teste de criação de curso', () => {
        
    //Página do admin// 
        cy.get('h1.overview-group-title_primary')
            .should('have.text', 'Visão Geral')

        //Selecionnar seção 'Cursos'
        cy.get('[class="widget widget COURSES "]')
            .should('have.attr', 'href', '/pt/admin/conteudo/cursos')
            .click()
        
    //Início do fluxo de criação//

        //Primeira verificação / seção  'cursos'
        cy.get('.list-header-title')
            .eq(0)
            .should('have.text', '\n      Cursos\n      ')

        //Botão 'Novo curso'
        cy.get('.button-default')
            .eq(0)
            .should('be.visible')
            .should('have.text', ' Novo Curso\n     ')
            .click()

        //Estrutura em módulos
        cy.getActElement2('[class="far fa-cube"]')

        //Botão 'Prosseguir'
        cy.getActElement2('[type="submit"]')

        //Cronograma flexível
        cy.getActElement2('[class="far fa-user-clock"]')

        //Botão 'Prosseguir'
        cy.getActElement2('[type="submit"]')

        //Inserir nome do curso
        cy.get('[placeholder="Insira o nome"]')
            .should('be.visible')
            .click({force: true})
            .type('Curso teste')


        //Inserir resumo
        //Não obrigatório no fluxo principal
        cy.get('[data-vv-as="Resumo"]')
            .should('be.visible')
            .click()
            .type('Resumo')
           
        //Inserir descrição
        //Não obrigatório
        cy.get('[data-placeholder="Insira a descrição aqui…"]')
            .as('desc')
            .click({force: true})
        cy.get('@desc')
            .type('Descrição')

        //Selecionar módulo
        cy.get('[class="fas fa-hand-point-up"]')
            .click()
        cy.get('[class="list-item list-item-link"]')
            .eq(0)
            .click()
        
        //Botão 'Salvar' / Concluir
        cy.getActElement2('[type="submit"]')

        //Segunda verificação / retorno para a seção 'cursos'
        cy.get('.list-header-title')
            .eq(0)
            .should('have.text', '\n      Cursos\n      ')
    })
})