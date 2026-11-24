import { test, expect } from '@playwright/test';


test('Switch case with browser', async ({ page, browserName }) => {
console.log("Browser name:", browserName);
    switch (browserName) {

        case 'chromium':
            console.log("Running in Chrome browser");
            break;

        case 'firefox':
            console.log("Running in Firefox browser");
            break;

        case 'webkit':
            console.log("Running in Safari browser");
            break;

        default:
            console.log("Unknown browser");
    }

}); 