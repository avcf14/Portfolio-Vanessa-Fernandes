describe('Testing Practice Form found on demoqa.com using Cypress ', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  it('TC001: Validate First Name on Form Submission (Valid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
  });
  it('TC002: Validate First Name on Form Submission (Long Valid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm('a'.repeat(50), data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
  });
  it('TC003: Validate First Name Field (Empty Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#firstName').clear();
    cy.get('#submit').click();

    cy.get('#firstName').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC004: Validate First Name Field (Spaces Only)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm('   ', data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#submit').click();

    cy.get('#firstName').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC005: Validate Last Name on Form Submission (Valid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
  });
  it('TC006: Validate Last Name on Form Submission (Long Valid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(
        data.firstName,
        'a'.repeat(50),
        data.mobile,
        data.dateOfBirth
      );
    });
    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
  });
  it('TC007: Validate Last Name Field (Empty Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#lastName').clear();
    cy.get('#submit').click();

    cy.get('#lastName').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC008: Validate Last Name Field (Spaces Only)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, '   ', data.mobile, data.dateOfBirth);
    });
    cy.get('#submit').click();

    cy.get('#firstName').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC009: Validate Email Field (Valid Format)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
      cy.get('#userEmail').type(data.userEmail);
    });

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
  });
  it('TC010: Validate Email Field (Invalid Format)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
      cy.get('#userEmail').type('example.mail');
    });

    cy.get('#submit').click();

    cy.get('#userEmail').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC011: Validate Mobile Field (Valid Format)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
  });
  it('TC012: Validate Mobile Field (Invalid Length - Too Short)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, '1', data.dateOfBirth);
    });

    cy.get('#submit').click();

    cy.get('#userNumber').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC013: Validate Mobile Field (Invalid Length - Too Long)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });

    cy.get('#userNumber')
      .should('have.attr', 'maxlength', '10')
      .type('1')
      .should('have.value', '0123456789');

    cy.get('#userNumber').should('not.have.value', '12345678901');
  });
});
