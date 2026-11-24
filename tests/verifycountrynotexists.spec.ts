import { expect, test } from "@playwright/test"


test('verify country is not exists then print the country name', async ({ page }) => {
    const url = "https://www.playwrightautomation.com/practice.html#section-dropdowns";
    const exp_countryOptions = ["Select a country…","United States","Canada","United Kingdom","Germany","France",
        "Australia","Japan","China","Brazil","India"];
    await page.goto(url);
    const countryList = await page.getByLabel("Select Country");
    const countryOptionList = await countryList.locator("option");
    console.log(await countryOptionList.count());
    const act_Countries = await countryOptionList.allTextContents();
    const selectCountryname = "Iran";
    await expect(act_Countries).not.toContain(selectCountryname);
    if(act_Countries.includes(selectCountryname)){
    }else {
        console.log("Iran not available")
    }
    await page.waitForTimeout(10000);

})