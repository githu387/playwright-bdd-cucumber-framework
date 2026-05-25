Feature:Inventory functionality

Scenario: Add backpack product to cart
Given user login into application
When user add backpack to cart
And user check cart count is one
And user opens cart
Then backpack product should be visible in cart


Scenario: Add BikeLight product to cart
Given user login into application
When user add backpack to cart
And user add BikeLight to cart
And user check cart count two
And user opens cart
Then BikeLight product should be visible in cart


Scenario: Add Bolt T-shirt product to cart
Given user login into application
When user add backpack to cart
And user add BikeLight to cart
And user add Bolt T-shirt to cart
And user check cart count Three
And user opens cart
Then Bolt T-shirt product should be visible in cart

Scenario: Add Fleece Jacket product to cart
Given user login into application
When user add backpack to cart
And user add BikeLight to cart
And user add Bolt T-shirt to cart
And user add Fleece Jacket to cart
And user check cart count Four
And user opens cart
Then Fleece Jacket product should be visible in cart


Scenario: Add all product to cart
Given user login into application
When user add backpack to cart
And user add BikeLight to cart
And user add Bolt T-shirt to cart
And user add Fleece Jacket to cart
And user add Labs Onesie to cart
And user add Red T-shirt to cart
And user check cart count six
And user opens cart
Then all products are visible in cart

Scenario: Remove all products from cart
Given user login into application
When user add backpack to cart
And user add BikeLight to cart
And user add Bolt T-shirt to cart
And user add Fleece Jacket to cart
And user add Labs Onesie to cart
And user add Red T-shirt to cart
And user remove backpack from cart
And user remove BikeLight from cart
And user remove Bolt T-shirt from cart
And user remove Fleece Jacket from cart
And user remove Labs Onesie from cart
And user remove Red T-shirt from cart
And user check cart count zero
And user opens cart
Then all products are remove from cart

