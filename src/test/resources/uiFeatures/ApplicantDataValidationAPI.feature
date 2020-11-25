@US023
Feature: Applicants' data validation
  As a user, system should allow to read all Applicants using api end point
  "https://www.gmibank.com/api/tp-account-registrations"""

  Background: Api end point is being set in response
    Given user provides api end point and set the response using "https://www.gmibank.com/api/tp-account-registrations"

    Scenario:Validate all applicants' information
      Given User manipulates all the applicants data
      And User sets the data in correspondent file
      Then User validates all the data

  #  "System should allow to read all Applicants using api end point
  #  ""https://www.gmibank.com/api/tp-account-registrations"""

  #  Read all countries you created and validate them from your data set
  #  Read all customers you created and validate them 1 by 1


