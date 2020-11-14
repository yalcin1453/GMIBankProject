$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US002_AC1.feature");
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
formatter.scenarioOutline({
  "name": "User doesn\u0027t leave any field blank on the registration form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC001Negative"
    }
  ]
});
formatter.step({
  "name": "user is on the registration page",
  "keyword": "Given "
});
formatter.step({
  "name": "user leaves \u003cfield\u003e field blank",
  "keyword": "When "
});
formatter.step({
  "name": "user gets your \u003cfield\u003e is required message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "field"
      ]
    },
    {
      "cells": [
        "SSN"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User doesn\u0027t leave any field blank on the registration form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_001"
    },
    {
      "name": "@TC001Negative"
    }
  ]
});
formatter.step({
  "name": "user is on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1_Negative.userIsOnTheRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user leaves SSN field blank",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1_Negative.user_leaves_SSN_field_blank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets your SSN is required message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002_TC1_Negative.user_gets_your_SSN_is_required_message()"
});
formatter.result({
  "status": "passed"
});
});