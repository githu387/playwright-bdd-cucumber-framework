import { Before, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;
export let page: Page;

Before(async function () {
    console.log("Launching browser...");

    browser = await chromium.launch({
        headless: true
    });

    context = await browser.newContext();
    page = await context.newPage();

    console.log("Browser launched successfully");
});

After(async function (scenario) {
    console.log(`Completed Scenario: ${scenario.pickle.name}`);
    console.log(`Status: ${scenario.result?.status}`);

    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await page.screenshot({
            fullPage: true
        });

        await this.attach(screenshot, "image/png");
        console.log("Screenshot captured");
    }

    try {
        await page.close();
        console.log("Page closed");

        await context.close();
        console.log("Context closed");

        await browser.close();
        console.log("Browser closed");
    } catch (error) {
        console.error("Error during cleanup:", error);
    }
});