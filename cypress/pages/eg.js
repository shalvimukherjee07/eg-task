import 'cypress-iframe'

class egPage {
    elements = {
        nameInput: () => cy.get('#name'),
        mouseHoverBtn: () => cy.get('.hover-container'),
        hideBtn: () => cy.get('#hide-textbox'),
        showBtn: () => cy.get('#show-textbox'),
        hideShowInputText: () => cy.get('#displayed-text'),
        alertBtn: () => cy.get('#alertbtn'),
        alertText: () => 'Hello from Easygenerator',
        imageInput: () => cy.get('input[type=file]'),
        mouseHoverContent: () => cy.get('.hover-content'),
    }

    visit() {
        cy.visit(Cypress.env('baseUrl'))
    }

    uploadImage(filePath) {
        this.elements.imageInput().selectFile(filePath)
    }

    openNewTab(el) {
        cy.get(el).invoke('removeAttr', 'target').click()
    }

    invokeAlert(fileName) {
        cy.task('readFileMaybe', fileName).then((textOrNull) => {
            expect(textOrNull).to.contains(this.elements.alertText())
            this.elements.nameInput().type(textOrNull)
        })
    }

    checkAlertMsg(alertMsg) {
        this.elements.alertBtn().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(alertMsg)
        })
    }

    hideInput() {
        this.elements.hideBtn().click()
    }

    showInput() {
        this.elements.showBtn().click()
    }

    checkMouseHover() {
        this.elements.mouseHoverBtn().trigger('mouseover')
    }

    verifyIframeAndOpenTab() {
        cy.get('#courses-iframe')
            .scrollIntoView()
            .then(function ($iframe) {
                let iframeBody = $iframe.contents().find('body')
                cy.wrap(iframeBody)
                    .find('#menu-item-137250')
                    .should('have.text', 'Why Easygenerator')
                    .click()
            })
        cy.wait(4000)

        cy.get('#courses-iframe').then(function ($iframe) {
            let iframeBody = $iframe.contents().find('body')
            cy.wrap(iframeBody)
                .find('.pitch-page-header-title')
                .should(($h1) => {
                    expect($h1).to.contain('Why Easygenerator?')
                })
        })
    }
}
module.exports = new egPage()
