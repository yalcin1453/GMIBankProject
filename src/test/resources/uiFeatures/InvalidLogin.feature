Feature: Login page should not be accessible with invalid credentials
@TC_005
  Scenario Outline: US_004 TC001 Login page should accessible with invalid credentials
Given user is on homepage
And user click on login icon
When user click on signin
And user enters username "<username>"
And user enters password "<password>"
And user click on siginButton
Then verify user can't logged in with invalid credentials

Examples:Users Admin User Customer Manager
| username | password |
|Admin|TechAdmin|

