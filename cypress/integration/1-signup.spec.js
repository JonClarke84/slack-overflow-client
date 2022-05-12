describe("Sign-up", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    //a user can sign up and redirected to feed 
    it("allows a user to sign up", () => {
        cy.get('#signup-btn').click()
        cy.get('input[name="firstName"]').type("Homer")
        cy.get('input[name="lastName"]').type("Simpson")
        cy.get('input[name="email"]').type("homer@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[name="confirmPassword"]').type("password")
        cy.get('input[name="displayName"]').type("Homer")
        cy.get('input[name="icon"]').type("https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&webp=true&resize=750,500")
        cy.get('input[type="submit"]').click()
    })
})