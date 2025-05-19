import { test, expect } from '@playwright/test';

test.describe ('NewTestCases', () => {

    test('visit link to browser' , async  ({ page }) => {
         await page.goto ('https://demoblaze.com/');
         await expect(page).toHaveTitle(/STORE/);
         
        });
       
    test('visit Detail page of product' , async  ({ page }) => {
        await page.goto ('https://demoblaze.com/index.html');
        await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();      
        await page.getByRole('link', { name: 'Home (current)' }).click();
        await page.getByRole('link', { name: 'Samsung galaxy s6' }).click(); 
      expect(page.url()).toBe('https://demoblaze.com/prod.html?idp_=1');
           });

    
    
    });
