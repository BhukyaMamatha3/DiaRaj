import { test, expect } from '@playwright/test';

//
test('login using Xpath', async ({ page }) => {

await page.goto('https://www.qapractice.com/practice-login-form');

//email using Xpath ID
await page.locator('//*[@id="login-email"]').fill("user@premium.com");

//password using Xpath
await page.locator('//*[@id="login-password"]').fill("user@premium.com");

// checkbox using Xpath
await page.locator('//*[@id="login-remember"]').check();

//sign in button using Xpath

await page.locator('//*[@id="login-submit"]').click();

});
