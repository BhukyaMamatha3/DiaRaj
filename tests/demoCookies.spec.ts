
import { test, expect } from '@playwright/test';

test('Automatic login and reuse session cookies', async ({ browser }) => {

    // STEP 1: Create first browser context
    const context1 = await browser.newContext();
    const page = await context1.newPage();

    // STEP 2: Open login page
    await page.goto('https://www.playwrightautomation.com/login.html');

    // STEP 3: Enter valid credentials automatically
    await page.getByLabel('Username or email').fill('student');
    await page.locator('#password').fill('Password123');
    

    // STEP 4: Click Login and wait for login API response
    const loginResponsePromise = page.waitForResponse(response =>
        response.url().includes('/api/auth/login')
    );

    await page.getByRole('button', {
        name: 'Login',
        exact: true
    }).click();

    const loginResponse = await loginResponsePromise;

    console.log('Login status:', loginResponse.status());

    expect(loginResponse.status()).toBe(200);

    // STEP 5: Capture actual authentication cookie
    const cookies = await context1.cookies(
        'https://www.playwrightautomation.com'
    );

    console.log('Cookie names:', cookies.map(c => c.name));

    const sessionCookie = cookies.find(
        cookie => cookie.name === 'pw_session_token'
    );

    expect(sessionCookie).toBeTruthy();

    console.log('Session cookie successfully generated');

    // STEP 6: Save authenticated session
    await context1.storageState({
        path: 'auth.json'
    });

    console.log('Authentication state saved');

    // STEP 7: Create a completely new browser context
    const context2 = await browser.newContext({
        storageState: 'auth.json'
    });

    const page2 = await context2.newPage();

    // STEP 8: Verify restored session
    await page2.goto(
        'https://www.playwrightautomation.com/login.html'
    );
// await page2.waitForTimeout(10000);
// await page2.pause();
    const verifyResponse = await context2.request.get(
        'https://www.playwrightautomation.com/api/auth/verify'
    );

    console.log('Session verification:', verifyResponse.status());

    expect(verifyResponse.status()).toBe(200);

    console.log('Successfully reused login session!');
await page2.waitForTimeout(10000);
//await page.waitForTimeout(10000);
    // await context1.close();
    // await context2.close();
});