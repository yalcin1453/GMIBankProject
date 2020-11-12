$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TC100.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.uri("file:src/test/resources/features/US002_AC1.feature");
formatter.feature({
  "name": "GMIBank Registration Functionality",
  "description": "  As a user, I should not be able to register with invalid credentials.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_001"
    }
  ]
});
formatter.scenario({
  "name": "Login page navigation to Registration page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_001"
    },
    {
      "name": "@background"
    }
  ]
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on user icon link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userClickOnUserIconLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on register link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userClickOnRegisterLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Registration page is opened",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.registrationPageIsOpened()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User doesn\u0027t leave any field blank on the registration form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_001"
    },
    {
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "name": "user enters a valid SSN",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userEntersAValidSSN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid FirstName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userEntersAValidFirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid LastName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userEntersAValidLastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid Address",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userEntersAValidAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid Mobile Phone Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userEntersAValidMobilePhoneNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userEntersAValidUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid Email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userEntersAValidEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userEntersAValidPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the same password for confirmation password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userEntersTheSamePasswordForConfirmationPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on register button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userClicksOnRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1.userShouldSeeASuccessMessage()"
});
formatter.result({
  "status": "passed"
});
});