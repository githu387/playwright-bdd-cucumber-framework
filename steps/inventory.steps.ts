import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber";
import { loginpage } from "../pages/LoginPage";
import { cartpage } from "../pages/CartPage";
import { inventrypage } from "../pages/InventoryPage";
import { page } from "../hook/hooks";
import { expect, Page } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let login:loginpage;
let invent:inventrypage;
let cart:cartpage;
let twitterpage:Page;
let facebookpage:Page;
let linkedInpage:Page;

Given("user login into application",async()=>
{
    login=new loginpage(page);
    await login.launchURL();
    await login.enterUsername("standard_user");
    await login.enterpassword("secret_sauce");
    await login.clickloginbutton();
})
When("user add backpack to cart",async()=>
{
    invent=new inventrypage(page);
    await invent.AddBackpackproduct();
})
When("user check cart count is one",async()=>
{
    await invent.Cartcount();
    await expect(invent.cartcount).toHaveText("1");
})
When("user opens cart",async ()=>
{
    await invent.Clickoncartlink();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
})
Then("backpack product should be visible in cart",async()=>
{
    cart=new cartpage(page);
    await cart.ProductName();
    await expect(cart.productname).toHaveText("Sauce Labs Backpack");
    await expect(cart.itemdiscription).toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
    await expect(cart.itemprice).toHaveText("$29.99");
})
When("user add BikeLight to cart",async()=>
{
    await invent.AddBikeLightProduct();
})
When("user check cart count two",async()=>
{
    await invent.Cartcount();
    await expect(invent.cartcount).toHaveText("2");
})
Then("BikeLight product should be visible in cart",async()=>
{
    cart=new cartpage(page);
    await expect(cart.productname.nth(1)).toHaveText("Sauce Labs Bike Light");
    await expect(cart.itemdiscription.nth(1)).toHaveText("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
    await expect(cart.itemprice.nth(1)).toHaveText("$9.99");
})
When("user add Bolt T-shirt to cart",async()=>
{
    await invent.AddboltTshirtProduct();
})
When("user check cart count Three",async()=>
{
    await invent.Cartcount();
    await expect(invent.cartcount).toHaveText("3");
})
Then("Bolt T-shirt product should be visible in cart",async()=>
{
    cart=new cartpage(page);
    await expect(cart.productname.nth(2)).toHaveText("Sauce Labs Bolt T-Shirt");
    await expect(cart.itemdiscription.nth(2)).toHaveText("Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.");
    await expect(cart.itemprice.nth(2)).toHaveText("$15.99");
})
When("user add Fleece Jacket to cart",async()=>
{
    await invent.AddFleeceJacketProduct();
})
When("user check cart count Four",async()=>
{
    await invent.Cartcount();
    await expect(invent.cartcount).toHaveText("4");
})
Then("Fleece Jacket product should be visible in cart",async ()=>
{
    cart=new cartpage(page);
    await expect(cart.productname.nth(3)).toHaveText("Sauce Labs Fleece Jacket");
    await expect(cart.itemdiscription.nth(3)).toHaveText("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
    await expect(cart.itemprice.nth(3)).toHaveText("$49.99");
})
When("user add Labs Onesie to cart",async()=>
{
    await invent.AddLabsOnesieProduct();
})
When("user add Red T-shirt to cart",async()=>
{
    await invent.AddRedTshirtProduct();
})
When("user check cart count six",async()=>
{
    await invent.Cartcount();
    await expect(invent.cartcount).toHaveText("6");
})
Then("all products are visible in cart",async()=>
{
    cart=new cartpage(page);
    await expect(cart.productname.nth(4)).toHaveText("Sauce Labs Onesie");
    await expect(cart.itemdiscription.nth(4)).toHaveText("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
    await expect(cart.itemprice.nth(4)).toHaveText("$7.99");
    await expect(cart.productname.nth(5)).toHaveText("Test.allTheThings() T-Shirt (Red)");
    await expect(cart.itemdiscription.nth(5)).toHaveText("This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.");
    await expect(cart.itemprice.nth(5)).toHaveText("$15.99");
})
When("user remove backpack from cart",async()=>
{
    await invent.RemovebackPackProduct();
})
When("user remove BikeLight from cart",async()=>
{
    await invent.RemoveBikeLightProduct();
})
When("user remove Bolt T-shirt from cart",async()=>
{
    await invent.RemoveBoltTshirtproduct();
})
When("user remove Fleece Jacket from cart",async()=>
{
    await invent.RemoveFleeceJacketProduct();
})
When("user remove Labs Onesie from cart",async()=>
{
    await invent.RemoveLabsOnesieProduct();
})
When("user remove Red T-shirt from cart",async()=>
{
    await invent.RemoveRedTshirtProduct();
})
When("user check cart count zero",async()=>
{
    //await invent.Cartcount();
    await expect(invent.cartcount).toHaveCount(0);
})
Then("all products are remove from cart",async()=>
{
    cart=new cartpage(page);
    let allproducts=await cart.productname.allInnerTexts();
    expect(allproducts).not.toContain("Sauce Labs Backpack");
    expect(allproducts).not.toContain("Sauce Labs Bike Light");
    expect(allproducts).not.toContain("Sauce Labs Bolt T-Shirt");
    expect(allproducts).not.toContain("Sauce Labs Fleece Jacket");
    expect(allproducts).not.toContain("Sauce Labs Onesie");
    expect(allproducts).not.toContain("Test.allTheThings() T-Shirt (Red)");

    let alldiscription=await cart.itemdiscription.allInnerTexts();
    expect(alldiscription).not.toContain("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
    expect(alldiscription).not.toContain("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
    expect(alldiscription).not.toContain("Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.");
    expect(alldiscription).not.toContain("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
    expect(alldiscription).not.toContain("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
    expect(alldiscription).not.toContain("This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.");

    let allprice=await cart.itemprice.allInnerTexts();
    expect(allprice).not.toContain("$29.99");
    expect(allprice).not.toContain("$9.99");
    expect(allprice).not.toContain("$15.99");
    expect(allprice).not.toContain("$49.99");
    expect(allprice).not.toContain("$7.99");
    expect(allprice).not.toContain("$15.99");
})
When("user add all products to cart",async()=>
{
    invent = new inventrypage(page);
    await invent.AddAllProducts();
})
Then("all products are displayed in cart",async()=>
{
    cart=new cartpage(page)
    let allproducts=await cart.productname.allInnerTexts();
    expect(allproducts).toContain("Sauce Labs Backpack");
    expect(allproducts).toContain("Sauce Labs Bike Light");
    expect(allproducts).toContain("Sauce Labs Bolt T-Shirt");
    expect(allproducts).toContain("Sauce Labs Fleece Jacket");
    expect(allproducts).toContain("Sauce Labs Onesie");
    expect(allproducts).toContain("Test.allTheThings() T-Shirt (Red)");

    let alldiscription=await cart.itemdiscription.allInnerTexts();
    expect(alldiscription).toContain("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
    expect(alldiscription).toContain("Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.");
    expect(alldiscription).toContain("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
    expect(alldiscription).toContain("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
    expect(alldiscription).toContain("This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.");

    let allprice=await cart.itemprice.allInnerTexts();
    expect(allprice).toContain("$29.99");
    expect(allprice).toContain("$9.99");
    expect(allprice).toContain("$15.99");
    expect(allprice).toContain("$49.99");
    expect(allprice).toContain("$7.99");
    expect(allprice).toContain("$15.99");
})
When("user remove all products from cart",async()=>
{
    invent=new inventrypage(page);
    await invent.RemoveAllProducts();
})
When("user click on twitter logo link",async()=>
{
    invent=new inventrypage(page);
    twitterpage=await invent.OpenTwitterPage();
})
Then("Twitter page URL and Title should be visible",async()=>
{
    await expect(twitterpage).toHaveURL("https://x.com/saucelabs");
    await expect(twitterpage).toHaveTitle("Sauce Labs (@saucelabs) / X");
})
When("user click on facebook logo link",async()=>
{
    invent=new inventrypage(page);
    facebookpage=await invent.OpenFacebookPage();
})
Then("Facebook page URL and Title should be visible",async()=>
{
    await expect(facebookpage).toHaveURL("https://www.facebook.com/saucelabs");
    await expect(facebookpage).toHaveTitle("Sauce Labs | Facebook");
})
When("user click on LinkedIn logo link",async()=>
{
    invent=new inventrypage(page);
    linkedInpage=await invent.OpenLinkedPage();
})
Then("LinkedIn page URL and Title should be visible",async()=>
{
    await expect(linkedInpage).toHaveURL("https://www.linkedin.com/company/sauce-labs/");
    await expect(linkedInpage).toHaveTitle("Sauce Labs | LinkedIn");
})
When("user click on BackPack link",async()=>
{
    invent=new inventrypage(page);
    await invent.ClickonBackPacklink();
})
Then("user should navigate to Backpack product detail page",async()=>
{
    await expect(invent.productlargename).toHaveText("Sauce Labs Backpack");
    await expect(invent.productdesclarge).toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
    await expect(invent.productdetailprice).toHaveText("$29.99");
    await expect(invent.productimg).toBeVisible();
    await expect(invent.productimg).toHaveAttribute("src", /sauce-backpack/);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=4");
    await expect(page).toHaveTitle("Swag Labs");
})
When("user click on BikeLight link",async()=>
{
    invent=new inventrypage(page);
    await invent.ClickonBikeLightlink();
})
Then("user should navigate to BikeLight product detail page",async()=>
{
    await expect(invent.productlargename).toHaveText("Sauce Labs Bike Light");
    await expect(invent.productdesclarge).toHaveText("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
    await expect(invent.productdetailprice).toHaveText("$9.99");
    await expect(invent.productimg).toBeVisible();
    await expect(invent.productimg).toHaveAttribute("src",/bike-light/);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=0");
    await expect(page).toHaveTitle("Swag Labs");
})
When("user click on BoltTshirt link",async()=>
{
    invent=new inventrypage(page);
    await invent.ClickonBoltTshirtlink();
})
When("user click on add to cart button on product details page",async()=>
{
    await invent.clickonAddProductonDetailPage();
})
When("user click on remove to cart button on product details page",async()=>
{
    await invent.clickonRemoveProductonDetailPage();
})
Then("user should navigate to BoltTshirt product detail page",async()=>
{
    await expect(invent.productlargename).toHaveText("Sauce Labs Bolt T-Shirt");
    await expect(invent.productdesclarge).toHaveText("Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.");
    await expect(invent.productdetailprice).toHaveText("$15.99");
    await expect(invent.productimg).toBeVisible();
    await expect(invent.productimg).toHaveAttribute("src",/bolt-shirt/);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=1");
    await expect(page).toHaveTitle("Swag Labs");

})
When("user click on FleeceJacket link",async()=>
{
    invent=new inventrypage(page);
    await invent.ClickonFleeceJacketlink();
})
Then("user should navigate to FleeceJacket product detail page",async()=>
{
    await expect(invent.productlargename).toHaveText("Sauce Labs Fleece Jacket");
    await expect(invent.productdesclarge).toHaveText("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
    await expect(invent.productdetailprice).toHaveText("$49.99");
    await expect(invent.productimg).toBeVisible();
    await expect(invent.productimg).toHaveAttribute("src",/sauce-pullover/);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=5");
    await expect(page).toHaveTitle("Swag Labs");

})
When("user click on LabsOnesie link",async()=>
{
    invent=new inventrypage(page);
    await invent.ClickonLabsOnesielink();
})
Then("user should navigate to LabsOnesie product detail page",async()=>
{
    await expect(invent.productlargename).toHaveText("Sauce Labs Onesie");
    await expect(invent.productdesclarge).toHaveText("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
    await expect(invent.productdetailprice).toHaveText("$7.99");
    await expect(invent.productimg).toBeVisible();
    await expect(invent.productimg).toHaveAttribute("src",/red-onesie/);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=2");
    await expect(page).toHaveTitle("Swag Labs");
})
When("user click on RedTshirt link",async()=>
{
    invent=new inventrypage(page)
    await invent.ClickonRedTshirtlink();
})
Then("user should navigate to RedTshirt product detail page",async()=>
{
    await expect(invent.productlargename).toHaveText("Test.allTheThings() T-Shirt (Red)");
    await expect(invent.productdesclarge).toHaveText("This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.");
    await expect(invent.productdetailprice).toHaveText("$15.99");
    await expect(invent.productimg).toBeVisible();
    await expect(invent.productimg).toHaveAttribute("src",/red-tatt/);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=3");
    await expect(page).toHaveTitle("Swag Labs");
})

