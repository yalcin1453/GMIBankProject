$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/uiFeatures/Us_12.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.uri("file:src/test/resources/uiFeatures/us004_login.feature");
formatter.feature({
  "name": "us004_login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "US_004 TC001 Login page should accessible with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.step({
  "name": "user click on signin",
  "keyword": "When "
});
formatter.step({
  "name": "user enters username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on siginButton",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is loged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "Users Admin User Customer Manager",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin3",
        "TechAdmin3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "US_004 TC001 Login page should accessible with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_login_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on signin",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"Admin3\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"TechAdmin3\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on siginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_siginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user is loged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.TC001.verify_user_is_loged_in()"
});
formatter.result({
  "status": "passed"
});
});