const { expect } = require('@playwright/test');

class CheckOutStepOnePage {
  constructor(page) {
    this.page = page;

    this.firstNameField = page.getByRole('textbox',{ name: 'Username'});
    this.lastNameField = page.getByRole('textbox',{ name: 'Last Name'});
    this.postalCodeField = page.getByRole('textbox',{ name: 'Postal Code'});
    this.continueButton = page.getByRole('button', { name: 'Continue' });
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
 