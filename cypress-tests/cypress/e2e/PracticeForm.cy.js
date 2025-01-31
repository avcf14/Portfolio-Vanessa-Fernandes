describe("Testing Practice Form found on demoqa.com using Cypress ", () => {
	beforeEach(() => {
		Cypress.on("uncaught:exception", () => false);
		cy.visit("https://demoqa.com/automation-practice-form");
	});
	it("TC001: Validate First Name on Form Submission (Valid Input)", () => {
		cy.get("#firstName").type("John");
		cy.get("#lastName").type("Doe");
		cy.get("label[for='gender-radio-1']").click();
		cy.get("#userNumber").type("0123456789");
		cy.get("#dateOfBirthInput").type("{selectall}").type("1990/01/30");

		cy.get("#submit").click();

		cy.contains("Thanks for submitting the form").should("be.visible");
	});
});
