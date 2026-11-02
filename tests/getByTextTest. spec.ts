import { test, expect } from '@playwright/test';

//
test('getByTest locator testing', async ({ page }) => {

// open browser and navigate to the below url
await page.goto('https://www.qapractice.com/practice-login-form');

const emailId ="user@premiumbank.com";
const pwd ="Bank@123";

const emailInputBox= await page.locator('//input[@id="login-email"]');
const pwdInputBox = await page.getByPlaceholder("Enter your password");
const rememberMe = await page.getByLabel("Remember me");
const signinBtn = await page.locator("#login-submit");
const successMsg =await page.getByText("login Successful! Welcome to Premium Banking.").first();;

emailInputBox.fill(emailId);

await page.waitForTimeout(500);
pwdInputBox.fill(pwd);

await page.waitForTimeout(500);
rememberMe.click();


await page.waitForTimeout(500);
signinBtn.click();

//get by text
//console.log(await page.getByText("").isVisible());

const successmsgIsDisplayed = successMsg.isVisible();
console.log(successmsgIsDisplayed);

});
