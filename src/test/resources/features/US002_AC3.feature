@AC_003
Feature: GMIBank Registration Functionality

  As a user, I should not be able to register with invalid credentials.

  Background:
    Given User is on the registration page

  @TC008
  Scenario:
    When User enters mobile phone number and mobile phone number has -
    Then User shouldn't see invalid mobile phone number message

  @TC009
  Scenario:
    When User enters mobile phone number and mobile phone number contains a char
    Then User should see invalid mobile phone number message

  @TC0010
  Scenario:
    When User enters mobile phone number and mobile phone number contains space
    Then User should see invalid mobile phone number message

  @TC0011
  Scenario:
    When User enters mobile phone number and mobile phone number contains special character
    Then User should see invalid mobile phone number message

  @TC0012
  Scenario:
    When User enters mobile phone number and mobile phone number contains punctuation
    Then User should see invalid mobile phone number message







