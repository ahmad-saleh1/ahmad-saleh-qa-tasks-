/// <reference types= "cypress" />
describe("task5",()=>{
 it("TC1 check ",()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
    cy.get("#firstname").should("be.visible")
    cy.get("#lastname").should("be.visible")
    cy.get("#email_address").should("be.visible")
    cy.get("#password").should("be.visible")
    cy.get("#password-confirmation").should("be.visible")
    cy.get("button[title='Create an Account']").should("be.visible")
 })
 it.only("TC2 create an account",()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
    cy.get("#firstname").type("ahmad")
    cy.get("#lastname").type("saleh")
    cy.get("#email_address").type("ahmad.zzz@gmail.com")
    cy.get("#password").type("Ahmad123456")
    cy.get("#password-confirmation").type("Ahmad123456")
    cy.get("button[title='Create an Account']").click()

 })
})