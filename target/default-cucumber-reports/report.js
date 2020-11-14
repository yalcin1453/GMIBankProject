$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US002_AC4.feature");
formatter.feature({
  "name": "GMIBank Registration Functionality",
  "description": "  As a user, I should not be able to register with invalid credentials.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AC_004"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002_TC2.userIsOnTheRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AC_004"
    },
    {
      "name": "@TC0013"
    }
  ]
});
formatter.step({
  "name": "User enters an email which contains @ sign and .com extension",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US002_TC4.userEntersAnEmailWhichContainsSignAndComExtension()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shouldn\u0027t see email invalid message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002_TC4.userShouldnTSeeEmailInvalidMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002_TC2.userIsOnTheRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AC_004"
    },
    {
      "name": "@TC0014"
    }
  ]
});
formatter.step({
  "name": "User enters an email which doesn\u0027t  contain @ sign  and .com extension",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US002_TC4.userEntersAnEmailWhichDoesnTContainSignAndComExtension()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see email invalid message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002_TC4.userShouldSeeEmailInvalidMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002_TC2.userIsOnTheRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AC_004"
    },
    {
      "name": "@TC0015"
    }
  ]
});
formatter.step({
  "name": "User enters an email which contains @ sign but doesn’t contain .com extension",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should see email invalid message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002_TC4.userShouldSeeEmailInvalidMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002_TC2.userIsOnTheRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AC_004"
    },
    {
      "name": "@TC0016"
    }
  ]
});
formatter.step({
  "name": "User enters an email which doesn\u0027t contain @ sign, but contains .com extension",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US002_TC4.userEntersAnEmailWhichDoesnTContainSignButContainsComExtension()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see email invalid message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002_TC4.userShouldSeeEmailInvalidMessage()"
});
formatter.result({
  "status": "passed"
});
});