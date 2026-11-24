

import { Page, Locator } from "@playwright/test";

export class constructorPage {

//  page: Page;
//     loginBtn: Locator;
//     username: Locator;
//     password: Locator;
//     submitBtn: Locator;

    constructor(page: Page){
        console.log("I am constructor.............")

        // this.page = page;

        // this.loginBtn = page.getByRole('link', { name: "Login" }).first();

        // this.username = page.getByLabel("Username or email");

        // this.password = page.getByLabel("Password").nth(1);

        // this.submitBtn = page.getByTestId("login-submit-button");

    }

    async testMethod(){
        console.log("I am method.................")
    }

    //  async clickLogin() {
    //     await this.loginBtn.click();
    // }

    // async loginLinkLocator(page:Page){
    //      const loginBtn = page.getByRole('link', { name: "Login" }).first();

    // }

    // async emailLocator(page:Page, uname:string){
    //      const username = page.getByLabel("Username or email");
    //      username.fill(uname);
    // }
    
     


}