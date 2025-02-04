// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'fillForm',
  (firstName, lastName, mobileNumber, dateOfBirth) => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get("label[for='gender-radio-1']").click();
    cy.get('#userNumber').type(mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectall}');

    cy.get('#dateOfBirthInput').type(dateOfBirth);
  }
);
