const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;

    this.CheckoutButton = page.locator('[data-test="checkout"]');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
  }

  async Checkout() {
    await this.CheckoutButton.click();
  }
   
}
 
module.exports = { CartPage };