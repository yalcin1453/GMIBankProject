


Feature:user create account with valid credentials
  Scenario: user should create account
    Given user is on homepage
    And user click on login icon
    When user click on signin
    And user enters username "group8employee"
    And user enters password "group8employee"
    And user click on siginButton

    And user clicks my operations button
    When user clicks  manage accounts button
    And user clicks create new Account button
    And user enters description "Commercial account"
    And user enters balance    "5000"
    And user selects account type  "saving"
    And user selects account status type "active"
    And user selects employee "fatih"
    And user clicks save button
    Then verify account created at account page


