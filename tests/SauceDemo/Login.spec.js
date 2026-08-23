const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

//All saucedemo accounts shared thesame password
const VALID_PASSWORD ='secret_sauce';

test.describe('Saucedemo - Login', () => {
  let loginPage;
 
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

test('Login with valid credential', async ({page}) => {
  await loginPage.login('standard_user', VALID_PASSWORD);

  await expect(page).toHaveURL(/.*inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');

});

test('Login with invalid credential', async ({page}) => {
 
  await loginPage.login('wrongEmailuser', 'wrong123');

  await loginPage.expectLoginError("Epic sadface: Username and password do not match any user in this service");

});

});