import { Before,After } from "@cucumber/cucumber";
import { chromium,Browser,Page } from "@playwright/test";
import { before } from "node:test";
//https://github.com/githu387/playwright-bdd-cucumber-framework.git

let browser:Browser;
export let page:Page;

Before(async()=>
{
    browser=await chromium.launch({headless:true});
    page=await browser.newPage();
})
After(async()=>
{
    await browser.close();
})