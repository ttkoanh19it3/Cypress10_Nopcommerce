import { Given,When, Then} from "@badeball/cypress-cucumber-preprocessor";
//import RegisterPage from "../../pageoject/demoacc/register_page.js";
Given("user goes to Register form", () => {
    cy.visit("https://demo.nopcommerce.com/register");
  });
When("user search by entering text", () =>{
    cy.get('#small-searchterms').type('computer');
});

Then("user sees search box", () =>{
    cy.get('#small-searchterms');
});
//-------------------------------------------------
Then("user sees Register header", () =>{
    cy.get('.page').contains('Register');
    cy.get('form > :nth-child(1) > .title').contains('Your Personal Details');
});
//---------------------------------------------------
Then("user sees all fields of Your Personal Details form", () => {
    cy.get('.page-body > form > :nth-child(1)').contains('Your Personal Details');
    cy.get(':nth-child(1) > .form-fields > :nth-child(1)').contains('Gender');
    cy.get(':nth-child(1) > .form-fields > :nth-child(2)').contains('First name');
    cy.get(':nth-child(1) > .form-fields > :nth-child(3)').contains('Last name');
    cy.get(':nth-child(1) > .form-fields > :nth-child(4)').contains('Date of birth');
    cy.get(':nth-child(1) > .form-fields > :nth-child(5)').contains('Email');
    cy.log('Done check Your Personal Details form')
});
//----------------------------------------------------
Then("user sees all fields of Company Details form", () =>{
    cy.get('.page-body > form > :nth-child(2)').contains('Company Details');
    cy.get(':nth-child(2) > .form-fields > .inputs').contains('Company name');
});
