Feature:US_06 user info segment should be editable on Homepage

  Background: user enters gmibank homepage then reaches sign in link and clicks user info

    Given user is on homepage
    And user click on login icon
    When user click on signin
    And user enters username "group8employee"
    And user enters password "group8employee"
    And user click on siginButton


    And user clicks on the username on the top right
    Then user clicks on user info link


  Scenario: TC_0601 user settings test
    Given "group8employee" must be entered as first name
    And "group8employee" must be entered as last name
    And "group8employee@gmail.com" must be entered as email
    And "English" must be selected as language



  Scenario Outline: TC_002 There should be 2 languages available
    Given user select "<options>" language

    Examples:
      | options |
      | 0  |
      | 1  |



  Scenario: TC_0603 update firstname
    Given user clears first name textbox
    And user updates first name as "YILMAZ"




  Scenario: TC_0604 update lastname
    Given user clears last name textbox
    And User updates last name as "YORULMAZ"




  Scenario: TC_0605 positive test update email
    Given user clears email textbox
    Given user uses the "@" sign when they update their email address
    And user uses the new ".com" sign when they update their email address




  Scenario: TC_0606 negative test update email
    Given user don't uses the @ sign when they update their email address
    And user don't uses the .com sign when they update their email address
