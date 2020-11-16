@US003
Feature: Secure and high level password usage in registration page

  As as user, I should be able to register with secure and high level password

  Background:
    Given User is on the registration page

  Scenario:
    When User enters a password with at least one lower case char
    Then User should see the password level chart change

  Scenario:
    When User enters a password with at least one upper case char
    Then User should see the password level chart change

  Scenario:
    When User enters a password with at least one digit
    Then User should see the password level chart change

  Scenario:
    When User enters a password with at least one special char
    Then User should see the password level chart change

  Scenario:
    When User enters a password with at least seven chars
    Then User should see the password level chart change

