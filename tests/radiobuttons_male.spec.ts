import { test, expect } from '@playwright/test';


test('Select Male Radio Button', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html#section-radios');

    // Call function
    await selectMale(page);

    // Verify Male radio button
    await expect(
        page.locator("//input[@type='radio' and @value='male']")
    ).toBeChecked();

});

async function selectMale(page) {
    await page.locator("//input[@type='radio' and @value='male']").check();
}