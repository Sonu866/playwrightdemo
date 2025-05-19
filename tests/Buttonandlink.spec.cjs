import { test, expect } from '@playwright/test';

test('Get list of buttons and their names on multidots.com', async ({ page }) => {
    await page.goto('https://www.multidots.com/');

      
        // Locate all button elements on the page
        const buttons = page.locator('button');
      
        // Get the number of buttons
        const buttonCount = await buttons.count();
        console.log(`Number of buttons on the page: ${buttonCount}`);
      
        // Loop through each button and log its text content
        for (let i = 0; i < buttonCount; i++) {
          const buttonText = await buttons.nth(i).textContent();
          console.log(`Button ${i + 1}: ${buttonText?.trim()}`);
        }
      });
