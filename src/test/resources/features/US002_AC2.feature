@AC_002
Feature: GMIBank Registration Functionality

  As a user, I should not be able to register with invalid credentials.

  Background:
    Given User is on the registration page

  @TC003
  Scenario:
    When User enters an SSN number and SSN number has -
    Then User shouldn't see invalid SSN message

  @TC004
  Scenario:
    When User enters an SSN number and SSN number contains a char
    Then User should see invalid SSN message

  @TC005
  Scenario:
    When User enters an SSN number and SSN number contains space
    Then User should see invalid SSN message

  @TC006
  Scenario:
    When User enters an SSN number and SSN number contains special character
    Then User should see invalid SSN message

  @TC007
  Scenario:
    When User enters an SSN number and SSN number contains punctuation
    Then User should see invalid SSN message




