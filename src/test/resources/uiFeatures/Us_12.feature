

Feature:An Employee can manage Customer
  Background:
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
      |group8employee|group8employee|

  Scenario:An Employee can create customer with valid credentials
    Given user at customer create page
    When user enter "152-85-8958" number
    And user enter firstname "ahmet"
    And user enter lastname "mehmet"
    And user enter middle "am"
    And user enter email "mehmet@gmail.com"
    And user enter phone "610-202-3339"
    And user enter mobile "610-202-3338"
    And user enter zipcode "19355"
    And user enter address "152 sproul rd"
    And user enter city "Malvern"
    And user enter ssn "152-85-8958"
    And user enter create date "11-13-2020"
    And user enter country "USA"
    And user enter state "Pennsylvania"
    And user enter user "mehmet123"

    And user account scrolldown
    And user enter click checkbox checkin account
    And user click save button

