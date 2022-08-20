Feature: Search 
    Scenario: Check if there is an input search box there
        Given user goes to Register form 
        When user search by entering text
        Then user sees search box

    Scenario: Check if there is a title in Register Page
        Given user goes to Register form
        Then user sees Register header

    Scenario: Check the display of fields in the Your Personal Details form
        Given user goes to Register form
        Then user sees all fields of Your Personal Details form

    Scenario: Check the display of fields in the Company Details form
        Given user goes to Register form
        Then user sees all fields of Company Details form
    
