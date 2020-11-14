Feature: New User Registration

  @US_001   @Orhan
  Scenario Outline: Register with valid credentials and validate the success
    Given User is on the GMI bank page
    And User navigates to new registration page
    When User enters a valid <SSN> into SSN text box
    And User enters a valid <firstname> into firstname text box
    And User enters a valid <lastname> into lastname text box
    And User enters a valid <address> into address text box
    And User enters a valid <phone number> into phone number text box
    And User enters a valid <username> into username text box
    And User enters a valid <email> into email text box
    And User enters a valid <password> into password text box
    And User enters a valid <confirm password> into confirm password text box
    And User clicks on register button
    Then User validates the success message

    Examples:
    | SSN            | firstname | lastname| address                                         | phone number | username | email                 | password | confirm password |
    |  789-22-6750   | John      | Apple   | 428 Los Altos Way, Altamonte Springs, FL, 32714 | 407-456-3215 | hulk     | jyyykk@outlook.com     | 1234A.   | 1234A.           |
    |  789-22-6750  | John       | Apple   | 428 Los Altos Way, Altamonte Springs, FL, 32714 | 407-456-3215 | 345      | jyyykk@outlook.com     | 1234A.   | 1234A.           |