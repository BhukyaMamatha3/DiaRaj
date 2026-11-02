import { test, expect } from '@playwright/test';

//
test('login using css selector', async ({ page }) => {

await page.goto('https://www.qapractice.com/practice-login-form');

//email using css id selector
//await page.locator("#login-email").fill("user@premium.com");

//password using css id selector
await page.locator("#login-password").fill("user@premium.com");

//Xpath -//input[@data-testid="login-password"]

//css- [data-testid="login-password"]


//enter password

await page.locator("[data-testid='login-password']").fill("qa12345");


});
