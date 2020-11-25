Feature: System should allow to read all states info using api end point

  Background: user is on the api end point
    Given user gets all data for states using api end point "https://www.gmibank.com/api/tp-states"
    And user deserializes states data as json to java pojo


  @TC_001
  Scenario : Read all states you created and validate them from your data set
    Then user validates the data for states

  @TC_002
  Scenario : Read all states you created and validate them 1 by 1
    Then user validates the data one by one for states
