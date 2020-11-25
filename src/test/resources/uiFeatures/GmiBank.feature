@AllcustomerInfo
Feature: Validate all customers' info
  Background: api end point is being set in response
    Given user provides api end point to set the response using "https://www.gmibank.com/api//tp-customers"
  @CustomerAllData
  Scenario: validate all customers' data
    Given manipulate all customers' data
    And user sets the data in correspondent files
    Then user validates all data
