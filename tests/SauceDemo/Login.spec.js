const {test, expect} = require('@playwright/test');

test('Login with valid credentials', async ({page}) => {

  const EmailAddress = 'dprime@gmail.com';
  const Password = 'JakBar19!';

  await page.goto('https://sauce-demo.myshopify.com/account/login');
  await page.getByRole('textbox',{ name: 'Email Address'}).fill('EmailAddress');
  await page.getByRole('textbox',{ name: 'Password'}).fill('Password');
  await page.getByRole('button', {name: 'Sign In'}).click();
  //await page.waitForLoadState('networkidle');
  await expect(page).toHaveTitle('Account – Sauce Demo');
});