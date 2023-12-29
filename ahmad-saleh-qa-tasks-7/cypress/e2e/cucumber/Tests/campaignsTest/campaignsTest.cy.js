import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to nopCommerce website",()=>{
    cy.visit("https://admin-demo.nopcommerce.com/")
});

Given("The user login",()=>{
 cy.get("#Email").clear().type("admin@yourstore.com")
 cy.get("#Password").clear().type("admin")
 cy.get(".login-button").click()
});
Given("The user click on promotions",()=>{
    cy.wait(500)
    cy.get("#nopSideBarPusher").click()
   cy.wait(1000)
   cy.contains("Promotions").click()

});
When("The user choose the campaigns",()=>{
    cy.contains("Campaigns").click()
});
When("The user click on add new",()=>{
    cy.contains("Add new").click()

    
});

When("the user enter name, Body and subject",()=>{
cy.get("#Name").type("test")
cy.get("#Subject").type("test")
cy.get("#Body").type("test")

});
When("the user click on save button",()=>{
    cy.get("[name=save]").click()
});
Then("The new campaign has been added successfully {string}",(message)=>{
cy.get(".alert ").should("contain",message)
});