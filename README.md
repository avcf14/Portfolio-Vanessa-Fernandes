# 🛠️ Portfolio - Software Testing  

Welcome to my Software Testing Portfolio! This is a work in progress as I continue to enhance and expand my test automation projects. Here, I showcase my expertise in automated testing using various frameworks like Cypress, Selenium, and Playwright (coming soon!), along with API testing using Jest (also coming soon!). This project contains test suites for web applications, demonstrating a diverse and structured testing approach.

## 📂 Project Structure   

This project has the following structure:
```
/Portfolio
│── .github/workflows
|  │── main.yml  
│── /cypress-tests/
|  │── cypress/
|  |      ├── e2e
|  |      |   ├── practiceForm.cy.js
|  |      ├── fixtures
|  |      |   ├── formData.json
|  |      ├── support
|  |          ├── commands.js
|  |          ├── e2e.js
|  │── docs
|  |   ├── Test_Cases.md
|  |   ├── Test_Plan.md
|  |   ├── US_AC.md
|  |── .gitignore
|  │── cypress.config.js
|  │── package-lock.json
|  │── package.json
│── .gitignore
│── .prettierignore
│── .prettierrc
│── eslint.config.mjs
│── package-lock.json
│── package.json
│── README.md

```

### 🔹 Cypress Tests  
📌 Located in: `/cypress-tests/`  
- Framework: [Cypress](https://www.cypress.io/)  
- Used for: End-to-End (E2E) UI testing  
- Run Cypress tests:  
  ```sh
  cd cypress-tests
  npx cypress open
  ```

## 🚀 How to Run the Tests
1. Clone this repository:
  ```sh
  git clone https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
  cd portfolio
  ```
2. Install dependencies for Cypress tests:
```sh
cd cypress-tests && npm install
```
3. Run tests following the commands listed in each section above.