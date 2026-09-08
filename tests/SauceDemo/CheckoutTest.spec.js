const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');
const { CheckOutStepOnePage } = require('../../pages/CheckOutStepOnePage');

test.describe('Saucedemo - Checkout', () => {
  test('Add to cart and checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkOutStepOnePage = new CheckOutStepOnePage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.expectOnProductsPage();
 
    // Add the first item to the cart
    await productsPage.addToCartByName('Sauce Labs Backpack');

    // Proceed to checkout
    await productsPage.goToCart();
    await page.locator('[data-test="checkout"]').click();
    await checkOutStepOnePage.continueCheckout('John', 'Doe', '12345');
  });
});