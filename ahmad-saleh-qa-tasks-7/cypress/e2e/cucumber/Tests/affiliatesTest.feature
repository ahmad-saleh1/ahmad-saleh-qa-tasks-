Feature: Add a new affiliates

    verify that the user can add a new affiliates


 Scenario: verify that the user can add a new affiliates
      Given The user navigated to nopCommerce website
      And The user login
      And The user click on promotions
      When The user choose the affiliates
      And The user click on add new
      And The user click on the checkbox Active
      And the user enter first name and last name
      And the user click on save button
      Then The new affiliate has been added successfully "The new affiliate has been added successfully"
