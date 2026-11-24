/*import { test, expect } from '@playwright/test';

test('Enter Email Address using XPath', async ({ page }) => {

    await page.goto('https://www.qapractice.com/practice-login-form');

    // Email function
    async function enterEmail(email) {
        await page.locator("//input[@id='login-email']").fill(email);
    }

    // Call function
    await enterEmail('user@premiumbank.com');

    // Verify entered email
    await expect(page.locator("//input[@id='login-email']"))
        .toHaveValue('user@premiumbank.com');

});*/


import { test, expect } from '@playwright/test';

// Helper function - define OUTSIDE test
async function enterEmail(page: any, email: string) {
  await page.locator("//input[@id='login-email']").fill(email);
}

test('Enter Email Address using XPath', async ({ page }) => {
  await page.goto('https://www.qapractice.com/practice-login-form');

  // Call function
  await enterEmail(page, 'user@premiumbank.com');

  // Verify entered email
  await expect(page.locator("//input[@id='login-email']"))
    .toHaveValue('user@premiumbank.com');
});