import { Locator, Page,expect } from "@playwright/test";

export class loginpage
{
    username:Locator;
    password:Locator;
    loginbtn:Locator;
    errormsg:Locator;
    constructor(private page:Page)
    {
        this.username=page.locator("#user-name");
        this.password=page.locator("#password");
        this.loginbtn=page.locator("#login-button");
        this.errormsg=page.locator("h3")
    }
    async launchURL()
    {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async enterUsername(username:string)
    {
        await this.username.fill(username)
    }
    async enterpassword(password:string)
    {
        await this.password.fill(password)
    }
    async clickloginbutton()
    {
        await this.loginbtn.click()
    }
    async verifyerror()
    {
        await this.errormsg.innerText();
    }
}