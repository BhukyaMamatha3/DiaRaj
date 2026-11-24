import { test, expect,Page } from '@playwright/test';

test('verify table data', async ({ page }) => {

const userName ="Cierra";
await page.goto("https://demoqa.com/webtables");
const ageValue= await getAge(page, userName);
const EmailValue= await getEmail(page, userName);

console.log(userName+" age : "+ageValue)

console.log(userName+" age : "+EmailValue)

})

function getAge(page: Page, firstname: string){
    const age = page.locator("//table/tbody/tr/td[contains(text)(),'"+firstname+"')]/../td[3]").textContent()
    return age;
}

function getEmail(page: Page, firstname: string){
    const x = page.locator("//table/tbody/tr/td[contains(text)(),'"+firstname+"')]/../td[4]").textContent()
    return x;
}
