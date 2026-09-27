const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckOutStepOnePage } = require('../../pages/CheckOutStepOnePage');
const { CheckOutStepTwoPage } = require('../../pages/CheckOutStepTwoPage');

test.describe('Saucedemo - Checkout', () => {
  test('Add to cart and checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkOutStepOnePage = new CheckOutStepOnePage(page);
    const checkOutStepTwoPage = new CheckOutStepTwoPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.expectOnProductsPage();
 
    // Add the first item to the cart
    await productsPage.addToCartByName('Sauce Labs Backpack');

    // Proceed to checkout
    await productsPage.goToCart();
    await cartPage.Checkout();
    await checkOutStepOnePage.continueCheckout('John', 'Doe', '12345');
    await checkOutStepTwoPage.finishCheckout();
    await expect(page).toHaveURL(/.*checkout-complete\.html$/);
    await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
    
  });
});