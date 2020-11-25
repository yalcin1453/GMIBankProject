@us004
Feature: us004_login
  Scenario Outline: US_004 TC001 Login page should accessible with valid credentials
    Given user is on homepage
    And user click on login icon
    When user click on signin
    And user enters username "<username>"
    And user enters password "<password>"
    And user click on siginButton
    Then verify user is loged in

    Examples:Users Admin User Customer Manager
      | username | password |
      |Admin3|TechAdmin3|

  Scenario: There should be an option to cancel login
    Given user is on homepage
    And user click on login icon
    When user click on signin
    Then verify cancel button displayed