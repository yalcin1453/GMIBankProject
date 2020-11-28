@US_27 @SmokeTest1
Feature: US_27 System should allow to delete states using api end point

  @TC_2701
  Scenario: TC_2701 before DELETE request
    Given I send a GET request to REST API end point  "https://www.gmibank.com/api/tp-states/19227"
    Then Before delete request HTTP Status Code should be "200"
    Then Before delete request response format should be "application/json"
    Then Before delete request id should be "19227"
    Then Before delete request name should be "Rhone-Alpes"

  @TC_2702
  Scenario: TC_2702 check DELETE request
    Given I send a DELETE request to REST API end point  "https://www.gmibank.com/api/tp-states/19223"
    Then After delete request HTTP Status Code should be "204"
    Then After delete request response format should be ""
    Then After delete request response after delete should contain nothing
