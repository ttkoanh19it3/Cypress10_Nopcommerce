import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageoject/demoacc/login_page.js";
//import RegisterPage from "../../pageoject/demoacc/register_page.js";
Given("user is on login page and user is a user of nopCommerce", () => {
  LoginPage.visit_login();
  cy.percySnapshot();
  });
When('user enters email as {string} and password as {string}',(email,password) =>{
  LoginPage.fill_enterinformation(email,password);
  cy.percySnapshot();
});
And("clicks on login button", () => {
  LoginPage.click_login();
  cy.percySnapshot();
});
Then("user should be redirected to the home page of nopCommerce", () => {
});


