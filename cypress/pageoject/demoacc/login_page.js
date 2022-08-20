import { emailAccount } from '../../support/ramdomdata.js';
import {login} from '../demoacc/login_obj.js';

//import {result} from '../../support/ramdomdata.js';
//import { randomDay } from '../../support/ramdomdata.js';
export default class LoginPage{
    //----Action------------------
    static visit_login(){
        cy.visit(Cypress.config().baseUrl+'login');

    }
    
    static fill_enterinformation(email, password) {
        cy.get(login.email_txt).type(email);
        cy.get(login.password_txt).type(password);
        
    }
    static click_login(){
        cy.get(login.btnLogin).click();
    }
}