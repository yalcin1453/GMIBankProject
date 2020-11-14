@US_001
Feature: GMIBank Registration Functionality

  As a user, I should not be able to register with invalid credentials.

  @background
  Scenario: Login page navigation to Registration page
    Given User is on the login page
    When User click on user icon link
    Then User click on register link
    And Registration page is opened

  @TC001
  Scenario: User doesn't leave any field blank on the registration form

    And user enters a valid SSN
    And user enters a valid FirstName
    And user enters a valid LastName
    And user enters a valid Address
    And user enters a valid Mobile Phone Number
    And user enters a valid Username
    And user enters a valid Email
    And user enters a valid Password
    And user enters the same password for confirmation password
    Then user clicks on register button
    Then user should see a success message

  @TC002
  Scenario: User doesn't leave any field blank on the registration form






