import { Given,When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { register } from "../../pageoject/demoacc/register_obj.js";
import RegisterPage from "../../pageoject/demoacc/register_page.js";
import { randomDay, randomName, randomYear } from "../../support/ramdomdata.js";
Given("user is on the Register page", () => {
    RegisterPage.visit_registerPage();
  });
When("user entering first name and last name", () =>{
    RegisterPage.fill_allinformation();
});
And("user click Register", () => {
    RegisterPage.click_register();
});
Then("Register Success", () => {
    
});
//-----------------------------------------------------------
When("user does not have to enter first and last name", () =>{
    //RegisterPage.fill_allinformation();
});

Then("Registration failed", () => {
    
});
//------------------------------------------------------------
When("user select month has 30 days",() => {
    RegisterPage.fill_allinformation();
});
//------------------------------------------------------------
When("user selects month with 30 days but chooses date > 30", () => {
    RegisterPage.Check_valid();
});
//