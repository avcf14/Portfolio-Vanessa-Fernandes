# 🛠️ Portfolio - Software Testing  

Welcome to my Software Testing Portfolio! This is a work in progress as I continue to enhance and expand my test automation projects. Here, I showcase my expertise in automated testing using various frameworks like Cypress, Selenium, and Playwright, along with API testing using Jest. This project contains test suites for web applications, demonstrating a diverse and structured testing approach.

## 📂 Project Structure   

This project has the following structure:
```
/Portfolio
│── README.md  
│── /cypress-tests/
   │── .gitignore
   │── package.json
   │── docs
   |   ├── Test_Cases.md
   |   ├── Test_Plan.md
   |   ├── US_AC.md
   │── cypress.config.js
   │── cypress/
       ├── e2e
       ├── fixtures
       ├── support

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
2. Install dependencies for each framework (cypress-tests, selenium-tests, etc.):
```sh
cd cypress-tests && npm install
```
3. Run tests following the commands listed in each section above.