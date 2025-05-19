const {test,expect} = require('@playwright/test');
import fs from 'fs';

test('Add and read cookie on live site', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
  
    // 1. Go to live website
    await page.goto('https://httpbin.org/cookies');
  
    // 2. Add a cookie manually
    await context.addCookies([
      {
        name: 'username',
        value: 'sonali',
        domain: 'httpbin.org',
        path: '/',
        httpOnly: false,
        secure: true,
        sameSite: 'Lax',
      },
    ]);
  
    // 3. Refresh the page to reflect cookies
    await page.reload();
  
    // 4. Get and print cookies
    const cookies = await context.cookies();
    console.log('Cookies:', cookies);
  
    // 5. Optional: Verify using page content
    const content = await page.textContent('body');
    console.log('Page content:', content);
  
    // Optional Assertion
    expect(content).toContain('"username": "sonali"');
  });

  

test('Login and save localStorage state', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com');

  // Fill login details
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Wait for redirect
  await page.waitForURL('**/inventory.html');

  // Save localStorage data to file
  const storage = await page.evaluate(() => {
    return JSON.stringify(localStorage);
  });
  fs.writeFileSync('localStorageState.json', storage);

  await context.close();
});

test('Handle popup window (new tab)', async ({ page, context }) => {
  // सही URL पर जाएं
  await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open');

  const page3Promise = page.waitForEvent('popup');
  await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Try it' }).click();
  const page3 = await page3Promise;
  const frame = page.frameLocator('iframe[title="Iframe Example"]');

  // Popup का title print करो
  console.log('Popup title:', await popup.title());
});