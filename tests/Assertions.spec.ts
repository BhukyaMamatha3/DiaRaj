import { test, expect, Page } from "@playwright/test";

test.skip('practice assertions', async ({ page }) => {

    await page.goto("https://www.playwrightautomation.com/practice.html");

    const loginBtn = await page.getByRole('link', { name: "Login" }).first();

    await expect(loginBtn).toBeVisible();

    loginBtn.click();

    await page.waitForTimeout(5000);

    await page.getByLabel("Username or email").fill("student");
    await page.getByLabel("Password").nth(1).fill("Password123");
    await page.getByTestId("login-submit-button").click();

    await page.waitForTimeout(5000);

    await expect(loginBtn).toBeVisible();

    await page.waitForTimeout(5000);


})


test('practice assertions to have value', async ({ page }) => {

    await page.goto("https://www.playwrightautomation.com/practice.html");
    const username = "sasidhar";

    const username2 = "Sasidhar";

    enterUname(page, "sasi");
    await page.waitForTimeout(2000);
    const abe = verifyEnteredUserName(page);
    await expect(abe).toEqual(username2)
    await page.waitForTimeout(2000); 


})
function verifyEnteredUserName(page: Page){
    const enterUname_PlaceHolder = "Enter your name";
    const nameBoxValue =  page.getByPlaceholder(enterUname_PlaceHolder).textContent();
    return nameBoxValue;
}

function enterUname(page: Page, username: string){
    const enterUname_PlaceHolder = "Enter your name";
    const nameBox =  page.getByPlaceholder(enterUname_PlaceHolder);
    nameBox.fill(username);
}