const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.only('Login with valid credentials', async ({page}) => {

  const userName = 'standard_user';
  const password = 'secret_sauce';

  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('textbox',{ name: 'username'}).fill(userName);
  await page.getByRole('textbox',{ name: 'Password'}).fill(password);
  await page.getByRole('button', {name: 'Login'}).click();
  //await page.waitForLoadState('networkidle');
  await expect(page).toHaveTitle('Swag Labs');
});


test('Login with valid credentials POM', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

});

test('Login with invalid credentials POM', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wrongEmailuser', 'wrong123');

  await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();

});