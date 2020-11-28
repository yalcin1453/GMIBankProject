@Pdf
Feature: validate all data from customer

  Scenario: read and validate data using Db
    Given user creates a connection with db using "jdbc:postgresql://157.230.48.97:5432/gmibank_db" , "techprodb_user" and "Techpro_@126"
    When user reads the customers data using "Select * from tp_customer;" and "ssn"
    Then user prints all using pdf
    Scenario: user should print pdf Api data
      Given user provides api end point to set the response "https://www.gmibank.com/api//tp-customers"
      And user should print the data  as pdf
