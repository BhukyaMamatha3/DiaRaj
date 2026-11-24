import test from "@playwright/test";

const URL ="https://demoqa.com/buttons";

test('verify click me button', async({page}) =>{
await page.goto(URL);
await page.getByRole("button", {name: "Click Me"});
const ClickButton = page.locator('#id="8qZrr"');
const displayText =await page.locator("[id='dynamicClickMessage']").textContent();
console.log("displayText: "+displayText);
//await ClickButton.click({ button: 'Click Me'});
})

