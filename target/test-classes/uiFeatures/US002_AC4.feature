@AC_004
Feature: GMIBank Registration Functionality

  As a user, I should not be able to register with invalid credentials.

  Background:
    Given User is on the registration page

  @TC0013
  Scenario:
    When User enters an email which contains @ sign and .com extension
    Then User shouldn't see email invalid message

  @TC0014
  Scenario:
    When User enters an email which doesn't  contain @ sign  and .com extension
    Then User should see email invalid message

  @TC0015
  Scenario:
    When User enters an email which contains @ sign but doesn’t contain .com extension
    Then User should see email invalid message

  @TC0016
  Scenario:
    When User enters an email which doesn't contain @ sign, but contains .com extension
    Then User should see email invalid message









