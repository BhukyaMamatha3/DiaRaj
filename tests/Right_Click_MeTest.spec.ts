import test from "@playwright/test";

const URL ="https://demoqa.com/buttons";

test('verify right click button', async({page}) =>{
await page.goto(URL);
await page.getByRole("button", {name: "Right Click Me"});
const rightClickButton = page.locator('#rightClickBtn');
const displayText =await page.locator("[id='rightClickMessage']").textContent();
console.log("displayText: "+displayText);
await rightClickButton.click({ button: 'right' });
})

