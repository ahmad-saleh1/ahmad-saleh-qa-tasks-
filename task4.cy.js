/// <reference types="cypress" />



describe("task4",()=>{

    it("TC",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("#search").type("shirt{enter}")
        cy.get(".product-items").children().first().click()
        cy.get(".swatch-attribute-options").first().children().eq(2).click()
        cy.get(".swatch-attribute-options").last().children().last().click()
        cy.get("#qty").clear().type(3)
        cy.get("[title='Add to Cart']").click()
    })
})