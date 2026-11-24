import {loginPage} from "./loginPage";
import {test,  expect} from '@playwright/test';


test('fasdfasd', async({page})=>{
const lp = new loginPage();

lp.loginTest("bavya", "bavya123");

lp.loginTest("mamatha", "mamatha123");


})