const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');

test.describe('Saucedemo - Add to cart', () => {
  test('Add to cart and checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
 
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.expectOnProductsPage();
 
    // Add the first item to the cart
    await productsPage.addToCartByName('Sauce Labs Backpack');
 
    // Go to the cart
    await expect(productsPage.cartBadge).toHaveText('1');
 
    // Proceed to checkout
    await productsPage.goToCart();
  });
});