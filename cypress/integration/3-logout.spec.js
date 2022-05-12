describe("Logout", () => {
    it("loads successfully", () => {
        cy.visit('http://localhost:3000')
    })

    it("allows a user to log out", () => {

        cy.get('input[name="email"]').type("homer@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[type="submit"]').click()
        cy.contains("General")

        cy.get('button[type="button"]').click()
        cy.get('button[name="logout"]').click()
        cy.contains("Don't have an account?")
    })
})