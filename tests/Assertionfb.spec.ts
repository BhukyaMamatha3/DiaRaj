import { test, expect, Page } from "@playwright/test";

test('practice assertions', async ({ page }) => {

    await page.goto("https://www.facebook.com/");
    const loginBtn = await page.locator("//span/span[contains(text(), 'Log in')]");
    await page.waitForTimeout(2000);
    await expect(loginBtn).toBeVisible();

    await clickForgotPasswordLoink(page);


    await page.waitForTimeout(2000);
    await expect(loginBtn).not.toBeVisible();
})

function clickForgotPasswordLoink(page: Page) {
    const forgotPasswordLink_Xpath = "//span/span[contains(text(), 'Forgotten password?')]";
    const forgtPwdLink = page.locator(forgotPasswordLink_Xpath);
    forgtPwdLink.click();
}