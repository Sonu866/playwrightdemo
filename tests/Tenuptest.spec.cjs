import { test, expect } from '@playwright/test';



test.describe('10up.com Website Tests', () => {

  test('Page title should contain "10up"', async ({ page }) => {
    await page.goto('https://10up.com/');
    await expect(page).toHaveTitle(/10up/);  // Regex match
  });


test('home page',async({page}) =>{

   await page.goto('https://10up.com/');
  const locator = page.getByRole('button', { name: 'WATCH VIDEO' });

  await locator.hover();
  await locator.click();

});

test('Use page, context, and browser', async ({ page, context, browser }) => {
  // Use `page` to go to a site
  await page.goto('https://10up.com');
  await expect(page).toHaveTitle(/10up/);

  // Use `context` to create a new tab (separate from current one)
  const newPage = await context.newPage();
  await newPage.goto('https://example.com');
  await expect(newPage).toHaveTitle(/Example/);

});



test('Open and check multiple pages', async ({ context }) => {
  const urls = ['https://example.com', 'https://10up.com', 'https://playwright.dev'];
  
  for (const url of urls) {
    const page = await context.newPage();
    await page.goto(url);
    console.log(`Opened: ${url}`);
    await page.close();
  }
});
test('Submit popup form on multidots.com', async ({ page }) => {
  // Step 1: Navigate to the Multidots website
  await page.goto('https://www.multidots.com/');
  await page.waitForTimeout(5000);
  const modal = page.locator('#popup-72027');
  const emailInput = page.locator('#mdinc-popup-form-email');

  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('jhon200@gmail.com');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#page').getByRole('button', { name: 'Read Now' }).click();
  const page1 = await page1Promise;

 
});

test('logo on multidots.com', async ({ page }) => {
  // Step 1: Navigate to the Multidots website
  await page.goto('https://www.multidots.com/');
  
  const logo = page.locator('.header-animation-logo'); // or '.site-logo' 
});

test('Loop through Services submenu items on Multidots', async ({ page }) => {
  
  await page.goto('https://www.multidots.com/');
  
  await page.getByRole('link', { name: 'Read Ask Media Case Study'}).click();
  await page.getByRole('link', { name: 'Read Foursquare Case Study' }).click();
  await page.getByRole('link', { name: 'Core Web Vitals' }).click();
  await page.getByLabel('Primary Menu').getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Updates$/ }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('Primary Menu').getByRole('link', { name: 'Newsletter' }).click();
  const page1 = await page1Promise;
  await page.getByLabel('Primary Menu').getByRole('link', { name: 'Tools' }).click();
  await page.getByText('Enterprise WordPressArtificial Intelligence (AI)Headless WordPressCore Web').click();
  await page.getByText('Enterprise Solutions').click();
  await page.getByLabel('Primary Menu').getByRole('link', { name: 'Enterprise WordPress' }).click();

});


test('Loop through Services submenu items on Multidots12', async ({ page }) => {
  await page.goto('https://www.multidots.com/');
  await page.waitForTimeout(5000);
  const modal = page.locator('# mdinc-main-modal mdinc-download-file-user-form 72027 popup-72027');
  //const emailInput = page.locator('#mdinc-popup-form-email');
  await page.click('#mdinc-modal-close-btn');

});

test('Close popup modal on Multidots.com', async ({ page }) => {
  await page.goto('https://www.multidots.com/');
  await page.waitForTimeout(5000); // Give time for modal to appear

  const closeBtn = page.locator('#mdinc-modal-close-btn');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
    console.log('Popup closed successfully.');
  } else {
    console.log('Popup not visible.');
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
  await page.getByRole('combobox').selectOption('ALB');
  await page.getByRole('combobox').selectOption('AGO');
  await page.getByRole('combobox').selectOption('AZE');
  await page.locator('div').filter({ hasText: /^Select country from below drop down list:$/ }).click();
  await page.getByText('Select country from below').click();
  await page.getByRole('tab', { name: 'Select Country' }).click();
  await page.getByText('Select country from below').click();
  await page.getByRole('combobox').selectOption('DZA');
});

test('select multiple countries dynamically from Select2 dropdown', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

  // Access the iframe containing the dropdown
  const frame = page.frameLocator('iframe[data-src*="select-dropdown-menu"]');

  // List of countries to select
  const countriesToSelect = ['Albania', 'Algeria', 'Angola'];

  for (const country of countriesToSelect) {
    // Click to open the dropdown each time (required for Select2)
    await frame.locator('.select2-selection').click();

    // Wait for dropdown options to appear
    await frame.locator('.select2-results__option').first().waitFor();

    // Click the option matching the country name
    await frame.locator('.select2-results__option', { hasText: country }).click();

    // Optional small delay for UI stability
    await page.waitForTimeout(300);
  }

  // Verify the final selected value (only the last one is shown in this case)
  const selectedText = await frame.locator('.select2-selection__rendered').textContent();
  expect(selectedText).toContain(countriesToSelect[countriesToSelect.length - 1]);
});

test('test1', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/'); 

  const values = ['ALB', 'DZA', 'AND'];

for (const value of values) {
  await page.selectOption('select#country', value);
  await page.waitForTimeout(1000); // optional delay for stability
}
});

                                               /// h1 to H6 title /////

test('Extract all heading texts (h1 to h3)', async ({ page }) => {
  await page.goto('https://www.multidots.com/');

  // Combine h1, h2, h3 selectors
  const headings = page.locator('h1, h2, h3');
  const count = await headings.count();

  for (let i = 0; i < count; i++) {
    const text = await headings.nth(i).textContent();
    console.log(`Heading ${i + 1}:`, text?.trim());
  }
 
});
  

test('buttons', async ({ page }) => {
  await page.goto('https://www.multidots.com/');

  const buttons = page.locator('button');
  const count = await buttons.count();
  console.log(`Total buttons found: ${count}`);

  // Optional: log each button's text
  for (let i = 0; i < count; i++) {
    const text = await buttons.nth(i).textContent();
    console.log(`Button ${i + 1}:`, text?.trim());
  }
});

test('Log all h2 contents', async ({ page }) => {
  await page.goto('https://www.multidots.com/');

  const texts = await page.locator('h2').allTextContents();
  console.log('Total <h2> elements:', texts.length);

  texts.forEach((text, index) => {
    console.log(`H2 #${index + 1}: ${text?.trim()}`);
  });
});

test('h2 title', async ({ page }) => {
  await page.goto('https://www.multidots.com/');

  // Get the second h2 element (index 1)
  const h2title = await page.locator('h2').nth(1).textContent();

  console.log('h2 title:', h2title?.trim());
});

test('h1 title', async({page}) => {

await page.goto('https://www.multidots.com/');
const titletext = await page.locator('h1').textContent();
const h1title = await page.locator('h1').isVisible();
console.log('Is h1 visible:',h1title);
console.log('H1 title:',titletext);

});


test('Check Website Development Tab', async ({ page }) => {
  await page.goto('https://www.multidots.com/');
  await page.getByRole('link', { name: 'WordPress Migration' }).click();
  const tab = page.locator('text= WordPress Migration');
  await expect(tab).toHaveClass(/md-tab-head/);

});
test('Submit banner email form and verify success', async ({ page }) => {
  await page.goto('https://www.multidots.com/');

  // Fill the email input field
  await page.locator('input[name="banner-form-email"]').fill('mehuljetani111@gmail.com');

  // Click the submit button (adjust the selector as needed)
  await page.locator('button[type="submit"]').click();
  // Wait for a confirmation or success message (adjust based on actual message)
  const successMessage = page.locator('.form-success-message, .wpcf7-response-output');
  await expect(successMessage).toBeVisible();
});

test('Submit banner email form', async ({ page }) => {
  await page.goto('https://www.multidots.com/');
  await page.getByRole('textbox', { name: 'Email Email Email Email Email' }).click();
  await page.getByRole('textbox', { name: 'Email Email Email Email Email' }).fill('donec.tempor@icloud.ca');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Download Now' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://drive.google.com/file/d/1r4oFtqw9CjF8MafMczMJXezeyZHxqBZ8/view');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Download Now' }).click();
  const page2 = await page2Promise;
});
});