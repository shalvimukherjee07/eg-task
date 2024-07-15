## Project UI Automation for Automation Test Store Website

**Framework Details**

1. Language used - Javascript
2. Tool - Cypress
3. Framework - Page Object Model with Mocha

**Setup**

1. Git clone
2. Run _npm install_
3. Install cypress - Go to the project path and run _npm install cypress --save-dev_

**Project Structure**

1. The test cases file _eg.cy.js_ is present in eg-task\cypress\e2e\tests.
2. The page class _eg.js_ is present in cypress\pages.
3. The test data required as an input are present in cypress\fixtures.
4. There are 7 test cases. Each it block represents one test case.
5. The configurations are present in cypress.config.js.
6. The baseUrl is declared as environment variable in cypress.config.js.

**NPM Scripts**

1. cy:open - This will open the cypress runner.
2. cy:report - This will run the spec files in headless mode and also generate mochawesome report.
3. e2e:chrome - This will run the spec files in headless mode in chrome browser.

**Running the tests**

1. Open the terminal and run command _npm run cy:open_
2. The cypress launchpad will open with two options : E2E Testing and Component Testing. Select E2E testing.
3. Select the browser and click on Start E2E testing.
4. Select the spec file which you want to run, in this case select eg.cy.js.
5. Test runner will open and tests will start executing
6. Command log - The left-hand side of the Test Runner is a visual representation of the test suite.
7. Once tests are finished you can timetravel in the Command log and check what the state of the application in each step.

**Generating Reports**

1. Project is integrated with Mochawesome report.
2. To generate report the tests should be ran through CLI _npm run cy:report_
3. Once the run is finished, the html file will be generated inside mochawesome report folder in this format [status]\_[datetime]-[name]-report. For reference :- pass_2024-07-15T193955+0530-eg-report
