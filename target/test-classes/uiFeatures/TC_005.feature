Feature: Login page should not be accessible with invalid credentials

  Background:
    Given user navigates to GMI bank application
    And click on sign button

  Scenario: Login with invalid username
    Given User cannot login with invalid username validating the error message


  Scenario: Login with invalid password
    And User cannot login with invalid password validating the error message


  Scenario: invalid username and password
    And User cannot login with invalid username and password validating the error message

  Scenario: given an option to reset their password
    And User with invalid credentials should be given an option to reset their password

  Scenario: given the option to navigate to registration page
        And User should be given the option to navigate to registration page if they did not register yet

  Scenario: Login with invalid credentials
    When I entered invalid UserName and Password and see ErrorMessage
      | UserName | Password   | ErrorMessage        |
      | Admin    | group8customer   | Invalid credentials |
      | group8admin     | Techpro123! | Invalid credentials |
    |     yanliUsername        |       yanlisPassword      |      Invalid credentials               |
