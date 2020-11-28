@US_29  @SmokeTest1
Feature: US_29 user tests create user page with database validation

  Background:
    Given user  connecting GMI database

  @TC_2901
  Scenario: TC_2901 All users' information must be obtained database and verified

    And user read all user data from database
    Then user validate all user data

  @TC_2902
  Scenario: TC_2902 All countries' info should be retrieved by database and validated

    And user read all countries infos from database
    Then user validate all countries infos

  @TC_2903
  Scenario: TC_2903 All states should related to USA should be retrieved by database and validated
    And  user read all states of related to USA from database
    Then  user validate all states of related to USA
