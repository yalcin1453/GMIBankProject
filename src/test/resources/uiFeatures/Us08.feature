Feature: Password segment on Homepage should be editable

  Scenario:  Login
    When user login with valid credentials

  Scenario Outline: US_008 Password segment on Homepage should be editable
    When user is on mainpage
    When user Fill current password "<currentpassword>"
    And user Fill New password with credentials "<newpassword>"
    And user Fill confirmation New password with credentials "<confirmpassword>"
    Then verify the password strength
    And user click on save button


    Examples:Users Admin User Customer Manager
      |currentpassword |newpassword| confirmpassword |
      |Manager12       |Manager12  | Manager12       |
      |Manager12       |MANAGEr    | MANAGEr         |
      |Manager12       |Manager    | Manager         |
      |Manager12       |Mngr1      | Mngr1           |
      |Manager12       |Mngr1!     | Mngr1!          |
      |Manager12       |Manager12! | Manager12!      |
      |Manager12       |Manager123!| Manager123!     |

