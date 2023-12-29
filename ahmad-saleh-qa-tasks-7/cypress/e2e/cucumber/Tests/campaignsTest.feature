Feature: add a new campaigns

    verify that the user can add a new campaigns

    Scenario: verify that the user can add a new campaigns 
       Given The user navigated to nopCommerce website
      And The user login
      And The user click on promotions
      When The user choose the campaigns
      And The user click on add new 
      And the user enter name, Body and subject
      And the user click on save button
      Then The new campaign has been added successfully "The new campaign has been added successfully."