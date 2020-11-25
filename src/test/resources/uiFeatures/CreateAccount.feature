Feature:user create account with valid credentials

  Background:Login to page
    Given user is on homepage
    And user click on login icon
    When user click on signin
    And user enters username "group8employee"
    And user enters password "group8employee"
    And user click on siginButton

    And user clicks my operations button
    When user clicks  manage accounts button
    And user clicks create new Account button

  Scenario: user should create account
    And user enters description "Commercial account"
    And user enters balance    "5000"
    And user selects account type  "SAVING"
    And user selects account status type "ACTIVE"
    And user selects employee "fatih"
    And user clicks save button
    Then verify account created at account page

  Scenario: User should not leave blank description box
    When user leave the blank description box
    And user click save button
    Then user get error message

  Scenario: user should not leave blank balance box
    When user leave blank balance box
    And user click save button
    Then user get balance error message

  Scenario:user should put only numbers at balance box
    When user enter  balance box "abc%66"
    And user click save button
    Then user get balance errormessage



