describe("Messages", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('input[name="email"]').type("homer@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[type="submit"]').click()
        cy.contains("General")
    })

    it("allows a user to send messages", () => {
        cy.get('input[type="text"]').type("Testing!")
        cy.get("#submit-message").click()
        cy.contains("Testing!")
    })

    it("allows a user to delete a message", () => {
        cy.get('button[name="delete-button"]').click()
        cy.contains("Testing!").should('not.exist')
    })

    it("allows a user to edit a message", () => {
        cy.get('input[type="text"]').type("Testing the edit button!")
        cy.get("#submit-message").click()
        cy.contains("Testing the edit button!")

        cy.get('button[name="edit-button"]').click()
        cy.contains("Testing the edit button!")
        cy.get('textarea').clear().type("Edit messages works!")
        cy.get('button[name="edit-button"]').click()
        cy.contains("Edit messages works!")
    })

    it("allows a user to react, change and unreact to a message", () => {
        cy.get('[class*="chat-reaction-icon"]')
        cy.get('button[name="heart"]').click({ force: true })

        cy.get('[class*="chat-reaction-icon"]')
        cy.get('button[name="laugh"]').click({ force: true })

        cy.get('[class*="chat-reaction-icon"]')
        cy.get('button[name="laugh"]').click({ force: true })
    })

    it("allows a user to send an image with a message", () => {
        cy.get('input[type="text"]').type("Image of a dog")
        //being changed by styling 
        
        // cy.get('[class*="App"]')
        // cy.get('button[name="image"]').click({ force: true })

        // cy.get("#submit-message").click()
    })
})