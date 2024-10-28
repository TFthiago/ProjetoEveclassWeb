describe('Fluxo para criação de curso - Plataforma Eveclass', () => {

    const massa = require('../fixtures/massaCriarCurso')
    
    beforeEach(() => {
        //Login com memória de Cookie
        cy.setCookie('ev_at_62bf145fd8ff1ef247cd4eda', '351dcaa0-954d-11ef-8b66-0fc68e3c04452de058f1-c3b0-4579-b708-c52dc544b16a')
    
        //Visitar página de admin
        cy.visit('/admin/conteudo')
    })

    massa.array.forEach(({ nomeCurso, resumoCurso, descricaoCurso}) => {

        it(`Teste criação do curso - ${nomeCurso}`, () => {

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
                .type(nomeCurso)


            //Inserir resumo
            //Não obrigatório no fluxo principal
            cy.get('[data-vv-as="Resumo"]')
                .should('be.visible')
                .click()
                .type(resumoCurso)
            
            //Inserir descrição
            //Não obrigatório
            cy.get('[data-placeholder="Insira a descrição aqui…"]')
                .as('desc')
                .click({force: true})
            cy.get('@desc')
                .type(descricaoCurso)

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
})