import 'cypress-file-upload';

describe('Testing Practice Form found on demoqa.com using Cypress ', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  it('TC001: Validate Form Submission (Valid Inputs only)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#submit').click();
    const data = ['John', 'Doe', 'Male', '0123456789', '30 January,1990'];
    cy.get('.modal-content').within(() => {
      cy.contains('Thanks for submitting the form').should('be.visible');
      data.forEach((text) => {
        cy.contains(text).should('be.visible');
      });
    });
  });
  it('TC002: Validate First Name on Form Submission (Long Valid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm('a'.repeat(50), data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.contains('a'.repeat(50)).should('be.visible');
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
  it('TC005: Validate Last Name on Form Submission (Long Valid Input)', () => {
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
    cy.contains('a'.repeat(50)).should('be.visible');
  });
  it('TC006: Validate Last Name Field (Empty Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#lastName').clear();
    cy.get('#submit').click();

    cy.get('#lastName').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC007: Validate Last Name Field (Spaces Only)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, '   ', data.mobile, data.dateOfBirth);
    });
    cy.get('#submit').click();

    cy.get('#firstName').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC008: Validate Email Field (Valid Format)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
      cy.get('#userEmail').type(data.userEmail);
    });

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.contains('example@mail.com').should('be.visible');
  });
  it('TC009: Validate Email Field (Invalid Format)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
      cy.get('#userEmail').type('example.mail');
    });

    cy.get('#submit').click();

    cy.get('#userEmail').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC010: Validate Mobile Field (Invalid Length - Too Short)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, '1', data.dateOfBirth);
    });

    cy.get('#submit').click();

    cy.get('#userNumber').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC011: Validate Mobile Field (Invalid Length - Too Long)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });

    cy.get('#userNumber')
      .should('have.attr', 'maxlength', '10')
      .should('have.value', '0123456789');

    cy.get('#userNumber').type('1');

    cy.get('#userNumber').should('not.have.value', '12345678901');
  });
  it('TC012: Validate Mobile Field (Invalid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(
        data.firstName,
        data.lastName,
        'johndoedoe',
        data.dateOfBirth
      );
    });

    cy.get('#submit').click();

    cy.get('#userNumber').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC013: Validate Date of Birth Field (Invalid Date in the Future)', () => {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 3);
    const futureDateString = futureDate.toISOString().split('T')[0];

    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, futureDateString);
    });
    cy.get('#submit').click();

    cy.get('#dateOfBirthInput').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC014: Validate Subjects Field with Auto-Complete (Valid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#subjectsContainer').type('M');

    cy.get('.subjects-auto-complete__menu').contains('Math').click();
    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.contains('Maths').should('be.visible');
  });
  it('TC015: Validate Subjects Field with No Suggestion of Auto-Complete (Invalid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#subjectsContainer').type('Z');

    cy.get('.subjects-auto-complete__menu').should('not.exist');

    cy.get('#subjectsContainer').click();

    cy.get('#subjectsContainer').should('have.value', '');
  });
  it('TC016: Validate Full Deletion of Input in Subjects Field', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#subjectsContainer').type('M');

    cy.get('.subjects-auto-complete__menu').contains('Math').click();
    cy.get('#subjectsContainer').contains('Maths');
    cy.get('.css-xb97g8').click();

    cy.get('#subjectsContainer').should('have.value', '');
  });
  it('TC017: Validate Hobbies Field with Single Selection', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#hobbies-checkbox-1').check({ force: true });

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.contains('Sports').should('be.visible');
  });
  it('TC018: Validate Hobbies Field with Multiple Selections', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#hobbies-checkbox-1').check({ force: true });
    cy.get('#hobbies-checkbox-3').check({ force: true });

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
    const hobbies = ['Sports', 'Music'];
    hobbies.forEach((hobby) => {
      cy.contains(hobby).should('be.visible');
    });
  });
  it('TC019: Validate Image File Upload (Valid File)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#uploadPicture').attachFile('myfile.jpg');

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.contains('myfile.jpg').should('be.visible');
  });
  it('TC020: Validate Image File Upload (Non-Image File)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#uploadPicture').attachFile('myfile.pdf');

    cy.get('#submit').click();

    cy.get('#uploadPicture').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC021: Validate Current Address Field (Valid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#currentAddress').type('123 Main Street, Springfield');

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.contains('123 Main Street, Springfield').should('be.visible');
  });
  it('TC022: Validate Current Address Field (Spaces Only)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });
    cy.get('#currentAddress').type('   ');

    cy.get('#submit').click();

    cy.get('#currentAddress').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
  it('TC023: Validate State and City Fields (Valid Input)', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });

    cy.get('#state').click();
    cy.get('.css-26l3qy-menu').should('exist').contains('NCR').click();

    cy.get('#city').click();
    cy.get('.css-26l3qy-menu').should('exist').contains('Noida').click();

    cy.get('#submit').click();
    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.contains('NCR Noida').should('be.visible');
  });
  it('TC024: Validate City Field Reset After Changing State', () => {
    cy.fixture('formData').then((data) => {
      cy.fillForm(data.firstName, data.lastName, data.mobile, data.dateOfBirth);
    });

    cy.get('#state').click();
    cy.get('.css-26l3qy-menu').should('exist').contains('NCR').click();

    cy.get('#city').click();
    cy.get('.css-26l3qy-menu').should('exist').contains('Noida').click();

    cy.get('#state').click();
    cy.get('.css-26l3qy-menu')
      .should('exist')
      .contains('Uttar Pradesh')
      .click();

    cy.get('#city').should('not.contain', 'Noida');
  });
});
