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
    Given user clicks on administrationButton
    And user clicks on userManagement


  Scenario Outline:Admin can activate role
    And user click on activate button on user "<profile>"
    Then verify user role activation

    Examples:User Profiles
      | profile       |
      | ROLE_USER     |
      | ROLE_ADMIN    |
      | ROLE_MANAGER  |
      | ROLE_EMPLOYEE |

    Scenario: Admin can view all user info
      And admin click on view button "ROLE_USER"
      Then verify admin is on view page

  Scenario: Admin can view all user info
    And admin click on view button "ROLE_ADMIN"
    Then verify admin is on view page

  Scenario: Admin can view all user info
    And admin click on view button "ROLE_MANAGER"
    Then verify admin is on view page

  Scenario: Admin can view all user info
    And admin click on view button "ROLE_EMPLOYEE"
    Then verify admin is on view page

    Scenario: Admin can edit all user info
      And admin click on edit button "ROLE_EMPLOYEE"
      And Admin change all user info
      Then verify user role activation

  Scenario: Admin can edit all user info
    And admin click on edit button "ROLE_MANAGER"
    And Admin change all user info
    Then verify user role activation

  Scenario: Admin can edit all user info
    And admin click on edit button "ROLE_USER"
    And Admin change all user info
    Then verify user role activation

  Scenario: Admin can edit all user info
    And admin click on edit button "ROLE_ADMIN"
    And Admin change all user info
    Then verify user role activation





