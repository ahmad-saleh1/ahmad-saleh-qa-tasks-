Feature: add a new discount

    verify that the user can add a new discount,
     Add new affiliates and Add new campaigns 

    Scenario: verify that the user can add a new discount
      Given The user navigated to nopCommerce website
      Given The user login
      And The user click on promotions
      When The user choose the discount
      And The user click on add new
      And the user enter name and Discount amount
      And the user click on save button
      Then The new discount has been added successfully "The new discount has been added successfully."

  
      

