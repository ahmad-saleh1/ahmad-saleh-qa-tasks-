/// <reference types= "cypress" />

describe("task3 senario",()=>{
 it("TC1",()=>{
    cy.visit("https://demo.productionready.io/#/login")
    cy.get(".text-xs-center.ng-binding") //sign in
    // cy.get(".ng-scope:eq(2)").contains("Sign in")
    cy.contains("Need an account?")
    cy.get("[type='email']")
    cy.get("[type='password']")
    cy.contains("button","Sign in")
   

 })
 it("TC2",()=>{
    cy.visit("https://demo.productionready.io/#/")
    cy.get(".navbar-brand")
    cy.contains("Home")
    cy.contains("Sign up")
    cy.get("h1.logo-font")
    cy.get(".banner p")
    cy.wait(3000);cy.get(".feed-toggle ul li").first().next()
    cy.wait(3000);cy.get(".sidebar > p")
    cy.contains("codebaseShow")
    cy.get("div.tag-list a").last()
    cy.wait(3000); cy.get("article-list .ng-isolate-scope .btn-outline-primary").first()
    cy.contains("span","Read more...")
 })
 it("TC3",()=>{
    cy.visit("https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863")
    cy.get(".banner h1")
    cy.get(".banner .ng-isolate-scope .article-meta > a")
    cy.get(".banner .info a")
    cy.get(".banner .info span")
    cy.get(".banner follow-btn")
    cy.get(".banner favorite-btn")
    cy.get(".ng-binding p")
    cy.get(".tag-list li").first()
    cy.get(".tag-list li").last()


 })

})