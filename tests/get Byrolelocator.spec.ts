import { test, expect } from '@playwright/test';

test('login using getByrole', async ({ page }) => {
await page.goto('https://www.qapractice.com/practice-login-form');

//fill email accessible label
await page.getByRole('textbox',{name:"Email Address"}).fill('user@premiumbank.com');

//fill password
await page.getByRole('textbox',{name:"password"}).fill('sab@123');

//checkbox
await page.getByRole('textbox',{name:"Remember me"}).check();

// click sign in 
await page.getByRole('button',{name:"sign in"}).click();

//verify successfil login
await expect(page.getByText(/Login Successful/)).toBeVisible();








});
