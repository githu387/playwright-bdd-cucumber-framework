
Feature: Cart functionality

Scenario: Verify user navigate to cart page
Given user login into application
When user add backpack to cart
And user opens cart
Then user should navigate to cart page

Scenario: Verify product on cart page
Given user login into application
When user add backpack to cart
And user opens cart
Then backpack product should be visible in cart

Scenario: Verify Your Cart text is visible on cart page
Given user login into application
When user add backpack to cart
And user opens cart
Then Your cart text should be visible


Scenario: Verify QTY text is visible on cart page
Given user login into application
When user add backpack to cart
And user opens cart
Then QTY text should be visible


Scenario: Verify Description text is visible on cart page
Given user login into application
When user add backpack to cart
And user opens cart
And user check cart count is one
Then Description text should be visible


Scenario: Verify Continue shopping button
Given user login into application
When user add backpack to cart
And user opens cart
And user click on continue shopping button
Then user should be navigate to Inventory page

Scenario: Verify twitter page URL and Title
Given user login into application
When user add backpack to cart
And user opens cart
And user click on twitter logo link
Then Twitter page URL and Title should be visible

Scenario: Verify facebook page URL and Title
Given user login into application
When user add backpack to cart
And user opens cart
And user click on facebook logo link
Then Facebook page URL and Title should be visible


Scenario: Verify linkedIn page URL and Title
Given user login into application
When user add backpack to cart
And user opens cart
And user click on LinkedIn logo link
Then LinkedIn page URL and Title should be visible
