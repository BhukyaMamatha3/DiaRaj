
const { test, expect } = require('@playwright/test');

async function selectGender(page, gender) {

    const radioButton = page.locator(
        `//label[normalize-space()='${gender}']/input[@type='radio']`
    );

    await radioButton.check();
}

test('Select Gender using XPath', async ({ page }) => {

    await page.goto(
        'https://www.playwrightautomation.com/practice.html#section-radios'
    );

    // Select Male
    await selectGender(page, 'Male');

    // Verify Male is selected
    await expect(
        page.locator(
            `//label[normalize-space()='Male']/input[@type='radio']`
        )
    ).toBeChecked();

});
