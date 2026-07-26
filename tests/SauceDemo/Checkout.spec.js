const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.only('Add to cart and checkout', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('dprime@gmail.com', 'JakBar19!');

  await page.waitForURL('https://sauce-demo.myshopify.com/');

  await page.getByRole('link', {name: 'Grey jacket Grey jacket £'}).click();
  await page.getByRole('button', {name: 'Add to cart'}).click();
  await page.getByRole('link', {name: 'Checkout'}).click();

  await expect(page.getByRole('link', { name: 'Grey jacket - Grey jacket' })).toBeVisible();
  await page.getByRole('button', {name: 'Check Out'}).click();

  await expect(page.getByRole('heading', { name: 'Checkout - Sauce Demo' })).toBeVisible();

 
});