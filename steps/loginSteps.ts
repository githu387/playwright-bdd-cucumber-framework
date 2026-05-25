/*import { Given,When,Then,setDefaultTimeout } from "@cucumber/cucumber";
import {Browser, chromium, Page} from "playwright";
import {expect} from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser:Browser;
let page:Page;

Given("user is on login page",async()=>
{
    browser=await chromium.launch({headless:false});
    page=await browser.newPage();
    await page.goto("https://www.saucedemo.com/");
})
When("user enters username",async()=>
{
    await page.fill("#user-name","standard_user");
})
When("user enters password",async()=>
{
    await page.fill("#password","secret_sauce")

})
When("user clicks on login button",async()=>
{
    await page.click("#login-button");
})
Then("user should be on homepage",async()=>
{
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page).toHaveTitle("Swag Labs")
    await browser.close();
})

Then("user should see username required error",async()=>
{
    const errortext=page.locator("h3")
    await errortext.innerText();
    await expect(errortext).toHaveText("Epic sadface: Username is required");
    await browser.close();
})
Then("user should see password required error",async()=>
{
    const errortext=page.locator("h3");
    await errortext.innerText();
    await expect(errortext).toHaveText("Epic sadface: Password is required");
    await browser.close()
})
Then("user should see username and password required error",async()=>
{
    const errortext=page.locator("h3")
    await errortext.innerText()
    await expect(errortext).toHaveText("Epic sadface: Username is required")
    await browser.close()
})

When("user enters incorrect username",async ()=>
{
    await page.locator("#user-name").fill("esyuaja")
})
Then("user should see username do not match with user",async()=>
{
    const errortext=page.locator("h3")
    await errortext.innerText();
    await expect(errortext).toHaveText("Epic sadface: Username and password do not match any user in this service");
    await browser.close()
})

When("user enters incorrect password",async()=>
{
    await page.locator("#password").fill("^%#fgF3243");

})
Then("user should see password do not match with user",async()=>
{
    const errortext=page.locator("h3");
    await errortext.innerText()
    await expect(errortext).toHaveText("Epic sadface: Username and password do not match any user in this service");
    await browser.close();
})
Then("user should see username and password do not match with user",async()=>
{
    const errortext=page.locator("h3");
    await errortext.innerText();
    await expect(errortext).toHaveText("Epic sadface: Username and password do not match any user in this service");
    await browser.close();
})
    */