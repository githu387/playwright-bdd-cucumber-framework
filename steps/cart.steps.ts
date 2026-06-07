import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber";
import { loginpage } from "../pages/LoginPage";
import { inventrypage } from "../pages/InventoryPage";
import { cartpage } from "../pages/CartPage";
import { page } from "../hook/hooks";
import { Page,expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let login:loginpage;
let invent:inventrypage;
let cart:cartpage;


Then("user should navigate to cart page",async()=>
{
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    await expect(page).toHaveTitle("Swag Labs");
})
Then("Your cart text should be visible",async()=>
{
    cart=new cartpage(page);
    await expect(cart.yourcarttext).toHaveText("Your Cart");
})
Then("QTY text should be visible",async()=>
{
    cart=new cartpage(page);
    await expect(cart.QTYtext).toHaveText("QTY");

})
Then("Description text should be visible",async ()=>
{
    cart=new cartpage(page);
    await expect(cart.desctext).toHaveText("Description");
})
When("user click on continue shopping button",async()=>
{
    cart=new cartpage(page);
    await cart.ClickonContinueShoppingbutton();
})
Then("user should be navigate to Inventory page",async()=>
{
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})