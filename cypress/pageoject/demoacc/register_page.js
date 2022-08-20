import {register} from '../demoacc/register_obj.js';
import {randomDay, randomMonth, randomName, randomYear, randomGender} from '../../support/ramdomdata.js';
//import {result} from '../../support/ramdomdata.js';
//import { randomDay } from '../../support/ramdomdata.js';
// import ObjectsToCsv from 'objects-to-csv';
// const { fs } = require('fs');
// import {Buffer} from 'buffer';
// window.Buffer = window.Buffer || Buffer; 



// const { ObjectsToCsv } = require('objects-to-csv');


export default class RegisterPage{

    //----Action------------------
    static visit_registerPage(){
        cy.visit(Cypress.config().baseUrl+'register');

    }
    static fill_allinformation() {


        let fill_fields = {};

        fill_fields.firstname_txt=randomName(10);
        fill_fields.lastname_txt=randomName(10);
        fill_fields.gender_txt=randomGender();
        fill_fields.day_txt=(randomDay());
        fill_fields.month_txt=(randomMonth());
        fill_fields.year_txt=(randomYear(1912, 2022));
        fill_fields.email_txt=randomName(10)+'@gmail.com';
        fill_fields.company_txt=randomName(20);
        fill_fields.password_txt=randomName(10);
        fill_fields.confirmpassword_txt=fill_fields.password_txt;

        cy.get(register.firstname_txt).type(fill_fields.firstname_txt);
        cy.get(register.lastname_txt).type(fill_fields.lastname_txt);
        //cy.get(register.gender_txt).check(fill_fields.gender_txt);
        cy.get(register.day_txt).select(fill_fields.day_txt);
        cy.get(register.month_txt).select(fill_fields.month_txt);
        cy.get(register.year_txt).select(fill_fields.year_txt);
        cy.get(register.email_txt).type(fill_fields.email_txt);
        cy.get(register.company_txt).type(fill_fields.company_txt);
        // cy.get('#Newsletter').check();
        cy.get(register.password_txt).type(fill_fields.password_txt);
        cy.get(register.confirmpassword_txt).type(fill_fields.confirmpassword_txt);

        var output = '';
        var currentdate = new Date();
        var datetime = currentdate.getDate()+"-"+ currentdate.getMonth()+"-"+ currentdate.getFullYear() + "_" + currentdate.getHours() + "-"+ currentdate.getMinutes() + "-" + currentdate.getSeconds();
        for (const key_field of Object.keys(fill_fields)) {
            output += key_field + ': ' + fill_fields[key_field]+';'+'\n';
        }
  
        cy.writeFile('path/to/TestResult_CreatedAccount_'+datetime+'.csv', output, {
            encoding: 'ascii',
            flag: 'a+',
          })
        // cy.writeFile('test1.json', fill_fields, { flag: 'a+' })
        // (async () => {
        //     const csv = new ObjectsToCsv(fill_fields);
        //     await csv.toDisk('./export_data_register.csv' , { append: true });
        // })();
    }
    static Check_valid(){
        let fill_fields = {};

        fill_fields.firstname_txt=randomName(10);
        fill_fields.lastname_txt=randomName(10);
        fill_fields.gender_txt=randomGender();
        fill_fields.day_txt=('31');
        fill_fields.month_txt=('4');
        fill_fields.year_txt=(randomYear(1912, 2022));
        fill_fields.email_txt=randomName(10)+'@gmail.com';
        fill_fields.company_txt=randomName(20);
        fill_fields.password_txt=randomName(10);
        fill_fields.confirmpassword_txt=fill_fields.password_txt;

        cy.get(register.firstname_txt).type(fill_fields.firstname_txt);
        cy.get(register.lastname_txt).type(fill_fields.lastname_txt);
        cy.get(register.gender_txt).check(fill_fields.gender_txt);
        cy.get(register.day_txt).select(fill_fields.day_txt);
        cy.get(register.month_txt).select(fill_fields.month_txt);
        cy.get(register.year_txt).select(fill_fields.year_txt);
        cy.get(register.email_txt).type(fill_fields.email_txt);
        cy.get(register.company_txt).type(fill_fields.company_txt);
        cy.get('#Newsletter').check();
        cy.get(register.password_txt).type(fill_fields.password_txt);
        cy.get(register.confirmpassword_txt).type(fill_fields.confirmpassword_txt);


    }
    static click_register(){
        cy.get(register.btnregister_txt).click();
    }
    static click_continue(){
        cy.get(register.btncontinue_txt).click();
    }

}