describe("Login", () => {
    it("loads successfully", () => {
        cy.visit('http://localhost:3000')
    })

    it("allows a user to log in and is redirected to feed", () => {

        cy.get('input[name="email"]').type("homer@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[type="submit"]').click()
        cy.contains("General")
    })
})