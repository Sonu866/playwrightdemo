import { test, expect } from '@playwright/test';

test('Test Alert dialogbox', async ({ page }) => {
    await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html ');



  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Show alert box' }).click();
});


test('Test CONFIRM dialogbox', async ({ page }) => {
  await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');

  // Handle the confirm dialog
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();  // Simulates clicking "Cancel"
  });

  // Click the "Show confirm box" button
  await page.getByRole('button', { name: 'Show confirm box' }).click();

  // Verify that the result of clicking "Cancel" is reflected in the page text
  await expect(page.locator('#confirmreturn')).toContainText("false");
});

test('Test Prompt dialogbox', async ({ page }) => {
  await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');

  // Handle the confirm dialog
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept('sonali');  // Enter 'sonali' into the prompt
  });

  await page.getByRole('button', {name:'Show prompt box'}).click();

  // Verify that the result of clicking "Cancel" is reflected in the page text
  await expect(page.locator('#promptreturn')).toContainText("sonali");
});


test ("Multidots modal popup", async ({page}) => {

 await page.goto('https://www.multidots.com/');
 // await page.locator('button:has-text("Read Now")').click();
 await page.getByRole('button', {name:'Read Now'}).click();


});