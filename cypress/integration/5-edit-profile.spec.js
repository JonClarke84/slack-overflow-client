describe("Edit profile", () => {
    it("loads successfully", () => {
        cy.visit('http://localhost:3000')
        cy.get('input[name="email"]').type("homer@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[type="submit"]').click()
        cy.contains("General")
    })

    it("allows a user to edit their profile", () => {
        //clicks edit profile and amends
        cy.get('button[type="button"]').click()
        cy.get('button[name="edit"]').click()
        cy.contains("First Name")
        cy.contains("Last Name")
        cy.contains("Email")
        cy.contains("Password")
        cy.contains("Confirm Password")
        cy.contains("Display Name")
        cy.contains("Icon Url")

        cy.get('input[name="firstName"]').clear().type("Bradley")
        cy.get('input[name="lastName"]').clear().type("Walsh")
        cy.get('input[name="email"]').clear().type("Bradders@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[name="confirmPassword"]').type("password")
        cy.get('input[name="displayName"]').clear().type("The Chase")
        cy.get('input[name="icon"]').clear().type("https://img.huffingtonpost.com/asset/61ddb552210000991b7036bc.jpg?cache=1XUXvePA1G&ops=crop_0_186_3514_2410%2Cscalefit_720_noupscale&format=webp")
        cy.get('input[type="submit"]').click()

        //sends message showing new user info
        cy.get('input[type="text"]').type("You can now call me Bradley Walsh!")
        cy.get("#submit-message").click()
        cy.contains("You can now call me Bradley Walsh!")

        //edits profile back
        cy.get('button[type="button"]').click()
        cy.get('button[name="edit"]').click()
        cy.contains("First Name")
        cy.contains("Last Name")
        cy.contains("Email")
        cy.contains("Password")
        cy.contains("Confirm Password")
        cy.contains("Display Name")
        cy.contains("Icon Url")

        cy.get('input[name="firstName"]').clear().type("Homer")
        cy.get('input[name="lastName"]').clear().type("Simpson")
        cy.get('input[name="email"]').clear().type("homer@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[name="confirmPassword"]').type("password")
        cy.get('input[name="displayName"]').clear().type("Homer")
        cy.get('input[name="icon"]').clear().type("https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&webp=true&resize=750,500")
        cy.get('input[type="submit"]').click()

        //sends new message to confirm changes
        cy.get('input[type="text"]').type("Doh!")
        cy.get("#submit-message").click()
        cy.contains("Doh!")
    })
})