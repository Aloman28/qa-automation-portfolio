const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');


test.only('Add to cart and checkout', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

    await expect(page.locator('[data-test="secondary-header"]')).toHaveText('ProductsName (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)');

    // Add the first item to the cart
    await page.getByText('Sauce Labs Backpack').click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    // Go to the cart
    await page.getByTestId('shopping-cart-link').click();
    await expect(page).toHaveURL('/cart.html');

    // Proceed to checkout




 
});