@US_14
Feature: User can manage accounts
  Background: User goes my operations dropdown and clicks the "manage accounts"
    Given User go to the sign in page
    When User type username and password than click on sign in button
    And User click on " My Operations " dropdown menu
    Then User click on "Manage Accounts"


  @TC_1
  Scenario: User can not typed earlier,in the past,at the time of creation an account
    Given User click on "Manage Accounts"
    When User Click on "+Create a new Account"
    And User Click on the Create Date textbox and type the time of account creation
    Then User click on the Closed Date textbox and type the time later than the time of account creation
  @TC_2
  Scenario: User can not typed earlier,in the past,at the time of creation an account
    Given User click on "Manage Accounts"
    When User Click on "+Create a new Account"
    And User click on the Create Date textbox and type the date earlier at the time of account creation
    Then User click on the Closed Date textbox and type the time later than the time of account creation

  @TC_3
  Scenario:User writes the date as month,day,year,hour and minute
    Given User click on "Manage Accounts"
    When User Click on "+Create a new Account"
    And Click on the Create Date textbox
    Then type date as month,day,year,hour and minute
  @TC_4
  Scenario:User writes the date as month,day,year,hour and minute
    Given User click on "Manage Accounts"
    When User Click on "+Create a new Account"
    And User writes the date as month,day,year
    And Click on the Create Date textbox
    Then type date as month,day,year

  @TC_5
  Scenario: User can choose a user from the registration and it cannot be blank
    Given User Click on "Manage Customer"
    And Click on "+Create a new Custumer"
    And Click on the "SSN" textbox and type a valid SSN number and Click on the Search button
    Then User textbox should not be blank

  @TC_6
  Scenario:There user can choose an account created on manage accounts
    Given User click on "Manage Accounts"
    Then Click an ID item to choose an account created on manage accounts

  @TC_7
  Scenario:User can select Zelle Enrolled optionally and save it
    Given User Click on "Manage Customer"
    When User Click on "+Create a new Custumer"
    And User click on the "SSN" textbox and type a valid SSN number and Click on the Search button
    Then User click in Zelle Enrolled radio button ,click save button

