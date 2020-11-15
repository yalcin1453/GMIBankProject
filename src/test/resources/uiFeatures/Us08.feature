Feature: Password segment on Homepage should be editable
  Background: Login page should accessible with valid credentials
    Given user is on homepage
    And user click on login icon
    When user click on signin
    And user enters username "manager12"
    And user enters password "Manager123"
    And user click on siginButton
    When user is on mainpage
  Scenario Outline: US_008 Password segment on Homepage should be editable
    When user Fill current password "<currentpassword>"
    And user Fill New password with credentials "<newpassword>"
    And user Fill confirmation New password with credentials "<confirmpassword>"
    Then verify the password strength
    And user click on save button


    Examples:Users Admin User Customer Manager
      |currentpassword |newpassword| confirmpassword |
      |Manager123      |Manager123 | Manager123      |
      |Manager123      |MANAGEr    | MANAGEr         |
      |Manager123      |Manager    | Manager         |
      |Manager123      |Mngr1      | Mngr1           |
      |Manager123      |Mngr1!     | Mngr1!          |
      |Manager123      |Manager12! | Manager12!      |
      |Manager123      |Manager123!| Manager123!     |

