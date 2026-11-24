import {test, expect} from "@playwright/test"

test("handle frames", async({page})=>{

    await page.goto("https://demoqa.com/frames");

    await page.waitForTimeout(3000);

    const frames = await page.frames();
    console.log(frames.length);

    const frame1 = await page.frameLocator("#frame1");

    const text1 = await frame1.locator('[id="sampleHeading"]').innerText();

    console.log("Print text from frame1 : "+text1)

     const frame2 = await page.frameLocator("#frame2");

     const frame2_child1frame = await frame2.frameLocator("#childfrmae1")


     const text2 = await frame2.locator('[id="sampleHeading"]').innerText();

     console.log("Print text from frame2 : "+text2)


     const frame3 = page.frameLocator("#frame3")





})