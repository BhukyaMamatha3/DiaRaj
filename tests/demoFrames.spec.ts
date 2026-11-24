import {test, expect} from "@playwright/test"

test("fasd", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/practice.html#section-frame-counting");

    const allFrames = await page.frames();

    console.log(allFrames);

    console.log('Total frames:', allFrames.length);

      for (const frame of allFrames) {

        console.log('Frame URL:', frame.url());

        console.log('Frame Name:', frame.name());

    }

     const childFrames = allFrames.filter(
        frame => frame !== page.mainFrame()
    );

     for (let i = 0; i < childFrames.length; i++) {

        const frame = childFrames[i];

        console.log(`Frame ${i + 1} URL:`, frame.url());

        const frameText = await frame.locator('body').innerText();

        console.log(`Frame ${i + 1} Content:\n`, frameText);

        // STEP 4: Search for PW101
        if (frameText.includes('PW101')) {

            console.log('PW101 found in Frame:', i + 1);

            console.log('Flight Details:', frameText);

            expect(frameText).toContain('PW101');
        }  
    }

//    const myframe =  page.frameLocator("flight-status");
//    myframe.locator

})