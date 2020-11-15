$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/uiFeatures/TC_001.feature");
formatter.feature({
  "name": "New User Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Register with valid credentials and validate the success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_001"
    },
    {
      "name": "@Orhan"
    }
  ]
});
formatter.step({
  "name": "User is on the GMI bank page",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates to new registration page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters a valid \u003cSSN\u003e into SSN text box",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a valid \u003cfirstname\u003e into firstname text box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters a valid \u003clastname\u003e into lastname text box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters a valid \u003caddress\u003e into address text box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters a valid \u003cphone number\u003e into phone number text box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters a valid \u003cusername\u003e into username text box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters a valid \u003cemail\u003e into email text box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters a valid \u003cpassword\u003e into password text box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters a valid \u003cconfirm password\u003e into confirm password text box",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on register button",
  "keyword": "And "
});
formatter.step({
  "name": "User validates the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "firstname",
        "lastname",
        "address",
        "phone number",
        "username",
        "email",
        "password",
        "confirm password"
      ]
    },
    {
      "cells": [
        "789-22-6750",
        "John",
        "Apple",
        "428 Los Altos Way, Altamonte Springs, FL, 32714",
        "407-456-3215",
        "hulk",
        "jyyykk@outlook.com",
        "1234A.",
        "1234A."
      ]
    },
    {
      "cells": [
        "789-22-6750",
        "John",
        "Apple",
        "428 Los Altos Way, Altamonte Springs, FL, 32714",
        "407-456-3215",
        "345",
        "jyyykk@outlook.com",
        "1234A.",
        "1234A."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register with valid credentials and validate the success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_001"
    },
    {
      "name": "@Orhan"
    }
  ]
});
formatter.step({
  "name": "User is on the GMI bank page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TC_001.navigateToGMIWebsite()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KDHLI5B\u0027, ip: \u0027192.168.1.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_272\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\demir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52874}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5ba1afab07a8b67c077f3bf6fc53e099\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat utilities.Driver.getDriver(Driver.java:58)\r\n\tat stepdefinitions.TC_001.navigateToGMIWebsite(TC_001.java:21)\r\n\tat ✽.User is on the GMI bank page(file:///C:/Users/demir/GMIBankProject/src/test/resources/uiFeatures/TC_001.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User navigates to new registration page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.navigateToRegistrationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 789-22-6750 into SSN text box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid John into firstname text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid Apple into lastname text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 428 Los Altos Way, Altamonte Springs, FL, 32714 into address text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 407-456-3215 into phone number text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid hulk into username text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid jyyykk@outlook.com into email text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 1234A. into password text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 1234A. into confirm password text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on register button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.clickOnRegisterBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validates the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.TC_001.validateSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Register with valid credentials and validate the success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_001"
    },
    {
      "name": "@Orhan"
    }
  ]
});
formatter.step({
  "name": "User is on the GMI bank page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TC_001.navigateToGMIWebsite()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.TC_001\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KDHLI5B\u0027, ip: \u0027192.168.1.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_272\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\demir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52874}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5ba1afab07a8b67c077f3bf6fc53e099\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat utilities.Driver.getDriver(Driver.java:58)\r\n\tat pages.US_001.\u003cinit\u003e(US_001.java:15)\r\n\tat stepdefinitions.TC_001.\u003cinit\u003e(TC_001.java:17)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User navigates to new registration page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.navigateToRegistrationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 789-22-6750 into SSN text box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid John into firstname text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid Apple into lastname text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 428 Los Altos Way, Altamonte Springs, FL, 32714 into address text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 407-456-3215 into phone number text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 345 into username text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid jyyykk@outlook.com into email text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 1234A. into password text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a valid 1234A. into confirm password text box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.enterValidCredentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on register button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TC_001.clickOnRegisterBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validates the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.TC_001.validateSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
});