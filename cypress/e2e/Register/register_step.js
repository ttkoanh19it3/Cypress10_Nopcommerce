import { Given,When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../../pageoject/demoacc/register_page.js";
Given("User is on register page", () => {
    //cy.visit("https://demo.nopcommerce.com/register");
    RegisterPage.visit_registerPage();
    //cy.screenshot();
    cy.percySnapshot();
  });
When("User input registration infomation", () =>{
    //cy.get('#FirstName').type("Tran");
    //cy.get('#LastName').type("Oanh");
    //cy.get('#gender-male').check();
    //cy.get('[name="DateOfBirthDay"]').select('9');
    RegisterPage.fill_allinformation();
    //cy.screenshot();
    cy.percySnapshot();
});
And("User click REGISTER button", () => {
    RegisterPage.click_register();
    //cy.screenshot();
    cy.percySnapshot();
});
And("User click CONTINUE button", () => {
    RegisterPage.click_continue();
    //cy.screenshot();
    cy.percySnapshot();
});
Then("I should see a register page", () => {
    
});


