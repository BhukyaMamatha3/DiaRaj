import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {

    await page.goto('https://www.qapractice.com/practice-login-form');

    // Email function
    async function enterEmail(email) {
        await page.getByTestId('login-email').fill(email);
    }

    // Calling email function
    await enterEmail('user@premiumbank.com');

    await page.getByTestId('login-password').fill('Bank@123');

    await page.getByTestId('login-submit').click();

    await expect(page.getByTestId('login-success'))
        .toContainText('Login Successful');
});