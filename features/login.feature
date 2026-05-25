Feature: Login functionality

Scenario: Successful login
Given user is on login page
When user enters username
And user enters password
And user clicks on login button
Then user should be on homepage


Scenario: Login without username
Given user is on login page
When user enters password
And user clicks on login button
Then user should see username required error


Scenario: Login without password
Given user is on login page
When user enters username
And user clicks on login button
Then user should see password required error

Scenario: Login without username and password
Given user is on login page
When user clicks on login button
Then user should see username and password required error

Scenario: Login with incorrect username
Given user is on login page
When user enters incorrect username
And user enters password
And user clicks on login button
Then user should see username do not match with user

Scenario: Login with incorrect password
Given user is on login page
When user enters username
And user enters incorrect password
And user clicks on login button
Then user should see password do not match with user

Scenario: Login with incorrect username and password
Given user is on login page
When user enters incorrect username
And user enters incorrect password
And user clicks on login button
Then user should see username and password do not match with user