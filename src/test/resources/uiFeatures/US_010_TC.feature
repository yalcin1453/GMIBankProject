Feature: Address of customer can be created

  Background: user is on the landing page
    Given user should be landing page
    And Click on account sign button
    And Click on Sign in button
<<<<<<< HEAD
    And Click on username textbox and enter username
=======
>>>>>>> adil
    And Click on password textbox and enter password and click signin button
    And Click on My Operations dropdown and Select Manage Customers
    And Click on Create a new Customer
    And Click on SSN textbox and enter valid SSN number
    And Click on First Name textbox and enter first name
    And Click on Last Name textbox and enter last name
    And Click on Middle Initial textbox and enter middle initial
    And Click on Email textbox and enter email
    And Click on Mobile Phone Number textbox and enter mobile phone number
    And Click on Phone Number textbox and enter phone number
    And Click on Zip Code textbox and enter zip code

    Scenario: TC001_Address as street and number should be provided  and cannot be left blank
    And Click on City textbox and enter name of city
    And Click on Ssn textbox and enter valid SSN number
    And Click on Create Date textbox enter current date and time
    And Click on Country dropdown and select country
    And Click on State textbox and enter name of state
    And Click on User dropdown and select a user
    And Click on Account dropdown select an account
    And Click on Zelle Enrolled checkbox
    And Click on Save button
      Then verify displayed "This field is required" message under address textbox


    Scenario: TC002_City should be provided and cannot be left as blank
    And Click on Adress textbox and enter adress
    And Click on Ssn textbox and enter valid SSN number
    And Click on Create Date textbox enter current date and time
    And Click on Country dropdown and select country
    And Click on State textbox and enter name of state
    And Click on User dropdown and select a user
    And Click on Account dropdown select an account
    And Click on Zelle Enrolled checkbox
    And Click on Save button
      Then verify displayed "This field is required" message under city textbox




  Scenario: TC003_Country should be typed and cannot be blank
  And Click on Adress textbox and enter adress
  And Click on City textbox and enter name of city
  And Click on Ssn textbox and enter valid SSN number
  And Click on Create Date textbox enter current date and time
  And Click on State textbox and enter name of state
  And Click on User dropdown and select a user
  And Click on Account dropdown select an account
  And Click on Zelle Enrolled checkbox
  And Click on Save button
    Then verify displayed "This field is required" message under country textbox




  Scenario: TC004_State should be provided as US state and cannot be blank
  And Click on Adress textbox and enter adress
  And Click on City textbox and enter name of city
  And Click on Ssn textbox and enter valid SSN number
  And Click on Create Date textbox enter current date and time
  And Click on Country dropdown and select country
  And Click on User dropdown and select a user
  And Click on Account dropdown select an account
  And Click on Zelle Enrolled checkbox
  And Click on Save button
    Then verify displayed "This field is required" message under state textbox
























































































