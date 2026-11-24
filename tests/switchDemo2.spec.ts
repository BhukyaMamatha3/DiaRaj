import { test } from '@playwright/test'

test('verify switch case with weeks', async({page})=>{

    let weekday = "wednesday";
    switch(weekday){
        case 'Monday' :console.log("today is monday");
        break;
        case 'Tuesday': console.log("today is tuesday");
        break;
        case 'Wednesday' : console.log("today is wednesday");
        break;
        case 'Thursday': console.log("today is Thursday");
        break;
        case 'Friday': console.log("today is friday");
        break;
        case 'saturday': console.log("today is saturday");
        break;
        default: console.log("today is sunday");
        break;

    }

    



});