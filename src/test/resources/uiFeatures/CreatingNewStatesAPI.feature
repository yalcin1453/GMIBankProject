#"System should allow to create new states using api end point
#""https://www.gmibank.com/api/tp-states"" if not created already"	User can Just create each state 1 by 1

@US024
  Feature: Creating new states
  As a user, system should allow to create new states using "https://www.gmibank.com/api/tp-states"
  api end point if not created already

    Background: Api end point is being set in response
      Given User provides api end point and set the response using "https://www.gmibank.com/api/tp-states"

    Scenario:Create new states if it is not created already
      Given User retrieves all created states
      And User puts the data in correspondent file
      Then User creates a state if it is not in the file



