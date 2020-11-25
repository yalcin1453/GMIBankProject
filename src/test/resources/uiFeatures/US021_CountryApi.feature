Feature: System should allow to read all countries info using api end point

  Background: user is on the api end point
    Given user gets all data for countries using api end point "https://www.gmibank.com/api/tp-countries"
    And user deserializes country data as json to java pojo


  @TC_001
  Scenario : Read all countries you created and validate them from your data set
    Then user validates the data for countries

  @TC_002
  Scenario: Read all countries you created and validate them 1 by 1
    Then user validates the data one by one for countries



