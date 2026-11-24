import{test} from "@playwright/test"

test('print all the links from singin popup', async({page})=>{

    await page.goto("https://www.amazon.in/");


    const signinLocator = "#nav-tools #nav-link-accountList";

    await page.locator(signinLocator).hover();

    const a = await page.locator("#nav-al-container  #nav-al-your-account > ul > li").allTextContents();

    console.log("all text from singin popup - your account : "+a)


    const b = await page.locator("#nav-al-container  #nav-al-your-account > ul > li").allInnerTexts();

    console.log("all text from singin popup - your account by using inner text : "+b)

    for (let i = 0; i < a.length; i++) {
    console.log(`${i + 1}. ${a[i]}`);
}

//span[text()='MSAF Bio Organics Epsom Salt for Plants 1 Kg | Magnesium Sulphate Fertilizer | 100% Water Soluble | Boosts Growth, Greener Leaves, Flowering & Fruiting | For Roses, Tomat…']
    
//span[text()='MSAF Bio Organics Epsom Salt for Plants 1 Kg | Magnesium Sulphate Fertilizer | 100% Water Soluble | Boosts Growth, Greener Leaves, Flowering & Fruiting | For Roses, Tomat…']/ancestor::div[@class="sc-list-item-content"]//div[@class="a-declarative"]
//span[text()='Dharti Crop Sciences Neem Khali Fertilizer for Plants - Natural Neem Cake Powder for Soil Enrichment, Pest Control & Strong Root Growth - 1 KG']/../../../../../../../..//div[@class="a-declarative"]

//span[text()='Dharti Crop Sciences Neem Khali Fertilizer for Plants - Natural Neem Cake Powder for Soil Enrichment, Pest Control & Strong Root Growth - 1 KG']/ancestor::div[@class="sc-list-item-content"]//div[@class="a-declarative"]





// for (const text of a) {
    //     console.log(text);

    //div[@class="a-declarative"]
    // }

//  //div[@id='nav-al-container']/div[@id='nav-al-your-account']/ul/li[2]/a
//  #nav-al-container  #nav-al-your-account ul li:nth-child(2) a


//Your Account,Your Orders,Your Wish List,Keep shopping for,Your Recommendations,Your Prime Membership,Your Prime Video,Your Subscribe & Save Items,Memberships & Subscriptions,Your Seller Account,Manage Your Content and Devices,Your Music Library,Register for a free Business Account


//.                    all text from singin popup - your account : Your Account,Your Orders,Your Wish List,Keep shopping for,Your Recommendations,Your Prime Membership,Your Prime Video,Your Subscribe & Save Items,Memberships & Subscriptions,Your Seller Account,Manage Your Content and Devices,Your Music Library,Register for a free Business Account
// all text from singin popup - your account by using inner text : Your Account,Your Orders,Your Wish List,Keep shopping for,Your Recommendations,Your Prime Membership,Your Prime Video,Your Subscribe & Save Items,Memberships & Subscriptions,Your Seller Account,Manage Your Content and Devices,Your Music Library,Register for a free Business Account



   await page.waitForTimeout(10000)

})