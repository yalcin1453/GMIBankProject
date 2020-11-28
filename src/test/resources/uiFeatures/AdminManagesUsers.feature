@us017
Feature: System Should Allow Admin to Manage Users
    Background: Login
    Given user is on homepage
    And user click on login icon
    When user click on signin
    And user enters username "Admin3"
    And user enters password "TechAdmin3"
    And user click on siginButton
    Then verify user is loged in

    Scenario Outline:Admin can activate role
        Given user clicks on administrationButton
        And user clicks on userManagement
        And user click on activate button on user "<profile>"
        Then verify user role activation

        Examples:User Profiles
            | profile |
            |ROLE_USER|
            |ROLE_ADMIN|
            |ROLE_MANAGER|
            |ROLE_EMPLOYEE|
