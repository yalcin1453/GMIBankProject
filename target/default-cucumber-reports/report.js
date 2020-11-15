<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US002_AC4.feature");
formatter.feature({
  "name": "GMIBank Registration Functionality",
  "description": "  As a user, I should not be able to register with invalid credentials.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AC_004"
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/UiFeatures/Us08.feature");
formatter.feature({
  "name": "Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Fill current password \"\u003ccurrentpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user Fill New password with credentials \"\u003cnewpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user Fill confirmation New password with credentials \"\u003cconfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the password strength",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.examples({
  "name": "Users Admin User Customer Manager",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currentpassword",
        "newpassword",
        "confirmpassword"
      ]
    },
    {
      "cells": [
        "Manager123",
        "Manager123",
        "Manager123"
      ]
    },
    {
      "cells": [
        "Manager123",
        "MANAGEr",
        "MANAGEr"
      ]
    },
    {
      "cells": [
        "Manager123",
        "Manager",
        "Manager"
      ]
    },
    {
      "cells": [
        "Manager123",
        "Mngr1",
        "Mngr1"
      ]
    },
    {
      "cells": [
        "Manager123",
        "Mngr1!",
        "Mngr1!"
      ]
    },
    {
      "cells": [
        "Manager123",
        "Manager12!",
        "Manager12!"
      ]
    },
    {
      "cells": [
        "Manager123",
        "Manager123!",
        "Manager123!"
      ]
>>>>>>> master
    }
  ]
});
formatter.background({
<<<<<<< HEAD
  "name": "",
=======
  "name": "Login page should accessible with valid credentials",
>>>>>>> master
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "User is on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002_TC2.userIsOnTheRegistrationPage()"
=======
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_is_on_homepage()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
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
=======
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_login_icon()"
});
formatter.result({
  "error_message": "java.lang.NoSuchFieldError: loginIcon\r\n\tat stepdefinitions.TC001.user_click_on_login_icon(TC001.java:29)\r\n\tat ✽.user click on login icon(file:///C:/Users/fatih/IdeaProjects/com.GMIBankProject/src/test/resources/UiFeatures/Us08.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on signin",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters username \"manager12\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password \"Manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on siginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_siginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on mainpage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_is_on_mainpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill New password with credentials \"Manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill confirmation New password with credentials \"Manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_confirmation_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the password strength",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Us_08.verify_the_password_strength()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Login page should accessible with valid credentials",
>>>>>>> master
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "User is on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002_TC2.userIsOnTheRegistrationPage()"
=======
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_is_on_homepage()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
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
=======
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_login_icon()"
});
formatter.result({
  "error_message": "java.lang.NoSuchFieldError: loginIcon\r\n\tat stepdefinitions.TC001.user_click_on_login_icon(TC001.java:29)\r\n\tat ✽.user click on login icon(file:///C:/Users/fatih/IdeaProjects/com.GMIBankProject/src/test/resources/UiFeatures/Us08.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on signin",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters username \"manager12\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password \"Manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on siginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_siginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on mainpage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_is_on_mainpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill New password with credentials \"MANAGEr\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill confirmation New password with credentials \"MANAGEr\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_confirmation_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the password strength",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Us_08.verify_the_password_strength()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_click_on_save_button()"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.background({
<<<<<<< HEAD
  "name": "",
=======
  "name": "Login page should accessible with valid credentials",
>>>>>>> master
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "User is on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002_TC2.userIsOnTheRegistrationPage()"
=======
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_is_on_homepage()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
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
=======
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_login_icon()"
});
formatter.result({
  "error_message": "java.lang.NoSuchFieldError: loginIcon\r\n\tat stepdefinitions.TC001.user_click_on_login_icon(TC001.java:29)\r\n\tat ✽.user click on login icon(file:///C:/Users/fatih/IdeaProjects/com.GMIBankProject/src/test/resources/UiFeatures/Us08.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on signin",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters username \"manager12\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password \"Manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on siginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_siginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on mainpage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_is_on_mainpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill New password with credentials \"Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill confirmation New password with credentials \"Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_confirmation_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the password strength",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Us_08.verify_the_password_strength()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Login page should accessible with valid credentials",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_is_on_homepage()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
=======
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_login_icon()"
});
formatter.result({
  "error_message": "java.lang.NoSuchFieldError: loginIcon\r\n\tat stepdefinitions.TC001.user_click_on_login_icon(TC001.java:29)\r\n\tat ✽.user click on login icon(file:///C:/Users/fatih/IdeaProjects/com.GMIBankProject/src/test/resources/UiFeatures/Us08.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on signin",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters username \"manager12\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password \"Manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on siginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_siginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on mainpage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_is_on_mainpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill New password with credentials \"Mngr1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill confirmation New password with credentials \"Mngr1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_confirmation_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the password strength",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Us_08.verify_the_password_strength()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Login page should accessible with valid credentials",
  "description": "",
  "keyword": "Background"
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
  "error_message": "java.lang.NoSuchFieldError: loginIcon\r\n\tat stepdefinitions.TC001.user_click_on_login_icon(TC001.java:29)\r\n\tat ✽.user click on login icon(file:///C:/Users/fatih/IdeaProjects/com.GMIBankProject/src/test/resources/UiFeatures/Us08.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on signin",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters username \"manager12\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password \"Manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on siginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_siginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on mainpage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_is_on_mainpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill New password with credentials \"Mngr1!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill confirmation New password with credentials \"Mngr1!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_confirmation_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the password strength",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Us_08.verify_the_password_strength()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Login page should accessible with valid credentials",
  "description": "",
  "keyword": "Background"
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
  "error_message": "java.lang.NoSuchFieldError: loginIcon\r\n\tat stepdefinitions.TC001.user_click_on_login_icon(TC001.java:29)\r\n\tat ✽.user click on login icon(file:///C:/Users/fatih/IdeaProjects/com.GMIBankProject/src/test/resources/UiFeatures/Us08.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on signin",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters username \"manager12\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password \"Manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on siginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_siginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on mainpage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_is_on_mainpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill New password with credentials \"Manager12!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill confirmation New password with credentials \"Manager12!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_confirmation_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the password strength",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Us_08.verify_the_password_strength()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Login page should accessible with valid credentials",
  "description": "",
  "keyword": "Background"
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
  "error_message": "java.lang.NoSuchFieldError: loginIcon\r\n\tat stepdefinitions.TC001.user_click_on_login_icon(TC001.java:29)\r\n\tat ✽.user click on login icon(file:///C:/Users/fatih/IdeaProjects/com.GMIBankProject/src/test/resources/UiFeatures/Us08.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on signin",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters username \"manager12\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password \"Manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on siginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_siginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on mainpage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_is_on_mainpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill New password with credentials \"Manager123!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Fill confirmation New password with credentials \"Manager123!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_confirmation_New_password_with_credentials(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the password strength",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Us_08.verify_the_password_strength()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
>>>>>>> master
});