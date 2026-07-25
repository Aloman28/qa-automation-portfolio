const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test('Login with valid credentials', async ({page}) => {

  const EmailAddress = 'dprime@gmail.com';
  const Password = 'JakBar19!';

  await page.goto('https://sauce-demo.myshopify.com/account/login');
  await page.getByRole('textbox',{ name: 'Email Address'}).fill(EmailAddress);
  await page.getByRole('textbox',{ name: 'Password'}).fill(Password);
  await page.getByRole('button', {name: 'Sign In'}).click();
  //await page.waitForLoadState('networkidle');
  await expect(page).toHaveTitle('Account – Sauce Demo');
});


test.only ('Login with valid credentials POM test', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('dprime@gmail.com', 'JakBar19!');

  await expect(page).toHaveTitle('Account – Sauce Demo');
});