import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber";
import { loginpage } from "../pages/LoginPage";
import { chromium,Browser,Page,expect } from "@playwright/test";
import { page } from "../hook/hooks";
setDefaultTimeout(60 * 1000);


let login:loginpage;

Given("user is on login page",async()=>
{
    login=new loginpage(page)
    await login.launchURL();
})
When("user enters username",async()=>
{
    await login.enterUsername("standard_user");
})
When("user enters password",async()=>
{
    await login.enterpassword("secret_sauce");
})
When("user clicks on login button",async()=>
{
    await login.clickloginbutton();
})
Then("user should be on homepage",async()=>
{
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})
Then("user should see username required error",async()=>
{
    await expect(login.errormsg).toHaveText("Epic sadface: Username is required");
})
Then("user should see password required error",async()=>
{
    await expect(login.errormsg).toHaveText("Epic sadface: Password is required");
})
Then("user should see username and password required error",async()=>
{
    await expect(login.errormsg).toHaveText("Epic sadface: Username is required");
})
When("user enters incorrect username",async()=>
{
    await login.enterUsername("jhg876536t2u")
})
Then("user should see username do not match with user",async()=>
{
    await expect(login.errormsg).toHaveText("Epic sadface: Username and password do not match any user in this service");
})
When("user enters incorrect password",async()=>
{
    await login.enterpassword("uiiYUYU^%%e4eRT");
})
Then("user should see password do not match with user",async()=>
{
    await expect(login.errormsg).toHaveText("Epic sadface: Username and password do not match any user in this service");
})
Then("user should see username and password do not match with user",async()=>
{
    await expect(login.errormsg).toHaveText("Epic sadface: Username and password do not match any user in this service");
})