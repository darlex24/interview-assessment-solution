/// <reference types="cypress" />

//Describe the project
describe("interview assessment solution", () => {

    //Writing a test script to login to a logistics application 
    it("login", function () {

        //Visit logistics application to automate
        cy.visit("https://app-dev.warenext.ng/login");
       
        //added the wait for 9 minuites function because the automation didnt seem to be running smoothly.
        //sometimes when testing other websites likw konga the wait function is not needed but for this website for the automation to run smoothly we use the wait function
         cy.wait(9000);
        
        //use the spy function to extract and copy the company username field
        cy.get('[name="username"]')
        // type in the appropriate company username
        .type("merchant@test.com")

        //use the spy function to extract and copy the company password field
        cy.get('[style="position: relative; width: 100%;"] > .input')
        // type in the appropriate company password
        .type("test1234")

        //use the spy function to extract and copy the log in field
        cy.get('.sc-cpmLhU')
        //make sure to add the click function below so you can finalise the log in steps.
        .click();
        
        // if you need to discover if the options field which you have gotten below contains the dashboard option 
        cy.get('.sc-jWBwVP').contains('Dashboard')

        // if you need to discover if the options field which you have gotten below contains the Warehouse option 
        cy.get('.sc-jWBwVP').contains('Warehouse')

        // if you need to discover if the options field which you have gotten below contains the Shipments option
        cy.get('.sc-jWBwVP').contains('Shipments')

        // if you need to discover if the options field which you have gotten below contains the Saved Orders option
        cy.get('.sc-jWBwVP').contains('Saved Orders')





    });
});