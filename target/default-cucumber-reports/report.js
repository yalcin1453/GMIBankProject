<<<<<<< HEAD
<<<<<<< HEAD
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TC_005.feature");
formatter.feature({
  "name": "Login page should not be accessible with invalid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
>>>>>>> master
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
    }
  ]
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
  "name": "user navigates to GMI bank application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on sign button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Login with invalid username",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User cannot login with invalid username validating the error message",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
=======
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
>>>>>>> master
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "user navigates to GMI bank application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on sign button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Login with invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User cannot login with invalid password validating the error message",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
=======
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
>>>>>>> master
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "user navigates to GMI bank application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on sign button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "invalid username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User cannot login with invalid username and password validating the error message",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
=======
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
>>>>>>> master
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "user navigates to GMI bank application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on sign button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "given an option to reset their password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User with invalid credentials should be given an option to reset their password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
=======
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
>>>>>>> master
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "user navigates to GMI bank application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on sign button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "given the option to navigate to registration page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should be given the option to navigate to registration page if they did not register yet",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
=======
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
>>>>>>> master
});
});
>>>>>>> master
