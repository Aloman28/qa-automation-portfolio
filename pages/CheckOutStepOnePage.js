const { expect } = require('@playwright/test');

class CheckOutStepOnePage {
  constructor(page) {
    this.page = page;

    this.firstNameField = page.locator('[data-test="firstName"]');
    this.lastNameField = page.locator('[data-test="lastName"]');
    this.postalCodeField = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async continueCheckout(firstName, lastName, postalCode) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
    await this.continueButton.click();
  }

   
}
 
module.exports = { CheckOutStepOnePage };
 