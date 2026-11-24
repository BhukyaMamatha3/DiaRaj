import { test, expect } from '@playwright/test';


async function selectFemale(page) {
    await page.locator("//input[@type='radio' and @value='female']").check();
}

test('Select Female Radio Button', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html#section-radios');

    // Call Female function
    await selectFemale(page);

    // Verify Female is selected
    await expect(
        page.locator("//input[@type='radio' and @value='female']")
    ).toBeChecked();

});