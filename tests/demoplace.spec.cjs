import {test,expect} from '@playwright/test' ;


test.describe ('demoblaze website testcases', () => { 

    test.beforeEach (async ({ page }) => {

    await page.goto('https://demoblaze.com/');
    });

    test('should have the correct title', async ({ page }) => {
        await expect(page).toHaveTitle('STORE');
    });
    
    test ('Check page title', async ({page}) => { 

        const pageTitle1 = await page.title () ; 
        await expect(page).toHaveTitle('STORE');
        //expect(pageTitle1).toBe('STORE');
        console.log('page title is :', pageTitle1);
        
    });
   
    test ('Check URL', async ({page}) => {
       
        const pageURL = page.url ();
        console.log ('page URL is:', pageURL);
    });

    test ('Validate URL', async ({page}) => {

       await expect(page).toHaveURL ('https://demoblaze.com/');
    });
    
    test ('locator', async ({page}) => { 

    await page.locator ('id=cartur').click ();
    //await page.click ('id= cartur');
    });
   
    test ('cart locator', async ({page}) => { 

        const cart = page.locator ('id=cartur');
        await cart.click(); 
        await cart.isVisible();
    });

    test('h4 visibility', async ({ page }) => { 
        
        await page.waitForLoadState('domcontentloaded');
      
        // Check if the first <h4> element is visible
        const isH4Visible = await page.locator('h4').nth(0).isVisible();
        
        // Log the visibility status of the h4 element
        console.log('Is h4 visible:', isH4Visible);
        
        // Optionally, check if the first <h4> element contains text
        const h4Text = await page.locator('h4').nth(0).textContent();
        console.log('h4 text:', h4Text?.trim()); // Trim whitespace for cleaner output
      });

      test('Category Tab Change and Search Result', async ({ page }) => {
        // Step 1: Navigate to the website
        await page.goto('https://www.demoblaze.com/#');
        
        // Step 2: Select and click on a category tab (e.g., "Phones")
        const phonesTab = page.locator('a:has-text("Phones")');
        await phonesTab.click();
      });

      test('Use tag name locator on demoblaze.com', async ({ page }) => {
        // Navigate to the site
        await page.goto('https://demoblaze.com');
      
        // Locate all <h4> tags (these are used for product titles on the homepage)
        const titles = page.locator('h4');
      
        // Print the text of each h4 element (limit to first 3 for demo)
        const count = await titles.count();
        for (let i = 0; i < Math.min(count, 3); i++) {
          console.log(await titles.nth(i).textContent());
        }
      
        // Check if at least one h4 is visible
        await expect(titles.first()).toBeVisible();
      
        // Click the first product link (wrapped in an <a> tag under a card block)
        const firstProductLink = page.locator('a.hrefch').first();
        await firstProductLink.click();
      
        // Wait for the product page to load and check for the presence of an image tag
        await expect(page.locator('img')).toBeVisible();
      });

      test('Get all divs', async ({ page }) => {
        await page.goto('https://demoblaze.com');
      
        // Select all div elements
        const divs = page.locator('div');
      
        // Count them
        const count = await divs.count();
        console.log(`Total <div> elements: ${count}`);
      
        // Log the text of the first div
        const firstDivText = await divs.first().textContent();
        console.log('First div text:', firstDivText?.trim());
      });
});