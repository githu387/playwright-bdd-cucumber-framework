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


Scenario: Add all products to cart page
Given user login into application
When user add all products to cart
And user check cart count six
And user opens cart
Then all products are displayed in cart

Scenario: Remove all products from cart page
Given user login into application
When user add all products to cart
And user remove all products from cart
And user check cart count zero
And user opens cart
Then all products are remove from cart


Scenario: Verify Twitter page URL and Title
Given user login into application
When user click on twitter logo link
Then Twitter page URL and Title should be visible

Scenario: Verify Facebook page URL and Title
Given user login into application
When user click on facebook logo link
Then Facebook page URL and Title should be visible

Scenario: Verify LinkedIn page URL and Title
Given user login into application
When user click on LinkedIn logo link
Then LinkedIn page URL and Title should be visible

Scenario: Verify Backpack product details
Given user login into application
When user click on BackPack link
And user click on add to cart button on product details page
And user check cart count is one
And user click on remove to cart button on product details page
And user check cart count zero
Then user should navigate to Backpack product detail page

Scenario: Verify BikeLight product details
Given user login into application
When user click on BikeLight link
And user click on add to cart button on product details page
And user check cart count is one
And user click on remove to cart button on product details page
And user check cart count zero
Then user should navigate to BikeLight product detail page

Scenario: Verify BoltTshirt product details
Given user login into application
When user click on BoltTshirt link
And user click on add to cart button on product details page
And user check cart count is one
And user click on remove to cart button on product details page
And user check cart count zero
Then user should navigate to BoltTshirt product detail page


Scenario: Verify FleeceJacket product details
Given user login into application
When user click on FleeceJacket link
And user click on add to cart button on product details page
And user check cart count is one
And user click on remove to cart button on product details page
And user check cart count zero
Then user should navigate to FleeceJacket product detail page


Scenario: Verify LabsOnesie product details
Given user login into application
When user click on LabsOnesie link
And user click on add to cart button on product details page
And user check cart count is one
And user click on remove to cart button on product details page
And user check cart count zero
Then user should navigate to LabsOnesie product detail page



Scenario: Verify RedTshirt product details
Given user login into application
When user click on RedTshirt link
And user click on add to cart button on product details page
And user check cart count is one
And user click on remove to cart button on product details page
And user check cart count zero
Then user should navigate to RedTshirt product detail page

