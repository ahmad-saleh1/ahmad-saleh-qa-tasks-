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
When("The user choose the affiliates",()=>{
    cy.contains("Affiliates").click()
});
When("The user click on add new",()=>{
    cy.contains("Add new").click()

    
});
When("The user click on the checkbox Active",()=>{
   cy.get("#Active").check()
});
When("the user enter first name and last name",()=>{
cy.get("#Address_FirstName").type("home")
cy.get("#Address_LastName").type("door")
cy.get("#Address_Email").type("a@a")
cy.wait(1500)
cy.get("#Address_CountryId").select("Palestine")
});
When("the user click on save button",()=>{
    cy.get("[name=save]").click()
});
Then("The new affiliate has been added successfully {string}",(message)=>{
cy.get(".alert ").should("contain",message)
});