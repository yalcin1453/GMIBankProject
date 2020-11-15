@US_15
  Feature: System should allow user to manage their account
    Background:
      Given User  go to the sign in page
      When User  type username and password than click on sign in button
      And User  click on " My Operations " dropdown menu
      Then User  click on "My Accounts"

      @AllAccounts
      Scenario: User should see all account types and balace populated
        Given User see all account types
        Then User see balance populates

        @Transctn
        Scenario: User can view transaction
          Given User click the "view transection" button
          Then User see all transaction