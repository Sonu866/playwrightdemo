// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://10up.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/10up/);
});

test('test default and custom roles on example.html', async ({ page }) => {
  await page.goto('http://localhost:3000/example.html');

  // Default elements
  const submitButton = page.getByRole('button', { name: 'Submit' });
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  const link = page.getByRole('link', { name: 'Go to Example' });
  await expect(link).toHaveAttribute('href', 'https://example.com');

  const textBox = page.getByRole('textbox', { name: /name/i });
  await textBox.fill('John Doe');

  // Custom button (div with role=button)
  const customButton = page.getByRole('button', { name: 'Custom Button' });
  await expect(customButton).toBeVisible();
  await customButton.click();

});


  test('should check that all images have alt text', async ({ page }) => {
      // Go to the target website
      await page.goto('https://automationexercise.com/'); // Replace with your website URL
    
      // Find all image elements
      const images = await page.locator('img');
    
      // Check if each image has an alt attribute and it's not empty
      const count = await images.count();
      
      for (let i = 0; i < count; i++) {
        const altText = await images.nth(i).getAttribute('alt');
        //const isVisible = await images.nth(i).isVisible();
        
        expect(altText).not.toBeNull(); // Make sure alt text is present
        expect(altText).not.toBe(''); 
        //expect(isVisible).toBe(true); // Ensure alt text is not empty
      }
    
      console.log(`Checked ${count} images for alt text.`);

      
    });


