Feature: System should allow to read all countries info using api end point


  Scenario: Read all countries you created and validate them from your data set
    Given user gets all data for countries using api end point "https://www.gmibank.com/api/tp-countries"
    And user deserializes country data as json to java pojo
    Then user validates the data for countries





