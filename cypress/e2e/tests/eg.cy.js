import egPage from '../../pages/eg'

describe('Verify easy generator practice page', () => {
    before(() => {
        egPage.visit()
    })

    beforeEach(() => {
        cy.viewport('macbook-16')
    })

    it('Verify selection of option 2 from dropdown', () => {
        cy.get('select').select('Option1').should('have.value', 'option1')
    })

    it('Verify upload image', () => {
        egPage.uploadImage('cypress/fixtures/EasyGenerator.png')
    })

    it('Verify alert message functionality', () => {
        egPage.invokeAlert('cypress/fixtures/alert-text.txt')
        egPage.checkAlertMsg(
            'Hello Hello from Easygenerator, share this practice page and share your knowledge'
        )
    })

    it('Verify show/hide input', () => {
        egPage.hideInput()
        egPage.elements.hideShowInputText().should('not.be.visible')
        egPage.showInput()
        egPage.elements.hideShowInputText().should('be.visible')
    })

    it('Verify mousehover', () => {
        egPage.checkMouseHover()
        egPage.elements.mouseHoverContent().then((el) => {
            const text = el.text().replace(/\s+/g, '')
            expect(text).to.eq('TopReload')
        })
    })

    it('Verify opening new tab', () => {
        egPage.openNewTab('#opentab')
    })

    it('Verify iframe and open first tab', () => {
        egPage.verifyIframeAndOpenTab()
    })
})
