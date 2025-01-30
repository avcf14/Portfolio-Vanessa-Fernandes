# 🛠️ Portfolio - Software Testing  

Welcome to my **Software Testing Portfolio**, where I showcase my expertise in automated testing using different frameworks like **Cypress, Selenium, Playwright, and API testing with Jest**. This project contains test suites for web applications, demonstrating a diverse testing approach.

## 📂 Project Structure   

This project has the following structure:
```
/Portfolio
│── README.md  
│── /cypress-tests/
│   │── package.json
│   │── cypress.config.js
│   │── tests/
│       ├── homepage.cy.js
│── /selenium-tests/
│   │── package.json
│   │── wdio.conf.js
│   │── tests/
│       ├── homepage.test.js
│── /playwright-tests/
│   │── package.json
│   │── playwright.config.js
│   │── tests/
│       ├── homepage.spec.js
│── /api-tests/
│   │── package.json
│   │── jest.config.js
│   │── tests/
│       ├── api.test.js
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