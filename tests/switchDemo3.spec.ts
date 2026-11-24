import { test } from '@playwright/test'

test('Select payment method', async ({ page }) => {

    await page.goto('https://example.com');

    let paymentMethod = 'Deddbit Card';

    switch (paymentMethod) {

        case 'UPI':
            console.log("using upi paymethod")
            break;

        case 'Credit Card':
            console.log("using creadit card paymethod")
            break;

        case 'Debit Card':
            console.log("using debit card paymethod")
            break;

        case 'Net Banking':
            console.log("using netbannking paymethod")
            break;

        default:
            console.log('Invalid payment method');
    }
//
    if(paymentMethod == 'UPI'){
        console.log("using upi paymethod")
    }else if(paymentMethod == 'Credit Card'){
         console.log("using creadit card paymethod")
    }else if(paymentMethod == 'Debit Card'){
         console.log("using debit card paymethod")
    }else if(paymentMethod == 'Net Banking'){
        console.log("using netbannking paymethod")
    }else{
        console.log('Invalid payment method');
    }
//
});