# Test Plan: Practice Form
### Test Objective
The objective of this test plan is to verify the functionality and usability of the **Practice Form** on the **DemoQA** website. This includes testing form validation, correct input processing, form submission, and ensuring the correct selection of radio buttons and checkboxes.

### Test Scope and Approach
**Scope**: The test will focus on the Practice Form functionality, which includes the following features:

- Text input fields with valid and invalid input
- Radio buttons (Gender selection)
- Checkboxes (Hobbies selection)
- Date picker with valid and invalid entries
- Upload file (size and type)
- Dropdown menus selection and validation of behavior
- Submit button (Form submission)

**Approach**:

- **Manual Testing**: Perform manual checks for valid and invalid inputs.
- **Automated Testing**: Use Cypress to automate test cases that validate correct behavior and form submission.

### Test Environment
- Operating System: Windows
- Browser: Google Chrome 
- Cypress Version: 14.0.1 
- URL to be tested: https://demoqa.com/automation-practice-form
- Dependencies: Cypress for automated tests

### Test Deliverables
- Test Case Documentation: A list of test cases that include expected and actual results.
- Test Execution Report: A report from Cypress showing the results of automated tests (Pass/Fail).
- Bug Reports: Any issues or bugs encountered during testing, with details for reproduction.

### Test Tools
- Cypress: Used for test automation, providing an environment to run functional tests against the Practice Form.
- Test Report: Generated after running tests in Cypress.

### Test Exit Parameters
Testing will be considered complete when:

- All test cases pass or fail with a documented reason.
- No critical defects block the form's functionality.
- The form behaves as expected in terms of field validation and successful submission.
- Test results are reviewed, and any issues are reported to the development team for fixes.

### Defect Management

Defects Reports will include the following details:
- Description of the issue
- Steps to reproduce
- Expected and actual results
- Screenshots or videos (if applicable)
- Severity and priority

Defect Fix Verification: Once defects are fixed, the test suite will be rerun to verify the fixes.

### Risks
Potential risks include:

- Changes in the Website UI: Any UI changes can affect the structure of the form, making some automated tests fail.
- Browser Compatibility: Tests might not behave consistently across different browsers, although we are focusing on Chrome for now.

