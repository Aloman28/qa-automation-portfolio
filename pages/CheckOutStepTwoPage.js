const { expect } = require('@playwright/test');

class CheckOutStepTwoPage {
  constructor(page) {
    this.page = page;

    this.finishButton = page.locator('[data-test="finish"]');
    this.checOutPageTitle = page.locator(".title",{ name: 'Checkout: Your Information'});
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/checkout-step-two.html');
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
   
}
 
module.exports = { CheckOutStepTwoPage };
 