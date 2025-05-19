import {test,expec, expect} from '@playwright/test' ;
import { link } from 'fs';

test.describe('automationexercise website all testcases', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://automationexercise.com/');
    });

    test('should have the correct title', async ({ page }) => {
        await expect(page).toHaveTitle('Automation Exercise');
    });
    
    test('should display the company logo', async ({ page }) => {
        const logo = page.getByRole('img', { name: 'Website for automation practice' });
        await expect(logo).toBeVisible(); 
    });
    
    test('Login link in header', async ({ page }) => {
    const loginLink = page.locator('a[href="/login"]');
    await loginLink.click();
    });

    test('TestCases button', async({page}) => {

    const Testcasesbutton = page.getByRole ('button', {name: 'Test Cases'});
    await expect(Testcasesbutton).toBeVisible();
    await Testcasesbutton.click();
    await expect(page).toHaveURL(/.*test_cases/);
    });


    test('Signup link in header', async ({ page }) => {
        //const loginLink = page.locator('a[href="/login"]');
        //await loginLink.click();
        await page.getByRole('link',{name: ' Signup / Login'}).click();
        });
    
    test('cart link in header', async ({ page }) => {
        
        await page.getByRole('link', { name: 'Cart' }).click();
    });

    test ('Login page',async ({ page }) => {

    await page.getByRole('link',{name: ' Signup / Login'}).click();
    
    await expect(page).toHaveURL(/.*login/);
    });

    test('check all images for alt text', async ({ page }) => {
        
        const images = page.locator('img');  // Locate all images
        
        const imageCount = await images.count();  // Get the count of images
        
        console.log(`Total images found: ${imageCount}`);
        
        // Loop through each image and check for alt text
        for (let i = 0; i < imageCount; i++) {
          const altText = await images.nth(i).getAttribute('alt');
          expect(altText).not.toBeNull();  // Ensure alt text is present
          expect(altText).not.toBe('');    // Ensure alt text is not empty
        }
    }); 

    
    
    test('scroll automatically to bottom and click Scroll Up button on automationexercise.com', async ({ page }) => {
    
      
        // Scroll down by a large amount to trigger the "Scroll Up" button
        await page.mouse.wheel(0, 3000); // big scroll down
        await page.waitForTimeout(1000); // wait a bit for UI updates
      
        // Hover on the Scroll Up button (optional, depends if you want hover effect)
        const scrollUpButton = page.locator('a[href="#top"]');
        await scrollUpButton.hover();
      
        // Click the Scroll Up button
        await scrollUpButton.click();
      
        // Optional: wait for scroll animation to top
        await page.waitForTimeout(1000);
      
        // Verify that the top section is visible again
        await expect(page.locator('div.item.active > .col-sm-6 > h2')).toHaveText('Full-Fledged practice website for Automation Engineers');
      });

      test('Dropdown', async ({ page }) => {

        await page.goto('https://demo.guru99.com/test/newtours/register.php');

  // Select 'ALGERIA' by its value attribute
       await page.selectOption('select[name="country"]', 'ALGERIA');

  // Optional: Verify the selected value
       const selected = await page.$eval('select[name="country"]', el => el.value);
       expect(selected).toBe('ALGERIA');
      });

      test('Select an option from a Select2 custom dropdown', async ({ page }) => {
        // Visit the demo page
        await page.goto('https://select2.org/data-sources/ajax');
});

test('Select car brand from native dropdown on W3Schools', async ({ page }) => {
    // Go to the iframe demo page
    await page.goto('https://atlaskit.atlassian.com/packages/design-system/dropdown-menu/example/stateless-dropdown-menu');
  
    // Switch to the iframe containing the dropdown
    const frame = page.frameLocator('#iframeResult');
  
    // Select an option from the native dropdown
    await frame.locator('select#examples').selectOption('sydney');
  
    // Assert that the selected value is correct
    const selectedValue = await frame.locator('select#examples').inputValue();
    expect(selectedValue).toBe('sydney');
  });

  test ('H2 title', async ({page}) => {
    
    await page.goto ('https://automationexercise.com/');
    const title = await page.locator ('h2 : has-text ("Category")') .textContent();
    console.log(title);

  });
});