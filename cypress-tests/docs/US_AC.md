# User Story and Acceptance Criteria for the Practice Form

### US001: Form Submission and Validation

As a user, I want to fill out the Practice Form and submit it successfully, so that I can submit my information correctly.

**Acceptance Criteria**
  1. The form can only be submitted when all required fields (First Name, Last Name, Gender, Mobile Number) are filled with valid data.
  2. For required fields, the system must validate that:
     - First Name and Last Name only contain alphabetic characters (no numbers or special characters)
     - Fist Name and Last Name must have a minimum of 1 character.
     - Mobile number must be 10 digits.
     - If any of the required fields are invalid, the input box of that field should be highlighted in red with an exclamation mark and submission should be prevented.
  3. For non-required fields, the system must validate that:
      - Email (if entered) must be in a valid email format (e.g. john@email.com)
      - If email is an invalid format, the input box of that field should be highlighted in red with an exclamation mark and the submission should be prevented.
  4. The system must display a success message and a pop-up summarizing the entered information after successful submission.

