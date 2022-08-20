@RegistrationFeature
Feature: Registration verification
#ID cho test case -> fail thi gan vao csv
#https://docs.cypress.io/plugins/directory#Reporting
#https://codenboxautomationlab.com/cucumber-html-report/
#https://docs.cypress.io/guides/references/best-practices
#https://www.youtube.com/watch?v=CYXYcZpZ4Dc
#https://www.youtube.com/watch?v=Dqhso1tfS_I
#Multiple Cucumber HTML reporter in Cypress
    @TS001ValidName
    Scenario: TS001-Valid name field verification check
        Given user is on the Register page
        When user entering first name and last name
        And user click Register
        Then Register Success
    @TS002InvalidName
    Scenario: TS002-Invalid name field verification check
        Given user is on the Register page
        When user does not have to enter first and last name
        And user click Register
        Then Registration failed
    @TS003ValidMonth
    Scenario: TS003-Check valid month has 30 days 
        Given user is on the Register page
        When user select month has 30 days 
        And user click Register
        Then Register Success   
    Scenario: Check Invalid month has 30 days 
        Given user is on the Register page
        When user selects month with 30 days but chooses date > 30 
        And user click Register
        Then Registration failed   
    Scenario: Check valid month has 31 days 
        Given user is on the Register page
        When user select month has 31 days 
        And user click Register
        Then Register Success  
    Scenario: Check Invalid month has 31 days 
        Given user is on the Register page
        When user selects month with 31 days but chooses date greater than 31 and less than 1
        And user click Register
        Then Registration failed   
    Scenario: Check the leap year February has 29 days
        Given user is on the Register page
        When user selects February has 29 days from 1 to 29
        And user click Register
        Then Register Success 
    Scenario: Check year from 1912 to 2022
        Given user is on the Register page
        When user selects year from 1912 to 2022
        And user click Register
        Then Register Success 
    Scenario: Check the year when not selected 
        Given user is on the Register page
        When user selects year less than 1912
        And user click Register
        Then Registration failed 

            


    