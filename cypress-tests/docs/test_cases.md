## Test Case ID: TC001
- **Test Case Name**: Validate First Name on Form Submission (Valid Input)
- **Description**: Test to ensure the form submits successfully without errors when a valid first name is entered.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a valid first name in the First Name field.
  2. Enter valid data in other required fields (last name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The First Name field should accept the input without errors, form should be submitted successfully.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: High

## Test Case ID: TC002
- **Test Case Name**: Validate First Name on Form Submission (Long Valid Input)
- **Description**: Test to ensure the form submits successfully without errors when a valid first name that is long (50 chars) is entered.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a valid first name with 50 chars in the First Name field.
  2. Enter valid data in other required fields (last name, gender, mobile, date of birth).
  3. Click "Submit" button
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful.
- **Test Data**: 
    - First Name - 50 characters
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The First Name field should accept the input without errors, form should be submitted successfully.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: High

## Test Case ID: TC003
- **Test Case Name**: Validate First Name Field (Empty Input)
- **Description**: Test to ensure the First Name field cannot be empty.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Leave the First Name field empty.
  2. Enter valid data in other required fields (last name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that the input box is highlighted in red with an exclamation mark.
  5. Verify that the form submission is prevented.
- **Test Data**: 
    - First Name - ""
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The First Name field should be highlighted in red with an exclamation mark to bring attention to the fact that it is empty and form submission should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: High

## Test Case ID: TC004
- **Test Case Name**: Validate First Name Field (Spaces Only)
- **Description**: Test to ensure the First Name field cannot be completed with only spaces as input.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter 3 blank spaces in the First Name field.
  2. Enter valid data in other required fields (last name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that the input box is highlighted in red with an exclamation mark.
  5. Verify that the form submission is prevented.
- **Test Data**: 
    - First Name - "   "
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The First Name field should be highlighted in red with an exclamation mark to bring attention to the fact that it is only filled with spaces and form submission should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: High

## Test Case ID: TC005
- **Test Case Name**: Validate Last Name on Form Submission (Valid Input)
- **Description**: Test to ensure the form submits successfully without errors when a valid last name is entered.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a valid last name in the Last Name field.
  2. Enter valid data in other required fields (first name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Last Name field should accept the input without errors, form should be submitted successfully.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: High

## Test Case ID: TC006
- **Test Case Name**: Validate Last Name on Form Submission (Long Valid Input)
- **Description**: Test to ensure the form submits successfully without errors when a valid last name that is long (50 chars) is entered.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a valid last name with 50 chars in the Last Name field.
  2. Enter valid data in other required fields (first name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful.
- **Test Data**: 
    - First Name - "John"
    - Last Name - 50 characters
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Last Name field should accept the input without errors, form should be submitted successfully.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: High

## Test Case ID: TC007
- **Test Case Name**: Validate Last Name Field (Empty Input)
- **Description**: Test to ensure the Last Name field cannot be empty.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Leave the Last Name field empty.
  2. Enter valid data in other required fields (first name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that the input box is highlighted in red with an exclamation mark.
  5. Verify that the form submission is prevented.
- **Test Data**: 
    - First Name - "John"
    - Last Name - ""
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Last Name field should be highlighted in red with an exclamation mark to bring attention to the fact that it is empty and form submission should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: High

## Test Case ID: TC008
- **Test Case Name**: Validate Last Name Field (Spaces Only)
- **Description**: Test to ensure the Last Name field cannot be completed with only spaces as input.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter 3 blank spaces in the Last Name field.
  2. Enter valid data in other required fields (first name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that the input box is highlighted in red with an exclamation mark.
  5. Verify that the form submission is prevented.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "   "
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Last Name field should be highlighted in red with an exclamation mark to bring attention to the fact that it is only filled with spaces and form submission should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: High

## Test Case ID: TC009
- **Test Case Name**: Validate Email Field (Valid Format)
- **Description**: Test to ensure the form submits successfully without errors when an email with a valid format (e.g. example@mail.com) is entered.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a valid email in the Email field.
  2. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Email - "example@mail.com"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Email field should accept the input without errors, form should be submitted successfully.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC010
- **Test Case Name**: Validate Email Field (Invalid Format)
- **Description**: Test to ensure the Email field cannot be completed and the form submitted with an email with invalid format (e.g. example.mail).
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter an email with invalid format in the Email field
  2. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that the input box is highlighted in red with an exclamation mark.
  5. Verify that the form submission is prevented.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Email - "example.mail"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Email field should be highlighted in red with an exclamation mark to bring attention to the fact that it is only filled with spaces and form submission should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC011
- **Test Case Name**: Validate Mobile Field (Valid Format)
- **Description**: Test to ensure the form submits successfully without errors when a mobile number with a valid length (10 digits) is entered.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a valid mobile number in the Mobile field.
  2. Enter valid data in other required fields (first name, last name, gender, date of birth).
  3. Click "Submit" button.
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Mobile field should accept the input without errors, form should be submitted successfully.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC012
- **Test Case Name**: Validate Mobile Field (Invalid Length - Too Short)
- **Description**: Test to ensure the Mobile field cannot be completed and the form submitted with a mobile number with an invalid length (9 digits).
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a mobile number with invalid format in the Mobile field.
  2. Enter valid data in other required fields (first name, last name, gender, date of birth).
  3. Click "Submit" button.
  4. Verify that the input box is highlighted in red with an exclamation mark.
  5. Verify that the form submission is prevented.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 012345678
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Mobile field should be highlighted in red with an exclamation mark to bring attention to the fact that it is only filled with spaces and form submission should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC013
- **Test Case Name**: Validate Mobile Field (Invalid Length - Too Long)
- **Description**: Test to ensure the Mobile field cannot accept more than 10 digits and the form prevents entering an 11th digit.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a mobile number with 10 digits (valid format) in the Mobile field.
  2. Enter valid data in other required fields (first name, last name, gender, date of birth).
  3. Try to type an 11th digit in the Mobile field.
  4. Verify that the input field still contains only 10 digits after attempting to enter the 11th digit.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Mobile field should not accept more than 10 digits, and the user should not be able to enter an 11th digit.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC014
- **Test Case Name**: Validate Mobile Field (Invalid Input)
- **Description**: Test to ensure the Mobile field cannot be completed and the form can't be submitted with a mobile number with an invalid input (alphabetic).
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a mobile number with invalid format in the Mobile field.
  2. Enter valid data in other required fields (first name, last name, gender, date of birth).
  3. Click "Submit" button.
  4. Verify that the input box is highlighted in red with an exclamation mark.
  5. Verify that the form submission is prevented.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - "johndoedoe"
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Mobile field should be highlighted in red with an exclamation mark to bring attention to the fact that it is only filled with spaces and form submission should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC015
- **Test Case Name**: Validate Date of Birth Field (Valid Format)
- **Description**: Test to ensure the form submits successfully without errors when a valid date of birth is entered.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a valid date of birth in the Date of Birth field.
  2. Enter valid data in other required fields (first name, last name, gender, mobile).
  3. Click "Submit" button.
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
- **Expected Result**: The Date of Birth field should accept the input without errors, form should be submitted successfully.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC016
- **Test Case Name**: Validate Date of Birth Field (Invalid Date in the Future)
- **Description**: Test to ensure that a date of birth in the future cannot be selected for the Date of Birth field.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a date of birth in the future in the Date of Birth field.
  2. Enter valid data in other required fields (first name, last name, gender, mobile).
  3. Click "Submit" button.
  4. Verify that the input box is highlighted in red with an exclamation mark.
  5. Verify that the form submission is prevented.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - (date in the future)
- **Expected Result**: The Date of Birth field should not allow the date in the future to be selected and form submission should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC017
- **Test Case Name**: Validate Subjects Field with Auto-Complete (Valid Input)
- **Description**: Test to ensure that the auto-complete functionality is working on the Subjects field and the form is submitted successfully without errors.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Click on the Subjects input field.
  2. Type letter "M".
  3. Verify that the suggestion "Maths" appears under the input field.
  4. Select "Maths" option from the suggestions.
  5. Verify that the "Maths" option is populated in the input field.
  6. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  7. Click "Submit" button.
  8. Verify that no validation errors appear after submitting the form.
  9. Verify that the form submission is successful.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
    - Subjects - "Maths"
- **Expected Result**: The "Maths" suggestion should appear when typing "M", selecting the "Maths" suggestion should populate the field with "Maths" and the form submission should be successful.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC018
- **Test Case Name**: Validate Subjects Field with No Suggestion of Auto-Complete (Invalid Input)
- **Description**: Test to ensure that, when the auto-complete functionality has no suggestion for a specific letter, the field is not populated.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Click on the Subjects input field.
  2. Type letter "Z".
  3. Verify that no suggestion matches a word beginning with "Z".
  2. Verify that the input field doesn't accept the invalid input. 
- **Test Data**: 
    - Subjects - "Z"
- **Expected Result**: No suggestions should appear for the invalid input, the input field should not accept that same input.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC019
- **Test Case Name**: Validate Full Deletion of Input in Subjects Field
- **Description**: Test to ensure that, after adding a subject to the Subjects field, it is possible to delete it without errors.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Click on the Subjects input field.
  2. Type letter "M".
  3. Verify that the suggestion "Maths" appears under the input field.
  4. Select "Maths" option from the suggestions.
  5. Verify that the "Maths" option is populated in the input field.
  6. Press the backspace key continuously to clear the entire input field.
  7. Verify that the input field in empty. 
- **Test Data**: 
    - Subjects - "Maths"
- **Expected Result**: The input field should be completely cleared when the backspace key is pressed enough times.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC020
- **Test Case Name**: Validate Hobbies Field with Single Selection
- **Description**: Test to ensure the form submits successfully without errors when a single checkbox is selected from the Hobbies section.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. From the Hobbies section, select the "Sports" checkbox.
  2. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful. 
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
    - Hobbies - select "Sports" checkbox
- **Expected Result**: "Sports" should be correctly selected and the form should be submitted without errors.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC021
- **Test Case Name**: Validate Hobbies Field with Multiple Selections
- **Description**: Test to ensure the form submits successfully without errors when multiple checkboxs are selected from the Hobbies section.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. From the Hobbies section, select the "Sports" and "Music" checkboxs.
  2. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  3. Click "Submit" button.
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful. 
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
    - Hobbies - select "Sports" and "Music" checkboxs
- **Expected Result**: "Sports" and "Music" should be correctly selected and the form should be submitted without errors.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC022
- **Test Case Name**: Validate Image File Upload (Valid File)
- **Description**: Test to ensure the form submits successfully without errors when a valid file in uploaded in the Picture section.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Click in the "Escolher Ficheiro" button.
  2. Select a valid image file (e.g. .jpg or .png).
  3. Verify that the file name appears next to the "Escolher Ficheiro" button.
  4. Verify that the system allows the image to be uploaded. 
  5. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  6. Click "Submit" button.
  7. Verify that no validation errors appear after submitting the form.
  8. Verify that the form submission is successful. 
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
    - Picture - upload .jpg file.
- **Expected Result**: The image selected should be uploaded sucessfully and the form should be submitted without errors.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC023
- **Test Case Name**: Validate Image File Upload (Non-Image File)
- **Description**: Test to ensure the image can't be uploaded on the Picture section with an invalid file format and the form submission is prevented.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Click in the "Escolher Ficheiro" button.
  2. Select a non-image file (e.g. .txt or .pdf).
  3. Verify that the file is rejected and the field is highlighted in red with an exclamation mark.
  4. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  5. Click "Submit" button.
  6. Verify that the form submission is prevented. 
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
    - Picture - upload .txt file.
- **Expected Result**: The image selected should be rejected by the system and the submission of the form should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC024
- **Test Case Name**: Validate Current Address Field (Valid Input)
- **Description**: Test to ensure the form submits successfully without errors when a valid current address is entered.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter a valid current address in the Current Address field.
  2. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  3. Click the "Submit" button.
  4. Verify that no validation errors appear after submitting the form.
  5. Verify that the form submission is successful. 
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
    - Current Address - "123 Main Street, Springfield"
- **Expected Result**: The Current Address field should accept the input without errors and the form should be submitted successfully.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC025
- **Test Case Name**: Validate Current Address Field (Spaces Only)
- **Description**: Test to ensure the Current Address field cannot be filled with only spaces.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Enter 3 blank spaces in the Current Address field.
  2. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  3. Click the "Submit" button.
  4. Verify that the Current Address field is highlighted in red with an exclamation mark.
  5. Verify that the form submission is prevented.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
    - Current Address - "   "
- **Expected Result**: The Current Address field should be highlighted in red with an exclamation mark, and the form submission should be prevented.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC026
- **Test Case Name**: Validate State and City Fields (Valid Input)
- **Description**: Test to ensure the form submits successfully when valid state and city are selected.
- **Preconditions**: The user has navigated to the Practice Form page.
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Select a valid state from the State dropdown.
  2. Select a valid city from the City dropdown.
  3. Enter valid data in all required fields (first name, last name, gender, mobile, date of birth).
  4. Click the "Submit" button.
  5. Verify that no validation errors appear after submitting the form.
  6. Verify that the form submission is successful.
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
    - State - "NCR"; City - "Noida"
- **Expected Result**: The form should be submitted successfully without any validation errors.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium

## Test Case ID: TC027
- **Test Case Name**: Validate City Field Reset After Changing State
- **Description**: Test to ensure that when the user selects a different state, the city field is reset to the default or empty state (not retaining the previous city's value).
- **Test setup**: Chrome browser version 132.0, OS: Windows 11.
- **Test Steps**:
  1. Select the state "NCR" from the State dropdown.
  2. Select a city, for example, "Noida" from the City dropdown.
  3. Change the state selection to another state, for example, "Uttar Pradesh".
  4. Verify that the city dropdown is either reset to the default value or becomes empty (not retaining "Noida" or any previously selected city).
- **Test Data**: 
    - First Name - "John"
    - Last Name - "Doe"
    - Gender - Male
    - Mobile - 0123456789
    - Date Of Birth - 30/01/1990
    - State - "NCR"; City - "Noida"
- **Expected Result**: When the user changes the state, the city field should be reset and should not retain the previous city's selection ("Noida" in this case). The city dropdown should either be empty or reset to its default value.
- **Actual Result**: To be filled after test execution.
- **Pass/Fail**: To be filled after test execution.
- **Priority**: Medium