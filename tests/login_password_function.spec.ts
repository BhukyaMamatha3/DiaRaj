/*import { test, expect } from '@playwright/test';

test('Enter password Address using XPath', async ({ page }) => {

    await page.goto('https://www.qapractice.com/practice-login-form');

    // Email function
    async function enterpassword("password") {
        await page.locator("//input[@id='login-password']").fill("password");
    }

    // Call function
    await enterpassword('Bank@123');

    // Verify entered email
    await expect(page.locator("//input[@id='login-password']"))
        .toHaveValue('Bank@123');

});*/


import { test, expect } from '@playwright/test';

// Helper function - define OUTSIDE test
async function enterpassword(page: any, password: string) {
  await page.locator("//input[@id='login-password']").fill(password);
}

test('Enter password Address using XPath', async ({ page }) => {
  await page.goto('https://www.qapractice.com/practice-login-form');

  // Call function
  await enterpassword(page, 'user@premiumbank.com');

  // Verify entered email
  await expect(page.locator("//input[@id='login-password']"))
    .toHaveValue('Bank@123');
});