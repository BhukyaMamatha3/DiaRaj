
import { test, expect } from '@playwright/test';

test('Automatic login and reuse session cookies', async ({ browser }) => {

    // STEP 1: Create first browser context
    const context1 = await browser.newContext();
    const page = await context1.newPage();

    // STEP 2: Open OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // STEP 3: Enter credentials
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // STEP 4: Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(page).toHaveURL(/dashboard/);

    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    console.log('Login successful');

    // STEP 5: Capture actual cookies
    const cookies = await context1.cookies();

    console.log('Context1 cookie names:', cookies.map(c => c.name));

    // Display cookie information
    for (const cookie of cookies) {
        console.log('Cookie Name:', cookie.name);
        console.log('Cookie Domain:', cookie.domain);
    }

    // STEP 6: Save authenticated browser state
    await context1.storageState({
        path: 'auth2.json'
    });

    console.log('Authentication state saved');

    // STEP 7: Create a new browser context using saved state
    const context2 = await browser.newContext({
        storageState: 'auth2.json'
    });

    const page2 = await context2.newPage();

    // STEP 8: Open OrangeHRM dashboard directly
    await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // Verify that context2 is also logged in
    await expect(page2).toHaveURL(/dashboard/);

    await expect(
        page2.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    console.log('Successfully reused login session in context2!');

    // Hold browser for 30 seconds
    await page2.waitForTimeout(10000);

    // Close contexts
    await context1.close();
    await context2.close();

});