<<<<<<< HEAD
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_14.feature");
formatter.feature({
  "name": "User can manage accounts",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_14"
    }
  ]
});
formatter.background({
  "name": "User goes my operations dropdown and clicks the \"manage accounts\"",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_go_to_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type username and password than click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on \" My Operations \" dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_dropdown_menu(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"a\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027apple-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:8fd:cd3d:c619:6e13%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\n\tat stepdefinitions.US_14.user_click_on_dropdown_menu(US_14.java:28)\n\tat ✽.User click on \" My Operations \" dropdown menu(file:///Users/apple/IdeaProjects/MeetSizeProject/GMIBankProject/src/test/resources/features/US_14.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can not typed earlier,in the past,at the time of creation an account",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/uiFeatures/Us_12.feature");
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/uiFeatures/Us08.feature");
>>>>>>> ec4c0885fb0efe26de5109690357ab02dfbb90dd
formatter.feature({
  "name": "Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027currentPassword\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CR8OHCE6\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mert_\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56056}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cec7b1162b2c06ad11257f7c3699b712\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027currentPassword\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat stepdefinitions.Us_08.user_Fill_current_password(Us_08.java:21)\r\n\tat ✽.user Fill current password \"Manager123\"(file:///C:/Users/mert_/IdeaProjects/GMIBankProject/src/test/resources/uiFeatures/Us08.feature:14)\r\n",
  "status": "failed"
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
formatter.scenario({
<<<<<<< HEAD
  "name": "",
>>>>>>> abe877d2cc86f0bf83add191cc26a411e6c6e236
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@US_14"
    },
    {
      "name": "@TC_1"
    }
  ]
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on \"+Create a new Account\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_Click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the Create Date textbox and type the time of account creation",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_Click_on_the_Create_Date_textbox_and_type_the_time_of_account_creation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on the Closed Date textbox and type the time later than the time of account creation",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_the_Closed_Date_textbox_and_type_the_time_later_than_the_time_of_account_creation()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "User goes my operations dropdown and clicks the \"manage accounts\"",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_go_to_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type username and password than click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027apple-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:8fd:cd3d:c619:6e13%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/dl/rf5qc1mj2jq...}, goog:chromeOptions: {debuggerAddress: localhost:58705}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b54581b7265fb8e1733cf2e8a8395e06\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\n\tat stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button(US_14.java:21)\n\tat ✽.User type username and password than click on sign in button(file:///Users/apple/IdeaProjects/MeetSizeProject/GMIBankProject/src/test/resources/features/US_14.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on \" My Operations \" dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_dropdown_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can not typed earlier,in the past,at the time of creation an account",
=======
  "name": "US_008 Password segment on Homepage should be editable",
>>>>>>> ec4c0885fb0efe26de5109690357ab02dfbb90dd
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_14"
    },
    {
      "name": "@TC_2"
=======
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//input[@id\u003d\u0027currentPassword\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CR8OHCE6\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat stepdefinitions.Us_08.user_Fill_current_password(Us_08.java:21)\r\n\tat ✽.user Fill current password \"Manager123\"(file:///C:/Users/mert_/IdeaProjects/GMIBankProject/src/test/resources/uiFeatures/Us08.feature:14)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.Us_08\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CR8OHCE6\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mert_\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56056}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cec7b1162b2c06ad11257f7c3699b712\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat utilities.Driver.getDriver(Driver.java:58)\r\n\tat pages.Us08_Page.\u003cinit\u003e(Us08_Page.java:9)\r\n\tat stepdefinitions.Us_08.\u003cinit\u003e(Us_08.java:10)\r\n\t... 38 more\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.Us_08\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CR8OHCE6\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mert_\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56056}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cec7b1162b2c06ad11257f7c3699b712\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat utilities.Driver.getDriver(Driver.java:58)\r\n\tat pages.Us08_Page.\u003cinit\u003e(Us08_Page.java:9)\r\n\tat stepdefinitions.Us_08.\u003cinit\u003e(Us_08.java:10)\r\n\t... 38 more\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.Us_08\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CR8OHCE6\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mert_\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56056}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cec7b1162b2c06ad11257f7c3699b712\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat utilities.Driver.getDriver(Driver.java:58)\r\n\tat pages.Us08_Page.\u003cinit\u003e(Us08_Page.java:9)\r\n\tat stepdefinitions.Us_08.\u003cinit\u003e(Us_08.java:10)\r\n\t... 38 more\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.Us_08\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CR8OHCE6\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mert_\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56056}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cec7b1162b2c06ad11257f7c3699b712\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat utilities.Driver.getDriver(Driver.java:58)\r\n\tat pages.Us08_Page.\u003cinit\u003e(Us08_Page.java:9)\r\n\tat stepdefinitions.Us_08.\u003cinit\u003e(Us_08.java:10)\r\n\t... 38 more\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user Fill current password \"Manager123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Us_08.user_Fill_current_password(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.Us_08\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CR8OHCE6\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mert_\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56056}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cec7b1162b2c06ad11257f7c3699b712\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat utilities.Driver.getDriver(Driver.java:58)\r\n\tat pages.Us08_Page.\u003cinit\u003e(Us08_Page.java:9)\r\n\tat stepdefinitions.Us_08.\u003cinit\u003e(Us_08.java:10)\r\n\t... 38 more\r\n",
  "status": "failed"
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
>>>>>>> abe877d2cc86f0bf83add191cc26a411e6c6e236
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on \"+Create a new Account\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_Click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on the Create Date textbox and type the date earlier at the time of account creation",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_the_Create_Date_textbox_and_type_the_date_earlier_at_the_time_of_account_creation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on the Closed Date textbox and type the time later than the time of account creation",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_the_Closed_Date_textbox_and_type_the_time_later_than_the_time_of_account_creation()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "User goes my operations dropdown and clicks the \"manage accounts\"",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_go_to_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type username and password than click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027apple-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:8fd:cd3d:c619:6e13%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/dl/rf5qc1mj2jq...}, goog:chromeOptions: {debuggerAddress: localhost:58705}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b54581b7265fb8e1733cf2e8a8395e06\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\n\tat stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button(US_14.java:21)\n\tat ✽.User type username and password than click on sign in button(file:///Users/apple/IdeaProjects/MeetSizeProject/GMIBankProject/src/test/resources/features/US_14.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on \" My Operations \" dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_dropdown_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User writes the date as month,day,year,hour and minute",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_14"
    },
    {
      "name": "@TC_3"
    }
  ]
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on \"+Create a new Account\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_Click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the Create Date textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.click_on_the_Create_Date_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "type date as month,day,year,hour and minute",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.type_date_as_month_day_year_hour_and_minute()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "User goes my operations dropdown and clicks the \"manage accounts\"",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_go_to_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type username and password than click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027apple-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:8fd:cd3d:c619:6e13%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/dl/rf5qc1mj2jq...}, goog:chromeOptions: {debuggerAddress: localhost:58705}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b54581b7265fb8e1733cf2e8a8395e06\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\n\tat stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button(US_14.java:21)\n\tat ✽.User type username and password than click on sign in button(file:///Users/apple/IdeaProjects/MeetSizeProject/GMIBankProject/src/test/resources/features/US_14.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on \" My Operations \" dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_dropdown_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User writes the date as month,day,year,hour and minute",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_14"
    },
    {
      "name": "@TC_4"
    }
  ]
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on \"+Create a new Account\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_Click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User writes the date as month,day,year",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_writes_the_date_as_month_day_year()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the Create Date textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.click_on_the_Create_Date_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "type date as month,day,year",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.type_date_as_month_day_year()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "User goes my operations dropdown and clicks the \"manage accounts\"",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_go_to_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type username and password than click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027password\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027apple-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:8fd:cd3d:c619:6e13%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/dl/rf5qc1mj2jq...}, goog:chromeOptions: {debuggerAddress: localhost:58705}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b54581b7265fb8e1733cf2e8a8395e06\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027password\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\n\tat stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button(US_14.java:22)\n\tat ✽.User type username and password than click on sign in button(file:///Users/apple/IdeaProjects/MeetSizeProject/GMIBankProject/src/test/resources/features/US_14.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on \" My Operations \" dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_dropdown_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can choose a user from the registration and it cannot be blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_14"
    },
    {
      "name": "@TC_5"
=======
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
>>>>>>> abe877d2cc86f0bf83add191cc26a411e6c6e236
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "User Click on \"Manage Customer\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_Click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on \"+Create a new Custumer\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the \"SSN\" textbox and type a valid SSN number and Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.click_on_the_textbox_and_type_a_valid_SSN_number_and_Click_on_the_Search_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User textbox should not be blank",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_textbox_should_not_be_blank()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "User goes my operations dropdown and clicks the \"manage accounts\"",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_go_to_the_sign_in_page()"
=======
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_is_on_homepage()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.TC001\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CR8OHCE6\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mert_\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56056}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cec7b1162b2c06ad11257f7c3699b712\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat utilities.Driver.getDriver(Driver.java:58)\r\n\tat pages.LoginPage.\u003cinit\u003e(LoginPage.java:13)\r\n\tat stepdefinitions.TC001.\u003cinit\u003e(TC001.java:16)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_click_on_login_icon()"
>>>>>>> abe877d2cc86f0bf83add191cc26a411e6c6e236
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< HEAD
  "name": "User type username and password than click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027apple-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:8fd:cd3d:c619:6e13%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/dl/rf5qc1mj2jq...}, goog:chromeOptions: {debuggerAddress: localhost:58705}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b54581b7265fb8e1733cf2e8a8395e06\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\n\tat stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button(US_14.java:21)\n\tat ✽.User type username and password than click on sign in button(file:///Users/apple/IdeaProjects/MeetSizeProject/GMIBankProject/src/test/resources/features/US_14.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on \" My Operations \" dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_dropdown_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There user can choose an account created on manage accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_14"
    },
    {
      "name": "@TC_6"
    }
  ]
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click an ID item to choose an account created on manage accounts",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.click_an_ID_item_to_choose_an_account_created_on_manage_accounts()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "User goes my operations dropdown and clicks the \"manage accounts\"",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_go_to_the_sign_in_page()"
=======
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
  "name": "user enters username \"Admin3\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC001.user_enters_username(java.lang.String)"
>>>>>>> abe877d2cc86f0bf83add191cc26a411e6c6e236
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< HEAD
  "name": "User type username and password than click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027apple-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:8fd:cd3d:c619:6e13%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/dl/rf5qc1mj2jq...}, goog:chromeOptions: {debuggerAddress: localhost:58705}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b54581b7265fb8e1733cf2e8a8395e06\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\n\tat stepdefinitions.US_14.user_type_username_and_password_than_click_on_sign_in_button(US_14.java:21)\n\tat ✽.User type username and password than click on sign in button(file:///Users/apple/IdeaProjects/MeetSizeProject/GMIBankProject/src/test/resources/features/US_14.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on \" My Operations \" dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_dropdown_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on \"Manage Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can select Zelle Enrolled optionally and save it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_14"
    },
    {
      "name": "@TC_7"
    }
  ]
});
formatter.step({
  "name": "User Click on \"Manage Customer\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_Click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on \"+Create a new Custumer\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_Click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on the \"SSN\" textbox and type a valid SSN number and Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_on_the_textbox_and_type_a_valid_SSN_number_and_Click_on_the_Search_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click in Zelle Enrolled radio button ,click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_14.user_click_in_Zelle_Enrolled_radio_button_click_save_button()"
});
formatter.result({
  "status": "skipped"
=======
  "name": "user enters password \"TechAdmin3\"",
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
  "name": "verify user is loged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.TC001.verify_user_is_loged_in()"
});
formatter.result({
<<<<<<< HEAD
  "status": "passed"
>>>>>>> abe877d2cc86f0bf83add191cc26a411e6c6e236
=======
  "status": "skipped"
>>>>>>> ec4c0885fb0efe26de5109690357ab02dfbb90dd
});
});