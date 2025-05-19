import { test, expect } from '@playwright/test';

test('Test H1 title', async ({ page }) => {
    await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html '); 
});
