describe("Messages", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('input[name="email"]').type("homer@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[type="submit"]').click()
        cy.contains("General")
    })

    it("allows a user to send messages", () => {

        //sends a message to default room
        cy.get('input[type="text"]').type("Hi general room")
        cy.get("#submit-message").click()
        cy.contains("Hi general room")

        //change rooms 
        cy.get('[class*="sidebar-icon group"]')
        .first()
        .should('have.text', 'General')
        .next()
        .next()
        .should('have.text', 'Ruby')
        .click()
        cy.contains("Ruby")

        cy.get('input[type="text"]').type("Hi Ruby room")
        cy.get("#submit-message").click()
        cy.contains("Hi Ruby room")
    })

})