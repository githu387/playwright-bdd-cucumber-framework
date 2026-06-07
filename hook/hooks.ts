import { Before, After, Status } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";

let browser: Browser;
export let page: Page;

Before(async () => {

    browser = await chromium.launch({
        headless: true
    });

    page = await browser.newPage();
});

After(async function (scenario) {

    if (scenario.result?.status === Status.FAILED) {

        const screenshot = await page.screenshot({
            fullPage: true
        });

        await this.attach(screenshot, "image/png");
    }

    await browser.close();
});